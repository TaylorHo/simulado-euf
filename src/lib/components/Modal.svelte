<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		open: boolean;
		title?: string;
		onClose: () => void;
		children?: Snippet;
	}

	let { open = $bindable(), title, onClose, children }: Props = $props();

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onClose();
		}
	}
</script>

{#if open}
	<div
		class="modal-overlay"
		onclick={handleOverlayClick}
		onkeydown={handleKeyDown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="modal-content fade-in">
			{#if title}
				<div class="modal-header">
					<h2>{title}</h2>
					<button class="close-btn" onclick={onClose} aria-label="Fechar">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M18 6L6 18M6 6l12 12" />
						</svg>
					</button>
				</div>
			{/if}
			<div class="modal-body">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: var(--space-lg);
	}

	.modal-content {
		background-color: var(--bg-primary);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		max-width: 600px;
		width: 100%;
		max-height: 90vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-lg);
		border-bottom: 1px solid var(--border-light);
	}

	.modal-header h2 {
		margin: 0;
		font-size: var(--text-xl);
	}

	.close-btn {
		padding: var(--space-sm);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-md);
		color: var(--text-muted);
		transition: all var(--transition-fast);
	}

	.close-btn:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-primary);
	}

	.modal-body {
		padding: var(--space-lg);
		overflow-y: auto;
	}

	@media (max-width: 768px) {
		.modal-overlay {
			padding: var(--space-md);
		}

		.modal-content {
			max-height: 95vh;
		}

		.modal-header {
			padding: var(--space-md);
		}

		.modal-header h2 {
			font-size: var(--text-lg-mobile);
		}

		.modal-body {
			padding: var(--space-md);
		}
	}

	@media (max-width: 640px) {
		.modal-overlay {
			padding: var(--space-sm);
		}

		.modal-header {
			padding: var(--space-sm) var(--space-md);
		}

		.modal-body {
			padding: var(--space-sm) var(--space-md);
		}
	}

	@media print {
		.modal-overlay {
			display: none;
		}
	}

	:global([data-theme='dark']) .modal-content {
		background-color: var(--bg-secondary);
	}

	:global([data-theme='dark']) .modal-overlay {
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>
