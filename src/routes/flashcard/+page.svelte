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

	@media (max-width: 640px) {
		.flashcard-content {
			padding: var(--space-lg) var(--space-md);
		}
	}
</style>
