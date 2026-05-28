<script lang="ts">
	import { page } from '$app/state';
	import { BookOpen, FileText, Home, Wrench } from '@lucide/svelte';

	const navItems = [
		{ href: '/', label: 'Home', icon: Home, isActive: (path: string) => path === '/' },
		{
			href: '/simulado/',
			label: 'Simulado',
			icon: FileText,
			isActive: (path: string) => path.startsWith('/simulado')
		},
		{
			href: '/flashcard/',
			label: 'Flashcard',
			icon: BookOpen,
			isActive: (path: string) => path.startsWith('/flashcard')
		},
		{
			href: '/changelog/',
			label: 'Changelog',
			icon: Wrench,
			isActive: (path: string) => path.startsWith('/changelog')
		}
	];
</script>

<nav class="bottom-nav" aria-label="Navegacao principal">
	<div class="bottom-nav-inner">
		{#each navItems as item (item.href)}
			<a href={item.href} class="nav-item" class:active={item.isActive(page.url.pathname)}>
				<item.icon size={20} />
				<span>{item.label}</span>
			</a>
		{/each}
	</div>
</nav>

<style>
	.bottom-nav {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 120;
		background-color: color-mix(in srgb, var(--bg-secondary) 95%, transparent);
		border-top: 1px solid var(--border-light);
		padding-bottom: max(var(--safe-area-inset-bottom), env(safe-area-inset-bottom, 0px));
		backdrop-filter: blur(10px);
	}

	.bottom-nav-inner {
		max-width: 720px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--space-xs);
		padding: var(--space-sm) var(--space-sm);
	}

	.nav-item {
		min-height: 52px;
		padding: var(--space-sm) var(--space-sm);
		border-radius: var(--radius-md);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		text-decoration: none;
		color: var(--text-muted);
		font-size: 0.7rem;
		font-weight: 600;
		transition: all var(--transition-fast);
	}

	.nav-item:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.nav-item:active {
		transform: scale(0.98);
	}

	.nav-item.active {
		color: var(--accent-primary);
		background-color: var(--accent-light);
	}

	:global([data-theme='dark']) .nav-item.active {
		background-color: rgba(59, 130, 246, 0.2);
		color: #93c5fd;
	}
</style>
