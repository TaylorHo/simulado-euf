<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { flashcardStore } from '$lib/stores/flashcard.svelte';
	import { QuestionAlternative } from '$lib/models/question';
	import { AreaLabels } from '$lib/models/area';
	import Footer from '$lib/components/Footer.svelte';
	import Question from '$lib/components/Question.svelte';
	import { buildExamUrl } from '$lib/utils/helpers';
	import type { ExamQuestion } from '$lib/models/exam';

	let isLoading = $state(true);

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
					aiHelp: flashcardStore.currentQuestion.aiHelp
				} as ExamQuestion)
			: null
	);

	let questionId = $state<string | null>(null);

	onMount(() => {
		questionId = $page.url.searchParams.get('id');

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
		const question = flashcardStore.nextQuestion();
		if (question) {
			goto(buildExamUrl(flashcardStore.getQuestionId(question), '/flashcard'));
		}
	}
</script>

<svelte:head>
	<title>Flashcard - Simulado EUF</title>
	<meta name="description" content="Pratique questões do EUF com flashcards aleatórios" />
</svelte:head>

<div class="flashcard-page">
	<div class="container flashcard-content">
		{#if isLoading || !flashcardStore.currentQuestion || !currentExamQuestion}
			<div class="loading">
				<div class="spinner"></div>
			</div>
		{:else}
			<div class="flashcard">
				<div class="flashcard-header">
					<div class="flashcard-meta">
						<span class="area-badge">{AreaLabels[flashcardStore.currentQuestion.area]}</span>
					</div>
					<div class="flashcard-info">
						<span class="info-text">
							{flashcardStore.currentQuestion.year}-{flashcardStore.currentQuestion.semester}
						</span>
					</div>
				</div>

				<div class="flashcard-body">
					<Question
						question={currentExamQuestion}
						showCorrect={flashcardStore.showAnswer}
						showDiscardButton={!flashcardStore.showAnswer}
						onSelectAnswer={handleSelectAnswer}
						onToggleDiscard={handleToggleDiscard}
					/>
				</div>

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

	.flashcard {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-md);
	}

	.flashcard-header {
		padding: var(--space-lg);
		background-color: var(--bg-primary);
		border-bottom: 1px solid var(--border-light);
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	.flashcard-meta {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.area-badge {
		font-size: var(--text-sm);
		font-weight: 600;
		padding: var(--space-xs) var(--space-md);
		background-color: var(--accent-light);
		color: var(--text-primary);
		border-radius: var(--radius-sm);
		display: inline-block;
	}

	.flashcard-info {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.info-text {
		font-size: var(--text-sm);
		color: var(--text-muted);
		font-weight: 500;
	}

	.flashcard-body {
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.flashcard-actions {
		padding: var(--space-lg);
		background-color: var(--bg-primary);
		border-top: 1px solid var(--border-light);
	}

	.action-buttons {
		display: flex;
		gap: var(--space-md);
	}

	.action-btn {
		flex: 1;
	}

	@media (max-width: 640px) {
		.flashcard-content {
			padding: var(--space-lg) var(--space-md);
		}

		.flashcard-body {
			padding: var(--space-md);
		}
	}
</style>
