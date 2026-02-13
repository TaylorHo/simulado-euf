<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { flashcardStore } from '$lib/stores/flashcard.svelte';
	import { QuestionAlternative, Version } from '$lib/models/question';
	import Footer from '$lib/components/Footer.svelte';
	import Question from '$lib/components/Question.svelte';
	import { buildExamUrl } from '$lib/utils/helpers';
	import type { ExamQuestion } from '$lib/models/exam';
	import { AreaLabels } from '$lib/models/area';
	import { ADSENSE_CLIENT_ID, AD_SLOT, ADS_ENABLED } from '$lib/variables';
	import { adsPreferenceStore } from '$lib/stores/ads.svelte';

	let isLoading = $state(true);
	let showInterstitialAd = $state(false);
	let wasCorrectAnswer = $state(false);
	let canSkipAd = $state(false);
	let remainingSeconds = $state(5);
	let adsLoaded = $state(false);

	// Convert flashcard question to ExamQuestion format for the Question component
	const currentExamQuestion = $derived<ExamQuestion | null>(
		flashcardStore.currentQuestion
			? ({
					year: flashcardStore.currentQuestion.year,
					semester: flashcardStore.currentQuestion.semester,
					version: flashcardStore.currentQuestion.version,
					area: flashcardStore.currentQuestion.area,
					questionNumber: flashcardStore.currentQuestion.questionNumber,
					statement: flashcardStore.currentQuestion.statement,
					alternatives:
						flashcardStore.currentQuestion.shuffledAlternatives ||
						flashcardStore.currentQuestion.alternatives,
					correct: flashcardStore.currentQuestion.correct,
					tags: flashcardStore.currentQuestion.tags,
					selected: flashcardStore.selectedAnswer,
					discarded: flashcardStore.discardedAlternatives,
					help: flashcardStore.currentQuestion.help
				} as ExamQuestion)
			: null
	);

	let questionId = $state<string | null>(null);

	onMount(() => {
		questionId = page.url.searchParams.get('id');

		if (questionId) {
			flashcardStore.loadQuestionById(questionId);
			isLoading = false;
		} else {
			const question = flashcardStore.getRandomQuestion();
			if (question) {
				goto(buildExamUrl(flashcardStore.getQuestionId(question), '/flashcard'), {
					replaceState: true
				});
			}
			isLoading = false;
		}
	});

	// Load ads when interstitial is shown
	$effect(() => {
		if (showInterstitialAd && !adsLoaded && ADS_ENABLED && adsPreferenceStore.enabled) {
			setTimeout(() => {
				try {
					const ads = document.querySelectorAll('.ads-wrapper .adsbygoogle');
					if (ads.length > 0) {
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						const adsbygoogle = (window as any).adsbygoogle || [];
						ads.forEach(() => {
							adsbygoogle.push({});
						});
						adsLoaded = true;
					}
				} catch (e) {
					console.error('Ad loading error:', e);
				}
			}, 300);
		}
	});

	function handleSelectAnswer(alt: QuestionAlternative) {
		flashcardStore.selectAnswer(alt);
	}

	function handleToggleDiscard(alt: QuestionAlternative) {
		flashcardStore.toggleDiscarded(alt);
	}

	function handleReveal() {
		flashcardStore.revealAnswer();
	}

	function handleNext() {
		// When clicking "Pular questão" (skip), go directly to next question without ads
		if (!flashcardStore.showAnswer) {
			const question = flashcardStore.nextQuestion();
			if (question) {
				goto(buildExamUrl(flashcardStore.getQuestionId(question), '/flashcard'));
			}
			return;
		}

		// When clicking "Próxima Questão" after revealing answer, show interstitial ad if enabled
		if (ADS_ENABLED && adsPreferenceStore.enabled) {
			// Check if answer was correct
			wasCorrectAnswer = flashcardStore.selectedAnswer === flashcardStore.currentQuestion?.correct;

			// If correct, user must wait 5 seconds. If wrong, can skip immediately
			canSkipAd = !wasCorrectAnswer;
			remainingSeconds = 5;

			// Reset ads loaded flag
			adsLoaded = false;

			// Show interstitial ad page
			showInterstitialAd = true;

			// Start countdown timer if answer was correct
			if (wasCorrectAnswer) {
				const timer = setInterval(() => {
					remainingSeconds--;
					if (remainingSeconds <= 0) {
						canSkipAd = true;
						clearInterval(timer);
					}
				}, 1000);
			}
		} else {
			// Ads disabled, go directly to next question
			proceedToNextQuestion();
		}
	}

	function proceedToNextQuestion() {
		showInterstitialAd = false;
		const question = flashcardStore.nextQuestion();
		if (question) {
			goto(buildExamUrl(flashcardStore.getQuestionId(question), '/flashcard'));
		}
	}

	function handleSkipAd() {
		if (canSkipAd) {
			proceedToNextQuestion();
		}
	}
</script>

<svelte:head>
	<title>Flashcard - Simulado EUF</title>
	<meta name="description" content="Pratique questões do EUF com flashcards aleatórios" />
	{#if ADS_ENABLED}
		<script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADSENSE_CLIENT_ID}"
			crossorigin="anonymous"
		></script>
	{/if}
</svelte:head>

