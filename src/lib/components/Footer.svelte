<script lang="ts">
	import { Github, Linkedin } from '@lucide/svelte';
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
				<Github size={16} />
				Taylor Hoffmann
			</a>
			<span class="separator">•</span>
			<a
				href="https://linkedin.com/in/hoffmann-taylor"
				target="_blank"
				rel="noopener noreferrer"
				class="footer-link"
			>
				<Linkedin size={16} />
				LinkedIn
			</a>
		</p>
		<p class="footer-subtext">Simulador baseado em questões reais do Exame Unificado de Física</p>
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
