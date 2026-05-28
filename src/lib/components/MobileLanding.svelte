<script lang="ts">
	import { goto } from '$app/navigation';
	import { BASE_URL } from '$lib/variables';
	import { BookOpen, FileText } from '@lucide/svelte';
</script>

<section class="mobile-landing">
	<div class="landing-card">
		<div class="hero-copy">
			<h1>Simulado EUF</h1>
			<p>Treine com questoes reais e revise os principais temas do exame.</p>
		</div>

		<div class="actions">
			<button class="btn-primary action-btn" onclick={() => goto('/simulado/')}>
				<FileText size={20} />
				Iniciar Simulado
			</button>
			<button class="btn-secondary action-btn" onclick={() => goto('/flashcard/')}>
				<BookOpen size={20} />
				Abrir Flashcards
			</button>
		</div>

		<a href={BASE_URL} target="_blank" rel="noopener noreferrer" class="footer-text"
			>Acessar o site</a
		>
	</div>
</section>

<style>
	.mobile-landing {
		min-height: calc(100vh - 72px - var(--safe-area-inset-bottom));
		display: flex;
		align-items: center;
		justify-content: center;
		padding: var(--space-xl) var(--space-md);
	}

	.landing-card {
		width: 100%;
		max-width: 420px;
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		padding: var(--space-xl);
		border-radius: var(--radius-xl);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		box-shadow: var(--shadow-sm);
	}

	.hero-copy h1 {
		font-size: var(--text-3xl);
		margin: 0 0 var(--space-sm);
	}

	.hero-copy p {
		margin: 0;
		color: var(--text-secondary);
	}

	.actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.action-btn {
		min-height: 52px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-weight: 600;
	}

	.footer-text {
		margin: 0;
		text-align: center;
		font-size: var(--text-xs);
		color: var(--text-muted);
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
</style>
