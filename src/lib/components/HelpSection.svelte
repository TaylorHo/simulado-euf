<script lang="ts">
	import type { Question } from '$lib/models/question';
	import HelpSectionInner from './HelpSectionInner.svelte';

	interface Props {
		question: Question;
		isCorrect?: boolean;
	}

	let { question, isCorrect = false }: Props = $props();
</script>

{#if isCorrect}
	<details class="help-collapsible">
		<summary>Quer aprofundar na questão?</summary>
		<HelpSectionInner {question} />
	</details>
{:else}
	<div class="help-section">
		<h4>Precisa de ajuda com esta questão?</h4>
		<HelpSectionInner {question} />
	</div>
{/if}

<style>
	.help-section {
		padding: var(--space-lg);
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
	}

	.help-section h4 {
		margin: 0 0 var(--space-md) 0;
		font-size: var(--text-base);
		color: var(--text-primary);
	}

	.help-collapsible {
		padding: var(--space-md);
		background-color: var(--bg-secondary);
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
	}

	.help-collapsible summary {
		cursor: pointer;
		font-weight: 600;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		padding: var(--space-sm);
		border-radius: var(--radius-sm);
		transition: all var(--transition-fast);
		list-style: none;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.help-collapsible summary::-webkit-details-marker {
		display: none;
	}

	.help-collapsible summary::before {
		content: '▶';
		display: inline-block;
		transition: transform var(--transition-fast);
		font-size: 0.7em;
	}

	.help-collapsible[open] summary::before {
		transform: rotate(90deg);
	}

	.help-collapsible summary:hover {
		color: var(--text-primary);
		background-color: var(--bg-tertiary);
	}

	@media (max-width: 768px) {
		.help-section {
			padding: var(--space-md);
		}

		.help-section h4 {
			font-size: var(--text-sm-mobile);
		}

		.help-collapsible {
			padding: var(--space-sm) var(--space-md);
		}

		.help-collapsible summary {
			font-size: var(--text-xs-mobile);
			padding: var(--space-xs);
		}
	}
</style>
