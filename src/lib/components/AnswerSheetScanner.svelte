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

	let { onAnswersDetected, onCancel }: Props = $props();

	let videoElement: HTMLVideoElement | undefined = $state();
	let canvasElement: HTMLCanvasElement | undefined = $state();
	let stream: MediaStream | null = null;
	let isReady = $state(false);
	let isProcessing = $state(false);
	let errorMessage = $state('');
	let progressMessage = $state('');
	let omrChecker: OMRCheckerInstance | null = null;

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

		try {
			// Initialize OMR Checker
			if (!omrChecker) {
				omrChecker = new OMRChecker();
			}

			// Load the alignment marker for better accuracy
			progressMessage = 'Carregando marcador de alinhamento...';
			let markerBlob = null;
			try {
				markerBlob = await fetch('/assets/omr_marker.jpg').then((res) => res.blob());
			} catch (markerError) {
				console.warn('Could not load marker image, proceeding without it:', markerError);
			}

			progressMessage = 'Processando imagem...';

			// Process the image with the OMR template (false = normal detection mode)
			if (!omrChecker) {
				throw new Error('OMR Checker não foi inicializado corretamente');
			}

			const results = await omrChecker.process(files, omrTemplate, markerBlob, false);

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
			console.error('Error processing answer sheet:', error);
			errorMessage =
				error instanceof Error
					? error.message
					: 'Erro ao processar a folha de respostas. Tente novamente com uma imagem mais clara.';
			isProcessing = false;
		}
	}

	function parseOMRResults(results: Record<string, string>): Array<QuestionAlternative | null> {
		// The OMR library returns results in format: {q1: "A", q2: "B", q3: "", ...}
		// We need to convert this to an array of 40 elements

		const answers: Array<QuestionAlternative | null> = [];
		let invalidAnswersCount = 0;

		try {
			// The results come as an object with q1, q2, ... q40 keys
			if (results && typeof results === 'object') {
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
		} catch (error) {
			console.error('Error parsing OMR results:', error);
			throw error;
		}

		return answers;
	}

	function validateAnswersQuality(
		answers: Array<QuestionAlternative | null>,
		invalidAnswersCount: number
	) {
		// Check if all answers are empty (complete parsing failure)
		const allEmpty = answers.every((answer) => answer === null);
		if (allEmpty) {
			throw new Error(
				'Não foi possível processar a folha. Tente tirar uma nova foto com melhor iluminação ou preencha manualmente.'
			);
		}

		// Check for excessive invalid or multiple selections
		if (invalidAnswersCount > 10) {
			throw new Error(
				'Erro ao processar a folha. Tente uma nova foto com melhor enquadramento ou preencha manualmente.'
			);
		}

		// Check if very few answers were detected (likely a bad scan)
		const answeredCount = answers.filter((answer) => answer !== null).length;
		if (answeredCount < 5) {
			throw new Error(
				`Apenas ${answeredCount} respostas detectadas. Tente uma nova foto com melhor qualidade ou preencha manualmente.`
			);
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
					<X size={48} strokeWidth={2} />
				</div>
				<h3>Folha não reconhecida</h3>
				<p class="error-text">{errorMessage}</p>
				<div class="error-actions">
					<button class="btn-secondary" onclick={onCancel}> Preencher Manualmente </button>
					<button
						class="btn-primary"
						onclick={() => {
							errorMessage = '';
							initCamera();
						}}
					>
						Tirar Nova Foto
					</button>
				</div>
			</div>
		</div>
	{:else}
		<video bind:this={videoElement} autoplay playsinline class="video-preview">
			<track kind="captions" />
		</video>
		<canvas bind:this={canvasElement} class="capture-canvas"></canvas>

		{#if isReady}
			<div class="camera-overlay">
				<div class="camera-frame"></div>
				<p class="camera-hint">Posicione toda a folha de respostas dentro da moldura</p>
				<div class="camera-controls">
					<button class="btn-secondary cancel-btn" onclick={onCancel}> Cancelar </button>
					<button class="btn-primary capture-btn" onclick={capturePhoto}>
						<Camera size={24} />
						Capturar Foto
					</button>
				</div>
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
		max-width: 600px;
		margin: 0 auto;
		aspect-ratio: 3/4;
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

	.capture-canvas {
		display: none;
	}

	.camera-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-xl);
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0.1) 20%,
			rgba(0, 0, 0, 0.1) 80%,
			rgba(0, 0, 0, 0.6) 100%
		);
	}

	.camera-frame {
		flex: 1;
		width: 90%;
		max-width: 500px;
		margin: var(--space-lg) 0;
		border: 3px solid var(--accent-primary);
		border-radius: var(--radius-md);
		box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.4);
	}

	.camera-hint {
		color: white;
		font-size: var(--text-sm);
		font-weight: 600;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
		text-align: center;
		margin: var(--space-md) 0;
		padding: 0 var(--space-lg);
	}

	.camera-controls {
		display: flex;
		gap: var(--space-md);
		width: 100%;
		max-width: 400px;
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
		z-index: 10;
	}

	.processing-content,
	.error-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
		padding: var(--space-xl);
		text-align: center;
	}

	.error-icon {
		color: var(--error);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		background-color: var(--error-light);
		border-radius: 50%;
	}

	h3 {
		font-size: var(--text-2xl);
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
		padding: var(--space-md);
		background-color: var(--error-light);
		border-radius: var(--radius-md);
		max-width: 400px;
	}

	.error-actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		width: 100%;
		max-width: 300px;
		margin-top: var(--space-md);
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
		.scanner-container {
			aspect-ratio: 3/4;
		}

		.camera-hint {
			font-size: var(--text-xs);
		}

		.camera-controls {
			flex-direction: column;
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
