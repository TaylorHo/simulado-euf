<script lang="ts">
	import { goto } from '$app/navigation';
	import { BASE_URL } from '$lib/variables';
	import { buildExamPath } from '$lib/utils/helpers';
	import { examStore } from '$lib/stores/exam.svelte';
	import { themeStore } from '$lib/stores/theme';
	import Modal from '$lib/components/Modal.svelte';
	import QRScanner from '$lib/components/QRScanner.svelte';
	import { BookOpen, ChevronRight, FileText, Moon, QrCode, Sun } from '@lucide/svelte';
	import AnnouncementCallout from '$lib/components/AnnouncementCallout.svelte';
	import { fetchLatestAnnouncement } from '$lib/announcements/fetchLatestAnnouncement';
	import type { Announcement } from '$lib/models/announcement';
	import { onMount } from 'svelte';

	let showQRModal = $state(false);
	let isDark = $state(false);
	let latestAnnouncement = $state<Announcement | null>(null);

	themeStore.subscribe((value) => {
		isDark = value;
	});

	onMount(() => {
		fetchLatestAnnouncement().then((result) => {
			latestAnnouncement = result.latest;
		});
	});

	function handleScanQR() {
		showQRModal = true;
	}

	function handleQRScan(url: URL) {
		const id = url.searchParams.get('id');
		const seed = url.searchParams.get('seed');
		showQRModal = false;
		if (id && seed) {
			examStore.prepareQrLoad(id, seed);
			goto(buildExamPath(id, '/simulado', seed));
		} else {
			alert('Código inválido. Por favor, tente novamente.');
		}
	}
</script>

<section class="mobile-landing">
	<header class="landing-header">
		<div class="hero-copy">
			<h1>Simulado EUF</h1>
			<p>Treine com questões reais e revise os principais temas do exame.</p>
		</div>
		<button
			class="theme-toggle"
			title="Mudar tema"
			aria-label="Mudar tema"
			onclick={() => themeStore.toggle()}
		>
			{#if isDark}
				<Sun size={18} />
			{:else}
				<Moon size={18} />
			{/if}
		</button>
	</header>

	<div class="landing-body">
		<AnnouncementCallout announcement={latestAnnouncement} variant="mobile" />
		<button class="qr-callout" onclick={handleScanQR}>
			<div class="qr-callout-icon">
				<QrCode size={22} strokeWidth={1.5} />
			</div>
			<div class="qr-callout-text">
				<strong>Tem um simulado impresso?</strong>
				<span>Escaneie o QR Code para carregar seu simulado</span>
			</div>
			<span class="qr-callout-chevron" aria-hidden="true">
				<ChevronRight size={20} />
			</span>
		</button>

		<div class="actions">
			<button class="btn-primary action-btn" onclick={() => goto('/simulado/')}>
				<FileText size={22} />
				Iniciar Simulado
			</button>
			<button class="btn-secondary action-btn" onclick={() => goto('/flashcard/')}>
				<BookOpen size={22} />
				Abrir Flashcards
			</button>
		</div>
	</div>

	<footer class="landing-footer">
		<a href={BASE_URL} target="_blank" rel="noopener noreferrer">Acessar o site completo</a>
	</footer>
</section>

<Modal open={showQRModal} title="Carregar Simulado" onClose={() => (showQRModal = false)}>
	<QRScanner onScan={handleQRScan} />
</Modal>

<style>
	.mobile-landing {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 72px - var(--safe-area-inset-bottom));
		padding: calc(var(--safe-area-inset-top) + var(--space-lg)) var(--space-lg) var(--space-xl);
		background-color: var(--bg-primary);
	}

	.landing-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--space-md);
		margin-bottom: var(--space-2xl);
	}

	.hero-copy {
		flex: 1;
		min-width: 0;
	}

	.hero-copy h1 {
		font-size: var(--text-3xl);
		font-weight: 800;
		line-height: 1.15;
		margin: 0 0 var(--space-sm);
		letter-spacing: -0.02em;
	}

	.hero-copy p {
		margin: 0;
		font-size: var(--text-base);
		line-height: 1.55;
		color: var(--text-secondary);
		max-width: 32ch;
	}

	.theme-toggle {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		min-height: unset;
		padding: 0;
		border-radius: var(--radius-md);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		color: var(--text-secondary);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.theme-toggle:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.landing-body {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.qr-callout {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		width: 100%;
		min-height: unset;
		padding: var(--space-md) var(--space-lg);
		border-radius: var(--radius-lg);
		background-color: color-mix(in srgb, var(--accent-primary) 10%, var(--bg-primary));
		border: 1px solid color-mix(in srgb, var(--accent-primary) 22%, var(--border-light));
		color: var(--text-primary);
		cursor: pointer;
		text-align: left;
		transition: all var(--transition-fast);
	}

	.qr-callout:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}

	.qr-callout:active {
		transform: scale(0.99);
	}

	.qr-callout-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: var(--radius-md);
		background-color: var(--accent-light);
		color: var(--accent-primary);
	}

	.qr-callout-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.qr-callout-text strong {
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--text-primary);
	}

	.qr-callout-text span {
		font-size: var(--text-xs);
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.qr-callout-chevron {
		flex-shrink: 0;
		display: flex;
		color: var(--text-muted);
	}

	.actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.action-btn {
		width: 100%;
		min-height: 56px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-size: var(--text-base);
		font-weight: 600;
		border-radius: var(--radius-lg);
	}

	.landing-footer {
		margin-top: auto;
		padding-top: var(--space-2xl);
		text-align: center;
	}

	.landing-footer a {
		font-size: var(--text-sm);
		color: var(--text-muted);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.landing-footer a:hover {
		color: var(--accent-primary);
	}
</style>
