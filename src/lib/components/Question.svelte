<script lang="ts">
	import type { ExamQuestion } from '$lib/models/exam';
	import { QuestionAlternative } from '$lib/models/question';
	import LaTeX from './LaTeX.svelte';
	import HelpSection from './HelpSection.svelte';
	import { imageInversionStore } from '$lib/stores/imageInversion';
	import { themeStore } from '$lib/stores/theme';
	import { getImagePath } from '$lib/utils/helpers';
	import { Eye, EyeOff, PaintBucket, ClipboardList } from '@lucide/svelte';
	import ReportError from './ReportError.svelte';

	interface Props {
		question: ExamQuestion;
		questionNumber?: number | string;
		showCorrect?: boolean;
		showTags?: boolean;
		showDiscardButton?: boolean;
		onSelectAnswer?: (alt: QuestionAlternative) => void;
		onToggleDiscard?: (alt: QuestionAlternative) => void;
	}

	let {
		question,
		questionNumber,
		showCorrect = false,
		showTags = false,
		showDiscardButton = false,
		onSelectAnswer,
		onToggleDiscard
	}: Props = $props();

	const alternativeLabels = ['A', 'B', 'C', 'D', 'E'];

	const isDark = $derived($themeStore);
	const invertImages = $derived($imageInversionStore);

	// Determine if the answer is correct (only when showing results)
	const isCorrect = $derived(showCorrect && question.selected === question.correct);

	function getAlternativeClass(alt: QuestionAlternative): string {
		const classes = ['alternative'];

		if (question.selected === alt) {
			classes.push('selected');
			if (showCorrect && question.correct !== alt) {
				classes.push('incorrect');
			}
		}

		if (showCorrect && question.correct === alt) {
			classes.push('correct');
		}

		if (question.discarded?.includes(alt)) {
			classes.push('discarded');
		}

		return classes.join(' ');
	}
</script>

