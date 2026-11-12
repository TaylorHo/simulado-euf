<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Camera, ImageUp, X } from '@lucide/svelte';
	import { OMR, type RectificationResult } from 'omrjs';
	import { OMR_CONFIG, OMR_DATA, parseOmrResult, type ScanResult } from '#lib/config/omr.ts';
	import { downloadRaster } from '#lib/utils/debugImage.ts';
	import { startCamera, stopStream } from '#lib/utils/camera.ts';

	interface Props {
		onScanned: (result: ScanResult) => void;
		onCancel: () => void;
	}

	let { onScanned, onCancel }: Props = $props();

	const MAX_SIDE = 2400;
	// Temporary: enabled in production too for testing. Restore to `import.meta.env.DEV` (or remove) later.
	const canDebug = true;
	let debug = $state(false);
	const omr = $derived(new OMR(OMR_DATA, { ...OMR_CONFIG, debug }));

	let videoElement: HTMLVideoElement | undefined = $state();
	let stream: MediaStream | null = null;
	let isReady = $state(false);
	let isProcessing = $state(false);
	let errorMessage = $state('');

	$effect(() => {
		if (videoElement && !stream) initCamera();
	});

	async function initCamera() {
		errorMessage = '';
		try {
			if (videoElement) {
				stream = await startCamera(videoElement, { width: 3840, height: 2160 });
				isReady = true;
			}
		} catch (error) {
			errorMessage = 'Erro ao acessar a câmera. Verifique as permissões ou envie uma foto.';
			console.error(error);
		}
	}

	onDestroy(() => stopStream(stream));

	/** Draws any image source downscaled to MAX_SIDE and runs omrjs on its pixels. */
	async function scan(source: CanvasImageSource, width: number, height: number) {
		isProcessing = true;
		errorMessage = '';
		try {
			const scale = Math.min(1, MAX_SIDE / Math.max(width, height));
			const canvas = document.createElement('canvas');
			canvas.width = Math.round(width * scale);
			canvas.height = Math.round(height * scale);
			const ctx = canvas.getContext('2d', { willReadFrequently: true });
			if (!ctx) throw new Error('canvas');
			ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
			const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
			const result = await omr.process(data, canvas.width, canvas.height);
			if (debug && result.debug) downloadRaster(result.debug.gridImage);
			onScanned(parseOmrResult(result));
		} catch (error) {
			console.error(error);
			const inspection = (error as { inspection?: RectificationResult }).inspection;
			if (debug && inspection) downloadRaster(inspection.gridImage);
			errorMessage = 'Não foi possível processar a imagem da folha de respostas.';
			isProcessing = false;
		}
	}

	function capturePhoto() {
		if (videoElement) scan(videoElement, videoElement.videoWidth, videoElement.videoHeight);
	}

	async function handleFile(e: Event) {
		const file = (e.currentTarget as HTMLInputElement).files?.[0];
		if (!file) return;
		const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
		await scan(bitmap, bitmap.width, bitmap.height);
		bitmap.close();
	}
</script>

<div class="scanner-container">
	{#if isProcessing}
		<div class="overlay">
			<div class="spinner"></div>
			<h3>Processando...</h3>
		</div>
	{:else if errorMessage}
		<div class="overlay">
			<div class="error-icon"><X size={36} strokeWidth={2} /></div>
			<h3>Folha não reconhecida</h3>
			<p class="error-text">{errorMessage}</p>
			<ul class="tips-list">
				<li>Tire a foto sobre uma superfície escura (ex: mesa)</li>
				<li>Use um local bem iluminado</li>
				<li>Mostre os quatro cantos da folha, com os marcadores visíveis</li>
				<li>Certifique-se de não marcar mais de uma alternativa</li>
			</ul>
			<div class="actions">
				<button class="btn-secondary" onclick={onCancel}>Preencher Manualmente</button>
				<button class="btn-primary" onclick={() => (stream ? (errorMessage = '') : initCamera())}>
					Tirar Nova Foto
				</button>
			</div>
		</div>
	{/if}

	<div class="camera-wrapper">
		<video bind:this={videoElement} autoplay playsinline class="video-preview">
			<track kind="captions" />
		</video>
		{#if !isReady && !errorMessage}
			<div class="overlay"><p>Iniciando câmera...</p></div>
		{/if}
	</div>

	{#if canDebug}
		<label class="debug-toggle">
			<input type="checkbox" bind:checked={debug} /> Debug: baixar imagem com grade
		</label>
	{/if}

	<div class="controls">
		<button class="btn-secondary" onclick={onCancel}>Cancelar</button>
		<label class="btn-secondary file-btn">
			<ImageUp size={20} />
			Enviar foto
			<input type="file" accept="image/*" hidden onchange={handleFile} />
		</label>
		<button class="btn-primary capture-btn" onclick={capturePhoto} disabled={!isReady}>
			<Camera size={24} />
			Capturar
		</button>
	</div>
</div>

<style>
	.scanner-container {
		position: relative;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.camera-wrapper {
		position: relative;
		margin: 0 auto;
		width: 75%;
		aspect-ratio: 3/4;
		max-height: 70vh;
		background-color: #000;
		overflow: hidden;
		border-radius: var(--radius-lg);
	}

	.video-preview {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.debug-toggle {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		justify-content: center;
		font-size: var(--text-xs);
		color: var(--text-secondary);
	}

	.controls {
		display: flex;
		gap: var(--space-sm);
		padding: 0 var(--space-md) var(--space-md);
	}

	.controls > * {
		flex: 1;
	}

	/* A <label> doesn't inherit the global `button` look */
	.file-btn {
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-md);
		font-weight: 500;
		transition: all var(--transition-fast);
	}

	.capture-btn,
	.file-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		cursor: pointer;
	}

	.capture-btn {
		flex: 2;
		font-weight: 600;
	}

	.overlay {
		position: absolute;
		inset: 0;
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		text-align: center;
		overflow-y: auto;
		background-color: var(--bg-secondary);
		border-radius: var(--radius-lg);
		color: var(--text-secondary);
	}

	.error-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		flex-shrink: 0;
		color: var(--error);
		background-color: var(--error-light);
		border-radius: 50%;
	}

	h3 {
		font-size: var(--text-xl);
		margin: 0;
		color: var(--text-primary);
	}

	.error-text {
		color: var(--error);
		font-size: var(--text-sm);
		font-weight: 500;
		margin: 0;
	}

	.tips-list {
		list-style: none;
		padding: var(--space-sm) var(--space-md);
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		text-align: left;
		font-size: var(--text-xs);
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
	}

	.actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		width: 100%;
		max-width: 300px;
	}

	.spinner {
		width: 64px;
		height: 64px;
		border: 4px solid var(--border-light);
		border-top-color: var(--accent-primary);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 640px) {
		.controls {
			flex-wrap: wrap;
		}

		.capture-btn {
			flex-basis: 100%;
			order: -1;
		}
	}
</style>
