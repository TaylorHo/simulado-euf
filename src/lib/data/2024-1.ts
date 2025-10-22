import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2024,
	semester: 1,
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
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 1,
		statement: {
			text: 'Cones semelhantes (mas de dimensões distintas) feitos do mesmo material são soltos do repouso, como ilustrado ao lado, e caem verticalmente sob ação da gravidade e da resistência do ar. Notase que as velocidades terminais desses cones são iguais. Dentre as afirmações a seguir, quais delas são <strong>necessárias</strong> para que as velocidades terminais sejam iguais? <br/><br/><ul><li>I. A força de arraste é proporcional ao quadrado da velocidade.</li><li>II. A força de arraste é proporcional à área do cone.</li><li>III. A força de arraste é proporcional ao raio do cone.</li></ul>',
			image: '2024-1/mc-1a.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 1,
		statement: {
			text: 'Calotas esféricas semelhantes (mas de dimensões distintas) feitas do mesmo material são soltas do repouso, como ilustrado ao lado, e caem verticalmente sob ação da gravidade e da resistência do ar. Nota-se que as velocidades terminais dessas calotas são iguais. Dentre as afirmações a seguir, quais delas são <strong>necessárias</strong> para que as velocidades terminais sejam iguais? <br/><br/><ul><li>I. A força de arraste é proporcional ao quadrado da velocidade.</li><li>II. A força de arraste é proporcional à área da calota.</li><li>III. A força de arraste é proporcional ao raio da calota.</li></ul>',
			image: '2024-1/mc-1b.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 2,
		statement: {
			text: "A figura ao lado ilustra um bloco de densidade $\\rho$ sobre um plano inclinado de ângulo $\\alpha$ que é ligeiramente menor que o ângulo máximo de inclinação para que o bloco não deslize. O sistema todo está dentro de um recipiente com líquido de densidade $\\rho' = \\frac{\\rho}{2}$ e cujo nível se eleva lentamente. <br/><br/>Desconsiderando os efeitos de arraste do líquido e assumindo que o coeficiente de atrito entre o bloco e o plano inclinado é <strong>inalterado</strong> pela presença do líquido, quais das afirmações a seguir são verdadeiras? <br/><br/><ul><li>I. Assim que a camada de líquido atingir o bloco, a força normal entre o bloco e o plano inclinado começa a diminuir.</li><li>II. O bloco desliza assim que a camada de líquido o atingir.</li><li>III. O bloco desliza apenas após a camada de líquido submergir $\\frac{1}{2}$ de seu volume.</li></ul>",
			image: '2024-1/mc-2.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 2,
		statement: {
			text: "A figura ao lado ilustra um bloco de densidade $\\rho$ sobre um plano inclinado de ângulo $\\alpha$ que é ligeiramente menor que o ângulo máximo de inclinação para que o bloco não deslize. O sistema todo está dentro de um recipiente com líquido de densidade $\\rho' = \\frac{\\rho}{3}$ e cujo nível se eleva lentamente. <br/><br/>Desconsiderando os efeitos de arraste do líquido e assumindo que o coeficiente de atrito entre o bloco e o plano inclinado é <strong>inalterado</strong> pela presença do líquido, quais das afirmações a seguir são verdadeiras? <br/><br/><ul><li>I. A força normal entre o bloco e o plano inclinado é tanto menor quanto maior for a fração de bloco submersa.</li><li>II. O bloco desliza pouco após a camada de líquido o atingir.</li><li>III. O bloco desliza apenas após a camada de líquido submergir $\\frac{2}{3}$ de seu volume.</li></ul>",
			image: '2024-1/mc-2.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma bola de boliche de massa $M$ e raio $R$ é jogada em uma pista perfeitamente horizontal com velocidade inicial $v_0$ e sem girar. Sendo $\\mu > 0$ o coeficiente de atrito cinético entre a bola e a pista e considerando a bola como uma casca esférica, qual a velocidade final da mesma após o deslizamento cessar? (Considere a bola e a pista como idealmente rígidos. O momento de inércia de uma casca esférica em torno de um eixo contendo seu centro de massa é $2MR^2/3$.)'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma bola de boliche de massa $M$ e raio $R$ é jogada em uma pista perfeitamente horizontal com velocidade inicial $v_0$ e sem girar. Sendo $\\mu > 0$ o coeficiente de atrito cinético entre a bola e a pista e considerando a bola como uma esfera homogênea, qual a velocidade final da mesma após o deslizamento cessar? (Considere a bola e a pista como idealmente rígidos. O momento de inércia de uma esfera homogênea em torno de um eixo que passa pelo seu centro de massa é $2MR^2/5$.)'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 4,
		statement: {
			text: 'A velocidade como função do tempo para uma partícula em oscilação harmônica é apresentada na figura abaixo. Assumindo $x(t) = A \\cos{(\\omega t + \\delta)}$, determine a opção que melhor descreve a frequência angular $\\omega$ e a amplitude do movimento $A$.',
			image: '2024-1/mc-4.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 4,
		statement: {
			text: 'A velocidade como função do tempo para uma partícula em oscilação harmônica é apresentada na figura abaixo. Assumindo $v(t) = A \\cos{(\\omega t + \\delta)}$, determine a opção que melhor descreve a frequência angular $\\omega$ e o módulo da máxima aceleração $a_{max}$.',
			image: '2024-1/mc-4.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de colisões realizado na disciplina de Física Experimental, os alunos colocam dois blocos $A$ e $B$, de mesma massa $m$, sobre um trilho de ar.<br/>O bloco $B$ tem preso a si uma mola de constante elástica $k$ e massa desprezível. Antes da colisão, o bloco $B$ está em repouso, enquanto o bloco $A$ se aproxima com velocidade linear de módulo $v_0$, como mostrado na figura acima. Assumindo que perdas de energia por atrito sejam desprezíveis, determine o módulo da compressão máxima $\\Delta{x_{max}}$ da mola durante a colisão. Expresse seu resultado como função dos parâmetros $m$, $k$ e $v_0$.',
			image: '2024-1/mc-5.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de colisões realizado na disciplina de Física Experimental, os alunos colocam dois blocos $A$ e $B$, de mesma massa $m$, sobre um trilho de ar.<br/>O bloco $B$ tem preso a si uma mola de constante elástica $k$ e massa desprezível. Antes da colisão, o bloco $B$ está em repouso, enquanto o bloco $A$ se aproxima com velocidade linear de módulo $v_0$, como mostrado na figura acima. Pelas filmagens do experimento, os alunos foram capazes de estimar a compressão máxima $\\Delta{x_{max}}$ sofrida pela mola durante a colisão. Assumindo que perdas de energia por atrito sejam desprezíveis, determine o módulo da velocidade inicial $v_0$ do bloco $A$. Expresse seu resultado como função dos parâmetros $m$, $k$ e $\\Delta{x_{max}}$.',
			image: '2024-1/mc-5.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula puntiforme de massa $m$ e carga $q$ está acoplada a um plano delgado infinito por uma mola ideal (isolante) de massa desprezível, comprimento $L$ e constante elástica $k$. O plano é dielétrico e tem carga superficial $\\sigma$ homogênea, de <strong>mesmo sinal</strong> que $q$. A partícula pode oscilar livremente na coordenada normal ao plano, como ilustrado na figura abaixo. Desconsiderando efeitos da gravidade e perdas de energia por radiação, determine (i) a deformação $\\Delta{L}$ da mola no equilíbrio e (ii) a frequência angular $\\omega$ de oscilação da partícula. Utilize o SI, em que o campo elétrico de um plano infinito é $\\vec{E} = \\frac{1}{2}(\\sigma / \\epsilon_0)\\hat{n}$, sendo $\\hat{n}$ o vetor normal ao plano. Considere a deformação da mola como positiva (negativa) quando a mola está estendida (comprimida).',
			image: '2024-1/mc-6.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula puntiforme de massa $m$ e carga $q$ está acoplada a um plano delgado infinito por uma mola ideal (isolante) de massa desprezível, comprimento $L$ e constante elástica $k$. O plano é dielétrico e tem carga superficial $\\sigma$ homogênea, de <strong>sinal oposto</strong> a $q$. A partícula pode oscilar livremente na coordenada normal ao plano, como ilustrado na figura abaixo. Desconsiderando efeitos da gravidade e perdas de energia por radiação, determine (i) a frequência angular $\\omega$ de oscilação da partícula e (ii) a deformação $\\Delta{L}$ da mola no equilíbrio. Utilize o SI, em que o campo elétrico de um plano infinito é $\\vec{E} = \\frac{1}{2}(\\sigma / \\epsilon_0)\\hat{n}$, sendo $\\hat{n}$ o vetor normal ao plano. Considere a deformação da mola como positiva (negativa) quando a mola está estendida (comprimida).',
			image: '2024-1/mc-6.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 7,
		statement: {
			text: 'Um bloco de massa $M$ está em repouso sobre um plano inclinado sem atrito, de inclinação $\\theta$, sustentado por uma corda de massa $m$ e comprimento $L$, como mostrado na figura abaixo. A corda está presa nas duas extremidades. Dada essa configuração do sistema e sabendo que $m \\ll M$, determine a menor frequência de oscilação $f_1$ de uma onda mecânica na corda. Expresse seu resultado como função de $m$, $M$, $g$, $\\theta$ e $L$. Trate a corda como unidimensional.',
			image: '2024-1/mc-7a.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 7,
		statement: {
			text: 'Um bloco de massa $M$ está em repouso sobre um plano inclinado sem atrito, de inclinação $\\theta$, sustentado por uma corda de massa $m$ e comprimento $L$, como mostrado na figura abaixo. A corda está presa ao bloco, porém está livre para se movimentar ao longo do eixo do suporte, na extremidade oposta. Dada essa configuração do sistema e sabendo que $m \\ll M$, determine a menor frequência de oscilação $f_1$ de uma onda mecânica na corda. Expresse seu resultado como função de $m$, $M$, $g$, $\\theta$ e $L$. Trate a corda como unidimensional.',
			image: '2024-1/mc-7b.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 8,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ está acoplado ao teto através de uma corda (de massa desprezível) enrolada nas suas bordas. O disco é abandonado do repouso sob ação da gravidade $g$, tal como ilustrado na figura abaixo. Desprezando eventuais perdas de energia e assumindo que a corda <strong>não</strong> desliza sobre a borda do disco, determine a velocidade angular $\\omega$ do disco como função da altura $H$ em relação a sua posição inicial. O momento de inércia do disco em torno de um eixo perpendicular contendo seu centro de massa é $MR^2/2$.',
			image: '2024-1/mc-8.webp'
		},
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
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=I8op3OdcnXg'
		},
		questionNumber: 8,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ está acoplado ao teto através de uma corda (de massa desprezível) enrolada nas suas bordas. O disco é abandonado do repouso sob ação da gravidade $g$, tal como ilustrado na figura abaixo. Desprezando eventuais perdas de energia e assumindo que a corda <strong>não</strong> desliza sobre a borda do disco, determine o módulo da velocidade linear $V$ do disco como função da altura $H$ em relação a sua posição inicial. O momento de inércia do disco em torno de um eixo perpendicular contendo seu centro de massa é $MR^2/2$.',
			image: '2024-1/mc-8.webp'
		},
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
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 1,
		statement: {
			text: 'O campo elétrico de uma onda plana que se propaga no vácuo é dado por<br/><br/>$$E(r,t) = E_0(\\hat{x} + \\hat{z}) e^{-i(\\omega t - ky)} \\text{,}$$<br/>sendo $k = k\\hat{y}$ o vetor de onda. Determine o campo magnético $B(r,t)$.'
		},
		alternatives: [
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - ky)} (\\hat{x} - \\hat{z})$',
				number: QuestionAlternative.A
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - ky)} (\\hat{y} + \\hat{z})$',
				number: QuestionAlternative.B
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - ky)} (\\hat{x} + \\hat{z})$',
				number: QuestionAlternative.C
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t + ky)} \\hat{y}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t + ky)} \\hat{x}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 1,
		statement: {
			text: 'O campo elétrico de uma onda plana que se propaga no vácuo é dado por<br/><br/>$$E(r,t) = E_0(\\hat{y} + \\hat{z}) e^{-i(\\omega t - kx)} \\text{,}$$<br/>sendo $k = k\\hat{x}$ o vetor de onda. Determine o campo magnético $B(r,t)$.'
		},
		alternatives: [
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - kx)} (\\hat{z} - \\hat{y})$',
				number: QuestionAlternative.A
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - kx)} (\\hat{y} + \\hat{z})$',
				number: QuestionAlternative.B
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t - kx)} (\\hat{x} - \\hat{z})$',
				number: QuestionAlternative.C
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t + kx)} \\hat{y}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B(r,t) = \\frac{E_0}{c} e^{-i(\\omega t + kx)} \\hat{x}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 2,
		statement: {
			text: 'O potencial elétrico $V$ na superfície de uma casca esférica de raio $R$ é igual a $V = (V_0R/a) \\cos{\\theta} $, em que $\\theta$ é o ângulo polar em relação a um certo eixo que passa pelo centro da esfera, enquanto $V_0$ e $a$ são constantes. Qual é o potencial elétrico dentro da esfera, na região a uma distância $r = R/2$ do centro?'
		},
		alternatives: [
			{
				text: '$\\frac{V_0}{2a} R \\cos{\\theta}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{V_0}{2a} R$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{V_0}{3a} R \\cos{\\theta}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{V_0}{3a} R$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{2V_0}{a} R \\sin{\\theta}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 2,
		statement: {
			text: 'O potencial elétrico $V$ na superfície de uma casca esférica de raio $R$ é igual a $V = (V_0R/a) \\cos{\\theta} $, em que $\\theta$ é o ângulo polar em relação a um certo eixo que passa pelo centro da esfera, enquanto $V_0$ e $a$ são constantes. Qual é o potencial elétrico fora da esfera, na região a uma distância $r = 2R$ do centro?'
		},
		alternatives: [
			{
				text: '$\\frac{V_0 R}{4a} R \\cos{\\theta}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{V_0 R}{4a} R$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{V_0 R^2}{4a^2} R \\cos{\\theta}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{V_0 R^2}{4a^2} R$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{V_0 R^2}{2a^2} R \\sin{\\theta}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 3,
		statement: {
			text: 'Em uma região no interior de um cilindro de raio $R$ e altura $h$ há um campo elétrico dado por $E = \\alpha\\hat{\\rho}+ \\beta\\hat{z}$ e um campo magnético dado por $B = \\gamma\\hat{\\phi} + \\delta\\hat{z}$, onde $\\alpha$, $\\beta$, $\\gamma$ e $\\delta$ são constantes. O eixo de simetria do cilindro está na direção $\\hat{z}$. Qual é o valor absoluto da energia que atravessa a tampa superior do cilindro por unidade de tempo?'
		},
		alternatives: [
			{
				text: '$\\frac{\\pi R^2 \\alpha \\gamma}{\\mu_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{2\\pi R^2 \\beta \\delta}{\\mu_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{4\\pi R^2 \\alpha \\delta}{\\gamma \\beta \\mu_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{R^2}{4\\pi \\alpha \\gamma \\mu_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{R^2}{2\\pi \\beta \\delta \\mu_0}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 3,
		statement: {
			text: 'Em uma região no interior de um cilindro de raio $R$ e altura $h$ há um campo magnético dado por $B = \\alpha\\hat{\\rho}+ \\beta\\hat{z}$ e um campo elétrico dado por $E = \\gamma\\hat{\\rho} + \\delta\\hat{\\phi}$, onde $\\alpha$, $\\beta$, $\\gamma$ e $\\delta$ são constantes. O eixo de simetria do cilindro está na direção $\\hat{z}$. Qual é o valor absoluto da energia que atravessa a tampa superior do cilindro por unidade de tempo?'
		},
		alternatives: [
			{
				text: '$\\frac{\\pi R^2 \\alpha \\delta}{\\mu_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{2\\pi R^2 \\alpha \\gamma}{\\mu_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{2\\pi R^2 \\beta \\gamma}{\\mu_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{4\\pi R^2 \\alpha \\gamma}{\\mu_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{4\\pi R^2 \\beta \\delta}{\\mu_0}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 4,
		statement: {
			text: 'Um fio de comprimento $L_0$ e resistência $R_0$ é esticado de tal forma que seu novo comprimento é $L = 2L_0$. Considerando que a resistividade e o volume do fio não se alteram quando variamos o seu comprimento, qual é o valor da nova resistência $R$ em termos de $R_0$?'
		},
		alternatives: [
			{
				text: '$R = 4R_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$R = R_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$R = 2R_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$R = \\frac{R_0}{2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$R = \\frac{R_0}{4}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 4,
		statement: {
			text: 'Um fio de comprimento $L_0$ e resistência $R_0$ é esticado de tal forma que seu novo comprimento é $L = 3L_0$. Considerando que a resistividade e o volume do fio não se alteram quando variamos o seu comprimento, qual é o valor da nova resistência $R$ em termos de $R_0$?'
		},
		alternatives: [
			{
				text: '$R = 9R_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$R = R_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$R = 3R_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$R = \\frac{R_0}{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$R = \\frac{R_0}{9}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 5,
		statement: {
			text: 'Um elétron de massa $m_e$ é lançado com uma velocidade inicial de módulo $v_0$ em direção a um próton mantido fixo no lugar. Se o elétron se encontra inicialmente a uma grande distância do próton, a que distância $r$ do próton a velocidade instantânea do elétron é cinco vezes maior que sua velocidade inicial?'
		},
		alternatives: [
			{
				text: '$r = \\frac{1}{48 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$r = \\frac{1}{8 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$r = \\frac{1}{4 \\pi \\epsilon_0} (\\frac{em_e}{v_0})^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$r = \\frac{1}{48 \\pi \\epsilon_0} (\\frac{em_e}{v_0})^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$r = \\frac{1}{4 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 5,
		statement: {
			text: 'Um elétron de massa $m_e$ é lançado com uma velocidade inicial de módulo $v_0$ em direção a um próton mantido fixo no lugar. Se o elétron se encontra inicialmente a uma grande distância do próton, a que distância $r$ do próton a energia cinética do elétron é três vezes maior que sua energia cinética inicial?'
		},
		alternatives: [
			{
				text: '$r = \\frac{1}{4 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$r = \\frac{1}{8 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$r = \\frac{1}{4 \\pi \\epsilon_0} (\\frac{em_e}{v_0})^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$r = \\frac{1}{48 \\pi \\epsilon_0} (\\frac{em_e}{v_0})^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$r = \\frac{1}{48 \\pi \\epsilon_0 m_e} (\\frac{e}{v_0})^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 6,
		statement: {
			text: 'Duas cascas esféricas concêntricas, a primeira com densidade superficial de cargas $\\sigma_1$ e a segunda com $\\sigma_2$, tem raios $r_1$ e $r_2 = 3r_1$, respectivamente. Determine o módulo do campo elétrico $E$ gerado por estas duas cascas a uma distância $r = 2r_1$ do centro das cascas.'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\sigma_1}{4 \\epsilon_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\sigma_1 + 9\\sigma_2}{4 \\epsilon_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{5}{2} \\frac{\\sigma_1 + \\sigma_2}{\\epsilon_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = \\frac{2}{5} \\frac{\\sigma_1 + \\sigma_2}{\\epsilon_0}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 6,
		statement: {
			text: 'Duas cascas esféricas concêntricas, a primeira com densidade superficial de cargas $\\sigma_1$ e a segunda com $\\sigma_2$, tem raios $r_1$ e $r_2 = 2r_1$, respectivamente. Determine o módulo do campo elétrico $E$ gerado por estas duas cascas a uma distância $r = 3r_1$ do centro das cascas.'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\sigma_1 + 4\\sigma_2}{9 \\epsilon_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\sigma_1}{81 \\epsilon_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{5}{9} \\frac{\\sigma_1 + \\sigma_2}{\\epsilon_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = \\frac{9}{5} \\frac{\\sigma_1 + \\sigma_2}{\\epsilon_0}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere um conjunto de dois capacitores em série, com capacitâncias $C_1 = C$ e $C_2 = 2C$. Nenhum dos capacitores suporta uma diferença de potencial maior que $V_0$ sem que seus dielétricos se rompam. Dado esse vínculo, qual é a maior energia elétrica $U$ que pode ser armazenada no conjunto de dois capacitores?'
		},
		alternatives: [
			{
				text: '$\\frac{3}{4} C V_0^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{4}{3} C V_0^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{5}{6} C V_0^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{2} C V_0^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{6}{5} C V_0^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere um conjunto de dois capacitores em série, com capacitâncias $C_1 = C$ e $C_2 = 2C$. Nenhum dos capacitores suporta uma diferença de potencial maior que $V_0$ sem que seus dielétricos se rompam. Dado esse vínculo, qual é a maior diferença de potencial $V$ que pode ser estabelecida entre os terminais do conjunto de dois capacitores?'
		},
		alternatives: [
			{
				text: '$\\frac{3}{2} V_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{2}{3} V_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$2 V_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{3} V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{3}{4} V_0$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 8,
		statement: {
			text: 'Em um circuito $RC$, temos uma fonte com força eletromotriz $\\varepsilon$, um resistor de resistência $R$ e um capacitor de capacitância $C$. No instante $t = 0$, o circuito é fechado, fazendo com que o capacitor inicialmente descarregado comece a se carregar de acordo com a equação $q(t) = C\\Epsilon(1 − e^{-\\frac{t}{RC}})$. Em que instante de tempo a diferença de potencial entre os terminais do capacitor é igual à metade da diferença de potencial entre os terminais do resistor?'
		},
		alternatives: [
			{
				text: '$t = \\ln (\\frac{3}{2}) RC$',
				number: QuestionAlternative.A
			},
			{
				text: '$t = \\ln (\\frac{1}{2}) RC$',
				number: QuestionAlternative.B
			},
			{
				text: '$t = \\ln (\\frac{2}{3}) RC$',
				number: QuestionAlternative.C
			},
			{
				text: '$t = \\ln (2) RC$',
				number: QuestionAlternative.D
			},
			{
				text: '$t = \\ln (\\frac{1}{4}) RC$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=5YJ8ERMZgPU'
		},
		questionNumber: 8,
		statement: {
			text: 'Em um circuito $RC$, temos uma fonte com força eletromotriz $\\varepsilon$, um resistor de resistência $R$ e um capacitor de capacitância $C$. No instante $t = 0$, o circuito é fechado, fazendo com que o capacitor inicialmente descarregado comece a se carregar de acordo com a equação $q(t) = C\\Epsilon(1 − e^{-\\frac{t}{RC}})$. Em que instante de tempo a diferença de potencial entre os terminais do capacitor é igual à diferença de potencial entre os terminais do resistor?'
		},
		alternatives: [
			{
				text: '$t = \\ln (2) RC$',
				number: QuestionAlternative.A
			},
			{
				text: '$t = \\ln (\\frac{1}{2}) RC$',
				number: QuestionAlternative.B
			},
			{
				text: '$t = \\ln (\\frac{2}{3}) RC$',
				number: QuestionAlternative.C
			},
			{
				text: '$t = RC$',
				number: QuestionAlternative.D
			},
			{
				text: '$t = \\ln (\\frac{1}{4}) RC$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um gás ideal de $N$ partículas clássicas e indistinguíveis em contato com um reservatório térmico à temperatura $T$ e ocupando um volume $V$. A probabilidade de encontrar $N/3$ moléculas em um volume $V/3$ e as demais moléculas no volume restante é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{N!}{(\\frac{N}{3})! (\\frac{2N}{3})!} (\\frac{1}{3})^{N/3} (\\frac{2}{3})^{2N/3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{2}{9}$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{1}{3})^{N/3} (\\frac{2}{3})^{2N/3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{N!}{(\\frac{N}{3})!} (\\frac{1}{3})^{N/3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{1}{3})^{N/3}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um gás ideal de $N$ partículas clássicas e indistinguíveis em contato com um reservatório térmico à temperatura $T$ e ocupando um volume $V$. A probabilidade de encontrar $N/4$ moléculas em um volume $V/4$ e as demais moléculas no volume restante é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{N!}{(\\frac{N}{4})! (\\frac{3N}{4})!} (\\frac{1}{4})^{N/4} (\\frac{3}{4})^{3N/4}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{3}{16}$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{1}{4})^{N/4} (\\frac{3}{4})^{3N/4}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{N!}{(\\frac{N}{4})!} (\\frac{1}{4})^{N/4}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{1}{4})^{N/4}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema formado por $5$ partículas não interagentes e localizadas, todas em contato com um mesmo reservatório térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. Cada partícula é caracterizada pela variável $n_i$ que assume os valores $0$ ou $1$. A energia do sistema vale $\\epsilon(n_1 + n_2 + n_3 + n_4 + n_5)$, sendo $\\epsilon > 0$ constante. A probabilidade de que a energia total do sistema seja maior ou igual a $4\\epsilon$ é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{5e^{-4\\beta\\epsilon} + e^{-5\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{10e^{-3\\beta\\epsilon} + 5e^{-4\\beta\\epsilon} + e^{-5\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{e^{-4\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{4}{5}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1 + 5e^{-\\beta\\epsilon} + 10e^{-2\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema formado por $5$ partículas não interagentes e localizadas, todas em contato com um mesmo reservatório térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. Cada partícula é caracterizada pela variável $n_i$ que assume os valores $0$ ou $1$. A energia do sistema vale $\\epsilon(n_1 + n_2 + n_3 + n_4 + n_5)$, sendo $\\epsilon > 0$ constante. A probabilidade de que a energia total do sistema seja menor ou igual a $\\epsilon$ é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{1 + 5e^{-\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{1 + 5e^{-\\beta\\epsilon} + 10e^{-2\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2}{5}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{10e^{-3\\beta\\epsilon} + 5e^{-4\\beta\\epsilon} + e^{-5\\beta\\epsilon}}{(1 + e^{-\\beta\\epsilon})^5}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um sistema formado por 2 <strong>bósons</strong> idênticos de spin zero e não interagentes, cada um dos quais pode ocupar dois níveis de energia: o estado fundamental, de energia $0$, e o estado excitado, de energia $\\epsilon$. O sistema está em contato com um reservatório térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. A energia média $U$ desse sistema é então dada por:'
		},
		alternatives: [
			{
				text: '$U = \\frac{\\epsilon (e^{-\\beta\\epsilon} + 2e^{-2\\beta\\epsilon})}{1 + e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$U = \\frac{2\\epsilon e^{-\\beta\\epsilon}}{1 + e^{-\\beta\\epsilon}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$U = \\frac{\\epsilon (e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon})}{1 + e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$U = k_BT$',
				number: QuestionAlternative.D
			},
			{
				text: '$U = \\frac{\\epsilon (e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon})}{(1 + e^{-\\beta\\epsilon})^2}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um sistema formado por 2 <strong>férmions</strong> idênticos sem spin e não interagentes. Cada férmion pode ocupar três níveis de energia: o estado fundamental, de energia $0$, um primeiro estado excitado, de energia $\\epsilon$, e um segundo estado excitado, de energia $2\\epsilon$. O sistema está em contato com um reservatório térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. A energia média $U$ desse sistema é então dada por:'
		},
		alternatives: [
			{
				text: '$U = \\frac{\\epsilon (1 + 2e^{-\\beta\\epsilon} + 3e^{-2\\beta\\epsilon})}{1 + e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$U = \\frac{3\\epsilon e^{-\\beta\\epsilon}}{1 + e^{-\\beta\\epsilon}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$U = \\frac{\\epsilon (e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon})}{1 + e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$U = k_BT$',
				number: QuestionAlternative.D
			},
			{
				text: '$U = \\frac{\\epsilon (1 + e^{-\\beta\\epsilon} + e^{-2\\beta\\epsilon})}{(1 + e^{-\\beta\\epsilon})^3}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 4,
		statement: {
			text: 'Um sistema é formado por $N$ íons magnéticos localizados e não interagentes entre si, em contato com um banho térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. Cada íon tem energia dada por $\\epsilon = −\\mu_0 h S_i$, onde $\\mu_0$, $h$ e $S_i$ denotam, respectivamente, o magneton de Bohr, a intensidade do campo magnético e a variável de spin, esta última podendo assumir os valores $S_i = ±1$. O valor de $\\beta \\mu_0 h$ em que a magnetização por íon $m = \\sum^N_{i=1}⟨S_i⟩/N$ vale $0,8\\mu_0$ é dado por:'
		},
		alternatives: [
			{
				text: '$\\beta\\mu_0h = \\tanh^{-1}(0,8)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\beta\\mu_0h = \\sinh^{-1}(0,8)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\beta\\mu_0h = \\cosh^{-1}(0,8)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\beta\\mu_0h = -\\tanh^{-1}(0,8)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\beta\\mu_0h = -\\sinh^{-1}(0,8)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=IXbpgypkPGs'
		},
		questionNumber: 4,
		statement: {
			text: 'Um sistema é formado por $N$ íons magnéticos localizados e não interagentes entre si, em contato com um banho térmico de temperatura $T [\\beta = (k_B T)^{-1}]$. Cada íon tem energia dada por $\\epsilon = −\\mu_0 h S_i$, onde $\\mu_0$, $h$ e $S_i$ denotam, respectivamente, o magneton de Bohr, a intensidade do campo magnético e a variável de spin, esta última podendo assumir os valores $S_i = ±1$. O valor de $\\beta \\mu_0 h$ em que a magnetização por íon $m = \\sum^N_{i=1}⟨S_i⟩/N$ vale $−0,2\\mu_0$ é dado por:'
		},
		alternatives: [
			{
				text: '$\\beta\\mu_0h = -\\tanh^{-1}(0,2)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\beta\\mu_0h = -\\sinh^{-1}(0,2)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\beta\\mu_0h = \\cosh^{-1}(0,2)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\beta\\mu_0h = \\tanh^{-1}(0,2)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\beta\\mu_0h = \\sinh^{-1}(0,2)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 1,
		statement: {
			text: 'Sabe-se que a transferência de energia entre as partes adjacentes de um corpo, em consequência da diferença entre suas temperaturas, ocorre da parte mais quente para a mais fria. Considere então uma barra cilíndrica e homogênea disposta entre dois reservatórios térmicos, cada um deles contendo um mol de gás ideal. O primeiro sustenta uma pressão $p_1 = p_0$ e possui volume $V_1 = V_0$, enquanto o outro sustenta uma pressão $p_2 = 2p_0$ e possui volume $V_2 = 3V_0$, conforme a figura abaixo.<br/><br/>No estado estacionário, sabe-se que, nesse caso, a taxa de transferência de calor, $dQ/dt$, não deve depender de $x$, a variável de posição indicada na figura. Portanto, a temperatura deve depender linearmente de $x$, segunda uma expressão dada por:',
			image: '2024-1/te-1a.webp'
		},
		alternatives: [
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{5}{L}x + 6)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{7}{L}x + 8)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{p_0 V_0}{R} (x + 1)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{p_0 V_0}{R} x$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{5}{L}x + 3)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 1,
		statement: {
			text: 'Sabe-se que a transferência de energia entre as partes adjacentes de um corpo, em consequência da diferença entre suas temperaturas, ocorre da parte mais quente para a mais fria. Considere então uma barra cilíndrica e homogênea disposta entre dois reservatórios térmicos, cada um deles contendo um mol de gás ideal. O primeiro sustenta uma pressão $p_1 = p_0$ e possui volume $V_1 = V_0$, enquanto o outro sustenta uma pressão $p_2 = 4p_0$ e possui volume $V_2 = 2V_0$, conforme a figura abaixo.<br/><br/>No estado estacionário, sabe-se que, nesse caso, a taxa de transferência de calor, $dQ/dt$, não deve depender de $x$, a variável de posição indicada na figura. Portanto, a temperatura deve depender linearmente de $x$, segunda uma expressão dada por:',
			image: '2024-1/te-1b.webp'
		},
		alternatives: [
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{7}{L}x + 8)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{5}{L}x + 6)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{p_0 V_0}{R} (x + 1)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{p_0 V_0}{R} x$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{p_0 V_0}{R} (-\\frac{7}{L}x + 7)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma bola de ferro cai de uma altura $h$, a partir do repouso, sobre uma superfície de concreto. Após o primeiro impacto, a bola é lançada de volta a uma altura de $\\frac{h}{2}$. Suponha que toda a energia mecânica perdida após o primeiro impacto com o chão seja transformada em energia interna da bola. Dado o calor específico do ferro $c_F$ e a aceleração gravitacional local $g$, determine o aumento de temperatura da bola após a primeira colisão.'
		},
		alternatives: [
			{
				text: '$\\Delta{T} = \\frac{gh}{2c_F}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{T} = \\frac{gh}{3c_F}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{T} = \\frac{2gh}{3c_F}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{T} = \\frac{c_F}{2gh}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{T} = \\frac{gh}{c_F}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma bola de ferro cai de uma altura $h$, a partir do repouso, sobre uma superfície de concreto. Após o primeiro impacto, a bola é lançada de volta a uma altura de $\\frac{h}{3}$. Suponha que toda a energia mecânica perdida após o primeiro impacto com o chão seja transformada em energia interna da bola. Dado o calor específico do ferro $c_F$ e a aceleração gravitacional local $g$, determine o aumento de temperatura da bola após a primeira colisão.'
		},
		alternatives: [
			{
				text: '$\\Delta{T} = \\frac{2gh}{3c_F}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{T} = \\frac{gh}{2c_F}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{T} = \\frac{gh}{2c_F}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{T} = \\frac{3c_F}{2gh}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{T} = \\frac{gh}{c_F}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 3,
		statement: {
			text: 'O motor de um refrigerador fornece uma potência de $100$ watts. Lembre-se de que coeficiente de desempenho de um refrigerador é sempre medido com a razão do calor extraído da fonte fria pelo trabalho fornecido pelo motor desse refrigerador. Considerando que o congelador do refrigerador está a uma temperatura de $270 K$ e o ar ambiente está a uma temperatura de $300 K$, e supondo um coeficiente de desempenho ideal, qual é a quantidade máxima de calor que pode ser extraída do congelador em um intervalo de tempo de $\\Delta{t} = \\text{10 min}$?'
		},
		alternatives: [
			{
				text: '$5,4 \\times 10^{5} J$',
				number: QuestionAlternative.A
			},
			{
				text: '$2,6 \\times 10^{7} J$',
				number: QuestionAlternative.B
			},
			{
				text: '$1,6 \\times 10^{5} J$',
				number: QuestionAlternative.C
			},
			{
				text: '$2,7 \\times 10^{5} J$',
				number: QuestionAlternative.D
			},
			{
				text: '$5,2 \\times 10^{6} J$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 3,
		statement: {
			text: 'O motor de um refrigerador fornece uma potência de $50$ watts. Lembre-se de que coeficiente de desempenho de um refrigerador é sempre medido com a razão do calor extraído da fonte fria pelo trabalho fornecido pelo motor desse refrigerador. Considerando que o congelador do refrigerador está a uma temperatura de $270 K$ e o ar ambiente está a uma temperatura de $300 K$, e supondo um coeficiente de desempenho ideal, qual é a quantidade máxima de calor que pode ser extraída do congelador em um intervalo de tempo de $\\Delta{t} = \\text{10 min}$?'
		},
		alternatives: [
			{
				text: '$2,7 \\times 10^{5} J$',
				number: QuestionAlternative.A
			},
			{
				text: '$1,3 \\times 10^{7} J$',
				number: QuestionAlternative.B
			},
			{
				text: '$8,0 \\times 10^{6} J$',
				number: QuestionAlternative.C
			},
			{
				text: '$5,4 \\times 10^{5} J$',
				number: QuestionAlternative.D
			},
			{
				text: '$2,4 \\times 10^{6} J$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere duas porções do mesmo líquido com a mesma massa $m$, mas com temperaturas diferentes $T$ e $2T$. As duas porções são misturadas e a mistura é mantida termicamente isolada. O calor específico do líquido é constante e dado por $c$. O sistema atinge o equilíbrio. A variação de entropia neste processo é dada por:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{9}{8})$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{4}{3})$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{5}{4})$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = mc \\ln 2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=o5k3FavEOKI'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere duas porções do mesmo líquido com a mesma massa $m$, mas com temperaturas diferentes $T$ e $3T$. As duas porções são misturadas e a mistura é mantida termicamente isolada. O calor específico do líquido é constante e dado por $c$. O sistema atinge o equilíbrio. A variação de entropia neste processo é dada por:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{4}{3})$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{9}{8})$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = mc \\ln (\\frac{5}{4})$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = mc \\ln 2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 1,
		statement: {
			text: 'Em um referencial inercial, a força resultante sobre uma partícula de massa de repouso $m$ é $F = At \\hat{x}$, onde $A$ é uma constante. Se o momento inicial da partícula nesse referencial é nulo, qual é a sua velocidade medida no tempo $t$ nesse mesmo referencial?'
		},
		alternatives: [
			{
				text: '$\\frac{At^2 c}{\\sqrt{4m^2 c^2 + A^2 t^4}} \\hat{x}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{At^2 c}{\\sqrt{2m^2 c^2 + A^2 t^4}} \\hat{x}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{At^2 c}{\\sqrt{m^2 c^2 + A^2 t^4}} \\hat{x}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2At^2 c}{\\sqrt{m^2 c^2 + 4A^2 t^4}} \\hat{x}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{At^2 c}{\\sqrt{4m^2 c^2 + 2A^2 t^4}} \\hat{x}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 1,
		statement: {
			text: 'Em um referencial inercial, a força resultante sobre uma partícula de massa de repouso $m$ é $F = At^2 \\hat{x}$, onde $A$ é uma constante. Se o momento inicial da partícula nesse referencial é nulo, qual é a sua velocidade medida no tempo $t$ nesse mesmo referencial?'
		},
		alternatives: [
			{
				text: '$\\frac{At^3 c}{\\sqrt{9m^2 c^2 + A^2 t^6}} \\hat{x}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{At^3 c}{\\sqrt{9m^2 c^2 + 3A^2 t^6}} \\hat{x}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{3At^3 c}{\\sqrt{m^2 c^2 + 9A^2 t^6}} \\hat{x}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{At^3 c}{\\sqrt{m^2 c^2 + 3A^2 t^6}} \\hat{x}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{At^3 c}{\\sqrt{m^2 c^2 + A^2 t^6}} \\hat{x}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma molécula diatômica é formada por dois átomos idênticos cujos núcleos, de massa $m$, estão separados por uma distância $d$. A energia necessária para levar a molécula do estado fundamental para o primeiro estado excitado rotacional é:'
		},
		alternatives: [
			{
				text: '$\\frac{2\\hbar^2}{md^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\hbar^2}{md^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar^2}{2md^2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{4\\pi^2 \\hbar^2}{md^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{2\\pi^2 \\hbar^2}{md^2}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma molécula diatômica é composta por dois átomos iguais, cada um de massa $m$. A energia necessária para levar a molécula do estado fundamental para o primeiro estado excitado rotacional é $\\Epsilon$. Qual é a distância média entre os núcleos dos átomos dessa molécula?'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{2\\hbar^2}{m\\Epsilon}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{\\frac{\\hbar^2}{m\\Epsilon}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{\\frac{\\hbar^2}{2m\\Epsilon}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{\\frac{2\\pi^2 \\hbar^2}{m\\Epsilon}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\sqrt{\\frac{4\\pi^2 \\hbar^2}{m\\Epsilon}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma partícula de massa $m$ está sujeita ao potencial unidimensional $V(x) = V_0 \\tanh^2 (x/d)$ (ilustrado a baixo), onde $V_0$ e $d$ são constantes positivas. Para $V_0$ suficientemente grande, a diferença de energia entre os dois estados ligados de mais baixa energia é aproximadamente igual a:',
			image: '2024-1/fm-3a.webp'
		},
		alternatives: [
			{
				text: '$\\frac{\\hbar}{d} \\sqrt{\\frac{2V_0}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\hbar}{d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar}{d} \\sqrt{\\frac{V_0}{2m}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2\\hbar}{d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\hbar}{2d} \\sqrt{\\frac{V_0}{m}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma partícula de massa $m$ está sujeita ao potencial unidimensional $V(x) = −V_0 \\exp{(-\\frac{x^2}{2d^2})}$ (ilustrado a baixo), onde $V_0$ e $d$ são constantes positivas. Para $V_0$ suficientemente grande, a diferença de energia entre os dois estados ligados de mais baixa energia é aproximadamente igual a:',
			image: '2024-1/fm-3b.webp'
		},
		alternatives: [
			{
				text: '$\\frac{\\hbar}{d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{2\\hbar}{d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar}{2d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{4\\hbar}{d} \\sqrt{\\frac{V_0}{m}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\hbar}{4d} \\sqrt{\\frac{V_0}{m}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 4,
		statement: {
			text: 'Um planeta descreve uma órbita circular de raio $R$ em torno de uma estrela cuja potência irradiada é $P$. Suponha que o planeta possa ser tratado aproximadamente como um corpo negro de formato esférico em equilíbrio térmico. Sendo $k_B$ a constante de Boltzmann e $\\sigma$ a constante de Stefan-Boltzmann, a temperatura desse planeta é:'
		},
		alternatives: [
			{
				text: '$(\\frac{P}{16\\pi \\sigma R^2})^\\frac{1}{4}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{4P}{\\pi k_B R^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{P}{4\\pi k_B R^2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{P}{\\pi k_B R^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{P}{\\pi \\sigma R^2})^\\frac{1}{4}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 4,
		statement: {
			text: 'Um planeta cuja temperatura média é $T$ descreve uma órbita circular de raio $R$ em torno de uma estrela. Suponha que o planeta possa ser tratado aproximadamente como um corpo negro de formato esférico em equilíbrio térmico. Sendo $k_B$ a constante de Boltzmann e $\\sigma$ a constante de Stefan-Boltzmann, a potência irradiada pela estrela é:'
		},
		alternatives: [
			{
				text: '$16\\pi \\sigma R^2 T^4$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\pi}{4} R^2 k_B T$',
				number: QuestionAlternative.B
			},
			{
				text: '$4\\pi R^2 k_B T$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\pi R^2 k_B T$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\pi \\sigma R^2 T^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de efeito fotoelétrico, uma superfície metálica é iluminada com luz verde ($\\lambda_1 = \\text{500 nm}$). Os elétrons ejetados são freados totalmente quando um potencial de $0,48 V$ é aplicado. Ao fazermos incidir luz violeta ($\\lambda_2 = \\text{400 nm}$), o potencial necessário para frear totamente os elétrons é:'
		},
		alternatives: [
			{
				text: '$1,1 V$',
				number: QuestionAlternative.A
			},
			{
				text: '$2,0 V$',
				number: QuestionAlternative.B
			},
			{
				text: '$3,1 V$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,48 V$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,62 V$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 5,
		statement: {
			text: 'Em um experimento de efeito fotoelétrico, uma superfície metálica é iluminada com luz verde ($\\lambda_1 = \\text{500 nm}$). Os elétrons ejetados são freados totalmente quando um potencial de $0,48 V$ é aplicado. Ao fazermos incidir luz laranja ($\\lambda_2 = \\text{600 nm}$), o potencial necessário para frear totamente os elétrons é, com um algarismo significativo:'
		},
		alternatives: [
			{
				text: '$0,07 V$',
				number: QuestionAlternative.A
			},
			{
				text: '$2 V$',
				number: QuestionAlternative.B
			},
			{
				text: '$3 V$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,4 V$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,2 V$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere que o objetivo de um certo microscópio seja atingir uma resolução suficiente para "enxergar" um átomo. Comparando microscópios eletrônicos e óticos que utilizam o mesmo comprimento de onda $\\lambda$, a razão entre as energias dos elétrons e dos fótons para obter a resolução desejada, em termos das constantes universais $h$ (a constante de Planck), $m_e$ (a massa do elétron) e $c$ (a velocidade da luz no vácuo), é:'
		},
		alternatives: [
			{
				text: '$(\\frac{h}{2m_e c}) \\frac{1}{\\lambda}$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\frac{h}{m_e c}) \\frac{1}{\\lambda}$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{m_e}{hc}) \\lambda$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\frac{hc}{m_e}) \\frac{1}{\\lambda}$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{2m_e h}{c}) \\lambda$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere que o objetivo de um certo microscópio seja atingir uma resolução suficiente para "enxergar" um átomo. Comparando microscópios eletrônicos e óticos que utilizam o mesmo comprimento de onda $\\lambda$, a razão entre as energias dos fótons e dos elétrons para obter a resolução desejada, em termos das constantes universais $h$ (a constante de Planck), $m_e$ (a massa do elétron) e $c$ (a velocidade da luz no vácuo), é:'
		},
		alternatives: [
			{
				text: '$(\\frac{2m_e c}{h}) \\lambda$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\frac{m_e c}{h}) \\lambda$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\frac{hc}{m_e}) \\frac{1}{\\lambda}$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\frac{m_e}{hc}) \\lambda$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\frac{c}{2m_e h}) \\frac{1}{\\lambda}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 7,
		statement: {
			text: 'Em um acelerador de partículas, estuda-se a colisão frontal de duas partículas idênticas. No referencial do laboratório, as partículas movem-se em sentidos opostos com velocidades de módulo $0,50c$. No referencial de uma das partículas, o módulo da velocidade com que a outra partícula se aproxima é:'
		},
		alternatives: [
			{
				text: '$0,80 c$',
				number: QuestionAlternative.A
			},
			{
				text: '$0,69 c$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,55 c$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,38 c$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,88 c$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 7,
		statement: {
			text: 'Em um acelerador de partículas, estuda-se a colisão frontal de duas partículas idênticas. No referencial do laboratório, as partículas movem-se em sentidos opostos com velocidades de módulo $0,30c$. No referencial de uma das partículas, o módulo da velocidade com que a outra partícula se aproxima é:'
		},
		alternatives: [
			{
				text: '$0,55 c$',
				number: QuestionAlternative.A
			},
			{
				text: '$0,69 c$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,80 c$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,38 c$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,88 c$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 8,
		statement: {
			text: 'O olho humano é um sensor ótico extremamente sensível a fótons da região do espectro visível. Tipicamente, a retina pode absorver uma potência luminosa de aproximadamente $4 \\cdot 10^{-17} W$ em um comprimento de onda de $\\text{500 nm}$. Isto quer dizer que a retina absorve em torno de:'
		},
		alternatives: [
			{
				text: '$100$ fótons por segundo',
				number: QuestionAlternative.A
			},
			{
				text: '$10^{13}$ fótons por segundo',
				number: QuestionAlternative.B
			},
			{
				text: '$6 \\cdot 10^{20}$ fótons por segundo',
				number: QuestionAlternative.C
			},
			{
				text: '$6000$ fótons por segundo',
				number: QuestionAlternative.D
			},
			{
				text: '$200$ fótons por segundo',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=acwDCHT_Um0'
		},
		questionNumber: 8,
		statement: {
			text: 'O olho humano é um sensor ótico extremamente sensível a fótons da região do espectro visível. Considere que a retina possa absorver em torno de 50 fótons de comprimento de onda $\\text{450 nm}$ por segundo. Isso quer dizer que a retina absorve uma potência luminosa de aproximadamente:'
		},
		alternatives: [
			{
				text: '$2,2 \\cdot 10^{-17} W$',
				number: QuestionAlternative.A
			},
			{
				text: '$2,2 \\cdot 10^{-6} W$',
				number: QuestionAlternative.B
			},
			{
				text: '$225 W$',
				number: QuestionAlternative.C
			},
			{
				text: '$4,0 \\cdot 10^{-15} W$',
				number: QuestionAlternative.D
			},
			{
				text: '$7,8 \\cdot 10^{-17} W$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 1,
		statement: {
			text: 'O Hamiltoniano de um elétron em um campo magnético uniforme pode ter a seguinte representação matricial:<br/><br/>$$\\cal{H} = b \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix} \\text{,}$$<br/>onde $b = −\\hbar\\gamma B/2$, $\\gamma$ é a razão giromagnética do elétron e $B$ é a intensidade do campo magnético. Das alternativas abaixo, indique a verdadeira:'
		},
		alternatives: [
			{
				text: 'Os autovalores de energia são $±b$, correspondentes a autoestados de $\\cal{H}$ nos quais o spin do elétron está alinhado ou oposto ao campo magnético.',
				number: QuestionAlternative.A
			},
			{
				text: 'Os autovalores de energia são $±b/2$, correspondentes a autoestados de $\\cal{H}$ nos quais o spin do elétron está alinhado ou oposto ao campo magnético.',
				number: QuestionAlternative.B
			},
			{
				text: 'Os autovalores de energia são $±b$, com $−b$ correspondente ao autoestado de $\\cal{H}$ no qual o spin do elétron está perpendicular ao campo magnético e $+b$ àquele no qual o spin do elétron está paralelo ao campo magnético.',
				number: QuestionAlternative.C
			},
			{
				text: 'Os autovalores de energia são $±b/2$, com $−b/2$ correspondente ao autoestado de $\\cal{H}$ no qual o spin do elétron está perpendicular ao campo magnético e $+b/2$ àquele no qual o spin do elétron está paralelo ao campo magnético.',
				number: QuestionAlternative.D
			},
			{
				text: 'Os dois autoestados de $\\cal{H}$, um no qual o spin do elétron está oposto ao campo magnético e o outro no qual o spin do elétron está alinhado com o campo magnético, possuem autovalores de energia degenerados, iguais a $b$.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 1,
		statement: {
			text: 'O Hamiltoniano de um elétron em um campo magnético uniforme pode ter a seguinte representação matricial:<br/><br/>$$\\cal{H} = \\hbar c \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix} \\text{,}$$<br/>onde $c = −\\gamma B/2$, $\\gamma$ é a razão giromagnética do elétron e $B$ é a intensidade do campo magnético. Das alternativas abaixo, indique a verdadeira:'
		},
		alternatives: [
			{
				text: 'Os autovalores de energia são $±\\hbar c$, correspondentes a autoestados de $\\cal{H}$ nos quais o spin do elétron está alinhado ou oposto ao campo magnético',
				number: QuestionAlternative.A
			},
			{
				text: 'Os autovalores de energia são $±\\hbar c/2$, correspondentes a autoestados de $\\cal{H}$ nos quais o spin do elétron está alinhado ou oposto ao campo magnético.',
				number: QuestionAlternative.B
			},
			{
				text: 'Os autovalores de energia são $±\\hbar c$, com $−\\hbar c$ correspondente ao autoestado de $\\cal{H}$ no qual o spin do elétron está perpendicular ao campo magnético e $+\\hbar c$ àquele no qual o spin do elétron está paralelo ao campo magnético.',
				number: QuestionAlternative.C
			},
			{
				text: 'Os autovalores de energia são $±\\hbar c/2$, com $−\\hbar c/2$ correspondente ao autoestado de $\\cal{H}$ no qual o spin do elétron está perpendicular ao campo magnético e $+\\hbar c/2$ àquele no qual o spin do elétron está paralelo ao campo magnético.',
				number: QuestionAlternative.D
			},
			{
				text: 'Os dois autoestados de $\\cal{H}$, um no qual o spin do elétron está oposto ao campo magnético e o outro no qual o spin do elétron está alinhado com o campo magnético, possuem autovalores de energia degenerados, iguais a $\\hbar c$.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 2,
		statement: {
			text: 'Sendo V para afirmativa verdadeira e F para afirmativa falsa, indique a sequência correspondente às afirmativas abaixo acerca de partículas quânticas idênticas:<br/><br/><ul><li>Em um sistema de partículas quânticas idênticas, a indistinguibilidade das partículas leva à simetrização ou antissimetrização da função de onda do sistema com relação à permutação das coordenadas (incluindo possíveis índices de spin) das partículas.</li><li>Partículas quânticas idênticas são distinguíveis sendo possível identificar as coordenadas (incluindo possíveis índices de spin) de cada partícula na função de onda do sistema de partículas quânticas idênticas.</li><li>O princípio de exclusão de Pauli decorre da antissimetria da função de onda de um sistema de férmions idênticos com relação à permutação das coordenadas (incluindo possíveis índices de spin) dos férmions na dita função de onda.</li><li>A condensação de Bose-Einstein decorre da antissimetria da função de onda de um sistema de férmions idênticos com relação à permutação das coordenadas (incluindo possíveis índices de spin) dos férmions na dita função de onda.</li></ul>'
		},
		alternatives: [
			{
				text: 'V, F, V, F',
				number: QuestionAlternative.A
			},
			{
				text: 'V, F, V, V',
				number: QuestionAlternative.B
			},
			{
				text: 'F, F, V, F',
				number: QuestionAlternative.C
			},
			{
				text: 'V, F, F, F',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 2,
		statement: {
			text: 'Sendo V para afirmativa verdadeira e F para afirmativa falsa, indique a sequência correspondente às afirmativas abaixo acerca de partículas quânticas idênticas:<br/><br/><ul><li>Uma vez que partículas quânticas idênticas são distinguíveis não é necessário simetrizar ou antissimetrizar a função de onda de um sistema de partículas quânticas idênticas com relação à permutação das coordenadas (incluindo possíveis índices de spin) das partículas.</li><li>Partículas quânticas idênticas são indistinguíveis não sendo possível identificar as coordenadas (incluindo possíveis índices de spin) de cada partícula na função de onda de um sistema de partículas quânticas idênticas.</li><li>O princípio de exclusão de Pauli decorre da simetria da função de onda de um sistema de bósons idênticos com relação à permutação das coordenadas (incluindo possíveis índices de spin) dos bósons na dita função de onda.</li><li>A condensação de Bose-Einstein decorre da simetria da função de onda de um sistema bósons idênticos com relação à permutação das coordenadas (incluindo possíveis índices de spin) dos bósons na dita função de onda.</li><ul>'
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
				text: 'F, F, F, V',
				number: QuestionAlternative.C
			},
			{
				text: 'V, V, F, F',
				number: QuestionAlternative.D
			},
			{
				text: 'F, V, V, F',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 3,
		statement: {
			text: 'As matrizes $S_x$, $S_y$ e $S_z$ que representam as componentes do spin de um elétron ao longo dos eixos $x$, $y$ e $z$ na representação em que $S_z$ é diagonal são, respectivamente,<br/><br/>$$S_x = \\frac{\\hbar}{2} \\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix} \\text{,} \\quad S_y = \\frac{\\hbar}{2} \\begin{bmatrix}0 & -i \\\\ i & 0\\end{bmatrix} \\text{,} \\quad S_z = \\frac{\\hbar}{2} \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$<br/>Considere um estado de spin de um elétron dado por $\\ket{\\chi} = a\\ket{\\uparrow} + b\\ket{\\downarrow}$, onde $a$ e $b$ são números complexos, e os vetores ortonormais que constituem a base de estados empregada,<br/><br/>$$\\ket{\\uparrow} = \\begin{bmatrix}1 \\\\ 0\\end{bmatrix} \\quad \\text{e} \\quad \\ket{\\downarrow} = \\begin{bmatrix}0 \\\\ 1\\end{bmatrix} \\text{,}$$<br/>são os autoestados de $S_z$ com autovalores $±\\hbar/2$, respectivamente. Sendo $Re(z)$ a parte real do número complexo $z$, os valores esperados do spin do elétron no estado $\\ket{\\chi}$ ao longo dos eixos $z$ e $x$ são, respectivamente:'
		},
		alternatives: [
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 - |b|^2) \\quad \\text{e} \\quad +\\hbar Re(ab^*)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 + |b|^2) \\quad \\text{e} \\quad +\\hbar Re(ab^*)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 - |b|^2) \\quad \\text{e} \\quad -\\hbar Re(ab^*)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{\\hbar}{2} (|b|^2 - |a|^2) \\quad \\text{e} \\quad +\\hbar Re(ab^*)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\hbar}{2} (|b|^2 - |a|^2) \\quad \\text{e} \\quad -\\hbar Re(ab^*)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 3,
		statement: {
			text: 'As matrizes $S_x$, $S_y$ e $S_z$ que representam as componentes do spin de um elétron ao longo dos eixos $x$, $y$ e $z$ na representação em que $S_z$ é diagonal são, respectivamente,<br/><br/>$$S_x = \\frac{\\hbar}{2} \\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix} \\text{,} \\quad S_y = \\frac{\\hbar}{2} \\begin{bmatrix}0 & -i \\\\ i & 0\\end{bmatrix} \\text{,} \\quad S_z = \\frac{\\hbar}{2} \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$<br/>Considere um estado de spin de um elétron dado por $\\ket{\\chi} = a\\ket{\\uparrow} + b\\ket{\\downarrow}$, onde $a$ e $b$ são números complexos, e os vetores ortonormais que constituem a base de estados empregada,<br/><br/>$$\\ket{\\uparrow} = \\begin{bmatrix}1 \\\\ 0\\end{bmatrix} \\quad \\text{e} \\quad \\ket{\\downarrow} = \\begin{bmatrix}0 \\\\ 1\\end{bmatrix} \\text{,}$$<br/>são os autoestados de $S_z$ com autovalores $±\\hbar/2$, respectivamente. Sendo $Im(z)$ a parte imaginária do número complexo $z$, os valores esperados do spin do elétron no estado $\\ket{\\chi}$ ao longo dos eixos $z$ e $y$ são, respectivamente:'
		},
		alternatives: [
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 - |b|^2) \\quad \\text{e} \\quad -\\hbar Im(ab^*)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 + |b|^2) \\quad \\text{e} \\quad +\\hbar Im(ab^*)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar}{2} (|a|^2 - |b|^2) \\quad \\text{e} \\quad +\\hbar Im(ab^*)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{\\hbar}{2} (|b|^2 - |a|^2) \\quad \\text{e} \\quad +\\hbar Im(ab^*)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\hbar}{2} (|b|^2 - |a|^2) \\quad \\text{e} \\quad -\\hbar Im(ab^*)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 4,
		statement: {
			text: 'O operador Hamiltoniano de um oscilador harmônico quântico é dado por $H = \\hbar\\omega(a^{\\dagger}a + 1/2)$, com $a^{\\dagger}a \\ket{n} = n\\ket{n}$ e $\\ket{n}$ o autoestado de $H$ referente ao $n$-ésimo nível de energia do oscilador. Seja $\\ket{\\psi} = \\sqrt{0,4}\\ket{2} + \\sqrt{0,6}\\ket{3}$ o estado de sobreposição normalizado de um dado oscilador em um dado instante de tempo. O valor esperado da energia desse oscilador é:'
		},
		alternatives: [
			{
				text: '$3,1 \\hbar\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$3,1 \\hbar\\omega^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$2,0 \\hbar\\omega$',
				number: QuestionAlternative.C
			},
			{
				text: '$2,0 \\hbar\\omega^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\hbar\\omega$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 4,
		statement: {
			text: 'O operador Hamiltoniano de um oscilador harmônico quântico é dado por $H = \\hbar\\omega(a^{\\dagger}a + 1/2)$, com $a^{\\dagger}a \\ket{n} = n\\ket{n}$ e $\\ket{n}$ o autoestado de $H$ referente ao $n$-ésimo nível de energia do oscilador. Seja $\\ket{\\psi} = \\sqrt{0,3}\\ket{2} + \\sqrt{0,7}\\ket{3}$ o estado de sobreposição normalizado de um dado oscilador em um dado instante de tempo. O valor esperado da energia desse oscilador é:'
		},
		alternatives: [
			{
				text: '$3,2 \\hbar\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$3,2 \\hbar\\omega^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,5 \\hbar\\omega$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,5 \\hbar\\omega^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\hbar\\omega$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 5,
		statement: {
			text: 'A determinação do estado de spin dos elétrons de um feixe pode ser feita através de aparatos do tipo Stern-Gerlach, que separam o feixe de acordo com a componente de spin ao longo da direção definida pelo campo magnético no interior do aparato. Suponha uma montagem sequencial de três desses aparatos. O primeiro mede a componente $z$ do spin e o o valor $\\hbar/2$ é obtido. O segundo mede a componente $y$ do spin e retorna $-\\hbar/2$. Se terceiro aparato medir a componente $x$ do spin, qual é a probabilidade de obtermos o valor $\\hbar/2$?'
		},
		alternatives: [
			{
				text: '$1/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.C
			},
			{
				text: '$3/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$1$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 5,
		statement: {
			text: 'A determinação do estado de spin dos elétrons de um feixe pode ser feita através de aparatos do tipo Stern-Gerlach, que separam o feixe de acordo com a componente de spin ao longo da direção definida pelo campo magnético no interior do aparato. Suponha uma montagem sequencial de três desses aparatos. O primeiro mede a componente $z$ do spin e o o valor $-\\hbar/2$ é obtido. O segundo mede a componente $x$ do spin e retorna $\\hbar/2$. Se terceiro aparato medir a componente $y$ do spin, qual é a probabilidade de obtermos o valor $-\\hbar/2$?'
		},
		alternatives: [
			{
				text: '$1/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.C
			},
			{
				text: '$3/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$1$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere uma partícula de massa $m$ movendo-se em uma dimensão sob a ação de um potencial do tipo poço infinito,<br/><br/>$$V(x) = \\begin{cases}0, & |x| \\lt a/2 \\\\ \\infty, & |x| \\geq a/2\\end{cases} \\space \\text{,}$$<br/>sendo $a$ uma constante positiva com unidades de distância. A autofunção de energia para o estado fundamental desse problema é dada por<br/><br/>$$\\psi_0(x) = \\begin{cases}\\sqrt{\\frac{2}{a}}\\cos{(\\frac{\\pi x}{a})}, & |x| \\lt a/2 \\\\ 0, & |x| \\geq a/2\\end{cases} \\space \\text{.}$$<br/>Suponha que essa partícula esteja no estado fundamental do sistema. Imagine agora que aumentemos instantaneamente a largura do poço para $2a$, mantendo sua forma simétrica com relação à origem. Como esse processo é rápido, a função de onda permanece inalterada. Qual é a probabilidade de encontrarmos a partícula no estado fundamental do novo poço?<br/>Dados: $\\int \\cos{(x)} \\cos{(x/2)} dx = \\sin{(x/2)} + \\sin{(3x/2)}/3$'
		},
		alternatives: [
			{
				text: '$(8/3\\pi)^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$(4\\sqrt{2}/3\\pi)^2$',
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
				text: '$(4/3\\pi)^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere uma partícula de massa $m$ movendo-se em uma dimensão sob a ação de um potencial do tipo poço infinito,<br/><br/>$$V(x) = \\begin{cases}0, & |x| \\lt a/2 \\\\ \\infty, & |x| \\geq a/2\\end{cases} \\space \\text{,}$$<br/>sendo $a$ uma constante positiva com unidades de distância. A autofunção de energia para o estado fundamental desse problema é dada por<br/><br/>$$\\psi_0(x) = \\begin{cases}\\sqrt{\\frac{2}{a}}\\cos{(\\frac{\\pi x}{a})}, & |x| \\lt a/2 \\\\ 0, & |x| \\geq a/2\\end{cases} \\space \\text{.}$$<br/>Suponha que essa partícula esteja no estado fundamental do sistema. Imagine agora que aumentemos instantaneamente a largura do poço para $3a$, mantendo sua forma simétrica com relação à origem. Como esse processo é rápido, a função de onda permanece inalterada. Qual é a probabilidade de encontrarmos a partícula no estado fundamental do novo poço?<br/>Dados: $\\int \\cos{(x)} \\cos{(x/3)} dx = 3\\sin{(2x/3)}/4 + 3\\sin{(4x/3)}/8$'
		},
		alternatives: [
			{
				text: '$(9\\sqrt{6}/8\\pi)^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$(3\\sqrt{6}/8\\pi)^2$',
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
				text: '$(\\sqrt{6}/8\\pi)^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 7,
		statement: {
			text: 'O gráfico abaixo representa a autofunção de energia $\\psi(x)$, como função da posição $x$, de um do estados excitados de um oscilador harmônico simples unidimensional de frequência $\\omega$. Qual é a energia desse estado?',
			image: '2024-1/mq-7a.webp'
		},
		alternatives: [
			{
				text: '$7\\hbar\\omega/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\hbar\\omega/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$3\\hbar\\omega/2$',
				number: QuestionAlternative.C
			},
			{
				text: '$5\\hbar\\omega/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$9\\hbar\\omega/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 7,
		statement: {
			text: 'O gráfico abaixo representa a autofunção de energia $\\psi(x)$, como função da posição $x$, de um do estados excitados de um oscilador harmônico simples unidimensional de frequência $\\omega$. Qual é a energia desse estado?',
			image: '2024-1/mq-7b.webp'
		},
		alternatives: [
			{
				text: '$5\\hbar\\omega/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\hbar\\omega/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$3\\hbar\\omega/2$',
				number: QuestionAlternative.C
			},
			{
				text: '$7\\hbar\\omega/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$9\\hbar\\omega/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere uma partícula de spin $1/2$ sob a ação de um campo magnético estático e uniforme, cuja orientação define a direção $x$. Os demais graus de liberdade podem ser considerados "congelados" em um estado quântico definido, de forma que o hamiltoniano relevante envolve apenas a interação do spin com o campo magnético, podendo ser escrito como<br/><br/>$$H = \\omega \\hat{S}_x \\space \\text{,}$$<br/>em que $\\hat{S}_x$ é componente $x$ do operador de spin e $\\omega = Bgq/2m$, sendo $q$ a carga da partícula, $m$ a sua massa, $g$ o seu fator giromagnético e $B$ a intensidade do campo magnético aplicado. Se no tempo $t = 0$ o sistema está em um estado $\\ket{\\psi(0)}$ com spin para cima, ou seja $\\hat{S}_x \\ket{\\psi(0)} = \\hbar/2 \\ket{\\psi(0)}$, qual é o tempo mínimo para o sistema inverter o seu spin?'
		},
		alternatives: [
			{
				text: '$\\pi/\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$2\\pi/\\omega$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\infty$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\pi/2\\omega$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\pi/4\\omega$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=RPNahR9zotI'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere uma partícula de spin $1/2$ sob a ação de um campo magnético estático e uniforme, cuja orientação define a direção $x$. Os demais graus de liberdade podem ser considerados "congelados" em um estado quântico definido, de forma que o hamiltoniano relevante envolve apenas a interação do spin com o campo magnético, podendo ser escrito como<br/><br/>$$H = \\omega \\hat{S}_x \\space \\text{,}$$<br/>em que $\\hat{S}_x$ é componente $x$ do operador de spin e $\\omega = Bgq/2m$, sendo $q$ a carga da partícula, $m$ a sua massa, $g$ o seu fator giromagnético e $B$ a intensidade do campo magnético aplicado. Se no tempo $t = 0$ o sistema está em um estado $\\ket{\\psi(0)}$ com spin para baixo, ou seja $\\hat{S}_x \\ket{\\psi(0)} = -\\hbar/2 \\ket{\\psi(0)}$, qual é o tempo mínimo posterior para que o sistema volte a esse estado inicial?'
		},
		alternatives: [
			{
				text: '$2\\pi/\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\pi/\\omega$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\infty$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\pi/2\\omega$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\pi/4\\omega$',
				number: QuestionAlternative.E
			}
		]
	}
];
