<script lang="ts">
	import { Area } from '$lib/models/area';
	import type { Question } from '$lib/models/question';
	import { Subarea } from '$lib/models/subareas';
	import { generateQuestionId } from '$lib/services/identifiers';
	import { getImagePath } from '$lib/utils/helpers';
	import { getQuestionTitle } from '$lib/utils/questionBank';
	import LaTeX from './LaTeX.svelte';
	import { ExternalLink } from '@lucide/svelte';

	const AREA_TAG_COLORS: Record<Area, { bg: string; color: string }> = {
		[Area.MecanicaClassica]: { bg: 'rgba(37, 99, 235, 0.12)', color: '#2563eb' },
		[Area.Eletromagnetismo]: { bg: 'rgba(124, 58, 237, 0.12)', color: '#7c3aed' },
		[Area.Termodinamica]: { bg: 'rgba(234, 88, 12, 0.12)', color: '#ea580c' },
		[Area.FisicaModerna]: { bg: 'rgba(219, 39, 119, 0.12)', color: '#db2777' },
		[Area.MecanicaQuantica]: { bg: 'rgba(8, 145, 178, 0.12)', color: '#0891b2' },
		[Area.FisicaEstatistica]: { bg: 'rgba(22, 163, 74, 0.12)', color: '#16a34a' }
	};

	function getTagLabel(area: Area, tag: string): string {
		const entry = Object.entries(Subarea[area]).find(([, value]) => value === tag);
		if (!entry) return tag;
		return entry[0]
			.replace(/([A-Z])/g, ' $1')
			.replace(/^./, (char) => char.toUpperCase())
			.trim();
	}

	interface Props {
		question: Question;
	}

	let { question }: Props = $props();

	const title = $derived(getQuestionTitle(question));
	const href = $derived(`/flashcard/${generateQuestionId(question)}/`);
	const imagePath = $derived(getImagePath(question.statement.image));
	const tagColors = $derived(AREA_TAG_COLORS[question.area]);

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

	{#if question.tags.length > 0}
		<div class="question-tags">
			{#each question.tags as tag (tag)}
				<span
					class="question-tag"
					style="background-color: {tagColors.bg}; color: {tagColors.color};"
					title={tag}
				>
					{getTagLabel(question.area, tag)}
				</span>
			{/each}
		</div>
	{/if}

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

	.question-list-item:has(.question-tags) {
		padding-bottom: calc(var(--space-md) + 1.5rem);
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

	.question-tags {
		position: absolute;
		bottom: var(--space-sm);
		left: var(--space-lg);
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		max-width: calc(100% - 2 * var(--space-lg));
	}

	.question-tag {
		display: inline-block;
		padding: 2px var(--space-sm);
		border-radius: var(--radius-md);
		font-size: var(--text-xs);
		font-weight: 500;
		line-height: 1.4;
		white-space: nowrap;
	}

	:global([data-theme='dark']) .question-tag {
		filter: brightness(1.15);
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
