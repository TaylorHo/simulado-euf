<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { BASE_URL } from '$lib/variables';
	import { ShieldCheck } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Política de Privacidade — Simulado EUF</title>
	<meta
		name="description"
		content="Saiba como o Simulado EUF trata seus dados e respeita sua privacidade. Aplicativo totalmente acessível sem registro, sem coleta de dados pessoais."
	/>
	<link rel="canonical" href={`${BASE_URL}/privacy/`} />
</svelte:head>

<main class="page">
	<div class="page-body">
		<div class="container">
			<header class="header">
				<div class="icon-wrap">
					<ShieldCheck size={40} strokeWidth={1.5} />
				</div>
				<h1>Política de Privacidade</h1>
				<p class="lead">
					Sua privacidade é importante. O Simulado EUF foi projetado para funcionar sem coletar ou
					armazenar dados pessoais.
				</p>
			</header>

			<section class="section">
				<h2>Coleta de Dados</h2>
				<p>
					O Simulado EUF <strong>não coleta, armazena ou envia</strong> informações pessoais para servidores
					externos. O aplicativo funciona de forma totalmente local no seu dispositivo.
				</p>
				<p>
					Não há sistema de registro ou login. Você pode usar todas as funcionalidades do aplicativo
					sem fornecer qualquer informação pessoal.
				</p>
			</section>

			<section class="section">
				<h2>Análise e Rastreamento</h2>
				<p>
					Utilizamos o <strong>PostHog</strong> para análise de uso e rastreamento de eventos no aplicativo.
					Esta ferramenta nos ajuda a entender como os usuários interagem com o app para melhorar a experiência.
				</p>
				<p>
					Os dados coletados pelo PostHog são anônimos e agregados, focando em métricas de uso e não
					em identificação individual.
				</p>
			</section>

			<section class="section">
				<h2>Cookies e Armazenamento Local</h2>
				<p>
					O aplicativo pode utilizar <strong>cookies</strong> e armazenamento local do dispositivo para
					salvar suas preferências, como:
				</p>
				<ul>
					<li>Tema do aplicativo (claro ou escuro)</li>
					<li>Configurações de interface</li>
					<li>Preferências de exibição</li>
				</ul>
				<p>
					Esses dados ficam armazenados apenas no seu dispositivo e não são compartilhados com
					terceiros.
				</p>
			</section>

			<section class="section">
				<h2>Publicidade</h2>
				<p>
					A <strong>versão web</strong> do Simulado EUF pode exibir anúncios. Você pode desativar os anúncios
					a qualquer momento através das opções disponíveis no rodapé da página.
				</p>
				<p>
					A <strong>versão mobile</strong> atualmente não exibe anúncios, mas isso pode mudar no futuro
					para ajudar a manter o projeto.
				</p>
				<p>
					Todos os anúncios são projetados para não interferir na sua experiência de estudo e uso do
					aplicativo.
				</p>
			</section>

			<section class="section">
				<h2>Atualizações desta Política</h2>
				<p>
					Esta política de privacidade pode ser atualizada periodicamente. Recomendamos revisar esta
					página ocasionalmente para se manter informado sobre como protegemos sua privacidade.
				</p>
				<p class="last-updated">Última atualização: 2 de junho de 2026</p>
			</section>
		</div>
	</div>

	<Footer />
</main>

<style>
	.page {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--topbar-height));
		background-color: var(--bg-primary);
	}

	.page-body {
		flex: 1 1 auto;
		padding: var(--space-2xl) 0;
		width: 100%;
	}

	.container {
		width: 100%;
		max-width: var(--max-width-content);
		margin: 0 auto;
		padding: 0 var(--space-lg);
	}

	.header {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 72px;
		height: 72px;
		border-radius: var(--radius-xl);
		background-color: var(--accent-light);
		color: var(--accent-primary);
		margin-bottom: var(--space-md);
	}

	:global([data-theme='dark']) .icon-wrap {
		background-color: rgba(59, 130, 246, 0.15);
	}

	.header h1 {
		font-size: var(--text-3xl);
		margin: 0 0 var(--space-md) 0;
		color: var(--text-primary);
	}

	.lead {
		font-size: var(--text-base);
		color: var(--text-secondary);
		line-height: 1.55;
		max-width: 560px;
		margin: 0 auto;
	}

	.section {
		margin-bottom: var(--space-xl);
		padding: var(--space-lg);
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
	}

	.section h2 {
		font-size: var(--text-xl);
		margin: 0 0 var(--space-md) 0;
		color: var(--text-primary);
	}

	.section p {
		font-size: var(--text-base);
		color: var(--text-secondary);
		line-height: 1.6;
		margin: 0 0 var(--space-md) 0;
	}

	.section p:last-child {
		margin-bottom: 0;
	}

	.section ul {
		margin: var(--space-md) 0;
		padding-left: var(--space-lg);
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.section li {
		margin-bottom: var(--space-xs);
	}

	.section strong {
		color: var(--text-primary);
		font-weight: 600;
	}

	.last-updated {
		font-size: var(--text-sm);
		color: var(--text-tertiary);
		font-style: italic;
		margin-top: var(--space-md);
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 var(--space-md);
		}

		.section {
			padding: var(--space-md);
		}

		.header h1 {
			font-size: var(--text-2xl);
		}
	}
</style>
