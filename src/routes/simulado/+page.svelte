<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { examStore } from '$lib/stores/exam.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ConfirmDialog from '$lib/components/ConfirmDialog.svelte';
	import QRScanner from '$lib/components/QRScanner.svelte';
	import ExamQRCode from '$lib/components/ExamQRCode.svelte';
	import Question from '$lib/components/Question.svelte';
	import ExamNavigation from '$lib/components/ExamNavigation.svelte';
	import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Plus, Share2, Printer, ClipboardList } from '@lucide/svelte';
	import { groupQuestionsByArea, buildExamUrl, tryLoadExam } from '$lib/utils/helpers';
	import type { QuestionAlternative } from '$lib/models/question';

	let isLoading = $state(true);
	let showLoadModal = $state(false);
	let showFinishConfirm = $state(false);
	let showShareModal = $state(false);
	let showProgressWarning = $state(false);
	let showNewExamConfirm = $state(false);
	let showReview = $state(false);
	let examId = $state<string | null>(null);
	let currentExamUrl = $state('');
	let pendingExamId = $state<string | null>(null);

	function copyExamLink() {
		if (examStore.currentExam) {
			navigator.clipboard.writeText(currentExamUrl);
			alert('Link copiado para a área de transferência!');
		}
	}

	function handleExport() {
		if (examStore.currentExam) {
			window.open(buildExamUrl(examStore.currentExam.id, '/simulado/print'), '_blank');
		}
	}

	onMount(() => {
		examId = $page.url.searchParams.get('id');
		const savedExamId = examStore.getSavedExamId();

		if (examId) {
			if (savedExamId && savedExamId !== examId) {
				pendingExamId = examId;
				showProgressWarning = true;
				isLoading = false;
			} else {
				tryLoadExam(
					examId,
					(id) => {
						examStore.loadExamFromIdentifier(id);
						currentExamUrl = buildExamUrl(id);
						isLoading = false;
					},
					() => {
						alert('Erro ao carregar simulado. Código inválido.');
						examStore.resetExam();
						goto('/simulado', { replaceState: true });
						isLoading = false;
					}
				);
			}
		} else if (savedExamId && examStore.currentExam?.id !== savedExamId) {
			tryLoadExam(
				savedExamId,
				(id) => {
					examStore.loadExamFromIdentifier(id);
					goto(`/simulado?id=${id}`, { replaceState: true });
					currentExamUrl = buildExamUrl(id);
					isLoading = false;
				},
				() => {
					examStore.resetExam();
					isLoading = false;
				}
			);
		} else if (!savedExamId) {
			examStore.resetExam();
			isLoading = false;
		} else {
			// Already loaded
			isLoading = false;
		}
	});

	function continueWithSavedExam() {
		const savedExamId = examStore.getSavedExamId();
		if (savedExamId) {
			examStore.loadExamFromIdentifier(savedExamId);
			currentExamUrl = buildExamUrl(savedExamId);
			goto(`/simulado?id=${savedExamId}`, { replaceState: true });
		}
		showProgressWarning = false;
		pendingExamId = null;
	}

	function loadNewExam() {
		if (pendingExamId) {
			tryLoadExam(pendingExamId, (id) => {
				examStore.loadExamFromIdentifier(id, true);
				currentExamUrl = buildExamUrl(id);
			});
		}
		showProgressWarning = false;
		pendingExamId = null;
	}

	function handleGenerateExam() {
		const newExam = examStore.generateNewExam();
		currentExamUrl = buildExamUrl(newExam.id);
		goto(`/simulado?id=${newExam.id}`);
	}

	function confirmNewExam() {
		showNewExamConfirm = false;
		handleGenerateExam();
	}

	function handleLoadFromQR() {
		showLoadModal = true;
	}

	function handleQRScan(code: string) {
		try {
			examStore.loadExamFromIdentifier(code);
			showLoadModal = false;
			goto(`/simulado?id=${code}`, { replaceState: true });
		} catch (error) {
			alert('Código inválido. Por favor, tente novamente.');
			console.error(error);
		}
	}

	function handleSelectAnswer(alt: QuestionAlternative) {
		if (!examStore.showResults && examStore.currentExam) {
			examStore.selectAnswer(examStore.currentQuestionIndex, alt);
		}
	}

	function handleToggleDiscard(alt: QuestionAlternative) {
		if (!examStore.showResults && examStore.currentExam) {
			examStore.toggleDiscarded(examStore.currentQuestionIndex, alt);
		}
	}

	function handleFinishExam() {
		const unanswered = examStore.totalQuestions - examStore.answeredCount;
		if (unanswered > 0) {
			showFinishConfirm = true;
		} else {
			examStore.finishExam();
		}
	}

	function confirmFinish() {
		showFinishConfirm = false;
		examStore.finishExam();
	}

	function handleReviewAnswers() {
		showReview = true;
	}

	function handleBackToResults() {
		showReview = false;
	}

	const currentQuestion = $derived(
		examStore.currentExam?.questions[examStore.currentQuestionIndex]
	);

	const questionsByAreaForReview = $derived(() =>
		examStore.currentExam ? groupQuestionsByArea(examStore.currentExam.questions) : []
	);
