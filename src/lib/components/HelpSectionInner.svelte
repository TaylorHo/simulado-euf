<script lang="ts">
	import { AreaLabels } from '$lib/models/area';
	import type { Question } from '$lib/models/question';

	interface Props {
		question: Question;
	}

	let { question }: Props = $props();

	let aiPrompt = $derived(
		`Explique a seguinte questão de ${AreaLabels[question.area]}:\n\n${question.statement.text}.\n\nSaiba que o resultado correto é ${question.alternatives.find((alt) => alt.number === question.correct)?.text}.${(question.statement.image && question.help.imageDescription) ?? `\n\nA imagem citada pela questão mostra: ${question.help.imageDescription}`}.`
	);
</script>

<div class="help-buttons">
	{#if question.alternatives.filter((alt) => alt.text).length > 0}
		<a
			href="https://chat.openai.com/?q={encodeURIComponent(aiPrompt)}"
			target="_blank"
			rel="noopener noreferrer"
			class="help-btn chatgpt"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
				/>
			</svg>
			ChatGPT
		</a>
	{/if}
	{#if question.help.youtubeUrl}
		<a
			href={question.help.youtubeUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="help-btn youtube"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
				/>
			</svg>
			YouTube
		</a>
	{/if}
</div>

<style>
	.help-buttons {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
		margin-top: var(--space-md);
	}

	.help-btn {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		font-weight: 600;
		text-decoration: none;
		transition: all var(--transition-fast);
		border: 2px solid;
	}

	.help-btn.chatgpt {
		background-color: #10a37f;
		color: white;
		border-color: #10a37f;
	}

	.help-btn.chatgpt:hover {
		background-color: #0d8c6d;
		border-color: #0d8c6d;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.help-btn.youtube {
		background-color: #ff0000;
		color: white;
		border-color: #ff0000;
	}

	.help-btn.youtube:hover {
		background-color: #cc0000;
		border-color: #cc0000;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}
</style>
