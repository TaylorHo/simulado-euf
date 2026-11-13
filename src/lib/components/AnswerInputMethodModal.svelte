<script lang="ts">
	import { Camera, Edit3 } from '@lucide/svelte';

	interface Props {
		onSelectManual: () => void;
		onSelectPhoto: () => void;
	}

	let { onSelectManual, onSelectPhoto }: Props = $props();
</script>

<div class="method-selector">
	<h3>Como deseja preencher as respostas?</h3>
	<p class="subtitle">Escolha o método mais conveniente para você:</p>

	<div class="options">
		<button class="option-card" onclick={onSelectManual}>
			<div class="option-icon manual">
				<Edit3 size={48} strokeWidth={1.5} />
			</div>
			<div class="option-content">
				<h4>Preencher Manualmente</h4>
				<p>Responda cada questão diretamente no aplicativo</p>
			</div>
		</button>

		<button class="option-card" onclick={onSelectPhoto}>
			<div class="option-icon photo">
				<Camera size={48} strokeWidth={1.5} />
			</div>
			<div class="option-content">
				<h4>Escanear Folha de Respostas</h4>
				<p>Tire uma foto da folha preenchida e importe automaticamente</p>
			</div>
		</button>
	</div>

	<div class="info-note">
		<p>💡 <strong>Dica:</strong> Use a folha de respostas impressa para melhor experiência</p>
	</div>
</div>

<style>
	.method-selector {
		padding: var(--space-xl);
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	h3 {
		font-size: var(--text-2xl);
		margin: 0 0 var(--space-sm) 0;
		color: var(--text-primary);
	}

	.subtitle {
		color: var(--text-secondary);
		font-size: var(--text-base);
		margin: 0 0 var(--space-2xl) 0;
	}

	.options {
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		margin-bottom: var(--space-xl);
	}

	.option-card {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		padding: var(--space-xl);
		background-color: var(--bg-secondary);
		border: 2px solid var(--border-light);
		border-radius: var(--radius-lg);
		cursor: pointer;
		transition: all var(--transition-base);
		text-align: left;
	}

	.option-card:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-lg);
		transform: translateY(-2px);
	}

	.option-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		border-radius: var(--radius-lg);
		flex-shrink: 0;
	}

	.option-icon.manual {
		background-color: var(--accent-light);
		color: var(--accent-primary);
	}

	.option-icon.photo {
		background-color: var(--success-light);
		color: var(--success);
	}

	.option-content {
		flex: 1;
	}

	.option-content h4 {
		font-size: var(--text-lg);
		margin: 0 0 var(--space-xs) 0;
		color: var(--text-primary);
		font-weight: 600;
	}

	.option-content p {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	.info-note {
		padding: var(--space-md);
		background-color: var(--bg-tertiary);
		border-radius: var(--radius-md);
		border-left: 4px solid var(--accent-primary);
	}

	.info-note p {
		margin: 0;
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.info-note strong {
		color: var(--text-primary);
	}

	@media (max-width: 640px) {
		.method-selector {
			padding: var(--space-lg) var(--space-md);
		}

		h3 {
			font-size: var(--text-xl-mobile);
		}

		.subtitle {
			font-size: var(--text-sm-mobile);
		}

		.option-card {
			flex-direction: column;
			text-align: center;
			padding: var(--space-lg);
			gap: var(--space-md);
		}

		.option-icon {
			width: 64px;
			height: 64px;
		}

		.option-icon :global(svg) {
			width: 36px;
			height: 36px;
		}

		.option-content h4 {
			font-size: var(--text-base-mobile);
		}

		.option-content p {
			font-size: var(--text-xs-mobile);
		}

		.info-note p {
			font-size: var(--text-xs-mobile);
		}
	}
</style>
