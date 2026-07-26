<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { flashcardStore } from '$lib/stores/flashcard.svelte';
	import { QuestionAlternative, Version } from '$lib/models/question';
	import Footer from '$lib/components/Footer.svelte';
	import Question from '$lib/components/Question.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import type { ExamQuestion } from '$lib/models/exam';
	import { Area, AreaLabels } from '$lib/models/area';
	import { ADSENSE_CLIENT_ID, AD_SLOTS, ADS_ENABLED, BASE_URL } from '$lib/variables';
	import { adsPreferenceStore } from '$lib/stores/ads.svelte';
	import { isTauriMobileApp } from '$lib/utils/platform';
	import { Settings } from '@lucide/svelte';
	import { generateQuestionId, parseQuestionId } from '$lib/services/identifiers';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let isLoading = $state(true);
	let showInterstitialAd = $state(false);
	let wasCorrectAnswer = $state(false);
	let canSkipAd = $state(false);
	let remainingSeconds = $state(5);
	let adsLoaded = $state(false);
	let settingsOpen = $state(false);
	let isTauriMobile = $state(false);

	// Convert flashcard question to ExamQuestion format for the Question component
	const currentExamQuestion = $derived<ExamQuestion | null>(
		flashcardStore.currentQuestion
			? ({
					year: flashcardStore.currentQuestion.year,
					semester: flashcardStore.currentQuestion.semester,
					version: flashcardStore.currentQuestion.version,
					area: flashcardStore.currentQuestion.area,
					questionNumber: flashcardStore.currentQuestion.questionNumber,
					statement: flashcardStore.currentQuestion.statement,
					alternatives:
						flashcardStore.currentQuestion.shuffledAlternatives ||
						flashcardStore.currentQuestion.alternatives,
					correct: flashcardStore.currentQuestion.correct,
					tags: flashcardStore.currentQuestion.tags,
					selected: flashcardStore.selectedAnswer,
					discarded: flashcardStore.discardedAlternatives,
					help: flashcardStore.currentQuestion.help
				} as ExamQuestion)
			: null
	);

	onMount(() => {
		isTauriMobile = isTauriMobileApp();

		if (data.questionId) {
			flashcardStore.loadQuestionById(data.questionId);
			isLoading = false;
		} else {
			const question = flashcardStore.getRandomQuestion();
			if (question) {
				goto(`/flashcard/${flashcardStore.getQuestionId(question)}`, {
					replaceState: true
				});
			}
			isLoading = false;
		}
	});

	// Load ads when interstitial is shown
	$effect(() => {
		if (showInterstitialAd && !adsLoaded && ADS_ENABLED && adsPreferenceStore.enabled) {
			setTimeout(() => {
				try {
					const ads = document.querySelectorAll('.ads-wrapper .adsbygoogle');
					if (ads.length > 0) {
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
						const adsbygoogle = (window as any).adsbygoogle || [];
						ads.forEach(() => {
							adsbygoogle.push({});
						});
						adsLoaded = true;
					}
				} catch (e) {
					console.error('Ad loading error:', e);
				}
			}, 100);
		}
	});

	function getAlternateVersionId(id: string): string {
		const identifier = parseQuestionId(id);
		return generateQuestionId({
			...identifier,
			version: identifier.version === Version.A ? Version.B : Version.A
		});
	}

	function handleSelectAnswer(alt: QuestionAlternative) {
		flashcardStore.selectAnswer(alt);
	}

	function handleToggleDiscard(alt: QuestionAlternative) {
		flashcardStore.toggleDiscarded(alt);
	}

	function handleReveal() {
		flashcardStore.revealAnswer();
	}

	function handleNext() {
		// When clicking "Pular questão" (skip), go directly to next question without ads
		if (!flashcardStore.showAnswer) {
			const question = flashcardStore.nextQuestion();
			if (question) {
				goto(`/flashcard/${flashcardStore.getQuestionId(question)}/`);
			}
			return;
		}

		// When clicking "Próxima Questão" after revealing answer, show interstitial ad if enabled
		if (ADS_ENABLED && adsPreferenceStore.enabled && !isTauriMobile) {
			// Check if answer was correct
			wasCorrectAnswer = flashcardStore.selectedAnswer === flashcardStore.currentQuestion?.correct;

			// If correct, user must wait 5 seconds. If wrong, can skip immediately
			canSkipAd = !wasCorrectAnswer;
			remainingSeconds = 5;

			// Reset ads loaded flag
			adsLoaded = false;

			// Show interstitial ad page
			showInterstitialAd = true;

			// Start countdown timer if answer was correct
			if (wasCorrectAnswer) {
				const timer = setInterval(() => {
					remainingSeconds--;
					if (remainingSeconds <= 0) {
						canSkipAd = true;
						clearInterval(timer);
					}
				}, 1000);
			}
		} else {
			// Ads disabled, go directly to next question
			proceedToNextQuestion();
		}
	}

	function proceedToNextQuestion() {
		showInterstitialAd = false;
		const question = flashcardStore.nextQuestion();
		if (question) {
			goto(`/flashcard/${flashcardStore.getQuestionId(question)}/`);
		}
	}

	function handleSkipAd() {
		if (canSkipAd) {
			proceedToNextQuestion();
		}
	}

	function updateAreaWeight(area: Area, weight: number) {
		flashcardStore.updateWeight(area, weight);
	}

	let questionTitle = $derived(
		currentExamQuestion
			? `de ${AreaLabels[currentExamQuestion.area]} da prova de ${currentExamQuestion.year}-${currentExamQuestion.semester} - Q${currentExamQuestion.questionNumber}-${currentExamQuestion.version === Version.A ? 'A' : 'B'}`
			: ''
	);

	const alternateVersionId = $derived(
		data.questionId ? getAlternateVersionId(data.questionId) : null
	);

	const versionSwitchTooltip = $derived(
		currentExamQuestion
			? currentExamQuestion.version === Version.A
				? 'Trocar para versão B'
				: 'Trocar para versão A'
			: ''
	);

	function handleSwitchVersion() {
		if (!alternateVersionId) return;
		flashcardStore.loadQuestionById(alternateVersionId);
		goto(`/flashcard/${alternateVersionId}/`, { replaceState: true });
	}
