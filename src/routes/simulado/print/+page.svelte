<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { examStore } from '$lib/stores/exam.svelte';
	import { AreaLabels } from '$lib/models/area';
	import LaTeX from '$lib/components/LaTeX.svelte';
	import QRCode from 'qrcode';

	let examId = $state<string | null>(null);
	let loaded = $state(false);
	const alternativeLabels = ['A', 'B', 'C', 'D', 'E'];

	let qrUrl = $state('');

	onMount(async () => {
		examId = $page.url.searchParams.get('id');

		if (examId) {
			try {
				examStore.loadExamFromIdentifier(examId);
				loaded = true;

				// Generate QR code data URLs
				try {
					qrUrl = await QRCode.toDataURL(window.location.href.replace('/print', ''), {
						width: 200,
						margin: 1,
						color: {
							dark: '#000000',
							light: '#ffffff'
						}
					});
				} catch (qrError) {
					console.error('Error generating QR codes:', qrError);
				}

				// Auto-trigger print dialog - wait for everything to render
				setTimeout(() => {
					window.print();
				}, 1500);
			} catch (error) {
				console.error('Error loading exam:', error);
				alert('Erro ao carregar o simulado. Código inválido.');
			}
		}
	});

	// Close window when print dialog is closed
	if (typeof window !== 'undefined') {
		window.onafterprint = () => {
			window.close();
		};
	}
</script>

<svelte:head>
	<title>Impressão - Simulado EUF</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
</svelte:head>

