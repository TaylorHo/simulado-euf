<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import {
		fetchChangelogIssues,
		type ChangelogLoadResult
	} from '$lib/changelog/fetchChangelogIssues';
	import { BASE_URL, GITHUB_REPO_URL } from '$lib/variables';
	import { Bug, CirclePlus, ExternalLink, Sparkles, Wrench } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const emptyChangelog: ChangelogLoadResult = {
		closed: [],
		openBugs: [],
		openEnhancements: [],
		error: null
	};

	let isLoading = $state(false);
	let mobileData = $state<ChangelogLoadResult>(emptyChangelog);

	const changelogData = $derived(mobileData);

	onMount(() => {
		isLoading = true;
		fetchChangelogIssues().then((result) => {
			mobileData = result;
			isLoading = false;
		});
	});
</script>

<svelte:head>
	<title>Problemas Reportados e Correções — Simulado EUF</title>
	<meta
		name="description"
		content="Acompanhe os problemas reportados pela comunidade no Simulado EUF. Veja bugs abertos em processo de correção e problemas já resolvidos pela equipe."
	/>
	<link rel="canonical" href={`${BASE_URL}/changelog/`} />
</svelte:head>

<main class="page">
	<div class="page-body">
		<div class="container">
			<header class="header">
				<div class="icon-wrap">
					<Wrench size={40} strokeWidth={1.5} />
				</div>
				<h1>Problemas Reportados e Correções</h1>
				<p class="lead">
					Acompanhe os problemas reportados pela comunidade: veja o que está em análise e o que já
					foi corrigido.
				</p>
				<a
					class="btn-primary new-issue-cta"
					href={`${GITHUB_REPO_URL}/issues/new/choose`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<CirclePlus size={20} strokeWidth={2} aria-hidden="true" />
					Reportar novo problema
				</a>
			</header>

			{#if isLoading}
				<p class="loading" aria-live="polite">Carregando problemas reportados…</p>
			{:else if changelogData.error}
				<p class="error" role="alert">{changelogData.error}</p>
			{/if}

			<section class="section" aria-labelledby="bugs-heading">
				<div class="section-header">
					<Bug size={24} strokeWidth={1.8} />
					<h2 id="bugs-heading">Problemas em aberto ({changelogData.openBugs.length})</h2>
				</div>
				{#if !isLoading && changelogData.openBugs.length === 0 && !changelogData.error}
					<p class="empty">Nenhum problema aberto no momento.</p>
				{:else if !isLoading}
					<ul class="list">
						{#each changelogData.openBugs as item (item.htmlUrl)}
							<li>
								<a class="issue-link" href={item.htmlUrl} target="_blank" rel="noopener noreferrer">
									<span class="issue-title">{item.title}</span>
									<span class="badge badge-bug">Bug</span>
									<ExternalLink class="external" size={18} aria-hidden="true" />
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>

			<section class="section" aria-labelledby="enhancements-heading">
				<div class="section-header">
					<Sparkles size={24} strokeWidth={1.8} />
					<h2 id="enhancements-heading">
						Funcionalidades em aberto ({changelogData.openEnhancements.length})
					</h2>
				</div>
				{#if !isLoading && changelogData.openEnhancements.length === 0 && !changelogData.error}
					<p class="empty">Nenhuma funcionalidade pendente no momento.</p>
				{:else if !isLoading}
					<ul class="list">
						{#each changelogData.openEnhancements as item (item.htmlUrl)}
							<li>
								<a class="issue-link" href={item.htmlUrl} target="_blank" rel="noopener noreferrer">
									<span class="issue-title">{item.title}</span>
									<span class="badge badge-enhancement">Funcionalidade</span>
									<ExternalLink class="external" size={18} aria-hidden="true" />
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>

			<section class="section" aria-labelledby="closed-heading">
				<div class="section-header">
					<h2 id="closed-heading">Resolvidos ({changelogData.closed.length})</h2>
				</div>
				{#if !isLoading && changelogData.closed.length === 0 && !changelogData.error}
					<p class="empty">Ainda não há itens resolvidos nesta lista.</p>
				{:else if !isLoading}
					<ul class="list">
						{#each changelogData.closed as item (item.htmlUrl)}
							<li>
								<a class="issue-link" href={item.htmlUrl} target="_blank" rel="noopener noreferrer">
									<span class="issue-title">{item.title}</span>
									<span class="badge badge-closed">Resolvido</span>
									<ExternalLink class="external" size={18} aria-hidden="true" />
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		</div>
	</div>

	<Footer />
</main>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--topbar-height));
		background-color: var(--bg-primary);
	}

	.page-body {
		flex: 1 1 auto;
		padding: var(--space-2xl) 0;
		width: 100%;
	}

	.container {
		width: 100%;
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.header {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 72px;
		height: 72px;
		border-radius: var(--radius-xl);
		background-color: var(--accent-light);
		color: var(--accent-primary);
		margin-bottom: var(--space-md);
	}

	:global([data-theme='dark']) .icon-wrap {
		background-color: rgba(59, 130, 246, 0.15);
	}

	.header h1 {
		font-size: var(--text-3xl);
		margin: 0 0 var(--space-md) 0;
		color: var(--text-primary);
	}

	.lead {
		font-size: var(--text-base);
		color: var(--text-secondary);
		line-height: 1.55;
		max-width: 520px;
		margin: 0 auto var(--space-md);
	}

	.new-issue-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		margin-top: var(--space-md);
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-md);
		font-weight: 600;
		text-decoration: none;
		color: white;
		min-height: 48px;
	}

	.new-issue-cta:hover {
		color: white;
	}

	.loading {
		color: var(--text-secondary);
		text-align: center;
		margin-bottom: var(--space-xl);
	}

	.error {
		background-color: rgba(239, 68, 68, 0.12);
		border: 1px solid rgba(239, 68, 68, 0.4);
		color: var(--text-primary);
		padding: var(--space-md);
		border-radius: var(--radius-md);
		margin-bottom: var(--space-xl);
		text-align: center;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
		color: var(--text-primary);
	}

	.section h2 {
		font-size: var(--text-xl);
		margin: 0;
		color: var(--text-primary);
	}

	.section + .section {
		margin-top: var(--space-2xl);
	}

	.empty {
		color: var(--text-secondary);
		font-size: var(--text-sm);
		margin: 0;
	}

	.list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.issue-link {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		padding: var(--space-md) var(--space-lg);
		min-height: 56px;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		text-decoration: none;
		color: inherit;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.issue-link:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}

	.issue-title {
		flex: 1;
		min-width: 0;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--text-primary);
		line-height: 1.4;
	}

	.issue-link :global(.external) {
		flex-shrink: 0;
		color: var(--text-secondary);
		opacity: 0.7;
	}

	.badge {
		flex-shrink: 0;
		font-size: var(--text-xs);
		font-weight: 600;
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-sm);
	}

	.badge-bug {
		background-color: rgba(239, 68, 68, 0.15);
		color: #dc2626;
	}

	:global([data-theme='dark']) .badge-bug {
		background-color: rgba(239, 68, 68, 0.2);
		color: #f87171;
	}

	.badge-enhancement {
		background-color: rgba(59, 130, 246, 0.15);
		color: #2563eb;
	}

	:global([data-theme='dark']) .badge-enhancement {
		background-color: rgba(59, 130, 246, 0.2);
		color: #60a5fa;
	}

	.badge-closed {
		background-color: var(--success-light);
		color: #16a34a;
	}

	:global([data-theme='dark']) .badge-closed {
		background-color: rgba(16, 185, 129, 0.15);
		color: #34d399;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 var(--space-md);
		}

		.new-issue-cta {
			width: 100%;
		}

		.issue-link {
			padding: var(--space-md);
			gap: var(--space-sm);
		}
	}
</style>
