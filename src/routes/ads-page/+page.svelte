<script lang="ts">
	import { goto } from '$app/navigation';

	function handleGoBack() {
		goto('/');
	}

	const adsQuantity = 20;
</script>

<svelte:head>
	<title>Anúncios - Simulado EUF</title>
	<meta name="description" content="Veja anúncios para ajudar a manter o Simulado EUF gratuito" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="ads-page">
	<div class="container">
		<div class="header-section">
			<button class="btn-back btn-secondary" onclick={handleGoBack}> ← Voltar </button>
			<h1>Apoie o Simulado EUF</h1>
			<p class="message">Para ajudar ainda mais, que tal clicar em um anúncio?</p>
		</div>

		<div style="text-align: center;">
			{#each Array.from({ length: adsQuantity }) as key (key)}
				<script>
					atOptions = {
						key: '07eab4918d3fe61746a31105622da249',
						format: 'iframe',
						height: 60,
						width: 468,
						params: {}
					};
				</script>
				<script
					src="https://openairtowhardworking.com/07eab4918d3fe61746a31105622da249/invoke.js"
				></script>
			{/each}
		</div>
	</div>
</div>

<style>
	.ads-page {
		min-height: 100vh;
		background-color: var(--bg-primary);
		padding: var(--space-xl) 0;
	}

	.container {
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.header-section {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.btn-back {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		margin-bottom: var(--space-xl);
		padding: var(--space-sm) var(--space-lg);
	}

	h1 {
		font-size: var(--text-3xl);
		color: var(--text-primary);
		margin-bottom: var(--space-md);
	}

	.message {
		font-size: var(--text-lg);
		color: var(--text-secondary);
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: var(--text-2xl);
		}

		.message {
			font-size: var(--text-base);
		}
	}
</style>
