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

	const announcementLink = $derived(announcement?.href ?? null);
</script>

{#if announcement}
	<svelte:element
		this={announcementLink ? 'a' : 'aside'}
		class="announcement-callout"
		class:web={variant === 'web'}
		class:mobile={variant === 'mobile'}
		class:clickable={!!announcementLink}
		class:has-link={!!announcementLink}
		aria-labelledby="announcement-title"
		href={announcementLink}
		target={announcementLink && isExternalHref(announcementLink) ? '_blank' : undefined}
		rel={announcementLink && isExternalHref(announcementLink) ? 'noopener noreferrer' : undefined}
	>
		<div class="announcement-icon" aria-hidden="true">
			<Megaphone size={variant === 'mobile' ? 16 : 22} strokeWidth={1.5} />
		</div>
		<div class="announcement-main">
			<div class="announcement-text">
				<span class="announcement-label">Atualização</span>
				<h2 id="announcement-title" class="announcement-title">{announcement.title}</h2>
				<p class="announcement-message">{announcement.message}</p>
			</div>
			{#if announcementLink}
				<span class="announcement-external-icon" aria-hidden="true">
					<ExternalLink size={variant === 'mobile' ? 16 : 18} strokeWidth={1.5} />
				</span>
			{/if}
		</div>
	</svelte:element>
{/if}

<style>
	.announcement-callout {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			'icon label'
			'title title'
			'message message';
		align-items: center;
		gap: var(--space-xs) var(--space-sm);
		width: 100%;
		padding: var(--space-md) var(--space-xl);
		border-radius: var(--radius-xl);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		color: var(--text-primary);
		text-align: left;
		box-shadow: var(--shadow-sm);
	}

	.announcement-callout.has-link {
		grid-template-columns: auto 1fr auto;
		grid-template-areas:
			'icon label external'
			'title title title'
			'message message message';
	}

	.announcement-callout.clickable {
		text-decoration: none;
		cursor: pointer;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast),
			transform var(--transition-fast);
	}

	.announcement-callout.clickable:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}

	.announcement-callout.clickable:active {
		transform: scale(0.99);
	}

	.announcement-callout.web {
		margin: 0 0 var(--space-xl);
	}

	.announcement-callout.mobile {
		padding: var(--space-md);
	}

	.announcement-main,
	.announcement-text {
		display: contents;
	}

	.announcement-icon {
		grid-area: icon;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-lg);
		background-color: var(--accent-light);
		color: var(--accent-primary);
	}

	.web .announcement-icon {
		width: 48px;
		height: 48px;
	}

	.mobile .announcement-icon {
		width: 28px;
		height: 28px;
		border-radius: var(--radius-md);
	}

	.announcement-label {
		grid-area: label;
		align-self: center;
		font-size: var(--text-xs);
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--accent-primary);
		line-height: 1.2;
	}

	.announcement-title {
		grid-area: title;
		margin: var(--space-xs) 0 0;
		font-size: var(--text-base);
		font-weight: 700;
		color: var(--text-primary);
		line-height: 1.3;
	}

	.web .announcement-title {
		font-size: var(--text-lg);
	}

	.mobile .announcement-title {
		font-size: var(--text-sm);
	}

	.announcement-message {
		grid-area: message;
		margin: 0;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.mobile .announcement-message {
		font-size: var(--text-xs);
	}

	.announcement-external-icon {
		grid-area: external;
		display: flex;
		align-self: center;
		justify-self: end;
		color: var(--text-muted);
	}
</style>
