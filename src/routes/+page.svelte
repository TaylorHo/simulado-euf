<script lang="ts">
	import { goto } from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import QRScanner from '$lib/components/QRScanner.svelte';
	import {
		FileText,
		Target,
		QrCode,
		Printer,
		ChartColumn,
		WifiOff,
		BookOpen,
		Clock,
		MapPin,
		Coffee,
		Github,
		Heart,
		ExternalLink
	} from '@lucide/svelte';
	import { BUY_ME_A_COFFEE_URL, GITHUB_REPO_URL, GITHUB_SPONSORS_URL } from '$lib/variables';

	let showQRModal = $state(false);

	function handleStartExam() {
		goto('/simulado');
	}

	function handleStartFlashcard() {
		goto('/flashcard');
	}

	function handleScanQR() {
		showQRModal = true;
	}

	function handleQRScan(code: string) {
		showQRModal = false;
		goto(`/simulado?id=${code}`);
	}
</script>

<svelte:head>
	<title>Simulado EUF - Exame Unificado de Física</title>
	<meta
		name="description"
		content="Prepare-se para o EUF com simulados e flashcards baseados em provas anteriores do Exame Unificado de Física da Pós-Graduação."
	/>
</svelte:head>

<main>
	<!-- Hero Section -->
	<section class="hero">
		<div class="container">
			<div class="hero-badge">
				<span class="badge-text">100% Gratuito • Sem Anúncios • Open Source</span>
			</div>
			<h1 class="hero-title">Prepare-se para o EUF</h1>
			<p class="hero-subtitle">
				Simulados e flashcards completos com questões reais dos exames anteriores do Exame Unificado
				de Física para Pós-Graduação
			</p>

			<div class="hero-actions">
				<button class="btn-primary btn-large" onclick={handleStartExam}>
					<FileText size={24} />
					Iniciar Simulado
				</button>
				<button class="btn-secondary btn-large" onclick={handleStartFlashcard}>
					<Target size={24} />
					Iniciar Flashcard
				</button>
			</div>
		</div>
	</section>

	<!-- QR Code CTA Banner -->
	<section class="qr-banner">
		<div class="container">
			<div class="qr-banner-card">
				<div class="qr-banner-content">
					<div class="qr-banner-icon">
						<QrCode size={56} strokeWidth={1.5} />
					</div>
					<div class="qr-banner-text">
						<h3>Tem um simulado impresso?</h3>
						<p>
							Escaneie o QR Code do seu simulado para verificar as respostas e ver sua pontuação.
						</p>
					</div>
				</div>
				<button class="btn-primary qr-banner-btn" onclick={handleScanQR}>
					<QrCode size={20} />
					Escanear QR Code
				</button>
			</div>
		</div>
	</section>

	<!-- About the Application -->
	<section class="about-app">
		<div class="container">
			<h2 class="section-title">Sobre o Simulado EUF</h2>
			<p class="section-description">
				O Simulado EUF é uma plataforma gratuita e de código aberto criada para ajudar estudantes a
				se prepararem para o Exame Unificado de Física. Com questões reais de edições anteriores,
				você pode praticar e avaliar seu desempenho de forma eficiente e realista.
			</p>

			<div class="features-grid">
				<div class="feature-card">
					<div class="feature-icon">
						<Printer size={32} strokeWidth={1.5} />
					</div>
					<h3>Imprima & Pratique</h3>
					<p>Gere simulados para imprimir e responder no papel, como na prova real</p>
				</div>

				<div class="feature-card">
					<div class="feature-icon">
						<ChartColumn size={32} strokeWidth={1.5} />
					</div>
					<h3>Análise Detalhada</h3>
					<p>Feedback completo do seu desempenho por área de conhecimento e questão</p>
				</div>

				<div class="feature-card">
					<div class="feature-icon">
						<WifiOff size={32} strokeWidth={1.5} />
					</div>
					<h3>100% Offline</h3>
					<p>Estude sem internet após o primeiro acesso à plataforma</p>
				</div>
			</div>
		</div>
	</section>

	<!-- About EUF -->
	<section class="about-euf">
		<div class="container">
			<div class="about-euf-header">
				<BookOpen size={48} strokeWidth={1.5} />
				<h2 class="section-title">O que é o EUF?</h2>
			</div>

			<div class="about-euf-content">
				<p class="about-euf-description">
					O <strong>Exame Unificado de Física (EUF)</strong> é uma avaliação padronizada aplicada semestralmente
					para ingresso em programas de pós-graduação em Física em diversas universidades brasileiras.
					O exame é reconhecido nacionalmente e utilizado como critério de seleção por instituições de
					ensino superior de prestígio.
				</p>

				<div class="euf-info-grid">
					<div class="euf-info-card">
						<div class="euf-info-icon">
							<Clock size={32} />
						</div>
						<h4>Duração</h4>
						<p>4 horas de prova</p>
					</div>

					<div class="euf-info-card">
						<div class="euf-info-icon">
							<MapPin size={32} />
						</div>
						<h4>Frequência</h4>
						<p>2 vezes por ano</p>
					</div>

					<div class="euf-info-card">
						<div class="euf-info-icon">
							<FileText size={32} />
						</div>
						<h4>Questões</h4>
						<p>40 questões objetivas</p>
					</div>
				</div>

				<div class="areas-section">
					<h3>Áreas Avaliadas</h3>
					<p class="areas-description">
						O exame é dividido em 6 áreas fundamentais da Física, com pesos diferentes:
					</p>
					<ul class="areas-list">
						<li class="area-item">
							<span class="area-name">Eletromagnetismo</span>
							<span class="area-count">8 questões</span>
						</li>
						<li class="area-item">
							<span class="area-name">Física Moderna</span>
							<span class="area-count">8 questões</span>
						</li>
						<li class="area-item">
							<span class="area-name">Mecânica Clássica</span>
							<span class="area-count">8 questões</span>
						</li>
						<li class="area-item">
							<span class="area-name">Mecânica Quântica</span>
							<span class="area-count">8 questões</span>
						</li>
						<li class="area-item">
							<span class="area-name">Física Estatística</span>
							<span class="area-count">4 questões</span>
						</li>
						<li class="area-item">
							<span class="area-name">Termodinâmica</span>
							<span class="area-count">4 questões</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Contribution Section -->
	<section class="contribution">
		<div class="container">
			<div class="contribution-header">
				<Heart size={48} strokeWidth={1.5} />
				<h2 class="section-title">Apoie Este Projeto</h2>
				<p class="section-description">
					O Simulado EUF é gratuito e sempre será. Se este projeto te ajudou, considere apoiar o
					desenvolvimento e manutenção da plataforma.
				</p>
			</div>

			<div class="contribution-options">
				<a
					href={BUY_ME_A_COFFEE_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="contribution-card"
				>
					<div class="contribution-icon">
						<Coffee size={32} />
					</div>
					<h3>Buy Me a Coffee</h3>
					<p>Apoie com uma contribuição única</p>
					<span class="contribution-link">
						buymeacoffee.com/taylorho
						<ExternalLink size={16} />
					</span>
				</a>

				<a
					href={GITHUB_SPONSORS_URL}
					target="_blank"
					rel="noopener noreferrer"
					class="contribution-card"
				>
					<div class="contribution-icon">
						<Github size={32} />
					</div>
					<h3>GitHub Sponsors</h3>
					<p>Torne-se um patrocinador mensal</p>
					<span class="contribution-link">
						github.com/sponsors/TaylorHo
						<ExternalLink size={16} />
					</span>
				</a>

				<button class="contribution-card contribution-card-disabled" disabled>
					<div class="contribution-icon">
						<ExternalLink size={32} />
					</div>
					<h3>Visualizar Anúncios</h3>
					<p>Ajude apenas visualizando uma página</p>
					<span class="contribution-badge">Em breve</span>
				</button>
			</div>

			<div class="contribution-footer">
				<p>
					Este projeto é de código aberto. Contribua com código, reportando bugs ou sugerindo
					melhorias no
					<a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer">repositório GitHub</a
					>.
				</p>
			</div>
		</div>
	</section>

	<Footer />
</main>

<Modal open={showQRModal} title="Escanear QR Code" onClose={() => (showQRModal = false)}>
	<QRScanner onScan={handleQRScan} />
</Modal>

<style>
	main {
		min-height: 100vh;
		background-color: var(--bg-primary);
	}

	.container {
		width: 100%;
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	/* Hero Section */
	.hero {
		padding: var(--space-2xl) 0;
		text-align: center;
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-xs) var(--space-lg);
		background-color: var(--success-light);
		border: 2px solid var(--success);
		border-radius: var(--radius-lg);
		font-size: var(--text-xs);
		font-weight: 600;
		color: #22c55e;
		margin-bottom: var(--space-lg);
	}

	:global([data-theme='dark']) .hero-badge {
		background-color: rgba(16, 185, 129, 0.15);
		border-color: #10b981;
		color: #34d399;
	}

	.hero-title {
		font-size: var(--text-4xl);
		margin: 0 0 var(--space-md) 0;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 700;
	}

	.hero-subtitle {
		font-size: var(--text-lg);
		color: var(--text-secondary);
		margin: 0 auto var(--space-xl) auto;
		max-width: 700px;
		line-height: 1.6;
	}

	.hero-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-large {
		font-size: var(--text-base);
		font-weight: 700;
		padding: var(--space-md) var(--space-2xl);
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		border-radius: var(--radius-lg);
	}

	/* QR Banner */
	.qr-banner {
		padding: var(--space-xl) 0;
	}

	.qr-banner-card {
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
		border-radius: var(--radius-xl);
		padding: var(--space-2xl);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-xl);
		box-shadow: var(--shadow-lg);
		flex-wrap: wrap;
	}

	:global([data-theme='dark']) .qr-banner-card {
		background: linear-gradient(135deg, #2563eb, #3b82f6);
	}

	.qr-banner-content {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		flex: 1;
		min-width: 280px;
	}

	.qr-banner-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80px;
		height: 80px;
		background-color: rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-xl);
		color: white;
		flex-shrink: 0;
	}

	.qr-banner-text {
		color: white;
	}

	.qr-banner-text h3 {
		margin: 0 0 var(--space-xs) 0;
		font-size: var(--text-xl);
		font-weight: 700;
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.qr-banner-text p {
		margin: 0;
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.98);
		line-height: 1.5;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	}

	.qr-banner-btn {
		background-color: white;
		color: var(--accent-primary);
		border: 2px solid white;
		font-size: var(--text-base);
		font-weight: 700;
		padding: var(--space-md) var(--space-xl);
		white-space: nowrap;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.qr-banner-btn:hover {
		background-color: white;
		color: var(--accent-primary);
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}

	:global([data-theme='dark']) .qr-banner-btn {
		color: #1e40af;
	}

	/* About App Section */
	.about-app {
		padding: var(--space-2xl) 0;
		background-color: var(--bg-secondary);
	}

	.section-title {
		font-size: var(--text-3xl);
		margin: 0 0 var(--space-md) 0;
		text-align: center;
		color: var(--text-primary);
	}

	.section-description {
		font-size: var(--text-base);
		color: var(--text-secondary);
		text-align: center;
		max-width: 800px;
		margin: 0 auto var(--space-2xl) auto;
		line-height: 1.7;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-lg);
		margin-top: var(--space-xl);
	}

	.feature-card {
		background-color: var(--bg-primary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: center;
		transition: all var(--transition-base);
	}

	.feature-card:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-md);
		transform: translateY(-4px);
	}

	.feature-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--accent-primary);
		margin-bottom: var(--space-sm);
	}

	.feature-card h3 {
		font-size: var(--text-lg);
		margin: 0;
		color: var(--text-primary);
		font-weight: 600;
	}

	.feature-card p {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		line-height: 1.5;
		margin: 0;
	}

	/* About EUF Section */
	.about-euf {
		padding: var(--space-2xl) 0;
	}

	.about-euf-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
		color: var(--accent-primary);
	}

	.about-euf-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.about-euf-description {
		font-size: var(--text-base);
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: var(--space-2xl);
		text-align: center;
	}

	.about-euf-description strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.euf-info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-2xl);
	}

	.euf-info-card {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: center;
	}

	.euf-info-icon {
		color: var(--accent-primary);
		margin-bottom: var(--space-sm);
	}

	.euf-info-card h4 {
		font-size: var(--text-lg);
		margin: 0;
		color: var(--text-primary);
		font-weight: 600;
	}

	.euf-info-card p {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		margin: 0;
	}

	.areas-section {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-2xl);
	}

	.areas-section h3 {
		font-size: var(--text-2xl);
		margin: 0 0 var(--space-md) 0;
		color: var(--text-primary);
		text-align: center;
	}

	.areas-description {
		font-size: var(--text-base);
		color: var(--text-secondary);
		text-align: center;
		margin-bottom: var(--space-xl);
		line-height: 1.6;
	}

	.areas-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-md);
		padding: 0;
		margin: 0;
	}

	.area-item {
		padding: var(--space-md) var(--space-lg);
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid var(--border-light);
		transition: all var(--transition-fast);
	}

	.area-item:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-sm);
	}

	.area-name {
		color: var(--text-primary);
		font-weight: 600;
		font-size: var(--text-sm);
	}

	.area-count {
		color: var(--text-secondary);
		font-size: var(--text-sm);
		padding: var(--space-xs) var(--space-md);
		background-color: var(--accent-light);
		border-radius: var(--radius-sm);
		font-weight: 500;
	}

	:global([data-theme='dark']) .area-count {
		background-color: rgba(59, 130, 246, 0.15);
	}

	/* Contribution Section */
	.contribution {
		padding: var(--space-2xl) 0;
		background-color: var(--bg-secondary);
	}

	.contribution-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-md);
		margin-bottom: var(--space-2xl);
		color: var(--accent-primary);
		text-align: center;
	}

	.contribution-options {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-2xl);
	}

	.contribution-card {
		background-color: var(--bg-primary);
		border: 2px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-2xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-md);
		transition: all var(--transition-base);
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

	.contribution-card:not(.contribution-card-disabled):hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-lg);
		transform: translateY(-4px);
	}

	.contribution-card-disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.contribution-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		background-color: var(--accent-light);
		border-radius: var(--radius-xl);
		color: var(--accent-primary);
	}

	:global([data-theme='dark']) .contribution-icon {
		background-color: rgba(59, 130, 246, 0.15);
	}

	.contribution-card h3 {
		font-size: var(--text-xl);
		margin: 0;
		color: var(--text-primary);
		font-weight: 600;
	}

	.contribution-card p {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.5;
	}

	.contribution-link {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		font-size: var(--text-xs);
		color: var(--accent-primary);
		font-weight: 500;
	}

	.contribution-badge {
		display: inline-block;
		padding: var(--space-xs) var(--space-md);
		background-color: var(--warning-light);
		border-radius: var(--radius-sm);
		font-size: var(--text-xs);
		color: var(--warning);
		font-weight: 600;
	}

	:global([data-theme='dark']) .contribution-badge {
		background-color: rgba(249, 115, 22, 0.15);
		color: #fb923c;
	}

	.contribution-footer {
		text-align: center;
		padding: var(--space-xl);
		border-top: 1px solid var(--border-light);
	}

	.contribution-footer p {
		font-size: var(--text-sm);
		color: var(--text-secondary);
		margin: 0;
		line-height: 1.6;
	}

	.contribution-footer a {
		color: var(--accent-primary);
		font-weight: 500;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero {
			padding: var(--space-xl) 0;
		}

		.hero-title {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-base);
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.btn-large {
			width: 100%;
			justify-content: center;
		}

		.qr-banner-card {
			flex-direction: column;
			text-align: center;
			padding: var(--space-xl);
		}

		.qr-banner-content {
			flex-direction: column;
			text-align: center;
		}

		.qr-banner-btn {
			width: 100%;
			justify-content: center;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.euf-info-grid {
			grid-template-columns: 1fr;
		}

		.areas-list {
			grid-template-columns: 1fr;
		}

		.contribution-options {
			grid-template-columns: 1fr;
		}
	}
</style>
