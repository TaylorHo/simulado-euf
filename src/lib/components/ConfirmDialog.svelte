<script lang="ts">
	import Modal from './Modal.svelte';

	interface Props {
		open: boolean;
		title: string;
		message: string;
		confirmText?: string;
		cancelText?: string;
		confirmClass?: 'primary' | 'secondary';
		onConfirm: () => void;
		onCancel: () => void;
	}

	let {
		open = $bindable(),
		title,
		message,
		confirmText = 'Confirmar',
		cancelText = 'Cancelar',
		confirmClass = 'primary',
		onConfirm,
		onCancel
	}: Props = $props();
</script>

<Modal {open} {title} onClose={onCancel}>
	<div class="confirm-content">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<p>{@html message}</p>
		<div class="confirm-actions">
			<button class="btn-secondary" onclick={onCancel}>{cancelText}</button>
			<button class="btn-{confirmClass}" onclick={onConfirm}>{confirmText}</button>
		</div>
	</div>
</Modal>

<style>
	.confirm-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.confirm-content p {
		margin: 0;
		color: var(--text-secondary);
	}

	.confirm-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: flex-end;
		flex-wrap: wrap;
	}
</style>
