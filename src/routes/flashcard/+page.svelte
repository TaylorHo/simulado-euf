<script lang="ts">
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { flashcardStore } from '$lib/stores/flashcard.svelte';
	import { BASE_URL } from '$lib/variables';

	onMount(() => {
		// Check if there's an old-style query parameter
		const questionId = page.url.searchParams.get('id');

		if (questionId) {
			// Redirect to new path-based URL
			goto(`/flashcard/${questionId}/`, { replaceState: true });
		} else {
			// No ID provided, get a random question and redirect
			const question = flashcardStore.getRandomQuestion();
			if (question) {
				goto(`/flashcard/${flashcardStore.getQuestionId(question)}/`, {
					replaceState: true
				});
			}
		}
	});
</script>

<svelte:head>
	<title>Flashcard - Simulado EUF</title>
	<meta name="description" content="Pratique questões do EUF com flashcards aleatórios" />
	<link rel="canonical" href={`${BASE_URL}/flashcard/`} />
</svelte:head>

<div class="loading-page">
	<div class="spinner"></div>
	<p>Carregando flashcard...</p>
</div>

<style>
	.loading-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: calc(100vh - var(--topbar-height));
		gap: var(--space-lg);
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

	p {
		color: var(--text-secondary);
		font-size: var(--text-base);
	}
</style>
