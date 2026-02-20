<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Camera, X } from '@lucide/svelte';
	// @ts-expect-error - OMR package doesn't have types
	import { OMRChecker } from '@armghan3071/omrchecker';
	import type { QuestionAlternative } from '$lib/models/question';
	import omrTemplate from '$lib/config/omr-template.json';

	interface Props {
		onAnswersDetected: (answers: Array<QuestionAlternative | null>) => void;
		onCancel: () => void;
	}

	interface OMRCheckerInstance {
		process: (
			files: File[],
			template: unknown,
			marker: Blob | null,
			debug: boolean
		) => Promise<unknown>;
		terminate: () => void;
	}

	interface OMRResult {
		response: Record<string, string>;
		markedImage?: string; // Base64 image with grid overlay for debugging
	}

	let { onAnswersDetected, onCancel }: Props = $props();

	let videoElement: HTMLVideoElement | undefined = $state();
	let canvasElement: HTMLCanvasElement | undefined = $state();
	let stream: MediaStream | null = null;
	let isReady = $state(false);
	let isProcessing = $state(false);
	let errorMessage = $state('');
	let progressMessage = $state('');
	let omrChecker: OMRCheckerInstance | null = null;
	let debugImageUrl = $state<string | null>(null);

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
			}
		} catch (error) {
			errorMessage = 'Erro ao acessar a câmera. Verifique as permissões.';
			console.error(error);
		}
	}

	onDestroy(() => {
		if (stream) {
			stream.getTracks().forEach((track) => track.stop());
		}
		if (omrChecker) {
			omrChecker.terminate();
		}
		if (debugImageUrl) {
			URL.revokeObjectURL(debugImageUrl);
		}
	});

	async function capturePhoto() {
		if (!videoElement || !canvasElement) return;

		// Capture the current video frame to canvas
		const canvas = canvasElement;
		canvas.width = videoElement.videoWidth;
		canvas.height = videoElement.videoHeight;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

		// Convert canvas to blob
		canvas.toBlob(
			async (blob) => {
				if (!blob) return;

				// Create a File object from the blob
				const file = new File([blob], 'answer-sheet.jpg', { type: 'image/jpeg' });
				await processAnswerSheet([file]);
			},
			'image/jpeg',
			0.95
		);
	}

	async function processAnswerSheet(files: File[]) {
		isProcessing = true;
		errorMessage = '';
		progressMessage = 'Inicializando processamento...';

		// Clear any previous debug image
		if (debugImageUrl) {
			URL.revokeObjectURL(debugImageUrl);
			debugImageUrl = null;
		}

		try {
			// Initialize OMR Checker with debug output enabled
			if (!omrChecker) {
				omrChecker = new OMRChecker({ includeOutputImages: true });
			}

			// Load the alignment marker for better accuracy
			progressMessage = 'Carregando marcador de alinhamento...';
			let markerBlob = null;
			try {
				markerBlob = await fetch('/assets/omr_marker.jpg').then((res) => res.blob());
				console.log('[OMR] Marker loaded successfully:', markerBlob.size, 'bytes');
			} catch (markerError) {
				console.warn('Could not load marker image, proceeding without it:', markerError);
			}

			progressMessage = 'Processando imagem...';

			// Log the template being used for debugging
			console.log('[OMR] Using template configuration:', JSON.stringify(omrTemplate, null, 2));

			// Process the image with the OMR template (false = normal detection mode)
			if (!omrChecker) {
				throw new Error('OMR Checker não foi inicializado corretamente');
			}

			const results = (await omrChecker.process(
				files,
				omrTemplate,
				markerBlob,
				false
			)) as OMRResult[];

			// The OMR library returns an array of results, we need the response from the first item
			if (!Array.isArray(results) || results.length === 0) {
				throw new Error('Nenhum resultado foi retornado pela biblioteca OMR.');
			}

			const firstResult = results[0];
			if (!firstResult || !firstResult.response) {
				throw new Error('Formato de resultado inválido. Propriedade "response" não encontrada.');
			}

			// Parse the results - now using the response property
			const answers = parseOMRResults(firstResult.response);

			if (answers.length !== 40) {
				throw new Error(
					`Esperado 40 respostas, mas ${answers.length} foram detectadas. Verifique a qualidade da imagem.`
				);
			}

			progressMessage = 'Respostas detectadas com sucesso!';
			setTimeout(() => {
				onAnswersDetected(answers);
			}, 500);
		} catch (error) {
			// Generate debug image on error
			try {
				await generateDebugImage(files);
			} catch (debugError) {
				console.error('Failed to generate debug image:', debugError);
			}

			errorMessage =
				error instanceof Error
					? error.message
					: 'Erro ao processar a folha de respostas. Tente novamente com uma imagem mais clara.';
			isProcessing = false;
		}
	}

	async function generateDebugImage(files: File[]) {
		try {
			// Initialize if needed
			if (!omrChecker) {
				omrChecker = new OMRChecker({ includeOutputImages: true });
			}

			// TypeScript guard - at this point omrChecker is definitely not null
			const checker = omrChecker;
			if (!checker) return;

			let markerBlob = null;
			try {
				markerBlob = await fetch('/assets/omr_marker.jpg').then((res) => res.blob());
			} catch {
				// Marker is optional for debug mode
			}

			// Process with setLayout = true to get debug image
			const debugResults = await checker.process(files, omrTemplate, markerBlob, true);

			if (Array.isArray(debugResults) && debugResults.length > 0) {
				const firstResult = debugResults[0];

				// In setLayout mode, the result has layoutImage property
				const imageData =
					firstResult.layoutImage ||
					firstResult.markedImage ||
					firstResult.image ||
					firstResult.layout;

				if (imageData && typeof imageData === 'string') {
					debugImageUrl = imageData;
				}
			}
		} catch (error) {
			console.error('Error generating debug image:', error);
		}
	}

	function parseOMRResults(results: Record<string, string>): Array<QuestionAlternative | null> {
		// The OMR library returns results in format: {q1: "A", q2: "B", q3: "", ...}
		// We need to convert this to an array of 40 elements

		const answers: Array<QuestionAlternative | null> = [];
		let invalidAnswersCount = 0;

		// The results come as an object with q1, q2, ... q40 keys
		if (results && typeof results === 'object') {
			console.log('OMR Results received:', results);

			// Iterate through questions 1 to 40
			for (let i = 1; i <= 40; i++) {
				const questionKey = `q${i}`;
				const answer = results[questionKey];

				// Convert letter to QuestionAlternative enum or null if empty
				if (answer && typeof answer === 'string' && answer.trim() !== '') {
					const trimmedAnswer = answer.trim().toUpperCase();

					// Check for invalid answers (multiple letters like "AB", "ABCDE", etc.)
					if (trimmedAnswer.length > 1) {
						invalidAnswersCount++;
						answers.push(null);
					} else {
						const mapped = mapAnswerToAlternative(trimmedAnswer);
						if (mapped === null && trimmedAnswer !== '') {
							invalidAnswersCount++;
						}
						answers.push(mapped);
					}
				} else {
					answers.push(null);
				}
			}
		} else {
			throw new Error(
				'Formato de resultado OMR não reconhecido. Esperado: objeto com chaves q1, q2, ..., q40'
			);
		}

		// Verify we have exactly 40 answers
		if (answers.length !== 40) {
			throw new Error(`Esperado 40 respostas, mas ${answers.length} foram processadas.`);
		}

		// Validate the quality of the scan
		validateAnswersQuality(answers, invalidAnswersCount);

		return answers;
	}

	function validateAnswersQuality(
		answers: Array<QuestionAlternative | null>,
		invalidAnswersCount: number
	) {
		const errorMessage = 'Não foi possível processar a imagem da folha de respostas.';

		// Check for any invalid answers (multiple selections detected)
		if (invalidAnswersCount > 0) {
			console.error(
				`Validation failed: ${invalidAnswersCount} questions with multiple answers or invalid marks detected`
			);
			throw new Error(errorMessage);
		}

		// Check if any answer is null - this indicates parsing failure
		const emptyCount = answers.filter((answer) => answer === null).length;
		if (emptyCount > 0) {
			console.error(`Validation failed: ${emptyCount} questions returned empty - invalid parse`);
			throw new Error(errorMessage);
		}
	}

	function mapAnswerToAlternative(answer: string | undefined): QuestionAlternative | null {
		if (!answer) return null;

		const upperAnswer = answer.toUpperCase();
		switch (upperAnswer) {
			case 'A':
				return 0; // QuestionAlternative.A
			case 'B':
				return 1; // QuestionAlternative.B
			case 'C':
				return 2; // QuestionAlternative.C
			case 'D':
				return 3; // QuestionAlternative.D
			case 'E':
				return 4; // QuestionAlternative.E
			default:
				return null;
		}
	}