</script>

<svelte:head>
	<title>Flashcard {`- Questão ` + questionTitle}</title>
	<meta name="description" content="Pratique questões do EUF com flashcards aleatórios" />
	<link rel="canonical" href={`${BASE_URL}/flashcard/${data.questionId}/`} />
	{#if ADS_ENABLED}
		<script
			async
			src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client={ADSENSE_CLIENT_ID}"
			crossorigin="anonymous"
		></script>
	{/if}
</svelte:head>

<div class="flashcard-page" class:tauri-mobile={isTauriMobile}>
	<div class="container flashcard-content">
		{#if isLoading}
			<div class="loading">
				<div class="spinner"></div>
			</div>
		{:else if showInterstitialAd}
			<!-- Interstitial Ad Page -->
			<div class="interstitial-container">
				<!-- Title Outside Container -->
				{#if wasCorrectAnswer}
					<h2 class="congrats-title">🎉 Parabéns!</h2>
				{:else}
					<h2 class="goodluck-title">Continue tentando!</h2>
				{/if}

				<p class="message-text">
					{#if wasCorrectAnswer}
						Ficamos felizes que você acertou! Dê uma olhada em alguns anúncios para ajudar a manter
						o projeto.
					{:else}
						Boa sorte na próxima questão!
					{/if}
				</p>

				<!-- All Ads in Same Container -->
				<div class="ads-section">
					<!-- Ad Slots in Single Container -->
					<div class="ads-wrapper">
						{#each AD_SLOTS as slot (slot)}
							<ins
								class="adsbygoogle"
								style="display:block"
								data-ad-client={ADSENSE_CLIENT_ID}
								data-ad-slot={slot}
								data-ad-format="auto"
								data-full-width-responsive="true"
							></ins>
						{/each}
					</div>
				</div>

				<!-- Skip Button Inside Same Container -->
				<button class="btn-primary skip-btn" onclick={handleSkipAd} disabled={!canSkipAd}>
					{#if canSkipAd}
						Pular anúncios
					{:else}
						Aguarde {remainingSeconds}s para pular
					{/if}
				</button>
			</div>
		{:else}
			<button
				class="settings-fab"
				onclick={() => (settingsOpen = true)}
				title="Configurações dos Flashcards"
				aria-label="Configurações dos Flashcards"
			>
				<Settings size={28} />
				{#if flashcardStore.isConfigured}
					<span class="settings-indicator"></span>
				{/if}
			</button>
			{#if currentExamQuestion}
				<Question
					question={currentExamQuestion}
					questionNumber={questionTitle}
					showCorrect={flashcardStore.showAnswer}
					showDiscardButton={!flashcardStore.showAnswer}
					onSelectAnswer={handleSelectAnswer}
					onToggleDiscard={handleToggleDiscard}
					onSwitchVersion={handleSwitchVersion}
					{versionSwitchTooltip}
				/>

				<div class="actions-container">
					<div class="flashcard-actions">
						{#if !flashcardStore.showAnswer}
							<div class="action-buttons">
								<button class="btn-secondary action-btn" onclick={handleNext}>Pular questão</button>
								<button
									class="btn-primary action-btn"
									onclick={handleReveal}
									disabled={flashcardStore.selectedAnswer === null}
								>
									Confirmar resposta
								</button>
							</div>
						{:else}
							<button class="btn-primary action-btn" onclick={handleNext}> Próxima Questão </button>
						{/if}
					</div>
				</div>
			{:else}
				<div class="empty-state">
					<p>Nenhuma questão encontrada para as áreas selecionadas.</p>
					<button class="btn-primary" onclick={() => (settingsOpen = true)}>
						Ajustar configurações
					</button>
				</div>
			{/if}
		{/if}
	</div>
	{#if !isTauriMobile}
		<Footer />
	{/if}
</div>

<Modal
	open={settingsOpen}
	title="Configurações dos Flashcards"
	onClose={() => (settingsOpen = false)}
>
	<div class="settings-content">
		<div class="area-settings-list">
			{#each Object.entries(AreaLabels) as [areaStr, label] (areaStr)}
				{@const area = Number(areaStr) as Area}
				<div class="area-setting-item">
					<div class="area-info">
						<span class="area-name">{label}</span>
						<span class="area-weight" class:disabled={flashcardStore.areaWeights[area] === 0}>
							{#if flashcardStore.areaWeights[area] === 0}
								Off
							{:else}
								{flashcardStore.areaWeights[area]}%
							{/if}
						</span>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						step="5"
						value={flashcardStore.areaWeights[area]}
						oninput={(e) => updateAreaWeight(area, Number(e.currentTarget.value))}
						class="weight-slider"
					/>
				</div>
			{/each}
		</div>

		<div class="settings-footer">
			<button class="btn-primary full-width" onclick={() => (settingsOpen = false)}>
				Pronto
			</button>
		</div>
	</div>
</Modal>

<style>
	.flashcard-page {
		min-height: 100vh;
		background-color: var(--bg-primary);
		padding-top: var(--space-lg);
		position: relative;
	}

	.flashcard-content {
		padding: var(--space-lg) var(--space-lg);
		min-height: calc(100vh - var(--topbar-height));
	}

	.flashcard-page.tauri-mobile {
		padding-top: calc(var(--safe-area-inset-top) + var(--space-lg));
	}

	.flashcard-page.tauri-mobile .flashcard-content {
		padding-bottom: calc(72px + var(--safe-area-inset-bottom) + var(--space-2xl));
	}

	.flashcard-page.tauri-mobile .settings-fab {
		top: calc(var(--safe-area-inset-top) + var(--space-md));
	}

	.settings-fab {
		position: fixed;
		right: 0;
		top: calc(var(--topbar-height) + var(--space-xl));
		z-index: 90;
		width: 52px;
		height: 60px;
		border-radius: var(--radius-md) 0 0 var(--radius-md);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-right: none;
		color: var(--text-muted);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow: var(--shadow-md);
		padding: 5px 5px 5px 8px;
		transition: all var(--transition-fast);
	}

	.settings-fab:hover {
		background-color: var(--bg-tertiary);
		color: var(--text-secondary);
	}

	.settings-indicator {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 8px;
		height: 8px;
		background-color: #3b82f6;
		border-radius: 50%;
	}

	.loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-lg);
		padding: var(--space-2xl);
		min-height: 400px;
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

	.actions-container {
		margin-top: var(--space-lg);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
	}

	.flashcard-page.tauri-mobile .actions-container {
		position: fixed;
		left: var(--space-md);
		right: var(--space-md);
		bottom: calc(72px + var(--safe-area-inset-bottom) + var(--space-sm));
		z-index: 95;
		margin-top: 0;
		padding: var(--space-md);
		background-color: color-mix(in srgb, var(--bg-secondary) 96%, transparent);
		backdrop-filter: blur(8px);
		box-shadow: var(--shadow-lg);
	}

	.flashcard-page.tauri-mobile .action-buttons {
		flex-direction: row;
	}

	.action-buttons {
		display: flex;
		gap: var(--space-md);
	}

	.action-btn {
		flex: 1;
		min-height: 48px;
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--space-2xl);
		background-color: var(--bg-secondary);
		border: 1px dashed var(--border-medium);
		border-radius: var(--radius-lg);
		gap: var(--space-lg);
		text-align: center;
	}

	.empty-state p {
		color: var(--text-secondary);
		font-size: var(--text-lg);
		margin: 0;
	}

	/* Interstitial Ad Styles */
	.interstitial-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		padding: var(--space-lg);
		max-width: 900px;
		margin: 0 auto;
	}

	.congrats-title {
		color: var(--accent-primary);
		font-size: var(--text-2xl);
		font-weight: 700;
		text-align: center;
		margin: 0;
	}

	.goodluck-title {
		color: var(--text-primary);
		font-size: var(--text-2xl);
		font-weight: 700;
		text-align: center;
		margin: 0;
	}

	.ads-section {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		position: relative;
		z-index: 1;
	}

	.message-text {
		color: var(--text-secondary);
		font-size: var(--text-md);
		line-height: 1.6;
		text-align: center;
		margin: 0;
	}

	.ads-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		min-height: 100px;
		pointer-events: none;
	}

	.ads-wrapper .adsbygoogle {
		min-height: 80px;
		pointer-events: auto;
	}

	.skip-btn {
		width: 100%;
		padding: var(--space-md);
		font-size: var(--text-md);
		min-height: 48px;
		margin-top: var(--space-sm);
		position: relative;
		z-index: 10;
		pointer-events: auto;
	}

	.skip-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	/* Settings Modal Styles */
	.settings-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.area-settings-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
		margin-top: var(--space-sm);
	}

	.area-setting-item {
		background-color: var(--bg-secondary);
		padding: var(--space-xs) var(--space-md);
		border-radius: var(--radius-md);
		border: 1px solid var(--border-light);
		display: flex;
		flex-direction: column;
		gap: 0px;
	}

	.area-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: -2px;
	}

	.area-name {
		font-weight: 600;
		font-size: var(--text-xs);
		color: var(--text-primary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.area-weight {
		font-size: 10px;
		padding: 1px 6px;
		background-color: var(--accent-primary);
		color: white;
		border-radius: var(--radius-full);
		font-weight: 700;
	}

	.area-weight.disabled {
		background-color: var(--text-muted);
	}

	.weight-slider {
		width: 100%;
		margin: 10px 0 4px;
		cursor: pointer;
		padding: 0;
	}

	.settings-footer {
		margin-top: var(--space-xs);
	}

	.full-width {
		width: 100%;
	}

	@media (max-width: 768px) {
		.flashcard-page {
			padding-top: var(--space-sm);
		}

		.flashcard-content {
			padding: var(--space-md);
		}

		.settings-fab {
			right: 0;
			top: auto;
			bottom: var(--space-2xl);
			width: 52px;
			height: 60px;
			border-radius: var(--radius-lg) 0 0 var(--radius-lg);
			box-shadow: var(--shadow-lg);
		}

		.actions-container {
			padding: var(--space-md);
			margin-top: var(--space-md);
			margin-bottom: 80px; /* Space for FAB */
		}

		.flashcard-page.tauri-mobile .actions-container {
			margin-bottom: 0;
		}

		.flashcard-page.tauri-mobile .settings-fab {
			top: calc(var(--safe-area-inset-top) + var(--space-md));
			bottom: auto;
		}

		.area-settings-list {
			grid-template-columns: 1fr;
		}

		.action-buttons {
			gap: var(--space-sm);
		}

		.action-btn {
			font-size: var(--text-sm-mobile);
			padding: var(--space-sm) var(--space-md);
			min-height: 48px;
		}

		.interstitial-container {
			gap: var(--space-sm);
			padding: var(--space-md);
		}

		.ads-section {
			padding: var(--space-md);
		}

		.congrats-title,
		.goodluck-title {
			font-size: var(--text-xl);
		}

		.message-text {
			font-size: var(--text-sm);
		}

		.ads-wrapper .adsbygoogle {
			min-height: 60px;
		}
	}

	@media (max-width: 640px) {
		.flashcard-content {
			padding: var(--space-sm) var(--space-md);
		}

		.action-buttons {
			flex-direction: column;
		}

		.interstitial-container {
			padding: var(--space-sm);
		}

		.ads-section {
			padding: var(--space-sm) var(--space-md);
			gap: var(--space-sm);
		}
	}
</style>
