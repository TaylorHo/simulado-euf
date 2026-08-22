import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';
import { tagsForArea, TagEM, TagMC, TagFM, TagMQ, TagTD, TagFE } from '$lib/models/subareas';

const defaultData = {
	year: 2026,
	semester: 1,
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: [],
	help: {}
};

const videos = {
	[Area.MecanicaClassica]: undefined,
	[Area.Eletromagnetismo]: undefined,
	[Area.FisicaModerna]: undefined,
	[Area.MecanicaQuantica]: undefined,
	[Area.Termodinamica]: undefined,
	[Area.FisicaEstatistica]: undefined
};

export default <Question[]>[
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton, TagMC.SistemasDeParticulas),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um recipiente muito longo de massa $m_0$ move-se sobre um plano horizontal sem atrito com velocidade constante $v_0$ quando, no instante $t = 0$, adentra uma região onde, sobre ele, é despejado verticalmente um líquido a uma taxa constante $\gamma > 0$ (massa por unidade de tempo), como ilustra a figura. Considere que o choque do líquido com o recipiente é perfeitamente inelástico. Sendo $x$ a posição do recipiente e $\dot{x}$ sua velocidade, indique a alternativa que contém a equação correta do movimento.`,
			image: '2026-1/mc-1a.webp'
		},
		alternatives: [
			{
				text: String.raw`$(m_0 + \gamma t)\ddot{x} + \gamma\dot{x} = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$(m_0 - \gamma t)\ddot{x} - \gamma v_0 = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$m_0\dot{v} = -\gamma \dot{x}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$m_0\ddot{x} = \gamma v_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\gamma t \dot{x} = -m_0 v_0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.LeisDeNewton, TagMC.SistemasDeParticulas),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um recipiente de massa $m_0$ move-se sobre um plano horizontal sem atrito com velocidade constante $v_0$ quando, no instante $t = 0$, o líquido nele contido começa a vazar, perdendo massa a uma taxa constante $-\gamma < 0$ (massa por unidade de tempo), como ilustra a figura. Considere que o líquido sai do recipiente com velocidade puramente vertical no referencial do recipiente. Sendo $x$ a posição do recipiente e $\dot{x}$ sua velocidade, indique a alternativa que contém a equação correta do movimento.`,
			image: '2026-1/mc-1b.webp'
		},
		alternatives: [
			{
				text: String.raw`$(m_0 - \gamma t)\ddot{x} - \gamma\dot{x} = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$(m_0 + \gamma t)\ddot{x} + \gamma v_0 = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$m_0\dot{v} = -\gamma v$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$m_0\ddot{x} = \gamma v_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\gamma t \dot{x} = m_0 v_0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.OscilacoesAcopladas, TagMC.OscilacoesLineares),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um vagão de massa $M$ pode mover-se sem atrito ao longo de trilhos horizontais retilíneos. Dentro dele há um bloco de massa $m$ conectado às paredes por molas idênticas de constante $k$ e de massa desprezível (veja a figura). Considerando oscilações de pequenas amplitudes e desprezando o atrito entre o vagão e o bloco, a frequência angular $\omega$ de oscilação do sistema é`,
			image: '2026-1/mc-2a.webp'
		},
		alternatives: [
			{
				text: String.raw`$\omega = \sqrt{\left(1 + \frac{m}{M}\right)\frac{2k}{m}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{M}\right)\sqrt{\frac{2k}{m}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{2M}\right)\sqrt{\frac{2k}{m}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\omega = \sqrt{\left(1 + \frac{m}{2M}\right)\frac{2k}{m}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{M}\right)^2 \sqrt{\frac{2k}{m}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.OscilacoesAcopladas, TagMC.OscilacoesLineares),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um vagão de massa $M$ pode mover-se sem atrito ao longo de trilhos horizontais retilíneos. Dentro dele há um bloco de massa $m$ conectado a uma das paredes por uma mola de constante $k$ e de massa desprezível (veja a figura). Considerando oscilações de pequenas amplitudes e desprezando o atrito entre o vagão e o bloco, a frequência angular $\omega$ de oscilação do sistema é`,
			image: '2026-1/mc-2b.webp'
		},
		alternatives: [
			{
				text: String.raw`$\omega = \sqrt{\left(1 + \frac{m}{M}\right)\frac{k}{m}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{M}\right)\sqrt{\frac{k}{m}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{2M}\right)\sqrt{\frac{k}{m}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\omega = \sqrt{\left(1 + \frac{m}{2M}\right)\frac{k}{m}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\omega = \left(1 + \frac{m}{M}\right)^2 \sqrt{\frac{k}{m}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.EquacoesLagrangeHamilton,
			TagMC.DinamicaCorposRigidos
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Uma haste muito fina e homogênea de massa $m$ e comprimento $L$ está inicialmente na posição vertical sobre uma superfície horizontal. A haste é perturbada e começa a cair, descrevendo um movimento no plano $xy$, com o eixo $y$ orientado verticalmente para cima. Sendo $g$ a aceleração da gravidade, $\mu$ o coeficiente de atrito cinético entre a haste e a superfície e $\theta$ o ângulo que a haste faz com a superfície, e desprezando a resistência do ar, considere as afirmações a seguir.<br/><br/><ul><li>I. Genericamente quando confinada ao plano $xy$, a haste possui 3 graus de liberdade: $x_{\text{cm}}$, $y_{\text{cm}}$ e $\theta$, onde $(x_{\text{cm}}, y_{\text{cm}})$ é a posição do centro de massa da haste.</li><li>II. Se haste não deslizar e mantiver o contato com a superfície, o sistema tem apenas 1 grau de liberdade independente e a lagrangiana correspondente é $\mathcal{L} = \frac{1}{6}mL^2\dot{\theta}^2 - \frac{1}{2}mgL\sin\theta$.</li><li>III. Se a haste deslizar mantendo o contato com a superfície, o sistema tem apenas 2 graus de liberdade independentes e a lagrangiana correspondente é $\mathcal{L} = \frac{1}{6}mL^2\dot{\theta}^2 - mg\left(\frac{1}{2}L\sin\theta + \mu x_{\text{cm}}\right)$.</li></ul><br/>Selecione a alternativa verdadeira.`
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e II são corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações II e III são corretas.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e III são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'Todas as afirmações são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.EquacoesLagrangeHamilton,
			TagMC.DinamicaCorposRigidos
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Uma haste muito fina e homogênea de massa $m$ e comprimento $L$ está inicialmente na posição vertical sobre uma superfície horizontal. A haste é perturbada e começa a cair, descrevendo um movimento no plano $xy$, sendo o eixo $y$ orientado verticalmente para cima. Sendo $g$ a aceleração da gravidade, $\mu$ o coeficiente de atrito cinético entre a haste e a superfície e $\theta$ o ângulo que a haste faz com a superfície, e desprezando a resistência do ar, considere as afirmações a seguir.<br/><br/><ul><li>I. Genericamente quando confinada ao plano $xy$, a haste possui 3 graus de liberdade: $x_A$, $y_A$ e $\theta$, onde $(x_A, y_A)$ é a posição de uma das extremidades da haste.</li><li>II. Se a haste deslizar mantendo o contato com a superfície, o sistema tem apenas 2 graus de liberdade independentes e a lagrangiana correspondente é $\mathcal{L} = \frac{1}{6}mL^2\dot{\theta}^2 - mg\left(\frac{1}{2}L\sin\theta + \mu x_A\right)$.</li><li>III. Se a haste não deslizar e mantiver o contato com a superfície, o sistema tem apenas 1 grau de liberdade independente e a lagrangiana correspondente é $\mathcal{L} = \frac{1}{6}mL^2\dot{\theta}^2 - \frac{1}{2}mgL\sin\theta$.</li></ul><br/>Selecione a alternativa verdadeira.`
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e III são corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações II e III são corretas.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e II são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'Todas as afirmações são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.OscilacoesLineares),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`A figura ilustra uma barra muito fina de comprimento $L$ e perfeitamente rígida que pode girar livremente no plano $xy$, em torno de um eixo que passa pelo ponto $O$. As extremidades da barra estão em contato com molas idênticas de constante $k$, como ilustra a figura. Uma força (de módulo muito pequeno) $F\hat{y}$ atua sobre a barra, como ilustrado. A magnitude da força externa sobre a extremidade $A$ da barra é:`,
			image: '2026-1/mc-4.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{2}{5}F$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{1}{5}F$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{1}{4}F$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{3}{8}F$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{4}{5}F$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.OscilacoesLineares),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`A figura ilustra uma barra muito fina de comprimento $L$ e perfeitamente rígida que pode girar livremente no plano $xy$, em torno de um eixo que passa pelo ponto $O$. As extremidades da barra estão em contato com molas idênticas de constante $k$, como ilustra a figura. Uma força (de módulo muito pequeno) $F\hat{y}$ atua sobre a barra, como ilustrado. A magnitude da força externa sobre a extremidade $B$ da barra é`,
			image: '2026-1/mc-4.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{1}{5}F$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{2}{5}F$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{1}{4}F$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{3}{8}F$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{4}{5}F$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.ForcasCentrais),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Considere uma partícula de massa $m$ movendo-se sob ação de um potencial central<br/><br/>$$V(r) = -\frac{V_0}{r} + \frac{V_1}{r^2},$$<br/>onde $V_0$ e $V_1$ são constantes positivas e $r = |\mathbf{r}|$. Suponha que o movimento da partícula seja tal que seu momento angular tenha módulo $L$. Nessas condições, determine o raio $r_0$ de uma órbita circular da partícula.`
		},
		alternatives: [
			{
				text: String.raw`$r_0 = \frac{1}{V_0}\left(\frac{L^2}{m} + 2V_1\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$r_0 = \frac{2V_1}{V_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$r_0 = \frac{1}{V_0}\left(\frac{2L^2}{m} + V_1\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$r_0 = \frac{1}{V_0}\frac{L^2}{m}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$r_0 = \frac{1}{V_0}\left(\frac{L^2}{m} + V_1\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.ForcasCentrais),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Considere uma partícula de massa $m$ movendo-se sob ação de um potencial central<br/><br/>$$V(r) = \frac{1}{2}kr^2 + \frac{1}{2}\gamma r^{-2},$$<br/>onde $k$ e $\gamma$ são constantes positivas e $r = |\mathbf{r}|$. Suponha que o movimento da partícula seja tal que seu momento angular tenha módulo $L$. Nessas condições, determine o raio $r_0$ de uma órbita circular da partícula.`
		},
		alternatives: [
			{
				text: String.raw`$r_0 = \left[\frac{1}{k} \left(\frac{L^2}{m} + \gamma\right)\right]^{1/4}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$r_0 = \left[\frac{1}{k} \left(\frac{L^2}{m} + \gamma\right)\right]^{1/2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$r_0 = \left(\frac{\gamma}{k}\right)^{1/4}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$r_0 = \left(\frac{\gamma}{k}\right)^{1/2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$r_0 = \left(\frac{L^2}{mk}\right)^{1/4}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Uma barra delgada e homogênea, de comprimento $L$ e massa $m$, está presa por uma de suas extremidades a um eixo fixo no teto, podendo girar livremente em torno desse eixo. Na outra extremidade da barra, está presa uma partícula de massa $M = m$, conforme ilustrado na figura. O sistema "barra + partícula" é solto a partir do repouso, com a barra formando um ângulo de $90^{\circ}$ com a vertical. Determine a velocidade angular $\omega$ do conjunto no instante em que a barra passa pela posição vertical ($0^{\circ}$ com a vertical). Adote $g$ como a aceleração da gravidade e despreze as perdas de energia por atrito. Considere $I_b = \frac{mL^2}{3}$ como o momento de inércia da barra em torno de um eixo que passa por uma de suas extremidades.`,
			image: '2026-1/mc-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$\omega = \frac{3}{2}\sqrt{\frac{g}{L}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\omega = \frac{1}{2}\sqrt{\frac{g}{L}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\omega = \frac{2}{3}\sqrt{\frac{g}{L}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\omega = \frac{5}{2}\sqrt{\frac{g}{L}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\omega = \sqrt{\frac{g}{L}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(TagMC.DinamicaCorposRigidos, TagMC.LeisDeNewton),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Uma barra delgada e homogênea, de comprimento $L$ e massa $m$, está presa por uma de suas extremidades a um eixo fixo no teto, podendo girar livremente em torno desse eixo. Na outra extremidade da barra, está presa uma partícula de massa $M = m$, conforme ilustrado na figura. O sistema "barra + partícula" é solto a partir do repouso, com a barra formando um ângulo de $90^{\circ}$ com a vertical. Determine a velocidade linear $v$ da partícula no instante em que a barra passa pela posição vertical ($0^{\circ}$ com a vertical). Adote $g$ como a aceleração da gravidade e despreze as perdas de energia por atrito. Considere $I_b = \frac{mL^2}{3}$ como o momento de inércia da barra em torno de um eixo que passa por uma de suas extremidades.`,
			image: '2026-1/mc-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$v = \frac{3}{2}\sqrt{gL}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$v = \frac{1}{2}\sqrt{gL}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$v = \frac{2}{3}\sqrt{gL}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$v = \frac{5}{2}\sqrt{gL}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$v = \sqrt{gL}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.SistemasDeParticulas,
			TagMC.MovimentoDuasTresDimensoes
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 8,
		statement: {
			text: 'Um projétil de massa $m$, movendo-se na horizontal com velocidade de módulo $v_0$, colide com uma partícula de massa $M$ inicialmente em repouso, presa à extremidade de um fio ideal (inextensível e de massa desprezível) de comprimento $L$. A outra extremidade do fio está fixada a um suporte, como ilustrado na figura. Após a colisão, o projétil fica preso à partícula e ambos passam a se mover juntos. Determine a menor velocidade $v_0$ do projétil para que o conjunto "partícula + projétil" consiga efetuar uma volta completa após a colisão. Considere $g$ como a aceleração da gravidade.',
			image: '2026-1/mc-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$v_0 = \left(\frac{m + M}{m}\right)\sqrt{5Lg}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$v_0 = \left(\frac{m + M}{m}\right)\sqrt{4Lg}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$v_0 = \left(\frac{m + M}{m}\right)\sqrt{3Lg}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$v_0 = \left(\frac{m + M}{m}\right)\sqrt{2Lg}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$v_0 = \left(\frac{m + M}{m}\right)\sqrt{Lg}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		tags: tagsForArea<Area.MecanicaClassica>(
			TagMC.SistemasDeParticulas,
			TagMC.MovimentoDuasTresDimensoes
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaClassica]
		},
		questionNumber: 8,
		statement: {
			text: 'Um projétil de massa $m$, movendo-se na horizontal com velocidade de módulo $v_0$, colide com uma partícula de massa $M$ inicialmente em repouso, presa à extremidade de um fio ideal (inextensível e de massa desprezível) de comprimento $L$. A outra extremidade do fio está fixada a um suporte, como ilustrado na figura. Após a colisão, o projétil fica preso à partícula e ambos passam a se mover juntos. Determine a maior razão $M/m$ que ainda permite que o conjunto "partícula + projétil" consiga efetuar uma volta completa após a colisão, dado a velocidade $v_0$ do projétil. Considere $g$ como a aceleração da gravidade.',
			image: '2026-1/mc-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$\frac{M}{m} = \frac{v_0}{\sqrt{5Lg}} - 1$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{M}{m} = \frac{v_0}{\sqrt{4Lg}} - 1$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{M}{m} = \frac{v_0}{\sqrt{4Lg}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{M}{m} = \frac{v_0}{\sqrt{5Lg}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{M}{m} = \frac{v_0}{\sqrt{Lg}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere um anel fino de raio $R$, uniformemente carregado com carga total $Q > 0$, fixo no plano $xy$ e centrado na origem do sistema de coordenadas. Uma partícula de massa $m$ e carga $q_0 > 0$ é colocada sobre o eixo $z$, ao longo do eixo de simetria do sistema, a uma altura $z$ acima do centro do anel. Além da força elétrica exercida pelo anel sobre a partícula, atua também a força peso, associada à aceleração da gravidade $\mathbf{g}$, dirigida no sentido negativo do eixo $z$. Sabendo que a partícula está posicionada a uma altura igual ao raio do anel, isto é, $z = R$, qual é o valor da massa $m$ para que a partícula permaneça em equilíbrio nessa posição?`
		},
		alternatives: [
			{
				text: String.raw`$m = \frac{q_0Q}{8\sqrt{2}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$m = \frac{q_0Q}{4\sqrt{2}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$m = \frac{q_0Q}{8\sqrt{3}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$m = \frac{q_0Q}{4\sqrt{3}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$m = \frac{q_0Q}{4\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere um anel fino de raio $R$, uniformemente carregado com carga total $Q > 0$, fixo no plano $xy$ e centrado na origem do sistema de coordenadas. Uma partícula de massa $m$ e carga $q_0 > 0$ é colocada sobre o eixo $z$, ao longo do eixo de simetria do sistema, a uma altura $z$ acima do centro do anel. Além da força elétrica exercida pelo anel sobre a partícula, atua também a força peso, associada à aceleração da gravidade $\mathbf{g}$, dirigida no sentido negativo do eixo $z$. Sabendo que a partícula está posicionada a uma altura igual à metade do raio do anel, isto é, $z = R/2$, qual é o valor da massa $m$ para que a partícula permaneça em equilíbrio nessa posição?`
		},
		alternatives: [
			{
				text: String.raw`$m = \frac{q_0Q}{5\sqrt{5}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$m = \frac{q_0Q}{4\sqrt{3}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$m = \frac{q_0Q}{10\sqrt{3}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$m = \frac{q_0Q}{8\sqrt{5}\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$m = \frac{q_0Q}{8\pi\epsilon_0 gR^2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.CamposEletrostaticos,
			TagEM.EquacoesPoissonLaplace
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Duas cascas cilíndricas longas e concêntricas possuem raios $a$ e $b$, sendo $b > a$. A casca interna possui uma densidade linear de carga igual a $\lambda$, enquanto a casca externa possui uma densidade linear de carga igual a $-\lambda$. Determine a diferença de potencial elétrico entre as cascas, definida por $\Delta V = V(b) - V(a)$, no caso em que $b = 2a$.`
		},
		alternatives: [
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\pi\epsilon_0} \ln 2$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\epsilon_0} \ln 2$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\pi\epsilon_0}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\epsilon_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{4\pi\epsilon_0}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.CamposEletrostaticos,
			TagEM.EquacoesPoissonLaplace
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Duas cascas cilíndricas longas e concêntricas possuem raios $a$ e $b$, sendo $b > a$. A casca interna possui uma densidade linear de carga igual a $\lambda$, enquanto a casca externa possui uma densidade linear de carga igual a $-\lambda$. Determine a diferença de potencial elétrico entre as cascas, definida por $\Delta V = V(b) - V(a)$, no caso em que $b = 3a$.`
		},
		alternatives: [
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\pi\epsilon_0} \ln 3$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\epsilon_0} \ln 3$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\pi\epsilon_0}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{2\epsilon_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Delta V = -\frac{\lambda}{6\pi\epsilon_0}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos, TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Uma carga puntiforme $Q$ está fixa na origem de um sistema de coordenadas. Considere uma superfície esférica de raio $R$, também centrada na origem. Qual é o fluxo de campo elétrico, $\Phi_E$, que atravessa a porção da superfície esférica que corresponde, em coordenadas esféricas $(r, \theta, \varphi)$, à região angular definida por $\alpha \leq \theta \leq \beta$ e $0 \leq \varphi \leq 2\pi$, onde $\alpha = 0$ e $\beta = \pi/4$?`
		},
		alternatives: [
			{
				text: String.raw`$\Phi_E = \frac{Q}{2\epsilon_0}\left(1 - \frac{\sqrt{2}}{2}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{2\epsilon_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\epsilon_0}\left(1 - \sqrt{2}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\pi\epsilon_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\pi\epsilon_0}\left(1 - \frac{\sqrt{3}}{2}\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos, TagEM.EquacoesMaxwell),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Uma carga puntiforme $Q$ está fixa na origem de um sistema de coordenadas. Considere uma superfície esférica de raio $R$, também centrada na origem. Qual é o fluxo de campo elétrico, $\Phi_E$, que atravessa a porção da superfície esférica que corresponde, em coordenadas esféricas $(r, \theta, \varphi)$, à região angular definida por $\alpha \leq \theta \leq \beta$ e $0 \leq \varphi \leq 2\pi$, onde $\alpha = 0$ e $\beta = \pi/6$?`
		},
		alternatives: [
			{
				text: String.raw`$\Phi_E = \frac{Q}{2\epsilon_0}\left(1 - \frac{\sqrt{3}}{2}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{2\epsilon_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\epsilon_0}\left(1 - \sqrt{2}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\pi\epsilon_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\Phi_E = \frac{Q}{4\pi\epsilon_0}\left(1 - \frac{\sqrt{2}}{2}\right)$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.PropagacaoOndasEletromagneticas,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`O campo elétrico de uma onda eletromagnética plana, no vácuo, propagando-se na direção $+z$, é dado por<br/><br/>$$\mathbf{E}(z,t) = E_0\cos(\omega t - \beta z)\hat{x}.$$<br/>Qual é o valor de $\braket{S}$, a média temporal do módulo do vetor de Poynting?`
		},
		alternatives: [
			{
				text: String.raw`$\braket{S} = \frac{1}{2}\frac{E_0^2}{c\mu_0}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{2\pi}\frac{E_0^2}{c\mu_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{4}\frac{E_0^2}{c\mu_0}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{4\pi}\frac{E_0^2}{c\mu_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\braket{S} = \frac{E_0^2}{c\mu_0}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.PropagacaoOndasEletromagneticas,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`O campo magnético de uma onda eletromagnética plana, no vácuo, propagando-se na direção $+z$, é dado por<br/><br/>$$\mathbf{B}(z,t) = B_0\cos(\omega t - \beta z)\hat{x}.$$<br/>Qual é o valor de $\braket{S}$, a média temporal do módulo do vetor de Poynting?`
		},
		alternatives: [
			{
				text: String.raw`$\braket{S} = \frac{1}{2}\frac{cB_0^2}{\mu_0}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{2\pi}\frac{cB_0^2}{\mu_0}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{4}\frac{cB_0^2}{\mu_0}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\braket{S} = \frac{1}{4\pi}\frac{cB_0^2}{\mu_0}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\braket{S} = \frac{cB_0^2}{\mu_0}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.MateriaisMagneticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Considere um cilindro que carrega uma magnetização permanente paralela à direção de seu eixo de simetria. Denotando a direção deste eixo por $\hat{z}$, podemos escrever $\mathbf{M} = M_0\hat{z}$. As densidades de correntes ligadas na superfície ($\mathbf{K}_M$) e no volume ($\mathbf{J}_M$) associadas a essa magnetização são dadas por:`
		},
		alternatives: [
			{
				text: String.raw`$\mathbf{K}_M = M_0\hat{\varphi}$ na superfície lateral do cilindro e $\mathbf{J}_M = 0$ em todo o volume do cilindro.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\mathbf{K}_M = -M_0\hat{\varphi}$ nas tampas inferior e superior do cilindro, e $\mathbf{J}_M = 0$ em todo o volume do cilindro.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\mathbf{K}_M = 0$ em toda a superfície do cilindro e $\mathbf{J}_M = M_0\hat{z}$ em todo volume do cilindro.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\mathbf{K}_M = 0$ em toda a superfície do cilindro e $\mathbf{J}_M = M_0\hat{\varphi}$ em todo o volume do cilindro.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\mathbf{K}_M = 0$ em toda a superfície do cilindro e $\mathbf{J}_M = 0$ em todo o volume do cilindro.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.MateriaisMagneticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Considere um cilindro que carrega uma magnetização permanente paralela à direção radial a partir de seu eixo de simetria. Em um sistema cilíndrico de coordenadas, podemos escrever $\mathbf{M} = M_0\hat{\rho}$ para todos os pontos no interior do cilindro a uma distância $\rho \neq 0$ do eixo. As densidades de correntes ligadas na superfície ($\mathbf{K}_M$) associadas a essa magnetização são dadas por:`
		},
		alternatives: [
			{
				text: String.raw`$\mathbf{K}_M = \mp M_0\hat{\varphi}$ nas tampas superior e inferior do cilindro, respectivamente, e $\mathbf{K}_M = 0$ na superfície lateral do cilindro.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\mathbf{K}_M = M_0\hat{\varphi}$ na superfície lateral do cilindro e $\mathbf{K}_M = 0$ em suas tampas inferior e superior.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\mathbf{K}_M = \pm M_0\hat{\rho}$ nas tampas superior e inferior do cilindro, respectivamente, e $\mathbf{K}_M = 0$ na superfície lateral do cilindro.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\mathbf{K}_M = \pm M_0\hat{z}$ nas tampas superior e inferior do cilindro, respectivamente, e $\mathbf{K}_M = 0$ na superfície lateral do cilindro.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\mathbf{K}_M = 0$ em toda superfície do cilindro.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.ForcaEletromotrizInduzida,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Considere um circuito constituído por um capacitor de capacitância $C$ e um indutor de indutância $L$. O capacitor encontra-se inicialmente carregado com carga total $Q_0$ e o circuito está aberto. Na figura abaixo, estão representados possíveis gráficos para a carga $Q(t)$ no capacitor (em unidades de $Q_0$), em função do tempo $t$ (em unidades de $2\pi\sqrt{LC}$). Em $t = 0$, a chave do circuito é fechada. O gráfico que melhor representa $Q(t)$ é dado por:`,
			image: '2026-1/em-6a.webp'
		},
		alternatives: [
			{
				text: 'I.',
				number: QuestionAlternative.A
			},
			{
				text: 'II.',
				number: QuestionAlternative.B
			},
			{
				text: 'III.',
				number: QuestionAlternative.C
			},
			{
				text: 'IV.',
				number: QuestionAlternative.D
			},
			{
				text: 'V.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.ForcaEletromotrizInduzida,
			TagEM.EquacoesMaxwell
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Considere um circuito constituído por um capacitor de capacitância $C$ e um indutor de indutância $L$. O capacitor encontra-se inicialmente carregado com carga total $Q_0$ e o circuito está aberto. Na figura abaixo, estão representados possíveis gráficos para a corrente $I(t)$ no circuito (em unidades de $Q_0/\sqrt{LC}$), em função do tempo $t$ (em unidades de $2\pi\sqrt{LC}$). O gráfico que melhor representa $I(t)$ é dado por:`,
			image: '2026-1/em-6b.webp'
		},
		alternatives: [
			{
				text: 'II.',
				number: QuestionAlternative.A
			},
			{
				text: 'I.',
				number: QuestionAlternative.B
			},
			{
				text: 'III.',
				number: QuestionAlternative.C
			},
			{
				text: 'IV.',
				number: QuestionAlternative.D
			},
			{
				text: 'V.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`A figura representa um corte transversal, perpendicular ao eixo comum de dois cilindros condutores coaxiais de mesmo comprimento. Os raios internos e externos de cada um dos cilindros estão indicados na figura. Os cilindros estão em equilíbrio eletrostático. Sobre a superfície condutora de raio $\rho = b$, existe uma densidade superficial de carga $\sigma_0$. A densidade superficial de carga na superfície $\rho = c$ é:`,
			image: '2026-1/em-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$-\sigma_0\frac{b}{c}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sigma_0\frac{b}{c}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$-\sigma_0\frac{c}{b}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sigma_0\frac{c}{b}$`,
				number: QuestionAlternative.D
			},
			{
				text: '$0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(TagEM.CamposEletrostaticos),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`A figura representa um corte transversal, perpendicular ao eixo comum de dois cilindros condutores coaxiais de mesmo comprimento. Os raios internos e externos de cada um dos cilindros estão indicados na figura. Os cilindros estão em equilíbrio eletrostático. Sobre a superfície condutora de raio $\rho = c$, existe uma densidade superficial de carga $\sigma_0$. A densidade superficial de carga na superfície $\rho = d$ é:`,
			image: '2026-1/em-7.webp'
		},
		alternatives: [
			{
				text: String.raw`$-\sigma_0\frac{c}{d}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sigma_0\frac{c}{d}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$-\sigma_0\frac{d}{c}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sigma_0\frac{d}{c}$`,
				number: QuestionAlternative.D
			},
			{
				text: '$0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.PropagacaoOndasEletromagneticas,
			TagEM.ReflexaoRefracao
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Um feixe de luz não polarizada, correspondente a uma onda plana de intensidade $I_0$, viaja ao longo da direção $\hat{z}$ e incide sobre um conjunto de dois polarizadores lineares. O eixo de transmissão do primeiro polarizador está ao longo do eixo $x$ enquanto que o eixo de transmissão do segundo polarizador faz um ângulo $\theta$ com o eixo $x$. A intensidade final do feixe é $3I_0/8$. O ângulo $\theta$ é:`,
			image: '2026-1/em-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$30^{\circ}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$90^{\circ}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$45^{\circ}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$60^{\circ}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$15^{\circ}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		tags: tagsForArea<Area.Eletromagnetismo>(
			TagEM.PropagacaoOndasEletromagneticas,
			TagEM.ReflexaoRefracao
		),
		help: {
			youtubeVideoId: videos[Area.Eletromagnetismo]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Um feixe de luz não polarizada, correspondente a uma onda plana de intensidade $I_0$, viaja ao longo da direção $\hat{z}$ e incide sobre um conjunto de dois polarizadores lineares. O eixo de transmissão do primeiro polarizador está ao longo do eixo $x$ enquanto que o eixo de transmissão do segundo polarizador faz um ângulo $\theta$ com o eixo $x$. A intensidade final do feixe é $I_0/8$. O ângulo $\theta$ é:`,
			image: '2026-1/em-8.webp'
		},
		alternatives: [
			{
				text: String.raw`$60^{\circ}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$90^{\circ}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$45^{\circ}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$30^{\circ}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$15^{\circ}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(
			TagTD.FuncoesTermodinamicas,
			TagTD.VariaveisEquacoesEstadoDiagramasPVT
		),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um certo sistema termodinâmico é descrito pelas equações de estado<br/><br/>$$T = \frac{1}{A} \left(\frac{U^2}{VN}\right)^{1/3} \quad \text{e} \quad p = AT \left(\frac{UN}{V^2}\right)^{1/3},$$<br/>onde $T$, $p$, $U$, $V$ e $N$ denotam, respectivamente, a temperatura, a pressão, a energia interna, o volume e o número de moles, respectivamente, e $A$ é uma constante positiva. A função entropia $S(U,V,N)$ desse sistema é dada por`
		},
		alternatives: [
			{
				text: '$S(U,V,N) = 3A(UVN)^{1/3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$S(U,V,N) = 3A{U^2 N/V}^{1/2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$S(U,V,N) = 2A(UV)^{1/2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$S(U,V,N) = 3A(U N/V)$',
				number: QuestionAlternative.D
			},
			{
				text: '$S(U,V,N) = 3A(U^2 VN)^{1/4}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(
			TagTD.FuncoesTermodinamicas,
			TagTD.VariaveisEquacoesEstadoDiagramasPVT
		),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Um certo sistema termodinâmico é descrito pelas equações de estado<br/><br/>$$T = \frac{1}{A}\left(\frac{U}{V}\right)^{1/4} \quad \text{e} \quad p = \frac{AT}{3}\left(\frac{U}{V}\right)^{3/4},$$<br/>onde $T$, $p$, $U$, $V$ e $N$ denotam, respectivamente, a temperatura, a pressão, a energia interna, o volume e o número de moles, respectivamente, e $A$ é uma constante positiva. A função entropia $S(U,V,N)$ desse sistema é dada por`
		},
		alternatives: [
			{
				text: '$S(U,V,N) = (4/3)A(U^3 V)^{1/4}$',
				number: QuestionAlternative.A
			},
			{
				text: '$S(U,V,N) = 4A(U^2 N/V)^{1/2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$S(U,V,N) = A(U^2V)^{1/3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$S(U,V,N) = A(UN/V)$',
				number: QuestionAlternative.D
			},
			{
				text: '$S(U,V,N) = (2/3)A(U^3 VN)^{1/5}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(
			TagTD.EnergiaInternaEntalpiaCicloCarnot,
			TagTD.TrabalhoPrimeiraLei
		),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico (calor específico molar $c_v = 3R/2$) realizando um processo cíclico A-B-C-D-A, conforme ilustra a figura. As etapas A-B e C-D são isocóricas, enquanto as etapas B-C e D-A são isobáricas. O sentido do ciclo que permite ao sistema operar como máquina térmica e a quantidade de calor recebida da fonte quente ao longo de um ciclo são, respectivamente:',
			image: '2026-1/te-3a.webp'
		},
		alternatives: [
			{
				text: 'horário e $18 P_0V_0$',
				number: QuestionAlternative.A
			},
			{
				text: 'anti-horário e $18 P_0V_0$',
				number: QuestionAlternative.B
			},
			{
				text: 'horário e $6 P_0V_0$',
				number: QuestionAlternative.C
			},
			{
				text: 'anti-horário e $6 P_0V_0$',
				number: QuestionAlternative.D
			},
			{
				text: 'horário e $12 P_0V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(
			TagTD.EnergiaInternaEntalpiaCicloCarnot,
			TagTD.TrabalhoPrimeiraLei
		),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico (calor específico molar $c_v = 3R/2$) realizando um processo cíclico A-B-C-D-A, conforme ilustra a figura. As etapas A-B e C-D são isocóricas, enquanto as etapas B-C e D-A são isobáricas. O sentido do ciclo que permite ao sistema operar como máquina térmica e a quantidade de calor recebida da fonte quente ao longo de um ciclo são, respectivamente:',
			image: '2026-1/te-3b.webp'
		},
		alternatives: [
			{
				text: String.raw`horário e $\frac{13}{2} P_0V_0$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`anti-horário e $\frac{13}{2} P_0V_0$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`horário e $\frac{5}{2} P_0V_0$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`anti-horário e $\frac{5}{2} P_0V_0$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`horário e $\frac{7}{2} P_0V_0$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.SistemasTermodinamicos, TagTD.SegundaLeiEntropia),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere um sistema isolado, formado por duas partes 1 e 2 separadas inicialmente por uma parede adiabática, impermeável e fixa. As equações de estado que descrevem ambas as partes são<br/><br/>$$U_i = \frac{3R}{2}n_iT_i \quad \text{e} \quad p_i = \frac{n_i RT_i}{V_i}$$<br/>onde $R$ é uma constante e $U_i$, $n_i$, $p_i$ e $T_i$ denotam, respectivamente, a energia interna, o número de mols, a pressão e a temperatura do subsistema $i \in \{1,2\}$. A partir de um certo instante, a parede torna-se diatérmica e móvel, permitindo troca de calor e variação de volume entre os subsistemas até o sistema atingir o novo estado de equilíbrio. Sendo $n_1 = 2n_2$, assinale a alternativa que indica relações corretas envolvendo as novas temperaturas e os novos volumes dos subsistemas.`
		},
		alternatives: [
			{
				text: '$T_1 = T_2$ e $V_1 = 2V_2$',
				number: QuestionAlternative.A
			},
			{
				text: '$T_1 = 2T_2$ e $V_1 = 2V_2$',
				number: QuestionAlternative.B
			},
			{
				text: '$T_1 = 2T_2$ e $V_1 = V_2$',
				number: QuestionAlternative.C
			},
			{
				text: '$T_1 = 3T_2$ e $V_1 = 2V_2$',
				number: QuestionAlternative.D
			},
			{
				text: '$T_1 = T_2$ e $V_1 = V_2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		tags: tagsForArea<Area.Termodinamica>(TagTD.SistemasTermodinamicos, TagTD.SegundaLeiEntropia),
		help: {
			youtubeVideoId: videos[Area.Termodinamica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere um sistema isolado, formado por duas partes 1 e 2 separadas inicialmente por uma parede adiabática, impermeável e fixa. As equações de estado que descrevem ambas as partes são<br/><br/>$$U_i = \frac{3R}{2}n_iT_i \quad \text{e} \quad p_i = \frac{n_i RT_i}{V_i}$$<br/>onde $R$ é uma constante e $U_i$, $n_i$, $p_i$ e $T_i$ denotam, respectivamente, a energia interna, o número de mols, a pressão e a temperatura do subsistema $i \in \{1,2\}$. A partir de um certo instante, a parede torna-se diatérmica e móvel, permitindo troca de calor e variação de volume entre os subsistemas até o sistema atingir o novo estado de equilíbrio. Sendo $n_1 = 3n_2$, assinale a alternativa que indica relações corretas envolvendo as novas temperaturas e os novos volumes dos subsistemas.`
		},
		alternatives: [
			{
				text: '$T_1 = T_2$ e $V_1 = 3V_2$',
				number: QuestionAlternative.A
			},
			{
				text: '$T_1 = 2T_2$ e $V_1 = 3V_2$',
				number: QuestionAlternative.B
			},
			{
				text: '$T_1 = 2T_2$ e $V_1 = V_2$',
				number: QuestionAlternative.C
			},
			{
				text: '$T_1 = 3T_2$ e $V_1 = 3V_2$',
				number: QuestionAlternative.D
			},
			{
				text: '$T_1 = T_2$ e $V_1 = V_2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.RadiacaoTermicaCorpoNegroPlanck),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um objeto (que pode ser considerado um corpo negro perfeito) de área superficial total $A$ e capacidade térmica $C$ constantes encontra-se isolado no vácuo, inicialmente a uma temperatura absoluta $T$. Sendo $\sigma$ a constante de Stefan-Boltzmann e considerando que o ambiente circundante é o vácuo, à temperatura correspondente ao zero absoluto ($0 \space K$), qual é o intervalo de tempo $\Delta t$ necessário para que a temperatura do objeto caia para a metade do seu valor inicial?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{7C}{3\sigma AT^3}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{CT}{2\sigma A}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{C}{\sigma AT^4}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{C}{8\sigma AT^3}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{2C}{5\sigma AT^4}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.RadiacaoTermicaCorpoNegroPlanck),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Um objeto (que pode ser considerado um corpo negro perfeito) de área superficial total $A$ e capacidade térmica $C$ constantes encontra-se isolado no vácuo, inicialmente a uma temperatura absoluta $T$. Sendo $\sigma$ a constante de Stefan-Boltzmann e considerando que o ambiente circundante é o vácuo, à temperatura correspondente ao zero absoluto ($ \space$), qual é o intervalo de tempo $\Delta t$ necessário para que a temperatura do objeto caia para $2/3$ do seu valor inicial?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{19C}{24\sigma AT^3}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{2CT}{3\sigma A}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{C}{\sigma AT^4}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{27C}{8\sigma AT^3}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{3C}{2\sigma AT^4}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.TransformacoesLorentz,
			TagFM.FundamentosRelatividadeRestrita
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 2,
		statement: {
			text: 'A Lei de Hubble estabelece que a velocidade de recessão $v$ de uma galáxia é proporcional à sua distância própria $x$ em relação a um observador, sendo expressa por $v = Hx$, onde $H$ é a constante de Hubble. Considere uma galáxia que se afasta da Terra radialmente (ao longo da linha de visada). O desvio para o vermelho (<em>redshift</em>) $z$ é definido como $z = f_e/f_o - 1$, onde $f_e$ é a frequência da luz emitida no referencial da galáxia e $f_o$ é a frequência medida pelo receptor na Terra. Adotando o regime relativístico ($v$ comparável à velocidade da luz $c$) e um Universo cujo espaço-tempo é estático, calcule $x$.'
		},
		alternatives: [
			{
				text: String.raw`$x = \frac{(z+1)^2 - 1}{(z+1)^2 + 1} \left(\frac{c}{H}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$x = \frac{zc}{H}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$x = \frac{z}{z+2} \left(\frac{c}{H}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$x = \frac{z}{z+2} \left(\frac{1}{H}\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$x = \frac{z}{H}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.TransformacoesLorentz,
			TagFM.FundamentosRelatividadeRestrita
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 2,
		statement: {
			text: 'A Lei de Hubble estabelece que a velocidade de recessão $v$ de uma galáxia é proporcional à sua distância própria $x$ em relação a um observador, sendo expressa por $v = Hx$, onde $H$ é a constante de Hubble. Considere uma galáxia que se afasta da Terra radialmente (ao longo da linha de visada). O desvio para o vermelho (<em>redshift</em>) $z$ é definido como $z = f_e/f_o - 1$, onde $f_e$ é a frequência da luz emitida no referencial da galáxia e $f_o$ é a frequência medida pelo receptor na Terra. Adotando o regime relativístico ($v$ comparável à velocidade da luz $c$) e um Universo cujo espaço-tempo é estático, calcule $H$.'
		},
		alternatives: [
			{
				text: String.raw`$H = \frac{(z+1)^2 - 1}{(z+1)^2 + 1} \left(\frac{c}{x}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$H = \frac{zc}{x}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$H = \frac{z}{z+2} \left(\frac{c}{x}\right)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$H = \frac{z}{z+2} \left(\frac{1}{x}\right)$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$H = \frac{z}{x}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.DistribuicaoBoltzmannEnergia,
			TagFM.AtomosMoleculasSolidos
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`O gráfico ao lado é a medida do calor específico molar a volume constante de um gás ideal quântico como função da temperatura. Considere as afirmações a seguir, sendo $k_B$ a constante de Boltzmann.<br/><br/><ul><li>I. Entre 20 K e 100 K, o gás pode ser considerado como constituído por moléculas diatômicas rígidas.</li><li>II. Os níveis energéticos de rotação de uma molécula desse gás são $E_r \ell(\ell + 1)$, com $\ell = 0,1,2,\ldots$ e $E_r/k_B \sim 10$ K.</li><li>III. Os níveis energéticos de vibração de uma molécula desse gás são $E_v(n + \frac{1}{2})$, com $n = 0,1,2,\ldots$ e $E_v/k_B \sim 10^3$ K.</li></ul><br/>Qual das alternativas abaixo é a correta?`,
			image: '2026-1/fm-3a.webp'
		},
		alternatives: [
			{
				text: 'As afirmações I, II e III são verdadeiras.',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das outras alternativas.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações II e III são verdadeiras.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e III são verdadeiras.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e II são verdadeiras.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.DistribuicaoBoltzmannEnergia,
			TagFM.AtomosMoleculasSolidos
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`O gráfico ao lado é a medida do calor específico molar a volume constante de um gás ideal quântico como função da temperatura. Considere as afirmações a seguir, sendo $k_B$ a constante de Boltzmann.<br/><br/><ul><li>I. Entre 5 K e 200 K, o gás pode ser considerado como constituído por moléculas diatômicas rígidas.</li><li>II. Os níveis energéticos de rotação de uma molécula desse gás são $E_{0r} \ell(\ell + 1)$, com $\ell = 0,1,2,\ldots$ e $E_{0r}/k_B \sim 2$ K.</li><li>III. Os níveis energéticos de vibração de uma molécula desse gás são $E_{0v}(n + \frac{1}{2})$, com $n = 0,1,2,\ldots$ e $E_{0v}/k_B \sim 10$ K.</li></ul><br/>Qual das alternativas abaixo é a correta?`,
			image: '2026-1/fm-3b.webp'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e II são verdadeiras.',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das outras alternativas.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação I é verdadeira.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações II e III são verdadeiras.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a afirmação III é verdadeira.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.MecanicaRelativisticaParticulas,
			TagFM.EnergiaMomentoRelativisticos
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 4,
		statement: {
			text: 'Em um determinado referencial inercial, uma partícula relativística move-se em uma dimensão sujeita ao potencial $V = kx^2/2$, onde $k > 0$ é uma constante. Sendo $m$ a massa de repouso da partícula e sabendo que ela se encontra inicialmente na origem ($x = 0$) com velocidade $v_0 = 3c/5$, qual a máxima distância alcançada pela partícula?'
		},
		alternatives: [
			{
				text: String.raw`$\sqrt{\frac{mc^2}{2k}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sqrt{\frac{9mc^2}{25k}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\sqrt{\frac{25mc^2}{9k}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sqrt{\frac{16mc^2}{25k}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\sqrt{\frac{4mc^2}{3k}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.MecanicaRelativisticaParticulas,
			TagFM.EnergiaMomentoRelativisticos
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 4,
		statement: {
			text: 'Em um determinado referencial inercial, uma partícula relativística move-se em uma dimensão sujeita ao potencial $V = kx^2/2$, onde $k > 0$ é uma constante. Sendo $m$ a massa de repouso da partícula e sabendo que ela se encontra inicialmente na origem ($x = 0$) com velocidade $v_0 = 4c/5$, qual a máxima distância alcançada pela partícula?'
		},
		alternatives: [
			{
				text: String.raw`$\sqrt{\frac{4mc^2}{3k}}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sqrt{\frac{16mc^2}{25k}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\sqrt{\frac{25mc^2}{16k}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\sqrt{\frac{9mc^2}{25k}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\sqrt{\frac{mc^2}{2k}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.FotonsPropriedadesCorpusculares),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Uma superfície metálica é iluminada por radiação monocromática de frequência $f$, produzindo emissão de elétrons com energia cinética máxima $K_{\max}$. Considere separadamente as seguintes modificações no experimento.<br/><br/><ul><li>I. A intensidade da radiação incidente é dobrada, mantendo-se a frequência constante.</li><li>II. A frequência da radiação é aumentada, mantendo-se a intensidade constante.</li><li>III. O metal é substituído por outro com uma função trabalho menor.</li></ul><br/>Assinale a alternativa correta quanto ao efeito dessas modificações sobre $K_{\max}$ e sobre a corrente fotoelétrica.`
		},
		alternatives: [
			{
				text: String.raw`Apenas I altera a corrente, enquanto II e III alteram $K_{\max}$.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`Apenas II altera tanto $K_{\max}$ quanto a corrente.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`I e II alteram $K_{\max}$, enquanto III altera apenas a corrente.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`Apenas III altera $K_{\max}$, enquanto I altera apenas a corrente.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`Todas as modificações alteram tanto $K_{\max}$ quanto a corrente.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.FotonsPropriedadesCorpusculares),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Em um experimento de efeito fotoelétrico, um metal é iluminado por luz monocromática de frequência $f$, ligeiramente maior que a frequência de corte do material. Observa-se a emissão de elétrons. Considere separadamente as seguintes modificações no experimento.<br/><br/><ul><li>I. A intensidade da radiação incidente é dobrada, mantendo-se a frequência constante.</li><li>II. A frequência da radiação é aumentada, mantendo-se a intensidade constante.</li><li>III. O metal é substituído por outro cuja função trabalho é maior que $hf$, onde $h$ é a constante de Planck.</li></ul><br/>Assinale a alternativa correta quanto ao efeito dessas modificações sobre a energia cinética máxima $K_{\max}$ dos elétrons emitidos e sobre a corrente fotoelétrica.`
		},
		alternatives: [
			{
				text: String.raw`II altera $K_{\max}$, enquanto III altera tanto $K_{\max}$ quanto a corrente.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`Apenas I altera a corrente, enquanto II altera $K_{\max}$.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`Apenas II altera tanto $K_{\max}$ quanto a corrente.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`I e II alteram $K_{\max}$.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`Todas as modificações alteram tanto $K_{\max}$ quanto a corrente.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.ModeloRutherfordEstabilidadeAtomos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 6,
		statement: {
			text: 'No modelo atômico de Rutherford, baseado na física clássica, os elétrons descrevem órbitas ao redor de um núcleo central sob a ação da força eletrostática. Avalie as afirmações a seguir no contexto do modelo de Rutherford:<br/><br/><ul><li>I. Um elétron em órbita circular está acelerado e, portanto, deve emitir radiação eletromagnética.</li><li>II. A emissão de radiação por um elétron em órbita implica a existência de um espectro contínuo de frequências emitidas.</li><li>III. A estabilidade dos átomos observada experimentalmente é incompatível com as previsões do modelo de Rutherford.</li></ul><br/>Assinale a alternativa correta.'
		},
		alternatives: [
			{
				text: 'I, II e III são corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas I é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II é correta.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I e II são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas I e III são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(TagFM.ModeloRutherfordEstabilidadeAtomos),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 6,
		statement: {
			text: 'No modelo atômico de Rutherford, baseado na física clássica, os elétrons descrevem órbitas ao redor de um núcleo central sob a ação da força eletrostática. Avalie as afirmações a seguir no contexto do modelo de Rutherford:<br/><br/><ul><li>I. Um elétron em órbita circular está acelerado e, portanto, deve emitir radiação eletromagnética.</li><li>II. A emissão de radiação por um elétron em órbita implica a existência de um espectro discreto de frequências emitidas.</li><li>III. A estabilidade dos átomos observada experimentalmente é incompatível com as previsões do modelo de Rutherford.</li></ul><br/>Assinale a alternativa correta.'
		},
		alternatives: [
			{
				text: 'Apenas I e III são corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas I é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II é correta.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas II e III são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'I, II e III são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.TransformacoesLorentz,
			TagFM.PropagacaoLuzRelatividadeNewtoniana
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Considere um referencial inercial $S$ associado aos eixos $x$ e $y$ e um outro referencial inercial $S'$ associado aos eixos $x'$ e $y'$, com $x$ paralelo a $x'$ e $y$ paralelo a $y'$. O referencial $S'$ move-se ao longo da direção $x$ crescente com velocidade $v = 0{,}6c$, onde $c$ é a velocidade da luz. Em um dado instante, um observador em repouso no referencial $S'$ emite um fóton na direção $y'$ crescente. Qual é o valor do cosseno do ângulo $\theta$ entre a direção de propagação do fóton e a direção $x$ crescente, medido por um observador em repouso no referencial $S$?`
		},
		alternatives: [
			{
				text: '$0{,}6$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$0{,}8$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$0{,}6/\sqrt{1+0{,}6^2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.TransformacoesLorentz,
			TagFM.PropagacaoLuzRelatividadeNewtoniana
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`Considere um referencial inercial $S$ associado aos eixos $x$ e $y$ e um outro referencial inercial $S'$ associado aos eixos $x'$ e $y'$, com $x$ paralelo a $x'$ e $y$ paralelo a $y'$. O referencial $S'$ move-se ao longo da direção $x$ crescente com velocidade $v = 0{,}5c$, onde $c$ é a velocidade da luz. Em um dado instante, um observador em repouso no referencial $S'$ emite um fóton na direção $y'$ crescente. Qual é o valor do cosseno do ângulo $\theta$ entre a direção de propagação do fóton e a direção $x$ crescente, medido por um observador em repouso no referencial $S$?`
		},
		alternatives: [
			{
				text: '$0{,}5$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\sqrt{1-0{,}5^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$0{,}5/\sqrt{1+0{,}5^2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.AtomosMoleculasSolidos,
			TagFM.FotonsPropriedadesCorpusculares
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Um elétron encontra-se no estado fundamental de um poço de potencial infinito unidimensional de largura $L$. A probabilidade de detecção do elétron por uma sonda de largura $a = 1{,}0$ nm, centrada em $x = L/2$, é igual a $1/20$. Considere $a \ll L$, de modo que a função de onda pode ser tomada aproximadamente constante na região da sonda. Determine o valor de $L$.`
		},
		alternatives: [
			{
				text: String.raw`$40 \space \text{nm}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$80 \space \text{nm}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$160 \space \text{nm}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$1600 \space \text{nm}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$20 \space \text{nm}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		tags: tagsForArea<Area.FisicaModerna>(
			TagFM.AtomosMoleculasSolidos,
			TagFM.FotonsPropriedadesCorpusculares
		),
		help: {
			youtubeVideoId: videos[Area.FisicaModerna]
		},
		questionNumber: 8,
		statement: {
			text: String.raw`Um elétron encontra-se no estado fundamental de um poço de potencial infinito unidimensional de largura $L$. A probabilidade de detecção do elétron por uma sonda de largura $a = 2{,}0$ nm, centrada em $x = L/2$, é igual a $1/25$. Considere $a \ll L$, de modo que a função de onda pode ser tomada aproximadamente constante na região da sonda. Determine o valor de $L$.`
		},
		alternatives: [
			{
				text: String.raw`$100 \space \text{nm}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$50 \space \text{nm}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$25 \space \text{nm}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$400 \space \text{nm}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$10 \space \text{nm}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.FormalizacaoPostuladosHeisenberg,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere as matrizes abaixo, que estão escritas em uma base ortonormal:<br/><br/>$$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & i \\ 0 & i & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}.$$<br/>Analise as quatro afirmações abaixo, classifique-as como verdadeiras (V) ou falsas (F) e escolha a alternativa correta.<br/><br/><ul><li>I. Todas podem representar observáveis de um sistema quântico.</li><li>II. Existe uma base comum que diagonaliza $B$ e $C$.</li><li>III. $B$ e $C$ formam um conjunto completo de observáveis compatíveis.</li><li>IV. $B^2$ e $C$ formam um conjunto completo de observáveis compatíveis.</li></ul><br/>Observação: observáveis cujos operadores comutam são chamados compatíveis. Um conjunto de observáveis compatíveis é completo se cada um dos autoestados da base comum a eles puder ser unicamente identificado pela coleção dos autovalores correspondentes.`
		},
		alternatives: [
			{
				text: 'F-V-V-F',
				number: QuestionAlternative.A
			},
			{
				text: 'V-V-V-V',
				number: QuestionAlternative.B
			},
			{
				text: 'F-V-V-V',
				number: QuestionAlternative.C
			},
			{
				text: 'F-V-F-V',
				number: QuestionAlternative.D
			},
			{
				text: 'V-F-V-V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.FormalizacaoPostuladosHeisenberg,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 1,
		statement: {
			text: String.raw`Considere as matrizes abaixo, que estão escritas em uma base ortonormal:<br/><br/>$$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & i \\ 0 & -i & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}.$$<br/>Analise as quatro afirmações abaixo, classifique-as como verdadeiras (V) ou falsas (F) e escolha a alternativa correta.<br/><br/><ul><li>I. Todas podem representar observáveis de um sistema quântico.</li><li>II. Existe uma base comum que diagonaliza $B$ e $C$.</li><li>III. $B$ e $C$ formam um conjunto completo de observáveis compatíveis.</li><li>IV. $B^2$ e $C$ formam um conjunto completo de observáveis compatíveis.</li></ul><br/>Observação: observáveis cujos operadores comutam são chamados compatíveis. Um conjunto de observáveis compatíveis é completo se cada um dos autoestados da base comum a eles puder ser unicamente identificado pela coleção formada pelos autovalores correspondentes.`
		},
		alternatives: [
			{
				text: 'V-V-V-F',
				number: QuestionAlternative.A
			},
			{
				text: 'V-V-V-V',
				number: QuestionAlternative.B
			},
			{
				text: 'F-V-V-F',
				number: QuestionAlternative.C
			},
			{
				text: 'F-V-F-V',
				number: QuestionAlternative.D
			},
			{
				text: 'V-F-V-V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.AparatoMatematicoSchrodinger,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere um sistema de dois níveis com estados de base $\ket{u_1}$ e $\ket{u_2}$ e caracterizado pelo hamiltoniano<br/><br/>$$H = \frac{\hbar\Omega}{2}\sigma_x,$$<br/>onde $\Omega$ é uma constante real com dimensão de inverso de tempo e<br/><br/>$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$<br/>na base $\{\ket{u_1}, \ket{u_2}\}$. Sendo $U(t) = e^{-iHt/\hbar}$ o operador de evolução temporal do sistema, determine a probabilidade $|\bra{u_1}U(t)\ket{u_1}|^2$ de o sistema, inicialmente preparado em $\ket{u_1}$, permanecer nesse estado após um tempo $t$.`
		},
		alternatives: [
			{
				text: String.raw`$\cos^2\left(\frac{\Omega t}{2}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\sin^2\left(\frac{\Omega t}{2}\right)$`,
				number: QuestionAlternative.B
			},
			{
				text: '$0$',
				number: QuestionAlternative.C
			},
			{
				text: '$2$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{1}{2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.AparatoMatematicoSchrodinger,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere um sistema de dois níveis com estados de base $\ket{u_1}$ e $\ket{u_2}$ e caracterizado pelo hamiltoniano<br/><br/>$$H = \frac{\hbar\Omega}{2}\sigma_x,$$<br/>onde $\Omega$ é uma constante real com dimensão de inverso de tempo e<br/><br/>$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$<br/>na base $\{\ket{u_1}, \ket{u_2}\}$. Sendo $U(t) = e^{-iHt/\hbar}$ o operador de evolução temporal do sistema, determine a probabilidade $|\bra{u_2}U(t)\ket{u_1}|^2$ de o sistema, inicialmente preparado em $\ket{u_1}$, transicionar para o estado $\ket{u_2}$ após um tempo $t$.`
		},
		alternatives: [
			{
				text: String.raw`$\sin^2\left(\frac{\Omega t}{2}\right)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\cos^2\left(\frac{\Omega t}{2}\right)$`,
				number: QuestionAlternative.B
			},
			{
				text: '$0$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{1}{2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.ParticulasIdenticas,
			TagMQ.AdicaoMomentosAngulares
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Sejam duas partículas idênticas, cada uma delas com número quântico de spin $s = 1$ e momento angular orbital $\ell = 0$. O estado angular total do sistema pode ser descrito na base de momento angular total $\ket{j,m_j}$, formada por autoestados simultâneos de $J^2$ e $J_z$. Quais valores de $j$ podem ocorrer ao descrever estados físicos permitidos para esse sistema?<br/>Observação: considere que o operador de permutação $P_{12}$, que troca as duas partículas, atua sobre os estados segundo $P_{12}\ket{j,m_j} = (-1)^{2s-j}\ket{j,m_j}$ e que todos os demais números quânticos espaciais das duas partículas são idênticos.`
		},
		alternatives: [
			{
				text: '$j = 0$ ou $2$',
				number: QuestionAlternative.A
			},
			{
				text: '$j = 0, 1$ ou $2$',
				number: QuestionAlternative.B
			},
			{
				text: '$j = 0$ ou $1$',
				number: QuestionAlternative.C
			},
			{
				text: '$j = 2$',
				number: QuestionAlternative.D
			},
			{
				text: '$j = 1$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.ParticulasIdenticas,
			TagMQ.AdicaoMomentosAngulares
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Sejam duas partículas idênticas, cada uma delas com número quântico de spin $s = 1/2$ e momento angular orbital $\ell = 0$. O estado angular total do sistema pode ser descrito na base de momento angular total $\ket{j,m_j}$, formada por autoestados simultâneos de $J^2$ e $J_z$. Quais valores de $j$ e $m_j$ podem ocorrer ao descrever estados físicos permitidos para esse sistema?<br/>Observação: considere que o operador de permutação $P_{12}$, que troca as duas partículas, atua sobre os estados segundo $P_{12}\ket{j,m_j} = (-1)^{2s-j}\ket{j,m_j}$ e que todos os demais números quânticos espaciais das duas partículas são idênticos.`
		},
		alternatives: [
			{
				text: '$j = 0$ com $m_j = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$j = 0$ com $m_j = 0$ ou $j = 1$ com $m_j = -1, 0, 1$',
				number: QuestionAlternative.B
			},
			{
				text: '$j = 0$ com $m_j = 0$ ou $j = 1$ com $m_j = -1, 1$',
				number: QuestionAlternative.C
			},
			{
				text: '$j = 1$ com $m_j = -1, 1$',
				number: QuestionAlternative.D
			},
			{
				text: '$j = 1$ com $m_j = -1, 0, 1$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.TeoriaPerturbacaoIndependenteTempo,
			TagMQ.OsciladorHarmonicoUnidimensional
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma partícula sem spin, de massa $m$ e carga $q = e$, está sujeita a um potencial harmônico unidimensional, de modo que seu hamiltoniano é<br/><br/>$$H_0 = \frac{P^2}{2m} + \frac{1}{2}m\omega^2X^2,$$<br/>onde $\omega$ denota a frequência angular do oscilador. Aplica-se ao sistema um campo elétrico uniforme de intensidade $E$, que introduz no hamiltoniano a perturbação<br/><br/>$$H_1 = -qEX,$$<br/>onde $X$ denota o operador posição. Supondo que $E$ seja suficientemente pequeno para que a teoria de perturbações seja aplicável, calcule o módulo da correção na energia do estado fundamental do sistema em ordem mais baixa não nula em $E$.<br/>Observação: se necessário, use que os autoestados de energia e respectivos autovalores para o sistema não perturbado são $\ket{n}$ e $E_n = \hbar\omega(n + \frac{1}{2})$. No formalismo dos operadores de escada, o operador de abaixamento<br/><br/>$$a = \sqrt{\frac{m\omega}{2\hbar}}X + i\sqrt{\frac{1}{2\hbar m\omega}}P,$$<br/>escrito em termos dos operadores de posição $X$ e momento $P$, e seu hermitiano conjugado $a^\dagger$, que é o operador de levantamento, atuam em $\ket{n}$ segundo $a\ket{n} = \sqrt{n}\ket{n-1}$ e $a^\dagger\ket{n} = \sqrt{n+1}\ket{n+1}$.`
		},
		alternatives: [
			{
				text: String.raw`$\frac{e^2E^2}{2m\omega^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\frac{e^2E^2}{m\omega^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$eE\sqrt{\frac{\hbar}{2m\omega}}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$eE\sqrt{\frac{2\hbar}{m\omega}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{e^4E^4}{\hbar m^2 \omega^5}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.TeoriaPerturbacaoIndependenteTempo,
			TagMQ.OsciladorHarmonicoUnidimensional
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Uma partícula sem spin, de massa $m$ e carga $q = 2e$, está sujeita a um potencial harmônico unidimensional, de modo que seu hamiltoniano é<br/><br/>$$H_0 = \frac{P^2}{2m} + \frac{1}{2}m\omega^2X^2,$$<br/>onde $\omega$ denota a frequência angular do oscilador. Aplica-se ao sistema um campo elétrico uniforme de intensidade $E$, que introduz no hamiltoniano a perturbação<br/><br/>$$H_1 = -qEX,$$<br/>onde $X$ denota o operador posição. Supondo que $E$ seja suficientemente pequeno para que a teoria de perturbações seja aplicável, calcule o módulo da correção na energia do estado fundamental do sistema em ordem mais baixa não nula em $E$.<br/>Observação: se necessário, use que os autoestados de energia e respectivos autovalores para o sistema não perturbado são $\ket{n}$ e $E_n = \hbar\omega(n + \frac{1}{2})$. No formalismo dos operadores de escada, o operador de abaixamento<br/><br/>$$a = \sqrt{\frac{m\omega}{2\hbar}}X + i\sqrt{\frac{1}{2\hbar m\omega}}P,$$<br/>escrito em termos dos operadores de posição $X$ e momento $P$, e seu hermitiano conjugado $a^\dagger$, que é o operador de levantamento, atuam em $\ket{n}$ segundo $a\ket{n} = \sqrt{n}\ket{n-1}$ e $a^\dagger\ket{n} = \sqrt{n+1}\ket{n+1}$.`
		},
		alternatives: [
			{
				text: String.raw`$\frac{2e^2E^2}{m\omega^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$2eE\sqrt{\frac{\hbar}{m\omega}}$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{4e^2E^2}{m\omega^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$2eE\sqrt{2\frac{\hbar}{m\omega}}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{16 e^4E^4}{\hbar m^2 \omega^5}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.AparatoMatematicoSchrodinger,
			TagMQ.FormalizacaoPostuladosHeisenberg
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Sejam $\ket{a}$ e $\ket{b}$ autoestados do operador momentum linear $\hat{p}$ com autovalores $a$ e $b$, respectivamente, com $a \neq b$. Qual é o valor de $\bra{a}\hat{p}\ket{b}$?`
		},
		alternatives: [
			{
				text: '$0$',
				number: QuestionAlternative.A
			},
			{
				text: '$a$',
				number: QuestionAlternative.B
			},
			{
				text: '$b$',
				number: QuestionAlternative.C
			},
			{
				text: '$|ab|$',
				number: QuestionAlternative.D
			},
			{
				text: '$|ab|^{1/2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.AparatoMatematicoSchrodinger,
			TagMQ.FormalizacaoPostuladosHeisenberg
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 5,
		statement: {
			text: String.raw`Sejam $\ket{a}$ e $\ket{b}$ autoestados do operador posição $\hat{x}$ com autovalores $a$ e $b$, respectivamente, com $a \neq b$. Qual é o valor de $\bra{a}\hat{x}\ket{b}$?`
		},
		alternatives: [
			{
				text: '$0$',
				number: QuestionAlternative.A
			},
			{
				text: '$a$',
				number: QuestionAlternative.B
			},
			{
				text: '$b$',
				number: QuestionAlternative.C
			},
			{
				text: '$|ab|$',
				number: QuestionAlternative.D
			},
			{
				text: '$|ab|^{1/2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.PotenciaisUnidimensionais),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Uma partícula de massa $m$ e energia $E$ move-se da esquerda para direita ao longo do eixo $x$ e incide sobre um potencial degrau definido por<br/><br/>$$V(x) = \begin{cases} 0, & x \leq 0, \\ V_0, & x > 0, \end{cases}$$<br/>com $E > V_0$. A função de onda na região $x \leq 0$ é dada por $\psi_L(x) = Ae^{ik_Lx} + Be^{-ik_Lx}$, e a função de onda na região $x > 0$ é dada por $\psi_R(x) = Ce^{ik_Rx}$. Qual das alternativas a seguir fornece a probabilidade de transmissão para que a partícula seja encontrada na região $x > 0$?`
		},
		alternatives: [
			{
				text: String.raw`$\frac{4k_Lk_R}{(k_L + k_R)^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$1$',
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{k_L}{k_R}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\left(\frac{k_L - k_R}{k_L + k_R}\right)^2$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(TagMQ.PotenciaisUnidimensionais),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 6,
		statement: {
			text: String.raw`Uma partícula de massa $m$ e energia $E$ move-se da esquerda para direita ao longo do eixo $x$ e incide sobre um potencial degrau definido por<br/><br/>$$V(x) = \begin{cases} 0, & x \leq 0, \\ V_0, & x > 0, \end{cases}$$<br/>com $E > V_0$. A função de onda na região $x \leq 0$ é dada por $\psi_L(x) = Ae^{ik_Lx} + Be^{-ik_Lx}$, e a função de onda na região $x > 0$ é dada por $\psi_R(x) = Ce^{ik_Rx}$. Qual das alternativas a seguir fornece a probabilidade de reflexão para que a partícula seja encontrada na região $x < 0$?`
		},
		alternatives: [
			{
				text: String.raw`$\left(\frac{k_L - k_R}{k_L + k_R}\right)^2$`,
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$1$',
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\frac{k_L}{k_R}$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{4k_Lk_R}{(k_L + k_R)^2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.SchrodingerTresDimensoesMomentoAngular,
			TagMQ.ForcasCentraisAtomoHidrogenio
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`A parte angular da função de onda de uma certa partícula movendo-se em um potencial central é dada por<br/><br/>$$\psi(\theta,\varphi) = \frac{1}{\sqrt{2}}\left[Y_{32}(\theta,\varphi) + Y_{21}(\theta,\varphi)\right],$$<br/>em que $Y_{\ell m}(\theta,\varphi)$ são os harmônicos esféricos, $\theta$ e $\varphi$ são os ângulos polares e azimutal, respectivamente, $\ell$ é o número quântico correspondente ao módulo do momento angular e $m$ dá a projeção do momento angular ao longo do eixo $z$. Nesse estado, o valor esperado do quadrado do momento angular, $L^2$, é`
		},
		alternatives: [
			{
				text: String.raw`$9\hbar^2$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$3\hbar^2$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$18\hbar^2$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$13\hbar^2/2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$5\hbar^2/9$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.SchrodingerTresDimensoesMomentoAngular,
			TagMQ.ForcasCentraisAtomoHidrogenio
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 7,
		statement: {
			text: String.raw`A parte angular da função de onda de uma certa partícula movendo-se em um potencial central é dada por<br/><br/>$$\psi(\theta,\varphi) = \frac{1}{\sqrt{2}}\left[Y_{42}(\theta,\varphi) + Y_{22}(\theta,\varphi)\right],$$<br/>em que $Y_{\ell m}(\theta,\varphi)$ são os harmônicos esféricos, $\theta$ e $\varphi$ são os ângulos polares e azimutal, respectivamente, $\ell$ é o número quântico correspondente ao módulo do momento angular e $m$ dá a projeção do momento angular ao longo do eixo $z$. Nesse estado, o valor esperado do quadrado do momento angular, $L^2$, é`
		},
		alternatives: [
			{
				text: String.raw`$13\hbar^2$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$3\hbar^2$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$26\hbar^2$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$6\hbar^2$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$10\hbar^2$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.PotenciaisUnidimensionais,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 8,
		statement: {
			text: "Uma partícula de massa $m$ está sujeita a um potencial de poço quadrado infinito de largura $a$ e se encontra em um autoestado de energia $E$. O poço é então expandido lentamente para uma largura $2a$. Qual é a razão $E'/E$, sendo $E'$ a energia da partícula após a conclusão da expansão?"
		},
		alternatives: [
			{
				text: '$1/4$',
				number: QuestionAlternative.A
			},
			{
				text: '$1$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$1/\sqrt{2}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		tags: tagsForArea<Area.MecanicaQuantica>(
			TagMQ.PotenciaisUnidimensionais,
			TagMQ.IntroducaoIdeiasFundamentais
		),
		help: {
			youtubeVideoId: videos[Area.MecanicaQuantica]
		},
		questionNumber: 8,
		statement: {
			text: "Uma partícula de massa $m$ está sujeita a um potencial de poço quadrado infinito de largura $a$ e se encontra em um autoestado de energia $E$. O poço é então expandido lentamente para uma largura $3a$. Qual é a razão $E'/E$, sendo $E'$ a energia da partícula após a conclusão da expansão?"
		},
		alternatives: [
			{
				text: '$1/9$',
				number: QuestionAlternative.A
			},
			{
				text: '$1$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/3$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$1/\sqrt{3}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.DescricaoEstatisticaSistemaFisico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 1,
		statement: {
			text: 'Considere dois compartimentos, $A$ e $B$, contendo ao todo $N$ bolas idênticas. No instante inicial, todas as bolas estão no compartimento $A$. A dinâmica do sistema é definida da seguinte forma: a cada intervalo de tempo, escolhe-se <em>uma bola ao acaso</em> entre as $N$ bolas e ela é transferida para o outro compartimento. Seja $n$ o número de bolas no compartimento $A$. Após um número suficientemente grande de passos de tempo, o sistema atinge um regime estacionário. Nesse regime, qual das alternativas a seguir é correta?'
		},
		alternatives: [
			{
				text: String.raw`O valor médio de $n$ é $\braket{n} = N/2$, e sua distribuição de probabilidades é binomial.`,
				number: QuestionAlternative.A
			},
			{
				text: 'O valor médio de $n$ decresce linearmente com o tempo.',
				number: QuestionAlternative.B
			},
			{
				text: 'Todos os valores de $n$ entre 0 e $N$ são igualmente prováveis.',
				number: QuestionAlternative.C
			},
			{
				text: 'Os estados mais prováveis são $n = 0$ e $n = N$.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor médio de $n$ cresce linearmente com o tempo.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.DescricaoEstatisticaSistemaFisico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 1,
		statement: {
			text: 'Considere dois compartimentos, $A$ e $B$, contendo ao todo $N$ bolas idênticas. No instante inicial, todas as bolas estão no compartimento $A$. A dinâmica do sistema é definida da seguinte forma: a cada intervalo de tempo, escolhe-se <em>uma bola ao acaso</em> entre as $N$ bolas e ela é transferida para o outro compartimento. Seja $n$ o número de bolas no compartimento $A$. Após um número suficientemente grande de passos de tempo, o sistema atinge um regime estacionário. Nesse regime, qual das alternativas a seguir é correta?'
		},
		alternatives: [
			{
				text: 'A distribuição de probabilidades de $n$ é simétrica em torno de $n = N/2$.',
				number: QuestionAlternative.A
			},
			{
				text: 'O valor médio de $n$ cresce linearmente com o tempo.',
				number: QuestionAlternative.B
			},
			{
				text: 'A probabilidade de observar $n = N/2$ é nula.',
				number: QuestionAlternative.C
			},
			{
				text: 'A variância de $n$ é proporcional a $N^2$.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor médio de $n$ decresce linearmente com o tempo.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleGrandeCanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere uma superfície com $M$ sítios adsorvedores independentes. Cada sítio pode estar em um dos seguintes estados: vazio, ocupado por uma molécula do tipo 1 ou ocupado por uma molécula do tipo 2. Não é permitida dupla ocupação de um mesmo sítio. O sistema está em contato térmico com um reservatório à temperatura $T$ e, além disso, está em contato com dois reservatórios de partículas distintos, um contendo moléculas do tipo 1 e outro contendo moléculas do tipo 2, caracterizados respectivamente pelos potenciais químicos $\mu_1$ e $\mu_2$. O sistema encontra-se em equilíbrio térmico e químico com ambos os reservatórios. Quando adsorvidas em um sítio, as moléculas do tipo 1 e 2 possuem energias $-\varepsilon_1$ e $-\varepsilon_2$, respectivamente. Isto pode ser simplesmente traduzido por um hamiltoniano efetivo por sítio descrito por<br/><br/>$$\mathcal{H}_i = -\varepsilon_1 n_i^{(1)} - \varepsilon_2 n_i^{(2)} - \mu_1 n_i^{(1)} - \mu_2 n_i^{(2)},$$<br/>onde $n_i^{(\alpha)} \in \{0,1\}$ indica a ocupação do sítio $i$ por uma molécula do tipo $\alpha \in \{1,2\}$, com $n_i^{(1)} + n_i^{(2)} \leq 1$ e $i \in \{1,2,\ldots,M\}$. O número médio de moléculas do tipo 1 adsorvidas na superfície é`
		},
		alternatives: [
			{
				text: String.raw`$\frac{M e^{\beta(\mu_1+\varepsilon_1)}}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.A
			},
			{
				text: '$M/2$',
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{M e^{\beta(\mu_2+\varepsilon_2)}}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.C
			},
			{
				text: '$M$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{M}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleGrandeCanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 2,
		statement: {
			text: String.raw`Considere uma superfície com $M$ sítios adsorvedores independentes. Cada sítio pode estar em um dos seguintes estados: vazio, ocupado por uma molécula do tipo 1 ou ocupado por uma molécula do tipo 2. Não é permitida dupla ocupação de um mesmo sítio. O sistema está em contato térmico com um reservatório à temperatura $T$ e, além disso, está em contato com dois reservatórios de partículas distintos, um contendo moléculas do tipo 1 e outro contendo moléculas do tipo 2, caracterizados respectivamente pelos potenciais químicos $\mu_1$ e $\mu_2$. O sistema encontra-se em equilíbrio térmico e químico com ambos os reservatórios. Quando adsorvidas em um sítio, as moléculas do tipo 1 e 2 possuem energias $-\varepsilon_1$ e $-\varepsilon_2$, respectivamente. Isto pode ser simplesmente traduzido por um hamiltoniano efetivo por sítio descrito por<br/><br/>$$\mathcal{H}_i = -\varepsilon_1 n_i^{(1)} - \varepsilon_2 n_i^{(2)} - \mu_1 n_i^{(1)} - \mu_2 n_i^{(2)},$$<br/>onde $n_i^{(\alpha)} \in \{0,1\}$ indica a ocupação do sítio $i$ por uma molécula do tipo $\alpha \in \{1,2\}$, com $n_i^{(1)} + n_i^{(2)} \leq 1$ e $i \in \{1,2,\ldots,M\}$. O número médio de moléculas do tipo 2 adsorvidas na superfície é`
		},
		alternatives: [
			{
				text: String.raw`$\frac{M e^{\beta(\mu_2+\varepsilon_2)}}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.A
			},
			{
				text: '$M/2$',
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\frac{M e^{\beta(\mu_1+\varepsilon_1)}}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.C
			},
			{
				text: '$M$',
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$\frac{M}{1 + e^{\beta(\mu_1+\varepsilon_1)} + e^{\beta(\mu_2+\varepsilon_2)}}$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleMicrocanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Considere um sistema isolado, descrito pelo ensemble microcanônico e constituído de dois subsistemas $A$ e $B$, fracamente acoplados entre si. A energia total, $E$, é fixa:<br/><br/>$$E = E_A + E_B,$$<br/>sendo $E_A$ e $E_B$ as energias dos subsistemas $A$ e $B$, respectivamente. O número de microestados acessíveis a cada subsistema é dado por<br/><br/>$$\Omega_A(E_A) = C_A E_A^\alpha \quad \text{e} \quad \Omega_B(E_B) = C_B E_B^\beta,$$<br/>onde $C_A$, $C_B$, $\alpha$ e $\beta$ são constantes positivas. O sistema evolui espontaneamente até o equilíbrio. Nessa condição, determine a fração de energia em $A$, $E_A/E$.<br/>Sugestão: lembre-se de que a entropia total de um sistema isolado deve ser maximizada no equilíbrio.`
		},
		alternatives: [
			{
				text: String.raw`$\alpha/(\alpha + \beta)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\alpha/\beta$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\beta/(\alpha + \beta)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\beta/\alpha$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$2\alpha/\beta$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleMicrocanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 3,
		statement: {
			text: String.raw`Considere um sistema isolado, descrito pelo ensemble microcanônico, constituído de dois subsistemas $A$ e $B$, fracamente acoplados entre si. A energia total, $E$, é fixa:<br/><br/>$$E = E_A + E_B,$$<br/>sendo $E_A$ e $E_B$ as energias dos subsistemas $A$ e $B$, respectivamente. O número de microestados acessíveis a cada subsistema é dado por<br/><br/>$$\Omega_A(E_A) = C_A E_A^\alpha \quad \text{e} \quad \Omega_B(E_B) = C_B E_B^\beta,$$<br/>onde $C_A$, $C_B$, $\alpha$ e $\beta$ são constantes positivas. O sistema evolui espontaneamente até o equilíbrio. Nessa condição, determine a fração de energia em $B$, $E_B/E$.<br/>Sugestão: lembre-se de que a entropia total de um sistema isolado deve ser maximizada no equilíbrio.`
		},
		alternatives: [
			{
				text: String.raw`$\beta/(\alpha + \beta)$`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`$\beta/\alpha$`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`$\alpha/(\alpha + \beta)$`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`$\alpha/\beta$`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`$2\beta/\alpha$`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleCanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere um sistema em equilíbrio térmico com um reservatório à temperatura $T$, descrito pelo ensemble canônico. O sistema possui dois níveis de energia:<br/><br/><ul><li>um nível fundamental, de energia $E_0 = 0$, com degenerescência $g_0 = 1$;</li><li>um nível excitado, de energia $E_1 = \varepsilon$, com degenerescência $g_1 = 3$.</li></ul><br/>Assinale a alternativa correta.`
		},
		alternatives: [
			{
				text: String.raw`A probabilidade de o sistema estar no nível excitado é $(3e^{-\beta\varepsilon})/(1 + 3e^{-\beta\varepsilon})$.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`A função de partição é $Z = 3 + e^{-\beta\varepsilon}$.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`No limite $T \to 0$, as probabilidades de ocupação dos níveis são iguais, devido à degenerescência.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`No limite $T \to \infty$, a probabilidade de ocupação do nível excitado tende a $1/2$.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`A energia média do sistema é sempre igual a $\varepsilon/3$.`,
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		tags: tagsForArea<Area.FisicaEstatistica>(TagFE.EnsembleCanonico),
		help: {
			youtubeVideoId: videos[Area.FisicaEstatistica]
		},
		questionNumber: 4,
		statement: {
			text: String.raw`Considere um sistema em equilíbrio térmico com um reservatório à temperatura $T$, descrito pelo ensemble canônico. O sistema possui dois níveis de energia:<br/><br/><ul><li>um nível fundamental de energia $E_0 = 0$, com degenerescência $g_0 = 1$;</li><li>um nível excitado de energia $E_1 = \varepsilon$, com degenerescência $g_1 = 2$.</li></ul><br/>Assinale a alternativa correta:`
		},
		alternatives: [
			{
				text: String.raw`A probabilidade de o sistema estar no nível excitado é $(2e^{-\beta\varepsilon})/(1 + 2e^{-\beta\varepsilon})$.`,
				number: QuestionAlternative.A
			},
			{
				text: String.raw`A função de partição é $Z = 2 + e^{-\beta\varepsilon}$.`,
				number: QuestionAlternative.B
			},
			{
				text: String.raw`No limite $T \to 0$, as probabilidades de ocupação dos níveis são iguais, devido à degenerescência.`,
				number: QuestionAlternative.C
			},
			{
				text: String.raw`No limite $T \to \infty$, a probabilidade de ocupação do nível excitado tende a $1/2$.`,
				number: QuestionAlternative.D
			},
			{
				text: String.raw`A energia média do sistema é sempre igual a $\varepsilon/2$.`,
				number: QuestionAlternative.E
			}
		]
	}
];
