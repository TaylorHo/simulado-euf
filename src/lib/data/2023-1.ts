import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2023,
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
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 1,
		statement: {
			text: `Considere a lagrangiana dependente explicitamente do tempo<br/><br/>$$L(q, \\dot{q}, t) = \\left(\\frac{1}{2} m\\dot{q}^2 - \\frac{m\\omega^2q^2}{2}\\right) e^{2\\gamma t} \\space \\text{,}$$<br/>a qual descreve o movimento unidimensional de uma partícula de massa $m$, sendo $\\gamma$ uma constante. Nesse caso, podemos afirmar que a equação de movimento do sistema é dada por:`
		},
		alternatives: [
			{
				text: `$\\ddot{q} + 2\\gamma\\dot{q} + \\omega^2 q = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\ddot{q} + \\omega^2 q = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + \\omega^2 q = 0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + 2\\omega^2 q$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + 4\\omega^2 q = 0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 1,
		statement: {
			text: `Considere a lagrangiana dependente explicitamente do tempo<br/><br/>$$L(q, \\dot{q}, t) = \\left(\\frac{1}{2} m\\dot{q}^2 - \\frac{m\\omega^2q^2}{2}\\right) e^{3\\gamma t} \\space \\text{,}$$<br/>a qual descreve o movimento unidimensional de uma partícula de massa $m$, sendo $\\gamma$ uma constante. Nesse caso, podemos afirmar que a equação de movimento do sistema é dada por:`
		},
		alternatives: [
			{
				text: `$\\ddot{q} + 3\\gamma\\dot{q} + \\omega^2 q = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\ddot{q} + \\frac{1}{3}\\omega^2 q = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + 2\\omega^2 q = 0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + 3\\omega^2 q = 0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\ddot{q} + \\gamma\\dot{q} + \\frac{1}{3}\\omega^2 q$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 2,
		statement: {
			text: `No experimento da gota de Millikan, gotas minúsculas de óleo em um tubo com ar são aceleradas através de um campo elétrico. Um estudante aplica um campo elétrico de módulo constante $E$ e observa a gota subir. Das forças que atuam sobre a gota, a força elétrica a puxa para cima, enquanto o seu peso e a força de resistência do fluido, esta última proporcional a sua velocidade, se opõem ao movimento, o que é descrito pela força resultante<br/><br/>$$F_r = qE - mg - bv$$<br/>Despreza-se o empuxo do ar sobre a gota de óleo no tubo. Aqui, $q$ é a carga elétrica (positiva) da gota, $m$ é a massa da gota, $g$ é a aceleração gravitacional e $b$ é uma constante positiva.<br/>Supondo a gota em repouso no instante $t = 0$, é correto afirmar que a velocidade da gota em função do tempo é dada por:`
		},
		alternatives: [
			{
				text: `$\\frac{qE - mg}{b} (1 - e^{-\\frac{b}{m}t})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{qE - mg}{2b} (1 - e^{-\\frac{2b}{m}t})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{qE - mg}{3b} (1 - e^{-\\frac{3b}{m}t})$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{(qE - mg)}{m}t$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{qE}{b}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 2,
		statement: {
			text: `No experimento da gota de Millikan, gotas minúsculas de óleo em um tubo com ar são aceleradas através de um campo elétrico. Um estudante aplica um campo elétrico de módulo constante $E$ e observa a gota subir. Das forças que atuam sobre a gota, a força elétrica a puxa para cima, enquanto o seu peso e a força de resistência do fluido, esta última proporcional a sua velocidade, se opõem ao movimento, o que é descrito pela força resultante<br/><br/>$$F_r = qE - mg - 2bv$$<br/>Despreza-se o empuxo do ar sobre a gota de óleo no tubo. Aqui, $q$ é a carga elétrica (positiva) da gota, $m$ é a massa da gota, $g$ é a aceleração gravitacional e $b$ é uma constante positiva.<br/>Supondo a gota em repouso no instante $t = 0$, é correto afirmar que a velocidade da gota em função do tempo é dada por:`
		},
		alternatives: [
			{
				text: `$\\frac{qE - mg}{2b} (1 - e^{-\\frac{2b}{m}t})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{qE - mg}{b} (1 - e^{-\\frac{b}{m}t})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{qE - mg}{3b} (1 - e^{-\\frac{3b}{m}t})$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{(qE - mg)}{m}t$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{2qE}{b}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 3,
		statement: {
			text: `Um corpo de massa $4m$ e um corpo de massa $m$ estão ligados através de um barbante que mantém uma mola de massa desprezível comprimida entre os corpos. O sistema está em repouso sobre uma mesa cujo atrito também é desprezível. Em um dado instante, o barbante é cortado e o corpo de massa $4m$ adquire uma velocidade $v$. O corpo de massa $m$, com a velocidade adquirida após se desprender, colide frontalmente com uma parede, de forma totalmente inelástica. Após uma análise, concluiu-se que a força de interação desse corpo com a parede, em função do tempo, aproxima-se muito bem por uma função triangular parametrizada da forma<br/><br/>$$F(t) = \\begin{cases}\\frac{t}{\\tau} F_{max}, & \\text{se} & 0 \\leq t \\leq \\tau \\\\ (2 - \\frac{t}{\\tau}) F_{max}, & \\text{se} & \\tau \\lt t \\leq 2\\tau \\\\ 0, & \\text{se} & t \\gt 2\\tau\\end{cases}$$<br/>em que $t = 0$ corresponde ao exato instante em que a massa toca a parede.<br/>Nessas condições, é correto dizer que $F_{\\text{max}}$ é dada por:`
		},
		alternatives: [
			{
				text: `$4\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$3\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$1$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 3,
		statement: {
			text: `Um corpo de massa $3m$ e um corpo de massa $2m$ estão ligados através de um barbante que mantém uma mola de massa desprezível comprimida entre os corpos. O sistema está em repouso sobre uma mesa cujo atrito também é desprezível. Em um dado instante, o barbante é cortado e o corpo de massa $3m$ adquire uma velocidade $v$. O corpo de massa $2m$, com a velocidade adquirida após se desprender, colide frontalmente com uma parede, de forma totalmente inelástica. Após uma análise, concluiu-se que a força de interação desse corpo com a parede, em função do tempo, aproxima-se muito bem por uma função triangular parametrizada da forma<br/><br/>$$F(t) = \\begin{cases}\\frac{t}{\\tau} F_{max}, & \\text{se} & 0 \\leq t \\leq \\tau \\\\ (2 - \\frac{t}{\\tau}) F_{max}, & \\text{se} & \\tau \\lt t \\leq 2\\tau \\\\ 0, & \\text{se} & t \\gt 2\\tau\\end{cases}$$<br/>em que $t = 0$ corresponde ao exato instante em que a massa toca a parede.<br/>Nessas condições, é correto dizer que $F_{\\text{max}}$ é dada por:`
		},
		alternatives: [
			{
				text: `$3\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$4\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{mv}{\\tau}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$1$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 4,
		statement: {
			text: `Considere a força<br/><br/>$$\\vec{F}(x,y) = -20bx^3y^2 \\space \\vec{i} -10bx^4y \\space \\vec{j} \\space \\text{,}$$<br/>em que $b$ é uma constante. Sobre essa força, é correto afirmar que:`
		},
		alternatives: [
			{
				text: `$\\nabla \\times \\vec{F} = 0$, e, portanto, $F$ é conservativa, obtida do potencial $U(x,y) = 5bx^4y^2 + K$, sendo $K$ uma constante arbitrária.`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\nabla \\times \\vec{F} = 0$, mas a força não é conservativa.`,
				number: QuestionAlternative.B
			},
			{
				text: `não é conservativa, pois se anula em $(x,y) = (0,0)$.`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\nabla \\times \\vec{F} \\neq 0$, logo a força não pode ser conservativa.`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\nabla \\times \\vec{F} = 0$, e portanto $F$ é conservativa, obtida do potencial $U(x,y) = 10bx^4y^2 + bx^3y^2 + K$, sendo $K$ uma constante arbitrária.`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 4,
		statement: {
			text: `Considere a força<br/><br/>$$\\vec{F}(x,y) = -3x^2y \\space \\vec{i} -ax^3 \\space \\vec{j} \\space \\text{,}$$<br/>em que $a$ é uma constante. Sobre essa força, é correto afirmar que:`
		},
		alternatives: [
			{
				text: `$\\nabla \\times \\vec{F} = 0$, e, portanto, $F$ é conservativa, obtida do potencial $U(x,y) = ax^3y + K$, sendo $K$ uma constante arbitrária.`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\nabla \\times \\vec{F} = 0$, mas a força não é conservativa.`,
				number: QuestionAlternative.B
			},
			{
				text: `não é conservativa, pois se anula em $(x,y) = (0,0)$.`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\nabla \\times \\vec{F} \\neq 0$, logo a força não pode ser conservativa.`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\nabla \\times \\vec{F} = 0$, e portanto $F$ é conservativa, obtida do potencial $U(x,y) = 3ax^3y + ax^3y + K$, sendo $K$ uma constante arbitrária.`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 5,
		statement: {
			text: `Um brinquedo é composto de uma mola de constante elástica $k$, um carrinho de massa $m$ e uma pista que inclui um laço circular de raio $R$. Ao comprimir a mola de $\\Delta x$, a partir de seu ponto de relaxação, coloca-se o carrinho na sua extremidade livre, como mostrado na figura. Ao liberarmos a mola, o carrinho é empurrado e ganha velocidade, seguindo em direção ao loop da pista. Supondo que não há atrito entre o carrinho e a superfície da pista, e que $g$ é o módulo da aceleração da gravidade, determine a compressão mínima da mola para que o carrinho possa realizar uma volta completa no laço.`,
			image: '2023-1/mc-5.webp'
		},
		alternatives: [
			{
				text: `$\\Delta{x} = \\sqrt{5\\frac{mRg}{k}}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\Delta{x} = \\sqrt{\\frac{mRg}{k}}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\Delta{x} = \\sqrt{2\\frac{mRg}{k}}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\Delta{x} = \\sqrt{\\frac{5}{2} \\frac{mRg}{k}}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\Delta{x} = \\sqrt{\\frac{1}{2} \\frac{mRg}{k}}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 5,
		statement: {
			text: `Um brinquedo é composto de uma mola de constante elástica $k$, um carrinho de massa $m$ e uma pista que inclui um laço circular de raio $R$. Nota-se que a deformação mínima da mola para que o carrinho consiga dar uma volta completa no laço é $\\Delta x$, como mostrado na figura. Supondo que não há atrito entre o carrinho e a superfície da pista, e que $g$ é o módulo da aceleração da gravidade, determine a constante elástica $k$ da mola.`,
			image: '2023-1/mc-5.webp'
		},
		alternatives: [
			{
				text: `$k = 5\\frac{mRg}{\\Delta{x}^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$k = \\frac{mRg}{\\Delta{x}^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$k = 2\\frac{mRg}{\\Delta{x}^2}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$k = \\frac{5}{2} \\frac{mRg}{\\Delta{x}^2}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$k = \\frac{1}{2} \\frac{mRg}{\\Delta{x}^2}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 6,
		statement: {
			text: `Uma barra delgada homogênea e uniforme, de massa $M$ e comprimento $l$, é articulada em um pino $O$ que passa por uma de suas extremidades, podendo girar sem atrito num plano vertical. Liberada a partir do repouso na posição horizontal, a extremidade livre da barra sofre uma colisão inelástica com uma partícula de massa $m$, inicialmente em repouso sobre uma superfície horizontal lisa, como mostrado na figura abaixo. Essa colisão ocorre no ponto em que a barra está na sua posição vertical, com a barra permanecendo em repouso imediatamente após a colisão. Em vista disso, determine a velocidade linear da partícula após a colisão.`,
			image: '2023-1/mc-6.webp'
		},
		alternatives: [
			{
				text: `$v = \\frac{M}{m} \\sqrt{\\frac{gl}{3}}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$v = \\frac{M}{m} \\sqrt{\\frac{gl}{6}}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$v = \\frac{M}{m} \\sqrt{\\frac{gl}{9}}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$v = \\frac{M}{m} \\sqrt{\\frac{4gl}{3}}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$v = \\frac{M}{m} \\sqrt{\\frac{4gl}{6}}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 6,
		statement: {
			text: `Uma barra delgada homogênea e uniforme, de massa $M$ e comprimento $l$, é articulada em um pino $O$ que passa por uma de suas extremidades, podendo girar sem atrito num plano vertical. Liberada a partir do repouso na posição horizontal, a extremidade livre da barra sofre uma colisão inelástica com uma partícula de massa $m$, inicialmente em repouso sobre uma superfície horizontal lisa, como mostrado na figura abaixo. Essa colisão ocorre no ponto em que a barra está na sua posição vertical, com a barra permanecendo em repouso imediatamente após a colisão. Sabendo que a partícula adquire uma velocidade linear $v$ após a colisão, determine a razão $m/M$ entre as massas.`,
			image: '2023-1/mc-6.webp'
		},
		alternatives: [
			{
				text: `$\\frac{m}{M} = \\sqrt{\\frac{gl}{3v^2}}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{m}{M} = \\sqrt{\\frac{gl}{6v^2}}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{m}{M} = \\sqrt{\\frac{gl}{9v^2}}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{m}{M} = \\sqrt{\\frac{4gl}{3v^2}}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{m}{M} = \\sqrt{\\frac{4gl}{6v^2}}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 7,
		statement: {
			text: `Considere as assertativas abaixo sobre a dinâmica de uma partícula e assinale as verdadeiras.<br/><br/><ul><li>(I) Sempre que a força resultante for nula, não há forças atuando sobre a partícula.</li><li>(II) Durante um intervalo de tempo em que a força resultante sobre uma partícula é nula, ela está em repouso ou em movimento retilíneo uniforme.</li><li>(III) Em um movimento circular uniforme, a força resultante é nula, pois o módulo da velocidade linear é constante.</li><li>(IV) A força normal e a força peso formam um par de ação e reação.</li><li>(V) As forças de um par de ação e reação atuam sempre sobre partículas diferentes.</li></ul>`
		},
		alternatives: [
			{
				text: `II e V`,
				number: QuestionAlternative.A
			},
			{
				text: `II e III`,
				number: QuestionAlternative.B
			},
			{
				text: `I, II e IV`,
				number: QuestionAlternative.C
			},
			{
				text: `III e V`,
				number: QuestionAlternative.D
			},
			{
				text: `I, III e V`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 7,
		statement: {
			text: `Considere as assertativas abaixo sobre a dinâmica de uma partícula e assinale as verdadeiras.<br/><br/><ul><li>(I) Sempre que a força resultante for nula, não há forças atuando sobre a partícula.</li><li>(II) A força normal e a força peso formam um par de ação e reação.</li><li>(III) As duas primeiras leis de Newton são válidas apenas em referenciais inerciais.</li><li>(IV) As forças de um par de ação e reação atuam sempre sobre partículas diferentes.</li><li>(V) Em um movimento circular uniforme, a força resultante é nula, pois o módulo da velocidade linear é constante. </li></ul>`
		},
		alternatives: [
			{
				text: `III e IV`,
				number: QuestionAlternative.A
			},
			{
				text: `III e V`,
				number: QuestionAlternative.B
			},
			{
				text: `I, III e V`,
				number: QuestionAlternative.C
			},
			{
				text: `I e IV`,
				number: QuestionAlternative.D
			},
			{
				text: `II e IV`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 8,
		statement: {
			text: `Um conjunto de quatro massas acopladas por molas ideais está sobre um plano horizontal sem atrito, com as massas das extremidades ligadas a paredes rígidas e imóveis, tal como ilustrado na figura abaixo. Supondo apenas movimentos unidimensionais, e denotando por $x_i$ a posição da massa $m_i$ em relação à parede da esquerda, qual é a equação de movimento da massa $m_2$? Considere as massas como partículas puntiformes.`,
			image: '2023-1/mc-8.webp'
		},
		alternatives: [
			{
				text: `$\\ddot{x}_2 + \\frac{k_2}{m_2} (x_2 - x_1) + \\frac{k_3}{m_2} (x_2 - x_3) = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\ddot{x}_2 + \\frac{k_2}{m_2} (x_2 + x_1) + \\frac{k_3}{m_2} (x_2 + x_3) = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\ddot{x}_2 + \\frac{k_3}{m_2} (x_2 - x_1) + \\frac{k_2}{m_2} (x_2 - x_3) = 0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\ddot{x}_2 - \\frac{k_2}{m_2} (x_2 - x_1) - \\frac{k_3}{m_2} (x_2 - x_3) = 0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\ddot{x}_2 + \\frac{k_2 + k_3}{m_2} x_2 = 0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=WauWel65Vy8'
		},
		questionNumber: 8,
		statement: {
			text: `Um conjunto de quatro massas acopladas por molas ideais está sobre um plano horizontal sem atrito, com as massas das extremidades ligadas a paredes rígidas e imóveis, tal como ilustrado na figura abaixo. Supondo apenas movimentos unidimensionais, e denotando por $x_i$ a posição da massa $m_i$ em relação à parede da esquerda, qual é a equação de movimento da massa $m_3$? Considere as massas como partículas puntiformes.`,
			image: '2023-1/mc-8.webp'
		},
		alternatives: [
			{
				text: `$\\ddot{x}_3 + \\frac{k_3}{m_3} (x_3 - x_2) + \\frac{k_4}{m_3} (x_3 - x_4) = 0$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\ddot{x}_3 + \\frac{k_3}{m_3} (x_3 + x_2) + \\frac{k_4}{m_3} (x_3 + x_4) = 0$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\ddot{x}_3 + \\frac{k_4}{m_3} (x_3 - x_2) + \\frac{k_3}{m_3} (x_3 - x_4) = 0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\ddot{x}_3 - \\frac{k_3}{m_3} (x_3 - x_2) - \\frac{k_4}{m_3} (x_3 - x_4) = 0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\ddot{x}_3 + \\frac{k_3 + k_4}{m_3} x_3 = 0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 1,
		statement: {
			text: `Considere um capacitor de placas paralelas, carregado com uma carga $q$ e constituído por dois discos de raio $R$ separados por uma distância $d \\ll R$.<br/>Qual é a energia $U$ armazenada no campo elétrico entre as placas?`
		},
		alternatives: [
			{
				text: `$U = \\frac{q^2d}{2\\pi \\epsilon_0 R^2}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$U = \\frac{q^2d}{\\pi \\epsilon_0 R^2}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$U = \\frac{q^2}{\\pi \\epsilon_0 R}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$U = \\frac{q^2R}{4\\epsilon_0 d^2}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$U = \\frac{q^2R^2}{2\\pi \\epsilon_0 d^3}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 1,
		statement: {
			text: `Considere um capacitor de placas paralelas, carregado com uma carga $q$ e constituído por dois discos de raio $R$ separados por uma distância $d \\ll R$.<br/>Qual é a densidade de energia $u$ armazenada no campo elétrico entre as placas?`
		},
		alternatives: [
			{
				text: `$u = \\frac{q^2}{2 \\epsilon_0 \\pi^2 R^4}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$u = \\frac{q^2}{4 \\epsilon_0 \\pi^2 R^4}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$u = \\frac{q^2}{2 \\epsilon_0 \\pi^2 R^4}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$u = \\frac{q^2d}{2 \\epsilon_0 \\pi^2 R^5}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$u = \\frac{q^2d}{4 \\epsilon_0 R^5}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 2,
		statement: {
			text: `Um anel circular de plástico com raio $R$ possui uma carga $q$ uniformemente distribuída ao longo de seu comprimento. O anel gira com uma frequência angular $\\omega$ em torno do seu eixo central. Qual é a magnitude do campo magnético gerado no centro do anel?`
		},
		alternatives: [
			{
				text: `$B = \\frac{\\mu_0 \\omega q}{4\\pi R}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$B = \\frac{\\mu_0 \\omega q}{2\\pi R}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$B = \\frac{2\\pi \\mu_0 \\omega q}{R}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$B = \\frac{4\\pi \\mu_0 \\omega q}{R}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$B = \\frac{2\\mu_0 \\omega q}{\\pi R}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 2,
		statement: {
			text: `Um anel circular de plástico com diâmetro $D$ possui uma carga $q$ uniformemente distribuída ao longo de seu comprimento. O anel gira com uma frequência angular $\\omega$ em torno do seu eixo central. Qual é a magnitude do campo magnético gerado no centro do anel?`
		},
		alternatives: [
			{
				text: `$B = \\frac{\\mu_0 \\omega q}{2\\pi D}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$B = \\frac{\\mu_0 \\omega q}{\\pi D}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$B = \\frac{2\\pi \\mu_0 \\omega q}{D}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$B = \\frac{4\\pi \\mu_0 \\omega q}{D}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$B = \\frac{2\\mu_0 \\omega q}{\\pi D}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 3,
		statement: {
			text: `Um solenoide longo de $n$ voltas por unidade de comprimento conduz uma corrente $i = i_0 \\cos(\\omega t)$. No seu interior, introduzimos uma espira circular de área $A$, cujo eixo está na mesma direção do eixo do solenoide. Qual é a força eletromotriz $\\mathcal{E}$ induzida na espira?`
		},
		alternatives: [
			{
				text: `\${\\cal E} = A \\omega \\mu_0 i_0 n \\sin{(\\omega t)}$`,
				number: QuestionAlternative.A
			},
			{
				text: `\${\\cal E} = A \\omega \\mu_0 i_0 n \\cos{(\\omega t)}$`,
				number: QuestionAlternative.B
			},
			{
				text: `\${\\cal E} = -A \\omega \\mu_0 i_0 n \\sin^2{(\\omega t)}$`,
				number: QuestionAlternative.C
			},
			{
				text: `\${\\cal E} = -A \\omega \\mu_0 i_0 n^2 \\cos{(\\omega t)}$`,
				number: QuestionAlternative.D
			},
			{
				text: `\${\\cal E} = A \\omega \\mu_0 i_0 n \\cos^2{(\\omega t)}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 3,
		statement: {
			text: `Um solenóide longo de $n$ voltas por unidade de comprimento conduz uma corrente $i = i_0 \\sin(\\omega t)$. No seu interior, introduzimos uma espira circular de área $A$, cujo eixo está na mesma direção do eixo do solenoide. Qual é a força eletromotriz $\\mathcal{E}$ induzida na espira?`
		},
		alternatives: [
			{
				text: `\${\\cal E} = -A \\omega \\mu_0 i_0 n \\cos{(\\omega t)}$`,
				number: QuestionAlternative.A
			},
			{
				text: `\${\\cal E} = A \\omega \\mu_0 i_0 n \\sin{(\\omega t)}$`,
				number: QuestionAlternative.B
			},
			{
				text: `\${\\cal E} = A \\omega \\mu_0 i_0 n \\sin^2{(\\omega t)}$`,
				number: QuestionAlternative.C
			},
			{
				text: `\${\\cal E} = -A \\omega \\mu_0 i_0 n^2 \\cos{(\\omega t)}$`,
				number: QuestionAlternative.D
			},
			{
				text: `\${\\cal E} = -A \\omega \\mu_0 i_0 n \\cos^2{(\\omega t)}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 4,
		statement: {
			text: `O campo magnético em uma certa região do espaço é dado por<br/><br/>$$\\vec{B} = B_0 \\left[e^{-ax} \\cos(ky - \\omega t)\\hat{x} + e^{-ax} \\sin(ky - \\omega t)\\hat{y} + 3e^{-ay} \\cos(kx - \\omega t)\\hat{z}\\right].$$<br/>Qual deve ser a relação entre as constantes $a$ e $k$?`
		},
		alternatives: [
			{
				text: `$\\alpha = k$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\alpha = 2\\pi k$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\alpha = k \\ln 2$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\alpha = 2\\pi k \\ln 2$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\alpha = k/2\\pi$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 4,
		statement: {
			text: `O campo magnético em uma certa região do espaço é dado por<br/><br/>$$\\vec{B} = B_0 \\left[e^{-ax} \\cos(ky - \\omega t)\\hat{x} + 2e^{-ax} \\sin(ky - \\omega t)\\hat{y} + 3e^{-ay} \\cos(kx - \\omega t)\\hat{z}\\right].$$<br/>Qual deve ser a relação entre as constantes $a$ e $k$?`
		},
		alternatives: [
			{
				text: `$\\alpha = 2k$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\alpha = 2\\pi k$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\alpha = k \\ln 2$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\alpha = 2\\pi k \\ln 2$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\alpha = k/2\\pi$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 5,
		statement: {
			text: `O capacitor $C$ na figura é carregado posicionando a chave no ponto 1. No instante $t = 0$, a chave é reposicionada para 2. Qual das alternativas abaixo representa corretamente, como função do tempo $t > 0$, a corrente elétrica $I$ que atravessa o indutor $L$?`,
			image: '2023-1/em-5.webp'
		},
		alternatives: [
			{
				image: '2023-1/em-5a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2023-1/em-5a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2023-1/em-5a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2023-1/em-5a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2023-1/em-5a-e.webp',
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 5,
		statement: {
			text: `O capacitor $C$ na figura é carregado posicionando a chave no ponto 1. No instante $t = 0$, a chave é reposicionada para 2. Qual das alternativas abaixo representa corretamente a carga $Q$ no capacitor como função do tempo $t > 0$?`,
			image: '2023-1/em-5.webp'
		},
		alternatives: [
			{
				image: '2023-1/em-5b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2023-1/em-5b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2023-1/em-5b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2023-1/em-5b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2023-1/em-5b-e.webp',
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 6,
		statement: {
			text: `Uma lâmpada de resistência $R$ tem seus terminais conectados por um fio que forma um laço circular de diâmetro inicial $D_0$ em uma região onde há um campo magnético constante de magnitude $B$ (vide figura). No instante $t = 0$, as extremidades do laço são puxadas com velocidades de magnitudes iguais a $v$, diminuindo o diâmetro do laço e mantendo sua forma circular. Enquanto o laço é puxado, a diferença de potencial entre os terminais da lâmpada, em módulo, é:`,
			image: '2023-1/em-6.webp'
		},
		alternatives: [
			{
				text: `$Bv (D_0 - \\frac{2vt}{\\pi})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{Bv}{2} (D_0 + \\frac{vt}{\\pi})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{Bv}{2} D_0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$Bv D_0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{\\pi Bv}{2} D_0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 6,
		statement: {
			text: `Uma lâmpada de resistência $R$ tem seus terminais conectados por um fio que forma um laço circular de diâmetro inicial $D_0$ em uma região onde há um campo magnético constante de magnitude $B$ e normal ao plano do laço (vide figura). No instante $t = 0$, as extremidades do laço são puxadas com velocidades de magnitudes iguais a $v$, diminuindo o diâmetro do laço e mantendo sua forma circular. Enquanto o laço é puxado, o valor da magnitude da corrente que atravessa a lâmpada é:`,
			image: '2023-1/em-6.webp'
		},
		alternatives: [
			{
				text: `$\\frac{Bv}{R} (D_0 - \\frac{2vt}{\\pi})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{Bv}{2R} (D_0 + \\frac{vt}{\\pi})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{Bv}{2R} D_0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{Bv}{R} D_0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{\\pi Bv}{2R} D_0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 7,
		statement: {
			text: `O campo elétrico no interior de um cilindro em que se fez vácuo é $\\vec{E}(t) = E_0 e^{-t/\\tau} \\hat{e}_z$, sendo $\\hat{e}_z$ o vetor unitário na direção do eixo de simetria do cilindro, com $E_0 > 0$ e $\\tau > 0$ constantes. Em coordenadas cilíndricas, o vetor de Poynting no interior do cilindro é`
		},
		alternatives: [
			{
				text: `$\\frac{\\epsilon_0 \\rho}{2\\tau} E_0^2 e^{-2t / \\tau} \\hat{e}_{\\rho}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{\\epsilon_0 \\rho}{2\\tau} E_0^2 e^{-2t / \\tau} \\hat{e}_{\\varphi}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{\\epsilon_0}{2} E_0^2 e^{-2t / \\tau} \\hat{e}_{z}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{\\epsilon_0}{2} E_0^2 e^{-2t / \\tau} \\hat{e}_{\\varphi}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 7,
		statement: {
			text: `O campo elétrico no interior de um cilindro em que se fez vácuo é $\\vec{E}(t) = E_0 \\cos(\\omega t) \\hat{e}_z$, sendo $\\hat{e}_z$ o vetor unitário na direção do eixo de simetria do cilindro, com $E_0 > 0$ e $\\omega > 0$ constantes. Em coordenadas cilíndricas, o vetor de Poynting no interior do cilindro é`
		},
		alternatives: [
			{
				text: `$\\frac{1}{2} \\epsilon_0 \\omega \\rho E_0^2 \\sin (\\omega t) \\cos (\\omega t) \\hat{e}_{\\rho}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{1}{2} \\epsilon_0 \\omega \\rho E_0^2 \\sin^2 (\\omega t) \\hat{e}_{\\varphi}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{1}{2} \\epsilon_0 E_0^2 \\cos^2 (\\omega t) \\hat{e}_{\\varphi}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{1}{2} \\epsilon_0 E_0^2 \\sin^2 (\\omega t) \\hat{e}_{z}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 8,
		statement: {
			text: `Em uma região do espaço, há um campo elétrico $\\vec{E} = E_0 \\hat{x}$ e um campo magnético $\\vec{B} = B_0 \\hat{z}$ (com $E_0 > 0$ e $B_0 > 0$). Nessa mesma região, há ainda uma partícula massiva de carga elétrica positiva. Além disso, sabe-se que o vetor velocidade dessa partícula está contido no plano $xy$. Dentre as trajetórias ilustradas abaixo, indique aquelas que representam possíveis trajetórias da partícula.`,
			image: '2023-1/em-8a.webp'
		},
		alternatives: [
			{
				text: `1 e 2`,
				number: QuestionAlternative.A
			},
			{
				text: `1 e 4`,
				number: QuestionAlternative.B
			},
			{
				text: `2 e 3`,
				number: QuestionAlternative.C
			},
			{
				text: `3 e 4`,
				number: QuestionAlternative.D
			},
			{
				text: `5 e 6`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Kx3XvtZF4Uk'
		},
		questionNumber: 8,
		statement: {
			text: `Em uma região do espaço, há um campo elétrico $\\vec{E} = E_0 \\hat{y}$ e um campo magnético $\\vec{B} = B_0 \\hat{z}$ (com $E_0 > 0$ e $B_0 > 0$). Nessa mesma região, há ainda uma partícula massiva de carga elétrica positiva. Além disso, sabe-se que o vetor velocidade dessa partícula está contido no plano $xy$. Dentre as trajetórias ilustradas abaixo, indique aquelas que representam possíveis trajetórias da partícula.`,
			image: '2023-1/em-8b.webp'
		},
		alternatives: [
			{
				text: `3 e 4`,
				number: QuestionAlternative.A
			},
			{
				text: `1 e 2`,
				number: QuestionAlternative.B
			},
			{
				text: `5 e 6`,
				number: QuestionAlternative.C
			},
			{
				text: `1 e 4`,
				number: QuestionAlternative.D
			},
			{
				text: `2 e 3`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 1,
		statement: {
			text: `No referencial $S$, a partícula $A$ está em repouso, enquanto a partícula $B$ se move com velocidade $(3c/5,0,0)$. No referencial $S'$, que se move com velocidade $(u,0,0)$ em relação ao referencial $S$, as partículas têm velocidades de mesma magnitude e direção, mas sentidos opostos. A velocidade relativa entre os referenciais é dada por:`
		},
		alternatives: [
			{
				text: `$u = c / 3$`,
				number: QuestionAlternative.A
			},
			{
				text: `$u = - c / 3$`,
				number: QuestionAlternative.B
			},
			{
				text: `$u = c$`,
				number: QuestionAlternative.C
			},
			{
				text: `$u = 3c / 10$`,
				number: QuestionAlternative.D
			},
			{
				text: `$u = - 3c / 10$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 1,
		statement: {
			text: `No referencial $S$, a partícula $A$ se move com velocidade $(4c/5,0,0)$, enquanto a partícula $B$ está em repouso. No referencial $S'$, que se move com velocidade $(u,0,0)$ em relação ao referencial $S$, as partículas têm velocidades de mesma magnitude e direção, mas sentidos opostos. A velocidade relativa entre os referenciais é dada por:`
		},
		alternatives: [
			{
				text: `$u = c / 2$`,
				number: QuestionAlternative.A
			},
			{
				text: `$u = - c / 2$`,
				number: QuestionAlternative.B
			},
			{
				text: `$u = c$`,
				number: QuestionAlternative.C
			},
			{
				text: `$u = 4c / 10$`,
				number: QuestionAlternative.D
			},
			{
				text: `$u = - 4c / 10$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 2,
		statement: {
			text: `Um fóton de energia $50 \\space \\text{keV}$ colide com um elétron estacionário. Após a colisão, o fóton é espalhado no sentido oposto àquele do seu movimento antes da colisão. Adotando $h/mc = 2,4 \\space \\text{pm}$, sendo $m$ a massa do elétron, o comprimento de onda do fóton espalhado é:`
		},
		alternatives: [
			{
				text: `$30 \\text{pm}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$27 \\text{pm}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$24 \\text{pm}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$21 \\text{pm}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$18 \\text{pm}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 2,
		statement: {
			text: `Um fóton de energia $60 \\space \\text{keV}$ colide com um elétron estacionário. Após a colisão, o fóton é espalhado no sentido oposto àquele do seu movimento antes da colisão. Adotando $h/mc = 2,4 \\space \\text{pm}$, sendo $m$ a massa do elétron, o comprimento de onda do fóton espalhado é:`
		},
		alternatives: [
			{
				text: `$25 \\text{pm}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$28 \\text{pm}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$22 \\text{pm}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$31 \\text{pm}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$19 \\text{pm}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 3,
		statement: {
			text: `Uma estrela tem raio $R = 2R_S$, onde $R_S$ é o raio do Sol. Se a potência emitida pela estrela é igual à potência emitida pelo Sol, qual a temperatura da estrela? Expresse a resposta em função da temperatura do Sol, $T_S$.`
		},
		alternatives: [
			{
				text: `$T = \\frac{T_S}{2}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$T = \\sqrt{2}T_S$`,
				number: QuestionAlternative.B
			},
			{
				text: `$T = \\frac{T_S}{4}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$T = 4T_S$`,
				number: QuestionAlternative.D
			},
			{
				text: `$T = T_S$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 3,
		statement: {
			text: `Uma estrela tem temperatura $T = 2T_S$, onde $T_S$ é a temperatura do Sol. Se a potência emitida pela estrela é igual à potência emitida pelo Sol, qual o raio da estrela? Expresse a resposta em função do raio do Sol, $R_S$.`
		},
		alternatives: [
			{
				text: `$R = \\frac{R_S}{4}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$R = 4R_S$`,
				number: QuestionAlternative.B
			},
			{
				text: `$R = \\frac{R_S}{\\sqrt{2}}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$R = \\sqrt{2}R_S$`,
				number: QuestionAlternative.D
			},
			{
				text: `$R = R_S$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 4,
		statement: {
			text: `O tempo de vida de um estado excitado de um átomo é $3,29 \\times 10^{-3} \\space \\text{s}$. Qual a incerteza mínima na energia desse estado?`
		},
		alternatives: [
			{
				text: `$1,00 \\times 10^{-13} \\text{eV}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$4,00 \\times 10^{-14} \\text{eV}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$6,28 \\times 10^{-12} \\text{eV}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$3,14 \\times 10^{-15} \\text{eV}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$5,00 \\times 10^{-11} \\text{eV}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 4,
		statement: {
			text: `O tempo de vida de um estado excitado de um átomo é $13,2 \\times 10^{-3} \\space \\text{s}$. Qual a incerteza mínima na energia desse estado?`
		},
		alternatives: [
			{
				text: `$0,25 \\times 10^{-13} \\text{eV}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$2,00 \\times 10^{-14} \\text{eV}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$1,57 \\times 10^{-12} \\text{eV}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$0,79 \\times 10^{-15} \\text{eV}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0,13 \\times 10^{-11} \\text{eV}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 5,
		statement: {
			text: `Uma nave se move com velocidade $3c/5$ em relação a um eixo $x$ fixo à Terra. Quando a nave passa por $x = 0$, a leitura de um cronômetro na nave marca zero. Qual a leitura do cronômetro quando a nave estiver em $x = 18000 \\space \\text{km}$?`
		},
		alternatives: [
			{
				text: `$80 \\text{ms}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$45 \\text{ms}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$75 \\text{ms}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$100 \\text{ms}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$60 \\text{ms}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 5,
		statement: {
			text: `Uma nave se move com velocidade $4c/5$ em relação a um eixo $x$ fixo à Terra. Quando a nave passa por $x = 0$, a leitura de um cronômetro na nave marca zero. Qual a leitura do cronômetro quando a nave estiver em $x = 18000 \\space \\text{km}$?`
		},
		alternatives: [
			{
				text: `$45 \\text{ms}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$80 \\text{ms}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$75 \\text{ms}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$100 \\text{ms}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$60 \\text{ms}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 6,
		statement: {
			text: `Um corpo de massa $M$ encontra-se em repouso no referencial do laboratório quando sofre uma explosão. Após explodir, ele se divide em duas partes idênticas, cada uma com massa de $3,0 \\space \\text{kg}$, que se movem com velocidade de módulo $v = 4c/5$. Qual o valor de $M$?`
		},
		alternatives: [
			{
				text: `$10 \\text{kg}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$20 \\text{kg}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$16 \\text{kg}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$13 \\text{kg}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$3,6 \\text{kg}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 6,
		statement: {
			text: `Um corpo de massa $M$ encontra-se em repouso no referencial do laboratório quando sofre uma explosão. Após explodir, ele se divide em duas partes idênticas, cada uma com massa de $8,0 \\space \\text{kg}$, que se movem com velocidade de módulo $v = 3c/5$. Qual o valor de $M$?`
		},
		alternatives: [
			{
				text: `$20 \\text{kg}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$10 \\text{kg}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$16 \\text{kg}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$13 \\text{kg}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$3,6 \\text{kg}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 7,
		statement: {
			text: `Quando um poço de potencial infinito contém apenas 1 elétron, suas autoenergias são $E_n$, com $n=1,2,3,...$ e $E_1 < E_2 < E_3 < ...$, enquanto suas respectivas autofunções são $\\psi_n(x)$. Vamos analisar um sistema de 2 elétrons não interagentes nesse mesmo poço. Denotando como $x_1$ e $x_2$ as coordenadas espaciais do sistema de 2 elétrons, considere as afirmações abaixo.<br/><br/><ul><li>I. A parte espacial da função de onda do sistema no estado fundamental é $\\psi_1(x_1)\\psi_1(x_2)$.</li><li>II. A parte espacial da função de onda do sistema no 1º estado excitado <em>não</em> pode ser $\\psi_1(x_1)\\psi_2(x_2)$.</li><li>III. A parte espacial da função de onda do sistema no 1º estado excitado pode ser </li></ul><br/><br/>$$\\frac{1}{\\sqrt{2}} \\left[\\psi_1(x_1)\\psi_2(x_2) + \\psi_2(x_1)\\psi_1(x_2)\\right].$$<br/>Apenas estão corretas as afirmações`
		},
		alternatives: [
			{
				text: `I, II e III`,
				number: QuestionAlternative.A
			},
			{
				text: `I e II`,
				number: QuestionAlternative.B
			},
			{
				text: `I e III`,
				number: QuestionAlternative.C
			},
			{
				text: `II`,
				number: QuestionAlternative.D
			},
			{
				text: `III`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 7,
		statement: {
			text: `Quando um poço de potencial infinito contém apenas 1 elétron, suas autoenergias são $E_n$, com $n=1,2,3,...$ e $E_1 < E_2 < E_3 < ...$, enquanto suas respectivas autofunções são $\\psi_n(x)$. Vamos analisar um sistema de 2 elétrons não interagentes neste mesmo poço. Denotando como $x_1$ e $x_2$ as coordenadas espaciais do sistema de 2 elétrons, considere as afirmações abaixo.<br/><br/><ul><li>I. A parte espacial da função de onda do sistema no estado fundamental é $\\psi_1(x_1)\\psi_1(x_2)$.</li><li>II. A parte espacial da função de onda do sistema no 1º estado excitado pode ser $\\psi_1(x_1)\\psi_2(x_2)$.</li><li>III. A parte espacial da função de onda do sistema no 1º estado excitado pode ser</li></ul><br/><br/>$$\\frac{1}{\\sqrt{2}} \\left[\\psi_1(x_1)\\psi_2(x_2) + \\psi_2(x_1)\\psi_1(x_2)\\right].$$<br/>Apenas estão corretas as afirmações`
		},
		alternatives: [
			{
				text: `I e III`,
				number: QuestionAlternative.A
			},
			{
				text: `I e II`,
				number: QuestionAlternative.B
			},
			{
				text: `I, II e III`,
				number: QuestionAlternative.C
			},
			{
				text: `II`,
				number: QuestionAlternative.D
			},
			{
				text: `III`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 8,
		statement: {
			text: `Sobre experimentos do tipo Stern-Gerlach, feitos com campos magnéticos tipicamente acessíveis em laboratório, considere as afirmações abaixo.<br/><br/><ul><li>I. Se usarmos um feixe de átomos de hidrogênio no estado fundamental, o feixe se divide em 2 feixes após atravessar a região com campo magnético.</li><li>II. Se usarmos um feixe de átomos de hélio no estado fundamental, o feixe se divide em 4 feixes após atravessar a região com campo magnético.</li><li>III. Se usarmos um feixe de átomos cujo valor esperado do quadrado do momento angular total $J$ dos elétrons é $\\langle J^2 \\rangle = 15\\hbar^2/4$, o feixe se divide em 4 feixes após atravessar a região com campo magnético.</li></ul><br/><br/>Apenas estão corretas as afirmações:`
		},
		alternatives: [
			{
				text: `I e III`,
				number: QuestionAlternative.A
			},
			{
				text: `I e II`,
				number: QuestionAlternative.B
			},
			{
				text: `II`,
				number: QuestionAlternative.C
			},
			{
				text: `I`,
				number: QuestionAlternative.D
			},
			{
				text: `I, II e III`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=2dSqQDJqt-E'
		},
		questionNumber: 8,
		statement: {
			text: `Sobre experimentos do tipo Stern-Gerlach, feitos com campos magnéticos tipicamente acessíveis em laboratório, considere as afirmações abaixo.<br/><br/><ul><li>I. Se usarmos um feixe de átomos de hidrogênio no estado fundamental, o feixe se divide em 2 feixes após atravessar a região com campo magnético.</li><li>II. Se usarmos um feixe de átomos de hélio no estado fundamental, o feixe se divide em 4 feixes após atravessar a região com campo magnético.</li><li>III. Se usarmos um feixe de átomos cujo valor esperado do quadrado do momento angular total $J$ é $\\langle J^2 \\rangle = 15\\hbar^2/4$, o feixe se divide em 2 feixes após atravessar a região com campo magnético.</li></ul><br/><br/>Apenas estão corretas as afirmações:`
		},
		alternatives: [
			{
				text: `I`,
				number: QuestionAlternative.A
			},
			{
				text: `I e II`,
				number: QuestionAlternative.B
			},
			{
				text: `II`,
				number: QuestionAlternative.C
			},
			{
				text: `I e III`,
				number: QuestionAlternative.D
			},
			{
				text: `I, II e III`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 1,
		statement: {
			text: `Suponha que átomos de momento angular orbital total nulo e spin total $1/2$ sejam preparados em um mesmo estado de spin, dado por $\\ket{\\psi} = \\cos\\theta\\ket{+} + \\sin\\theta\\ket{-}$, onde $\\ket{+}$ e $\\ket{-}$ são autoestados do observável $\\hat{S}_z$, associado à projeção do spin na direção $z$, com autovalores $+\\hbar/2$ e $-\\hbar/2$, respectivamente. A probabilidade de obtermos $\\hbar/2$ em uma medição da componente do spin de um desses átomos na direção $y$ logo após termos medido a componente na direção $z$ é`
		},
		alternatives: [
			{
				text: `$1/2$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\cos^2 \\theta$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\sin^2 \\theta$`,
				number: QuestionAlternative.C
			},
			{
				text: `$1/2 + \\sin \\theta \\cos \\theta$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 1,
		statement: {
			text: `Suponha que átomos de momento angular orbital total nulo e spin total $1/2$ sejam preparados em um mesmo estado de spin, dado por $\\ket{\\psi} = \\cos\\theta\\ket{+} + \\sin\\theta\\ket{-}$, onde $\\ket{+}$ e $\\ket{-}$ são autoestados do observável $S_z$, associado à projeção do spin na direção $z$, com autovalores $+\\hbar/2$ e $-\\hbar/2$, respectivamente. A probabilidade de obtermos $\\hbar/2$ em uma medição da componente do spin de um desses átomos na direção $x$ logo após termos medido a componente na direção $z$ é`
		},
		alternatives: [
			{
				text: `$1/2$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\cos^2 \\theta$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\sin^2 \\theta$`,
				number: QuestionAlternative.C
			},
			{
				text: `$1/2 + \\sin \\theta \\cos \\theta$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 2,
		statement: {
			text: `Considere uma partícula num poço de potencial quadrado infinito unidimensional, denotando-se por $E_n$ os seus possíveis autovalores de energia e por $\\psi_n$ as correspondentes autofunções. Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<br/><br/><ul><li>I. Se o sistema é descrito pela função de onda $\\psi_1$ no instante $t = 0$, então a <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição não varia no tempo.</li><li>II. Se o sistema é descrito pela função de onda $\\frac{1}{\\sqrt{2}}(\\psi_1 + \\psi_2)$ no instante $t = 0$, então a <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição varia no tempo.</li><li>III. A <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição varia mais rapidamente no tempo se a função de onda em $t = 0$ for $\\frac{1}{\\sqrt{2}}(\\psi_2 + \\psi_3)$ do que se ela for $\\frac{1}{\\sqrt{2}}(\\psi_1 - \\psi_4)$. </li></ul>`
		},
		alternatives: [
			{
				text: `Apenas as afirmações I e II estão corretas`,
				number: QuestionAlternative.A
			},
			{
				text: `Apenas a afirmação I está correta`,
				number: QuestionAlternative.B
			},
			{
				text: `Apenas a afirmação II está correta`,
				number: QuestionAlternative.C
			},
			{
				text: `Apenas a afirmação III está correta`,
				number: QuestionAlternative.D
			},
			{
				text: `Apenas as afirmações II e III estão corretas`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 2,
		statement: {
			text: `Considere uma partícula num poço de potencial quadrado infinito unidimensional, denotando-se por $E_n$ os seus possíveis autovalores de energia e por $\\psi_n$ as correspondentes autofunções. Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<br/><br/><ul><li>I. Se o sistema é descrito pela função de onda $\\psi_1$ no instante $t = 0$, então a <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição varia no tempo.</li><li>II. Se o sistema é descrito pela função de onda $\\frac{1}{\\sqrt{2}}(\\psi_1 + \\psi_2)$ no instante $t = 0$, então a <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição varia no tempo.</li><li>III. A <em>densidade de probabilidade</em> de encontrar a partícula em uma determinada posição varia mais rapidamente no tempo se a função de onda em $t = 0$ for $\\frac{1}{\\sqrt{2}}(\\psi_1 - \\psi_4)$ do que se ela for $\\frac{1}{\\sqrt{2}}(\\psi_2 + \\psi_3)$.</li></ul>`
		},
		alternatives: [
			{
				text: `Apenas as afirmações II e III estão corretas`,
				number: QuestionAlternative.A
			},
			{
				text: `Apenas a afirmação I está correta`,
				number: QuestionAlternative.B
			},
			{
				text: `Apenas a afirmação II está correta`,
				number: QuestionAlternative.C
			},
			{
				text: `Apenas a afirmação III está correta`,
				number: QuestionAlternative.D
			},
			{
				text: `Apenas as afirmações I e II estão corretas`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 3,
		statement: {
			text: `Um sistema com momento angular $\\hat{J}$ é descrito pelo Hamiltoniano<br/><br/>$$\\hat{H} = \\alpha \\left(\\hat{J}_x^2 + \\hat{J}_y^2\\right) + \\hat{J}_z^2 \\text{,}$$<br/>onde $\\hat{J}_x$, $\\hat{J}_y$ e $\\hat{J}_z$ são as componentes cartesianas do momento angular e $\\alpha$ e $\\beta$ são constantes positivas, com $\\beta > \\alpha$. Na notação usual, o conjunto dos autoestados comuns a $\\hat{J}^2$ e $\\hat{J}_z$ é $\\{\\ket{j,m}\\}$, com $j(j + 1)\\hbar^2$ e $m\\hbar$ como autovalores, respectivamente. Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<br/><br/><ul><li>I. Os possíveis autovalores de energia do sistema são $[\\alpha j(j + 1) + (\\beta - \\alpha) m^2] \\hbar^2$.</li><li>II. O valor médio de $\\hat{J}_x$ no autoestado com maior energia é $0$.</li><li>III. $\\hat{J}_x$ e $\\hat{J}_z$ são observáveis compatíveis. </li></ul>`
		},
		alternatives: [
			{
				text: `Apenas as afirmações I e II estão corretas`,
				number: QuestionAlternative.A
			},
			{
				text: `Apenas a afirmação I está correta`,
				number: QuestionAlternative.B
			},
			{
				text: `Apenas a afirmação II está correta`,
				number: QuestionAlternative.C
			},
			{
				text: `Apenas a afirmação III está correta`,
				number: QuestionAlternative.D
			},
			{
				text: `Apenas as afirmações II e III estão corretas`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 3,
		statement: {
			text: `Um sistema com momento angular $\\hat{J}$ é descrito pelo Hamiltoniano<br/><br/>$$\\hat{H} = \\alpha \\left(\\hat{J}_x^2 + \\hat{J}_y^2\\right) + \\hat{J}_z^2 \\text{,}$$<br/>onde $\\hat{J}_x$, $\\hat{J}_y$ e $\\hat{J}_z$ são as componentes cartesianas do momento angular e $\\alpha$ e $\\beta$ são constantes positivas, com $\\beta > \\alpha$. Na notação usual, o conjunto dos autoestados comuns a $\\hat{J}^2$ e $\\hat{J}_z$ é $\\{\\ket{j,m}\\}$, com $j(j + 1)\\hbar^2$ e $m\\hbar$ como autovalores, respectivamente. Analise as três afirmações abaixo sobre esse sistema e escolha a alternativa correta.<br/><br/><ul><li>I. Os possíveis autovalores de energia do sistema são $[\\alpha j(j + 1) + (\\beta - \\alpha) m^2] \\hbar^2$.</li><li>II. O valor médio de $\\hat{J}_x$ em qualquer um dos autoestados $\\ket{j,m}$ é $0$.</li><li>III. $J^2$ e $\\hat{J}_z$ são observáveis compatíveis. </li></ul>`
		},
		alternatives: [
			{
				text: `Todas as afirmações estão corretas`,
				number: QuestionAlternative.A
			},
			{
				text: `Apenas a afirmação I está correta`,
				number: QuestionAlternative.B
			},
			{
				text: `Apenas a afirmação II está correta`,
				number: QuestionAlternative.C
			},
			{
				text: `Apenas a afirmação III está correta`,
				number: QuestionAlternative.D
			},
			{
				text: `Apenas as afirmações I e III estão corretas`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 4,
		statement: {
			text: `Considere um sistema físico cujo espaço de estados, tridimensional, tem como uma base ortonormal os kets $\\ket{u_1}$, $\\ket{u_2}$, $\\ket{u_3}$. Nessa base, o operador Hamiltoniano $\\hat{H}$ do sistema e dois observáveis $\\hat{A}$ e $\\hat{B}$ têm as representações matriciais<br/><br/>$$\\hat{H} = \\hbar\\omega_0 \\left(\\begin{matrix}1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2\\end{matrix}\\right) \\text{, } \\space \\hat{A} = a \\left(\\begin{matrix}1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0\\end{matrix}\\right) \\text{, } \\space \\hat{B} = b \\left(\\begin{matrix}0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1\\end{matrix}\\right) \\text{, }$$<br/>sendo $\\omega_0$, $a$ é $b$ constantes reais. Suponha que, no instante $t = 0$, o sistema fisico está no estado $\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}}\\ket{u_1} + \\frac{1}{2}\\ket{u_2} + \\frac{1}{2}\\ket{u_3}$. Assinale a alternativa correta.`
		},
		alternatives: [
			{
				text: `Os possíveis resultados de uma medição da energia no instante $t = 0$ são $\\hbar \\omega_0$ e $2 \\hbar \\omega_0$, ambos com probabilidade $1/2$.`,
				number: QuestionAlternative.A
			},
			{
				text: `Os possíveis resultados de uma medição da quantidade física associada ao observável $\\hat{A}$ no instante $t = 0$ são $a$ e $-a$, ambos com probabilidade $1/2$.`,
				number: QuestionAlternative.B
			},
			{
				text: `Os possíveis resultados de uma medição da quantidade física associada ao observável $\\hat{B}$ no instante $t = 0$ são $b$, com probabilidade $1/4$, e $-b$, com probabilidade $3/4$.`,
				number: QuestionAlternative.C
			},
			{
				text: `Se nenhuma medição for feita, o estado do sistema em um tempo $t \\gt 0$ será $\\ket{\\psi (t)} = \\frac{1}{\\sqrt{2}} e^{-i \\omega_0 t} \\ket{u_1} + \\frac{1}{2} e^{-i 2\\omega_0 t} \\ket{u_2} + \\frac{1}{2} e^{-i \\omega_0 t} \\ket{u_3}$.`,
				number: QuestionAlternative.D
			},
			{
				text: `Se nenhuma medição for feita, o valor médio da energia do sistema em um tempo $t \\gt 0$ pode ser diferente do valor médio em $t = 0$.`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 4,
		statement: {
			text: `Considere um sistema fisico cujo espaco de estados, tridimensional, tem como uma base ortonormal os kets $\\ket{u_1}$, $\\ket{u_2}$, $\\ket{u_3}$. Nessa base, o operador Hamiltoniano $\\hat{H}$ do sistema e dois observaveis $\\hat{A}$ e $\\hat{B}$ tém as representacdes matriciais<br/><br/>$$\\hat{H} = \\hbar\\omega_0 \\left(\\begin{matrix}1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 1\\end{matrix}\\right) \\text{, } \\space \\hat{A} = a \\left(\\begin{matrix}0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1\\end{matrix}\\right) \\text{, } \\space \\hat{B} = b \\left(\\begin{matrix}1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0\\end{matrix}\\right) \\text{, }$$<br/>sendo $\\omega_0$, $a$ e $b$ constantes reais. Supcnha que, no instante $t = 0$, o sistema estd no estado $\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}}\\ket{u_1} + \\frac{1}{2}\\ket{u_2} + \\frac{1}{2}\\ket{u_3}$. Assinale a alternativa correta.`
		},
		alternatives: [
			{
				text: `Os possíveis resultados de uma medição da energia no instante $t = 0$ são $\\hbar \\omega_0$, com probabilidade $1/4$, e $2 \\hbar \\omega_0$, com probabilidade $3/4$.`,
				number: QuestionAlternative.A
			},
			{
				text: `Os possíveis resultados de uma medição da quantidade física associada ao observável $\\hat{A}$ no instante $t = 0$ são $a$, com probabilidade $1/4$, e $-a$, com probabilidade $3/4$.`,
				number: QuestionAlternative.B
			},
			{
				text: `Os possíveis resultados de uma medição da quantidade física associada ao observável $\\hat{B}$ no instante $t = 0$ são $b$, com probabilidade $1/2$, e $-b$, com probabilidade $1/2$.`,
				number: QuestionAlternative.C
			},
			{
				text: `Se nenhuma medição for feita, o estado do sistema em um tempo $t \\gt 0$ será $\\ket{\\psi (t)} = \\frac{1}{\\sqrt{2}} e^{-i \\omega_0 t} \\ket{u_1} + \\frac{1}{2} e^{-i 2\\omega_0 t} \\ket{u_2} + \\frac{1}{2} e^{-2 i \\omega_0 t} \\ket{u_3}$.`,
				number: QuestionAlternative.D
			},
			{
				text: `Se nenhuma medição for feita, o valor médio da energia do sistema em um tempo $t \\gt 0$ pode ser diferente do valor médio em $t = 0$.`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 5,
		statement: {
			text: `A função de onda de uma partícula movendo-se em uma dimensão é mostrada no gráfico abaixo, sendo $\\psi = 0$ para $x \\leq 0$ e $x \\geq 5$, com $x$ uma coordenada de posição medida em unidades arbitrárias e a função de onda dada em uma escala linear. Qual é a probabilidade de que a partícula seja encontrada no intervalo $2 \\leq x \\leq 4$?`,
			image: '2023-1/mq-5.webp'
		},
		alternatives: [
			{
				text: `$13/16$`,
				number: QuestionAlternative.A
			},
			{
				text: `$17/64$`,
				number: QuestionAlternative.B
			},
			{
				text: `$25/64$`,
				number: QuestionAlternative.C
			},
			{
				text: `$3/8$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\sqrt{5/8}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 5,
		statement: {
			text: `A função de onda de uma partícula movendo-se em uma dimensão é mostrada no gráfico abaixo, sendo $\\psi = 0$ para $x \\leq 0$ e $x \\geq 5$, com $x$ uma coordenada de posição medida em unidades arbitrárias e a função de onda dada em uma escala linear. Qual é a probabilidade de que a partícula seja encontrada no intervalo $1 \\leq x \\leq 3$?`,
			image: '2023-1/mq-5.webp'
		},
		alternatives: [
			{
				text: `$5/16$`,
				number: QuestionAlternative.A
			},
			{
				text: `$13/64$`,
				number: QuestionAlternative.B
			},
			{
				text: `$9/64$`,
				number: QuestionAlternative.C
			},
			{
				text: `$5/8$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\sqrt{3/8}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 6,
		statement: {
			text: `A parte angular da função de onda de uma determinada partícula movendo-se em um potencial central é dada por<br/><br/>$$\\psi (\\theta, \\varphi) = \\frac{1}{\\sqrt{15}}[3Y_{42}(\\theta, \\varphi) - Y_{62}(\\theta, \\varphi) + Y_{31}(\\theta, \\varphi) - 2Y_{10}(\\theta, \\varphi)] \\text{},$$<br/>em que $Y_{lm}(\\theta,\\varphi)$ são os harmônicos esféricos, $\\theta$ e $\\varphi$ são os ângulos polar e azimutal, respectivamente, $l$ é o número quântico correspondente ao módulo do momento angular e $m$ o correspondente à projeção do momento angular ao longo do eixo $z$. A probabilidade de encontrarmos essa partícula em um estado com $m = 2$ é`
		},
		alternatives: [
			{
				text: `$2/3$`,
				number: QuestionAlternative.A
			},
			{
				text: `$3/5$`,
				number: QuestionAlternative.B
			},
			{
				text: `$7/15$`,
				number: QuestionAlternative.C
			},
			{
				text: `$1/3$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 6,
		statement: {
			text: `A parte angular da função de onda de uma determinada partícula movendo-se em um potencial central é dada por<br/><br/>$$\\psi (\\theta, \\varphi) = \\frac{1}{\\sqrt{25}}[4Y_{42}(\\theta, \\varphi) - 2Y_{62}(\\theta, \\varphi) + Y_{31}(\\theta, \\varphi) - 2Y_{10}(\\theta, \\varphi)] \\text{},$$<br/>em que $Y_{lm}(\\theta,\\varphi)$ são os harmônicos esféricos, $\\theta$ e $\\varphi$ são os ângulos polar e azimutal, respectivamente, $l$ é o número quântico correspondente ao módulo do momento angular e $m$ o correspondente à projeção do momento angular ao longo do eixo $z$. A probabilidade de encontrarmos essa partícula em um estado com $m = 2$ é`
		},
		alternatives: [
			{
				text: `$4/5$`,
				number: QuestionAlternative.A
			},
			{
				text: `$16/25$`,
				number: QuestionAlternative.B
			},
			{
				text: `$12/25$`,
				number: QuestionAlternative.C
			},
			{
				text: `$1/5$`,
				number: QuestionAlternative.D
			},
			{
				text: `$0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 7,
		statement: {
			text: `O positrônio é um átomo exótico, que pode ser formado em condições especiais e tem curta duração, sendo constituído por um elétron e a sua antipartícula, o pósitron. Se definirmos a energia do estado fundamental do átomo de hidrogênio como $-E_0$, a energia do primeiro estado excitado do positrônio, $n = 2$, é`
		},
		alternatives: [
			{
				text: `$-E_0/8$`,
				number: QuestionAlternative.A
			},
			{
				text: `$-E_0$`,
				number: QuestionAlternative.B
			},
			{
				text: `$-E_0/2$`,
				number: QuestionAlternative.C
			},
			{
				text: `$-4E_0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$-8E_0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 7,
		statement: {
			text: `O positrônio é um átomo exótico, que pode ser formado em condições especiais e tem curta duração, sendo constituído por um elétron e a sua antipartícula, o pósitron. Se definirmos a energia do estado fundamental do átomo de hidrogênio como $-E_0$, a energia do segundo estado excitado do positrônio, $n = 3$, é`
		},
		alternatives: [
			{
				text: `$-E_0/18$`,
				number: QuestionAlternative.A
			},
			{
				text: `$-E_0/3$`,
				number: QuestionAlternative.B
			},
			{
				text: `$-E_0$`,
				number: QuestionAlternative.C
			},
			{
				text: `$-9E_0$`,
				number: QuestionAlternative.D
			},
			{
				text: `$-18E_0$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 8,
		statement: {
			text: `O hamiltoniano de um oscilador harmônico simples é dado por<br/><br/>$$\\hat{H} = \\left(a^{\\dagger}a + \\frac{1}{2}\\right) \\hbar\\omega \\text{,}$$<br/>em que $\\omega$ é a frequência angular do oscilador. O operador $a$ é dado por<br/><br/>$$a = \\sqrt{\\frac{m\\omega}{2\\hbar}} \\hat{x} - i\\sqrt{\\frac{1}{2m\\omega\\hbar}} \\hat{p}\\text{,}$$<br/>com $a^\\dagger$ o seu conjugado hermitiano, sendo $\\hat{x}$ o operador posição e $\\hat{p}$ o operador momento. A ação do produto $a^\\dagger a$ sobre um autoestado de energia $\\ket{n}$ é dada por $a^\\dagger a\\ket{n} = n\\ket{n}$. Supondo que no tempo $t = 0$ o sistema seja preparado no estado<br/><br/>$$\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}} (\\ket{0} + \\ket{1}) \\text{,}$$<br/>o valor esperado $\\braket{\\hat{x}(t)} = \\braket{\\psi(t) | \\hat{x} | \\psi(t)}$ é:`
		},
		alternatives: [
			{
				text: `$\\sqrt{\\frac{\\hbar}{2m \\omega}} \\cos (\\omega t)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\sqrt{\\frac{\\hbar}{2m \\omega}} \\sin (\\omega t)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\sqrt{\\frac{\\hbar}{2m \\omega}} \\cos (\\frac{3}{2} \\omega t)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\sqrt{\\frac{\\hbar}{2m \\omega}} \\sin (\\frac{3}{2} \\omega t)$`,
				number: QuestionAlternative.D
			},
			{
				text: `$2\\sqrt{\\frac{\\hbar}{2m \\omega}} \\cos (\\omega t)$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=rK_c8MAn_Kg'
		},
		questionNumber: 8,
		statement: {
			text: `O hamiltoniano de um oscilador harmônico simples é dado por<br/><br/>$$\\hat{H} = \\left(a^{\\dagger}a + \\frac{1}{2}\\right) \\hbar\\omega \\text{,}$$<br/>em que $\\omega$ é a frequência angular do oscilador. O operador $a$ é dado por<br/><br/>$$a = \\sqrt{\\frac{m\\omega}{2\\hbar}} \\hat{x} - i\\sqrt{\\frac{1}{2m\\omega\\hbar}} \\hat{p}\\text{,}$$<br/>com $a^\\dagger$ o seu conjugado hermitiano, sendo $\\hat{x}$ o operador posição e $\\hat{p}$ o operador momento. A ação do produto $a^\\dagger a$ sobre um autoestado de energia $\\ket{n}$ é dada por $a^\\dagger a\\ket{n} = n\\ket{n}$. Supondo que no tempo $t = 0$ o sistema seja preparado no estado<br/><br/>$$\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}} (\\ket{0} + \\ket{1}) \\text{,}$$<br/>o valor esperado $\\braket{\\hat{p}(t)} = \\braket{\\psi(t) | \\hat{p} | \\psi(t)}$ é:`
		},
		alternatives: [
			{
				text: `$-\\sqrt{\\frac{m \\omega \\hbar}{2}} \\sin (\\omega t)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$-\\sqrt{\\frac{m \\omega \\hbar}{2}} \\cos (\\omega t)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$-\\sqrt{\\frac{m \\omega \\hbar}{2}} \\sin (\\frac{3}{2} \\omega t)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$-\\sqrt{\\frac{m \\omega \\hbar}{2}} \\cos (\\frac{3}{2} \\omega t)$`,
				number: QuestionAlternative.D
			},
			{
				text: `$-2\\sqrt{\\frac{m \\omega \\hbar}{2}} \\sin (\\omega t)$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 1,
		statement: {
			text: `Os equipamentos médicos de ressonância magnética empregam como fonte de campo magnético bobinas construídas com uma liga Nb-Ti em seu estado supercondutor. Para atingir esse estado, elas operam em temperaturas tão baixas quanto a do hélio líquido. Quantos litros de hélio líquido são evaporados para resfriar uma bobina de $5,0$ kg em temperatura ambiente de $31 \\text{°C}$ até a temperatura de operação de aproximadamente $4,0 \\space \\text{K}$, que é praticamente sua temperatura de ebulição?<br/><br/>Dados:<br/>calor específico do Nb-Ti: $400 \\space \\text{J/kg °C}$;<br/>calor latente de vaporização do hélio: $2,00 \\times 10^4 \\space \\text{J/kg}$;<br/>densidade do hélio líquido $125 \\space \\text{kg/m}^3$<br/>`
		},
		alternatives: [
			{
				text: `$240$ litros`,
				number: QuestionAlternative.A
			},
			{
				text: `$0,24$ litros`,
				number: QuestionAlternative.B
			},
			{
				text: `$21,6$ litros`,
				number: QuestionAlternative.C
			},
			{
				text: `$2,16$ litros`,
				number: QuestionAlternative.D
			},
			{
				text: `$600$ litros`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 1,
		statement: {
			text: `Os equipamentos médicos de ressonância magnética empregam como fonte de campo magnético bobinas construídas com uma liga Nb-Ti em seu estado supercondutor. Para atingir esse estado, elas operam em temperaturas tão baixas quanto a do hélio líquido. O processo de resfriamento de uma bobina em temperatura ambiente de $31 \\text{°C}$ até a temperatura de operação de aproximadamente $4,0 \\space \\text{K}$, que é praticamente a temperatura de ebulição do hélio líquido, demandou 240 litros de hélio. Qual é a massa da bobina?<br/><br/>Dados:<br/>calor específico do Nb-Ti: $400 \\space \\text{J/kg °C}$;<br/>calor latente de vaporização do hélio: $2,00 \\times 10^4 \\space \\text{J/kg}$;<br/>densidade do hélio líquido $125 \\space \\text{kg/m}^3$<br/>`
		},
		alternatives: [
			{
				text: `$5,0$ kg`,
				number: QuestionAlternative.A
			},
			{
				text: `$5.000$ kg`,
				number: QuestionAlternative.B
			},
			{
				text: `$0,45$ kg`,
				number: QuestionAlternative.C
			},
			{
				text: `$0,05$ kg`,
				number: QuestionAlternative.D
			},
			{
				text: `$12,5$ kg`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 2,
		statement: {
			text: `Considere um refrigerador baseado em um gás ideal monoatômico que opera de acordo com o seguinte ciclo termodinâmico:<br/><ul><li>a partir das condições iniciais $P_0$, $V_0$ e $T_0$, o gás sofre um processo isocórico que reduz sua pressão para $P_0/3$;</li><li>o gás passa então por um processo de expansão isobárica até que seu volume seja triplicado;</li><li>finalmente, o gás é comprimido isotermicamente até o ponto inicial.</li></ul><br/><br/>Em termos da primeira lei da termodinâmica, é correto afirmar que, ao longo do ciclo, o refrigerador transfere calor (positivo) para o ambiente externo (reservatório quente):`,
			image: '2023-1/te-2.webp'
		},
		alternatives: [
			{
				text: `nos processos isotérmico e isocórico`,
				number: QuestionAlternative.A
			},
			{
				text: `nos processos isobárico e isocórico`,
				number: QuestionAlternative.B
			},
			{
				text: `apenas no processo isotérmico`,
				number: QuestionAlternative.C
			},
			{
				text: `apenas no processo isobárico`,
				number: QuestionAlternative.D
			},
			{
				text: `nos processos isobárico e isotérmico`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 2,
		statement: {
			text: `Considere um refrigerador baseado em um gás ideal monoatômico que opera de acordo com o seguinte ciclo termodinâmico:<br/><ul><li>a partir das condições iniciais $P_0$, $V_0$ e $T_0$, o gás sofre um processo isocórico que reduz sua pressão para $P_0/3$;</li><li>o gás passa então por um processo de expansão isobárica até que seu volume seja triplicado;</li><li>finalmente, o gás é comprimido isotermicamente até o ponto inicial. </li></ul><br/><br/>Em termos da primeira lei da termodinâmica, é correto afirmar que, ao longo do ciclo, o refrigerador absorve calor (positivo) do ambiente interno (reservatório frio):`,
			image: '2023-1/te-2.webp'
		},
		alternatives: [
			{
				text: `apenas no processo isobárico`,
				number: QuestionAlternative.A
			},
			{
				text: `nos processos isobárico e isocórico`,
				number: QuestionAlternative.B
			},
			{
				text: `apenas no processo isotérmico`,
				number: QuestionAlternative.C
			},
			{
				text: `nos processos isotérmico e isocórico`,
				number: QuestionAlternative.D
			},
			{
				text: `nos processos isobárico e isotérmico`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 3,
		statement: {
			text: `Considere um bloco de densidade $\\rho$ e volume $V_0$ que, sofrendo uma variação de temperatura $\\Delta T > 0$, dilata-se termicamente a uma pressão ambiente $P$ constante. Se $\\gamma$ é o coeficiente de dilatação volumétrica do material constituinte do bloco e $c_B$ é seu calor específico, o módulo da razão entre o trabalho efetuado na expansão do sólido e o calor absorvido é:`
		},
		alternatives: [
			{
				text: `$\\frac{\\gamma P}{\\rho c_B}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{\\rho c_B}{\\gamma P}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{\\gamma \\rho c_B}{3}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{\\gamma P \\rho}{c_B \\Delta T}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{\\gamma P}{\\rho c_B \\Delta T}$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 3,
		statement: {
			text: `Considere um bloco de densidade $\\rho$ e volume $V_0$ que, sofrendo uma variação de temperatura $\\Delta T > 0$, dilata-se termicamente a uma pressão ambiente $P$ constante. Se $\\gamma$ é o coeficiente de dilatação volumétrica do material constituinte do bloco e $c_B$ é seu calor específico, o módulo da razão entre o calor absorvido e o trabalho efetuado na expansão do sólido é:`
		},
		alternatives: [
			{
				text: `$\\frac{\\rho c_B}{\\gamma P}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$\\frac{\\gamma P}{\\rho c_B}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$\\frac{\\gamma \\rho c_B}{3}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$\\frac{c_B \\Delta T}{\\gamma P \\rho}$`,
				number: QuestionAlternative.D
			},
			{
				text: `$\\frac{\\rho c_B \\Delta T}{\\gamma P}$`,
				number: QuestionAlternative.D
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 4,
		statement: {
			text: `Um mol de gás monoatômico ideal inicialmente a pressão $P_0$ ocupa um volume $V_0$. Ele é aquecido a volume constante até um estado final de equilíbrio no qual sua pressão é $4P_0$. Denotando a constante universal dos gases por $R$, a variação na entropia do gás durante esse processo é:`
		},
		alternatives: [
			{
				text: `$1,5 R \\ln (4)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$2,5 R \\ln (2)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$3,5 R \\ln (4)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$4,0 R$`,
				number: QuestionAlternative.D
			},
			{
				text: `$2,5 R$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=fRJGYDEm6gg'
		},
		questionNumber: 4,
		statement: {
			text: `Um mol de gás monoatômico ideal inicialmente a pressão $P_0$ ocupa um volume $V_0$. Ele é aquecido a volume constante até um estado final de equilíbrio no qual sua pressão é $2P_0$. Denotando a constante universal dos gases por $R$, a variação na entropia do gás durante esse processo é:`
		},
		alternatives: [
			{
				text: `$1,5 R \\ln (2)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$2,5 R \\ln (2)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$3,5 R \\ln (4)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$4,0 R$`,
				number: QuestionAlternative.D
			},
			{
				text: `$1,5 R$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 1,
		statement: {
			text: `Considere um sistema formado por $N$ íons magnéticos localizados, em contato com um banho térmico a uma temperatura $T$ ($\\beta = 1/k_BT$). Cada íon pode assumir um dos valores possíveis de spin $S_z = 0, +1$ e $-1$, com energias $0$, $\\epsilon -\\mu H$ e $\\epsilon +\\mu H$, respectivamente, sendo $\\mu$ uma constante e $H$ a intensidade do campo magnético. A expressão para a magnetização $m(T,H,\\mu)$ por íon é dada por`
		},
		alternatives: [
			{
				text: `$m(T, H, \\mu) = \\frac{2 \\mu \\sinh (\\beta \\mu H)}{e^{\\beta \\epsilon} + 2 \\cosh (\\beta \\mu H)}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$m(T, H, \\mu) = \\frac{2 \\mu \\sinh (\\beta \\mu H)}{e^{\\beta \\epsilon} - 2 \\cosh (\\beta \\mu H)}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$m(T, H, \\mu) = \\frac{2 \\mu \\cosh (\\beta \\mu H)}{e^{\\beta \\epsilon} - 2 \\sinh (\\beta \\mu H)}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$m(T, H, \\mu) = \\mu \\tanh (\\beta \\mu H)$`,
				number: QuestionAlternative.D
			},
			{
				text: `$m(T, H, \\mu) = \\mu e^{-\\beta \\epsilon} \\tanh (\\beta \\mu H)$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 1,
		statement: {
			text: `Considere um sistema formado por $N$ íons magnéticos localizados, em contato com um banho térmico a uma temperatura $T$ ($\\beta = 1/k_B T$). Cada íon pode assumir um dos valores possíveis de spin $S_z = 0, +1$ e $-1$, com energias $0$, $\\epsilon -\\mu H$ e $\\epsilon +\\mu H$, respectivamente, sendo $\\mu$ uma constante e $H$ a intensidade do campo magnético. A expressão para a energia média $u(T,H,\\mu)$ por íon é dada por`
		},
		alternatives: [
			{
				text: `$m(T, H, \\mu) = \\frac{2e^{-\\beta \\epsilon} \\left[ \\epsilon \\cosh (\\beta \\mu H) - \\mu H \\sinh (\\beta \\mu H) \\right]}{1 + 2e^{-\\beta \\epsilon} + 2 \\cosh \\beta \\mu H}$`,
				number: QuestionAlternative.A
			},
			{
				text: `$m(T, H, \\mu) = \\frac{2e^{-\\beta \\epsilon} \\left[ \\epsilon \\sinh (\\beta \\mu H) - \\mu H \\cosh (\\beta \\mu H) \\right]}{1 + 2e^{-\\beta \\epsilon} + 2 \\sinh \\beta \\mu H}$`,
				number: QuestionAlternative.B
			},
			{
				text: `$m(T, H, \\mu) = \\frac{2 \\epsilon \\cosh (\\beta \\mu H)}{e^{\\beta \\epsilon} + 2 \\cosh \\beta \\mu H}$`,
				number: QuestionAlternative.C
			},
			{
				text: `$m(T, H, \\mu) = \\mu H \\tanh (\\beta \\mu H)$`,
				number: QuestionAlternative.D
			},
			{
				text: `$m(T, H, \\mu) = \\mu H e^{-\\beta \\epsilon} \\tanh (\\beta \\mu H)$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 2,
		statement: {
			text: `Considere uma partícula em contato com um reservatório térmico a uma temperatura $T$ ($\\beta = 1/k_B T$) e confinada em um certo potencial. Os níveis de energia permitidos para a partícula são discretos e dados por<br/><br/>$$E_n = \\theta n^2\\text{,} \\qquad n = 1, 2, 3, ...,$$<br/>sendo $\\theta > 0$ uma constante. A expressão para a energia média $u(\\beta,\\theta)$ da partícula no regime de baixas temperaturas, $\\beta\\theta \\gg 1$, é aproximadamente dada por`
		},
		alternatives: [
			{
				text: `$u (\\beta, \\theta) = \\theta(1 + 3e^{-3\\beta\\theta})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 - 3e^{-3\\beta\\theta})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 + e^{-\\beta\\theta})$`,
				number: QuestionAlternative.C
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 - e^{-\\beta\\theta})$`,
				number: QuestionAlternative.D
			},
			{
				text: `$u (\\beta, \\theta) = 1/\\beta$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 2,
		statement: {
			text: `Considere uma partícula em contato com um reservatório térmico a uma temperatura $T$ ($\\beta = 1/k_B T$) e confinada em certo potencial. Os níveis de energia permitidos para a partícula são discretos e dados por<br/><br/>$$E_n = \\theta n^3\\text{,} \\qquad n = 1, 2, 3, ...,$$<br/>sendo $\\theta > 0$ uma constante. A expressão para a energia média $u(\\beta,\\theta)$ da partícula no regime de baixas temperaturas, $\\beta\\theta \\gg 1$, é aproximadamente dada por`
		},
		alternatives: [
			{
				text: `$u (\\beta, \\theta) = \\theta(1 + 7e^{-7\\beta\\theta})$`,
				number: QuestionAlternative.A
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 - 7e^{-7\\beta\\theta})$`,
				number: QuestionAlternative.B
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 + e^{-\\beta\\theta})$`,
				number: QuestionAlternative.C
			},
			{
				text: `$u (\\beta, \\theta) = \\theta(1 - e^{-\\beta\\theta})$`,
				number: QuestionAlternative.D
			},
			{
				text: `$u (\\beta, \\theta) = 1/\\beta$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 3,
		statement: {
			text: `Considere um gás formado por dois tipos de partículas clássicas, $A$ e $B$, confinadas em um recipiente de volume $V$. As interações entre as partículas são desprezíveis. O sistema é composto por $N_A$ partículas do tipo $A$ e $N_B$ partículas do tipo $B$, em contato com um reservatório térmico a uma temperatura $T$, sendo a hamiltoniana de cada partícula dada por<br/><br/>$$\\cal{H} = \\frac{1}{2m} (p_x^2 + p_y^2 + p_z^2).$$<br/>Com base no princípio da equipartição de energia, a energia média do sistema é dada por`
		},
		alternatives: [
			{
				text: `$U = \\frac{3}{2} (N_A + N_B) k_B T$`,
				number: QuestionAlternative.A
			},
			{
				text: `$U = \\frac{3}{2} \\frac{N_A N_B}{N_A + N_B} k_B T$`,
				number: QuestionAlternative.B
			},
			{
				text: `$U = \\frac{3}{2} (N_A - N_B) k_B T$`,
				number: QuestionAlternative.C
			},
			{
				text: `$U = \\frac{3}{2V} (N_A + N_B) k_B T$`,
				number: QuestionAlternative.D
			},
			{
				text: `$U = (N_A + N_B) k_B T$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 3,
		statement: {
			text: `Considere um sistema formado por dois tipos de osciladores harmônicos clássicos, $A$ e $B$. As interações entre osciladores são desprezíveis. O sistema, composto por $N_A$ osciladores do tipo $A$ e $N_B$ osciladores do tipo $B$, está em contato com um reservatório térmico a uma temperatura $T$, sendo a hamiltoniana de cada oscilador dada por<br/><br/>$$\\cal{H} = \\frac{1}{2m} (p_x^2 + p_y^2 + p_z^2) + \\frac{m\\omega_i^2}{2} (x^2 + y^2 + z^2)\\text{,}$$<br/>com $\\omega_i = \\omega_A$ ou $\\omega_i = \\omega_B$ para os osciladores $A$ ou $B$, respectivamente. Com base no princípio da equipartição de energia, a energia média do sistema é dada por`
		},
		alternatives: [
			{
				text: `$U = 3(N_A + N_B) k_B T$`,
				number: QuestionAlternative.A
			},
			{
				text: `$U = 3\\frac{N_A N_B}{N_A + N_B} k_B T$`,
				number: QuestionAlternative.B
			},
			{
				text: `$U = \\frac{3}{2} (N_A - N_B) k_B T$`,
				number: QuestionAlternative.C
			},
			{
				text: `$U = (N_A + N_B) k_B T$`,
				number: QuestionAlternative.D
			},
			{
				text: `$U = \\frac{1}{2}(N_A + N_B) k_B T$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 4,
		statement: {
			text: `Considere um sistema formado por dois osciladores harmônicos quânticos, localizados e não interagentes, cada um vibrando com frequência $\\omega$, em contato com um reservatório térmico à temperatura $T$ ($\\beta = 1/k_B T$). A energia de cada oscilador é dada por<br/><br/>$$E_n = \\hbar\\omega n \\text{,} \\qquad n = 0, 1, 2, ... \\space .$$<br/>Se $x = e^{-\\beta\\hbar\\omega}$, assinale a alternativa que corresponde à probabilidade de que a energia total (soma das energias dos dois osciladores) seja menor do que $4\\hbar\\omega$.<br/><br/>Dica: dado que os osciladores são não interagentes, a probabilidade de observar o sistema em uma configuração em que os osciladores harmônicos 1 e 2 são caracterizados pelos números quânticos $n_1$ e $n_2$ é $P_{n_1,n_2} = e^{-\\beta(E_{n_1}+E_{n_2})}/\\cal{E}^2$, sendo $\\cal{E} = 1+x+x^2+... = 1/(1-x)$.`
		},
		alternatives: [
			{
				text: `$(1 - x)^2 (1 + 2x + 3x^2 + 4x^3)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$(1 - x)^2 (1 + 2x + 3x^2)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$(1 - x)^2 (1 + x + x^2 + x^3)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$5x^4 (1 - x)^2$`,
				number: QuestionAlternative.D
			},
			{
				text: `$4x^3 (1 - x)^2$`,
				number: QuestionAlternative.E
			},
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			imageDescription: undefined,
			youtubeUrl: 'https://www.youtube.com/watch?v=Si92XJgKEXA'
		},
		questionNumber: 4,
		statement: {
			text: `Considere um sistema formado por três osciladores harmônicos quânticos, localizados e não interagentes, cada um vibrando com frequência $\\omega$, em contato com um reservatório térmico à temperatura $T$ ($\\beta = 1/k_B T$). A energia de cada oscilador é dada por<br/><br/>$$E_n = \\hbar\\omega n \\text{,} \\qquad n = 0, 1, 2, ... \\space .$$<br/>Se $x = e^{-\\beta\\hbar\\omega}$, assinale a alternativa que corresponde à probabilidade de que a energia total (soma das energias dos três osciladores) seja menor do que $3\\hbar\\omega$.<br/><br/>Dica: dado que os osciladores são não interagentes, a probabilidade de observar o sistema em uma configuração em que os osciladores harmônicos 1 e 2 são caracterizados pelos números quânticos $n_1$ e $n_2$ é $P_{n_1,n_2} = e^{-\\beta(E_{n_1}+E_{n_2})}/\\cal{E}^2$, sendo $\\cal{E} = 1+x+x^2+... = 1/(1-x)$.`
		},
		alternatives: [
			{
				text: `$(1 - x)^3 (1 + 3x + 3x^2)$`,
				number: QuestionAlternative.A
			},
			{
				text: `$(1 - x)^3 (1 + x + x^2)$`,
				number: QuestionAlternative.B
			},
			{
				text: `$(1 - x)^3 (1 + 2x + 2x^2)$`,
				number: QuestionAlternative.C
			},
			{
				text: `$3x (1 - x)^3$`,
				number: QuestionAlternative.D
			},
			{
				text: `$3x^2 (1 - x)^3$`,
				number: QuestionAlternative.E
			},
		]
	},
];
