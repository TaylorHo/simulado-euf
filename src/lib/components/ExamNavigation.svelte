<script lang="ts">
	import type { GeneratedExam } from '$lib/models/exam';
	import { groupQuestionsByArea } from '$lib/utils/helpers';

	interface Props {
		exam: GeneratedExam;
		currentIndex: number;
		onNavigate: (index: number) => void;
	}

	let { exam, currentIndex, onNavigate }: Props = $props();

	function getQuestionStatus(index: number): 'current' | 'answered' | 'unanswered' {
		if (index === currentIndex) return 'current';
		return exam.questions[index].selected !== null ? 'answered' : 'unanswered';
	}

	const questionsByArea = $derived(() => {
		return groupQuestionsByArea(exam.questions).map((group) => ({
			...group,
			questions: group.questions.map(({ index }) => ({ index, number: index + 1 }))
		}));
	});
</script>

<div class="exam-navigation">
	<div class="nav-header">
		<span class="nav-title">Navegação</span>
		<span class="nav-progress">
			{exam.questions.filter((q) => q.selected !== null).length} / {exam.questions.length}
		</span>
	</div>

	{#each questionsByArea() as areaGroup (areaGroup.area)}
		<div class="area-section">
			<div class="area-header">
				<span class="area-label">{areaGroup.areaLabel}</span>
			</div>
			<div class="nav-grid">
				{#each areaGroup.questions as { index, number } (number)}
					<button class="nav-item {getQuestionStatus(index)}" onclick={() => onNavigate(index)}>
						{number}
					</button>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.exam-navigation {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		position: sticky;
		top: calc(var(--topbar-height) + var(--space-lg));
	}

	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-md);
		padding-bottom: var(--space-md);
		border-bottom: 1px solid var(--border-light);
	}

	.nav-title {
		font-weight: 600;
		color: var(--text-primary);
		font-size: var(--text-sm);
	}

	.nav-progress {
		font-size: var(--text-sm);
		color: var(--text-muted);
		font-weight: 500;
	}

	.area-section {
		margin-bottom: var(--space-md);
	}

	.area-section:last-child {
		margin-bottom: 0;
	}

	.area-header {
		margin-bottom: var(--space-sm);
	}

	.area-label {
		font-size: var(--text-xs);
		font-weight: 600;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.nav-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
		gap: var(--space-sm);
	}

	.nav-item {
		aspect-ratio: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		font-weight: 600;
		border: 1px solid var(--border-color);
		background-color: var(--bg-primary);
		color: var(--text-secondary);
		transition: all var(--transition-fast);
		padding: 0;
		height: 3rem;
	}

	.nav-item:hover {
		border-color: var(--accent-primary);
		transform: scale(1.05);
	}

	.nav-item.current {
		background-color: var(--accent-primary);
		color: white;
		border-color: var(--accent-primary);
	}

	.nav-item.answered {
		background-color: var(--success-light);
		border-color: var(--success);
		color: var(--success);
	}

	.nav-item.unanswered {
		background-color: var(--bg-primary);
		border-color: var(--border-color);
	}

	@media print {
		.exam-navigation {
			display: none;
		}
	}
</style>