</script>

<div class="scanner-container">
	{#if isProcessing}
		<div class="processing-overlay">
			<div class="processing-content">
				<div class="spinner"></div>
				<h3>Processando...</h3>
				<p>{progressMessage}</p>
			</div>
		</div>
	{:else if errorMessage}
		<div class="error-overlay">
			<div class="error-content">
				<div class="error-icon">
					<X size={36} strokeWidth={2} />
				</div>
				<h3>Folha não reconhecida</h3>
				<p class="error-text">{errorMessage}</p>

				<div class="tips-container">
					<p class="tips-title">Dicas para melhorar:</p>
					<ul class="tips-list">
						<li>Tire a foto sobre uma superfície escura (ex: mesa)</li>
						<li>Use um local bem iluminado</li>
						<li>Certifique-se de não marcar mais de uma alternativa</li>
					</ul>
				</div>

				{#if debugImageUrl}
					<a href={debugImageUrl} download="debug-image-{Date.now()}.png" class="debug-link">
						(baixar debug)
					</a>
				{:else}
					<p class="debug-status">Gerando imagem de debug...</p>
				{/if}
				<div class="error-actions">
					<button class="btn-secondary" onclick={onCancel}> Preencher Manualmente </button>
					<button
						class="btn-primary"
						onclick={() => {
							errorMessage = '';
							debugImageUrl = null;
							initCamera();
						}}
					>
						Tirar Nova Foto
					</button>
				</div>
			</div>
		</div>
	{/if}

	<div class="camera-wrapper">
		<video bind:this={videoElement} autoplay playsinline class="video-preview">
			<track kind="captions" />
		</video>
		<canvas bind:this={canvasElement} class="capture-canvas"></canvas>

		{#if !isReady && !isProcessing && !errorMessage}
			<div class="loading-overlay">
				<p>Iniciando câmera...</p>
			</div>
		{/if}
	</div>

	{#if isReady && !isProcessing && !errorMessage}
		<div class="camera-controls">
			<button class="btn-secondary cancel-btn" onclick={onCancel}> Cancelar </button>
			<button class="btn-primary capture-btn" onclick={capturePhoto}>
				<Camera size={24} />
				Capturar Foto
			</button>
		</div>
	{/if}
</div>

<style>
	.scanner-container {
		position: relative;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		border-radius: var(--radius-lg);
		overflow: hidden;
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
		margin-bottom: var(--space-md);
		overflow: hidden;
		border-radius: var(--radius-lg);
	}

	.video-preview {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-lg);
	}

	.capture-canvas {
		display: none;
	}

	.camera-controls {
		display: flex;
		gap: var(--space-md);
		width: 100%;
		padding: 0 var(--space-md) var(--space-md);
		background-color: var(--bg-primary);
		flex-shrink: 0;
	}

	.cancel-btn {
		flex: 1;
	}

	.capture-btn {
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-weight: 600;
		font-size: var(--text-base);
	}

	.processing-overlay,
	.error-overlay,
	.loading-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-secondary);
		border-radius: var(--radius-lg);
		z-index: 10;
	}

	.processing-content,
	.error-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-lg);
		text-align: center;
		max-height: 100%;
		overflow-y: auto;
	}

	.error-icon {
		color: var(--error);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 60px;
		height: 60px;
		background-color: var(--error-light);
		border-radius: 50%;
		flex-shrink: 0;
	}

	h3 {
		font-size: var(--text-xl);
		margin: 0;
		color: var(--text-primary);
	}

	.processing-content p {
		color: var(--text-secondary);
		font-size: var(--text-base);
		margin: 0;
	}

	.error-text {
		color: var(--error);
		font-size: var(--text-sm);
		font-weight: 500;
		margin: 0;
		padding: var(--space-sm) var(--space-md);
		background-color: var(--error-light);
		border-radius: var(--radius-md);
		max-width: 400px;
	}

	.tips-container {
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
		padding: var(--space-sm) var(--space-md);
		max-width: 400px;
		text-align: left;
	}

	.tips-title {
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 var(--space-xs) 0;
	}

	.tips-list {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
	}

	.tips-list li {
		font-size: var(--text-xs);
		color: var(--text-secondary);
		padding-left: var(--space-md);
		position: relative;
		line-height: 1.4;
	}

	.tips-list li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--accent-primary);
		font-weight: bold;
	}

	.error-actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		width: 100%;
		max-width: 300px;
		margin-top: var(--space-sm);
	}

	.debug-status {
		color: var(--text-secondary);
		font-size: var(--text-xs);
		text-align: center;
		margin: 0;
		font-style: italic;
	}

	.debug-link {
		color: var(--text-secondary);
		font-size: var(--text-xs);
		text-decoration: underline;
		cursor: pointer;
		margin: var(--space-xs) 0;
		display: inline-block;
	}

	.debug-link:hover {
		color: var(--text-primary);
	}

	.loading-overlay p {
		color: var(--text-secondary);
		font-weight: 500;
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
		.camera-controls {
			flex-direction: column;
			padding: 0 var(--space-md) var(--space-md);
		}

		.cancel-btn,
		.capture-btn {
			flex: 1;
		}

		h3 {
			font-size: var(--text-xl-mobile);
		}

		.error-text {
			font-size: var(--text-xs-mobile);
		}
	}
</style>