</script>

<svelte:head>
	<title>Simulado - Simulado EUF</title>
	<meta name="description" content="Faça um simulado completo do EUF com 40 questões" />
</svelte:head>

<div class="exam-page">
	{#if isLoading}
		<div class="container loading-container">
			<div class="loading-spinner">
				<div class="spinner"></div>
			</div>
		</div>
	{:else if !examStore.currentExam}
		<div class="container exam-start">
			<div class="start-card">
				<h2>Iniciar Simulado</h2>
				<p>
					Escolha como deseja começar seu simulado. Você pode gerar um novo simulado aleatório ou
					carregar um simulado já impresso através do QR Code.
				</p>
				<div class="start-actions">
					<button class="btn-primary" onclick={handleGenerateExam}>
						Gerar Simulado Aleatório
					</button>
					<button class="btn-secondary" onclick={handleLoadFromQR}> Carregar de QR Code </button>
				</div>
				<div class="exam-info">
					<h3>Formato do Exame</h3>
					<ul>
						<li>40 questões de múltipla escolha</li>
						<li>Distribuídas em 6 áreas da Física</li>
						<li>Baseado em provas anteriores do EUF</li>
						<li>Clique direito (ou toque longo) para descartar alternativas</li>
					</ul>
				</div>
			</div>
		</div>
	{:else if examStore.showResults && examStore.examScore}
		{#if !showReview}
			<div class="container exam-results">
				<ScoreDisplay
					score={examStore.examScore}
					onReviewAnswers={handleReviewAnswers}
					onNewExam={handleGenerateExam}
				/>
			</div>
			<Footer />
		{:else}
			<div class="container review-content">
				<div class="review-header">
					<h2>Revisão de Respostas</h2>
					<button class="btn-secondary" onclick={handleBackToResults}>
						← Voltar aos Resultados
					</button>
				</div>

				<div class="review-questions">
					{#each questionsByAreaForReview() as areaGroup (areaGroup.area)}
						<div class="review-area-section">
							<h3 class="review-area-title">{areaGroup.areaLabel}</h3>
							{#each areaGroup.questions as { question, index } (index)}
								{#if question}
									{@const isCorrect = question.selected === question.correct}
									<div class="review-question" class:incorrect={!isCorrect}>
										<Question
											{question}
											questionNumber={index + 1}
											showCorrect={true}
											showTags={true}
										/>
									</div>
								{/if}
							{/each}
						</div>
					{/each}
				</div>
			</div>
		{/if}
	{:else if currentQuestion}
		<div class="container exam-content">
			<div class="exam-main">
				<Question
					question={currentQuestion}
					questionNumber={examStore.currentQuestionIndex + 1}
					showDiscardButton={true}
					onSelectAnswer={handleSelectAnswer}
					onToggleDiscard={handleToggleDiscard}
				/>

				<div class="exam-controls">
					<button
						class="btn-secondary"
						onclick={() => examStore.previousQuestion()}
						disabled={examStore.currentQuestionIndex === 0}
					>
						← Anterior
					</button>

					{#if examStore.currentQuestionIndex === examStore.totalQuestions - 1}
						<button class="btn-primary" onclick={handleFinishExam}> Finalizar Simulado </button>
					{:else}
						<button class="btn-primary" onclick={() => examStore.nextQuestion()}>
							Próxima →
						</button>
					{/if}
				</div>
			</div>

			<aside class="exam-sidebar">
				<div class="compact-sidebar-actions">
					<button
						class="compact-action-btn new-exam"
						onclick={() => (showNewExamConfirm = true)}
						title="Novo simulado"
					>
						<Plus size={14} />
						<span>Novo</span>
					</button>

					<button
						class="compact-action-btn export"
						onclick={() => (showShareModal = true)}
						title="Compartilhar simulado"
					>
						<Share2 size={14} />
						<span>Enviar</span>
					</button>

					<button
						class="compact-action-btn export"
						onclick={() => window.open('/assets/formulario.pdf', '_blank')}
						title="Acessar formulário"
					>
						<ClipboardList size={14} />
						<span>Formulário</span>
					</button>

					<button
						class="compact-action-btn export"
						onclick={handleExport}
						title="Exportar para impressão"
					>
						<Printer size={14} />
						<span>Imprimir</span>
					</button>
				</div>

				<ExamNavigation
					exam={examStore.currentExam}
					currentIndex={examStore.currentQuestionIndex}
					onNavigate={(index) => examStore.goToQuestion(index)}
				/>
			</aside>
		</div>
	{/if}
</div>

<Modal open={showLoadModal} title="Carregar Simulado" onClose={() => (showLoadModal = false)}>
	<QRScanner onScan={handleQRScan} />
</Modal>

<ConfirmDialog
	bind:open={showFinishConfirm}
	title="Finalizar Simulado"
	message={`Você ainda tem <strong>${examStore.totalQuestions - examStore.answeredCount}</strong> ${examStore.totalQuestions - examStore.answeredCount === 1 ? 'questão' : 'questões'} sem resposta.<br><br>Deseja realmente finalizar o simulado?`}
	confirmText="Finalizar Mesmo Assim"
	cancelText="Continuar Respondendo"
	onConfirm={confirmFinish}
	onCancel={() => (showFinishConfirm = false)}
/>

<ConfirmDialog
	bind:open={showProgressWarning}
	title="Simulado em Progresso"
	message="Você tem um simulado em progresso. Ao carregar este novo simulado, você perderá o progresso atual.<br><br><strong>Deseja continuar com o simulado salvo ou iniciar o novo?</strong>"
	confirmText="Carregar Novo Simulado"
	cancelText="Continuar com o Salvo"
	onConfirm={loadNewExam}
	onCancel={() => {
		showProgressWarning = false;
		pendingExamId = null;
		continueWithSavedExam();
	}}
/>

<ConfirmDialog
	bind:open={showNewExamConfirm}
	title="Iniciar Novo Simulado"
	message={`Você tem um simulado em progresso com <strong>${examStore.answeredCount}</strong> questões respondidas.<br><br><strong>Deseja realmente iniciar um novo simulado? O progresso atual será perdido.</strong>`}
	confirmText="Iniciar Novo Simulado"
	cancelText="Continuar com Atual"
	onConfirm={confirmNewExam}
	onCancel={() => (showNewExamConfirm = false)}
/>

{#if examStore.currentExam}
	<Modal
		open={showShareModal}
		title="Compartilhar Simulado"
		onClose={() => (showShareModal = false)}
	>
		<div class="share-modal-content">
			<p>Use o QR Code ou copie o link para compartilhar este simulado.</p>

			<div class="qr-section">
				<ExamQRCode examId={examStore.currentExam.id} size={220} />
			</div>

			<button class="btn-primary copy-link-btn" onclick={copyExamLink}>
				Copiar Link do Simulado
			</button>
		</div>
	</Modal>
{/if}

<style>
	.exam-page {
		min-height: 100vh;
		background-color: var(--bg-primary);
		padding-top: var(--space-lg);
	}

	.exam-start {
		padding: var(--space-2xl) var(--space-lg);
		max-width: 700px;
		min-height: calc(100vh - var(--topbar-height));
		display: flex;
		align-items: center;
	}

	.start-card {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-2xl);
		text-align: center;
		width: 100%;
	}

	.start-card h2 {
		font-size: var(--text-2xl);
		margin-bottom: var(--space-md);
	}

	.start-card > p {
		color: var(--text-secondary);
		margin-bottom: var(--space-xl);
		line-height: 1.7;
	}

	.start-actions {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		margin-bottom: var(--space-2xl);
	}

	.start-actions button {
		width: 100%;
	}

	.exam-info {
		text-align: left;
		padding: var(--space-lg);
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
	}

	.exam-info h3 {
		font-size: var(--text-lg);
		margin-bottom: var(--space-md);
	}

	.exam-info ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.exam-info li {
		padding: var(--space-sm) 0;
		color: var(--text-secondary);
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.exam-info li::before {
		content: '✓';
		color: var(--success);
		font-weight: bold;
	}

	.exam-content {
		display: grid;
		grid-template-columns: 1fr 280px;
		gap: var(--space-xl);
		padding: var(--space-xl) var(--space-lg);
		align-items: start;
	}

	.exam-main {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.exam-controls {
		display: flex;
		justify-content: space-between;
		gap: var(--space-md);
		padding: var(--space-lg) 0;
	}

	.compact-sidebar-actions {
		display: flex;
		gap: var(--space-xs);
		margin-bottom: var(--space-md);
	}

	.compact-action-btn {
		flex: 1;
		padding: var(--space-sm) var(--space-xs);
		border-radius: var(--radius-md);
		font-size: var(--text-xs);
		font-weight: 600;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		transition: all var(--transition-fast);
		cursor: pointer;
		border: 1px solid;
	}

	.compact-action-btn span {
		font-size: 10px;
		line-height: 1;
	}

	.compact-action-btn:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-sm);
	}

	.compact-action-btn.new-exam {
		background-color: var(--success-light);
		border-color: var(--success);
		color: var(--success);
	}

	.compact-action-btn.new-exam:hover {
		background-color: var(--success);
		color: white;
	}

	.compact-action-btn.export {
		background-color: var(--bg-tertiary);
		border-color: var(--border-color);
		color: var(--text-primary);
	}

	.compact-action-btn.export:hover {
		background-color: var(--bg-primary);
		border-color: var(--accent-primary);
		color: var(--accent-primary);
	}

	.exam-results {
		padding: var(--space-2xl) var(--space-lg);
		max-width: 900px;
	}

	.review-content {
		padding: var(--space-2xl) var(--space-lg);
		max-width: 1200px;
	}

	.review-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--space-2xl);
		padding-bottom: var(--space-lg);
		border-bottom: 2px solid var(--border-light);
		flex-wrap: wrap;
		gap: var(--space-md);
	}

	.review-header h2 {
		font-size: var(--text-2xl);
		margin: 0;
		color: var(--text-primary);
	}

	.review-questions {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.review-area-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.review-area-title {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--accent-primary);
		padding-bottom: var(--space-md);
		border-bottom: 3px solid var(--accent-primary);
		margin-bottom: var(--space-lg);
	}

	.review-question {
		position: relative;
	}

	.review-question.incorrect {
		padding: var(--space-lg);
		background-color: var(--error-light);
		border-radius: var(--radius-lg);
		border: 2px solid var(--error);
	}

	.share-modal-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
		align-items: center;
		text-align: center;
		padding: var(--space-md);
	}

	.share-modal-content > p {
		margin: 0;
		color: var(--text-secondary);
		font-size: var(--text-base);
	}

	.qr-section {
		display: flex;
		justify-content: center;
		padding: var(--space-lg);
	}

	.copy-link-btn {
		width: 100%;
		max-width: 300px;
	}

	.loading-container {
		min-height: calc(100vh - var(--topbar-height));
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.loading-spinner {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
	}

	.spinner {
		width: 48px;
		height: 48px;
		border: 4px solid var(--border-light);
		border-top-color: var(--accent-primary);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 1024px) {
		.exam-content {
			grid-template-columns: 1fr;
		}

		.exam-sidebar {
			order: -1;
		}

		.compact-sidebar-actions {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 640px) {
		.exam-controls {
			gap: var(--space-sm);
		}

		.compact-sidebar-actions {
			grid-template-columns: 1fr;
		}

		.compact-action-btn {
			flex-direction: row;
			gap: var(--space-xs);
			padding: var(--space-sm) var(--space-md);
		}

		.compact-action-btn span {
			font-size: var(--text-xs);
		}
	}
</style>
