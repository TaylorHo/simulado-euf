<script lang="ts">
	import type { GeneratedExam } from '$lib/models/exam';
	import { groupQuestionsByArea } from '$lib/utils/helpers';
	import { ChevronDown, ChevronUp } from '@lucide/svelte';

	interface Props {
		exam: GeneratedExam;
		currentIndex: number;
		onNavigate: (index: number) => void;
	}

	let { exam, currentIndex, onNavigate }: Props = $props();
	let isCollapsed = $state(true);
	let isMobile = $state(false);

	$effect(() => {
		// Check if we're on mobile
		const checkMobile = () => {
			isMobile = window.innerWidth <= 1024;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	});

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

	function toggleCollapse() {
		if (isMobile) {
			isCollapsed = !isCollapsed;
		}
	}

	// Show content if not mobile or if mobile and not collapsed
	const showContent = $derived(!isMobile || !isCollapsed);
</script>

<div class="exam-navigation" class:collapsed={isMobile && isCollapsed}>
	{#if isMobile}
		<button class="nav-header clickable" onclick={toggleCollapse}>
			<div class="nav-header-content">
				<span class="nav-title">Navegação</span>
				<span class="nav-progress">
					{exam.questions.filter((q) => q.selected !== null).length} / {exam.questions.length}
				</span>
			</div>
			<span class="collapse-icon">
				{#if isCollapsed}
					<ChevronDown size={20} />
				{:else}
					<ChevronUp size={20} />
				{/if}
			</span>
		</button>
	{:else}
		<div class="nav-header">
			<div class="nav-header-content">
				<span class="nav-title">Navegação</span>
				<span class="nav-progress">
					{exam.questions.filter((q) => q.selected !== null).length} / {exam.questions.length}
				</span>
			</div>
		</div>
	{/if}

	{#if showContent}
		<div class="nav-content">
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
	{/if}
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
		width: 100%;
		background: none;
		border-left: none;
		border-right: none;
		border-top: none;
		border-radius: 0;
		padding-left: 0;
		padding-right: 0;
		padding-top: 0;
		cursor: default;
	}

	.nav-header.clickable {
		cursor: pointer;
	}

	.nav-header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
	}

	.collapse-icon {
		display: flex;
		align-items: center;
		color: var(--text-secondary);
		transition: transform var(--transition-fast);
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

	.nav-content {
		display: block;
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
		justify-items: stretch;
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

	:global([data-theme='dark']) .nav-item.answered {
		background-color: rgba(16, 185, 129, 0.2);
		border-color: #10b981;
		color: #34d399;
	}

	.nav-item.unanswered {
		background-color: var(--bg-primary);
		border-color: var(--border-color);
	}

	@media (max-width: 1024px) {
		.exam-navigation {
			position: static;
			margin-bottom: var(--space-lg);
		}

		.exam-navigation.collapsed {
			padding-bottom: var(--space-md);
		}

		.exam-navigation.collapsed .nav-header {
			margin-bottom: 0;
			padding-bottom: 0;
			border-bottom: none;
		}
	}

	@media (max-width: 768px) {
		.exam-navigation {
			padding: var(--space-md);
		}

		.nav-title {
			font-size: var(--text-xs);
		}

		.nav-progress {
			font-size: var(--text-xs);
		}

		.area-label {
			font-size: 0.65rem;
		}

		.nav-grid {
			grid-template-columns: repeat(8, 1fr);
			gap: var(--space-xs);
		}

		.nav-item {
			font-size: var(--text-xs);
			height: 2.5rem;
			width: 100%;
		}

		.nav-item:hover {
			transform: none;
		}
	}

	@media (max-width: 600px) {
		.nav-grid {
			grid-template-columns: repeat(8, 1fr);
			gap: 6px;
		}

		.nav-item {
			height: 2.25rem;
			min-width: 0;
		}
	}

	@media print {
		.exam-navigation {
			display: none;
		}
	}
</style>
