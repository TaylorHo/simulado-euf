<script lang="ts">
	import { AreaLabels } from '$lib/models/area';
	import type { Question } from '$lib/models/question';

	interface Props {
		question: Question;
	}

	let { question }: Props = $props();

	let aiPrompt = $derived(
		`Explique a seguinte questão de ${AreaLabels[question.area]}:\n\n${question.statement.text}\n\nSaiba que o resultado correto é ${question.alternatives.find((alt) => alt.number === question.correct)?.text}.${question.statement.image && question.help.imageDescription ? `\n\nA imagem citada pela questão mostra: ${question.help.imageDescription}` : ''}`
	);

	let copyButtonText = $state('Copiar Questão');

	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(aiPrompt);
			copyButtonText = 'Copiado!';
			setTimeout(() => {
				copyButtonText = 'Copiar Questão';
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
			copyButtonText = 'Erro ao copiar';
			setTimeout(() => {
				copyButtonText = 'Copiar Questão';
			}, 2000);
		}
	}
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
		<a
			href="https://claude.ai/new?q={encodeURIComponent(aiPrompt)}"
			target="_blank"
			rel="noopener noreferrer"
			class="help-btn claude"
		>
			<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
				<path
					d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
				></path>
			</svg>
			Claude
		</a>
		<button onclick={copyToClipboard} class="help-btn copy" type="button">
			{#if copyButtonText === 'Copiado!'}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<path d="M20 6L9 17l-5-5" />
				</svg>
			{:else}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
					<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
				</svg>
			{/if}
			{copyButtonText}
		</button>
	{/if}
	{#if question.help.youtubeVideoId}
		<a
			href={`https://www.youtube.com/watch?v=${question.help.youtubeVideoId}${question.help.youtubeVideoStartAt ? `&t=${question.help.youtubeVideoStartAt}s` : ''}`}
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
		cursor: pointer;
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

	.help-btn.claude {
		background-color: #d97757;
		color: white;
		border-color: #d97757;
	}

	.help-btn.claude:hover {
		background-color: #c5664a;
		border-color: #c5664a;
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

	.help-btn.copy {
		background-color: #6366f1;
		color: white;
		border-color: #6366f1;
	}

	.help-btn.copy:hover {
		background-color: #4f46e5;
		border-color: #4f46e5;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}
</style>
