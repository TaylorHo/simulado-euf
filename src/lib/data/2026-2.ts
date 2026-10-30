import { Area } from '#lib/models/area.ts';
import { QuestionAlternative, Version, type Question } from '#lib/models/question.ts';
import { tagsForArea, TagEM, TagFM, TagMC, TagTD, TagMQ, TagFE } from '#lib/models/subareas.ts';

const defaultData = {
	year: 2026,
	semester: 2,
	version: Version.A, // Especialmente em 2026-2 tivemos apenas versões "A", sem versões "B"
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: [],
	help: {}
};

const videos = {
	[Area.MecanicaClassica]: '',
	[Area.Eletromagnetismo]: '',
	[Area.FisicaModerna]: '',
	[Area.MecanicaQuantica]: '',
	[Area.Termodinamica]: '',
	[Area.FisicaEstatistica]: ''
};

export default <Question[]>[
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.EquacoesLagrangeHamilton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um projétil de massa $m$ é lançado verticalmente para cima a partir da superfície da Terra, em uma posição sobre a linha do equador, com velocidade inicial $v_0 \hat{z}$. Considere que a Terra gira com velocidade angular constante de módulo $\Omega$, o campo gravitacional local é $g = -g\hat{z}$, e as direções $\hat{x}$ e $\hat{y}$ apontam, respectivamente, para leste e norte. Determine, em primeira ordem em $\Omega$, as equações de movimento para as coordenadas $x$ e $y$ neste referencial. Despreze a resistência do ar e efeitos de segunda ordem em $\Omega$.`
		},
		alternatives: [
			{
				text: String.raw`$\ddot{x} = -2(v_0 - gt)\Omega; \quad \ddot{y} = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\ddot{x} = 0; \quad \ddot{y} = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\ddot{x} = (v_0 - gt)\Omega; \quad \ddot{y} = -(v_0 - gt)\Omega$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\ddot{x} = 0; \quad \ddot{y} = 2(v_0 - gt)\Omega$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\ddot{x} = 0; \quad \ddot{y} = -2(v_0 - gt)\Omega$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um cubo homogêneo de massa $m$ e lado $L$ está <strong>em repouso</strong> sobre uma superfície horizontal, plana, dura e rugosa. Uma força externa de módulo $F > 0$ é aplicada uniformemente sobre a aresta superior direita, como ilustrado na figura. A aceleração da gravidade é $-g\hat{z}$, o coeficiente de atrito estático entre o cubo e a superfície é $\mu$ e na região abaixo do cubo existe uma pressão $P(x)$, onde a coordenada $x$ varia no intervalo $-L/2 \leq x \leq L/2$.<br/><br/>Considere as seguintes afirmações:<br/><ol type='I'><li>A força de atrito total entre o bloco e a superfície é $-\mu mg\hat{x}$.</li><li>A pressão $P (x) = mg/L^2$ é constante.</li><li>Pelo equilíbrio de forças, a pressão é tal que $L\int^{L/2}_{-L/2} dx P(x) = mg$.</li><li>Pelo equilíbrio de torques, a pressão é tal que $\int^{L/2}_{-L/2} dx xP(x) = F$.</li></ol><br/>Assinale a alternativa correta.`,
			image: '2026-2/mc-2.webp'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações III e IV são corretas',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas as afirmações I e II são corretas',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações II e IV são corretas',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação II é correta',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e III são corretas',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`<b>Situação 1:</b> Um feixe contínuo de partículas não interagentes de massa $m$, viajando com velocidade constante de módulo $v$, incide perpendicularmente sobre uma placa circular plana de raio $R$ (vide a figura). Uma força externa de módulo $F$ é aplicada para manter a placa em repouso sob a ação do feixe.<br/><b>Situação 2:</b> Um cone reto de semiângulo $\alpha$ (vide a figura) é fixado à placa de modo que sua base circular se encaixe perfeitamente sobre ela, com o vértice apontado na direção oposta ao fluxo de partículas. Para manter o conjunto em repouso sob o mesmo feixe, a força externa necessária passa a ser $F'$<br/><br/>Supondo que todas as colisões entre as partículas e as superfícies são elásticas, determine a razão $F/F'$.`,
			image: '2026-2/mc-3.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{F}{F'} = \frac{1}{\sin^2{\alpha}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{F}{F'} = \sin{\alpha}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{F}{F'} = \sin^2{\alpha}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{F}{F'} = \frac{1}{\sin{\alpha}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{F}{F'} = \frac{1}{\sqrt{\sin{\alpha}}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.EquacoesLagrangeHamilton,
			TagMC.MovimentoDuasTresDimensoes
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma partícula de massa $m$ move-se sem atrito sob a ação da gravidade $g = -g\hat{z}$ sobre a superfície de um parabolóide de revolução descrito por $z(r) = \alpha r^2$, onde $r$ é a distância ao eixo $z$ e $\alpha > 0$ é uma constante (vide figura). Utilizando coordenadas cilíndricas $(r,\theta,z)$, considere as seguintes afirmações sobre o sistema:<br/><br/><ol type='I'><li>A lagrangiana do sistema em função das coordenadas generalizadas, $r$ e $\theta$, e de suas respectivas velocidades, $\dot{r}$ e $\dot{\theta}$, é dada por $L = \frac{1}{2}m (1 + 4\alpha^2r^2) \dot{r}^2 + \frac{1}{2}m r^2 \dot{\theta}^2 - mg\alpha r^2$.</li><li>Como a coordenada $\theta$ é cíclica, o momento angular conjugado $p_\theta = mr^2\dot{\theta}$ é uma constante de movimento.</li><li>O potencial efetivo associado ao movimento radial da partícula é $V_{eff} = \frac{p_{\theta}^2}{2mr^2} + mg\alpha r^2$.</li></ol><br/><br/>Assinale a alternativa correta`,
			image: '2026-2/mc-4.webp'
		},
		alternatives: [
			{
				text: 'Todas as afirmações são corretas',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I é correta',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação II é correta',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e II são corretas',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e III são corretas',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton, TagMC.DinamicaCorposRigidos),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Um disco de raio $R$ pode girar em torno de um eixo vertical que passa por seu centro. Um pequeno bloco de massa $m$ é colocado sobre o disco, junto à sua borda, a uma distância $R$ do eixo de rotação. Inicialmente, o disco e o bloco estão em repouso. A partir de certo instante, o disco passa a girar com aceleração angular constante $\alpha$, conforme ilustrado na figura. Devido ao atrito estático entre o bloco e o disco, caracterizado pelo coeficiente $\mu_e$, o bloco inicialmente permanece em repouso em relação ao disco, girando junto com ele, com a mesma aceleração angular. Quando a velocidade angular atinge um valor crítico, o atrito estático não é mais suficiente para manter esse movimento e o bloco começa a deslizar sobre o disco. Determine o deslocamento angular $\Delta \theta$ realizado pelo disco desde o início do movimento até o instante aceleração da gravidade.`,
			image: '2026-2/mc-5.webp'
		},
		alternatives: [
			{
				text: String.raw`$\Delta\theta = \frac{1}{2}\sqrt{\left(\frac{\mu_e g}{\alpha R}\right)^2 - 1}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta\theta = \frac{\mu_e g}{2\alpha R}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta\theta = \frac{1}{2}\sqrt{\left(\frac{\mu_e g}{\alpha R}\right)^2 + 1}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta\theta = \frac{1}{2}\left(\frac{\mu_e g}{\alpha R} - 1\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta\theta = \frac{1}{2}\left(\frac{\mu_e g}{\alpha R} + 1\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Em um experimento realizado em um trilho de ar, dois carrinhos, $A$ e $B$, de massas $m_A$ e $m_B$ , respectivamente, sofrem uma colisão unidimensional. Antes da colisão, o carrinho $A$ move-se ao longo do trilho, enquanto o carrinho $B$ permanece em repouso na posição $x = 90 \text{cm}$. A colisão é perfeitamente inelástica, de modo que, após o choque, os dois carrinhos passam a se mover juntos com a mesma velocidade. Por descuido, os alunos não registraram as massas dos carrinhos. No entanto, eles obtiveram o gráfico da posição $x$ de cada carrinho em função do tempo $t$, mostrado na figura. Desprezando a ação de forças externas na direção do movimento, determine a razão $\frac{m_A}{m_B}$ entre as massas`,
			image: '2026-2/mc-6.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{m_A}{m_B} = \frac{1}{2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{m_A}{m_B} = \frac{1}{5}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{m_A}{m_B} = 1$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{m_A}{m_B} = 2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{m_A}{m_B} = 5$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.GravitacaoNewtoniana),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Um toboágua de um parque aquático é representado na figura. Uma pessoa parte do repouso no ponto $A$, situado a uma altura $H$ em relação ao solo. Nas proximidades do ponto $B$, o toboágua apresenta uma curva que é aproximadamente um arco de circunferência de raio $R$. O ponto $B$ encontra-se a uma altura $h = R$ em relação ao solo, com $H > R$. Desprezando o atrito, determine o valor máximo da altura $H$ para que a pessoa passe pelo ponto $B$ sem perder contato com a superfície do toboágua, evitando acidentes. Considere $g$ como a aceleração da gravidade e assuma que a pessoa é uma partícula puntiforme.`,
			image: '2026-2/mc-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$H = \frac{3R}{2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$H = R$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$H = 2R$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$H = \frac{5R}{2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$H = 3R$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Uma partícula de massa $m$ é lançada do solo com velocidade inicial de módulo $v_0$, formando um ângulo $\theta$ com a horizontal. Ao atingir o ponto mais alto de sua trajetória, a partícula explode instantaneamente e se divide em dois fragmentos, de massas $m/3$ e $2m/3$. Imediatamente após a explosão, o fragmento de massa $m/3$ fica momentaneamente em repouso e, em seguida, cai verticalmente, atingindo o solo exatamente abaixo do ponto onde ocorreu a explosão. O fragmento de massa $2m/3$ segue uma nova trajetória parabólica até atingir o solo, como mostrado na figura. Determine a distância horizontal $D$ entre os pontos de impacto dos dois fragmentos. Expresse sua resposta em termos de $v_0$, $\theta$ e da aceleração da gravidade $g$. Despreze a resistência do ar e o impulso de forças externas durante a explosão.`,
			image: '2026-2/mc-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$D = \frac{3v_0^2\sin(2\theta)}{4g}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$D = \frac{v_0^2\sin(2\theta)}{2g}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$D = \frac{3v_0^2\sin(2\theta)}{2g}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$D = \frac{v_0^2\sin(2\theta)}{g}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$D = \frac{2v_0^2\sin(2\theta)}{3g}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos, TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Uma carga puntiforme $Q > 0$ está fixa na origem de um sistema de coordenadas. Concêntrica a essa carga, encontra-se uma casca esférica não condutora, de raio interno $a$ e raio externo $b$, cuja densidade volumétrica de carga é dada por<br/><br/>$$\rho(r) = \frac{A}{r}, \qquad a < r < b,$$<br/>onde $r$ é a distância à origem. Qual deve ser o valor da constante $A$ para que o módulo do campo elétrico $E(r)$ seja independente de $r$ em toda a região $a < r < b$?`
		},
		alternatives: [
			{
				text: String.raw`$D = \frac{Q}{2\pi a^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$D = \frac{Q}{4\pi a^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$D = \frac{Q}{4\pi b^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$D = \frac{Q}{2\pi ab}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$D = \frac{Q}{\pi (b^2-a^2)}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposMagneticosCorrentesEstacionarias),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Três fios retilíneos, infinitamente longos e paralelos entre si, são perpendiculares ao plano $xy$. Os pontos em que os fios atravessam esse plano coincidem com os vértices $A$, $B$ e $C$ de um triângulo equilátero de lado $d$. Os fios $A$ e $B$ conduzem correntes de módulo $I$, enquanto o fio $C$ conduz uma corrente de módulo $2I$. As três correntes têm o mesmo sentido. Qual é o módulo da força magnética por unidade de comprimento sobre o fio $A$, devido aos fios $B$ e $C$?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{F}{L} = \frac{\sqrt{7}}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{F}{L} = \frac{1}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{F}{L} = \frac{\sqrt{3}}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{F}{L} = \frac{3}{2}\frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{F}{L} = \frac{\mu_0 I^2}{\pi d}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.EquacoesPoissonLaplace,
			TagEM.CamposEletrostaticos
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Um capacitor esférico é constituído por duas cascas condutoras concêntricas, de raios $a$ e $b$, com $a < b$. O espaço entre as cascas é preenchido por vácuo. Determine o raio $R$, com $a < R < b$, tal que metade da energia eletrostática total armazenada no capacitor esteja localizada na região $a < r < R$.`
		},
		alternatives: [
			{
				text: String.raw`$R = \frac{2ab}{a+b}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$R = \sqrt{ab}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$R = \frac{a+b}{2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$R = \frac{\sqrt{a^2+b^2}}{2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$R = \frac{ab}{b-a}\ln \left(\frac{b}{a}\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma onda eletromagnética plana propaga-se no vácuo no sentido positivo do eixo $z$. Seu campo elétrico é dado por<br/><br/>$$E(z,t) = \frac{E_0}{5} (3\hat{x} - 4\hat{y}) \cos (kz - \omega t).$$<br/>Qual é o campo magnético $B(z,t)$ e a intensidade média $I$ da onda?`
		},
		alternatives: [
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (4\hat{x} + 3\hat{y}) \cos (kz - \omega t), \quad I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (-4\hat{x} - 3\hat{y}) \cos (kz - \omega t), \quad I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (4\hat{x} + 3\hat{y}) \cos (kz - \omega t), \quad I=c\epsilon_0E_0^2$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (3\hat{x} - 4\hat{y}) \cos (kz - \omega t), \quad I=\frac{1}{2}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$B(z,t) = \frac{E_0}{5c} (-4\hat{x} + 3\hat{y}) \cos (kz - \omega t), \quad I=\frac{1}{4}c\epsilon_0E_0^2$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Um cilindro condutor longo de raio $a$, cujo eixo é perpendicular ao plano $xy$, é colocado em um campo elétrico externo uniforme $E = E_0 \hat{x}$. Sendo $\rho$ e $\varphi$ as coordenadas cilíndricas usuais, temos que para $\rho < a$ (região no interior do cilindro) o potencial eletrostático é nulo. Já na região $\rho > a$, o potencial eletrostático é dado por $V(\rho,\varphi) = -E_0\left(\rho - \frac{a^2}{\rho} \right)\cos \varphi$. A densidade superficial de carga $\sigma$ na parede do cilindro é dada por:`
		},
		alternatives: [
			{
				text: String.raw`$\sigma = 2 \epsilon_0 E_0 \cos \varphi$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sigma = 2 \epsilon_0 E_0\sin \varphi$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\sigma = 2 \epsilon_0 E_0\cos^2 \varphi$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sigma = 0$, pois o cilindro condutor é um equipotencial`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\sigma = 2 \epsilon_0 E_0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.PropagacaoOndasEletromagneticas),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Em um certo regime de frequência $\omega$, a dispersão de ondas eletromagnéticas em metais é caracterizada pela relação de dispersão $\omega^2 = c^2k^2 + \omega_P^2$, onde $c$ é a velocidade da luz no vácuo, $k$ é o módulo do vetor de onda e $\omega_P$ é a frequência de plasma, um parâmetro característico do meio. Com base nesta relação de dispersão, podemos afirmar que:`
		},
		alternatives: [
			{
				text: String.raw`Para $\omega > \omega_P$ , a onda eletromagnética se propaga no metal com velocidade de fase maior do que $c$, mas velocidade de grupo menor do que $c$.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\omega_P$ é uma frequência de corte e só há propagação de ondas eletromagnéticas no metal para $\omega = \omega_P$ .`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\omega_P$ é uma frequência de corte e só há propagação de ondas eletromagnéticas em um metal para $\omega < \omega_P$ .`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`Para $\omega < \omega_P$, a onda eletromagnética se propaga no metal com velocidade de fase maior do que $c$, mas velocidade de grupo menor do que $c$.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`A relação entre $\omega$ e $\omega_P$ não tem qualquer consequência para a propagação de ondas eletromagnéticas em um metal.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.ForcaEletromotrizInduzida,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Considere um circuito constituído por um capacitor de capacitância $C$ e um resistor de resistência $R$. Inicialmente, o circuito está aberto e o capacitor encontra-se carregado com carga total $Q_0$. Em $t = 0$, a chave do circuito é fechada. Qual dos gráficos abaixo melhor representa a carga $Q(t)$ no capacitor, em unidades de $Q_0$, em função do tempo $t$, em unidades de $RC$?`,
			image: '2026-2/em-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$IV$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$I$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$II$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$III$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$V$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.SegundaLeiEntropia),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um corpo sólido encontra-se inicialmente à temperatura $4T_0$ e é colocado em contato térmico com um reservatório mantido à temperatura constante $T_0$ até atingir o equilíbrio térmico. Neste intervalo de temperatura, a capacidade térmica do corpo é dada por $C(T) = A + BT$, onde $A$ e $B$ são constantes positivas. A variação total de entropia do universo (sistema + reservatório térmico) $(\Delta S)$ após atingir o equilíbrio é dada por:`
		},
		alternatives: [
			{
				text: String.raw`$\Delta S = A(3-\ln 4) + \frac{9}{2}BT_0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta S = -A\ln 4 - 3BT_0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta S = 3A + \frac{15}{2}BT_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta S = A(4-\ln 3) + 3BT_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta S = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(
			TagTD.TrabalhoPrimeiraLei,
			TagTD.VariaveisEquacoesEstadoDiagramasPVT
		),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere 1 mol de um gás ideal monoatômico $(C_v = \frac{3}{2}R$ e $C_p = \frac{5}{2} R)$ que realiza um ciclo termodinâmico reversível $A \to B \to C \to A$ composto pelas seguintes etapas:</br></br><ol><li>$A \to B$: Expansão <strong>isotérmica</strong> à temperatura $T_0$, a partir do volume $V_A = V_0$ até $V_B = 3V_0$.</li><li>$B \to C$: Compressão <strong>isobárica</strong> à pressão $P_B$ até que o volume retorne ao valor inicial $V_C = V_0$.</li><li>$C \to A$: Aquecimento <strong>isocórico</strong> mantido ao volume $V_0$, retornando o gás ao estado inicial $A$ com temperatura $T_0$.</li></ol></br>Assinale a alternativa que expressa corretamente o <strong>trabalho total realizado pelo gás no ciclo</strong> $(W_c)$:`
		},
		alternatives: [
			{
				text: String.raw`$W_c = RT_0\left(\ln 3 - \frac{2}{3}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$W_c = RT_0\ln 3$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$W_c = \frac{2}{3}RT_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$W_c = RT_0\left(\ln 3 + \frac{2}{3}\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$W_c = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.TrabalhoPrimeiraLei, TagTD.FuncoesTermodinamicas),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Para 1 mol de um gás ideal de capacidade térmica a volume constante $C_v$, a energia livre de Helmholtz $F(T, V)$ é dada por:<br/><br/>$$F(T, V) = C_v T \left[1 - \ln\left(\frac{T}{T_0}\right)\right] - RT \ln\left(\frac{V}{V_0}\right) - TS_0,$$<br/>onde $T_0$, $S_0$ e $V_0$ denotam valores constantes. O gás é submetido a uma expansão isotérmica reversível à temperatura $T$, alterando seu volume de $V_1$ para $5V_1$. O trabalho $W$ realizado pelo gás ao longo do processo acima vale`
		},
		alternatives: [
			{
				text: String.raw`$W = RT\ln5$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$W = -RT\ln 5$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$W = C_v T\ln 5$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$W = -C_v T\ln 5$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$W = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.FuncoesTermodinamicas),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`De acordo com a Termodinâmica, a função entropia $S(U, V, N)$ descrevendo um sistema qualquer deve satisfazer as seguintes propriedades:<br/><br/><ol type='a'><li>Extensividade: $S(\lambda U, \lambda V, \lambda N ) = \lambda S(U, V, N)$ para $\lambda > 0$.</li><li>Temperatura positiva:  $\left(\frac{\partial S}{\partial U}\right)_{V,N} = \frac{1}{T} > 0$.</li><li>Estabilidade (concavidade): $\left(\frac{\partial^2 S}{\partial U^2}\right)_{V,N} < 0$ (garante $C_v > 0$).</li></ol><br/>Sendo $A > 0$ uma constante, assinale a alternativa termodinamicamente consistente para $U, V, N > 0$:`
		},
		alternatives: [
			{
				text: String.raw`$S(U,V,N) = A(UVN)^{1/3}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$S(U,V,N) = A\frac{U^2V}{N^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$S(U,V,N) = A\left(\frac{N^3}{UV}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$S(U,V,N) = A\left(\frac{N^3V}{U}\right)^{1/2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$S(U,V,N) = A\left(\frac{UV^2}{N}\right)^{1/3}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.PropagacaoLuzRelatividadeNewtoniana),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere a situação ilustrada na figura. Uma fonte de luz $S$ desconhecida é diretamente detectada pelo espectrômetro $D1$. Parte da luz é espalhada por um meio frio $M$ e detectada pelo espectrômetro $D2$. Finalmente, a luz de $S$ que atravessa $M$ é detectada pelo espectrômetro $D3$. Considere que os espectrômetros estão perfeitamente calibrados. Assinale a alternativa abaixo que consistentemente representa os espectros da luz (intensidade por comprimento de onda $\lambda$, em unidades arbitrárias) em $D1$, $D2$ e $D3$, respectivamente.`,
			image: '2026-2/fm-1.webp'
		},
		alternatives: [
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1a1.webp" style="height: 150px; padding: 0 20px;"/>, 
          <img src="/assets/images/2026-2/fm-1a2.webp" style="height: 150px; padding: 0 20px;"/> e 
          <img src="/assets/images/2026-2/fm-1a3.webp" style="height: 150px; padding: 0 20px;"/>`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1b1.webp" style="height: 150px; padding: 0 20px;"/>, 
          <img src="/assets/images/2026-2/fm-1b2.webp" style="height: 150px; padding: 0 20px;"/> e 
          <img src="/assets/images/2026-2/fm-1b3.webp" style="height: 150px; padding: 0 20px;"/>`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1c1.webp" style="height: 150px; padding: 0 20px;"/>, 
          <img src="/assets/images/2026-2/fm-1c2.webp" style="height: 150px; padding: 0 20px;"/> e 
          <img src="/assets/images/2026-2/fm-1c3.webp" style="height: 150px; padding: 0 20px;"/>`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1d1.webp" style="height: 150px; padding: 0 20px;"/>, 
          <img src="/assets/images/2026-2/fm-1d2.webp" style="height: 150px; padding: 0 20px;"/> e 
          <img src="/assets/images/2026-2/fm-1d3.webp" style="height: 150px; padding: 0 20px;"/>`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`
          <img src="/assets/images/2026-2/fm-1e1.webp" style="height: 150px; padding: 0 20px;"/>, 
          <img src="/assets/images/2026-2/fm-1e2.webp" style="height: 150px; padding: 0 20px;"/> e 
          <img src="/assets/images/2026-2/fm-1e3.webp" style="height: 150px; padding: 0 20px;"/>`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.ModeloRutherfordEstabilidadeAtomos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Uma molécula é formada por dois átomos idênticos de massa $m$. O potencial efetivo de interação entre os átomos é $V(r) = V_0 \left[\left(\frac{a}{r}\right)^{2\alpha} - 2 \left(\frac{a}{r}\right)^\alpha\right]$, onde $V_0$, $\alpha$ e $a$ são constantes positivas e $r$ é a distância entre os átomos. Qual é a diferença de energia entre o estado fundamental e o primeiro estado rotacional excitado dessa molécula? Assuma que $V_0$ é suficientemente grande e que o tamanho do átomo é muito menor que $a$.`
		},
		alternatives: [
			{
				text: String.raw`$\frac{2\hbar^2}{ma^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{\alpha\hbar^2}{ma^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{1}{2}V_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\hbar\sqrt{\frac{2\alpha(3\alpha+1)V_0}{ma^2}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\hbar\sqrt{\frac{\alpha(\alpha+1)V_0}{ma^2}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.RadiacaoTermicaCorpoNegroPlanck),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Considere as seguintes afirmações sobre a radiação de um corpo negro ideal em $d$ dimensões:<br/><br/><ol type='I'><li>A densidade de modos de frequência angular $\omega$ por unidade de volume é $g (\omega) = A_d \omega^{d-1}$, onde $A_d$ é uma constante que depende da dimensão $d$.</li><li>A energia média de um modo de frequência angular $\omega$ é $\braket{\varepsilon (\omega)} = \frac{\hbar\omega}{e^{\frac{\hbar\omega}{k_B T}} +1}$ , que não depende de $d$.</li><li>O potencial químico associado é $\mu = 0$ porque o número total de fótons não é conservado. Eles são absorvidos e reemitidos continuamente.</li><li>A densidade de energia total (lei de Stefan-Boltzmann) é $\int_0^\infty g(\omega)\braket{\varepsilon(\omega)}d\omega\propto T^{2d-2}$, onde $T$ é a temperatura.</li></ol><br/>Qual das alternativas abaixo é a correta?`
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e III são verdadeiras',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das afirmações é verdadeirea',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação II é falsa',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação IV é falsa',
				number: QuestionAlternative.D
			},
			{
				text: 'Todas as afirmações são verdadeiras',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.EnergiaMomentoRelativisticos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Em um determinado referencial inercial, uma partícula relativística está sujeita a se mover em uma dimensão sob o potencial $V(x) = V_0 |x/a|^{\alpha}$, onde $V_0$, $a$ e $\alpha$ são constantes reais positivas. Sendo $m$ a massa de repouso da partícula e assumindo que ela se encontra inicialmente em repouso em $x = a$, qual é o módulo da velocidade da partícula quando ela passa pela origem?`
		},
		alternatives: [
			{
				text: String.raw`$c\sqrt{1-\frac{1}{\left(1+\frac{V_0}{mc^2}\right)^2}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$c\sqrt{1-\frac{1}{\left(1+\frac{V_0}{mc^2}\right)^{\alpha}}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$c\sqrt{1-\frac{1}{\left(1+\frac{V_0}{mc^2}\right)^{\alpha+1}}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$c\sqrt{1-\frac{1}{\left[\left(1+\frac{V_0}{mc^2}\right)^\alpha\right]^2}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$c\sqrt{1-\frac{1}{\left[\left(1+\frac{V_0}{mc^2}\right)^2\right]^\alpha}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.ModeloBohr),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Um átomo de hidrogênio encontra-se em um estado estacionário no qual o momento angular orbital do elétron tem módulo $\sqrt{6}\hbar$. Um valor possível para a componente $z$ do momento angular orbital do elétron é`
		},
		alternatives: [
			{
				text: String.raw`$\hbar$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sqrt{6}\hbar$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$3\hbar$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{5}{2}\hbar$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{\sqrt{6}}{2}\hbar$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.AtomosMoleculasSolidos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Um feixe de partículas de massa $m$ e energia $E$ incide, vindo da região $x < 0$, sobre um degrau de potencial dado por $V(x) = 0$ para $x < 0$ e $V(x) = V_0 > 0$ para $x > 0$. Com relação à função de onda da partícula, considere as seguintes afirmações:<br/><br/><ol type='I'><li>Se $E < V_0$, a corrente transmitida através do degrau é nula.</li><li>Se $E < V_0$, a densidade de probabilidade de detectar a partícula é nula em todas as posições $x > 0$.</li><li>Se $E > V_0$, a probabilidade de reflexão pelo degrau é nula.</li></ol><br/>Assinale a alternativa correta.`
		},
		alternatives: [
			{
				text: 'Apenas a afirmação I está correta.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação II está correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação III está correta.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e II estão corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'As afirmações I, II e III estão corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.AtomosMoleculasSolidos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Uma partícula de massa $m$ move-se em um plano sob a ação de uma força central atrativa de módulo constante $F = k$, de modo que sua energia potencial é $V(r) = kr$, onde $r$ é a distância à origem e $$k é uma constante positiva. Aplicando as regras de quantização do modelo de Bohr a órbitas circulares, isto é, impondo que o momento angular seja $L = n\hbar$, com $n = 1, 2, 3, ...$, a velocidade da particula nas órbitas circulares permitidas é`
		},
		alternatives: [
			{
				text: String.raw`$v_n = \left(\frac{n\hbar k}{m^2} \right)^{1/3}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$v_n = \left(\frac{\hbar k}{nm^2} \right)^{1/3}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$v_n = \left(\frac{n^2\hbar k}{m^2} \right)^{1/3}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$v_n = n\left(\frac{\hbar k}{m^2} \right)^{1/3}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$v_n = \left(\frac{n\hbar k}{2m^2} \right)^{1/3}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.CausalidadeSimultaneidade),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Dois eventos ocorrem no eixo $x$ de um referencial inercial $S$: o primeiro em $x_1 = 0$ e $t_1 = 0$; o segundo em $x_2 = 500 \text{m}$ e $t_2 = 1 \mu \text{s}$. Considere $c \times 1 \mu \text{s} = 300 \text{m}$. A velocidade do referencial inercial $S'$, que se move ao longo do eixo $x$ e no qual os dois eventos são simultâneos, e a distância entre os eventos medida em $S'$ são, respectivamente,`
		},
		alternatives: [
			{
				text: '$0{,}60c$ e $400m$',
				number: QuestionAlternative.A
			},
			{
				text: '$0{,}80c$ e $500m$',
				number: QuestionAlternative.B
			},
			{
				text: '$0{,}80c$ e $625m$',
				number: QuestionAlternative.C
			},
			{
				text: '$0{,}60c$ e $500m$',
				number: QuestionAlternative.D
			},
			{
				text: '$0{,}80c$ e $300m$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.IntroducaoIdeiasFundamentais),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Dois observáveis, $A$ e $B$, são representados por operadores hermitianos $\hat{A}$ e $\hat{B}$, respectivamente. Os autoestados de $A$ são $\ket{a_1}$ e $\ket{a_2}$, com respectivos autovalores distintos $a_1$ e $a_2$. Os autoestados de $\hat{B}$ são<br/><br/>$$\ket{b_1} = \frac{\ket{a_1}+2\ket{a_2}}{\sqrt{5}} \qquad \text{e} \qquad \ket{b_2} = \frac{2\ket{a_1}-\ket{a_2}}{\sqrt{5}}$$<br/>com respectivos autovalores distintos $b_1$ e $b_2$. Uma partícula é inicialmente preparada no estado $\ket{b_1}$. Em seguida, são realizadas duas medidas projetivas, primeiro do observável $A$ e depois do observável $B$. Qual é a probabilidade de que o resultado da segunda medida seja $b_1$, independentemente do resultado obtido na primeira medida?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{17}{25}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$1$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{1}{5}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{4}{5}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.ParticulasIdenticas,
			TagMQ.PotenciaisUnidimensionais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Três férmions idênticos de massa $m$ e spin $s = 1/2$ são colocados em um poço de potencial quadrado infinito bidimensional de lado $2a$. Os níveis de energia de partícula única deste sistema, independentes da projeção de spin, são<br/><br/>$$E(n_x,n_y) = \frac{\hbar^2 \pi^2(n_x^2 + n_y^2)}{8ma^2},$$<br/>onde $\hbar$ é a constante de Planck dividida por $2\pi$ e $n_x$ e $n_y$ assumem valores inteiros positivos, $n_x,n_y = 1, 2, 3, ...$. Desprezando os efeitos de interação entre as partículas, determine a energia do estado fundamental $E_0$ do sistema e sua degenerescência $g_0$.`
		},
		alternatives: [
			{
				text: String.raw`$E_0 = \frac{9\hbar^2\pi^2}{8ma^2}$ e $g_0 = 4$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$E_0 = \frac{7\hbar^2\pi^2}{8ma^2}$ e $g_0 = 4$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$E_0 = \frac{7\hbar^2\pi^2}{8ma^2}$ e $g_0 = 2$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$E_0 = \frac{12\hbar^2\pi^2}{8ma^2}$ e $g_0 = 8$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$E_0 = \frac{6\hbar^2\pi^2}{8ma^2}$ e $g_0 = 1$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.TeoriaPerturbacaoIndependenteTempo),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Considere um sistema de três níveis descrito pelo Hamiltoniano<br/><br/>$$\hat{H} = \begin{pmatrix}E_0 & \lambda & 0 \\ \lambda & 2E_0 & \lambda \\ 0 & \lambda & 3E_0 \end{pmatrix},$$<br/>onde $E_0 > 0$ e $\lambda$ são constantes reais com dimensão de energia e $|\lambda| \ll E_0$. Determine a energia do estado fundamental desse sistema usando teoria de perturbação até a ordem mais baixa não nula em $\lambda$.`
		},
		alternatives: [
			{
				text: String.raw`$E_0 - \frac{\lambda^2}{E_0}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$E_0 + \frac{\lambda^2}{E_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$E_0 + \lambda$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$E_0 - \frac{\lambda^2}{2E_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$E_0 - \frac{2\lambda^2}{E_0}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.FormalizacaoPostuladosHeisenberg),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere uma partícula de spin $s = 1/2$ sujeita a um campo magnético uniforme na direção $x$. O Hamiltoniano desse sistema é dado por<br/><br/>$$\hat{H} = \frac{\hbar\omega}{2} \sigma_x = \frac{\hbar\omega}{2} (\ket{+}\bra{-} + \ket{-}\bra{+}).$$<br/>Na equação acima, $\ket{+}$ e $\ket{-}$ representam os autoestados do operador $S_z = \frac{\hbar}{2} \sigma_z$ (projeção do spin na direção $z$), $\hbar$ é a constante de Planck dividida por $2\pi$, $\sigma_x$ e $\sigma_z$ são as matrizes de Pauli e $\omega$ é uma constante com dimensão de frequência associada à intensidade do campo. Determine o valor esperado de $S_z$ em um instante de tempo $t$ considerando que a partícula é preparada em $t = 0$ no estado inicial $\ket{\psi_0} = \ket{-}$.`
		},
		alternatives: [
			{
				text: String.raw`$-\frac{\hbar}{2}\cos(\omega t)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{\hbar}{2}\cos(\omega t)$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{\hbar}{2}\sin(\omega t)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$-\frac{\hbar}{2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{\hbar}{2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.PotenciaisUnidimensionais,
			TagMQ.AparatoMatematicoSchrodinger
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Uma partícula de massa $m$ se move no plano $(x,y)$, sujeita apenas ao confinamento por paredes infinitas em $x = 0$ e $x = a$, enquanto a direção $y$ está sujeita à condição periódica de contorno, ou seja, a função de onda satisfaz<br/><br/>$$\psi(0,y) = \psi(a,y) = 0, \quad \psi(x,y + b) = \psi(x,y).$$<br/>Para uma solução separável da forma $\psi(x,y) = X(x)Y(y)$, qual é a energia do estado fundamental do sistema?`
		},
		alternatives: [
			{
				text: String.raw`$E_0 = \frac{\hbar^2\pi^2}{2ma^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$E_0 = \frac{2\hbar^2\pi^2}{mb^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$E_0 = \frac{\hbar^2}{2m}\left(\frac{\pi^2}{a^2} + \frac{4\pi^2}{b^2}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$E_0 = \frac{\hbar^2\pi^2}{ma^2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$E_0 = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.SchrodingerTresDimensoesMomentoAngular),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Considere uma partícula quântica de massa $m$ em três dimensões espaciais, descrita pelo hamiltoniano <br/><br/>$$\hat{H} = \frac{1}{2m}(\hat{p}_x^2 + \hat{p}_y^2 + \hat{p}_z^2) + \frac{1}{2}(k_x \hat{x}^2 + k_y \hat{y}^2 + k_z \hat{z}^2),$$<br/>com as únicas relações de comutação não nulas sendo<br/><br/>$$[\hat{x}, \hat{p}_x] = [\hat{y}, \hat{p}_y] = [\hat{z}, \hat{p}_z] = i\hbar.$$<br/>Quais os vínculos sobre as constantes $k_x$, $k_y$ e $k_z$ para que o sistema tenha como quantidades conservadas simultaneamente as componentes $z$ do operador de momento linear, $\hat{p}_z$, e do operador de momento angular, $\hat{L}_z = \hat{x}\hat{p}_y - \hat{y} \hat{p}_x$?`
		},
		alternatives: [
			{
				text: String.raw`$k_x = k_y$ e $k_z = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$k_x = k_z$ e $k_y = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$k_y = k_z$ e $k_x = 0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$k_x = k_y = k_z \neq 0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$k_y \neq 0$ e $k_x = k_z = 0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.OsciladorHarmonicoUnidimensional),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Considere dois osciladores harmônicos quânticos independentes em uma dimensão, com frequências $\omega_1$ e $\omega_2$. O espectro de energia do sistema é dado por<br/><br/>$$E_{n_1,n_2} = \hbar\omega_1\left(n_1 + \frac{1}{2} \right) +\hbar\omega_2\left(n_2 + \frac{1}{2} \right),$$<br/>em que $n_1,n_2 = 0, 1, 2, ...$. Suponha que<br/><br/>$$\omega_2 = 2 \omega_1.$$<br/>Qual é o menor valor de energia para o qual existem dois estados distintos $(n_1, n_2)$ com a mesma energia? Identifique esses estados.`
		},
		alternatives: [
			{
				text: String.raw`$E = \frac{7}{2}\hbar\omega_1$, correspondente aos estados $(n_1,n_2) = (2,0)$ e $(0,1)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$E = \frac{5}{2}\hbar\omega_1$, correspondente aos estados $(n_1,n_2) = (1,0)$ e $(0,1)$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$E = \frac{9}{2}\hbar\omega_1$, correspondente aos estados $(n_1,n_2) = (3,0)$ e $(1,1)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$E = \frac{3}{2}\hbar\omega_1$, correspondente aos estados $(n_1,n_2) = (0,0)$ e $(1,0)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`O espectro não apresenta degenerescência para $\omega_2 = 2\omega_1$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.FormalizacaoPostuladosHeisenberg),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Considere uma partícula quântica livre de massa $m$, em uma dimensão espacial, descrita pelo hamiltoniano<br/><br/>$$\hat{H} = \frac{\hat{p}^2}{2m}.$$<br/>Na representação de Heisenberg, a evolução temporal de um operador $\hat{A}$ é governada por<br/><br/>$$i\hbar\frac{d\hat{A}(t)}{dt} = [\hat{A}(t), \hat{H}] + i\hbar \frac{\partial \hat{A}(t)}{\partial t},$$<br/>e, em tempos iguais, valem as relações de comutação canônicas<br/><br/>$$[\hat{x}(t),\hat{p}(t)] = i\hbar.$$<br/>Observando que $\hat{p}(t) = \hat{p}(0)$, qual é o comutador entre o operador posição no instante $t$ e o operador posição no instante inicial, $[\hat{x}(t),\hat{x}(0)]$?`
		},
		alternatives: [
			{
				text: String.raw`$-\frac{i\hbar t}{m}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{i\hbar t}{m}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{i\hbar t}{2m}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$-\frac{i\hbar t}{2m}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleMicrocanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Dois sólidos de Einstein, $A$ e $B$, formam um sistema isolado. O sólido $A$ possui $N_A = 2$ osciladores, enquanto o sólido $B$ possui $N_B = 3$ osciladores. A energia total do sistema corresponde a $q = q_A + q_B = 3$ quanta de energia, que podem ser distribuídos entre os dois sólidos, onde $q_A$ e $q_B$ são, respectivamente, os números de quanta de energia dos sistemas $A$ e $B$. Para um sólido de Einstein com $N$ osciladores e q quanta de energia, o número de microestados é<br/><br/>$$\Omega(N,q) =\begin{pmatrix} q+N-1 \\ q \end{pmatrix}$$<br/>Admitindo que todos os microestados acessíveis do sistema composto sejam igualmente prováveis, qual é a probabilidade de que $q_A = 1$?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{12}{35}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{2}{7}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{1}{2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{9}{25}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{4}{35}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(
			TagFE.EnsembleCanonico,
			TagFE.DescricaoEstatisticaSistemaFisico
		),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere um conjunto de átomos idênticos, independentes, localizados e não interagentes em equilíbrio térmico com um reservatório à temperatura $T$ . Cada átomo pode estar em um de dois níveis de energia não degenerados,<br/><br/>$$E_0 = 0, \quad E_1 = \varepsilon, \quad \varepsilon > 0.$$<br/>Uma medida espectroscópica permite determinar as populações médias dos dois níveis e mostra que<br/><br/>$$\frac{N_1}{N_0} = \frac{1}{3},$$<br/>onde $N_0$ e $N_1$ são, respectivamente, os números médios de átomos encontrados no estado fundamental e no estado excitado. Qual é a temperatura $T$ do sistema?`
		},
		alternatives: [
			{
				text: String.raw`$T = \frac{\varepsilon}{k_B \ln{3}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$T = \frac{\varepsilon}{3k_B}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$T = \frac{\varepsilon \ln{3}}{k_B}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$T = \frac{3 \varepsilon}{k_B}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$T = \frac{\varepsilon}{k_B \ln{2}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.DescricaoEstatisticaSistemaFisico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Considere um gás de elétrons em equilíbrio térmico e químico. A ocupação média de um estado de energia $\varepsilon$ é dada pela distribuição de Fermi–Dirac,<br/><br/>$$\mathcal{f}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon-\mu)} + 1}, \quad \beta = \frac{1}{k_B T},$$<br/>onde $\mu$ é o potencial químico. A contribuição entrópica associada à possibilidade de esse estado estar ocupado ou vazio é<br/><br/>$$\mathcal{s}(\varepsilon) = -k_B [\mathcal{f} \ln{\mathcal{f}} + (1 - \mathcal{f}) \ln{(1 - \mathcal{f})}].$$<br/>Qual das afirmações abaixo a respeito das contribuições para a entropia eletrônica de um metal a temperaturas $0 < T \ll E_F/k_B$, onde $E_F \approx \mu$ é a energia de Fermi, é a correta?`
		},
		alternatives: [
			{
				text: 'A principal contribuição vem de estados em uma faixa de energia da ordem de $k_B T$ em torno do potencial químico.',
				number: QuestionAlternative.A
			},
			{
				text: 'Todos os elétrons com energias abaixo da energia de Fermi contribuem aproximadamente da mesma forma para a entropia.',
				number: QuestionAlternative.B
			},
			{
				text: 'A principal contribuição vem de estados muito acima da energia de Fermi, pois esses estados possuem maior energia.',
				number: QuestionAlternative.C
			},
			{
				text: 'A entropia eletrônica é produzida principalmente pelos estados completamente ocupados abaixo da energia de Fermi.',
				number: QuestionAlternative.D
			},
			{
				text: 'A entropia eletrônica permanece nula para qualquer temperatura enquanto o gás obedecer à estatística de Fermi–Dirac.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.DescricaoEstatisticaSistemaFisico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere dois spins de Ising, $\sigma_i = \pm 1 (i = 1,2)$, em equilíbrio térmico com um reservatório à temperatura $T$ . O hamiltoniano do sistema é<br/><br/>$$H = -J \sigma_1 \sigma_2, \quad J > 0.$$<br/>Considerando que $\beta = \frac{1}{k_B T}$, qual das alternativas abaixo fornece corretamente a entropia do sistema?`
		},
		alternatives: [
			{
				text: String.raw`$S = k_B [\ln (4 \cosh(\beta J)) - \beta J \tanh(\beta J)]$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$S = k_B \ln [4 \cosh(\beta J)]$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$S = k_B [\ln (4 \cosh(\beta J)) + \beta J \tanh(\beta J)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$S = k_B \beta J \tanh(\beta J)]$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$S = 2k_B \ln 2$`,
				number: QuestionAlternative.E
			}
		]
	}
];
