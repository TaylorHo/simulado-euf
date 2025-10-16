<script lang="ts">
	import { goto } from '$app/navigation';
	import Landing from '$lib/components/Landing.svelte';
	import Footer from '$lib/components/Footer.svelte';

	function handleStartExam() {
		goto('/simulado');
	}

	function handleStartFlashcard() {
		goto('/flashcard');
	}
</script>

<svelte:head>
	<title>Simulado EUF - Exame Unificado de Física</title>
	<meta
		name="description"
		content="Prepare-se para o EUF com simulados e flashcards baseados em provas anteriores do Exame Unificado de Física da Pós-Graduação."
	/>
</svelte:head>

<main>
	<Landing onStartExam={handleStartExam} onStartFlashcard={handleStartFlashcard} />
	<Footer />
</main>

<style>
	main {
		min-height: 100vh;
		background-color: var(--bg-primary);
	}
</style>
