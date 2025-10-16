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
		<h1 class="hero-title">Simulado EUF</h1>
		<p class="hero-subtitle">Prepare-se para o Exame Unificado de Física da Pós-Graduação</p>
		<p class="hero-description">
			O EUF é a principal prova para ingresso em programas de pós-graduação em Física no Brasil.
			Este simulador oferece questões reais de exames anteriores para você treinar e avaliar seu
			conhecimento.
		</p>
		<div class="hero-badge">
			<span class="badge-text">100% Gratuito • Sem Anúncios • Open Source</span>
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
		<div class="feature-card highlight">
			<div class="feature-icon-large">
				<Printer size={48} strokeWidth={1.5} />
			</div>
			<h3>Imprima seu Simulado</h3>
			<p>
				Gere um simulado e imprima. Responda no papel e depois escaneie o QR Code para verificar as
				respostas e ver sua pontuação.
			</p>
		</div>

		<div class="feature-card highlight">
			<div class="feature-icon-large">
				<BarChart3 size={48} strokeWidth={1.5} />
			</div>
			<h3>Análise Detalhada</h3>
			<p>
				Receba um feedback sobre seu desempenho, identificando seus pontos fortes e áreas que
				precisam de mais atenção.
			</p>
		</div>

		<div class="feature-card highlight">
			<div class="feature-icon-large">
				<WifiOff size={48} strokeWidth={1.5} />
			</div>
			<h3>Sempre Disponível</h3>
			<p>
				Aplicação totalmente offline após o primeiro carregamento. Estude em qualquer lugar, sem
				depender de internet.
			</p>
		</div>
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

	<div class="info">
		<h3>Sobre o EUF</h3>
		<p>
			O Exame Unificado de Física é uma prova unificada aplicada semestralmente para ingresso em
			diversos programas de pós-graduação em Física no Brasil. A prova é composta por 40 questões de
			múltipla escolha distribuídas em 6 áreas:
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
		max-width: 900px;
		margin: 0 auto;
		padding: var(--space-2xl) var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.hero {
		text-align: center;
		padding: var(--space-2xl) 0;
	}

	.hero-title {
		font-size: var(--text-4xl);
		margin-bottom: var(--space-md);
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-subtitle {
		font-size: var(--text-xl);
		color: var(--text-secondary);
		margin-bottom: var(--space-lg);
		font-weight: 500;
	}

	.hero-description {
		font-size: var(--text-base);
		color: var(--text-muted);
		max-width: 700px;
		margin: 0 auto;
		line-height: 1.7;
		margin-bottom: var(--space-lg);
	}

	.hero-badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-sm);
		padding: var(--space-sm) var(--space-lg);
		background-color: var(--success-light);
		border: 1px solid var(--success);
		border-radius: var(--radius-lg);
		font-size: var(--text-sm);
		font-weight: 600;
		color: var(--success);
	}

	.qr-cta-card {
		background: linear-gradient(135deg, var(--accent-primary), var(--accent-hover));
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-xl);
		box-shadow: var(--shadow-lg);
		margin-bottom: var(--space-2xl);
		flex-wrap: wrap;
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
		border-radius: var(--radius-lg);
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

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--space-lg);
		margin-bottom: var(--space-2xl);
	}

	.feature-card {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		text-align: center;
	}

	.feature-card.highlight {
		background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
	}

	.feature-icon-large {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--space-md);
		color: var(--accent-primary);
	}

	.feature-card h3 {
		font-size: var(--text-lg);
		margin-bottom: var(--space-sm);
		color: var(--text-primary);
	}

	.feature-card p {
		font-size: var(--text-sm);
		color: var(--text-muted);
		line-height: 1.6;
		margin: 0;
	}

	.actions {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.action-card {
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: var(--space-md);
		transition: all var(--transition-base);
	}

	.action-card:hover {
		border-color: var(--accent-primary);
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	.action-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--space-sm);
		color: var(--accent-primary);
	}

	.action-card h2 {
		margin: 0;
		font-size: var(--text-xl);
	}

	.action-card p {
		color: var(--text-muted);
		font-size: var(--text-sm);
		line-height: 1.6;
		margin: 0;
		flex-grow: 1;
	}

	.action-features {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		justify-content: center;
		margin-top: var(--space-md);
	}

	.feature-badge {
		font-size: var(--text-xs);
		padding: var(--space-xs) var(--space-sm);
		background-color: var(--bg-primary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-sm);
		color: var(--text-secondary);
		font-weight: 500;
	}

	.action-btn {
		width: 100%;
		margin-top: var(--space-md);
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

	@media (max-width: 640px) {
		.hero-title {
			font-size: var(--text-3xl);
		}

		.hero-subtitle {
			font-size: var(--text-lg);
		}

		.qr-cta-card {
			flex-direction: column;
			text-align: center;
		}

		.qr-cta-content {
			flex-direction: column;
			text-align: center;
		}

		.qr-cta-btn {
			width: 100%;
			justify-content: center;
		}
	}
</style>
