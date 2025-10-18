<script lang="ts">
	import { Printer, BarChart3, WifiOff, FileText, Target, QrCode } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import Modal from './Modal.svelte';
	import QRScanner from './QRScanner.svelte';

	interface Props {
		onStartExam: () => void;
		onStartFlashcard: () => void;
	}

	let { onStartExam, onStartFlashcard }: Props = $props();
	let showQRModal = $state(false);

	function handleScanQR() {
		showQRModal = true;
	}

	function handleQRScan(code: string) {
		showQRModal = false;
		goto(`/simulado?id=${code}`);
	}
</script>

<div class="landing">
	<div class="hero">
		<div class="hero-badge">
			<span class="badge-text">100% Gratuito • Sem Anúncios • Open Source</span>
		</div>
		<h1 class="hero-title">Prepare-se para o EUF</h1>
		<p class="hero-subtitle">
			Simulados e flashcards com questões reais dos exames anteriores do Exame Unificado de Física
		</p>
	</div>

	<div class="actions">
		<div class="action-card">
			<div class="action-icon">
				<FileText size={48} strokeWidth={1.5} />
			</div>
			<h2>Modo Simulado</h2>
			<p>
				Faça um simulado completo com 40 questões distribuídas pelas 6 áreas do exame. Receba
				feedback detalhado sobre seu desempenho.
			</p>
			<div class="action-features">
				<span class="feature-badge">Online</span>
				<span class="feature-badge">Imprimível</span>
				<span class="feature-badge">Feedback completo</span>
			</div>
			<button class="btn-primary action-btn" onclick={onStartExam}> Iniciar Simulado </button>
		</div>

		<div class="action-card">
			<div class="action-icon">
				<Target size={48} strokeWidth={1.5} />
			</div>
			<h2>Modo Flashcard</h2>
			<p>
				Pratique com questões aleatórias, uma de cada vez. Ideal para revisão rápida e foco em
				tópicos específicos.
			</p>
			<div class="action-features">
				<span class="feature-badge">Feedback instantâneo</span>
				<span class="feature-badge">Questões únicas</span>
			</div>
			<button class="btn-secondary action-btn" onclick={onStartFlashcard}>
				Iniciar Flashcard
			</button>
		</div>
	</div>

	<div class="qr-cta-card">
		<div class="qr-cta-content">
			<div class="qr-cta-icon">
				<QrCode size={56} strokeWidth={1.5} />
			</div>
			<div class="qr-cta-text">
				<h3>Tem um simulado impresso?</h3>
				<p>Escaneie o QR Code do seu simulado para verificar as respostas e ver sua pontuação.</p>
			</div>
		</div>
		<button class="btn-primary qr-cta-btn" onclick={handleScanQR}>
			<QrCode size={20} />
			Escanear QR Code
		</button>
	</div>

	<div class="features-grid">
		<div class="feature-card">
			<div class="feature-icon">
				<Printer size={32} strokeWidth={1.5} />
			</div>
			<h3>Imprima & Pratique</h3>
			<p>Gere simulados para imprimir e responder no papel</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<BarChart3 size={32} strokeWidth={1.5} />
			</div>
			<h3>Análise Detalhada</h3>
			<p>Feedback completo do seu desempenho por área e tópico</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<WifiOff size={32} strokeWidth={1.5} />
			</div>
			<h3>100% Offline</h3>
			<p>Estude sem internet após o primeiro acesso</p>
		</div>
	</div>

	<div class="info">
		<h3>Sobre o EUF</h3>
		<p>
			O Exame Unificado de Física é aplicado semestralmente para ingresso em programas de
			pós-graduação em Física no Brasil. A prova possui 40 questões distribuídas em 6 áreas:
		</p>
		<ul class="areas-list">
			<li><strong>Eletromagnetismo</strong> - 8 questões</li>
			<li><strong>Física Moderna</strong> - 8 questões</li>
			<li><strong>Mecânica Clássica</strong> - 8 questões</li>
			<li><strong>Mecânica Quântica</strong> - 8 questões</li>
			<li><strong>Física Estatística</strong> - 4 questões</li>
			<li><strong>Termodinâmica</strong> - 4 questões</li>
		</ul>
	</div>
</div>

<Modal open={showQRModal} title="Escanear QR Code" onClose={() => (showQRModal = false)}>
	<QRScanner onScan={handleQRScan} />
</Modal>

