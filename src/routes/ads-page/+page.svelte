<script lang="ts">
	import { goto } from '$app/navigation';
	import { ADSENSE_CLIENT_ID } from '$lib/variables';
	import { onMount } from 'svelte';

	const adSlots = ['1560831006', '1560831006', '1560831006', '1560831006'];

	function handleGoBack() {
		goto('/');
	}

	onMount(() => {
		// Initialize AdSense ads
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const adsbygoogle = (window as any).adsbygoogle || [];
		adSlots.forEach(() => {
			adsbygoogle.push({});
		});
	});
</script>

<svelte:head>
	<title>Anúncios - Simulado EUF</title>
	<meta name="description" content="Veja anúncios para ajudar a manter o Simulado EUF gratuito" />
	<meta name="robots" content="noindex, nofollow" />
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4991464670829350"
		crossorigin="anonymous"
	></script>
</svelte:head>

<div class="ads-page">
	<div class="container">
		<div class="header-section">
			<button class="btn-back btn-secondary" onclick={handleGoBack}> ← Voltar </button>
			<h1>Apoie o Simulado EUF</h1>
			<p class="message">Para ajudar ainda mais, que tal clicar em um anúncio?</p>
		</div>

		<div class="ads-container">
			{#each adSlots as adSlot, index (index)}
				<div class="ad-block">
					<ins
						class="adsbygoogle"
						style="display:block"
						data-ad-client={ADSENSE_CLIENT_ID}
						data-ad-slot={adSlot}
						data-ad-format="auto"
						data-full-width-responsive="true"
					></ins>
				</div>
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

	.ads-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
		max-width: 900px;
		margin: 0 auto;
	}

	.ad-block {
		min-height: 250px;
		width: 100%;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-md);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: var(--text-2xl);
		}

		.message {
			font-size: var(--text-base);
		}

		.ads-container {
			gap: var(--space-xl);
		}

		.ad-block {
			min-height: 200px;
		}
	}
</style>
