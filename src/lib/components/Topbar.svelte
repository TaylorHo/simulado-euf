<script lang="ts">
	import { page } from '$app/stores';
	import { Moon, Sun, Github } from '@lucide/svelte';

	const currentPath = $derived($page.url.pathname);

	interface Props {
		isDark: boolean;
		toggleTheme: () => void;
	}

	let { isDark, toggleTheme }: Props = $props();
</script>

<nav class="topbar">
	<div class="container topbar-content">
		<a href="/" class="logo">
			<span class="logo-text">Simulado EUF</span>
		</a>

		<div class="nav-links">
			<a href="/" class="nav-link {currentPath === '/' ? 'active' : ''}"> Início </a>
			<a href="/simulado" class="nav-link {currentPath.startsWith('/simulado') ? 'active' : ''}">
				Simulado
			</a>
			<a href="/flashcard" class="nav-link {currentPath.startsWith('/flashcard') ? 'active' : ''}">
				Flashcard
			</a>
			<button class="theme-toggle" title="Mudar tema" onclick={toggleTheme}>
				{#if isDark}
					<Sun size={18} />
				{:else}
					<Moon size={18} />
				{/if}
			</button>
			<a
				href="https://github.com/TaylorHo/simulado-euf"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-link github-link"
				title="Ver no GitHub"
			>
				<Github size={20} />
			</a>
		</div>
	</div>
</nav>

<style>
	.topbar {
		background-color: var(--bg-secondary);
		border-bottom: 1px solid var(--border-light);
		height: var(--topbar-height);
		position: sticky;
		top: 0;
		z-index: 100;
		box-shadow: var(--shadow-sm);
	}

	.topbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: var(--topbar-height);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		transition: background-color var(--transition-fast);
		font-weight: 600;
		color: var(--text-primary);
		text-decoration: none;
	}

	.logo:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.logo-text {
		font-size: var(--text-lg);
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.nav-link {
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-md);
		color: var(--text-secondary);
		font-weight: 400;
		font-size: var(--text-sm);
		transition: all var(--transition-fast);
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		text-decoration: none;
	}

	.nav-link:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.nav-link.active {
		background-color: var(--accent-primary);
		color: white;
		font-weight: 600;
	}

	.github-link {
		padding: var(--space-sm);
	}

	.theme-toggle {
		padding: var(--space-sm);
		border-radius: var(--radius-md);
		background-color: transparent;
		color: var(--text-secondary);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
		border: none;
		cursor: pointer;
	}

	.theme-toggle:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
		transform: rotate(15deg);
	}

	.theme-toggle:active {
		transform: scale(0.95);
	}

	@media (max-width: 640px) {
		.logo-text {
			display: none;
		}

		.nav-link:not(.github-link) {
			padding: var(--space-sm) var(--space-md);
			font-size: var(--text-xs);
		}
	}

	@media print {
		.topbar {
			display: none;
		}
	}
</style>
