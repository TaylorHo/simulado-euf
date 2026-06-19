<script lang="ts">
	import type { Announcement } from '$lib/models/announcement';
	import { ExternalLink, Megaphone } from '@lucide/svelte';

	let {
		announcement,
		variant = 'web'
	}: {
		announcement: Announcement | null;
		variant?: 'web' | 'mobile';
	} = $props();

	function isExternalHref(href: string): boolean {
		return /^https?:\/\//i.test(href);
	}
</script>

{#if announcement}
	<aside
		class="announcement-callout"
		class:web={variant === 'web'}
		class:mobile={variant === 'mobile'}
		aria-labelledby="announcement-title"
	>
		<div class="announcement-icon" aria-hidden="true">
			<Megaphone size={variant === 'mobile' ? 20 : 22} strokeWidth={1.5} />
		</div>
		<div class="announcement-main">
			<div class="announcement-text">
				<span class="announcement-label">Atualização</span>
				<h2 id="announcement-title" class="announcement-title">{announcement.title}</h2>
				<p class="announcement-message">{announcement.message}</p>
			</div>
			{#if announcement.link}
				<a
					class="announcement-link"
					href={announcement.link.href}
					target={isExternalHref(announcement.link.href) ? '_blank' : undefined}
					rel={isExternalHref(announcement.link.href) ? 'noopener noreferrer' : undefined}
				>
					{announcement.link.label}
					{#if isExternalHref(announcement.link.href)}
						<ExternalLink size={14} aria-hidden="true" />
					{/if}
				</a>
			{/if}
		</div>
	</aside>
{/if}

<style>
	.announcement-callout {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		width: 100%;
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-xl);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		color: var(--text-primary);
		text-align: left;
		box-shadow: var(--shadow-sm);
	}

	.announcement-callout.web {
		margin: 0 0 var(--space-xl);
	}

	.announcement-icon {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: var(--radius-lg);
		background-color: var(--accent-light);
		color: var(--accent-primary);
	}

	.web .announcement-icon {
		width: 48px;
		height: 48px;
	}

	.announcement-main {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-lg);
		min-width: 0;
	}

	.announcement-text {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
		min-width: 0;
	}

	.announcement-label {
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent-primary);
		line-height: 1.2;
	}

	.announcement-title {
		margin: 0;
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.3;
	}

	.web .announcement-title {
		font-size: var(--text-lg);
	}

	.announcement-message {
		margin: 0;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.announcement-link {
		flex-shrink: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-xs);
		padding: var(--space-sm) var(--space-md);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--accent-primary);
		text-decoration: none;
		background-color: var(--bg-primary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		white-space: nowrap;
		transition:
			color var(--transition-fast),
			border-color var(--transition-fast),
			background-color var(--transition-fast);
	}

	.announcement-link:hover {
		color: var(--accent-hover);
		border-color: var(--accent-primary);
		background-color: var(--accent-light);
	}

	@media (max-width: 640px) {
		.announcement-callout {
			padding: var(--space-md) var(--space-lg);
		}

		.announcement-main {
			flex-direction: column;
			align-items: stretch;
			gap: var(--space-sm);
		}

		.announcement-link {
			align-self: flex-start;
		}

		.announcement-title {
			font-size: var(--text-sm);
		}

		.announcement-message {
			font-size: var(--text-xs);
		}
	}
</style>
