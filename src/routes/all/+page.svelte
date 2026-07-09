<script lang="ts">
	import { Area } from '$lib/models/area';
	import { allQuestions } from '$lib/data';
	import Footer from '$lib/components/Footer.svelte';
	import QuestionFilters from '$lib/components/QuestionFilters.svelte';
	import QuestionListItem from '$lib/components/QuestionListItem.svelte';
	import { filterQuestions, getAvailableExams } from '$lib/utils/questionBank';
	import { generateQuestionId } from '$lib/services/identifiers';
	import { BASE_URL } from '$lib/variables';
	import { Info, Library } from '@lucide/svelte';

	const PAGE_SIZE = 25;
	const availableExams = getAvailableExams(allQuestions);

	let selectedExams = $state<string[]>([]);
	let selectedAreas = $state<Area[]>([]);
	let searchText = $state('');
	let visibleCount = $state(PAGE_SIZE);

	const filteredQuestions = $derived(
		filterQuestions(allQuestions, {
			selectedExams,
			selectedAreas,
			searchText
		})
	);

	const visibleQuestions = $derived(filteredQuestions.slice(0, visibleCount));
	const hasMoreQuestions = $derived(visibleCount < filteredQuestions.length);
	const remainingQuestions = $derived(filteredQuestions.length - visibleCount);

	$effect(() => {
		selectedExams = selectedExams;
		selectedAreas = selectedAreas;
		searchText = searchText;
		visibleCount = PAGE_SIZE;
	});

	function handleClearFilters() {
		selectedExams = [];
		selectedAreas = [];
		searchText = '';
	}

	function loadMoreQuestions() {
		visibleCount = Math.min(visibleCount + PAGE_SIZE, filteredQuestions.length);
	}
</script>

<svelte:head>
	<title>Banco de Questões — Simulado EUF</title>
	<meta
		name="description"
		content="Explore todas as questões do Exame Unificado de Física com filtros por prova, área e busca por texto."
	/>
	<link rel="canonical" href={`${BASE_URL}/all/`} />
</svelte:head>

<main class="page">
	<div class="page-body">
		<div class="container">
			<header class="header">
				<div class="icon-wrap">
					<Library size={40} strokeWidth={1.5} />
				</div>
				<h1>Banco de Questões</h1>
				<p class="lead">
					Explore todas as questões disponíveis, filtre por prova e área, e abra qualquer uma no
					modo flashcard.
				</p>
			</header>

			<aside class="version-note" aria-label="Informação sobre versões">
				<Info size={18} aria-hidden="true" />
				<p>
					Todas as questões possuem duas versões (A e B). Para simplificar, sempre exibimos a versão
					A nesta listagem.
				</p>
			</aside>

			<QuestionFilters
				{availableExams}
				{selectedExams}
				{selectedAreas}
				{searchText}
				onExamsChange={(exams) => (selectedExams = exams)}
				onAreasChange={(areas) => (selectedAreas = areas)}
				onSearchChange={(text) => (searchText = text)}
				onClearFilters={handleClearFilters}
			/>

			<div class="results-header">
				<h2>
					{filteredQuestions.length} questões encontradas
					<span class="results-total">
						({filteredQuestions.length * 2} incluindo versões A e B)
					</span>
				</h2>
			</div>

			{#if filteredQuestions.length === 0}
				<p class="empty">Nenhuma questão encontrada com os filtros selecionados.</p>
			{:else}
				<ul class="question-list">
					{#each visibleQuestions as question (generateQuestionId(question))}
						<li>
							<QuestionListItem {question} />
						</li>
					{/each}
				</ul>

				{#if hasMoreQuestions}
					<div class="load-more">
						<button type="button" class="btn-secondary load-more-btn" onclick={loadMoreQuestions}>
							Mostrar mais {Math.min(PAGE_SIZE, remainingQuestions)} questões ({remainingQuestions}
							restantes)
						</button>
					</div>
				{/if}
			{/if}
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
		margin-bottom: var(--space-xl);
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
		max-width: 560px;
		margin: 0 auto;
	}

	.version-note {
		display: flex;
		align-items: flex-start;
		gap: var(--space-sm);
		padding: var(--space-md);
		margin-bottom: var(--space-xl);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		color: var(--text-secondary);
	}

	.version-note p {
		margin: 0;
		font-size: var(--text-sm);
		line-height: 1.5;
	}

	.version-note :global(svg) {
		flex-shrink: 0;
		margin-top: 2px;
		color: var(--accent-primary);
	}

	.results-header h2 {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: var(--space-sm);
		margin: 0 0 var(--space-md);
		font-size: var(--text-lg);
		color: var(--text-primary);
	}

	.results-total {
		font-size: var(--text-sm);
		font-weight: 400;
		color: var(--text-muted);
	}

	.empty {
		color: var(--text-secondary);
		font-size: var(--text-sm);
		margin: 0;
	}

	.question-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.load-more {
		display: flex;
		justify-content: center;
		margin-top: var(--space-lg);
	}

	.load-more-btn {
		width: 100%;
		max-width: 420px;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 var(--space-md);
		}

		.page-body {
			padding: var(--space-xl) 0;
		}

		.header h1 {
			font-size: var(--text-2xl-mobile);
		}

		.lead {
			font-size: var(--text-sm-mobile);
		}
	}
</style>
