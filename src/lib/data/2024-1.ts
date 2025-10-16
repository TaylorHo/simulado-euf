import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2024,
	semester: 1,
	correct: QuestionAlternative.A // Gabarito sempre coloca a alternativa A como correta
};

export default <Question[]>[
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 1,
		statement: {
			text: 'Cones semelhantes (mas de dimensões distintas) feitos do mesmo material são soltos do repouso, como ilustrado ao lado, e caem verticalmente sob ação da gravidade e da resistência do ar. Notase que as velocidades terminais desses cones são iguais. Dentre as afirmações a seguir, quais delas são <strong>necessárias</strong> para que as velocidades terminais sejam iguais? <br/><br/><ul><li>I. A força de arraste é proporcional ao quadrado da velocidade.</li><li>II. A força de arraste é proporcional à área do cone.</li><li>III. A força de arraste é proporcional ao raio do cone.</li></ul>',
			image: '2024-1/mc-1a.webp'
		},
		tags: [],
		alternatives: [
			{
				text: 'Apenas II',
				number: QuestionAlternative.A
			},
			{
				text: 'I e III',
				number: QuestionAlternative.B
			},
			{
				text: 'I e II',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 1,
		statement: {
			text: 'Calotas esféricas semelhantes (mas de dimensões distintas) feitas do mesmo material são soltas do repouso, como ilustrado ao lado, e caem verticalmente sob ação da gravidade e da resistência do ar. Nota-se que as velocidades terminais dessas calotas são iguais. Dentre as afirmações a seguir, quais delas são <strong>necessárias</strong> para que as velocidades terminais sejam iguais? <br/><br/><ul><li>I. A força de arraste é proporcional ao quadrado da velocidade.</li><li>II. A força de arraste é proporcional à área da calota.</li><li>III. A força de arraste é proporcional ao raio da calota.</li></ul>',
			image: '2024-1/mc-1b.webp'
		},
		tags: [],
		alternatives: [
			{
				text: 'Apenas II',
				number: QuestionAlternative.A
			},
			{
				text: 'I e III',
				number: QuestionAlternative.B
			},
			{
				text: 'I e II',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 2,
		statement: {
			text: "A figura ao lado ilustra um bloco de densidade $\\rho$ sobre um plano inclinado de ângulo $\\alpha$ que é ligeiramente menor que o ângulo máximo de inclinação para que o bloco não deslize. O sistema todo está dentro de um recipiente com líquido de densidade $\\rho' = \\frac{\\rho}{2}$ e cujo nível se eleva lentamente. <br/><br/>Desconsiderando os efeitos de arraste do líquido e assumindo que o coeficiente de atrito entre o bloco e o plano inclinado é <strong>inalterado</strong> pela presença do líquido, quais das afirmações a seguir são verdadeiras? <br/><br/><ul><li>I. Assim que a camada de líquido atingir o bloco, a força normal entre o bloco e o plano inclinado começa a diminuir.</li><li>II. O bloco desliza assim que a camada de líquido o atingir.</li><li>III. O bloco desliza apenas após a camada de líquido submergir $\\frac{1}{2}$ de seu volume.</li></ul>",
			image: '2024-1/mc-2.webp'
		},
		tags: [],
		alternatives: [
			{
				text: 'Apenas I',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas II',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas III',
				number: QuestionAlternative.C
			},
			{
				text: 'I e II',
				number: QuestionAlternative.D
			},
			{
				text: 'I e III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 2,
		statement: {
			text: "A figura ao lado ilustra um bloco de densidade $\\rho$ sobre um plano inclinado de ângulo $\\alpha$ que é ligeiramente menor que o ângulo máximo de inclinação para que o bloco não deslize. O sistema todo está dentro de um recipiente com líquido de densidade $\\rho' = \\frac{\\rho}{3}$ e cujo nível se eleva lentamente. <br/><br/>Desconsiderando os efeitos de arraste do líquido e assumindo que o coeficiente de atrito entre o bloco e o plano inclinado é <strong>inalterado</strong> pela presença do líquido, quais das afirmações a seguir são verdadeiras? <br/><br/><ul><li>I. A força normal entre o bloco e o plano inclinado é tanto menor quanto maior for a fração de bloco submersa.</li><li>II. O bloco desliza pouco após a camada de líquido o atingir.</li><li>III. O bloco desliza apenas após a camada de líquido submergir $\\frac{2}{3}$ de seu volume.</li></ul>",
			image: '2024-1/mc-2.webp'
		},
		tags: [],
		alternatives: [
			{
				text: 'Apenas I',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas II',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas III',
				number: QuestionAlternative.C
			},
			{
				text: 'I e II',
				number: QuestionAlternative.D
			},
			{
				text: 'I e III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 3,
		statement: {
			text: 'Uma bola de boliche de massa $M$ e raio $R$ é jogada em uma pista perfeitamente horizontal com velocidade inicial $v_0$ e sem girar. Sendo $\\mu > 0$ o coeficiente de atrito cinético entre a bola e a pista e considerando a bola como uma casca esférica, qual a velocidade final da mesma após o deslizamento cessar? (Considere a bola e a pista como idealmente rígidos. O momento de inércia de uma casca esférica em torno de um eixo contendo seu centro de massa é $2MR^2/3$.)'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\frac{3}{5} v_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{\\frac{3}{5}} v_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{1 + \\mu} v_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{1 + \\frac{2}{3}\\mu} v_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 3,
		statement: {
			text: 'Uma bola de boliche de massa $M$ e raio $R$ é jogada em uma pista perfeitamente horizontal com velocidade inicial $v_0$ e sem girar. Sendo $\\mu > 0$ o coeficiente de atrito cinético entre a bola e a pista e considerando a bola como uma esfera homogênea, qual a velocidade final da mesma após o deslizamento cessar? (Considere a bola e a pista como idealmente rígidos. O momento de inércia de uma esfera homogênea em torno de um eixo que passa pelo seu centro de massa é $2MR^2/5$.)'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\frac{5}{7} v_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{\\frac{5}{7}} v_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{1 + \\mu} v_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{1 + \\frac{2}{5}\\mu} v_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 4,
		statement: {
			text: 'A velocidade como função do tempo para uma partícula em oscilação harmônica é apresentada na figura abaixo. Assumindo $x(t) = A \\cos{(\\omega t + \\delta)}$, determine a opção que melhor descreve a frequência angular $\\omega$ e a amplitude do movimento $A$.',
			image: '2024-1/mc-4.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\omega = \\frac{\\pi}{4} \\space \\text{rad/s}; A = \\frac{16}{\\pi} \\space cm$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\frac{\\pi}{2} \\space \\text{rad/s}; A = \\frac{8}{\\pi} \\space cm$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\frac{\\pi}{8} \\space \\text{rad/s}; A = \\frac{32}{\\pi} \\space cm$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = 4\\pi \\space \\text{rad/s}; A = \\frac{1}{\\pi} \\space cm$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = 2\\pi \\space \\text{rad/s}; A = \\frac{2}{\\pi} \\space cm$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 4,
		statement: {
			text: 'A velocidade como função do tempo para uma partícula em oscilação harmônica é apresentada na figura abaixo. Assumindo $v(t) = A \\cos{(\\omega t + \\delta)}$, determine a opção que melhor descreve a frequência angular $\\omega$ e o módulo da máxima aceleração $a_{max}$.',
			image: '2024-1/mc-4.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\omega = \\frac{\\pi}{4} \\space \\text{rad/s}; a_{max} = \\pi \\space cm/s^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\frac{\\pi}{2} \\space \\text{rad/s}; a_{max} = 2\\pi \\space cm/s^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\frac{\\pi}{8} \\space \\text{rad/s}; a_{max} = \\frac{\\pi}{2} \\space cm/s^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = \\frac{\\pi}{8} \\space \\text{rad/s}; a_{max} = 2\\pi \\space cm/s^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = 2\\pi \\space \\text{rad/s}; a_{max} = 8\\pi \\space cm/s^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de colisões realizado na disciplina de Física Experimental, os alunos colocam dois blocos $A$ e $B$, de mesma massa $m$, sobre um trilho de ar.<br/>O bloco $B$ tem preso a si uma mola de constante elástica $k$ e massa desprezível. Antes da colisão, o bloco $B$ está em repouso, enquanto o bloco $A$ se aproxima com velocidade linear de módulo $v_0$, como mostrado na figura acima. Assumindo que perdas de energia por atrito sejam desprezíveis, determine o módulo da compressão máxima $\\Delta{x_{max}}$ da mola durante a colisão. Expresse seu resultado como função dos parâmetros $m$, $k$ e $v_0$.',
			image: '2024-1/mc-5.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\Delta{x_{max}} = \\sqrt{\\frac{mv_0^2}{2k}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{x_{max}} = \\sqrt{\\frac{mv_0^2}{k}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{x_{max}} = \\sqrt{\\frac{mv_0^2}{4k}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{x_{max}} = \\sqrt{\\frac{2mv_0^2}{k}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{x_{max}} = \\sqrt{\\frac{3mv_0^2}{2k}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de colisões realizado na disciplina de Física Experimental, os alunos colocam dois blocos $A$ e $B$, de mesma massa $m$, sobre um trilho de ar.<br/>O bloco $B$ tem preso a si uma mola de constante elástica $k$ e massa desprezível. Antes da colisão, o bloco $B$ está em repouso, enquanto o bloco $A$ se aproxima com velocidade linear de módulo $v_0$, como mostrado na figura acima. Pelas filmagens do experimento, os alunos foram capazes de estimar a compressão máxima $\\Delta{x_{max}}$ sofrida pela mola durante a colisão. Assumindo que perdas de energia por atrito sejam desprezíveis, determine o módulo da velocidade inicial $v_0$ do bloco $A$. Expresse seu resultado como função dos parâmetros $m$, $k$ e $\\Delta{x_{max}}$.',
			image: '2024-1/mc-5.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$v_0 = \\sqrt{\\frac{2k\\Delta{x^2_{max}}}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$v_0 = \\sqrt{\\frac{k\\Delta{x^2_{max}}}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$v_0 = \\sqrt{\\frac{4k\\Delta{x^2_{max}}}{m}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$v_0 = \\sqrt{\\frac{k\\Delta{x^2_{max}}}{2m}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$v_0 = \\sqrt{\\frac{2k\\Delta{x^2_{max}}}{3m}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 6,
		statement: {
			text: 'Uma partícula puntiforme de massa $m$ e carga $q$ está acoplada a um plano delgado infinito por uma mola ideal (isolante) de massa desprezível, comprimento $L$ e constante elástica $k$. O plano é dielétrico e tem carga superficial $\\sigma$ homogênea, de <strong>mesmo sinal</strong> que $q$. A partícula pode oscilar livremente na coordenada normal ao plano, como ilustrado na figura abaixo. Desconsiderando efeitos da gravidade e perdas de energia por radiação, determine (i) a deformação $\\Delta{L}$ da mola no equilíbrio e (ii) a frequência angular $\\omega$ de oscilação da partícula. Utilize o SI, em que o campo elétrico de um plano infinito é $\\vec{E} = \\frac{1}{2}(\\sigma / \\epsilon_0)\\hat{n}$, sendo $\\hat{n}$ o vetor normal ao plano. Considere a deformação da mola como positiva (negativa) quando a mola está estendida (comprimida).',
			image: '2024-1/mc-6.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\text{(i)} \\space \\Delta{L} = \\frac{|q\\sigma|}{2k\\epsilon_0} \\space \\text{e (ii)} \\space \\omega = \\sqrt{\\frac{k}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\text{(i)} \\space \\Delta{L} = -\\frac{|q\\sigma|}{2k\\epsilon_0} \\space \\text{e (ii)} \\space \\omega = \\sqrt{\\frac{k}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\text{(i)} \\space \\Delta{L} = \\frac{|q\\sigma|}{2k\\epsilon_0} \\space \\text{e (ii)} \\space \\omega = \\sqrt{\\frac{k}{m} + \\frac{|q\\sigma|}{2k\\epsilon_0}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\text{(i)} \\space \\Delta{L} = -\\frac{|q\\sigma|}{2k\\epsilon_0} \\space \\text{e (ii)} \\space \\omega = \\sqrt{\\frac{k}{m} + \\frac{|q\\sigma|}{2k\\epsilon_0}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\text{(i)} \\space \\Delta{L} = \\frac{|q\\sigma|}{k\\epsilon_0} \\space \\text{e (ii)} \\space \\omega = \\sqrt{\\frac{k}{m} - \\frac{|q\\sigma|}{k\\epsilon_0}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 6,
		statement: {
			text: 'Uma partícula puntiforme de massa $m$ e carga $q$ está acoplada a um plano delgado infinito por uma mola ideal (isolante) de massa desprezível, comprimento $L$ e constante elástica $k$. O plano é dielétrico e tem carga superficial $\\sigma$ homogênea, de <strong>sinal oposto</strong> a $q$. A partícula pode oscilar livremente na coordenada normal ao plano, como ilustrado na figura abaixo. Desconsiderando efeitos da gravidade e perdas de energia por radiação, determine (i) a frequência angular $\\omega$ de oscilação da partícula e (ii) a deformação $\\Delta{L}$ da mola no equilíbrio. Utilize o SI, em que o campo elétrico de um plano infinito é $\\vec{E} = \\frac{1}{2}(\\sigma / \\epsilon_0)\\hat{n}$, sendo $\\hat{n}$ o vetor normal ao plano. Considere a deformação da mola como positiva (negativa) quando a mola está estendida (comprimida).',
			image: '2024-1/mc-6.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\text{(i)} \\space \\omega = \\sqrt{\\frac{k}{m}} \\text{e (ii)} \\space \\Delta{L} = -\\frac{|q\\sigma|}{2k\\epsilon_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\text{(i)} \\space \\omega = \\sqrt{\\frac{k}{m}} \\text{e (ii)} \\space \\Delta{L} = \\frac{|q\\sigma|}{2k\\epsilon_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\text{(i)} \\space \\omega = \\sqrt{\\frac{k}{m} - \\frac{|q\\sigma|}{2k\\epsilon_0}} \\text{e (ii)} \\space \\Delta{L} = \\frac{|q\\sigma|}{2k\\epsilon_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\text{(i)} \\space \\omega = \\sqrt{\\frac{k}{m} + \\frac{|q\\sigma|}{2k\\epsilon_0}} \\text{e (ii)} \\space \\Delta{L} = -\\frac{|q\\sigma|}{2k\\epsilon_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\text{(i)} \\space \\omega = \\sqrt{\\frac{k}{m} - \\frac{|q\\sigma|}{k\\epsilon_0}} \\text{e (ii)} \\space \\Delta{L} = \\frac{|q\\sigma|}{k\\epsilon_0}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 7,
		statement: {
			text: 'Um bloco de massa $M$ está em repouso sobre um plano inclinado sem atrito, de inclinação $\\theta$, sustentado por uma corda de massa $m$ e comprimento $L$, como mostrado na figura abaixo. A corda está presa nas duas extremidades. Dada essa configuração do sistema e sabendo que $m << M$, determine a menor frequência de oscilação $f_1$ de uma onda mecânica na corda. Expresse seu resultado como função de $m$, $M$, $g$, $\\theta$ e $L$. Trate a corda como unidimensional.',
			image: '2024-1/mc-7a.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$f_1 = \\frac{1}{2}\\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$f_1 = \\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$f_1 = 2\\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$f_1 = \\frac{1}{2}\\sqrt{\\frac{Mg\\cos{\\theta}}{mL}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$f_1 = \\sqrt{\\frac{Mg\\cos{\\theta}}{mL}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 7,
		statement: {
			text: 'Um bloco de massa $M$ está em repouso sobre um plano inclinado sem atrito, de inclinação $\\theta$, sustentado por uma corda de massa $m$ e comprimento $L$, como mostrado na figura abaixo. A corda está presa ao bloco, porém está livre para se movimentar ao longo do eixo do suporte, na extremidade oposta. Dada essa configuração do sistema e sabendo que $m << M$, determine a menor frequência de oscilação $f_1$ de uma onda mecânica na corda. Expresse seu resultado como função de $m$, $M$, $g$, $\\theta$ e $L$. Trate a corda como unidimensional.',
			image: '2024-1/mc-7b.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$f_1 = \\frac{1}{4}\\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$f_1 = \\frac{1}{2}\\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$f_1 = \\frac{3}{2}\\sqrt{\\frac{Mg\\sin{\\theta}}{mL}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$f_1 = \\frac{3}{4}\\sqrt{\\frac{Mg\\cos{\\theta}}{mL}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$f_1 = \\sqrt{\\frac{Mg\\cos{\\theta}}{mL}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		questionNumber: 8,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ está acoplado ao teto através de uma corda (de massa desprezível) enrolada nas suas bordas. O disco é abandonado do repouso sob ação da gravidade $g$, tal como ilustrado na figura abaixo. Desprezando eventuais perdas de energia e assumindo que a corda <strong>não</strong> desliza sobre a borda do disco, determine a velocidade angular $\\omega$ do disco como função da altura $H$ em relação a sua posição inicial. O momento de inércia do disco em torno de um eixo perpendicular contendo seu centro de massa é $MR^2/2$.',
			image: '2024-1/mc-8.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$\\omega = \\sqrt{\\frac{4gH}{3R^2}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\sqrt{\\frac{gH}{R^2}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\sqrt{\\frac{gH}{2R^2}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = \\sqrt{\\frac{2gH}{R^2}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = \\sqrt{\\frac{3gH}{4R^2}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		questionNumber: 8,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ está acoplado ao teto através de uma corda (de massa desprezível) enrolada nas suas bordas. O disco é abandonado do repouso sob ação da gravidade $g$, tal como ilustrado na figura abaixo. Desprezando eventuais perdas de energia e assumindo que a corda <strong>não</strong> desliza sobre a borda do disco, determine o módulo da velocidade linear $V$ do disco como função da altura $H$ em relação a sua posição inicial. O momento de inércia do disco em torno de um eixo perpendicular contendo seu centro de massa é $MR^2/2$.',
			image: '2024-1/mc-8.webp'
		},
		tags: [],
		alternatives: [
			{
				text: '$V = \\sqrt{\\frac{4gH}{3}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V = \\sqrt{gH}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V = \\sqrt{\\frac{gH}{2}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V = \\sqrt{2gH}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V = \\sqrt{\\frac{3gH}{4}}$',
				number: QuestionAlternative.E
			}
		]
	}
];
