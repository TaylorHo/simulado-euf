import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2023,
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 1,
		statement: {
			text: 'Um satélite de massa $m$ se move em uma órbita circular de raio $r$, medido em relação ao centro da Terra. Dado um eixo que é perpendicular ao plano do movimento e passa pela origem (centro da Terra), qual é o módulo do momento angular do satélite em relação ao eixo e a energia total do sistema em termos da constante gravitacional $G$, da massa da Terra $M$, da massa do satélite $m$ e do raio da órbita $r$? Considere o atrito com a atmosfera como sendo desprezível e adote o zero de energia potencial gravitacional como sendo no infinito.'
		},
		alternatives: [
			{
				text: '$L = \\sqrt{GMm^2r}; \\space E = -\\frac{1}{2} \\frac{GMm}{r}$',
				number: QuestionAlternative.A
			},
			{
				text: '$L = \\sqrt{GMm^2r}; \\space E = -\\frac{GMm}{r}$',
				number: QuestionAlternative.B
			},
			{
				text: '$L = \\sqrt{GM^2mr}; \\space E = \\frac{GMm}{r}$',
				number: QuestionAlternative.C
			},
			{
				text: '$L = \\sqrt{GM^2mr}; \\space E = -\\frac{1}{2} \\frac{GMm}{r^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$L = \\sqrt{GMmr}; \\space E = -\\frac{GMm}{r^2}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 1,
		statement: {
			text: 'Um satélite de massa $m$ se move em uma órbita circular de raio $r$, medido em relação ao centro da Terra. Dado um eixo que é perpendicular ao plano do movimento e passa pela origem (centro da Terra), qual é o módulo do momento angular do satélite em relação ao eixo e a sua energia cinética em termos da constante gravitacional $G$, da massa da Terra $M$, da massa do satélite $m$ e do raio da órbita $r$? Considere o atrito com a atmosfera como sendo desprezível.'
		},
		alternatives: [
			{
				text: '$L = \\sqrt{GMm^2r}; \\space K = \\frac{1}{2} \\frac{GMm}{r}$',
				number: QuestionAlternative.A
			},
			{
				text: '$L = \\sqrt{GMm^2r}; \\space K = -\\frac{GMm}{r}$',
				number: QuestionAlternative.B
			},
			{
				text: '$L = \\sqrt{GM^2mr}; \\space K = \\frac{GMm}{r}$',
				number: QuestionAlternative.C
			},
			{
				text: '$L = \\sqrt{GM^2mr}; \\space K = -\\frac{1}{2} \\frac{GMm}{r^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$L = \\sqrt{GMmr}; \\space K = \\frac{GMm}{r^2}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 2,
		statement: {
			text: 'Um sistema composto por uma massa $m$ acoplada a três molas ideais de constantes elásticas $k_1$, $k_2$ e $k_3$ está montado como mostrado na figura. A massa pode oscilar (longitudinalmente à direção das molas) em torno de seu ponto de equilíbrio sobre uma superfície de atrito desprezível. Determine a frequência angular $\\omega_0$ de oscilação da massa. Assuma que, no equilíbrio, as molas estão relaxadas.',
			image: '2023-2/mc-2a.webp'
		},
		alternatives: [
			{
				text: '$\\omega_0 = \\sqrt{\\frac{k_1 + k_2 + k_3}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{(1/k_1) + k_2 + k_3}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{k_1 + (1/k_2) + (1/k_3)}{m}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{(1/k_1) + (1/k_2) + (1/k_3)}{m}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{k_1}{m}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 2,
		statement: {
			text: 'Um sistema composto por uma massa $m$ acoplada a quatro molas ideais, duas de constantes elásticas $k_1$ e as outras duas de constante elástica $k_2$, está montado como mostrado na figura. A massa pode oscilar (longitudinalmente à direção das molas) em torno de seu ponto de equilíbrio sobre uma superfície de atrito desprezível. Determine a frequência angular $\\omega_0$ de oscilação da massa. Assuma que, no equilíbrio, as molas estão relaxadas.',
			image: '2023-2/mc-2b.webp'
		},
		alternatives: [
			{
				text: '$\\omega_0 = \\sqrt{\\frac{2(k_1 + k_2)}{m}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{(\\frac{1}{k_1 + k_2} + \\frac{1}{k_1 + k_2})}{m}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{2(1/k_1) + 2(1/k_2)}{m}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{k_1 + k_2}{m}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_0 = \\sqrt{\\frac{(\\frac{1}{2k_1 + 2k_2})}{m}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 3,
		statement: {
			text: 'A energia potencial de uma molécula de $LiBr$ pode ser descrita aproximadamente como<br/><br/>$$U(r) = \\alpha e^2 \\left[\\frac{C}{7r^7} - \\frac{1}{r}\\right] \\space \\text{,}$$<br/>onde $\\alpha$ e $C$ são constantes positivas, $e$ é o módulo da carga do elétron e $r$ é a distância relativa entre os dois átomos. O comportamento de $U(r)$ é apresentado na figura. Determine a distância interatômica $r_0$ de equilíbrio da molécula e a "constante de mola" $k$ (ou constante de força), assumindo uma aproximação harmônica no entorno de $r_0$.',
			image: '2023-2/mc-3.webp'
		},
		alternatives: [
			{
				text: '$r_0 = C^{1/6}$ e $k = \\frac{6 \\alpha e^2}{\\sqrt{C}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$r_0 = C^{1/6}$ e $k = \\frac{6}{\\sqrt{C}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$r_0 = (\\frac{C}{7})^{1/6}$ e $k = \\frac{6 \\sqrt{7} \\alpha e^2}{\\sqrt{C}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$r_0 = (\\frac{C}{7})^{1/6}$ e $k = \\frac{6 \\sqrt{7}}{\\sqrt{C}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$r_0 = \\alpha e^2 C^{1/6}$ e $k = \\sqrt{\\frac{\\alpha e^2}{C}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 3,
		statement: {
			text: 'A energia potencial de uma molécula de $Ar_2$ pode ser descrita aproximadamente como<br/><br/>$$U(r) = \\frac{D}{12} \\left[\\frac{a^{12}}{r^{12}} - \\frac{2a^6}{r^6}\\right] \\space \\text{,}$$<br/>onde $a$ e $D$ são constantes positivas e $r$ é a distância relativa entre os dois átomos. O comportamento de $U(r)$ é apresentado na figura. Determine a distância interatômica $r_0$ de equilíbrio da molécula e a "constante de mola" $k$ (ou constante de força), assumindo uma aproximação harmônica no entorno de $r_0$.',
			image: '2023-2/mc-3.webp'
		},
		alternatives: [
			{
				text: '$r_0 = a$ e $k = \\frac{6D}{a^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$r_0 = a$ e $k = \\frac{13D}{a^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$r_0 = \\frac{a}{\\sqrt[6]{2}}$ e $k = \\frac{6D}{a^2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$r_0 = \\frac{a}{\\sqrt[6]{2}}$ e $k = \\frac{13D}{a^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$r_0 = \\frac{a}{2}$ e $k = \\frac{D}{a^4}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 4,
		statement: {
			text: 'Um disco uniforme de momento de inércia $I_1 = I$ é montado sobre um eixo vertical de massa desprezível e gira livremente com velocidade angular $\\omega_0$. Em um dado instante, deixa-se cair sobre esse disco girante (de uma altura desprezível) um outro disco uniforme de momento de inércia $I_2 = I/2$ e velocidade angular nula, como mostrado na figura. Devido ao atrito entre as superfícies dos discos, eles passam a girar juntos com velocidade angular $\\omega_f$ . Determine a velocidade angular final $\\omega_f$ do conjunto dos dois discos, assumindo que o eixo de rotação do sistema passa pelo seu centro de simetria. A energia cinética (de rotação) se conserva no processo?',
			image: '2023-2/mc-4a.webp'
		},
		alternatives: [
			{
				text: '$\\omega_f = \\frac{2}{3}\\omega_0$. A energia cinética de rotação não se conserva.',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_f = \\frac{2}{3}\\omega_0$. A energia cinética de rotação se conserva.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_f = \\frac{3}{2}\\omega_0$. A energia cinética de rotação não se conserva.',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_f = \\frac{3}{2}\\omega_0$. A energia cinética de rotação se conserva.',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_f = \\frac{\\sqrt{2}}{\\sqrt{3}}\\omega_0$. A energia cinética de rotação se conserva.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 4,
		statement: {
			text: 'Um disco uniforme de momento de inércia $I_1 = I$ é montado sobre um eixo vertical de massa desprezível e gira livremente com velocidade angular $\\omega_0$. Em um dado instante, deixa-se cair sobre esse disco girante (de uma altura desprezível) um outro disco uniforme de momento de inércia $I_2 = 2I$ e velocidade angular nula, como mostrado na figura. Devido ao atrito entre as superfícies dos discos, eles passam a girar juntos com velocidade angular $\\omega_f$ . Determine a velocidade angular final $\\omega_f$ do conjunto dos dois discos, assumindo que o eixo de rotação do sistema passa pelo seu centro de simetria. A energia cinética (de rotação) se conserva no processo?',
			image: '2023-2/mc-4b.webp'
		},
		alternatives: [
			{
				text: '$\\omega_f = \\frac{1}{3}\\omega_0$. A energia cinética de rotação não se conserva.',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_f = \\frac{1}{3}\\omega_0$. A energia cinética de rotação se conserva.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_f = 3\\omega_0$. A energia cinética de rotação não se conserva.',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_f = 3\\omega_0$. A energia cinética de rotação se conserva.',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_f = \\frac{\\sqrt{3}}{3}\\omega_0$. A energia cinética de rotação se conserva.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma partícula de massa $m$ se move em duas dimensões sob a ação da força<br/><br/>$$F = a(4xy\\hat{x} + 3y^2\\hat{y}) \\space \\text{,}$$<br/>onde $a$ é uma constante positiva. Determine o trabalho $W$ realizado pela força $F$ quando a partícula se movimenta ao longo da parábola $y = x^2/c$, da origem do sistema de coordenadas até a posição $r = c (\\hat{x} + \\hat{y})$, onde $c$ é uma constante positiva.'
		},
		alternatives: [
			{
				text: '$W = 2ac^3$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = ac^3$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = 3ac^3$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 4ac^3$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = 5ac^3$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma partícula de massa $m$ se move em duas dimensões sob a ação da força<br/><br/>$$F = a(5y^2\\hat{x} + 4x^2\\hat{y}) \\space \\text{,}$$<br/>onde $a$ é uma constante positiva. Determine o trabalho $W$ realizado pela força $F$ quando a partícula se movimenta ao longo da parábola $y = x^2/c$, da origem do sistema de coordenadas até a posição $r = c (\\hat{x} + \\hat{y})$, onde $c$ é uma constante positiva.'
		},
		alternatives: [
			{
				text: '$W = 3ac^3$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = ac^3$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = 2ac^3$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 4ac^3$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = 5ac^3$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ se move em uma dimensão sob a ação de uma força $F$. Verifica-se que a velocidade da partícula em termos da sua posição $x$ é dada por<br/><br/>$$v(x) = \\frac{k}{x}$$<br/>onde $k$ é uma constante positiva. Determine a força $F(x)$ em função da posição $x$ da partícula.'
		},
		alternatives: [
			{
				text: '$F(x) = -mk^2/x^3$',
				number: QuestionAlternative.A
			},
			{
				text: '$F(x) = -2mk^2/x^3$',
				number: QuestionAlternative.B
			},
			{
				text: '$F(x) = -3mk^2/x^3$',
				number: QuestionAlternative.C
			},
			{
				text: '$F(x) = -mk^2/(2x^3)$',
				number: QuestionAlternative.D
			},
			{
				text: '$F(x) = -mk^2/(3x^3)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ se move em uma dimensão sob a ação de uma força $F$. Verifica-se que a velocidade da partícula em termos da sua posição $x$ é dada por<br/><br/>$$v(x) = \\frac{k}{x^2}$$<br/>onde $k$ é uma constante positiva. Determine a força $F(x)$ em função da posição $x$ da partícula.'
		},
		alternatives: [
			{
				text: '$F(x) = -2mk^2/x^5$',
				number: QuestionAlternative.A
			},
			{
				text: '$F(x) = -mk^2/x^5$',
				number: QuestionAlternative.B
			},
			{
				text: '$F(x) = -4mk^2/x^5$',
				number: QuestionAlternative.C
			},
			{
				text: '$F(x) = -mk^2/(2x^5)$',
				number: QuestionAlternative.D
			},
			{
				text: '$F(x) = -mk^2/(4x^5)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma barra muito longa e de massa desprezível se movimenta no plano $xy$. A barra está conectada à origem $O$ e gira com uma velocidade angular constante $\\omega = \\omega\\hat{z}$, como indicado na figura. Uma partícula de massa $m$ pode se movimentar sem atrito ao longo da barra sob a ação da força $F = a\\hat{x}$, onde $a$ é uma constante positiva. Determine a lagrangiana da partícula em termos da coordenada polar $r$.',
			image: '2023-2/mc-7.webp'
		},
		alternatives: [
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) + ar \\cos{(\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) - ar \\sin{(\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) - ar \\cos{(\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$L = \\frac{1}{2}m \\dot{r}^2 + ar \\sin{(\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$L = \\frac{1}{2}m \\dot{r}^2 + ar \\cos{(\\omega t)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma barra muito longa e de massa desprezível se movimenta no plano $xy$. A barra está conectada à origem $O$ e gira com uma velocidade angular constante $\\omega = \\omega\\hat{z}$, como indicado na figura. Uma partícula de massa $m$ pode se movimentar sem atrito ao longo da barra sob a ação da força $F = b\\hat{y}$, onde $b$ é uma constante positiva. Determine a lagrangiana da partícula em termos da coordenada polar $r$.',
			image: '2023-2/mc-7.webp'
		},
		alternatives: [
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) + ar \\sin{(\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) - ar \\cos{(\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$L = \\frac{1}{2}m (\\dot{r}^2 + r^2\\omega^2) - ar \\sin{(\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$L = \\frac{1}{2}m \\dot{r}^2 + ar \\cos{(\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$L = \\frac{1}{2}m \\dot{r}^2 + ar \\sin{(\\omega t)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 8,
		statement: {
			text: 'Uma partícula de massa $m$ se movimenta em três dimensões sob a ação de uma força central cuja energia potencial associada é dada por<br/><br/>$$U(r) = \\frac{1}{3}kr^3$$<br/>onde $k$ é uma constante positiva.<br/>Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<br/><br/><ul><li>I. A energia total $E$ da partícula e seu momento angular $L$ são constantes de movimento.</li><li>II. A partícula pode apresentar uma órbita circular estável e a relação entre o módulo do momento angular $L$ da partícula e o raio $a$ dessa órbita circular é $L^2 = mka^5$</li><li>III. Para determinados valores da energia total $E$, a partícula pode apresentar órbitas não limitadas, isto é, órbitas que não apresentam um limite superior para os valores assumidos pela coordenada radial $r$.</li></ul>'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e II estão corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I está correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a afirmação II está correta.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas as afirmações I e III estão corretas.',
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
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=HHCqlOJO7Xc'
		},
		questionNumber: 8,
		statement: {
			text: 'Uma partícula de massa $m$ se movimenta em três dimensões sob a ação de uma força central cuja energia potencial associada é dada por<br/><br/>$$U(r) = \\frac{1}{3}kr^3$$<br/>onde $k$ é uma constante positiva.<br/>Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<ul><li>I. A energia total $E$ da partícula e seu momento angular $L$ são constantes de movimento.</li><li>II. A partícula pode apresentar uma órbita circular estável e a relação entre o módulo do momento angular $L$ da partícula e o raio $a$ dessa órbita circular é $L^2 = 2mka^5$</li><li>III. A partícula pode apresentar apenas órbitas limitadas, isto é, órbitas cuja coordenada radial $r$ somente pode assumir valores tais que $r_1 \\leq r \\leq r_2$, onde $r_1$ e $r_2$ são os pontos de retorno radiais da órbita.</li></ul>'
		},
		alternatives: [
			{
				text: 'Apenas as afirmações I e III estão corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a afirmação I está correta.',
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
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 1,
		statement: {
			text: 'Duas esferas condutoras, com raios iguais a $R_A$ e $R_B$, onde $R_A > R_B$, estão ligadas por um fio metálico com capacitância desprezível. A distância entre os centros das esferas é $d$, onde $d \\gg R_A$. O sistema possui uma carga líquida total $Q$, distribuída entre as esferas. Qual é o potencial elétrico $V$ na superfície das esferas em termos de $Q$? Assuma $V = 0$ no infinito.'
		},
		alternatives: [
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R_A + R_B}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R_A - R_B}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R_A + 2R_B}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{2R_A + R_B}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{3R_A - R_B}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 1,
		statement: {
			text: 'Duas esferas condutoras, com raios iguais a $R_A$ e $R_B$, onde $R_A = 2R_B$, estão ligadas por um fio metálico com capacitância desprezível. A distância entre os centros das esferas é $d$, onde $d \\gg R_A$. O sistema possui uma carga líquida total $Q$, distribuída entre as esferas. Qual é o potencial elétrico $V$ na superfície das esferas em termos de $Q$? Assuma $V = 0$ no infinito.'
		},
		alternatives: [
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{(3R_B)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{R_B}$',
				number: QuestionAlternative.B
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{(4R_B)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{(5R_B)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$V = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{(2R_B)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 2,
		statement: {
			text: 'Duas espiras condutoras concêntricas $A$ e $B$, com raios iguais a $a$ e $b$, respectivamente, estão inicialmente contidas em um mesmo plano. Considere $b \\gg a$. No instante $t = 0$, a espira $A$, com resistência $R$, começa a girar em torno de um de seus diâmetros com frequência angular constante $\\omega$, enquanto a espira $B$ permanece em repouso. Se uma corrente elétrica $I_B$ constante circula na espira $B$, qual é a força eletromotriz $\\varepsilon$ induzida na espira $A$? Despreze efeitos de auto-indutância.'
		},
		alternatives: [
			{
				text: '$\\varepsilon = \\frac{\\mu_0\\omega I_B \\pi a^2}{2b} \\sin{(\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0\\omega I_B \\pi a^2}{2b} \\cos{(\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0\\omega I_B \\pi b^2}{4a} \\sin{(\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0\\omega I_B \\pi b^2}{4a} \\cos{(\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\varepsilon = \\frac{\\mu_0\\omega I_B a^2}{2\\pi b} \\sin{(\\omega t)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 2,
		statement: {
			text: 'Duas espiras condutoras concêntricas $A$ e $B$, com raios iguais a $a$ e $b$, respectivamente, estão inicialmente contidas em um mesmo plano. Considere $b \\gg a$. No instante $t = 0$, a espira $A$, com resistência $R$, começa a girar em torno de um de seus diâmetros com frequência angular constante $\\omega$, enquanto a espira $B$ permanece em repouso. Se uma corrente elétrica $I_B$ constante circula na espira $B$, qual é a corrente elétrica $I_A$ induzida na espira $A$? Despreze efeitos de auto-indutância.'
		},
		alternatives: [
			{
				text: '$I_A = \\frac{\\mu_0\\omega I_B \\pi a^2}{2Rb} \\sin{(\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$I_A = \\frac{\\mu_0\\omega I_B \\pi a^2}{2Rb} \\cos{(\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$I_A = \\frac{\\mu_0\\omega I_B \\pi b^2}{4Ra} \\sin{(\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$I_A = \\frac{\\mu_0\\omega I_B \\pi b^2}{4Ra} \\cos{(\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$I_A = \\frac{\\mu_0\\omega I_B a^2}{2\\pi Rb} \\sin{(\\omega t)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 3,
		statement: {
			text: "Um capacitor de capacitância $C$ está totalmente carregado com uma carga $Q_0$ e com uma energia total armazenada igual a $U_0$. No instante $t = 0$ o capacitor começa a descarregar através de um resistor de resistência $R$. Em termos da constante de tempo $\\tau = RC$, em qual instante $t'$ o capacitor terá um quarto de sua energia inicial $U_0$?"
		},
		alternatives: [
			{
				text: "$t' = \\frac{\\ln{(4)}}{2}\\tau$",
				number: QuestionAlternative.A
			},
			{
				text: "$t' = \\frac{\\ln{(2)}}{4}\\tau$",
				number: QuestionAlternative.B
			},
			{
				text: "$t' = 4\\tau$",
				number: QuestionAlternative.C
			},
			{
				text: "$t' = 2\\tau$",
				number: QuestionAlternative.D
			},
			{
				text: "$t' = \\frac{\\tau}{4}$",
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 3,
		statement: {
			text: "Um capacitor de capacitância $C$ está totalmente carregado com uma carga $Q_0$ e com uma energia total armazenada igual a $U_0$. No instante $t = 0$ o capacitor começa a descarregar através de um resistor de resistência $R$. Em termos da constante de tempo $\\tau = RC$, em qual instante $t'$ o capacitor terá um terço de sua energia inicial $U_0$?"
		},
		alternatives: [
			{
				text: "$t' = \\frac{\\ln{(3)}}{2}\\tau$",
				number: QuestionAlternative.A
			},
			{
				text: "$t' = \\frac{\\ln{(2)}}{3}\\tau$",
				number: QuestionAlternative.B
			},
			{
				text: "$t' = 3\\tau$",
				number: QuestionAlternative.C
			},
			{
				text: "$t' = 2\\tau$",
				number: QuestionAlternative.D
			},
			{
				text: "$t' = \\frac{\\tau}{3}$",
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 4,
		statement: {
			text: 'O campo elétrico no interior de um capacitor de placas paralelas circulares é dado por $E = E_0 (t/\\tau )^2\\hat{z}$. Qual é o campo magnético $B$ induzido entre as placas?'
		},
		alternatives: [
			{
				text: '$B = r \\mu_0 \\epsilon_0 E_0 \\frac{t}{\\tau^2} \\hat{\\varphi}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = r \\mu_0 \\epsilon_0 E_0 \\frac{t}{\\tau^2} \\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = \\pi r \\mu_0 \\epsilon_0 E_0 \\frac{t}{\\tau^2} \\hat{\\varphi}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\pi r \\mu_0 \\epsilon_0 E_0 \\frac{t}{\\tau^2} \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = 2\\pi r \\mu_0 \\epsilon_0 E_0 \\frac{t}{\\tau^2} \\hat{\\varphi}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 4,
		statement: {
			text: 'O campo elétrico no interior de um capacitor de placas paralelas circulares é dado por $E = E_0 (t/\\tau )\\hat{z}$. Qual é o campo magnético $B$ induzido entre as placas?'
		},
		alternatives: [
			{
				text: '$B = r \\mu_0 \\epsilon_0 \\frac{E_0}{2\\tau} \\hat{\\varphi}$',
				number: QuestionAlternative.A
			},
			{
				text: '$B = r \\mu_0 \\epsilon_0 \\frac{E_0}{2\\tau} \\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$B = \\pi r \\mu_0 \\epsilon_0 \\frac{E_0}{2\\tau} \\hat{\\varphi}$',
				number: QuestionAlternative.C
			},
			{
				text: '$B = \\pi r \\mu_0 \\epsilon_0 \\frac{E_0}{2\\tau} \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$B = \\pi r \\mu_0 \\epsilon_0 \\frac{E_0}{\\tau} \\hat{\\varphi}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma barra metálica muito fina, homogênea e de comprimento $d$ move-se sem girar e com velocidade constante $\\vec{v}$. A velocidade $\\vec{v}$ faz um ângulo $\\theta \\neq \\frac{\\pi}{2}$ com a barra, como mostrado na figura abaixo. A barra move-se numa região onde há um campo magnético constante e uniforme $\\vec{B}$, perpendicular à barra e a $\\vec{v}$. Qual(is) das seguintes afirmações é(são) verdadeira(s)?<br/><br/><ul><li>I. Existe uma diferença de potencial elétrico não nula entre as extremidades da barra.</li><li>II. A força total devido a $\\vec{B}$ sobre a barra é nula.</li><li>III. O torque total devido a $\\vec{B}$ sobre a barra é nulo.</li></ul>',
			image: '2023-2/em-5.webp'
		},
		alternatives: [
			{
				text: 'Apenas I e II',
				number: QuestionAlternative.A
			},
			{
				text: 'I, II e III',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II e III',
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
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 5,
		statement: {
			text: 'Uma barra metálica muito fina, homogênea e de comprimento $d$ move-se sem girar e com velocidade constante $\\vec{v}$. A velocidade $\\vec{v}$ faz um ângulo $\\theta \\neq \\frac{\\pi}{2}$ com a barra, como mostrado na figura abaixo. A barra move-se numa região onde há um campo magnético constante e uniforme $\\vec{B}$, perpendicular à barra e a $\\vec{v}$. Qual(is) das seguintes afirmações é(são) verdadeira(s)?<br/><br/><ul><li>I. Existe uma diferença de potencial elétrico não nula entre as extremidades da barra.</li><li>II. A força total devido a $\\vec{B}$ sobre a barra é não nula.</li><li>III. O torque total devido a $\\vec{B}$ sobre a barra é não nulo.</li></ul>',
			image: '2023-2/em-5.webp'
		},
		alternatives: [
			{
				text: 'Apenas I e III',
				number: QuestionAlternative.A
			},
			{
				text: 'I, II e III',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas I e II',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas II',
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
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 6,
		statement: {
			text: 'A abaixo ilustra um condutor elipsoidal, isolado e neutro que tem uma cavidade esférica em seu interior. Uma carga pontual $q > 0$ está fixa no centro da cavidade esférica, conforme ilustrado. Assinale a alternativa que melhor representa a densidade de cargas nas superfícies do condutor.',
			image: '2023-2/em-6a.webp'
		},
		alternatives: [
			{
				image: '2023-2/em-6a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2023-2/em-6a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2023-2/em-6a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2023-2/em-6a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2023-2/em-6a-e.webp',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 6,
		statement: {
			text: 'A abaixo ilustra um condutor cúbico, isolado e neutro que tem uma cavidade esférica em seu interior. Uma carga pontual $q < 0$ está fixa no centro da cavidade esférica, conforme ilustrado. Assinale a alternativa que melhor representa a densidade de cargas nas superfícies do condutor.',
			image: '2023-2/em-6b.webp'
		},
		alternatives: [
			{
				image: '2023-2/em-6b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2023-2/em-6b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2023-2/em-6b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2023-2/em-6b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2023-2/em-6b-e.webp',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 7,
		statement: {
			text: 'Sangue fluindo em um artéria de diâmetro $d = 8,0$ mm pode atingir velocidades de até $v = 60$ cm/s em módulo (veja o desenho esquemático abaixo). Sabendo que há íons no plasma sanguíneo (como $Na^+$, $K^+$, $Mg^+$ e $Ca^{2+}$), estime a máxima diferença de potencial elétrico que pode surgir nas paredes dessa artéria quando sob a ação de um campo magnético de módulo $B = 0,20$ T como mostrado na figura?',
			image: '2023-2/em-7.webp'
		},
		alternatives: [
			{
				text: '$0,96 \\space mV$',
				number: QuestionAlternative.A
			},
			{
				text: '$9,6 \\space mV$',
				number: QuestionAlternative.B
			},
			{
				text: '$9,6 \\space \\mu V$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,96 \\space \\mu V$',
				number: QuestionAlternative.D
			},
			{
				text: '$96 \\space \\mu V$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 7,
		statement: {
			text: 'Sangue fluindo em um artéria de diâmetro $d = 9,0$ mm pode atingir velocidades de até $v = 70$ cm/s em módulo (veja o desenho esquemático abaixo). Sabendo que há íons no plasma sanguíneo (como $Na^+$, $K^+$, $Mg^+$ e $Ca^{2+}$), estime a máxima diferença de potencial elétrico que pode surgir nas paredes dessa artéria quando sob a ação de um campo magnético de módulo $B = 0,10$ T como mostrado na figura?',
			image: '2023-2/em-7.webp'
		},
		alternatives: [
			{
				text: '$0,63 \\space mV$',
				number: QuestionAlternative.A
			},
			{
				text: '$63 \\space \\mu V$',
				number: QuestionAlternative.B
			},
			{
				text: '$6,3 \\space \\mu V$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,63 \\space \\mu V$',
				number: QuestionAlternative.D
			},
			{
				text: '$6,3 \\space mV$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 8,
		statement: {
			text: 'A figura abaixo ilustra a seção reta de dois condutores cilíndricos paralelos idênticos e muito longos (parte cinza) que carregam, em sentidos opostos, densidades de corrente de módulo $J$ uniformemente distribuídas em seu interior. Essa distribuição de correntes é equivalente àquela advinda de dois cilindros paralelos muito longos de seção reta circular de raio $R$, cujos eixos distam de $d < R$, tal que as correntes se cancelem na parte superposta (região branca). Qual é o campo magnético $\\vec{B}$ no ponto $P$, que está (verticalmente) a uma distância $a$ do ponto médio do segmento que une os eixos dos cilindros e é normal a eles?',
			image: '2023-2/em-8a.webp'
		},
		alternatives: [
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J d\\hat{y}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J \\frac{ad}{R}\\hat{y}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\vec{B} = -\\frac{1}{2} \\mu_0 J \\sqrt{\\left(\\frac{d}{2}\\right)^2 + a^2}\\hat{y}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\vec{B} = -\\frac{1}{2} \\mu_0 J \\frac{(\\frac{d}{2})^2 + a^2}{R}\\hat{y}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J \\frac{\\left((\\frac{d}{2})^2 + a^2\\right)^{3/2}}{R^2}\\hat{y}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=36K5LdPH5D4'
		},
		questionNumber: 8,
		statement: {
			text: 'A figura abaixo ilustra a seção reta de dois condutores cilíndricos paralelos idênticos e muito longos (parte cinza) que carregam, em sentidos opostos, densidades de corrente de módulo $J$ uniformemente distribuídas em seu interior. Essa distribuição de correntes é equivalente àquela advinda de dois cilindros paralelos muito longos de seção reta circular de raio $R$, cujos eixos distam de $d < R$, tal que as correntes se cancelem na parte superposta (região branca). Qual é o campo magnético $\\vec{B}$ no ponto $P$, que está no plano que contém os eixos dos cilindros e dista de $a$ do eixo do cilindro da esquerda?',
			image: '2023-2/em-8b.webp'
		},
		alternatives: [
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J d\\hat{y}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J \\frac{ad}{R}\\hat{y}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\vec{B} = -\\frac{1}{2} \\mu_0 J \\sqrt{(d - a)^2 + a^2}\\hat{y}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\vec{B} = -\\frac{1}{2} \\mu_0 J \\frac{(d - a)^2 + a^2}{R}\\hat{y}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\vec{B} = \\frac{1}{2} \\mu_0 J \\frac{\\left((d - a)^2 + a^2\\right)^{3/2}}{R^2}\\hat{y}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 1,
		statement: {
			text: 'A espectroscopia Raman baseia-se no espalhamento de fótons por vibrações (fônons) da rede cristalina. A energia dos fônons é obtida através da medida da diferença entre as energias do fótons incidente e espalhados. Na prática, esta diferença é aferida em termos da diferença entre os inversos dos comprimentos de onda $\\Delta (\\frac{1}{\\lambda})$, em unidades de $\\text{cm}^{-1}$. Se um determinado processo de espalhamento é detectado com $\\Delta (\\frac{1}{\\lambda}) = 300 \\space\\text{cm}^{-1}$, a energia do fônon associado é, aproximadamente:'
		},
		alternatives: [
			{
				text: '$37$ meV',
				number: QuestionAlternative.A
			},
			{
				text: '$37$ eV',
				number: QuestionAlternative.B
			},
			{
				text: '$4,1$ eV',
				number: QuestionAlternative.C
			},
			{
				text: '$4,1$ meV',
				number: QuestionAlternative.D
			},
			{
				text: '$240$ meV',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 1,
		statement: {
			text: 'A espectroscopia Raman baseia-se no espalhamento de fótons por vibrações (fônons) da rede cristalina. A energia dos fônons é obtida através da medida da diferença entre as energias do fótons incidente e espalhados. Na prática, esta diferença é aferida em termos da diferença entre os inversos dos comprimentos de onda $\\Delta (\\frac{1}{\\lambda})$, em unidades de $\\text{cm}^{-1}$. Se um determinado processo de espalhamento é detectado com $\\Delta (\\frac{1}{\\lambda}) = 200 \\space\\text{cm}^{-1}$, a energia do fônon associado é, aproximadamente:'
		},
		alternatives: [
			{
				text: '$25$ meV',
				number: QuestionAlternative.A
			},
			{
				text: '$25$ eV',
				number: QuestionAlternative.B
			},
			{
				text: '$6,2$ eV',
				number: QuestionAlternative.C
			},
			{
				text: '$6,2$ meV',
				number: QuestionAlternative.D
			},
			{
				text: '$161$ meV',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um reator nuclear em que há emissão de nêutrons, com massa $m_N$ , e a presença de dêuterons com massa $m_D$. Após um certo período, os dois tipos de partículas atingem o equilíbrio térmico. A razão entre os comprimentos de onda dos nêutrons e dos dêuterons térmicos é:'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{m_D}{m_N}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{\\frac{m_N}{m_D}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{m_D}{m_N}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{m_N}{m_D}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{m_D - m_N}{m_D}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um reator nuclear em que há emissão de nêutrons, com massa $m_N$ , e a presença de dêuterons com massa $m_D$. Após um certo período, os dois tipos de partículas atingem o equilíbrio térmico. A razão entre os comprimentos de onda dos dêuterons e dos nêutrons térmicos é:'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{m_N}{m_D}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{\\frac{m_D}{m_N}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{m_D}{m_N}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{m_N}{m_D}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{m_D - m_N}{m_D}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma molécula diatômica constitui-se de um átomo com massa $3M$ e outro de massa $4M$, separados por uma distância $d$. Considere que eles girem ao redor de um eixo que passa pelo centro de massa e é perpendicular à linha que os une. Se o momento angular desta molécula for quantizado como no modelo de Bohr, as velocidades angulares também serão quantizadas como (nas alternativas abaixo $n = 1,2,3,...$)'
		},
		alternatives: [
			{
				text: '$\\frac{7h}{24\\pi M d^2} n$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{h}{\\pi M d^2} n$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{7h}{12\\pi M d^2} n$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{6h}{7\\pi M d^2} n$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{7h}{6\\pi M d^2} n$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma molécula diatômica constitui-se de um átomo com massa $2M$ e outro de massa $3M$, separados por uma distância $d$. Considere que eles girem ao redor de um eixo que passa pelo centro de massa e é perpendicular à linha que os une. Se o momento angular desta molécula for quantizado como no modelo de Bohr, as velocidades angulares também serão quantizadas como (nas alternativas abaixo $n = 1,2,3,...$)'
		},
		alternatives: [
			{
				text: '$\\frac{5h}{12\\pi M d^2} n$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{h}{\\pi M d^2} n$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{5h}{6\\pi M d^2} n$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{3h}{5\\pi M d^2} n$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{5h}{3\\pi M d^2} n$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 4,
		statement: {
			text: 'O experimento de Millikan, que permitiu obter o valor da carga elétrica $q$ do elétron de massa $m_0$, baseia-se na investigação da queda em condições de equilíbrio de gotículas de óleo carregadas eletricamente e sujeitas às forças de arrasto, do tipo $\\vec{F}_a = -b\\vec{v}$ (onde $b$ é uma constante), e elétrica, devido a um campo elétrico aplicado $\\vec{E}$ . Considere uma variante deste experimento, na qual $\\vec{E}$ é aplicado horizontalmente. Ajustando-se o módulo do campo elétrico $E$, as gotículas passam a cair com velocidade constante em uma trajetória retilínea formando um ângulo $\\theta$ com a vertical. Se $v_T$ for a velocidade terminal das gotículas ao longo da trajetória, a carga elétrica pode ser obtida de:'
		},
		alternatives: [
			{
				text: '$q = \\frac{bv_T}{E} \\sin{(\\theta)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q = \\frac{bv_T}{E} \\cos{(\\theta)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q = \\frac{bv_T}{E} \\tan{(\\theta)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q = \\frac{E}{bv_T} \\sin{(\\theta)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q = \\frac{m_0g}{bv_T} \\cos{(\\theta)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 4,
		statement: {
			text: 'O experimento de Millikan, que permitiu obter o valor da carga elétrica $q$ do elétron de massa $m_0$, baseia-se na investigação da queda em condições de equilíbrio de gotículas de óleo carregadas eletricamente e sujeitas às forças de arrasto, do tipo $\\vec{F}_a = -b\\vec{v}$ (onde $b$ é uma constante), e elétrica, devido a um campo elétrico aplicado $\\vec{E}$ . Considere uma variante deste experimento, na qual $\\vec{E}$ é aplicado horizontalmente. Ajustando-se o módulo do campo elétrico $E$, as gotículas passam a cair com velocidade constante em uma trajetória retilínea formando um ângulo $\\theta$ com a horizontal. Se $v_T$ for a velocidade terminal das gotículas ao longo da trajetória, a carga elétrica pode ser obtida de:'
		},
		alternatives: [
			{
				text: '$q = \\frac{bv_T}{E} \\cos{(\\theta)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q = \\frac{bv_T}{E} \\sin{(\\theta)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q = \\frac{bv_T}{E} \\tan{(\\theta)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q = \\frac{E}{bv_T} \\sin{(\\theta)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q = \\frac{m_0g}{bv_T} \\cos{(\\theta)}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 5,
		statement: {
			text: 'A astronauta Aline se encontra em repouso em um referencial inercial quando, às 08h00 de seu relógio, o astronauta Beto passa por ela viajando com velocidade constante $0,80c$. Coincidentemente, o relógio de Beto também marca 08h00. Às 09h00 em seu relógio, Beto chega ao seu destino. De acordo com Aline, o comprimento do percurso de Beto foi de:'
		},
		alternatives: [
			{
				text: '$1,4 \\times 10^9$ km',
				number: QuestionAlternative.A
			},
			{
				text: '$8,5 \\times 10^8$ km',
				number: QuestionAlternative.B
			},
			{
				text: '$1,0 \\times 10^9$ km',
				number: QuestionAlternative.C
			},
			{
				text: '$9,2 \\times 10^8$ km',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes para responder a pergunta.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 5,
		statement: {
			text: 'A astronauta Aline se encontra em repouso em um referencial inercial quando, às 08h00 de seu relógio, o astronauta Beto passa por ela viajando com velocidade constante $0,60c$. Coincidentemente, o relógio de Beto também marca 08h00. Às 09h20 em seu relógio, Beto chega ao seu destino. De acordo com Aline, o comprimento do percurso de Beto foi de:'
		},
		alternatives: [
			{
				text: '$1,1 \\times 10^9$ km',
				number: QuestionAlternative.A
			},
			{
				text: '$8,4 \\times 10^8$ km',
				number: QuestionAlternative.B
			},
			{
				text: '$1,8 \\times 10^9$ km',
				number: QuestionAlternative.C
			},
			{
				text: '$9,7 \\times 10^8$ km',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes para responder a pergunta',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 6,
		statement: {
			text: 'Em um choque totalmente inelástico, uma partícula de massa de repouso $1,00 MeV/c^2$ e energia cinética $2,00 MeV$ colide com outra partícula em repouso de massa $2,00 MeV/c^2$. Qual a massa de repouso do sistema de duas partículas após a colisão?'
		},
		alternatives: [
			{
				text: '$4,12 \\space MeV/c^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$3,00 \\space MeV/c^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$3,67 \\space MeV/c^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$4,67 \\space MeV/c^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$5,00 \\space MeV/c^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 6,
		statement: {
			text: 'Em um choque totalmente inelástico, uma partícula de massa de repouso $2,00 MeV/c^2$ e energia cinética $1,00 MeV$ colide com outra partícula em repouso de massa $1,00 MeV/c^2$. Qual a massa de repouso do sistema de duas partículas após a colisão?'
		},
		alternatives: [
			{
				text: '$3,32 \\space MeV/c^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$3,00 \\space MeV/c^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$2,67 \\space MeV/c^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$3,86 \\space MeV/c^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$4,00 \\space MeV/c^2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma amostra é preparada contendo $1,0 \\times 10^{20}$ partículas radioativas de vida média igual a $1,0$ ano. Em cada decaimento, 10 fótons de comprimento de onda $1,0$ pm são emitidos. Qual a taxa de produção de energia eletromagnética após $1,0$ ano da amostra ter sido preparada?'
		},
		alternatives: [
			{
				text: '$2,3$ W',
				number: QuestionAlternative.A
			},
			{
				text: '$4,4$ W',
				number: QuestionAlternative.B
			},
			{
				text: '$0,3$ W',
				number: QuestionAlternative.C
			},
			{
				text: '$0,9$ W',
				number: QuestionAlternative.D
			},
			{
				text: '$6,3$ W',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma amostra é preparada contendo $2,0 \\times 10^{20}$ partículas radioativas de vida média igual a $2,0$ anos. Em cada decaimento, 6 fótons de comprimento de onda $\\lambda$ são emitidos. Após $2,0$ anos da amostra ter sido preparada, a taxa de produção de energia eletromagnética é igual a $2,0 \\space W$. Qual o valor de $\\lambda$?'
		},
		alternatives: [
			{
				text: '$0,70$ pm',
				number: QuestionAlternative.A
			},
			{
				text: '$0,56$ pm',
				number: QuestionAlternative.B
			},
			{
				text: '$0,23$ pm',
				number: QuestionAlternative.C
			},
			{
				text: '$1,1$ pm',
				number: QuestionAlternative.D
			},
			{
				text: '$1,5$ pm',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 8,
		statement: {
			text: 'A figura abaixo é o espectro eletromagnético de um corpo celeste desconhecido que se distancia da Terra ao longo da linha de visada com velocidade relativística. As linhas de absorção correspondem a transições muito bem conhecidas, cujos comprimentos de onda no referencial do laboratório são, respectivamente, $400$ nm, $500$ nm e $650$ nm. Qual é a temperatura na superfície desse corpo?',
			image: '2023-2/fm-8a.webp'
		},
		alternatives: [
			{
				text: '$8,3 \\times 10^3 \\space K$',
				number: QuestionAlternative.A
			},
			{
				text: '$4,1 \\times 10^3 \\space K$',
				number: QuestionAlternative.B
			},
			{
				text: '$7,2 \\times 10^3 \\space K$',
				number: QuestionAlternative.C
			},
			{
				text: '$3,0 \\times 10^3 \\space K$',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes para responder essa pergunta.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=hJMLSJvbN0U'
		},
		questionNumber: 8,
		statement: {
			text: 'A figura abaixo é o espectro eletromagnético de um corpo celeste desconhecido que se distancia da Terra ao longo da linha de visada com velocidade relativística. As linhas de absorção correspondem a transições muito bem conhecidas, cujos comprimentos no referencial do laboratório são, respectivamente, $300$ nm, $600$ nm e $800$ nm. Qual é a temperatura na superfície desse corpo?',
			image: '2023-2/fm-8b.webp'
		},
		alternatives: [
			{
				text: '$7,2 \\times 10^3 \\space K$',
				number: QuestionAlternative.A
			},
			{
				text: '$4,8 \\times 10^3 \\space K$',
				number: QuestionAlternative.B
			},
			{
				text: '$6,2 \\times 10^3 \\space K$',
				number: QuestionAlternative.C
			},
			{
				text: '$3,0 \\times 10^3 \\space K$',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há dados suficientes para responder essa pergunta',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere a dinâmica quântica de uma partícula em uma dimensão. A figura abaixo mostra três possibilidades para o módulo quadrado da função de onda dessa partícula, $|\\Psi(x)|^2$, num determinado instante, para diferentes valores do parâmetro $b$. Marque a afirmativa correta:',
			image: '2023-2/mq-1a.webp'
		},
		alternatives: [
			{
				text: 'O valor esperado da posição da partícula está à direita da posição mais provável de encontrar a partícula se $b > 2a$.',
				number: QuestionAlternative.A
			},
			{
				text: 'O valor esperado da posição da partícula está à esquerda da posição mais provável de encontrar a partícula se $b > 2a$.',
				number: QuestionAlternative.B
			},
			{
				text: 'O valor esperado da posição da partícula está à direita da posição mais provável de encontrar a partícula se $b < 2a$.',
				number: QuestionAlternative.C
			},
			{
				text: 'O valor esperado da posição da partícula está à esquerda da posição mais provável de encontrar a partícula se $b = 2a$.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor esperado da posição da partícula coincide com a posição mais provável de encontrar a partícula independente do valor de $b$.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere a dinâmica quântica de uma partícula em uma dimensão. A figura abaixo mostra três possibilidades para o módulo quadrado da função de onda dessa partícula, $|\\Psi(x)|^2$, num determinado instante, para diferentes valores do parâmetro $a$. Marque a afirmativa correta:',
			image: '2023-2/mq-1b.webp'
		},
		alternatives: [
			{
				text: 'O valor esperado da posição da partícula está à direita da posição mais provável de encontrar a partícula se $a > 2b$.',
				number: QuestionAlternative.A
			},
			{
				text: 'O valor esperado da posição da partícula está à esquerda da posição mais provável de encontrar a partícula se $a > 2b$.',
				number: QuestionAlternative.B
			},
			{
				text: 'O valor esperado da posição da partícula está à esquerda da posição mais provável de encontrar a partícula se $a = 2b$.',
				number: QuestionAlternative.C
			},
			{
				text: 'O valor esperado da posição da partícula está à direita da posição mais provável de encontrar a partícula se $a < 2b$.',
				number: QuestionAlternative.D
			},
			{
				text: 'O valor esperado da posição da partícula coincide com a posição mais provável de encontrar a partícula independente do valor de $a$.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere a dinâmica quântica de uma partícula sob a ação do potencial do tipo poço infinito unidimensional de largura $L$, como mostrado na figura. A função de onda da partícula, que se encontra no estado fundamental, é $\\Psi(x) = \\sqrt{\\frac{2}{L}} \\cos{(\\frac{\\pi}{L}x)}$. Assinale a opção correta para os valores esperados da posição, $\\langle x \\rangle$, do momento linear, $\\langle p \\rangle$, do quadrado da posição, $\\langle x^2 \\rangle$, e do quadrado do momento linear, $\\langle p^2 \\rangle$, e para o produto da incerteza na posição pela incerteza no momento linear, $\\sigma_x \\sigma_p$, respectivamente. O quadrado da incerteza em uma grandeza $O$ é dado por: $\\sigma_O^2 = \\langle O^2 \\rangle - \\langle O \\rangle^2$. Dica: Utilize as propriedades de funções pares e ímpares.',
			image: '2023-2/mq-2.webp'
		},
		alternatives: [
			{
				text: '$0$, $0$, $\\frac{0,32 L^2}{\\pi^2}$, $\\frac{\\pi^2\\hbar^2}{L^2}$, $0,57 \\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$, $0$, $\\frac{0,16 L^2}{\\pi^2}$, $\\frac{\\pi^2\\hbar^2}{L^2}$, $0,40 \\hbar$',
				number: QuestionAlternative.B
			},
			{
				text: '$0$, $0$, $\\frac{0,32 L^2}{\\pi^2}$, $\\frac{\\pi^2\\hbar^2}{L^2}$, $0,40 \\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$, $0$, $\\frac{0,16 L^2}{\\pi^2}$, $\\frac{\\pi^2\\hbar^2}{L^2}$, $0,57 \\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$0$, $\\sqrt{0,1}\\frac{\\pi \\hbar}{L}$, $\\frac{0,32 L^2}{\\pi^2}$, $1,1 \\frac{\\pi^2\\hbar^2}{L^2}$, $0,57 \\hbar$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere a dinâmica quântica de uma partícula sob a ação do potencial do tipo poço infinito unidimensional de largura $L$, como mostrado na figura. A função de onda da partícula, que se encontra no segundo estado excitado, é $\\Psi(x,t) = \\sqrt{\\frac{2}{L}} \\cos{(\\frac{3\\pi}{L}x)}$. Assinale a opção correta para os valores esperados da posição, $\\langle x \\rangle$, do momento linear, $\\langle p \\rangle$, do quadrado da posição, $\\langle x^2 \\rangle$, e do quadrado do momento linear, $\\langle p^2 \\rangle$, e para o produto da incerteza na posição pela incerteza no momento linear, $\\sigma_x \\sigma_p$, respectivamente. O quadrado da incerteza em uma grandeza $O$ é dado por: $\\sigma_O^2 = \\langle O^2 \\rangle - \\langle O \\rangle^2$. Dica: Utilize as propriedades de funções pares e ímpares.',
			image: '2023-2/mq-2.webp'
		},
		alternatives: [
			{
				text: '$0$, $0$, $\\frac{0,75 L^2}{\\pi^2}$, $\\frac{9\\pi^2\\hbar^2}{L^2}$, $2,6 \\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$, $0$, $\\frac{0,010 L^2}{\\pi^2}$, $\\frac{9\\pi^2\\hbar^2}{L^2}$, $0,30 \\hbar$',
				number: QuestionAlternative.B
			},
			{
				text: '$0$, $0$, $\\frac{0,010 L^2}{\\pi^2}$, $\\frac{9\\pi^2\\hbar^2}{L^2}$, $2,6 \\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$, $0$, $\\frac{0,75 L^2}{\\pi^2}$, $\\frac{9\\pi^2\\hbar^2}{L^2}$, $0,30 \\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$0$, $\\sqrt{0,1}\\frac{3\\pi \\hbar}{L}$, $\\frac{0,75 L^2}{\\pi^2}$, $1,1 \\frac{9\\pi^2\\hbar^2}{L^2}$, $2,6 \\hbar$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere a dinâmica unidimensional de uma partícula de massa $m$, que é lançada com energia $E$ de encontro a uma barreira de potencial de altura $V_0$ e largura $L$, a partir de um ponto à esquerda da barreira, como mostrado na figura abaixo (lado esquerdo). O gráfico (lado direito) mostra a probabilidade de transmissão $T$ da partícula através da barreira em função da razão $E/V_0$ para quatro casos, indicados pela função degrau em linha sólida grossa e pelas curvas em linhas sólida fina, tracejada e pontilhada. Se $V$ corresponde a uma afirmativa verdadeira e $F$ a uma afirmativa falsa, indique a sequência correspondente às afirmativas abaixo:<br/><br/><ul><li>( ) A probabilidade de transmissão dada pela função degrau corresponde ao caso quântico, enquanto as demais correspondem ao caso clássico.</li><li>( ) Ao contrário de uma partícula clássica, uma partícula quântica tem uma probabilidade não nula de atravessar uma barreira de potencial mesmo quando sua energia é menor do que a altura da barreira.</li><li>( ) Ao contrário de uma partícula clássica, uma partícula quântica tem uma probabilidade não nula de ser refletida por uma barreira de potencial mesmo quando sua energia é maior do que a altura da barreira.</li><li>( ) A probabilidade de transmissão quântica se aproxima do comportamento clássico para partículas de maior massa (considerando a mesma barreira de potencial), ou seja, a probabilidade vai a zero quando $E/V_0 < 1$ e atinge 1 em um número cada vez maior de pontos quando $E/V_0 > 1$.</li></ul>',
			image: '2023-2/mq-3.webp'
		},
		alternatives: [
			{
				text: 'F, V, V, V',
				number: QuestionAlternative.A
			},
			{
				text: 'F, V, V, F',
				number: QuestionAlternative.B
			},
			{
				text: 'F, V, F, V',
				number: QuestionAlternative.C
			},
			{
				text: 'V, F, F, F',
				number: QuestionAlternative.D
			},
			{
				text: 'V, F, V, F',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere a dinâmica unidimensional de uma partícula de massa $m$, que é lançada com energia $E$ de encontro a uma barreira de potencial de altura $V_0$ e largura $L$, a partir de um ponto à esquerda da barreira, como mostrado na figura abaixo (lado esquerdo). O gráfico (lado direito) mostra a probabilidade de transmissão $T$ da partícula através da barreira em função da razão $E/V_0$ para quatro casos, indicados pela função degrau em linha sólida grossa e pelas curvas em linhas sólida fina, tracejada e pontilhada. Se $V$ corresponde a uma afirmativa verdadeira e $F$ a uma afirmativa falsa, indique a sequência correspondente às afirmativas abaixo:<br/><br/><ul><li>( ) A probabilidade de transmissão dada pela função degrau corresponde ao caso clássico, enquanto as demais correspondem ao caso quântico.</li><li>( ) Ao contrário de uma partícula quântica, uma partícula clássica tem uma probabilidade nula de atravessar uma barreira de potencial se sua energia for menor do que a altura da barreira.</li><li>( ) Ao contrário de uma partícula quântica, uma partícula clássica tem uma probabilidade não nula de ser refletida por uma barreira de potencial se sua energia for maior do que a altura da barreira.</li><li>( ) A probabilidade de transmissão quântica se aproxima do comportamento clássico para partículas de menor massa (considerando a mesma barreira de potencial), ou seja, a probabilidade vai a zero quando $E/V_0 < 1$ e atinge 1 em um número cada vez maior de pontos quando $E/V_0 > 1$.</li></ul>',
			image: '2023-2/mq-3.webp'
		},
		alternatives: [
			{
				text: 'V, V, F, F',
				number: QuestionAlternative.A
			},
			{
				text: 'V, F, F, F',
				number: QuestionAlternative.B
			},
			{
				text: 'F, F, V, V',
				number: QuestionAlternative.C
			},
			{
				text: 'V, V, V, F',
				number: QuestionAlternative.D
			},
			{
				text: 'V, F, V, F',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 4,
		statement: {
			text: 'A equação de autovalores do Hamiltoniano de um oscilador harmônico unidimensional é dada por<br/><br/>$$H\\ket{n} = E_n\\ket{n} \\space \\text{,}$$<br/>onde $\\ket{n}$ são os autoestados ortonormais do hamiltoniano $H$, $E_n = \\hbar \\omega(n + 1/2)$ os autovalores de energia correspondentes, e $n = 0,1,...$ Seja $\\ket{\\psi} = \\sqrt{0,5} e^{iθ_0}\\ket{0} + \\sqrt{0,3} e^{iθ_1}\\ket{1} + R_2 e^{iθ_2}\\ket{2}$ o vetor de estado normalizado de um dado oscilador harmônico unidimensional, onde $θ_0$, $θ_1$ e $θ_2$ são constantes reais. A constante real $R_2 > 0$ e o valor esperado da energia desse oscilador valem, respectivamente:'
		},
		alternatives: [
			{
				text: '$\\sqrt{0,2}$ e $1,2 \\hbar\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$0,2$ e $0,80 \\hbar\\omega$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,2$ e $1,2 \\hbar\\omega$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{0,2}$ e $0,80 \\hbar\\omega$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,04$ e $0,70 \\hbar\\omega$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 4,
		statement: {
			text: 'A equação de autovalores do Hamiltoniano de um oscilador harmônico unidimensional é dada por<br/><br/>$$H\\ket{n} = E_n\\ket{n} \\space \\text{,}$$<br/>onde $\\ket{n}$ são os autoestados ortonormais do hamiltoniano $H$, $E_n = \\hbar \\omega(n + 1/2)$ os autovalores de energia correspondentes, e $n = 0,1,...$ Seja $\\ket{\\psi} = \\sqrt{0,3} e^{iθ_0}\\ket{0} + \\sqrt{0,2} e^{iθ_1}\\ket{1} + R_2 e^{iθ_2}\\ket{2}$ o vetor de estado normalizado de um dado oscilador harmônico unidimensional, onde $θ_0$, $θ_1$ e $θ_2$ são constantes reais. A constante real $R_2 > 0$ e o valor esperado da energia desse oscilador valem, respectivamente:'
		},
		alternatives: [
			{
				text: '$\\sqrt{0,5}$ e $1,7 \\hbar\\omega$',
				number: QuestionAlternative.A
			},
			{
				text: '$0,5$ e $1,7 \\hbar\\omega$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,5$ e $1,1 \\hbar\\omega$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{0,5}$ e $1,1 \\hbar\\omega$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,25$ e $0,61 \\hbar\\omega$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 5,
		statement: {
			text: 'A parte angular da função de onda de uma determinada partícula movendo-se em um potencial central é dada por<br/><br/>$$\\psi(\\theta,\\varphi) = \\sqrt{\\frac{3}{4\\pi}} \\cos{\\theta}\\sin{\\varphi}$$<br/>em que $\\theta$ e $\\varphi$ são os ângulos polares e azimutal, respectivamente. Quais são os resultados possíveis de medidas da componente $z$ do momento angular orbital $L_z$ dessa partícula?'
		},
		alternatives: [
			{
				text: '$-\\hbar$ e $\\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$-2\\hbar$ e $2\\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$-\\hbar$, $0$ e $\\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$-\\hbar/2$ e $\\hbar/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 5,
		statement: {
			text: 'A parte angular da função de onda de uma determinada partícula movendo-se em um potencial central é dada por<br/><br/>$$\\psi(\\theta,\\varphi) = \\sqrt{\\frac{3}{4\\pi}} \\cos{\\theta}\\sin{2\\varphi}$$<br/>em que $\\theta$ e $\\varphi$ são os ângulos polares e azimutal, respectivamente. Quais são os resultados possíveis de medidas da componente $z$ do momento angular orbital $L_z$ dessa partícula?'
		},
		alternatives: [
			{
				text: '$-2\\hbar$ e $2\\hbar$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$-\\hbar$ e $\\hbar$',
				number: QuestionAlternative.C
			},
			{
				text: '$-\\hbar$, $0$ e $\\hbar$',
				number: QuestionAlternative.D
			},
			{
				text: '$-\\hbar/2$ e $\\hbar/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere uma partícula de massa $m$ movendo-se em uma dimensão sob a ação de um potencial do tipo poço infinito<br/><br/>$$V(x) = \\begin{cases}0, & |x| \\lt a/2 \\\\ \\infty, & |x| \\geq a/2\\end{cases}$$<br/>sendo $a$ uma constante positiva com dimensão de comprimento. As soluções para a equação de Schrödinger independente do tempo desse problema podem ser rotuladas por um inteiro positivo $n$: $H\\psi_n(x) = E_n \\psi_n(x)$, onde $H$ é o hamiltoniano, $\\psi_n(x)$ a autofunção e $E_n$ o auto-valor de energia correspondente ao estado $n$. Para quais estados teríamos $|\\psi_n(x)|^2 = 0$ em $x = 0$?'
		},
		alternatives: [
			{
				text: 'Apenas estados com $n$ par.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas o estado fundamental, $n = 1$.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas estados com $n$ ímpar.',
				number: QuestionAlternative.C
			},
			{
				text: 'Todos os estados.',
				number: QuestionAlternative.D
			},
			{
				text: 'Todos os estados exceto o estado fundamental.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 6,
		statement: {
			text: 'Considere uma partícula de massa $m$ movendo-se em uma dimensão sob a ação de um potencial do tipo poço infinito<br/><br/>$$V(x) = \\begin{cases}0, & |x| \\lt a/2 \\\\ \\infty, & |x| \\geq a/2\\end{cases}$$<br/>sendo $a$ uma constante positiva com dimensão de comprimento. As soluções para a equação de Schrödinger independente do tempo desse problema podem ser rotuladas por um inteiro positivo $n$: $H\\psi_n(x) = E_n \\psi_n(x)$, onde $H$ é o hamiltoniano, $\\psi_n(x)$ a autofunção e $E_n$ o auto-valor de energia correspondente ao estado $n$. Para quais estados teríamos um máximo local de $|\\psi_n(x)|^2$ em $x = 0$?'
		},
		alternatives: [
			{
				text: 'Apenas estados com $n$ ímpar.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas o estado fundamental, $n = 1$.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas estados com $n$ par.',
				number: QuestionAlternative.C
			},
			{
				text: 'Todos os estados.',
				number: QuestionAlternative.D
			},
			{
				text: 'Todos os estados exceto o estado fundamental.',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere dois spins $1/2$, $\\vec{S_1}$ e $\\vec{S_2}$, cuja interação é descrita por meio do hamiltoniano<br/><br/>$$H = \\frac{J}{\\hbar^2}\\vec{S_1} \\cdot \\vec{S_1} = \\frac{J}{\\hbar^2} (S_1^x S_2^x + S_1^y S_2^y + S_1^z S_2^z) \\space \\text{,}$$<br/>em que $J > 0$ tem dimensão de energia. A energia do estado fundamental desse sistema é:'
		},
		alternatives: [
			{
				text: '$-3J/4$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$-J/4$',
				number: QuestionAlternative.C
			},
			{
				text: '$J/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$3J/4$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere dois spins $1/2$, $\\vec{S_1}$ e $\\vec{S_2}$, cuja interação é descrita por meio do hamiltoniano<br/><br/>$$H = -\\frac{J}{\\hbar^2}\\vec{S_1} \\cdot \\vec{S_1} = -\\frac{J}{\\hbar^2} (S_1^x S_2^x + S_1^y S_2^y + S_1^z S_2^z) \\space \\text{,}$$<br/>em que $J > 0$ tem dimensão de energia. A energia do estado fundamental desse sistema é:'
		},
		alternatives: [
			{
				text: '$-J/4$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$',
				number: QuestionAlternative.B
			},
			{
				text: '$-3J/4$',
				number: QuestionAlternative.C
			},
			{
				text: '$J/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$3J/4$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico com um espaço de estados tridimensional e a seguinte representação de um operador quântico $J$, numa certa base ortonormal do espaço,<br/><br/>$$J = a \\begin{bmatrix}1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & -1\\end{bmatrix} \\space \\text{,}$$<br/>onde $a$ é uma constante. Suponha que o sistema esteja no seguinte estado<br/><br/>$$\\begin{bmatrix}1/2 \\\\ 1/2 \\\\ 1/\\sqrt{2}\\end{bmatrix} \\space \\text{,}$$<br/>representado na mesma base. Uma medida da quantidade física associada ao operador $J^2$ é realizada e o valor $a^2$ é obtido. Ao medirmos a quantidade física associada ao operador $J$ imediatamente em seguida, podemos afirmar que:'
		},
		alternatives: [
			{
				text: 'obtemos $+a$ com probabilidade $1/3$ e $-a$ com probabilidade $2/3$',
				number: QuestionAlternative.A
			},
			{
				text: 'obtemos $+a$ com probabilidade $1/4$, $0$ com probabilidade $1/4$ e $-a$ com probabilidade $1/2$',
				number: QuestionAlternative.B
			},
			{
				text: 'obtemos $+a$ com probabilidade $2/3$ e $-a$ com probabilidade $1/3$',
				number: QuestionAlternative.C
			},
			{
				text: 'obtemos $0$ com probabilidade $1$',
				number: QuestionAlternative.D
			},
			{
				text: 'obtemos $+a$ com probabilidade $1/2$ e $0$ com probabilidade $1/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=EA7CB0Lfvvk'
		},
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico com um espaço de estados tridimensional e a seguinte representação de um operador quântico $J$, numa certa base ortonormal do espaço,<br/><br/>$$J = a \\begin{bmatrix}1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & -1\\end{bmatrix} \\space \\text{,}$$<br/>onde $a$ é uma constante. Suponha que o sistema esteja no seguinte estado<br/><br/>$$\\begin{bmatrix}1/\\sqrt{2} \\\\ 1/2 \\\\ 1/2\\end{bmatrix} \\space \\text{,}$$<br/>representado na mesma base. Uma medida da quantidade física associada ao operador $J^2$ é realizada e o valor $a^2$ é obtido. Ao medirmos a quantidade física associada ao operador $J$ imediatamente em seguida, podemos afirmar que:'
		},
		alternatives: [
			{
				text: 'obtemos $+a$ com probabilidade $2/3$ e $-a$ com probabilidade $1/3$',
				number: QuestionAlternative.A
			},
			{
				text: 'obtemos $+a$ com probabilidade $1/3$ e $-a$ com probabilidade $2/3$',
				number: QuestionAlternative.B
			},
			{
				text: 'obtemos $+a$ com probabilidade $1/2$, $0$ com probabilidade $1/4$ e $-a$ com probabilidade $1/4$',
				number: QuestionAlternative.C
			},
			{
				text: 'obtemos $0$ com probabilidade $1$',
				number: QuestionAlternative.D
			},
			{
				text: 'obtemos $+a$ com probabilidade $1/2$ e $0$ com probabilidade $1/2$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 1,
		statement: {
			text: 'Um líquido de massa $m$ e calor específico $c$ deve ser aquecido por uma variação de temperatura $\\Delta T$, sem alcançar a ebulição. Para isso, um resistor de resistência $R$ é conectado a uma pilha de resistência interna insignificante. O resistor é inserido no líquido em uma cuba, conforme mostrado na figura. O tempo $\\Delta t$ necessário para alcançar a variação de temperatura é cronometrado. Se todo o calor gerado pelo resistor é transferido para o líquido, qual é a força eletromotriz da pilha?',
			image: '2023-2/te-1.webp'
		},
		alternatives: [
			{
				text: '$\\epsilon = \\sqrt{\\frac{R m c \\Delta{T}}{\\Delta{t}}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\epsilon = \\sqrt{\\frac{2R m c \\Delta{T}}{\\Delta{t}}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\epsilon = 3\\sqrt{\\frac{R m c \\Delta{T}}{\\Delta{t}}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\epsilon = \\sqrt{\\frac{3R m c \\Delta{T}}{\\Delta{t}}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\epsilon = 2\\sqrt{\\frac{R m c \\Delta{T}}{\\Delta{t}}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 1,
		statement: {
			text: 'Um líquido de massa $m$ deve ser aquecido por uma variação de temperatura $\\Delta T$, sem alcançar a ebulição. Para isso, um resistor de resistência $R$ é conectado a uma pilha de resistência interna insignificante e força eletromotriz $\\epsilon$ . O resistor é inserido no líquido em uma cuba, conforme mostrado na figura. O tempo $\\Delta t$ necessário para alcançar a variação de temperatura é cronometrado. Se todo o calor gerado pelo resistor é transferido para o líquido, qual é o calor específico $c$ do líquido?',
			image: '2023-2/te-1.webp'
		},
		alternatives: [
			{
				text: '$c = \\frac{\\epsilon^2 \\Delta{t}}{m R \\Delta{T}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$c = \\frac{2\\epsilon^2 \\Delta{t}}{m R \\Delta{T}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$c = \\frac{3\\epsilon^2 \\Delta{t}}{2m R \\Delta{T}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$c = \\frac{\\epsilon^2 \\Delta{t}}{2m R \\Delta{T}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$c = \\frac{\\epsilon^2 \\Delta{t}}{3m R \\Delta{T}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma casa está a uma temperatura absoluta de equilíbrio $T$, sendo aquecida por meio de uma bomba de calor que retira calor de um rio que se encontra à temperatura absoluta $T_0$, consumindo uma potência constante $dW/dt = \\lambda$. O coeficiente de desempenho $\\eta$ de uma bomba de calor é a razão entre o calor que a bomba fornece e o trabalho necessário para operá-la, ambos ao longo de um ciclo de operação. A casa perde calor para o ambiente externo a uma taxa dada por $\\alpha(T - T_0)$, onde $\\alpha$ é uma constante. A temperatura de equilíbrio $T$ da casa é:'
		},
		alternatives: [
			{
				text: '$T_0 + \\frac{\\eta \\lambda}{\\alpha}$',
				number: QuestionAlternative.A
			},
			{
				text: '$T_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$T_0 + \\frac{2\\eta \\lambda}{\\alpha}$',
				number: QuestionAlternative.C
			},
			{
				text: '$T_0 + \\frac{\\lambda}{\\alpha}$',
				number: QuestionAlternative.D
			},
			{
				text: '$T_0 + \\frac{2\\lambda}{\\alpha}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma casa está a uma temperatura absoluta de equilíbrio $T$, sendo aquecida por meio de uma bomba de calor que retira calor de um rio que se encontra à temperatura absoluta $T_0$, consumindo uma potência constante $dW/dt = \\lambda$. O coeficiente de desempenho $\\eta$ de uma bomba de calor é a razão entre o calor que a bomba fornece e o trabalho necessário para operá-la, ambos ao longo de um ciclo de operação. A casa perde calor para o ambiente externo a uma taxa dada por $\\alpha(T - T_0)$, onde $\\alpha$ é uma constante. Para que a casa mantenha a temperatura de equilíbrio $T$, o coeficiente de desempenho $\\eta$ da bomba deve ser:'
		},
		alternatives: [
			{
				text: '$\\eta = \\frac{\\alpha (T - T_0)}{\\lambda}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\eta = \\frac{\\alpha T}{\\lambda}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\eta = \\frac{\\alpha T_0}{\\lambda}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\eta = \\frac{\\lambda}{\\alpha (T - T_0)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\eta = \\frac{\\lambda}{\\alpha T}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma quantidade de água com massa de $1,0$ kg a $0^\\circ$ C é aquecida até $100^\\circ$ C ao ser posta em contato com um reservatório térmico a $100^\\circ$ C em um processo irreversível. Considere que o calor específico da água é $c = 4 \\space J/g$, que $\\ln(\\frac{373}{273}) \\approx \\frac{3}{10}$ e que $\\frac{100}{373} \\approx \\frac{1}{4}$. Quais são as variações de entropia da água, do reservatório e do universo no processo, respectivamente, em unidades de $J/K$? Dica: considere um processo reversível com os mesmos estados inicial e final para calcular as variações de entropia.'
		},
		alternatives: [
			{
				text: '1200, -1000, 200',
				number: QuestionAlternative.A
			},
			{
				text: '1000, -1000, 0',
				number: QuestionAlternative.B
			},
			{
				text: '1200, -1000, 0',
				number: QuestionAlternative.C
			},
			{
				text: '1200, -1000, -2200',
				number: QuestionAlternative.D
			},
			{
				text: '1200, 0, 0',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma quantidade de água com massa de $2,0$ kg a $0^\\circ$ C é aquecida até $100^\\circ$ C ao ser posta em contato com um reservatório térmico a $100^\\circ$ C em um processo irreversível. Considere que o calor específico da água é $c = 4 \\space J/g$, que $\\ln(\\frac{373}{273}) \\approx \\frac{3}{10}$ e que $\\frac{100}{373} \\approx \\frac{1}{4}$. Quais são as variações de entropia da água, do reservatório e do universo no processo, respectivamente, em unidades de $J/K$? Dica: considere um processo reversível com os mesmos estados inicial e final para calcular as variações de entropia.'
		},
		alternatives: [
			{
				text: '2400, -2000, 400',
				number: QuestionAlternative.A
			},
			{
				text: '2000, -2000, 0',
				number: QuestionAlternative.B
			},
			{
				text: '2400, -2000, 0',
				number: QuestionAlternative.C
			},
			{
				text: '2400, -2000, 4400',
				number: QuestionAlternative.D
			},
			{
				text: '2400, 0, 0',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 4,
		statement: {
			text: 'Um gás ideal monoatômico é descrito pelas equações<br/><br/>$$pV = nRT \\qquad e \\qquad U = \\frac{3}{2}nRT$$<br/>onde $n$ é o número de moles e $R$ é a constante universal dos gases. Em determinados processos de compressão, a temperatura e o volume do gás variam de um estado inicial dado por ($T_0,V_0$) até um estado qualquer dado por ($T,V$) obedecendo a relação<br/><br/>$$T = \\left(\\frac{V}{V_0}\\right)^x T_0$$<br/>onde $x$ é uma constante não nula. O trabalho $W$ realizado pelo gás num processo desse tipo para um valor genérico de $x$, ao ser comprimido a partir de ($T_0,V_0$) até o volume final $V_1$, e o valor de $x$ tal que o calor transferido para o gás no mesmo processo seja nulo são dados por:'
		},
		alternatives: [
			{
				text: '$W = \\frac{nRT_0}{x} \\left[\\left(\\frac{V_1}{V_0}\\right)^x - 1\\right]$ e $x = -\\frac{2}{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = \\frac{nRT_0}{2}$ e $x = -1$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = \\frac{nRT_0}{2} \\ln{\\frac{V_1}{V_0}}$ e $x = -\\frac{1}{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = \\frac{nRT_0}{x} \\left[\\left(\\frac{V_1}{V_0}\\right)^{2x} - 1\\right]$ e $x = -\\frac{2}{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = \\frac{nRT_0}{x} \\left[\\left(\\frac{V_1}{V_0}\\right)^x - 1\\right]$ e $x = 0$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=UnXot2hOFv8'
		},
		questionNumber: 4,
		statement: {
			text: 'Um gás ideal diatômico é descrito pelas equações<br/><br/>$$pV = nRT \\qquad e \\qquad U = \\frac{5}{2}nRT$$<br/>onde $n$ é o número de moles e $R$ é a constante universal dos gases. Em determinados processos de compressão, a temperatura e o volume do gás variam de um estado inicial dado por ($T_0,V_0$) até um estado qualquer dado por ($T,V$) obedecendo a relação<br/><br/>$$T = \\left(\\frac{V}{V_0}\\right)^x T_0$$<br/>onde $x$ é uma constante não nula. O trabalho $W$ realizado pelo gás num processo desse tipo para um valor genérico de $x$, ao ser comprimido a partir de ($T_0,V_0$) até o volume final $V_1$, e o valor de $x$ tal que o calor transferido para o gás no mesmo processo seja nulo são dados por:'
		},
		alternatives: [
			{
				text: '$W = \\frac{nRT_0}{x} \\left[\\left(\\frac{V_1}{V_0}\\right)^x - 1\\right]$ e $x = -\\frac{2}{5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = \\frac{nRT_0}{2}$ e $x = -1$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = \\frac{nRT_0}{2} \\ln{\\frac{V_1}{V_0}}$ e $x = -\\frac{2}{9}$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = \\frac{nRT_0}{x} \\left[\\left(\\frac{V_1}{V_0}\\right)^x - 1\\right]$ e $x = -\\frac{2}{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = \\frac{nRT_0}{3x} \\left[\\left(\\frac{V_1}{V_0}\\right)^{3x} - 1\\right]$ e $x = 0$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um sistema de duas partículas interagentes 1 e 2, ambas em contato com um mesmo reservatório térmico de temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$. Cada partícula é caracterizada pela variável $n_i$ ($i = 1, 2$), que pode assumir os valores 0 ou 1. A energia do sistema vale $\\epsilon(n_1 + n_2)$ se $n_1 \\neq n_2$ e $\\epsilon(n_1 + n_2) + \\Delta$ se $n_1 = n_2$, onde $\\epsilon$ e $\\Delta$ são constantes positivas. A probabilidade do sistema estar no estado de maior energia é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{e^{-\\beta (2\\epsilon + \\Delta)}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-\\beta (2\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{e^{-\\beta \\Delta}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-\\beta (2\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{e^{-\\beta \\Delta}}{e^{-\\beta \\Delta} + e^{-\\beta \\epsilon} + e^{-\\beta (\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{e^{-\\beta \\Delta}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-2\\beta \\epsilon}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{1 + 2e^{-\\beta \\epsilon} + e^{-2\\beta \\epsilon}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um sistema de duas partículas interagentes 1 e 2, ambas em contato com um mesmo reservatório térmico de temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$. Cada partícula é caracterizada pela variável $n_i$ ($i = 1, 2$), que pode assumir os valores 0 ou 1. A energia do sistema vale $\\epsilon(n_1 + n_2)$ se $n_1 \\neq n_2$ e $\\epsilon(n_1 + n_2) + \\Delta$ se $n_1 = n_2$, onde $\\epsilon$ e $\\Delta$ são constantes positivas. A probabilidade do sistema ocupar o estado com energia $\\Delta$ é dada por:'
		},
		alternatives: [
			{
				text: '$\\frac{e^{-\\beta\\Delta}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-\\beta (2\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{e^{-\\beta(2\\epsilon + \\Delta)}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-\\beta (2\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{e^{-\\beta\\Delta}}{e^{-\\beta \\Delta} + e^{-\\beta \\epsilon} + e^{-\\beta (\\epsilon + \\Delta)}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{e^{-\\beta\\Delta}}{e^{-\\beta \\Delta} + 2e^{-\\beta \\epsilon} + e^{-2\\beta \\epsilon}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{1 + 2e^{-\\beta \\epsilon} + e^{-2\\beta \\epsilon}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema formado por $N$ partículas independentes em contato com um reservatório térmico à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$, no qual cada partícula pode assumir valores de energia $\\epsilon_n = n\\epsilon$, onde $\\epsilon > 0$ e $n = 1,3,5,7,...$. A expressão para a energia total média do sistema $U$ é dada por:'
		},
		alternatives: [
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{2\\beta \\epsilon} + 1}{e^{2\\beta \\epsilon} - 1}\\right)$',
				number: QuestionAlternative.A
			},
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{2\\beta \\epsilon} - 1}{e^{2\\beta \\epsilon} + 1}\\right)$',
				number: QuestionAlternative.B
			},
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{\\beta \\epsilon} + 1}{e^{\\beta \\epsilon} - 1}\\right)$',
				number: QuestionAlternative.C
			},
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{\\beta \\epsilon} - 1}{e^{\\beta \\epsilon} + 1}\\right)$',
				number: QuestionAlternative.D
			},
			{
				text: '$U = N \\epsilon$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema formado por $N$ partículas independentes em contato com um reservatório térmico à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$, no qual cada partícula pode assumir valores de energia $\\epsilon_n = n\\epsilon$, onde $\\epsilon > 0$ e $n = 0,2,4,6,...$. A expressão para a energia total média do sistema $U$ é dada por:'
		},
		alternatives: [
			{
				text: '$U = \\frac{2N\\epsilon}{e^{2\\beta \\epsilon} - 1}$',
				number: QuestionAlternative.A
			},
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{\\beta \\epsilon} - 1}{e^{\\beta \\epsilon} + 1}\\right)$',
				number: QuestionAlternative.B
			},
			{
				text: '$U = \\frac{2N\\epsilon}{e^{2\\beta \\epsilon} + 1}$',
				number: QuestionAlternative.C
			},
			{
				text: '$U = \\frac{N\\epsilon}{e^{\\beta \\epsilon} - 1}$',
				number: QuestionAlternative.D
			},
			{
				text: '$U = N \\epsilon \\left(\\frac{e^{\\beta \\epsilon} + 1}{e^{\\beta \\epsilon} - 1}\\right)$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um oscilador harmônico unidimensional em contato com um reservatório térmico à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$ descrito pela Hamiltoniana<br/><br/>$${\\cal H} = \\frac{p^2}{2M} + V(q) \\space \\text{,}$$<br/>onde $V(q) = \\frac{M\\omega^2q^2}{2}$, se $q > 0$, e $V(q) = \\epsilon + \\frac{M\\omega^2q^2}{2}$, se $q < 0$. A expressão para a função de partição canônica é dada por:'
		},
		alternatives: [
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega} (1 + e^{-\\beta \\epsilon})$',
				number: QuestionAlternative.A
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega}$',
				number: QuestionAlternative.B
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega} (1 - e^{-\\beta \\epsilon})$',
				number: QuestionAlternative.C
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega} (1 + e^{\\beta \\epsilon})$',
				number: QuestionAlternative.D
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega} (1 - e^{\\beta \\epsilon})$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um oscilador harmônico unidimensional em contato com um reservatório térmico à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$ descrito pela Hamiltoniana<br/><br/>$${\\cal H} = \\frac{p^2}{2M} + V(q) \\space \\text{,}$$<br/>onde $V(q) = -\\frac{\\epsilon}{2} + \\frac{M\\omega^2q^2}{2}$, se $q > 0$, e $V(q) = \\frac{\\epsilon}{2} + \\frac{M\\omega^2q^2}{2}$, se $q < 0$. A expressão para a função de partição canônica é dada por:'
		},
		alternatives: [
			{
				text: '$Z = \\frac{2\\pi}{\\beta h \\omega} \\cosh \\left(\\frac{\\beta \\epsilon}{2}\\right)$',
				number: QuestionAlternative.A
			},
			{
				text: '$Z = \\frac{2\\pi}{\\beta h \\omega} \\sinh \\left(\\frac{\\beta \\epsilon}{2}\\right)$',
				number: QuestionAlternative.B
			},
			{
				text: '$Z = \\frac{2\\pi}{\\beta h \\omega} (1 + e^{-\\frac{\\beta \\epsilon}{2}})$',
				number: QuestionAlternative.C
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega}$',
				number: QuestionAlternative.D
			},
			{
				text: '$Z = \\frac{\\pi}{\\beta h \\omega} (1 - e^{\\frac{\\beta \\epsilon}{2}})$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 4,
		statement: {
			text: 'Um sistema é formado por $N$ íons magnéticos localizados e independentes, em contato com um reservatório à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$. Cada íon tem energia dada por $\\epsilon = -\\mu_0hS_i + DS_i^2$, onde $\\mu_0$, $h$, $D$ e $S_i$ denotam, respectivamente, o magneton de Bohr, a intensidade do campo magnético externo, o campo cristalino e a variável de spin, respectivamente, esta última podendo assumir os valores $S_i = -3, -1, 1, 3$. A expressão para o momento de quadrupolo médio por íon $q = \\sum_{i=1}^N\\langle S_i^2\\rangle/N$ é dada por:'
		},
		alternatives: [
			{
				text: '$q = \\frac{9e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)}}{e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q = \\frac{9e^{-9\\beta D} \\sinh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\sinh{(\\beta\\mu_0h)}}{e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q = -\\frac{9e^{9\\beta D} \\sinh{(3\\beta\\mu_0h)} + e^{\\beta D} \\sinh{(\\beta\\mu_0h)}}{e^{9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q = -\\frac{9e^{9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{\\beta D} \\cosh{(\\beta\\mu_0h)}}{e^{9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q = \\frac{2 \\cosh{(\\beta\\mu_0h)}}{e^{\\beta D} + 2 \\cosh{(\\beta\\mu_0h)}}$',
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
			youtubeUrl: 'https://www.youtube.com/watch?v=F6jm1BXk5x8'
		},
		questionNumber: 4,
		statement: {
			text: 'Um sistema é formado por $N$ íons magnéticos localizados e independentes, em contato com um reservatório à temperatura $T \\left[\\beta = (k_BT)^{-1}\\right]$. Cada íon tem energia dada por $\\epsilon = -\\mu_0hS_i + DS_i^2$, onde $\\mu_0$, $h$, $D$ e $S_i$ denotam, respectivamente, o magneton de Bohr, a intensidade do campo magnético externo, o campo cristalino e a variável de spin, respectivamente, esta última podendo assumir os valores $S_i = -3, -1, 1, 3$. A expressão para a magnetização média por íon $m = \\sum_{i=1}^N\\langle S_i\\rangle/N$ é dada por:'
		},
		alternatives: [
			{
				text: '$m = \\frac{3\\mu_0 e^{-9\\beta D} \\sinh{(3\\beta\\mu_0h)} + \\mu_0 e^{-\\beta D} \\sinh{(\\beta\\mu_0h)}}{e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$m = \\frac{3\\mu_0 e^{9\\beta D} \\sinh{(3\\beta\\mu_0h)} + \\mu_0 e^{\\beta D} \\sinh{(\\beta\\mu_0h)}}{e^{9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$m = 2\\mu_0 \\tanh{(\\beta\\mu_0h)} (e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)})$',
				number: QuestionAlternative.C
			},
			{
				text: '$m = 2\\mu_0 \\tanh{(\\beta\\mu_0h)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$m = \\frac{\\mu_0 e^{\\beta D}}{e^{-9\\beta D} \\cosh{(3\\beta\\mu_0h)} + e^{-\\beta D} \\cosh{(\\beta\\mu_0h)}}$',
				number: QuestionAlternative.E
			}
		]
	}
];