{#if loaded && examStore.currentExam}
	<div class="print-page">
		<div class="first-page">
			<h1>Simulado EUF</h1>
			<p class="subtitle">Exame Unificado de Física - 40 Questões</p>

			<div class="qr-code-wrapper">
				<p class="qr-text">Escaneie para acessar online:</p>
				{#if qrUrl}
					<img src={qrUrl} alt="QR Code" class="qr-image" />
				{/if}
			</div>

			<div class="instructions">
				<p><strong>Instruções:</strong></p>
				<p>• Duração: 4 horas</p>
				<p>• Cada questão possui apenas uma alternativa correta</p>
				<p>
					• <strong
						>Use o QR Code acima para acessar a versão online, conferir o gabarito e suas
						estatísticas de desempenho</strong
					>
				</p>
			</div>
		</div>

		{#each examStore.currentExam.questions as question, index (index)}
			<div class="question-item">
				<div class="question-header">
					<span class="question-num">Questão {index + 1}</span>
					<span class="question-area">{AreaLabels[question.area]}</span>
				</div>

				{#if question.statement.text}
					<div class="statement-text">
						<LaTeX content={question.statement.text} />
					</div>
				{/if}

				{#if question.statement.image}
					<div class="statement-image">
						<img src="/assets/images/{question.statement.image}" alt="Questão {index + 1}" />
					</div>
				{/if}

				<div class="alternatives-list">
					{#each question.alternatives as alt, altIndex (altIndex)}
						<div class="alternative-item">
							<span class="alt-label">{alternativeLabels[altIndex]}</span>
							<div class="alt-content">
								{#if alt.text}
									<div class="alt-text">
										<LaTeX content={alt.text} />
									</div>
								{/if}
								{#if alt.image}
									<img
										src="/assets/images/{alt.image}"
										alt="Alternativa {alternativeLabels[altIndex]}"
									/>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div class="last-page">
			<h2>Gabarito Online</h2>
			<p>Acesse o gabarito e suas estatísticas:</p>
			{#if qrUrl}
				<img src={qrUrl} alt="QR Code" class="qr-image" />
			{/if}
		</div>
	</div>
{:else}
	<div class="loading-page">
		<p>Carregando simulado...</p>
	</div>
{/if}

<style>
	:global(html),
	:global(body) {
		background: #ffffff !important;
		color: #000000 !important;
		margin: 0;
		padding: 0;
		font-family: 'Times New Roman', Times, serif;
		color-scheme: light !important;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	:global(html *),
	:global(body *) {
		color: #000000 !important;
		background: transparent !important;
	}

	:global(html[data-theme='dark']),
	:global(html[data-theme='dark'] *) {
		color-scheme: light !important;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	.print-page {
		max-width: 210mm;
		margin: 0 auto;
		padding: 15mm;
		background: #ffffff !important;
		color: #000000 !important;
		font-size: 10pt;
		line-height: 1.4;
	}

	.print-page * {
		color: #000000 !important;
	}

	.first-page {
		page-break-after: always;
		text-align: center;
		padding-top: 40mm;
	}

	.first-page h1 {
		margin: 0 0 10px 0;
		font-size: 24pt;
		font-weight: bold;
		color: #000000 !important;
	}

	.subtitle {
		margin: 0 0 40px 0;
		font-size: 12pt;
		color: #000000 !important;
	}

	.qr-code-wrapper {
		margin: 40px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}

	.qr-image {
		border: 2px solid #000000 !important;
		border-radius: 4px;
		background: #ffffff !important;
		display: block;
		-webkit-print-color-adjust: exact !important;
		print-color-adjust: exact !important;
	}

	.qr-text {
		margin: 0;
		font-size: 10pt;
		font-weight: bold;
		color: #000000 !important;
	}

	.instructions {
		margin-top: 40px;
		text-align: left;
		max-width: 150mm;
		margin-left: auto;
		margin-right: auto;
	}

	.instructions p {
		margin: 8px 0;
		font-size: 9pt;
		color: #000000 !important;
	}

	.question-item {
		page-break-inside: avoid;
		margin-bottom: 25px;
		padding-bottom: 20px;
	}

	.question-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
		padding-bottom: 8px;
		border-bottom: 1px solid #000000 !important;
	}

	.question-num {
		font-weight: bold;
		font-size: 11pt;
		color: #000000 !important;
	}

	.question-area {
		font-size: 9pt;
		color: #000000 !important;
		font-style: italic;
	}

	.statement-text {
		margin: 12px 0;
		line-height: 1.5;
		font-size: 10pt;
		color: #000000 !important;
	}

	.statement-image {
		margin: 15px 0;
		text-align: center;
	}

	.statement-image img {
		max-width: 100%;
		max-height: 200px;
		height: auto;
	}

	.alternatives-list {
		margin-top: 15px;
	}

	.alternative-item {
		display: flex;
		gap: 10px;
		margin-bottom: 10px;
		align-items: flex-start;
	}

	.alt-label {
		font-weight: bold;
		min-width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 2px solid #000000 !important;
		border-radius: 2px;
		flex-shrink: 0;
		font-size: 10pt;
		color: #000000 !important;
		background: #ffffff !important;
	}

	.alt-content {
		flex: 1;
	}

	.alt-text {
		line-height: 1.4;
		font-size: 11pt;
		color: #000000 !important;
	}

	.alt-content img {
		max-width: 100%;
		max-height: 150px;
		height: auto;
		margin-top: 5px;
	}

	.last-page {
		page-break-before: always;
		text-align: center;
		padding-top: 60mm;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.last-page h2 {
		margin: 0 0 20px 0;
		font-size: 18pt;
		color: #000000 !important;
	}

	.last-page p {
		margin: 15px 0 25px 0;
		font-size: 10pt;
		color: #000000 !important;
	}

	.last-page .qr-image {
		display: block;
		margin: 0 auto;
	}

	.loading-page {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		font-size: 14pt;
	}

	@media print {
		:global(html),
		:global(body),
		:global(*) {
			color: #000000 !important;
			background: #ffffff !important;
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}

		.print-page {
			padding: 0;
			max-width: none;
			background: #ffffff !important;
		}

		.question-item {
			page-break-inside: avoid;
		}

		.first-page,
		.last-page {
			page-break-inside: avoid;
		}

		img {
			-webkit-print-color-adjust: exact !important;
			print-color-adjust: exact !important;
		}
	}

	@media screen {
		:global(body) {
			background: #e0e0e0 !important;
			padding: 20px 0;
		}

		.print-page {
			box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
			margin: 20px auto;
		}
	}
</style>
