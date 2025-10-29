<script lang="ts">
	import { AreaLabels } from '$lib/models/area';
	import type { ExamQuestion } from '$lib/models/exam';
	import { Version } from '$lib/models/question';
	import { BUG_REPORT_API_URL } from '$lib/variables';
	import Modal from './Modal.svelte';
	import { Flag } from '@lucide/svelte';

	interface Props {
		question: ExamQuestion;
	}

	let { question }: Props = $props();

	let showModal = $state(false);
	let errorType = $state('');
	let comments = $state('');
	let status: 'idle' | 'sending' | 'success' | 'error' = $state('idle');
	let statusMessage = $state('');

	async function handleSubmit() {
		if (!errorType) {
			status = 'error';
			statusMessage = 'Por favor, selecione o tipo de erro.';
			return;
		}

		status = 'sending';
		statusMessage = '';

		try {
			const report = {
				questionId: `${question.year}-${question.semester} ${AreaLabels[question.area]} Q${question.questionNumber}-${question.version === Version.A ? 'A' : 'B'}`,
				url: window.location.href,
				errorType,
				comments
			};

			// Fetch request
			const response = await fetch(BUG_REPORT_API_URL, {
				method: 'POST',
				body: JSON.stringify(report),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			});

			if (!response.ok) {
				throw new Error('Falha ao enviar o relatório.');
			}

			status = 'success';
			statusMessage = 'Relatório enviado com sucesso! Agradecemos sua contribuição.';
			errorType = '';
			comments = '';
		} catch (e) {
			status = 'error';
			statusMessage =
				'Ocorreu um erro ao enviar o seu relatório. Por favor, tente novamente mais tarde.';
			console.error(e);
		}
	}

	function openModal() {
		showModal = true;
		status = 'idle';
		statusMessage = '';
	}

	function closeModal() {
		showModal = false;
	}
</script>

<button onclick={openModal} class="report-btn" title="Relatar um erro nesta questão">
	<Flag size={16} />
</button>

<Modal open={showModal} onClose={closeModal} title="Relatar erro na questão">
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="report-form"
	>
		<p>Encontrou algum problema? Selecione o tipo de erro e, se desejar, adicione um comentário.</p>

		<div class="form-group">
			<label for="error-type">Tipo de erro</label>
			<select id="error-type" bind:value={errorType} required>
				<option value="" disabled>Selecione...</option>
				<option value="Erro de digitação ou formatação">Erro de digitação ou formatação</option>
				<option value="Diferente do gabarito oficial">Diferente do gabarito oficial</option>
				<option value="Problema com a imagem"
					>Problema com a imagem (não carrega, errada, etc.)</option
				>
				<option value="Outro">Outro</option>
			</select>
		</div>

		<div class="form-group">
			<label for="comments">Comentários (opcional)</label>
			<textarea id="comments" bind:value={comments} rows="4"></textarea>
		</div>

		<div class="form-actions">
			<button type="button" class="btn-secondary" onclick={closeModal}>Cancelar</button>
			<button type="submit" class="btn-primary" disabled={status === 'sending'}>
				{#if status === 'sending'}
					Enviando...
				{:else}
					Enviar Relatório
				{/if}
			</button>
		</div>

		{#if statusMessage}
			<div
				class="status-message"
				class:success={status === 'success'}
				class:error={status === 'error'}
			>
				{statusMessage}
			</div>
		{/if}
	</form>
</Modal>

<style>
	.report-btn {
		background: none;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
		padding: var(--space-sm);
		border-radius: var(--radius-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
	}

	.report-btn:hover {
		color: var(--text-primary);
		background-color: var(--bg-tertiary);
	}

	.report-form {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	label {
		font-weight: 500;
		color: var(--text-primary);
	}

	select,
	textarea {
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		background-color: var(--bg-secondary);
		color: var(--text-primary);
		font-size: var(--text-base);
	}

	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--accent-primary);
		box-shadow: 0 0 0 2px var(--accent-light);
	}

	.form-actions {
		display: flex;
		justify-content: flex-end;
		gap: var(--space-md);
		margin-top: var(--space-md);
	}

	.status-message {
		margin-top: var(--space-md);
		padding: var(--space-md);
		border-radius: var(--radius-md);
		text-align: center;
	}

	.status-message.success {
		background-color: var(--success-light);
		color: var(--success-dark);
		border: 1px solid var(--success);
	}

	.status-message.error {
		background-color: var(--error-light);
		color: var(--error-dark);
		border: 1px solid var(--error);
	}

	button.btn-primary:disabled {
		background-color: var(--bg-tertiary);
		color: var(--text-muted);
		cursor: not-allowed;
	}
</style>