<div class="flashcard-page">
	<div class="container flashcard-content">
		{#if isLoading || !flashcardStore.currentQuestion || !currentExamQuestion}
			<div class="loading">
				<div class="spinner"></div>
			</div>
		{:else if showInterstitialAd}
			<!-- Interstitial Ad Page -->
			<div class="interstitial-container">
				<!-- Title Outside Container -->
				{#if wasCorrectAnswer}
					<h2 class="congrats-title">🎉 Parabéns!</h2>
				{:else}
					<h2 class="goodluck-title">Continue tentando!</h2>
				{/if}

				<p class="message-text">
					{#if wasCorrectAnswer}
						Ficamos felizes que você acertou! Dê uma olhada em alguns anúncios para ajudar a manter
						o projeto.
					{:else}
						Boa sorte na próxima questão!
					{/if}
				</p>

				<!-- All Ads in Same Container -->
				<div class="ads-section">
					<!-- Ad Slots in Single Container -->
					<div class="ads-wrapper">
						<ins
							class="adsbygoogle"
							style="display:block"
							data-ad-client={ADSENSE_CLIENT_ID}
							data-ad-slot={AD_SLOT}
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins>
						<ins
							class="adsbygoogle"
							style="display:block"
							data-ad-client={ADSENSE_CLIENT_ID}
							data-ad-slot={AD_SLOT}
							data-ad-format="auto"
							data-full-width-responsive="true"
						></ins>
					</div>
				</div>

				<!-- Skip Button Inside Same Container -->
				<button class="btn-primary skip-btn" onclick={handleSkipAd} disabled={!canSkipAd}>
					{#if canSkipAd}
						Pular anúncios
					{:else}
						Aguarde {remainingSeconds}s para pular
					{/if}
				</button>
			</div>
		{:else}
			<Question
				question={currentExamQuestion}
				questionNumber={`de ${AreaLabels[currentExamQuestion.area]} da prova de ${currentExamQuestion.year}-${currentExamQuestion.semester} - Q${currentExamQuestion.questionNumber}-${currentExamQuestion.version === Version.A ? 'A' : 'B'}`}
				showCorrect={flashcardStore.showAnswer}
				showDiscardButton={!flashcardStore.showAnswer}
				onSelectAnswer={handleSelectAnswer}
				onToggleDiscard={handleToggleDiscard}
			/>

			<div class="actions-container">
				<div class="flashcard-actions">
					{#if !flashcardStore.showAnswer}
						<div class="action-buttons">
							<button class="btn-secondary action-btn" onclick={handleNext}>Pular questão</button>
							<button
								class="btn-primary action-btn"
								onclick={handleReveal}
								disabled={flashcardStore.selectedAnswer === null}
							>
								Confirmar resposta
							</button>
						</div>
					{:else}
						<button class="btn-primary action-btn" onclick={handleNext}> Próxima Questão </button>
					{/if}
				</div>
			</div>
		{/if}
	</div>

	<Footer />
</div>

<style>
	.flashcard-page {
		min-height: 100vh;
		background-color: var(--bg-primary);
		padding-top: var(--space-lg);
	}

	.flashcard-content {
		padding: var(--space-lg) var(--space-lg);
		min-height: calc(100vh - var(--topbar-height));
	}

	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-lg);
		padding: var(--space-2xl);
		min-height: 400px;
	}

	.spinner {
		width: 48px;
		height: 48px;
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

	.actions-container {
		margin-top: var(--space-lg);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
	}

	.action-buttons {
		display: flex;
		gap: var(--space-md);
	}

	.action-btn {
		flex: 1;
	}

	/* Interstitial Ad Styles */
	.interstitial-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		padding: var(--space-lg);
		max-width: 900px;
		margin: 0 auto;
	}

	.congrats-title {
		color: var(--accent-primary);
		font-size: var(--text-2xl);
		font-weight: 700;
		text-align: center;
		margin: 0;
	}

	.goodluck-title {
		color: var(--text-primary);
		font-size: var(--text-2xl);
		font-weight: 700;
		text-align: center;
		margin: 0;
	}

	.ads-section {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.message-text {
		color: var(--text-secondary);
		font-size: var(--text-md);
		line-height: 1.6;
		text-align: center;
		margin: 0;
	}

	.ads-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		min-height: 100px;
	}

	.ads-wrapper .adsbygoogle {
		min-height: 80px;
	}

	.skip-btn {
		width: 100%;
		padding: var(--space-md);
		font-size: var(--text-md);
		margin-top: var(--space-sm);
	}

	.skip-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		.flashcard-page {
			padding-top: var(--space-sm);
		}

		.flashcard-content {
			padding: var(--space-md);
		}

		.actions-container {
			padding: var(--space-md);
			margin-top: var(--space-md);
		}

		.action-buttons {
			gap: var(--space-sm);
		}

		.action-btn {
			font-size: var(--text-sm-mobile);
			padding: var(--space-sm) var(--space-md);
		}

		.interstitial-container {
			gap: var(--space-sm);
			padding: var(--space-md);
		}

		.ads-section {
			padding: var(--space-md);
		}

		.congrats-title,
		.goodluck-title {
			font-size: var(--text-xl);
		}

		.message-text {
			font-size: var(--text-sm);
		}

		.ads-wrapper .adsbygoogle {
			min-height: 60px;
		}
	}

	@media (max-width: 640px) {
		.flashcard-content {
			padding: var(--space-sm) var(--space-md);
		}

		.action-buttons {
			flex-direction: column;
		}

		.interstitial-container {
			padding: var(--space-sm);
		}

		.ads-section {
			padding: var(--space-sm) var(--space-md);
			gap: var(--space-sm);
		}
	}
</style>
