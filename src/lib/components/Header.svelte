<script lang="ts">
	interface Props {
		title?: string;
		onBack?: () => void;
	}

	let { title = 'Simulado EUF', onBack }: Props = $props();
</script>

<header class="header">
	<div class="container">
		<div class="header-content">
			{#if onBack}
				<button class="back-btn" onclick={onBack} aria-label="Voltar">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
				</button>
			{/if}
			<h1 class="header-title">{title}</h1>
		</div>
	</div>
</header>

<style>
	.header {
		background-color: var(--bg-secondary);
		border-bottom: 1px solid var(--border-light);
		height: var(--topbar-height);
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: var(--shadow-sm);
	}

	.header-content {
		display: flex;
		align-items: center;
		height: var(--topbar-height);
		gap: var(--space-md);
	}

	.header-title {
		font-size: var(--text-xl);
		margin: 0;
		font-weight: 600;
		color: var(--text-primary);
	}

	.back-btn {
		padding: var(--space-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md);
		color: var(--text-primary);
		transition: background-color var(--transition-fast);
	}

	.back-btn:hover {
		background-color: var(--bg-tertiary);
	}

	@media print {
		.header {
			display: none;
		}
	}
</style>
