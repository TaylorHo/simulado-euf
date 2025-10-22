import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2024,
	semester: 2,
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: [],
	help: {}
};

export default <Question[]>[
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma configuração central é aquela em que a atração gravitacional mútua de vários corpos resulta numa força total sobre cada um deles que aponta para o centro de massa do sistema. A configuração central ilustrada na figura, descrita por Lagrange, permite que três corpos de massas iguais a $M$ girem com velocidade angular $\\omega$ em órbita circular de raio $R$ em torno do centro do triângulo equilátero de lado $a = \\sqrt{3R}$. Qual deve ser a velocidade de revolução $\\omega$ desses corpos para que eles permaneçam em órbita circular em torno do centro do triângulo?'
		},
		alternatives: [
			{
				text: '$\\omega = \\sqrt{\\frac{3GM}{a^3}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\sqrt{\\frac{3GM}{2a^3}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\sqrt{\\frac{\\sqrt{3}GM}{a^3}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = \\sqrt{\\frac{2GM}{3a^3}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = \\sqrt{\\frac{GM}{3a^3}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma configuração central é aquela em que a atração gravitacional mútua de vários corpos resulta numa força total sobre cada um deles que aponta para o centro de massa do sistema. configuração central ilustrada na figura, descrita por Lagrange, permite que três corpos de massas iguais a $M$ girem com velocidade angular $\\omega$ em órbita circular de raio $R$ em torno do centro do triângulo equilátero de lado $a = \\sqrt{3R}$. Qual deve ser o comprimento a do lado do triângulo para que esses corpos permaneçam em órbita circular em torno do centro do triângulo?'
		},
		alternatives: [
			{
				text: '$a = (\\frac{3GM}{\\omega^2})^{\\frac{1}{3}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$a = (\\frac{3GM}{2\\omega^2})^{\\frac{1}{3}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$a = (\\frac{\\sqrt{3}GM}{\\omega^2})^{\\frac{1}{3}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$a = (\\frac{2GM}{3\\omega^2})^{\\frac{1}{3}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$a = (\\frac{GM}{3\\omega^2})^{\\frac{1}{3}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 2,
		statement: {
			text: 'A figura ilustra uma balança de braços de comprimento $L = 30 cm$, uma barra homogênea de densidade $\\rho = 5,0 g/cm^3$ e de massa $M = 5,0 kg$ e um balde grande para armazenar água (cuja densidade é $1,0 g/cm^3$). Movendo-se o balde para cima ou para baixo até que os braços da balança fiquem perfeitamente horizontais, e então medindo o comprimento emerso $h$ da barra, pode-se obter a massa da mercadoria. Qual o intervalo de massas que pode ser medido com essa balança?',
			image: '2024-2/mc-2a.webp'
		},
		alternatives: [
			{
				text: 'Entre $4,0 kg$ e $5,0$ kg',
				number: QuestionAlternative.A
			},
			{
				text: 'Entre $0,0 kg$ e $5,0$ kg',
				number: QuestionAlternative.B
			},
			{
				text: 'Entre $0,0 kg$ e $15$ kg',
				number: QuestionAlternative.C
			},
			{
				text: 'Entre $1,0 kg$ e $5,0$ kg',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes. Precisa-se do comprimento da barra.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 2,
		statement: {
			text: 'A figura ilustra uma balança de braços de comprimento $L = 40 cm$, uma barra homogênea de densidade $\\rho = 3,0 g/cm^3$ e de massa $M = 6,0 kg$ e um balde grande para armazenar água (cuja densidade é $1,0 g/cm^3$). Movendo-se o balde para cima ou para baixo até que os braços da balanca fiquem perfeitamente horizontais, e então medindo o comprimento emerso $h$ da barra, pode-se obter a massa da mercadoria. Qual o intervalo de massas que pode ser medido com essa balança?',
			image: '2024-2/mc-2b.webp'
		},
		alternatives: [
			{
				text: 'Entre $4,0 kg$ e $6,0$ kg',
				number: QuestionAlternative.A
			},
			{
				text: 'Entre $0,0 kg$ e $6,0$ kg',
				number: QuestionAlternative.B
			},
			{
				text: 'Entre $0,0 kg$ e $2,4$ kg',
				number: QuestionAlternative.C
			},
			{
				text: 'Entre $2,0 kg$ e $6,0$ kg',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes. Precisa-se do comprimento da barra.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma pessoa carregando uma barra com pesos encontra-se sobre os pratos de uma balança de precisão, como ilustrado na figura (a). No instante $t_0$, a pessoa inicia o levantamento do peso terminando de erguê-lo no instante $t_1$, como ilustra a figura (b). Qual das alternativas abaixo melhor representa a magnitude da força normal entre a pessoa e a balança?'
		},
		alternatives: [
			{
				image: '2024-2/mc-3-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/mc-3-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/mc-3-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/mc-3-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/mc-3-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma pessoa carregando uma barra com pesos encontra-se sobre os pratos de uma balança de precisão, como ilustrado na figura (a). No instante $t_0$, a pessoa inicia o abaixamento do peso terminando de fazê-lo no instante $t_1$, como ilustra a figura (b). Qual das alternativas abaixo melhor representa a magnitude da força normal entre a pessoa e a balança?'
		},
		alternatives: [
			{
				image: '2024-2/mc-3-b.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/mc-3-a.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/mc-3-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/mc-3-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/mc-3-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 4,
		statement: {
			text: 'O pêndulo da figura, formado por uma barra rígida de massa desprezível e comprimento $L$ com uma massa pontual $M$ suspensa, está ligado a uma mola horizontal e longa de massa desprezível e constante de mola $k$ a uma distância $L/3$ de seu eixo de rotação. A mola está relaxada quando o pêndulo se encontra na posição vertical de equilíbrio $\\theta = 0$. Sendo $g$ a aceleração da gravidade, considere as seguintes afirmações tendo em mente o regime de pequenas oscilações, ou seja, pequenas amplitudes de oscilação em torno do equilíbrio $\\theta \\ll 1$, onde $\\cos{\\theta} \\approx 1 - \\frac{1}{2}\\theta^2$ e $\\sin{\\theta} \\approx \\theta$.<br/><br/><ul><li>I. A energia potencial gravitacional é conservada durante o movimento.</li><li>II. A energia mecânica do sistema é $E = \\frac{1}{2}ML^2 [\\dot{\\theta}^2 + (\\frac{g}{L} + \\frac{k}{9M}) \\theta^2]$.</li><li>III. A frequência de oscilação é $\\omega = \\sqrt{\\frac{g}{L} + \\frac{k}{9M}}$.</li></ul><br/>Qual das alternativas abaixo é a verdadeira?',
			image: '2024-2/mc-4a.webp'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações II e III são verdadeiras.',
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
				text: 'Apenas as afirmações I e III são verdadeiras.',
				number: QuestionAlternative.D
			},
			{
				text: 'A afirmação I é verdadeira e a afirmação II é falsa.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 4,
		statement: {
			text: 'O pêndulo da figura, formado por uma barra rígida de massa desprezível e comprimento $L$ com uma massa pontual $M$ suspensa, está ligado a uma mola horizontal e longa de massa desprezível e constante de mola $k$ a uma distância $2L/5$ de seu eixo de rotação. A mola está relaxada quando o pêndulo se encontra na posição vertical de equilíbrio $\\theta = 0$. Sendo $g$ a aceleração da gravidade, considere as seguintes afirmações tendo em mente o regime de pequenas oscilações, ou seja, pequenas amplitudes de oscilação em torno do equilíbrio, $\\theta \\ll 1$ onde $\\cos{\\theta} \\approx 1 - \\frac{1}{2}\\theta^2$ e $\\sin{\\theta} \\approx \\theta$.<br/><br/><ul><li>I. A energia potencial elástica é conservada durante o movimento.</li><li>II. A energia mecânica do sistema é $E = \\frac{1}{2}ML^2 [\\dot{\\theta}^2 + (\\frac{g}{L} + \\frac{4k}{25M}) \\theta^2]$.</li><li>III. A frequência de oscilação é $\\omega = \\sqrt{\\frac{g}{L} + \\frac{4k}{25M}}$.</li></ul><br/>Qual das alternativas abaixo é a verdadeira?',
			image: '2024-2/mc-4b.webp'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações II e III são verdadeiras.',
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
				text: 'Apenas as afirmações I e III são verdadeiras.',
				number: QuestionAlternative.D
			},
			{
				text: 'A afirmação I é verdadeira e a afirmação II é falsa.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 5,
		statement: {
			text: 'Um sistema composto por um pêndulo simples de massa $m_1 = 2M$ é solto do repouso a partir de uma altura $H$ em relação ao solo, conforme ilustrado na figura (a). Ao passar pelo ponto mais baixo de sua trajetória, a partícula de massa $m_1$ colide com outra partícula de massa $m_2 = M$, que está em repouso no solo. Após a colisão, as duas partículas se movem juntas, formando um novo pêndulo, como mostrado na figura (b).<br/><br/>Qual é a altura máxima $h$ que as duas massas subirão após a colisão, em termos de $H$? Considere que a resistência do ar e o atrito da massa $m_2$ com o solo são desprezíveis.',
			image: '2024-2/mc-5.webp'
		},
		alternatives: [
			{
				text: '$h = \\frac{4}{9}H$',
				number: QuestionAlternative.A
			},
			{
				text: '$h = \\frac{2}{3}H$',
				number: QuestionAlternative.B
			},
			{
				text: '$h = \\frac{1}{3}H$',
				number: QuestionAlternative.C
			},
			{
				text: '$h = \\frac{1}{9}H$',
				number: QuestionAlternative.D
			},
			{
				text: '$h = \\frac{8}{9}H$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 5,
		statement: {
			text: 'Um sistema composto por um pêndulo simples de massa $m_1 = 3M$ é solto do repouso a partir de uma altura $H$ em relação ao solo, conforme ilustrado na figura (a). Ao passar pelo ponto mais baixo de sua trajetória, a partícula de massa $m_1$ colide com outra partícula de massa $m_2 = M$, que está em repouso no solo. Após a colisão, as duas partículas se movem juntas, formando um novo pêndulo, como mostrado na figura (b).<br/><br/>Qual é a altura máxima $h$ que as duas massas subirão após a colisão, em termos de $H$? Considere que a resistência do ar e o atrito da massa $m_2$ com o solo são desprezíveis.',
			image: '2024-2/mc-5.webp'
		},
		alternatives: [
			{
				text: '$h = \\frac{9}{16}H$',
				number: QuestionAlternative.A
			},
			{
				text: '$h = \\frac{3}{4}H$',
				number: QuestionAlternative.B
			},
			{
				text: '$h = \\frac{1}{4}H$',
				number: QuestionAlternative.C
			},
			{
				text: '$h = \\frac{1}{16}H$',
				number: QuestionAlternative.D
			},
			{
				text: '$h = \\frac{3}{16}H$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 6,
		statement: {
			text: 'Um projétil de massa $m$ e velocidade de módulo $v_0$ move-se em direção a um disco homogêneo de massa $M \\gg m$ e raio $R$, que está em repouso sobre uma superfície sem atrito, conforme ilustrado na figura (visto de cima). O projétil colide inelasticamente com o disco, ficando alojado na sua periferia a uma distância $r \\approx R$ do centro do disco. Com isso, o sistema "disco + projétil" adquire um movimento combinado de translação, com velocidade linear de módulo $V_f$, e de rotação em torno do centro de massa, com velocidade angular $\\omega$.<br/><br/>Assumindo que o centro de massa do sistema "disco + projétil" após a colisão está aproximadamente no centro do disco, quais são os valores de $V_f$ e $\\omega$? Assuma também que $(M + m) \\approx M$ e que o momento de inércia do sistema "disco + projétil" é aproximadamente o momento de inércia do disco em relação ao centro de massa, i.e., $I \\approx I_{CM} = \\frac{MR^2}{2}$',
			image: '2024-2/mc-6a.webp'
		},
		alternatives: [
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = 2 \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = \\frac{1}{2} \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V_f = \\frac{1}{2} \\frac{m}{M} v_0$ e $\\omega = \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_f = \\sqrt{\\frac{m}{M}} v_0$ e $\\omega = \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 6,
		statement: {
			text: 'Um projétil de massa $m$ e velocidade de módulo $v_0$ move-se em direção a uma barra delgada ho mogênea de massa $M \\gg m$ e comprimento $L,$ que está em repouso sobre uma superfície sem atrito, conforme ilustrado na figura (visto de cima). O projétil colide inelasticamente com a barra, ficando alojado a uma distância $L/4$ do seu centro. Com isso, o sistema "barra + projétil" adquire um movimento combinado de translação, com velocidade linear de módulo $V_f$, e de rotação em torno do centro de massa, com velocidade angular $\\omega$.<br/><br/>Assumindo que o centro de massa do sistema "barra + projétil" após a colisão está aproximadamente no centro da barra, quais são os valores de $V_f$ e $\\omega$? Assuma também que $(M + m) \\approx M$ e que o momento de inércia do sistema "barra + projétil" é aproximadamente o momento de inércia de uma barra delgada homogênea em relação ao centro de massa, ie. $I \\approx I_{CM} = \\frac{ML^2}{12}$',
			image: '2024-2/mc-6b.webp'
		},
		alternatives: [
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = 3 \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = 12 \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_f = \\frac{m}{M} v_0$ e $\\omega = 6 \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V_f = \\frac{1}{2} \\frac{m}{M} v_0$ e $\\omega = 3 \\frac{m}{M} \\frac{v_0}{R}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_f = \\frac{1}{2} \\frac{m}{M} v_0$ e $\\omega = \\sqrt{\\frac{12m}{M}} \\frac{v_0}{R}$',
				number: QuestionAlternative.E
			}
		]
	},
	// Questão 7 foi anulada
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 8,
		statement: {
			text: 'Um bloco de massa $M$ é confinado a se movimentar sobre um trilho de ar com atrito desprezível, sua posição sendo descrita pela coordenada $x (y = 0)$. Preso a esse bloco, há uma haste de massa desprezível e comprimento $L$, com uma partícula de massa $m$ presa na outra extremidade, sob a ação da força gravitacional. A massa $m$ pode oscilar no plano $xy$, fazendo um ângulo $\\theta$ com a vertical, como ilustrado na figura. Expressando a lagrangiana $\\cal{L}$ do sistema em termos de $(x, \\theta, \\dot{x}, \\dot{\\theta})$, encontre o momento canônico $p_{x} = \\frac{\\partial\\cal{L}}{\\partial\\dot{x}}$',
			image: '2024-2/mc-8.webp'
		},
		alternatives: [
			{
				text: '$p_x = (m + M)\\dot{x} + mL\\dot{\\theta} \\cos{\\theta}$',
				number: QuestionAlternative.A
			},
			{
				text: '$p_x = (m + M)\\dot{x}$',
				number: QuestionAlternative.B
			},
			{
				text: '$p_x = (m + M)\\dot{x} + mL\\dot{\\theta} \\sin{\\theta}$',
				number: QuestionAlternative.C
			},
			{
				text: '$p_x = (m + M)\\dot{x} - mL\\dot{\\theta} \\sin{\\theta}$',
				number: QuestionAlternative.D
			},
			{
				text: '$p_x = (m + M)\\dot{x} - mL\\dot{\\theta} \\cos{\\theta}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2aDOe8MfxqQ'
		},
		questionNumber: 8,
		statement: {
			text: 'Um bloco de massa $M$ é confinado a se movimentar sobre um trilho de ar com atrito desprezível, sua posição sendo descrita pela coordenada $x (y = 0)$. Preso a esse bloco, há uma haste de massa desprezível e comprimento $L$, com uma partícula de massa $m$ presa na outra extremidade, sob a ação da força gravitacional. A massa $m$ pode oscilar no plano $xy$, fazendo um ângulo $\\theta$ com a vertical, como ilustrado na figura. Expressando a lagrangiana $\\cal{L}$ do sistema em termos de $(x, \\theta, \\dot{x}, \\dot{\\theta})$, encontre o momento canônico $p_{\\theta} = \\frac{\\partial\\cal{L}}{\\partial\\dot{\\theta}}$',
			image: '2024-2/mc-8.webp'
		},
		alternatives: [
			{
				text: '$p_{\\theta} = mL^2\\dot{\\theta} + mL\\dot{x} \\cos{\\theta}$',
				number: QuestionAlternative.A
			},
			{
				text: '$p_{\\theta} = mL^2\\dot{\\theta}$',
				number: QuestionAlternative.B
			},
			{
				text: '$p_{\\theta} = mL^2\\dot{\\theta} + mL\\dot{x} \\sin{\\theta}$',
				number: QuestionAlternative.C
			},
			{
				text: '$p_{\\theta} = mL^2\\dot{\\theta} - mL\\dot{x} \\cos{\\theta}$',
				number: QuestionAlternative.D
			},
			{
				text: '$p_{\\theta} = mL^2\\dot{\\theta} - mL\\dot{x} \\sin{\\theta}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 1,
		statement: {
			text: 'Um isolante cilíndrico de raio $R$, infinitamente longo, possui uma distribuição uniforme de cargas com densidade volumétrica $\\nu > 0$. Qual é o módulo do campo elétrico $E$ a uma distância $\\rho < R$ do eixo de simetria do cilindro?'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\nu \\rho}{2\\epsilon_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\nu \\rho}{4\\epsilon_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = \\frac{2\\nu \\rho}{\\epsilon_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{\\nu R^2}{\\epsilon_0 \\rho}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = \\frac{\\nu R^2}{4 \\epsilon_0 \\rho}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 1,
		statement: {
			text: 'Um isolante cilíndrico de raio $R$, infinitamente longo, possui uma distribuição uniforme de cargas com densidade volumétrica $\\nu > 0$. Qual é o módulo do campo elétrico $E$ a uma distância $\\rho > R$ do eixo de simetria do cilindro?'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\nu R^2}{2\\epsilon_0 \\rho}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\nu R^2}{4\\epsilon_0 \\rho}$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = \\frac{\\nu \\rho}{\\epsilon_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{\\nu \\rho^2}{2\\epsilon_0 R}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = \\frac{\\nu \\rho^2}{4\\epsilon_0 R}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 2,
		statement: {
			text: 'Num determinado instante, um capacitor de capacitância $C$, totalmente carregado com uma carga $Q_0$, começa a descarregar através de um resistor de resistência $R$. Em qual instante $t$ o capacitor terá a metade de sua carga inicial?'
		},
		alternatives: [
			{
				text: '$t = RC \\ln{2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$t = RC \\ln{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$t = \\frac{1}{2} RC \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$t = \\frac{1}{3} RC \\ln{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$t = 2RC \\ln{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 2,
		statement: {
			text: 'Num determinado instante, um capacitor de capacitância $C$, totalmente carregado com uma carga $Q_0$, começa a descarregar através de um resistor de resistência $R$. Em qual instante $t$ o capacitor terá um terço de sua carga inicial?'
		},
		alternatives: [
			{
				text: '$t = RC \\ln{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$t = RC \\ln{2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$t = \\frac{1}{2} RC \\ln{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$t = \\frac{1}{3} RC \\ln{2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$t = 3RC \\ln{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 3,
		statement: {
			text: 'Um cabo coaxial é constituído por um cilindro condutor interno de raio a envolto por uma casca cilíndrica externa condutora fina, coaxial ao cilindro interno e de raio $b > a$. O cilindro interno é percorrido por uma corrente $I$ uniformemente distribuída em sua seção reta. O cilindro externo é percorrido por uma corrente de mesma intensidade, uniformemente distribuída na sua superfície, mas que flui em sentido oposto à corrente no cilindro interno. Considerando que o eixo de simetria do cabo coaxial é o eixo $z$, qual é o campo magnético $B$ na região $0 < \\rho < a$, no interior do condutor interno?'
		},
		alternatives: [
			{
				text: '$B = \\frac{\\mu_0 I \\rho}{2 \\pi a^2} \\hat{\\phi}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = \\frac{\\mu_0 I \\rho}{4 \\pi a^2} \\hat{\\phi}$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = \\frac{\\mu_0 I \\rho^2}{2 \\pi a^3} \\hat{\\phi}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\frac{\\mu_0 I a}{2 \\pi \\rho^2} \\hat{\\phi}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = \\frac{\\mu_0 I a}{4 \\pi \\rho^2} \\hat{\\phi}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 3,
		statement: {
			text: 'Um cabo coaxial é constituído por um cilindro condutor interno de raio a envolto por uma casca cilíndrica externa condutora fina, coaxial ao cilindro interno e de raio $b > a$. O cilindro interno é percorrido por uma corrente $I$ uniformemente distribuída em sua seção reta. O cilindro externo é percorrido por uma corrente de mesma intensidade, uniformemente distribuída na sua superfície, mas que flui em sentido oposto à corrente no cilindro interno. Considerando que o eixo de simetria do cabo coaxial é o eixo $z$, qual é o campo magnético $B$ na região $a < \\rho < b$ entre os condutores?'
		},
		alternatives: [
			{
				text: '$B = \\frac{\\mu_0 I}{2 \\pi \\rho} \\hat{\\phi}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = \\frac{\\mu_0 I}{4 \\pi \\rho} \\hat{\\phi}$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = \\frac{\\mu_0 I a}{2 \\pi \\rho^2} \\hat{\\phi}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\frac{\\mu_0 I b}{2 \\pi \\rho^2} \\hat{\\phi}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = \\frac{\\mu_0 I b}{2 \\pi a \\rho} \\hat{\\phi}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 4,
		statement: {
			text: 'Em uma determinada região do espaço o campo elétrico é dado, em coordenadas esféricas, por $E = kr^2\\hat{r}$, onde $k$ é uma constante. Qual é a densidade de carga $\\rho$ na região?'
		},
		alternatives: [
			{
				text: '$\\rho = 4 k \\epsilon_0 r$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\rho = 2\\pi k \\epsilon_0 r$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\rho = 4\\pi k \\epsilon_0 r$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\rho = k \\epsilon_0 r$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\rho = \\pi k \\epsilon_0 r$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 4,
		statement: {
			text: 'Em uma determinada região do espaço o campo elétrico é dado, em coordenadas esféricas, por $E = kr^3\\hat{r}$, onde $k$ é uma constante. Qual é a densidade de carga $\\rho$ na região?'
		},
		alternatives: [
			{
				text: '$\\rho = 5 k \\epsilon_0 r^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\rho = 5\\pi k \\epsilon_0 r^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\rho = 10 k \\epsilon_0 r^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\rho = 10\\pi k \\epsilon_0 r^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\rho = 4\\pi k \\epsilon_0 r^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma espira situa-se no plano $xy$ e é formada por dois arcos de circunferência centrados na origem $C$ de raios $R_1$ e $R_2 > R_1$ conectados por segmentos retos (ver figura). A corrente elétrica na espira é $I_0$ e tem sentido anti-horário no arco de maior raio ($R_2$) quando vista de cima ($z > 0$). O campo magnético $B$ na origem $C$ é dado por:',
			image: '2024-2/em-5a.webp'
		},
		alternatives: [
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} + \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = -\\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} + \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} - \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_2} - \\frac{1}{R_1}) \\hat{z}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma espira situa-se no plano $xy$ e é formada por dois arcos de circunferência centrados na origem $C$ de raios $R_1$ e $R_2 > R_1$ conectados por segmentos retos (ver figura). A corrente elétrica na espira é $I_0$ e tem sentido anti-horário no arco de maior raio ($R_2$) quando vista de cima ($z > 0$). O campo magnético $B$ na origem $C$ é dado por:',
			image: '2024-2/mc-5b.webp'
		},
		alternatives: [
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_2} - \\frac{1}{R_1}) \\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} - \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} + \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = -\\frac{\\mu_0 I_0}{4} (\\frac{1}{R_1} + \\frac{1}{R_2}) \\hat{z}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 6,
		statement: {
			text: 'O potencial vetor de certa distribuição de corrente elétrica em uma região do espaço é dado, em coordenadas cilíndricas, por $A(\\rho,\\phi,z) = \\frac{1}{2}C_0\\rho\\hat{\\phi}$, com $C_0$ constante. $i)$ Calcule o campo magnético $B(\\rho,\\phi,z)$; $ii)$ Em que região espacial próxima a qual distribuição de corrente elétrica pode-se observar esse campo magnético?'
		},
		alternatives: [
			{
				text: '$B(\\rho,\\phi,z) = C_0\\hat{z}$; interior de um solenoide longo',
				number: QuestionAlternative.A
			},
			{
				text: '$B(\\rho,\\phi,z) = \\frac{1}{4}C_0\\rho^2\\hat{z}$; proximidades de um fio retilíneo longo',
				number: QuestionAlternative.B
			},
			{
				text: '$B(\\rho,\\phi,z) = C_0\\hat{\\phi}$; interior de um solenoide longo',
				number: QuestionAlternative.C
			},
			{
				text: '$B(\\rho,\\phi,z) = \\frac{1}{2}C_0\\hat{\\phi}$; ao longo do eixo de uma espira circular',
				number: QuestionAlternative.D
			},
			{
				text: '$B(\\rho,\\phi,z) = C_0\\hat{\\phi}$; ao longo do eixo de uma espira circular',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 6,
		statement: {
			text: 'O potencial vetor de certa distribuição de corrente elétrica em uma região do espaço é dado, em coordenadas cilíndricas, por $A(\\phi,\\rho,z) = -C_0 \\ln{(\\rho/a)}\\hat{z}$, com $C_0$ e $a$ constantes. $i)$ Calcule o campo magnético $B(\\rho,\\phi,z)$; $ii)$ Em que região espacial próxima a qual distribuição de corrente elétrica pode-se observar esse campo magnético?'
		},
		alternatives: [
			{
				text: '$B(\\rho,\\phi,z) = \\frac{C_0}{\\rho}\\hat{\\phi}$; proximidades de um fio retilíneo longo',
				number: QuestionAlternative.A
			},
			{
				text: '$B(\\rho,\\phi,z) = C_0(\\frac{a}{\\rho})\\hat{\\phi}$; proximidades de um fio retilíneo longo',
				number: QuestionAlternative.B
			},
			{
				text: '$B(\\rho,\\phi,z) = \\frac{C_0}{\\rho}\\hat{\\phi}$; ao longo do eixo de uma espira circular',
				number: QuestionAlternative.C
			},
			{
				text: '$B(\\rho,\\phi,z) = C_0(\\frac{a}{\\rho})\\hat{z}$; interior de um solenoide longo',
				number: QuestionAlternative.D
			},
			{
				text: '$B(\\rho,\\phi,z) = C_0\\rho\\hat{z}$; interior de um solenoide longo',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma onda eletromagnética plana propaga-se ao longo da direção $\\hat{z}$ num meio dielétrico, não magnético ($\\mu = \\mu_0$), homogêneo e isotrópico. O campo elétrico da onda é dado, em notação complexa, por $E(z,t) = E_0 \\exp{[i(kz - \\omega t)](\\hat{x} + 3\\hat{y})}$, com $k = 1,8 \\times 10^7 m^{-1}$, $\\omega = 3,6 \\times 10^{15} Hz$ e $E_0$ constante. Calcule:<br/><br/><ul><li>i) a velocidade de fase $v_f$ da onda;</li><li>ii) o índice de refração $n$ do meio dielétrico;</li><li>iii) o campo magnético $B(z,t)$ da onda.</li></ul><br/>A velocidade da luz no vácuo é $c = 3,0 \\times 10^8 m/s$.'
		},
		alternatives: [
			{
				text: '$v_f = 2,0 \\times 10^8 \\space m/s; \\space n = 1,5; \\space B(z,t) = -\\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (3\\hat{x} - \\hat{y})$',
				number: QuestionAlternative.A
			},
			{
				text: '$v_f = 2,0 \\times 10^8 \\space m/s; \\space n = 1,5; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (3\\hat{x} + \\hat{y})$',
				number: QuestionAlternative.B
			},
			{
				text: '$v_f = 5,0 \\times 10^8 \\space m/s; \\space n = 6,0; \\space B(z,t) = -\\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (3\\hat{x} - \\hat{y})$',
				number: QuestionAlternative.C
			},
			{
				text: '$v_f = 5,0 \\times 10^8 \\space m/s; \\space n = 6,0; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (3\\hat{x} + \\hat{y})$',
				number: QuestionAlternative.D
			},
			{
				text: '$v_f = 1,5 \\times 10^8 \\space m/s; \\space n = 2,0; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (\\hat{x} - 3\\hat{y})$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma onda eletromagnética plana propaga-se ao longo da direção $\\hat{z}$ num meio dielétrico, não magnético ($\\mu = \\mu_0$), homogêneo e isotrópico. O campo elétrico da onda é dado, em notação complexa, por $E(z,t) = E_0 \\exp{[i(kz - \\omega t)](2\\hat{x} - \\hat{y})}$, com $k = 1,2 \\times 10^7 m^{-1}$, $\\omega = 3,0 \\times 10^{15} Hz$ e $E_0$ constante. Calcule:<br/><br/><ul><li>i) a velocidade de fase $v_f$ da onda;</li><li>ii) o índice de refração $n$ do meio dielétrico;</li><li>iii) o campo magnético $B(z,t)$ da onda.</li></ul><br/>A velocidade da luz no vácuo é $c = 3,0 \\times 10^8 m/s$.'
		},
		alternatives: [
			{
				text: '$v_f = 2,5 \\times 10^8 \\space m/s; \\space n = 1,2; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (\\hat{x} + 2\\hat{y})$',
				number: QuestionAlternative.A
			},
			{
				text: '$v_f = 2,5 \\times 10^8 \\space m/s; \\space n = 1,2; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (\\hat{x} - 2\\hat{y})$',
				number: QuestionAlternative.B
			},
			{
				text: '$v_f = 4,0 \\times 10^8 \\space m/s; \\space n = 7,5; \\space B(z,t) = -\\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (\\hat{x} + 2\\hat{y})$',
				number: QuestionAlternative.C
			},
			{
				text: '$v_f = 4,0 \\times 10^8 \\space m/s; \\space n = 7,5; \\space B(z,t) = -\\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (\\hat{x} - 2\\hat{y})$',
				number: QuestionAlternative.D
			},
			{
				text: '$v_f = 7,5 \\times 10^8 \\space m/s; \\space n = 4,0; \\space B(z,t) = \\frac{k E_0}{\\omega} \\exp{[i(kz - \\omega t)]} (2\\hat{x} + \\hat{y})$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 8,
		statement: {
			text: 'Uma espira condutora quadrada de lado $D$ encontra-se no interior de um solenoide longo de comprimento $L$ e de secção reta circular de raio $a (a \\ll L)$. O plano da espira é perpendicular ao eixo do solenoide. O número total de voltas do solenoide é $N$ e a corrente elétrica que nele circula é dada por $I(t) = I_0 \\cos{\\omega t}$. Qual é a força eletromotriz $\\varepsilon$ induzida na espira?'
		},
		alternatives: [
			{
				text: '$\\varepsilon = \\frac{\\omega \\mu_0 I_0 N D^2}{L} \\sin{\\omega t}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\varepsilon = \\frac{\\omega \\mu_0 I_0 N D^2}{L} \\cos{\\omega t}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0 I_0 N^2 D^2}{L^2} \\sin{\\omega t}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0 I_0 N (\\pi a^2)}{L} \\cos{\\omega t}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0 I_0 N^2 (\\pi a^2)}{L^2} \\sin{\\omega t}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=kZEsh6R0PG4'
		},
		questionNumber: 8,
		statement: {
			text: 'Uma espira condutora quadrada de lado $C$ encontra-se no interior de um solenoide longo de comprimento $L$ e de secção reta circular de raio $b (b \\ll L)$. O plano da espira é perpendicular ao eixo do solenoide. O número total de voltas do solenoide é $N$ e a corrente elétrica que nele circula é dada por $I(t) = I_0 \\sin{\\omega t}$. Qual é a força eletromotriz $\\varepsilon$ induzida na espira?'
		},
		alternatives: [
			{
				text: '$\\varepsilon = -\\frac{\\omega \\mu_0 I_0 N C^2}{L} \\cos{\\omega t}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\varepsilon = \\frac{\\omega \\mu_0 I_0 N C^2}{L} \\sin{\\omega t}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\varepsilon = -\\frac{\\mu_0 I_0 N^2 C^2}{L^2} \\cos{\\omega t}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0 I_0 N (\\pi b^2)}{L} \\sin{\\omega t}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\varepsilon = -\\frac{\\mu_0 I_0 N^2 (\\pi b^2)}{L^2} \\cos{\\omega t}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma partícula quântica está submetida a um poço de potencial unidimensional $V(x)$ de largura $L$ e profundidade $-V$, representado na figura. O poço é suficientemente profundo para que existam estados ligados. Se $E$ representa um possível auto-valor da energia da partícula, determine se cada afirmativa abaixo é verdadeira (V) ou falsa (F) e indique a alternativa que contém a sequência correta.<br/><br/><ul><li>(  ) $E > 0$ pertence à parte discreta do espectro de energias e $E < 0$ à parte contínua.</li><li>(  ) Se $E < 0$, a função de onda da partícula só pode ser nula para valores discretos de $x$ na região $|x| < L/2$, mas decai exponencialmente a zero com a distância às bordas do poco na região $|x| > L/2$.</li><li>(  ) Se $E < 0$, a função de onda da partícula é estritamente confinada à região $|x| < L/2$, isto é, ela é zero nas bordas e fora do poço.</li><li>(  ) Se $E > 0$, a função de onda da partícula é estendida ao longo de todo o eixo $x$.</li></ul>'
		},
		alternatives: [
			{
				text: 'F, V, F, V',
				number: QuestionAlternative.A
			},
			{
				text: 'F, V, F, F',
				number: QuestionAlternative.B
			},
			{
				text: 'V, F, V, F',
				number: QuestionAlternative.C
			},
			{
				text: 'V, F, V, V',
				number: QuestionAlternative.D
			},
			{
				text: 'V, F, F, V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma partícula quântica está submetida a um poço de potencial unidimensional $V(x)$ de largura $L$ e profundidade $-V$, representado na figura. O poço é suficientemente profundo para que existam estados ligados. Se $E$ representa um possível auto-valor da energia da partícula, determine se cada afirmativa abaixo é verdadeira (V) ou falsa (F) e indique a alternativa que contém a sequência correta.<br/><br/><ul><li>(  ) $E < 0$ pertence à parte discreta do espectro de energias e $E > 0$ à parte contínua.</li><li>(  ) Se $E > 0$, a função de onda da partícula é estendida ao longo de todo o eixo $x$.</li><li>(  ) Se $E < 0$, a função de onda da partícula é estritamente confinada à região $|x| < L/2$, isto é, ela é zero nas bordas e fora do poço.</li><li>(  ) Se $E < 0$, a função de onda da partícula só pode ser nula para valores discretos de $x$ na região $|x| < L/2$, mas decai exponencialmente a zero com a distância às bordas do poço na região $|x| > L/2$</li></ul>'
		},
		alternatives: [
			{
				text: 'V, V, F, V',
				number: QuestionAlternative.A
			},
			{
				text: 'V, F, F, V',
				number: QuestionAlternative.B
			},
			{
				text: 'F, F, V, F',
				number: QuestionAlternative.C
			},
			{
				text: 'F, F, V, V',
				number: QuestionAlternative.D
			},
			{
				text: 'F, V, F, V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 2,
		statement: {
			text: 'Sejam ${\\ket{A},\\ket{B}}$ e ${\\ket{1},\\ket{2}}$ duas bases ortonormais do espaço de estados bidimensional de um sistema quântico, com a seguinte transformação entre as bases: $\\ket{A} = [\\ket{1} + \\ket{2}]/\\sqrt{2}$ e $\\ket{B} = [-\\ket{1} + \\ket{2}]/\\sqrt{2}$. Supondo que, em um dado instante, o sistema esteja no estado <strong>normalizado</strong> $\\ket{\\Psi} = a\\ket{A} + b\\ket{B}$, onde $a$ e $b$ são números reais, as probabilidades de que o sistema se encontre nos estados $\\ket{A}$, $\\ket{B}$, $\\ket{1}$ e $\\ket{2}$ neste instante são, respectivamente:'
		},
		alternatives: [
			{
				text: '$a^2$, $b^2$, $1/2 - ab$, e $1/2 + ab$',
				number: QuestionAlternative.A
			},
			{
				text: '$a^2$, $b^2$, $1/2 + ab$, e $1/2 + ab$',
				number: QuestionAlternative.B
			},
			{
				text: '$a^2$, $b^2$, $-ab$, e $+ab$',
				number: QuestionAlternative.C
			},
			{
				text: '$a^2 + b^2$, $a^2 + b^2$, $1/2 - ab$, e $1/2 + ab$',
				number: QuestionAlternative.D
			},
			{
				text: '$a^2$, $b^2$, $1/2$, e $1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 2,
		statement: {
			text: 'Sejam ${\\ket{C},\\ket{D}}$ e ${\\ket{1},\\ket{2}}$ duas bases ortonormais do espaço de estados bidimensional de um sistema quântico, com a seguinte transformação entre as bases: $\\ket{C} = [\\ket{1} + \\ket{2}]/\\sqrt{2}$ e $\\ket{D} = [-\\ket{1} + \\ket{2}]/\\sqrt{2}$. Supondo que, em um dado instante, o sistema esteja no estado <strong>normalizado</strong> $\\ket{\\Psi} = c\\ket{C} + d\\ket{D}$, onde $c$ e $d$ são números reais, as probabilidades de que o sistema se encontre nos estados $\\ket{C}$, $\\ket{D}$, $\\ket{1}$ e $\\ket{2}$ neste instante são, respectivamente:'
		},
		alternatives: [
			{
				text: '$c^2$, $d^2$, $1/2 - cd$, e $1/2 + cd$',
				number: QuestionAlternative.A
			},
			{
				text: '$c^2$, $d^2$, $1/2 + cd$, e $1/2 + cd$',
				number: QuestionAlternative.B
			},
			{
				text: '$c^2$, $d^2$, $-cd$, e $+cd$',
				number: QuestionAlternative.C
			},
			{
				text: '$c^2 + d^2$, $c^2 + d^2$, $1/2 - cd$, e $1/2 + cd$',
				number: QuestionAlternative.D
			},
			{
				text: '$c^2$, $d^2$, $1/2$, e $1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 3,
		statement: {
			text: 'Seja $\\ket{n}$ $(n = 0, 1, 2, ...)$ o $n$-ésimo autoestado de energia de um oscilador harmônico e $H$ o respectivo operador Hamiltoniano, tal que $H\\ket{n} = \\hbar\\omega(n + 1/2)\\ket{n}$, onde $\\omega$ é a frequência característica do oscilador. Sabendo que o valor esperado da energia do oscilador é, num certo instante, $1,5\\hbar\\omega$, determine se cada afirmativa abaixo é verdadeira (V) ou falsa (F) e indique a alternativa que contém a sequência correta.<br/><br/><ul><li>(  ) O oscilador pode estar no autoestado com $n = 1$.</li><li>(  ) O oscilador está, com certeza, no autoestado com $n = 1$.</li><li>(  ) O oscilador pode estar no estado $(1/\\sqrt{2})\\ket{0} + (1/\\sqrt{2})\\ket{2}$.</li><li>(  ) O oscilador está no estado fundamental.</li></ul>'
		},
		alternatives: [
			{
				text: 'V,F,V,F',
				number: QuestionAlternative.A
			},
			{
				text: 'V,F,F,F',
				number: QuestionAlternative.B
			},
			{
				text: 'F,V,F,F',
				number: QuestionAlternative.C
			},
			{
				text: 'V,V,V,F',
				number: QuestionAlternative.D
			},
			{
				text: 'F,F,F,V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 3,
		statement: {
			text: 'Seja $\\ket{n}$ $(n = 0, 1, 2, ...)$ o $n$-ésimo autoestado de energia de um oscilador harmônico e $H$ o respectivo operador Hamiltoniano, tal que $H\\ket{n} = \\hbar\\omega(n + 1/2)\\ket{n}$, onde $\\omega$ é a frequência característica do oscilador. Sabendo que o valor esperado da energia do oscilador é, num certo instante, $1,5\\hbar\\omega$, determine se cada afirmativa abaixo é verdadeira (V) ou falsa (F) e indique a alternativa que contém a sequência correta.<br/><br/><ul><li>(  ) O oscilador não pode estar no autoestado com $n = 1$.</li><li>(  ) O oscilador está, com certeza, no autoestado com $n = 1$.</li><li>(  ) O oscilador pode estar no estado $(1/\\sqrt{2})\\ket{0} + (1/\\sqrt{2})\\ket{2}$.</li><li>(  ) O oscilador não está no estado fundamental.</li></ul>'
		},
		alternatives: [
			{
				text: 'F,F,V,V',
				number: QuestionAlternative.A
			},
			{
				text: 'V,F,V,V',
				number: QuestionAlternative.B
			},
			{
				text: 'F,F,V,F',
				number: QuestionAlternative.C
			},
			{
				text: 'F,F,F,V',
				number: QuestionAlternative.D
			},
			{
				text: 'V,V,V,F',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 4,
		statement: {
			text: 'As matrizes $S_{\\alpha}$ $(\\alpha = x,y,z)$, que representam as componentes do operador de spin $S$ de uma partícula de spin $1/2$, são dadas, na representação em que $S_z$ é diagonal, por $S_{\\alpha} = (\\hbar/2)\\sigma_{\\alpha}$, onde $\\sigma_{\\alpha}$ são as matrizes de Pauli, dadas no Formulário. Suponha que uma partícula de spin $1/2$ esteja submetida a um campo magnético constante e uniforme que aponta na direção $z$. O estado de spin da partícula, como função do tempo $t$, na mesma representação, é<br/><br/>$$\\frac{1}{2} \\left(\\begin{matrix}e^{i \\omega t / 2} \\\\ \\sqrt{3}e^{-i \\omega t / 2}\\end{matrix}\\right) \\space \\text{,}$$<br/>onde $\\omega$ é proporcional ao campo magnético. Obtendo os valores esperados das componentes $x$ e $z$ do spin, $\\langle S_x \\rangle$ e $\\langle S_z \\rangle$, respectivamente, identifique a opção correta dentre as afirmativas abaixo.'
		},
		alternatives: [
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno da direção do campo magnético, mantendo um ângulo constante com essa direção, isto é, com $\\langle S_z \\rangle$ constante.',
				number: QuestionAlternative.A
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno do eixo $x$, mantendo um ângulo constante com a direção $x$, isto é, com $\\langle S_x \\rangle$ constante.',
				number: QuestionAlternative.B
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno da direção do campo magnético, com $\\langle S_z \\rangle$ oscilando entre $-\\hbar/2$ e $+\\hbar/2$.',
				number: QuestionAlternative.C
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, é independente do tempo e tem módulo $+\\hbar/2$ ao longo da direção do campo magnético.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, é independente do tempo e tem módulo $+\\hbar/2$ ao longo do eixo $x$.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 4,
		statement: {
			text: 'As matrizes $S_{\\alpha}$ $(\\alpha = x,y,z)$, que representam as componentes do operador de spin $S$ de uma partícula de spin $1/2$, são dadas, na representação em que $S_z$ é diagonal, por $S_{\\alpha} = (\\hbar/2)\\sigma_{\\alpha}$, onde $\\sigma_{\\alpha}$ são as matrizes de Pauli, dadas no Formulário. Suponha que uma partícula de spin $1/2$ esteja submetida a um campo magnético constante e uniforme que aponta na direção $z$. O estado de spin da partícula, como função do tempo $t$, na mesma representação, é<br/><br/>$$\\frac{1}{2} \\left(\\begin{matrix}e^{i \\omega t / 2} \\\\ \\sqrt{3}e^{-i \\omega t / 2}\\end{matrix}\\right) \\space \\text{,}$$<br/>onde $\\omega$ é proporcional ao campo magnético. Obtendo os valores esperados das componentes $y$ e $z$ do spin, $\\langle S_y \\rangle$ e $\\langle S_z \\rangle$, respectivamente, identifique a opção correta dentre as afirmativas abaixo.'
		},
		alternatives: [
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno da direção do campo magnético, mantendo um ângulo constante com essa direção, isto é, com $\\langle S_z \\rangle$ constante.',
				number: QuestionAlternative.A
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno do eixo $y$, mantendo um ângulo constante com a direção $y$, isto é, com $\\langle S_y \\rangle$ constante.',
				number: QuestionAlternative.B
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, precessiona em torno da direção do campo magnético, com $\\langle S_z \\rangle$ oscilando entre $-\\hbar/2$ e $+\\hbar/2$.',
				number: QuestionAlternative.C
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, é independente do tempo e tem módulo $+\\hbar/2$ ao longo da direção do campo magnético.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor esperado do spin, $\\langle S \\rangle$, é independente do tempo e tem módulo $+\\hbar/2$ ao longo do eixo $y$.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 5,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de estados é bidimensional. Seja ${\\ket{1}, \\ket{2}}$ uma base ortonormal nesse espaço, nessa ordem. Um observável $\\hat{O}$ é representado nessa base pela matriz<br/><br/>$$O = s \\left(\\begin{matrix}0 & 2 \\\\ 2 & 0\\end{matrix}\\right)$$<br/>onde $s$ é uma constante. Se, em um certo instante, o sistema se encontra no estado $\\ket{\\psi} = \\sqrt{\\frac{1}{2}}(\\ket{1} - \\ket{2})$, os possíveis resultados de uma medida desse observável são:'
		},
		alternatives: [
			{
				text: '$-2s$ com probabilidade $1$.',
				number: QuestionAlternative.A
			},
			{
				text: '$-2s$ com probabilidade $1/2$ e $2s$ com probabilidade $1/2$.',
				number: QuestionAlternative.B
			},
			{
				text: '$-2s$ com probabilidade $2/3$ e $2s$ com probabilidade $1/3$.',
				number: QuestionAlternative.C
			},
			{
				text: '$2s$ com probabilidade $1$.',
				number: QuestionAlternative.D
			},
			{
				text: '$-2s$ com probabilidade $3/4$ e $2s$ com probabilidade $1/4$.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 5,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de estados é bidimensional. Seja ${\\ket{1}, \\ket{2}}$ uma base ortonormal nesse espaço, nessa ordem. Um observável $\\hat{O}$ é representado nessa base pela matriz<br/><br/>$$O = s \\left(\\begin{matrix}0 & 2 \\\\ 2 & 0\\end{matrix}\\right)$$<br/>onde $s$ é uma constante. Se, em um certo instante, o sistema se encontra no estado $\\ket{\\psi} = \\sqrt{\\frac{1}{2}}(\\ket{1} + \\ket{2})$, os possíveis resultados de uma medida desse observável são:'
		},
		alternatives: [
			{
				text: '$2s$ com probabilidade $1$.',
				number: QuestionAlternative.A
			},
			{
				text: '$2s$ com probabilidade $1/2$ e $-2s$ com probabilidade $1/2$.',
				number: QuestionAlternative.B
			},
			{
				text: '$2s$ com probabilidade $2/3$ e $-2s$ com probabilidade $1/3$.',
				number: QuestionAlternative.C
			},
			{
				text: '$-2s$ com probabilidade $1$.',
				number: QuestionAlternative.D
			},
			{
				text: '$2s$ com probabilidade $3/4$ e $-2s$ com probabilidade $1/4$.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ move-se em uma dimensão sob a ação de um potencial $V(x)$. Esse potencial é do tipo caixa, sendo zero no intervalo $-a/2 \\leq x \\leq a/2$ e infinito fora dele. A função de onda dessa partícula é<br/><br/>$$\\psi (x,t) = \\begin{cases}N \\sin{(\\frac{2\\pi x}{a})} e^{-iEt/\\hbar}, & -a/2 \\leq x \\leq a/2 \\\\ 0, & |x| \\gt a/2\\end{cases}$$<br/>Aqui, $x$ é a posição da partícula, $E$ é a energia da partícula, $t$ é o tempo e $N$ é uma constante de normalização da função de onda. Quais são os valores de $N$ e $E$?'
		},
		alternatives: [
			{
				text: '$N = \\sqrt{2/a}$ e $E = 2\\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$N = 2/a$ e $E = 2\\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$N = \\sqrt{2/a}$ e $E = \\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$N = 2/\\sqrt{a}$ e $E = \\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$N = \\sqrt{2/a}$ e $E = \\hbar^2\\pi^2 / 2ma^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ move-se em uma dimensão sob a ação de um potencial $V(x)$. Esse potencial é do tipo caixa, sendo zero no intervalo $-a/2 \\leq x \\leq a/2$ e infinito fora dele. A função de onda dessa partícula é<br/><br/>$$\\psi (x,t) = \\begin{cases}N \\cos{(\\frac{\\pi x}{a})} e^{-iEt/\\hbar}, & -a/2 \\leq x \\leq a/2 \\\\ 0, & |x| \\gt a/2\\end{cases}$$<br/>Aqui, $x$ é a posição da partícula, $E$ é a energia da partícula, $t$ é o tempo e $N$ é uma constante de normalização da função de onda. Quais são os valores de $N$ e $E$?'
		},
		alternatives: [
			{
				text: '$N = \\sqrt{2/a}$ e $E = \\hbar^2\\pi^2 / 2ma^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$N = 2/a$ e $E = \\hbar^2\\pi^2 / 2ma^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$N = \\sqrt{2/a}$ e $E = \\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$N = 2/\\sqrt{a}$ e $E = 2\\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$N = \\sqrt{2/a}$ e $E = 2\\hbar^2\\pi^2 / ma^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 7,
		statement: {
			text: 'Supondo que seja possível determinar que o módulo do momento angular orbital do elétron em um átomo de hidrogênio, em um dado instante de tempo, seja $L = \\sqrt{2}\\hbar$, quais seriam os resultados possíveis de uma medição imediatamente posterior de $L_z$, a componente $z$ de $\\vec{L}$?'
		},
		alternatives: [
			{
				text: '$-\\hbar, 0, \\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$0, \\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$0, \\hbar, 2\\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$-2\\hbar, -\\hbar, 0, \\hbar, 2\\hbar$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 7,
		statement: {
			text: 'Supondo que seja possível determinar que o módulo do momento angular orbital do elétron em um átomo de hidrogênio, em um dado instante de tempo, seja $L = \\sqrt{6}\\hbar$, quais seriam os resultados possíveis de uma medição imediatamente posterior de $L_z$, a componente $z$ de $\\vec{L}$?'
		},
		alternatives: [
			{
				text: '$-2\\hbar, -\\hbar, 0, \\hbar, 2\\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$0, 3\\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$0, \\hbar, 2\\hbar, 3\\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$-\\hbar, 0, \\hbar$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de estados é tridimensional. Seja ${\\ket{a}, \\ket{b}, \\ket{c}}$ uma base ortonormal nesse espaço. O Hamiltoniano do sistema é<br/><br/>$$H = \\hbar\\omega (\\ket{a}\\bra{a} - \\ket{b}\\bra{b} + 2\\ket{c}\\bra{c}) \\text{.}$$<br/>Suponha que, no tempo $t = 0$, o sistema se encontre no seguinte estado<br/><br/>$$\\ket{\\psi (0)} = \\frac{1}{\\sqrt{3}}\\ket{a} + \\frac{1}{\\sqrt{3}}\\ket{b} + \\frac{1}{\\sqrt{3}}\\ket{c}$$<br/>O estado do sistema em um tempo $t \\gt 0$ será:'
		},
		alternatives: [
			{
				text: '$\\ket{\\psi (t)} = (e^{-i \\omega t}\\ket{a} + e^{i \\omega t}\\ket{b} + e^{-2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} + e^{-i \\omega t}\\ket{b} + e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{-i \\omega t}\\ket{a} - e^{i \\omega t}\\ket{b} + e^{-2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} - e^{-i \\omega t}\\ket{b} + e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} - e^{i \\omega t}\\ket{b} + e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2e97Hjyvazs'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de estados é tridimensional. Seja ${\\ket{a}, \\ket{b}, \\ket{c}}$ uma base ortonormal nesse espaço. O Hamiltoniano do sistema é<br/><br/>$$H = \\hbar\\omega (\\ket{a}\\bra{a} + 2\\ket{b}\\bra{b} - 2\\ket{c}\\bra{c}) \\text{.}$$<br/>Suponha que, no tempo $t = 0$, o sistema se encontre no seguinte estado<br/><br/>$$\\ket{\\psi (0)} = \\frac{1}{\\sqrt{3}}\\ket{a} + \\frac{1}{\\sqrt{3}}\\ket{b} + \\frac{1}{\\sqrt{3}}\\ket{c}$$<br/>O estado do sistema em um tempo $t \\gt 0$ será:'
		},
		alternatives: [
			{
				text: '$\\ket{\\psi (t)} = (e^{-i \\omega t}\\ket{a} + e^{-2i \\omega t}\\ket{b} + e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} + e^{2i \\omega t}\\ket{b} + e^{-2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{-i \\omega t}\\ket{a} + e^{-2i \\omega t}\\ket{b} - e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} + e^{2i \\omega t}\\ket{b} - e^{-2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\ket{\\psi (t)} = (e^{i \\omega t}\\ket{a} + e^{2i \\omega t}\\ket{b} - e^{2i \\omega t}\\ket{c}) / \\sqrt{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 1,
		statement: {
			text: 'A figura ilustra um circuito $RC$ no vácuo conectado a uma bateria de diferença de potencial $V$. Sobre uma das placas do capacitor metálico (anodo) incide um feixe de luz gerado por uma fonte que emite uma taxa constante de $N$ fótons por segundo de frequência fixa. Considere dois valores distintos de frequências $f1 \\gt f_2$, tais que as energias desses fótons são, respectivamente, maior e menor que a função trabalho do anodo. Qual dos gráficos abaixo melhor representa o valor da corrente estacionária $I$ atravessando o amperímetro como função de $V$?',
			image: '2024-2/fm-1a.webp'
		},
		alternatives: [
			{
				image: '2024-2/fm-1a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/fm-1a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/fm-1a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/fm-1a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/fm-1a-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 1,
		statement: {
			text: "A figura ilustra um circuito $RC$ no vácuo conectado a uma bateria de diferença de potencial $V$. Sobre uma das placas do capacitor metálico (anodo) incide um feixe de luz gerado por uma fonte que emite uma taxa constante de $N$ fótons por segundo de frequência fixa. Considere dois valores distintos de frequências $f1 \\gt f_2$, tais que as energias desses fótons são, respectivamente, maior e menor que a função trabalho do anodo. Qual dos gráficos abaixo melhor representa o valor da diferença de potencial $V'$ no voltímetro como função de $V$?",
			image: '2024-2/fm-1b.webp'
		},
		alternatives: [
			{
				image: '2024-2/fm-1b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/fm-1b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/fm-1b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/fm-1b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/fm-1b-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma bomba de massa de repouso m explode e se fragmenta em três pedaços cujas massas de repouso são $m_1 = \\frac{1}{4}m$, $m_2 = \\frac{4}{9}m$ e $m_3 = \\frac{11}{36}m$. As velocidades dos fragmentos 1 e 2 no referencial da bomba imediatamente após a explosão são iguais a $V_1 = \\frac{4}{5}c\\hat{x}$ e $V_2 = -\\frac{3}{5}c\\hat{x}$, respectivamente, onde $c$ é a velocidade da luz no vácuo. Qual é a velocidade do terceiro fragmento?'
		},
		alternatives: [
			{
				text: '$V_3 = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_3 = -\\frac{12}{55}c\\hat{x}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_3 = \\frac{12}{55}c\\hat{x}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V_3 = -\\frac{2}{5}c\\hat{x}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_3 = \\frac{1}{5}c\\hat{x}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma bomba de massa de repouso m explode e se fragmenta em três pedaços cujas massas de repouso são $m_1 = \\frac{5}{9}m$, $m_2 = \\frac{5}{16}m$ e $m_3 = \\frac{19}{144}m$. As velocidades dos fragmentos 1 e 2 no referencial da bomba imediatamente após a explosão são iguais a $V_1 = \\frac{3}{5}c\\hat{x}$ e $V_2 = -\\frac{4}{5}c\\hat{x}$, respectivamente, onde $c$ é a velocidade da luz no vácuo. Qual é a velocidade do terceiro fragmento?'
		},
		alternatives: [
			{
				text: '$V_3 = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_3 = -\\frac{12}{19}c\\hat{x}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_3 = \\frac{12}{19}c\\hat{x}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V_3 = -\\frac{2}{5}c\\hat{x}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_3 = \\frac{1}{5}c\\hat{x}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 3,
		statement: {
			text: 'Um conjunto de partículas não interagentes estão confinadas em um potencial do tipo oscilador harmônico isotrópico. O sistema que as contém é então excitado e mede-se a luz emitida proveniente. O espectro da radiação emitida pelas partículas confinadas difere de um espectro contínuo apenas por um certo conjunto discreto de frequências características. Qual das figuras abaixo melhor ilustra o espectro de emissão em função do <strong>comprimento de onda</strong> da luz correspondente?'
		},
		alternatives: [
			{
				image: '2024-2/fm-3a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/fm-3a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/fm-3a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/fm-3a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/fm-3a-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 3,
		statement: {
			text: 'Um conjunto de partículas não interagentes estão confinadas em um potencial do tipo oscilador harmônico isotrópico. O sistema que as contém é então iluminado e mede-se a luz transmitida. O espectro da radiação absorvida pelas partículas confinadas difere de um espectro contínuo apenas por um certo conjunto discreto de frequências características. Qual das figuras abaixo melhor ilustra o espectro de absorção em função do <strong>comprimento de onda</strong> da luz correspondente?'
		},
		alternatives: [
			{
				image: '2024-2/fm-3b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2024-2/fm-3b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2024-2/fm-3b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2024-2/fm-3b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2024-2/fm-3b-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 4,
		statement: {
			text: 'Em uma sauna, a temperatura do ambiente é de $45°C$. Qual é a ordem de grandeza da potência de calor absorvida por irradiação por uma pessoa cuja área superficial é de $2,1 m^2$? Considere o ambiente e a pessoa como corpos negros perfeitos.'
		},
		alternatives: [
			{
				text: '$10^3 W$',
				number: QuestionAlternative.A
			},
			{
				text: '$10^2 W$',
				number: QuestionAlternative.B
			},
			{
				text: '$10^1 W$',
				number: QuestionAlternative.C
			},
			{
				text: '$10^0 W$',
				number: QuestionAlternative.D
			},
			{
				text: '$10^{-1} W$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 4,
		statement: {
			text: 'Em uma sauna, a temperatura do ambiente é de $47°C$. Qual é a ordem de grandeza da potência de calor absorvida por irradiação por uma pessoa cuja área superficial é de $1,9 m^2$? Considere o ambiente e a pessoa como corpos negros perfeitos.'
		},
		alternatives: [
			{
				text: '$10^3 W$',
				number: QuestionAlternative.A
			},
			{
				text: '$10^2 W$',
				number: QuestionAlternative.B
			},
			{
				text: '$10^1 W$',
				number: QuestionAlternative.C
			},
			{
				text: '$10^0 W$',
				number: QuestionAlternative.D
			},
			{
				text: '$10^{-1} W$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 5,
		statement: {
			text: "Para um observador no referencial $S$, duas bombas nas posições $x = -a$ e $x = +a$ no eixo $x$ explodem no mesmo instante. Um observador $S'$, por sua vez, move-se ao longo do eixo $x$ de $S$ com velocidade constante $v$ na direção de $x$ crescente. Indique a alternativa correta sobre as seguintes observações de $S'$:<br/><br/><ul><li>I. O intervalo de tempo entre as explosões depende da posição de $S'$.</li><li>II. A distância entre as bombas é $2a/\\sqrt{1 - v^2/c^2}$, onde $c$ é a velocidade da luz.</li><li>III. A bomba em $x = +a$ explode antes da bomba em $x = -a$.</li></ul>"
		},
		alternatives: [
			{
				text: 'Apenas a afirmação III está correta',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas as afirmações II e III estão corretas',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação I está correta',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação II está correta',
				number: QuestionAlternative.D
			},
			{
				text: 'As afirmações I e II estão corretas',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 5,
		statement: {
			text: "Para um observador no referencial $S$, duas bombas nas posições $x = -a$ e $x = +a$ no eixo $x$ explodem no mesmo instante. Um observador $S'$, por sua vez, move-se ao longo do eixo $x$ de $S$ com velocidade constante $v$ na direção de $x$ crescente. Indique a alternativa correta sobre as seguintes observações de $S'$:<br/><br/><ul><li>I. O intervalo de tempo entre as explosões depende da posição de $S'$.</li><li>II. A distância entre as bombas é $2a\\sqrt{1 - v^2/c^2}$, onde $c$ é a velocidade da luz.</li><li>III. A bomba em $x = +a$ explode antes da bomba em $x = -a$.</li></ul>"
		},
		alternatives: [
			{
				text: 'Apenas as afirmações II e III estão corretas',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I está correta',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação II está correta',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a afirmação II está correta',
				number: QuestionAlternative.D
			},
			{
				text: 'As afirmações I, II e III estão corretas',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 6,
		statement: {
			text: 'Radiação eletromagnética com comprimento de onda de $3$ pm incide em elétrons estacionários. A interação da radiação com um dos elétrons resulta em um fóton espalhado que é detectado a $60°$ da direção da radiação incidente. Qual foi, aproximadamente, a energia transferida para o elétron?<br/>(Observação: considere $h/mc = 2$ pm, onde $h$ é a constante de Planck, $m$ é a massa do elétron e $c$ é a velocidade da luz no vácuo.)'
		},
		alternatives: [
			{
				text: '$100$ keV',
				number: QuestionAlternative.A
			},
			{
				text: '$10$ keV',
				number: QuestionAlternative.B
			},
			{
				text: '$50$ keV',
				number: QuestionAlternative.C
			},
			{
				text: '$70$ keV',
				number: QuestionAlternative.D
			},
			{
				text: '$300$ keV',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 6,
		statement: {
			text: 'Radiação eletromagnética com comprimento de onda de $2$ pm incide em elétrons estacionários. A interação da radiação com um dos elétrons resulta em um fóton espalhado que é detectado a $60°$ da direção da radiação incidente. Qual foi, aproximadamente, a energia transferida para o elétron?<br/>(Observação: considere $h/mc = 2$ pm, onde $h$ é a constante de Planck, $m$ é a massa do elétron e $c$ é a velocidade da luz no vácuo.)'
		},
		alternatives: [
			{
				text: '$200$ keV',
				number: QuestionAlternative.A
			},
			{
				text: '$10$ keV',
				number: QuestionAlternative.B
			},
			{
				text: '$50$ keV',
				number: QuestionAlternative.C
			},
			{
				text: '$70$ keV',
				number: QuestionAlternative.D
			},
			{
				text: '$300$ keV',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 7,
		statement: {
			text: 'De acordo com o modelo de Bohr, qual é a razão entre os raios da primeira órbita do elétron em um átomo de hidrogênio, $r_H$, e em um íon de hélio simplesmente ionizado, $r_{He^{+}}$, ou seja, $r_H/r_{He^{+}}$?<br/>(Observação: o número atômico do hélio é 2)'
		},
		alternatives: [
			{
				text: '$2$',
				number: QuestionAlternative.A
			},
			{
				text: '$1$',
				number: QuestionAlternative.B
			},
			{
				text: '$4$',
				number: QuestionAlternative.C
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 7,
		statement: {
			text: 'De acordo com o modelo de Bohr, qual é a razão entre os raios da primeira órbita do elétron em um íon de hélio simplesmente ionizado, $r_{He^{+}}$, e em um átomo de hidrogênio, $r_H$, ou seja, $r_{He^{+}}/r_H$?<br/>(Observação: o número atômico do hélio é 2)'
		},
		alternatives: [
			{
				text: '$1/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$1$',
				number: QuestionAlternative.B
			},
			{
				text: '$4$',
				number: QuestionAlternative.C
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 8,
		statement: {
			text: 'Um fóton de comprimento de onda de $121,6$ nm é emitido por um átomo de hidrogênio. As energias do átomo de hidrogênio são dadas por $E_n = -13,6 \\space eV/n^2$, onde $n$ é o número quântico principal do estado em que o elétron se encontra. Qual é o valor de $n$ do estado em que o elétron se encontrava antes da emissão do fóton?'
		},
		alternatives: [
			{
				text: '$2$',
				number: QuestionAlternative.A
			},
			{
				text: '$3$',
				number: QuestionAlternative.B
			},
			{
				text: '$4$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$5$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 8,
		statement: {
			text: 'Um fóton com um comprimento de onda de $102,6$ nm é emitido por um átomo de hidrogênio. As energias do átomo de hidrogênio são dadas por $E_n = -13,6 \\space eV/n^2$, onde $n$ é o número quântico principal do estado em que o elétron se encontra. Qual é o valor de $n$ do estado em que o elétron se encontrava antes da emissão do fóton?'
		},
		alternatives: [
			{
				text: '$3$',
				number: QuestionAlternative.A
			},
			{
				text: '$2$',
				number: QuestionAlternative.B
			},
			{
				text: '$4$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$5$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um mol de um gás ideal, cuja capacidade térmica a volume constante é $C_v$, inicialmente em equilíbrio térmico à temperatura $T_0$. O gás é colocado em contato com um reservatório térmico a uma temperatura $T_R = T_0/2$, estando isolado o sistema formado pelo gás mais o reservatório térmico. Após o contato, por meio de um processo em que não há troca de matéria nem variação de volume, o sistema evolui para um novo estado de equilíbrio. A variação total de entropia nesse processo é:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = C_v (1 - \\ln{2})$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = C_v$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = C_v \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = C_v (1 + \\ln{2})$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um mol de um gás ideal, cuja capacidade térmica a volume constante é $C_v$, inicialmente em equilíbrio térmico à temperatura $T_0$. O gás é colocado em contato com um reservatório térmico a uma temperatura $T_R = 2T_0$, estando isolado o sistema formado pelo gás mais o reservatório térmico. Após o contato, por meio de um processo em que não há troca de matéria nem variação de volume, o sistema evolui para um novo estado de equilíbrio. A variação total de entropia nesse processo é:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = C_v (\\ln{2} - \\frac{1}{2})$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = \\frac{C_v}{2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = C_v \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = C_v (\\ln{2} + \\frac{1}{2})$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 2,
		statement: {
			text: 'Um certo gás real ocupa um recipiente com paredes adiabáticas a uma temperatura $T_0$ com volume molar $v_0$. Uma descrição aproximada é tratá-lo como um gás de van der Waals, cuja energia interna por mol é dada por<br/><br/>$$u = RcT - \\frac{a}{v} \\space\\text{,}$$<br/>onde $R$, $a$ e $c$ são constantes. O gás realiza uma expansão livre entre os volumes molares $v_0$ e $v_f = 2v_0$, atingindo dessa forma a temperatura final $T_f$. O trabalho $W$ realizado pelo gás neste processo e a temperatura final $T_f$ são:'
		},
		alternatives: [
			{
				text: '$W = 0$ e $T_f = T_0 - \\frac{a}{2v_0 Rc}$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = 0$ e $T_f = T_0 + \\frac{a}{2v_0 Rc}$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = RT \\ln{(\\frac{2v_0 - b}{v_0 - b})} + \\frac{a}{2v_0}$ e $T_f = T_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 0$ e $T_f = T_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = RT \\ln{(\\frac{2v_0 - b}{v_0 - b})} + \\frac{a}{2v_0}$ e $T_f = T_0 - \\frac{a}{2v_0 Rc}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 2,
		statement: {
			text: 'Um certo gás real ocupa um recipiente com paredes adiabáticas a uma temperatura $T_0$ com volume molar $v_0$. Uma descrição aproximada é tratá-lo como um gás de van der Waals, cuja energia interna por mol é dada por<br/><br/>$$u = RcT - \\frac{a}{v} \\space\\text{,}$$<br/>onde $R$, $a$ e $c$ são constantes. O gás realiza uma expansão livre entre os volumes molares $v_0$ e $v_f = 3v_0$, atingindo dessa forma a temperatura final $T_f$. O trabalho $W$ realizado pelo gás neste processo e a temperatura final $I_f$ são:'
		},
		alternatives: [
			{
				text: '$W = 0$ e $T_f = T_0 - \\frac{2a}{3v_0 Rc}$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = 0$ e $T_f = T_0 + \\frac{2a}{3v_0 Rc}$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = RT \\ln{(\\frac{3v_0 - b}{v_0 - b})} + \\frac{2a}{3v_0}$ e $T_f = T_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 0$ e $T_f = T_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = RT \\ln{(\\frac{3v_0 - b}{v_0 - b})} + \\frac{2a}{3v_0}$ e $T_f = T_0 - \\frac{2a}{3v_0 Rc}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico ($C_V = \\frac{3R}{2}$) que realiza um processo cíclico quase-estático A-B-C-A, conforme ilustra a figura. A etapa A-B é isocórica, a etapa B-C é isotérmica e a etapa C-A é isobárica. O trabalho realizado pelo gás ao longo do ciclo é:',
			image: '2024-2/te-3a.webp'
		},
		alternatives: [
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{4} - 1)$',
				number: QuestionAlternative.A
			},
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{4} + 1)$',
				number: QuestionAlternative.B
			},
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{4} - 2)$',
				number: QuestionAlternative.C
			},
			{
				text: '$W_{ciclo} = P_0 V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$W_{ciclo} = -P_0 V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico ($C_V = \\frac{3R}{2}$) que realiza um processo cíclico quase-estático A-B-C-A, conforme ilustra a figura. A etapa A-B é isocórica, a etapa B-C é isotérmica e a etapa C-A é isobárica. O trabalho realizado pelo gás ao longo do ciclo é:',
			image: '2024-2/te-3b.webp'
		},
		alternatives: [
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{27} - 2)$',
				number: QuestionAlternative.A
			},
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{27} + 2)$',
				number: QuestionAlternative.B
			},
			{
				text: '$W_{ciclo} = P_0 V_0 (\\ln{9} - 2)$',
				number: QuestionAlternative.C
			},
			{
				text: '$W_{ciclo} = 2P_0 V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$W_{ciclo} = -2P_0 V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere um certo gás realizando um processo de compressão adiabática quase-estática (em que não há trocas de calor) indo de uma pressão inicial $P_0$ a uma pressão final $P_f \\gt P_0$. Se $N,V$ são o número de mols e volume, respectivamente, e $S$, $U$, $F$ e $H$ os potenciais termodinâmicos entropia, energia interna, energia livre de Helmholtz e entalpia, respectivamente, a quantidade física que caracteriza a variação de temperatura ao longo deste processo é dada por:'
		},
		alternatives: [
			{
				text: '$(\\frac{\\partial T}{\\partial P})_{S,N}$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\frac{\\partial T}{\\partial P})_{V,N}$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{\\partial T}{\\partial P})_{U,N}$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\frac{\\partial T}{\\partial P})_{F,N}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{\\partial T}{\\partial P})_{H,N}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=4Q4b4BLyMAU'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere um certo gás realizando um processo de expansão adiabática quase-estática (em que não há trocas de calor) indo de um volume inicial $V_0$ a um volume final $V_f \\gt V_0$. Se $N,P$ são o número de mols e pressão, respectivamente, e $S$, $U$, $F$ e $H$ os potenciais termodinâmicos entropia, energia interna, energia livre de Helmholtz e entalpia, respectivamente, a quantidade física que caracteriza a variação de temperatura ao longo deste processo é dada por:'
		},
		alternatives: [
			{
				text: '$(\\frac{\\partial T}{\\partial V})_{S,N}$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\frac{\\partial T}{\\partial V})_{P,N}$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{\\partial T}{\\partial V})_{U,N}$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\frac{\\partial T}{\\partial V})_{F,N}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{\\partial T}{\\partial V})_{H,N}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 1,
		statement: {
			text: 'O ruído "flicker" ocorre em dispositivos semicon-dutores, como transistores CMOS (Complementary Metal-Oxide-Semiconductor), devido a captura e emissão de elétrons por armadilhas na interface entre o óxido e o silício. A figura ilustra o efeito típico causado por uma dessas armadilhas, onde a alternância de um elétron capturado e um elétron emitido pode ser representada por uma variável aleatória $I$.<br/><br/>O valor dessa variável binária é O quando o elétron está capturado e 1 quando ele é emitido. O valor esperado da $k$-ésima potência de $I$ é<br/><br/>$$\\langle I^k \\rangle = \\sum_I I^k P(I) \\space\\text{,}$$<br/>onde a probabilidade de $I$ assumir o valor 1 é $P(1) = q$ enquanto a probabilidade de $I$ assumir o valor 0 é o complementar $P(0) = 1 - q$, com $0 \\lt q \\lt 1$. Para essa única armadilha, a dispersão $\\sqrt{\\langle I^2 \\rangle - {\\langle I \\rangle}^2}$ será igual ao valor esperado $\\langle I \\rangle$ se:'
		},
		alternatives: [
			{
				text: '$q = \\frac{1}{2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q = \\frac{1}{4}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q = \\frac{2}{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q = \\frac{4}{5}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q = 1$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 1,
		statement: {
			text: 'O ruído "flicker" ocorre em dispositivos semicon-dutores, como transistores CMOS (Complementary Metal-Oxide-Semiconductor), devido a captura e emissão de elétrons por armadilhas na interface entre o óxido e o silício. A figura ilustra o efeito típico causado por uma dessas armadilhas, onde a alternância de um elétron capturado e um elétron emitido pode ser representada por uma variável aleatória $I$.<br/><br/>O valor dessa variável binária é O quando o elétron está capturado e 1 quando ele é emitido. O valor esperado da $k$-ésima potência de $I$ é<br/><br/>$$\\langle I^k \\rangle = \\sum_I I^k P(I) \\space\\text{,}$$<br/>onde a probabilidade de $I$ assumir o valor 1 é $P(1) = q$ enquanto a probabilidade de $I$ assumir o valor 0 é o complementar $P(0) = 1 - q$, com $0 \\lt q \\lt 1$. Para essa única armadilha, a dispersão $\\sqrt{\\langle I^2 \\rangle - {\\langle I \\rangle}^2}$ será igual à metade do valor esperado $\\langle I \\rangle$ se:'
		},
		alternatives: [
			{
				text: '$q = \\frac{4}{5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q = \\frac{2}{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q = \\frac{1}{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q = \\frac{1}{4}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q = 1$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma estrela composta essencialmente de hidrogênio está a uma temperatura $T$. Os níveis de energia do átomo de hidrogênio são dados por:<br/><br/>$$E_n = -\\frac{a}{n^2}, \\quad (n = 1, 2, 3, ...).$$<br/>A degenerescência do nível $n$ é $g_n = 2n^2$. A razão entre o número de átomos no segundo estado excitado ($n = 3$) e aqueles no estado fundamental ($n = 1$) é:'
		},
		alternatives: [
			{
				text: '$9e^{-\\frac{8 \\alpha}{9k_BT}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$3e^{-\\frac{4 \\alpha}{5k_BT}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$6e^{-\\frac{2 \\alpha}{9k_BT}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$4e^{-\\frac{\\alpha}{2k_BT}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$2e^{-\\frac{8 \\alpha}{3k_BT}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma estrela composta essencialmente de hidrogênio está a uma temperatura $T$. Os níveis de energia do átomo de hidrogênio são dados por:<br/><br/>$$E_n = -\\frac{a}{n^2}, \\quad (n = 1, 2, 3, ...).$$<br/>A degenerescência do nível $n$ é $g_n = 2n^2$. A razão entre o número de átomos no primeiro estado excitado ($n = 2$) e aqueles no estado fundamental ($n = 1$) é:'
		},
		alternatives: [
			{
				text: '$4e^{-\\frac{3 \\alpha}{4k_BT}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$8e^{-\\frac{2 \\alpha}{5k_BT}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$3e^{-\\frac{2 \\alpha}{3k_BT}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$2e^{-\\frac{5 \\alpha}{6k_BT}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$e^{-\\frac{\\alpha}{k_BT}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um sistema de 2 átomos. Cada átomo pode estar em um de três estados quânticos com energias $0$, $\\epsilon$ e $2\\epsilon$. O sistema está em contato com um reservatório térmico a uma temperatura $T$. Supondo que os átomos sejam férmions sem spin, a função de partição canônica do sistema é:'
		},
		alternatives: [
			{
				text: '$e^{-\\frac{\\epsilon}{k_BT}} + e^{\\frac{-2\\epsilon}{k_BT}} + e^{\\frac{-3\\epsilon}{k_BT}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$1 + e^{\\frac{-\\epsilon}{k_BT}} + e^{\\frac{-2\\epsilon}{k_BT}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$e^{\\frac{-\\epsilon}{k_BT}} + e^{\\frac{-2\\epsilon}{k_BT}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$1 + e^{-\\frac{2\\epsilon}{k_BT}} + e^{\\frac{-3\\epsilon}{k_BT}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$1 + e^{-\\frac{\\epsilon}{k_BT}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um sistema de 2 átomos. Cada átomo pode estar em um de dois estados quânticos com energias $0$ e $\\epsilon$. O sistema está em contato com um reservatório térmico a uma temperatura $T$. Supondo que os átomos sejam bósons sem spin, a função de partição canônica do sistema é:'
		},
		alternatives: [
			{
				text: '$1 + e^{-\\frac{\\epsilon}{k_BT}} + e^{-\\frac{2\\epsilon}{k_BT}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$1 + e^{-\\frac{2\\epsilon}{k_BT}} + e^{-\\frac{3\\epsilon}{k_BT}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$e^{-\\frac{\\epsilon}{k_BT}} + e^{-\\frac{2\\epsilon}{k_BT}} + 2e^{-\\frac{3\\epsilon}{k_BT}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$1 + e^{-\\frac{\\epsilon}{k_BT}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$e^{-\\frac{2\\epsilon}{k_BT}} + e^{-\\frac{3\\epsilon}{k_BT}} + e^{-\\frac{4\\epsilon}{k_BT}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 4,
		statement: {
			text: 'Em primeira aproximação, a atmosfera terrestre pode ser tratada como um gás ideal (essencialmente nitrogênio) mantido a uma temperatura constante $T$. Desprezando a curvatura da Terra e a variação da força gravitacional com a altura, as partículas do gás, todas de massa $m$, estão sob a ação do potencial gravitacional<br/><br/>$$U = mgz \\text{,}$$<br/>onde $z$ é a coordenada na direção vertical. Qual é a altura média das partículas?<br/>Integrais úteis:<br/><br/>$$\\int_0^{\\infty} e^{-ax} dx = \\frac{1}{a} \\space , \\qquad \\qquad \\int_0^{\\infty} xe^{-ax} dx = \\frac{1}{a^2}$$'
		},
		alternatives: [
			{
				text: '$\\langle z \\rangle = \\frac{k_BT}{mg}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\langle z \\rangle = \\frac{k_BT}{2mg}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\langle z \\rangle = \\frac{3k_BT}{mg}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\langle z \\rangle = \\frac{3k_BT}{2mg}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\langle z \\rangle = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=tZkx1x8ocro'
		},
		questionNumber: 4,
		statement: {
			text: 'Em primeira aproximação, a atmosfera terrestre pode ser tratada como um gás ideal (essencialmente nitrogênio) mantido a uma temperatura constante $T$. Desprezando a curvatura da Terra e a variação da força gravitacional com a altura, as partículas do gás, todas de massa $m$, estão sob a ação do potencial gravitacional<br/><br/>$$U = mgz \\text{,}$$<br/>onde $z$ é a coordenada na direção vertical. Qual é a energia potencial média por partícula?<br/>Integrais úteis:<br/><br/>$$\\int_0^{\\infty} e^{-ax} dx = \\frac{1}{a} \\space , \\qquad \\qquad \\int_0^{\\infty} xe^{-ax} dx = \\frac{1}{a^2}$$'
		},
		alternatives: [
			{
				text: '$\\langle z \\rangle = k_BT$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\langle z \\rangle = k_BT/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\langle z \\rangle = 3k_BT$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\langle z \\rangle = 3k_BT/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\langle z \\rangle = 0$',
				number: QuestionAlternative.E
			}
		]
	}
];