<style>
	.landing {
		max-width: 1000px;
		margin: 0 auto;
		padding: var(--space-xl) var(--space-lg) var(--space-2xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.hero {
		text-align: center;
		padding: var(--space-lg) 0 var(--space-xl);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
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
		align-self: center;
	}

	:global([data-theme='dark']) .hero-badge {
		background-color: rgba(16, 185, 129, 0.15);
		border-color: #10b981;
		color: #34d399;
	}

	.hero-title {
		font-size: var(--text-4xl);
		margin: 0;
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		font-weight: 700;
	}

	.hero-subtitle {
		font-size: var(--text-lg);
		color: var(--text-secondary);
		margin: 0;
		font-weight: 400;
		max-width: 700px;
		align-self: center;
	}

	.actions {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-lg);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--space-lg);
	}

	.feature-card {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: center;
	}

	.feature-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--accent-primary);
	}

	.feature-card h3 {
		font-size: var(--text-base);
		margin: 0;
		color: var(--text-primary);
		font-weight: 600;
	}

	.feature-card p {
		font-size: var(--text-sm);
		color: var(--text-muted);
		line-height: 1.5;
		margin: 0;
	}

	.action-card {
		background-color: var(--bg-secondary);
		border: 2px solid var(--border-light);
		border-radius: var(--radius-xl);
		padding: var(--space-2xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-md);
		transition: all var(--transition-base);
	}

	.action-card:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-lg);
		transform: translateY(-4px);
	}

	.action-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		background: linear-gradient(135deg, var(--accent-light), var(--bg-secondary));
		border-radius: var(--radius-xl);
		color: var(--accent-primary);
		margin-bottom: var(--space-sm);
	}

	.action-card h2 {
		margin: 0;
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--text-primary);
	}

	.action-card p {
		color: var(--text-secondary);
		font-size: var(--text-base);
		line-height: 1.6;
		margin: 0;
		flex-grow: 1;
	}

	.qr-cta-card {
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

	:global([data-theme='dark']) .qr-cta-card {
		background: linear-gradient(135deg, #2563eb, #3b82f6);
	}

	.qr-cta-content {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
		flex: 1;
		min-width: 280px;
	}

	.qr-cta-icon {
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

	.qr-cta-text {
		color: white;
	}

	.qr-cta-text h3 {
		margin: 0 0 var(--space-xs) 0;
		font-size: var(--text-xl);
		font-weight: 700;
		color: white;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	.qr-cta-text p {
		margin: 0;
		font-size: var(--text-sm);
		color: rgba(255, 255, 255, 0.98);
		line-height: 1.5;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	}

	.qr-cta-btn {
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

	.qr-cta-btn:hover {
		background-color: white;
		color: var(--accent-primary);
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}

	:global([data-theme='dark']) .qr-cta-btn {
		color: #1e40af;
	}

	.action-features {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		justify-content: center;
	}

	.feature-badge {
		font-size: var(--text-xs);
		padding: var(--space-xs) var(--space-sm);
		background-color: var(--accent-light);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-sm);
		color: var(--text-secondary);
		font-weight: 500;
	}

	:global([data-theme='dark']) .feature-badge {
		background-color: rgba(59, 130, 246, 0.15);
		border-color: #404040;
		color: #d4d4d4;
	}

	.action-btn {
		width: 100%;
		font-size: var(--text-base);
		font-weight: 700;
		padding: var(--space-md) var(--space-xl);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
	}

	.info {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
	}

	.info h3 {
		font-size: var(--text-xl);
		margin-bottom: var(--space-md);
	}

	.info p {
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: var(--space-lg);
	}

	.areas-list {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-sm);
		padding: 0;
	}

	.areas-list li {
		padding: var(--space-sm) var(--space-md);
		background-color: var(--bg-primary);
		border-radius: var(--radius-md);
		color: var(--text-secondary);
		font-size: var(--text-sm);
	}

	.areas-list strong {
		color: var(--text-primary);
	}

	@media (max-width: 768px) {
		.landing {
			padding: var(--space-lg) var(--space-md) var(--space-2xl);
		}

		.hero {
			padding: var(--space-md) 0 var(--space-lg);
		}

		.hero-title {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-base);
		}

		.actions {
			grid-template-columns: 1fr;
		}

		.action-card {
			padding: var(--space-xl);
		}

		.action-icon {
			width: 64px;
			height: 64px;
		}

		.qr-cta-card {
			flex-direction: column;
			text-align: center;
			padding: var(--space-xl);
		}

		.qr-cta-content {
			flex-direction: column;
			text-align: center;
		}

		.qr-cta-btn {
			width: 100%;
			justify-content: center;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: var(--space-md);
		}
	}
</style>
