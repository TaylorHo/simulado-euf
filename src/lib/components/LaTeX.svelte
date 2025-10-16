<script lang="ts">
	import { onMount } from 'svelte';
	import katex from 'katex';

	interface Props {
		content: string;
	}

	let { content }: Props = $props();

	let containerElement: HTMLElement;

	function renderLaTeX(text: string): string {
		if (!text) return '';

		// Replace LaTeX expressions between $ or $$
		// Display mode: $$ ... $$
		text = text.replace(/\$\$(.*?)\$\$/g, (_, latex) => {
			try {
				return katex.renderToString(latex, {
					displayMode: true,
					throwOnError: false,
					strict: false
				});
			} catch (e) {
				console.error(e);
				return `$$${latex}$$`;
			}
		});

		// Inline mode: $ ... $
		text = text.replace(/\$(.*?)\$/g, (_, latex) => {
			try {
				return katex.renderToString(latex, {
					displayMode: false,
					throwOnError: false,
					strict: false
				});
			} catch (e) {
				console.error(e);
				return `$${latex}$`;
			}
		});

		return text;
	}

	onMount(() => {
		if (containerElement) {
			// eslint-disable-next-line svelte/no-dom-manipulating
			containerElement.innerHTML = renderLaTeX(content);
		}
	});

	$effect(() => {
		if (containerElement && content) {
			// eslint-disable-next-line svelte/no-dom-manipulating
			containerElement.innerHTML = renderLaTeX(content);
		}
	});
</script>

<span bind:this={containerElement} class="latex-container"></span>

<style>
	.latex-container {
		display: inline;
	}

	.latex-container :global(.katex) {
		font-size: 1.1em;
	}

	.latex-container :global(.katex-display) {
		margin: var(--space-md) 0;
		overflow-x: auto;
		overflow-y: hidden;
	}
</style>
