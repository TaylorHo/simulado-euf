<script lang="ts">
	import type { Question } from '$lib/models/question';
	import { generateQuestionId } from '$lib/services/identifiers';
	import { getImagePath } from '$lib/utils/helpers';
	import { getQuestionTitle } from '$lib/utils/questionBank';
	import LaTeX from './LaTeX.svelte';
	import { ExternalLink } from '@lucide/svelte';

	interface Props {
		question: Question;
	}

	let { question }: Props = $props();

	const title = $derived(getQuestionTitle(question));
	const href = $derived(`/flashcard/${generateQuestionId(question)}/`);
	const imagePath = $derived(getImagePath(question.statement.image));

	let previewRef = $state<HTMLElement | null>(null);
	let isOverflowing = $state(false);

	$effect(() => {
		const element = previewRef;
		const text = question.statement.text;

		if (!element || !text) {
			isOverflowing = false;
			return;
		}

		const updateOverflow = () => {
			isOverflowing = element.scrollHeight > element.clientHeight + 1;
		};

		updateOverflow();

		const observer = new ResizeObserver(updateOverflow);
		observer.observe(element);

		return () => observer.disconnect();
	});
</script>

<a class="question-list-item" {href}>
	<ExternalLink class="open-icon" size={16} aria-hidden="true" />

	<div class="question-content">
		<h3 class="question-title">{title}</h3>
		{#if question.statement.text}
			<div class="question-preview" class:fade={isOverflowing} bind:this={previewRef}>
				<LaTeX content={question.statement.text} />
			</div>
		{/if}
	</div>

	{#if imagePath}
		<img class="question-thumbnail" src={imagePath} alt="" loading="lazy" decoding="async" />
	{/if}
</a>

<style>
	.question-list-item {
		position: relative;
		display: flex;
		align-items: flex-start;
		gap: var(--space-md);
		width: 100%;
		padding: var(--space-md) var(--space-lg);
		min-height: 56px;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		text-align: left;
		text-decoration: none;
		color: inherit;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
	}

	.question-list-item:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
		transform: translateY(-1px);
	}

	.question-list-item :global(.open-icon) {
		position: absolute;
		top: var(--space-md);
		right: var(--space-lg);
		opacity: 0;
		color: var(--accent-primary);
		pointer-events: none;
		transition: opacity var(--transition-fast);
	}

	.question-list-item:hover :global(.open-icon) {
		opacity: 1;
	}

	.question-content {
		flex: 1;
		min-width: 0;
		padding-right: var(--space-lg);
	}

	.question-title {
		margin: 0 0 var(--space-xs);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--text-primary);
		line-height: 1.4;
	}

	.question-preview {
		max-height: 7rem;
		overflow: hidden;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.5;
	}

	.question-preview.fade {
		-webkit-mask-image: linear-gradient(to bottom, black calc(100% - 1.25rem), transparent 100%);
		mask-image: linear-gradient(to bottom, black calc(100% - 1.25rem), transparent 100%);
	}

	.question-preview :global(.latex-container) {
		display: block;
	}

	.question-preview :global(.katex) {
		font-size: 1em;
	}

	.question-preview :global(.katex-display) {
		margin: var(--space-xs) 0;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.question-preview :global(ul),
	.question-preview :global(ol) {
		padding-left: 1.25rem;
		margin: var(--space-xs) 0;
	}

	.question-thumbnail {
		flex-shrink: 0;
		width: 100px;
		max-width: 100px;
		height: auto;
		max-height: 72px;
		object-fit: contain;
		border-radius: var(--radius-sm);
		border: 1px solid var(--border-light);
		background-color: var(--bg-primary);
	}

	@media (max-width: 768px) {
		.question-list-item {
			padding: var(--space-md);
			gap: var(--space-sm);
		}

		.question-preview {
			max-height: 6rem;
		}

		.question-thumbnail {
			width: 72px;
			max-width: 72px;
			max-height: 56px;
		}
	}
</style>
