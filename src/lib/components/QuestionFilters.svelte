<script lang="ts">
	import { Area, AreaLabels } from '$lib/models/area';
	import { countActiveFilters } from '$lib/utils/questionBank';
	import FilterMultiSelect from './FilterMultiSelect.svelte';
	import { Filter, Search, X } from '@lucide/svelte';

	interface Props {
		availableExams: string[];
		selectedExams: string[];
		selectedAreas: Area[];
		searchText: string;
		onExamsChange: (exams: string[]) => void;
		onAreasChange: (areas: Area[]) => void;
		onSearchChange: (text: string) => void;
		onClearFilters: () => void;
	}

	let {
		availableExams,
		selectedExams,
		selectedAreas,
		searchText,
		onExamsChange,
		onAreasChange,
		onSearchChange,
		onClearFilters
	}: Props = $props();

	const areaOptions = Object.entries(AreaLabels).map(([value, label]) => ({
		value: Number(value) as Area,
		label
	}));

	const examOptions = $derived(
		availableExams.map((exam) => ({
			value: exam,
			label: exam
		}))
	);

	const activeFilterCount = $derived(countActiveFilters(selectedExams, selectedAreas, searchText));
</script>

<div class="question-filters">
	<div class="filters-header">
		<div class="filters-title">
			<Filter size={18} aria-hidden="true" />
			<span>Filtros</span>
			{#if activeFilterCount > 0}
				<span class="filter-count">{activeFilterCount}</span>
			{/if}
		</div>

		{#if activeFilterCount > 0}
			<button type="button" class="clear-btn" onclick={onClearFilters}>
				<X size={14} aria-hidden="true" />
				Limpar filtros
			</button>
		{/if}
	</div>

	<div class="filters-grid">
		<FilterMultiSelect
			label="Provas"
			options={examOptions}
			selected={selectedExams}
			onChange={onExamsChange}
		/>

		<FilterMultiSelect
			label="Áreas"
			options={areaOptions}
			selected={selectedAreas}
			onChange={onAreasChange}
		/>

		<label class="search-field">
			<span class="search-label">Buscar</span>
			<input
				class="search-input"
				type="search"
				placeholder="Texto, tags ou área..."
				value={searchText}
				oninput={(event) => onSearchChange(event.currentTarget.value)}
			/>
			<Search size={16} aria-hidden="true" />
		</label>
	</div>
</div>

<style>
	.question-filters {
		padding: var(--space-lg);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		margin-bottom: var(--space-xl);
	}

	.filters-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		margin-bottom: var(--space-md);
	}

	.filters-title {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--text-primary);
	}

	.filter-count {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 20px;
		height: 20px;
		padding: 0 var(--space-xs);
		border-radius: var(--radius-sm);
		background-color: var(--accent-primary);
		color: white;
		font-size: var(--text-xs);
		font-weight: 700;
	}

	.clear-btn {
		display: inline-flex;
		align-items: center;
		gap: var(--space-xs);
		padding: var(--space-xs) var(--space-sm);
		min-height: 32px;
		font-size: var(--text-xs);
		font-weight: 500;
		color: var(--text-secondary);
		background-color: var(--bg-primary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
	}

	.clear-btn:hover {
		color: var(--accent-primary);
		border-color: var(--accent-primary);
	}

	.filters-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-md);
	}

	.search-field {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		min-height: 44px;
		min-width: 0;
		background-color: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		color: var(--text-primary);
		transition: border-color var(--transition-fast);
	}

	.search-field:focus-within {
		border-color: var(--accent-primary);
		box-shadow: 0 0 0 3px var(--accent-light);
	}

	.search-field:hover {
		border-color: var(--accent-primary);
	}

	.search-label {
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		flex-shrink: 0;
	}

	.search-input {
		flex: 1;
		min-width: 0;
		padding: 0;
		border: none;
		background: transparent;
		box-shadow: none;
		font-size: var(--text-sm);
		font-weight: 500;
		color: var(--text-primary);
	}

	.search-input:focus {
		box-shadow: none;
	}

	.search-field :global(svg) {
		flex-shrink: 0;
		color: var(--text-secondary);
	}

	@media (max-width: 768px) {
		.question-filters {
			padding: var(--space-md);
		}

		.filters-grid {
			grid-template-columns: 1fr;
		}

		.filters-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.clear-btn {
			width: 100%;
			justify-content: center;
		}
	}
</style>
