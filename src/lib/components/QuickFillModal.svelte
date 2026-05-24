<script lang="ts">
	import { X } from '@lucide/svelte';
	import { examStore } from '$lib/stores/exam.svelte';

	interface Props {
		onClose: () => void;
	}

	let { onClose }: Props = $props();

	const alternativeLabels = ['A', 'B', 'C', 'D', 'E'];

	function handleSelectAnswer(questionIndex: number, altIndex: number) {
		if (examStore.showResults || !examStore.currentExam) return;

		const question = examStore.currentExam.questions[questionIndex];
		const alternative = question.alternatives[altIndex];
		if (!alternative) return;

		const isAlreadySelected = question.selected === alternative.number;
		examStore.selectAnswer(questionIndex, isAlreadySelected ? null : alternative.number);
	}

	function isBubbleSelected(questionIndex: number, altIndex: number): boolean {
		if (!examStore.currentExam) return false;
		const question = examStore.currentExam.questions[questionIndex];
		const alternative = question.alternatives[altIndex];
		return alternative !== undefined && question.selected === alternative.number;
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}

	function handleDone() {
		if (examStore.answeredCount === examStore.totalQuestions) {
			examStore.finishExam();
		}
		onClose();
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

<div class="quick-fill-overlay" role="dialog" aria-modal="true" aria-label="Preenchimento rápido">
	<header class="quick-fill-header">
		<div class="bar-inner">
			<div class="header-info">
				<h2>Folha de Respostas</h2>
				<p class="progress-text">
					{examStore.answeredCount} de {examStore.totalQuestions} respondidas
				</p>
			</div>
			<button class="close-btn" onclick={onClose} aria-label="Fechar">
				<X size={24} />
			</button>
		</div>
	</header>

	<div class="quick-fill-body">
		<div class="body-inner">
			{#if examStore.currentExam}
				<div class="answer-grid">
					{#each examStore.currentExam.questions, index (index)}
						<div class="answer-row">
							<span class="answer-question-num">{index + 1}</span>
							<div class="answer-options" role="group" aria-label="Questão {index + 1}">
								{#each alternativeLabels as label, altIndex (label)}
									<button
										type="button"
										class="answer-bubble"
										class:selected={isBubbleSelected(index, altIndex)}
										onclick={() => handleSelectAnswer(index, altIndex)}
										aria-label="Questão {index + 1}, alternativa {label}"
										aria-pressed={isBubbleSelected(index, altIndex)}
									>
										<span class="bubble-label">{label}</span>
									</button>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<footer class="quick-fill-footer">
		<div class="bar-inner footer-inner">
			<button class="btn-primary done-btn" onclick={handleDone}>Concluir</button>
		</div>
	</footer>
</div>

<style>
	.quick-fill-overlay {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background-color: var(--bg-primary);
		display: flex;
		flex-direction: column;
	}

	.bar-inner {
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.quick-fill-header {
		flex-shrink: 0;
		background-color: var(--bg-secondary);
		border-bottom: 1px solid var(--border-light);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
		padding: var(--space-lg) 0;
	}

	:global([data-theme='dark']) .quick-fill-header {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.quick-fill-header .bar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
	}

	.header-info h2 {
		margin: 0;
		font-size: var(--text-xl);
		color: var(--text-primary);
	}

	.progress-text {
		margin: var(--space-xs) 0 0 0;
		font-size: var(--text-sm);
		color: var(--text-secondary);
	}

	.close-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-sm);
		border-radius: var(--radius-md);
		color: var(--text-muted);
		transition: all var(--transition-fast);
		flex-shrink: 0;
	}

	.close-btn:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.quick-fill-body {
		flex: 1;
		overflow-y: auto;
		padding: var(--space-xl) 0;
	}

	.body-inner {
		width: 100%;
		max-width: 720px;
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.answer-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(20, auto);
		grid-auto-flow: column;
		gap: var(--space-sm) var(--space-xl);
	}

	.answer-row {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.answer-question-num {
		font-weight: 600;
		font-size: var(--text-sm);
		min-width: 28px;
		color: var(--text-primary);
		text-align: right;
		flex-shrink: 0;
	}

	.answer-options {
		display: flex;
		gap: var(--space-xs);
	}

	.answer-bubble {
		width: 36px;
		height: 36px;
		border: 2px solid var(--border-light);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-secondary);
		cursor: pointer;
		transition: all var(--transition-fast);
		padding: 0;
	}

	.answer-bubble:hover {
		border-color: var(--accent-primary);
		background-color: var(--accent-light);
	}

	.answer-bubble.selected {
		background-color: var(--accent-primary);
		border-color: var(--accent-primary);
	}

	.answer-bubble.selected .bubble-label {
		color: white;
	}

	.bubble-label {
		font-size: var(--text-xs);
		font-weight: 700;
		color: var(--text-secondary);
		line-height: 1;
	}

	.quick-fill-footer {
		flex-shrink: 0;
		background-color: var(--bg-secondary);
		border-top: 1px solid var(--border-light);
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.06);
		padding: var(--space-lg) 0;
	}

	:global([data-theme='dark']) .quick-fill-footer {
		box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
	}

	.footer-inner {
		display: flex;
		justify-content: center;
	}

	.done-btn {
		width: 100%;
		padding: var(--space-md) var(--space-xl);
		font-weight: 600;
		font-size: var(--text-base);
	}

	@media (max-width: 640px) {
		.bar-inner,
		.body-inner {
			padding: 0 var(--space-md);
		}

		.quick-fill-body {
			padding: var(--space-lg) 0;
		}

		.answer-grid {
			grid-template-columns: 1fr;
			grid-template-rows: unset;
			grid-auto-flow: row;
			gap: var(--space-sm);
			width: fit-content;
			max-width: 100%;
			margin: 0 auto;
		}

		.answer-bubble {
			width: 40px;
			height: 40px;
		}
	}

	@media (min-width: 900px) {
		.bar-inner,
		.body-inner {
			max-width: 960px;
			padding: 0 var(--space-xl);
		}

		.quick-fill-header,
		.quick-fill-footer {
			padding: var(--space-md) 0;
		}

		.quick-fill-body {
			padding: var(--space-lg) 0 var(--space-xl);
		}

		.answer-grid {
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(14, auto);
			gap: var(--space-xs) var(--space-lg);
		}

		.footer-inner {
			justify-content: flex-end;
		}

		.done-btn {
			width: auto;
			min-width: 200px;
		}
	}

	@media (min-width: 1200px) {
		.bar-inner,
		.body-inner {
			max-width: 1100px;
		}

		.answer-grid {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(10, auto);
			gap: var(--space-xs) var(--space-md);
		}

		.answer-bubble {
			width: 32px;
			height: 32px;
		}
	}
</style>
