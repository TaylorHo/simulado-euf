<script lang="ts">
	import { onMount } from 'svelte';
	import { Heart, HeartCrack } from '@lucide/svelte';
	import { ADS_ENABLED, BASE_URL } from '$lib/variables';
	import { adsPreferenceStore } from '$lib/stores/ads.svelte';
	import { isTauriMobileApp } from '$lib/utils/platform';
	import GitHub from './icons/GitHub.svelte';
	import LinkedIn from './icons/LinkedIn.svelte';

	let isTauriMobile = $state(false);

	onMount(() => {
		isTauriMobile = isTauriMobileApp();
	});
</script>

<div class="footer">
	<div class="container footer-content">
		<p class="footer-text">
			Criado por
			<a
				href="https://github.com/TaylorHo"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-link"
			>
				<GitHub size={16} />
				Taylor Hoffmann
			</a>
			<span class="separator">•</span>
			<a
				href="https://linkedin.com/in/hoffmann-taylor"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-link"
			>
				<LinkedIn size={16} />
				LinkedIn
			</a>
		</p>
		<p class="footer-subtext">Simulador baseado em questões reais do Exame Unificado de Física</p>
		<a class="footer-subtext" href={isTauriMobile ? `${BASE_URL}/privacy/` : '/privacy/'}
			>Política de Privacidade</a
		>

		{#if ADS_ENABLED && !isTauriMobile}
			<div class="ads-toggle">
				<button
					class="ads-toggle-btn"
					onclick={() => adsPreferenceStore.toggle()}
					title={adsPreferenceStore.enabled ? 'Desativar anúncios' : 'Ativar anúncios'}
				>
					{#if adsPreferenceStore.enabled}
						<Heart size={16} />
						<span>Anúncios ativos</span>
					{:else}
						<HeartCrack size={16} />
						<span>Anúncios desativados</span>
					{/if}
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.footer {
		background-color: var(--bg-secondary);
		border-top: 1px solid var(--border-light);
		padding: var(--space-2xl) 0;
		margin-top: var(--space-2xl);
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		text-align: center;
	}

	.footer-text {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		margin: 0;
	}

	.footer-link {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		color: var(--accent-primary);
		font-weight: 500;
		transition: color var(--transition-fast);
	}

	.footer-link:hover {
		color: var(--accent-hover);
	}

	.separator {
		color: var(--text-muted);
	}

	.footer-subtext {
		font-size: var(--text-xs);
		color: var(--text-muted);
		margin: 0;
	}

	.ads-toggle {
		margin-top: var(--space-md);
	}

	.ads-toggle-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-xs) var(--space-sm);
		font-size: var(--text-xs);
		color: var(--text-secondary);
		background-color: var(--bg-primary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.ads-toggle-btn:hover {
		color: var(--accent-primary);
		border-color: var(--accent-primary);
		transform: translateY(-1px);
	}

	.ads-toggle-btn span {
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.footer {
			padding: var(--space-lg) 0;
			margin-top: var(--space-lg);
		}

		.footer-text {
			font-size: var(--text-xs-mobile);
		}

		.footer-subtext {
			font-size: 0.65rem;
		}
	}

	@media print {
		.footer {
			display: none;
		}
	}
</style>
