<script lang="ts">
	import { onDestroy } from 'svelte';
	import jsQR from 'jsqr';

	interface Props {
		onScan: (data: string) => void;
		onError?: (error: string) => void;
	}

	let { onScan, onError }: Props = $props();

	let videoElement: HTMLVideoElement | undefined = $state();
	let canvasElement: HTMLCanvasElement | undefined = $state();
	let stream: MediaStream | null = null;
	let isReady = $state(false);
	let errorMessage = $state('');
	let animationFrameId: number | null = null;

	$effect(() => {
		if (videoElement && !stream) {
			initCamera();
		}
	});

	async function initCamera() {
		try {
			stream = await navigator.mediaDevices.getUserMedia({
				video: { facingMode: 'environment' }
			});

			if (videoElement) {
				videoElement.srcObject = stream;
				await videoElement.play();
				isReady = true;
				requestAnimationFrame(tick);
			}
		} catch (error) {
			const message = 'Erro ao acessar a câmera. Verifique as permissões.';
			errorMessage = message;
			onError?.(message);
			console.error(error);
		}
	}

	onDestroy(() => {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
		}
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}
	});

	function tick() {
		if (
			videoElement &&
			canvasElement &&
			videoElement.readyState === videoElement.HAVE_ENOUGH_DATA
		) {
			const canvas = canvasElement;
			const ctx = canvas.getContext('2d');

			if (ctx) {
				canvas.height = videoElement.videoHeight;
				canvas.width = videoElement.videoWidth;
				ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				const code = jsQR(imageData.data, imageData.width, imageData.height, {
					inversionAttempts: 'dontInvert'
				});

				if (code) {
					// Extract the ID from the URL
					try {
						const url = new URL(code.data);
						const id = url.searchParams.get('id');
						if (id) {
							onScan(id);
							return; // Stop scanning after successful read
						} else {
							// If no ID parameter, try the whole code
							onScan(code.data);
							return;
						}
					} catch {
						// Not a URL, use the raw data
						onScan(code.data);
						return;
					}
				}
			}
		}

		animationFrameId = requestAnimationFrame(tick);
	}
</script>

<div class="scanner-container">
	{#if errorMessage}
		<div class="error-message">
			<p>{errorMessage}</p>
		</div>
	{:else}
		<video bind:this={videoElement} autoplay playsinline class="video-preview">
			<track kind="captions" />
		</video>
		<canvas bind:this={canvasElement} class="qr-canvas"></canvas>
		{#if isReady}
			<div class="scanner-overlay">
				<div class="scanner-frame"></div>
				<p class="scanner-hint">Posicione o QR Code dentro da moldura</p>
			</div>
		{:else}
			<div class="loading-overlay">
				<p>Iniciando câmera...</p>
			</div>
		{/if}
	{/if}
</div>

<style>
	.scanner-container {
		position: relative;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		aspect-ratio: 1;
		background-color: var(--bg-tertiary);
		border-radius: var(--radius-lg);
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.video-preview {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.qr-canvas {
		display: none;
	}

	.scanner-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-xl);
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0.1) 70%,
			rgba(0, 0, 0, 0.5) 100%
		);
	}

	.scanner-frame {
		width: 250px;
		height: 250px;
		border: 3px solid var(--accent-primary);
		border-radius: var(--radius-md);
		box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.3);
	}

	.scanner-hint {
		color: white;
		font-size: var(--text-sm);
		font-weight: 500;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		padding: 0 var(--space-lg);
		text-align: center;
	}

	.error-message {
		text-align: center;
		padding: var(--space-xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		align-items: center;
	}

	.error-message p {
		color: var(--error);
		font-weight: 500;
	}

	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-tertiary);
	}

	.loading-overlay p {
		color: var(--text-secondary);
		font-weight: 500;
	}
</style>
