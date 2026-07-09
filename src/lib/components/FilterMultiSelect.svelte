<script lang="ts" generics="T extends string | number">
	import { ChevronDown } from '@lucide/svelte';

	interface Option {
		value: T;
		label: string;
	}

	interface Props {
		label: string;
		options: Option[];
		selected: T[];
		onChange: (selected: T[]) => void;
	}

	let { label, options, selected, onChange }: Props = $props();

	let isOpen = $state(false);
	let containerRef = $state<HTMLDivElement | null>(null);

	const selectedCount = $derived(selected.length);
	const triggerLabel = $derived(
		selectedCount === 0
			? `Todos`
			: selectedCount === 1
				? (options.find((option) => option.value === selected[0])?.label ??
					`${selectedCount} selecionado`)
				: `${selectedCount} selecionados`
	);

	function toggleOption(value: T) {
		if (selected.includes(value)) {
			onChange(selected.filter((item) => item !== value));
			return;
		}

		onChange([...selected, value]);
	}

	function handleDocumentClick(event: MouseEvent) {
		if (!containerRef?.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	$effect(() => {
		if (!isOpen) return;

		document.addEventListener('click', handleDocumentClick);
		return () => document.removeEventListener('click', handleDocumentClick);
	});
</script>

<div class="filter-multi-select" bind:this={containerRef}>
	<button
		type="button"
		class="filter-trigger"
		aria-expanded={isOpen}
		aria-haspopup="listbox"
		onclick={() => (isOpen = !isOpen)}
	>
		<span class="filter-label">{label}</span>
		<span class="filter-value">{triggerLabel}</span>
		<span class="chevron" class:open={isOpen}>
			<ChevronDown size={16} aria-hidden="true" />
		</span>
	</button>

	{#if isOpen}
		<div class="filter-panel" role="listbox" aria-label={label}>
			{#each options as option (option.value)}
				<label class="filter-option">
					<input
						type="checkbox"
						checked={selected.includes(option.value)}
						onchange={() => toggleOption(option.value)}
					/>
					<span>{option.label}</span>
				</label>
			{/each}
		</div>
	{/if}
</div>

<style>
	.filter-multi-select {
		position: relative;
		min-width: 0;
	}

	.filter-trigger {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		min-height: 44px;
		background-color: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		color: var(--text-primary);
		text-align: left;
	}

	.filter-trigger:hover {
		border-color: var(--accent-primary);
	}

	.filter-label {
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.filter-value {
		flex: 1;
		min-width: 0;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chevron {
		flex-shrink: 0;
		display: inline-flex;
		color: var(--text-secondary);
		transition: transform var(--transition-fast);
	}

	.chevron.open {
		transform: rotate(180deg);
	}

	.filter-panel {
		position: absolute;
		top: calc(100% + var(--space-xs));
		left: 0;
		right: 0;
		z-index: 20;
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		max-height: 240px;
		overflow-y: auto;
		padding: var(--space-sm);
		background-color: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-md);
	}

	.filter-option {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		color: var(--text-primary);
		cursor: pointer;
	}

	.filter-option:hover {
		background-color: var(--bg-secondary);
	}

	.filter-option input {
		margin: 0;
		accent-color: var(--accent-primary);
	}
</style>
