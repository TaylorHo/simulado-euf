<script lang="ts">
	import type { ExamScore } from '$lib/models/score';
	import { getPercentageColor } from '$lib/utils/helpers';

	interface Props {
		score: ExamScore;
		onReviewAnswers?: () => void;
		onNewExam?: () => void;
	}

	let { score, onReviewAnswers, onNewExam }: Props = $props();

	const percentage = $derived((score.totalCorrect / score.totalQuestions) * 100);
	const scoreOutOf10 = $derived((score.totalCorrect / score.totalQuestions) * 10);

	// Calculate insights
	const strongAreas = $derived(
		score.byArea
			.filter((area) => area.correct / area.total >= 0.7)
			.sort((a, b) => b.correct / b.total - a.correct / a.total)
	);

	const weakAreas = $derived(
		score.byArea
			.filter((area) => area.correct / area.total < 0.5)
			.sort((a, b) => a.correct / a.total - b.correct / b.total)
	);

	const strongTopics = $derived(
		score.byTag.filter((tag) => tag.total >= 2 && tag.correct / tag.total >= 0.7).slice(0, 5)
	);

	const weakTopics = $derived(
		score.byTag.filter((tag) => tag.total >= 2 && tag.correct / tag.total < 0.5).slice(0, 5)
	);
</script>

<div class="score-container">
	<div class="score-summary">
		<div class="score-main">
			<div class="score-circle" style="--score-color: {getPercentageColor(percentage)}">
				<div class="score-value">{score.totalCorrect}/{score.totalQuestions}</div>
				<div class="score-percentage">{percentage.toFixed(1)}%</div>
			</div>
			<div class="score-text">
				<h2>Resultado do Simulado</h2>
				<p>
					Você acertou <strong>{score.totalCorrect}</strong> de
					<strong>{score.totalQuestions}</strong> questões
				</p>
				<div class="score-grade">
					<span class="grade-label">Nota:</span>
					<span class="grade-value" style="color: {getPercentageColor(percentage)}">
						{scoreOutOf10.toFixed(2)} / 10
					</span>
				</div>
			</div>
		</div>
		{#if onReviewAnswers || onNewExam}
			<div class="score-actions">
				{#if onReviewAnswers}
					<button class="btn-primary" onclick={onReviewAnswers}>Revisar Respostas</button>
				{/if}
				{#if onNewExam}
					<button class="btn-primary" onclick={onNewExam}>Iniciar Novo Simulado</button>
				{/if}
			</div>
		{/if}
	</div>

	<div class="score-details">
		<h3>Desempenho por Área</h3>
		<div class="area-scores">
			{#each score.byArea as areaScore (areaScore.areaLabel)}
				{@const areaPct = (areaScore.correct / areaScore.total) * 100}
				<div class="area-score-item">
					<div class="area-header">
						<span class="area-name">{areaScore.areaLabel}</span>
						<span class="area-result">{areaScore.correct}/{areaScore.total}</span>
					</div>
					<div class="progress-bar">
						<div
							class="progress-fill"
							style="width: {areaPct}%; background-color: {getPercentageColor(areaPct)}"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="score-details insights">
		<h3>Análise do Desempenho</h3>

		{#if strongAreas.length > 0}
			<div class="insight-section">
				<h4 class="insight-section-title">Seus Pontos Fortes</h4>
				<div class="insight-tags">
					{#each strongAreas as area (area.areaLabel)}
						<span class="insight-tag strong">
							{area.areaLabel} ({Math.round((area.correct / area.total) * 100)}%)
						</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if weakAreas.length > 0}
			<div class="insight-section">
				<h4 class="insight-section-title">Áreas para Melhorar</h4>
				<div class="insight-tags">
					{#each weakAreas as area (area.areaLabel)}
						<span class="insight-tag weak">
							{area.areaLabel} ({Math.round((area.correct / area.total) * 100)}%)
						</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if strongTopics.length > 0}
			<div class="insight-section">
				<h4 class="insight-section-title">Tópicos Dominados</h4>
				<div class="insight-tags">
					{#each strongTopics as topic (topic.tag)}
						<span class="insight-tag strong-topic">
							{topic.tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}

		{#if weakTopics.length > 0}
			<div class="insight-section">
				<h4 class="insight-section-title">Tópicos para Revisar</h4>
				<div class="insight-tags">
					{#each weakTopics as topic (topic.tag)}
						<span class="insight-tag weak-topic">
							{topic.tag}
						</span>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.score-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.score-summary {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		padding: var(--space-xl);
		background-color: var(--bg-secondary);
		border-radius: var(--radius-lg);
		border: 1px solid var(--border-light);
	}

	.score-main {
		display: flex;
		align-items: center;
		gap: var(--space-xl);
	}

	.score-actions {
		display: flex;
		gap: var(--space-md);
		padding-top: var(--space-lg);
		border-top: 1px solid var(--border-light);
	}

	.score-actions button {
		flex: 1;
	}

	.score-circle {
		flex-shrink: 0;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 4px solid var(--score-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--bg-primary);
	}

	.score-value {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--text-primary);
	}

	.score-percentage {
		font-size: var(--text-sm);
		color: var(--text-muted);
		font-weight: 600;
	}

	.score-text h2 {
		margin-bottom: var(--space-sm);
		font-size: var(--text-2xl);
	}

	.score-text p {
		color: var(--text-secondary);
		margin: 0;
	}

	.score-grade {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		margin-top: var(--space-md);
		padding-top: var(--space-md);
		border-top: 1px solid var(--border-light);
	}

	.grade-label {
		font-size: var(--text-base);
		color: var(--text-secondary);
		font-weight: 500;
	}

	.grade-value {
		font-size: var(--text-xl);
		font-weight: 700;
	}

	.score-details {
		background-color: var(--bg-secondary);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		border: 1px solid var(--border-light);
	}

	.score-details h3 {
		margin-bottom: var(--space-lg);
		font-size: var(--text-xl);
	}

	.area-scores {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.area-score-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.area-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.area-name {
		font-weight: 600;
		color: var(--text-primary);
	}

	.area-result {
		font-size: var(--text-sm);
		color: var(--text-muted);
		font-weight: 500;
	}

	.progress-bar {
		height: 8px;
		background-color: var(--bg-tertiary);
		border-radius: var(--radius-sm);
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		transition: width var(--transition-base);
		border-radius: var(--radius-sm);
	}

	.insights {
		background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
	}

	.insight-section {
		margin-bottom: var(--space-lg);
	}

	.insight-section:last-child {
		margin-bottom: 0;
	}

	.insight-section-title {
		font-size: var(--text-base);
		margin-bottom: var(--space-md);
		color: var(--text-primary);
	}

	.insight-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.insight-tag {
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		font-weight: 500;
	}

	.insight-tag.strong {
		background-color: var(--success-light);
		color: var(--success);
		border: 1px solid var(--success);
	}

	.insight-tag.weak {
		background-color: var(--error-light);
		color: var(--error);
		border: 1px solid var(--error);
	}

	.insight-tag.strong-topic {
		background-color: var(--accent-light);
		color: var(--accent-primary);
		border: 1px solid var(--accent-primary);
	}

	.insight-tag.weak-topic {
		background-color: var(--warning-light);
		color: var(--warning);
		border: 1px solid var(--warning);
	}

	@media (max-width: 640px) {
		.score-main {
			flex-direction: column;
			text-align: center;
		}

		.score-actions {
			flex-direction: column;
		}

		.score-actions button {
			width: 100%;
		}
	}
</style>