<div class="question-container">
	<div class="question-header">
		{#if questionNumber !== undefined}
			<span class="question-number">Questão {questionNumber}</span>
		{/if}
		{#if showTags && question.tags}
			<div class="question-meta">
				{#each question.tags as tag (tag)}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
		<div class="question-actions">
			<a href="/assets/formulario.pdf" target="_blank" rel="noopener noreferrer" class="btn-form">
				<ClipboardList size={14} />
				<span>Formulário</span>
			</a>
			<ReportError {question} />
		</div>
	</div>

	<div class="statement">
		{#if question.statement.text}
			<div class="statement-text">
				<LaTeX content={question.statement.text} />
			</div>
		{/if}
		{#if question.statement.image}
			<div class="image-wrapper">
				<img
					src={getImagePath(question.statement.image)}
					alt="Enunciado da questão"
					class="statement-image"
					class:inverted={isDark && invertImages}
				/>
				{#if isDark}
					<button
						class="invert-toggle"
						onclick={() => imageInversionStore.toggle()}
						title="Inverter cores da imagem"
					>
						<PaintBucket size={16} />
					</button>
				{/if}
			</div>
		{/if}
	</div>

	<div class="alternatives">
		{#each question.alternatives as alt, index (alt.number)}
			<div class="alternative-wrapper">
				<button
					class={getAlternativeClass(alt.number)}
					onclick={() => onSelectAnswer?.(alt.number)}
					disabled={showCorrect}
				>
					<div class="alternative-letter">{alternativeLabels[index]}</div>
					<div class="alternative-main">
						{#if alt.text}
							<LaTeX content={alt.text} />
						{/if}
						{#if alt.image}
							<div class="image-wrapper alt-image-wrapper">
								<img
									src={getImagePath(alt.image)}
									alt="Alternativa {alternativeLabels[index]}"
									class="alternative-image"
									class:inverted={isDark && invertImages}
								/>
							</div>
						{/if}
					</div>
				</button>
				{#if showDiscardButton && !showCorrect}
					<button
						class="discard-btn"
						class:active={question.discarded?.includes(alt.number)}
						onclick={(e) => {
							e.stopPropagation();
							onToggleDiscard?.(alt.number);
						}}
						title={question.discarded?.includes(alt.number)
							? 'Mostrar alternativa'
							: 'Ocultar alternativa'}
					>
						{#if question.discarded?.includes(alt.number)}
							<Eye size={18} />
						{:else}
							<EyeOff size={18} />
						{/if}
					</button>
				{/if}
			</div>
		{/each}
	</div>

	<!-- Help Section - shown after alternatives when answer is revealed -->
	{#if showCorrect}
		<div class="help-wrapper">
			<HelpSection {question} {isCorrect} />
		</div>
	{/if}
</div>

<style>
	.question-container {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
	}

	.question-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--space-lg);
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	.question-number {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--text-primary);
	}

	.question-meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.question-actions {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.btn-form {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		padding: 6px 10px;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--text-muted);
		background-color: transparent;
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
		text-decoration: none;
		white-space: nowrap;
	}

	.btn-form:hover {
		color: var(--text-primary);
		background-color: var(--bg-tertiary);
		border-color: var(--border-color);
	}

	.tag {
		font-size: var(--text-xs);
		padding: var(--space-xs) var(--space-sm);
		background-color: var(--accent-light);
		color: var(--accent-primary);
		border-radius: var(--radius-sm);
		font-weight: 500;
	}

	:global([data-theme='dark']) .tag {
		background-color: rgba(59, 130, 246, 0.15);
		color: #60a5fa;
	}

	.statement {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
	}

	.image-wrapper {
		position: relative;
		margin-top: var(--space-md);
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.alt-image-wrapper {
		margin-top: 0;
	}

	.statement-image {
		max-width: 100%;
		max-height: 500px;
		height: auto;
		object-fit: contain;
		border-radius: var(--radius-md);
		transition: filter var(--transition-base);
	}

	.statement-image.inverted,
	.alternative-image.inverted {
		filter: invert(1) hue-rotate(180deg);
	}

	.alternative-image {
		max-width: 100%;
		max-height: 300px;
		height: auto;
		object-fit: contain;
		border-radius: var(--radius-md);
		transition: filter var(--transition-base);
	}

	.invert-toggle {
		position: absolute;
		bottom: 8px;
		right: 8px;
		padding: var(--space-xs);
		background-color: rgba(0, 0, 0, 0.6);
		color: white;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-sm);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
		backdrop-filter: blur(4px);
	}

	.invert-toggle:hover {
		background-color: rgba(0, 0, 0, 0.8);
		border-color: rgba(255, 255, 255, 0.4);
		transform: scale(1.1);
	}

	.statement-text {
		color: var(--text-primary);
		font-size: var(--text-base);
		line-height: 1.6;
	}

	:global(.statement-text ul),
	:global(.statement-text ol) {
		padding-left: 20px;
	}

	.alternatives {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.alternative-wrapper {
		display: flex;
		gap: var(--space-sm);
		align-items: stretch;
	}

	.alternative {
		flex: 1;
		text-align: left;
		padding: var(--space-sm);
		background-color: var(--bg-primary);
		border: 2px solid var(--border-color);
		border-radius: var(--radius-md);
		transition: all var(--transition-fast);
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: var(--space-md);
		min-height: 48px;
	}

	.alternative:hover:not(:disabled) {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}

	.alternative.selected {
		border-color: var(--accent-primary);
		background-color: var(--accent-light);
	}

	:global([data-theme='dark']) .alternative.selected {
		background-color: rgba(59, 130, 246, 0.15);
		border-color: #3b82f6;
	}

	.alternative.correct {
		border-color: var(--success);
		background-color: var(--success-light);
	}

	:global([data-theme='dark']) .alternative.correct {
		background-color: rgba(16, 185, 129, 0.15);
		border-color: #10b981;
	}

	.alternative.incorrect {
		border-color: var(--error);
		background-color: var(--error-light);
	}

	:global([data-theme='dark']) .alternative.incorrect {
		background-color: rgba(239, 68, 68, 0.15);
		border-color: #ef4444;
	}

	.alternative.discarded {
		opacity: 0.3;
	}

	.alternative:disabled {
		cursor: default;
	}

	.alternative-letter {
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		margin-top: 2px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		color: var(--text-primary);
		font-size: var(--text-base);
		background-color: var(--bg-tertiary);
		border-radius: var(--radius-sm);
		border: 1px solid var(--border-color);
	}

	.alternative-main {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: flex-start;
		font-size: var(--text-base);
		color: var(--text-primary);
		font-weight: 500;
	}

	.discard-btn {
		flex-shrink: 0;
		width: 44px;
		padding: var(--space-sm);
		background-color: var(--bg-tertiary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		color: var(--text-muted);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
		cursor: pointer;
	}

	.discard-btn:hover {
		background-color: var(--bg-primary);
		border-color: var(--accent-primary);
		color: var(--accent-primary);
		transform: scale(1.01);
	}

	.discard-btn.active {
		background-color: var(--accent-light);
		border-color: var(--accent-primary);
		color: var(--accent-primary);
	}

	:global([data-theme='dark']) .discard-btn.active {
		background-color: rgba(59, 130, 246, 0.15);
		border-color: #3b82f6;
		color: #60a5fa;
	}

	.discard-btn.active:hover {
		background-color: var(--success-light);
		border-color: var(--success);
		color: var(--success);
	}

	:global([data-theme='dark']) .discard-btn.active:hover {
		background-color: rgba(16, 185, 129, 0.15);
		border-color: #10b981;
		color: #34d399;
	}

	.help-wrapper {
		margin-top: var(--space-xl);
		padding-top: var(--space-xl);
		border-top: 1px solid var(--border-light);
	}

	@media (max-width: 768px) {
		.question-container {
			padding: var(--space-lg);
		}

		.question-number {
			font-size: var(--text-sm-mobile);
		}

		.question-actions {
			gap: var(--space-xs);
		}

		.btn-form {
			font-size: var(--text-xs-mobile);
			padding: 4px 8px;
		}

		.btn-form span {
			display: none;
		}

		.tag {
			font-size: 0.65rem;
			padding: 2px var(--space-xs);
		}

		.statement-text {
			font-size: var(--text-sm-mobile);
		}

		.alternative {
			padding: var(--space-xs) var(--space-sm);
			gap: var(--space-sm);
		}

		.alternative:hover:not(:disabled) {
			transform: none;
			box-shadow: none;
		}

		.alternative-letter {
			width: 28px;
			height: 28px;
			font-size: var(--text-sm-mobile);
		}

		.alternative-main {
			font-size: var(--text-sm-mobile);
		}

		.discard-btn {
			width: 36px;
			padding: var(--space-xs);
		}
	}

	@media (max-width: 640px) {
		.question-container {
			padding: var(--space-md);
		}

		.discard-btn {
			width: 32px;
			padding: 4px;
		}

		.alternative-letter {
			width: 24px;
			height: 24px;
			font-size: var(--text-xs-mobile);
		}
	}

	@media print {
		.question-container {
			page-break-inside: avoid;
		}

		.discard-btn,
		.invert-toggle {
			display: none;
		}
	}
</style>
