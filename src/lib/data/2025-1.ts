import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2025,
	semester: 1,
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: []
};

export default <Question[]>[
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma corda inicialmente em repouso sobre uma superfície horizontal é puxada para cima a partir do instante $t = 0$ por uma força $F(t)$ tal que a corda sobe com velocidade $v$ constante, como ilustra a figura. A corda é homogênea, de densidade linear de massa $\\lambda$, de comprimento total $L$, e a aceleração da gravidade é $g$. Considere as afirmações abaixo, que se referem à situação em que um comprimento $l \\lt L$ de corda já foi puxado. Despreze a altura do montante da corda ainda apoiado na superfície.<br/><br/><ul><li>I. O aumento de energia potencial gravitacional é $\\lambda L gl/2$.</li><li>II. A força resultante sobre a corda é constante e igual a $F_R = \\lambda v^2$.</li><li>III. A força $F$ cresce linearmente com tempo e é igual a $F = \\lambda lg = \\lambda vgt$.</li></ul><br/><br/>Assinale a alternativa correta:',
			image: '2025-1/mc-1.webp'
		},
		alternatives: [
			{
				text: 'Apenas a afirmação II é correta.',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das afirmações é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações I e II são corretas.',
				number: QuestionAlternative.C
			},
			{
				text: 'Todas as afirmações são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e III são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma corda de massa $M$, inicialmente em repouso sobre uma superfície horizontal, é puxada para cima a partir do instante $t = 0$ por uma força $F$ tal que a corda sobe com velocidade $v$ constante, como ilustra a figura. A corda é homogênea, de comprimento total $L$, e a aceleração da gravidade é $g$. Considere as afirmações abaixo, que se referem à situação em que um comprimento $l \\lt L$ de corda já foi puxado. Despreze a altura do montante da corda ainda apoiado na superfície.<br/><br/><ul><li>I. O aumento de energia potencial gravitacional é $M gl/2$.</li><li>II. A força resultante sobre a corda é constante e igual a $F_R = M v^2/L$.</li><li>III. A força $F$ cresce linearmente com tempo e é igual a $F = Mlg/L = Mvgt/L$.</li></ul><br/><br/>Assinale a alternativa correta:',
			image: '2025-1/mc-1.webp'
		},
		alternatives: [
			{
				text: 'Apenas a afirmação II é correta.',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das afirmações é correta.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas as afirmações I e II são corretas.',
				number: QuestionAlternative.C
			},
			{
				text: 'Todas as afirmações são corretas.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas as afirmações I e III são corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula confinada a se mover em uma dimensão está sob a ação de uma força resultante $F$ que varia no tempo conforme indicado no gráfico. Assinale abaixo a alternativa que melhor representa o seu momento $P$ como função do tempo, dado que inicialmente a partícula se encontrava em repouso.',
			image: '2025-1/mc-2a.webp'
		},
		alternatives: [
			{
				image: '2025-1/mc-2a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-1/mc-2a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-1/mc-2a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-1/mc-2a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-1/mc-2a-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula confinada a se mover em uma dimensão está sob a ação de uma força resultante $F$ que varia no tempo conforme indicado no gráfico. Assinale abaixo a alternativa que melhor representa o seu momento $P$ como função do tempo, dado que inicialmente a partícula se encontrava em repouso.',
			image: '2025-1/mc-2b.webp'
		},
		alternatives: [
			{
				image: '2025-1/mc-2b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-1/mc-2b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-1/mc-2b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-1/mc-2b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-1/mc-2b-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 3,
		statement: {
			text: 'A lagrangiana de um sistema descrito pela coordenada generalizada $q$ e por sua derivada temporal $\\dot{q}$ é ${\\cal L}(\\dot{q},q) = (a\\dot{q} + bq)^2$, onde $a$ e $b$ são constantes. Qual é a hamiltoniana correspondente?'
		},
		alternatives: [
			{
				text: '${\\cal H} = \\frac{p^2}{4a^2} - \\frac{bpq}{a}$, onde o momento canônico é $p = 2a(a\\dot{q} + bq)$',
				number: QuestionAlternative.A
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 + \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = \\sqrt{a}\\dot{q}$',
				number: QuestionAlternative.B
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 - \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = \\sqrt{a}\\dot{q}$',
				number: QuestionAlternative.C
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 + \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = 2a(a\\dot{q} + bq)$',
				number: QuestionAlternative.D
			},
			{
				text: '${\\cal H} = \\frac{p^2}{4a^2} + \\frac{bpq}{a}$, onde o momento canônico é $p = 2a(a\\dot{q} + bq)$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 3,
		statement: {
			text: 'A lagrangiana de um sistema descrito pela coordenada generalizada $q$ e por sua derivada temporal $\\dot{q}$ é ${\\cal L}(\\dot{q},q) = (a\\dot{q} - bq)^2$, onde $a$ e $b$ são constantes. Qual é a hamiltoniana correspondente?'
		},
		alternatives: [
			{
				text: '${\\cal H} = \\frac{p^2}{4a^2} + \\frac{bpq}{a}$, onde o momento canônico é $p = 2a(a\\dot{q} - bq)$',
				number: QuestionAlternative.A
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 + \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = \\sqrt{a}\\dot{q}$',
				number: QuestionAlternative.B
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 - \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = \\sqrt{a}\\dot{q}$',
				number: QuestionAlternative.C
			},
			{
				text: '${\\cal H} = \\frac{1}{2a^2}p^2 + \\frac{1}{2}a^2b^4q^2$, onde o momento canônico é $p = 2a(a\\dot{q} - bq)$',
				number: QuestionAlternative.D
			},
			{
				text: '${\\cal H} = \\frac{p^2}{4a^2} - \\frac{bpq}{a}$, onde o momento canônico é $p = 2a(a\\dot{q} - bq)$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 4,
		statement: {
			text: 'As equações de movimento de um sistema de duas partículas acopladas são escritas em forma matricial como<br/><br/>$$\\frac{d^2}{dt^2} \\left(\\begin{matrix}x_1 \\\\ x_2\\end{matrix}\\right) = -\\omega_0^2\\left(\\begin{matrix}5/2 & -3/2 \\\\ -2 & 2\\end{matrix}\\right) \\left(\\begin{matrix}x_1 \\\\ x_2\\end{matrix}\\right) \\space \\text{,}$$<br/>onde $x_i(t)$ é a posição da $i$-ésima partícula e $\\omega_0$ é uma constante real positiva. Quais são as frequências naturais de vibração do sistema?'
		},
		alternatives: [
			{
				text: '$\\frac{1}{\\sqrt{2}}\\omega_0$ e $2\\omega_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$ e $\\omega_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{3}{2}\\omega_0$ e $2\\omega_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{\\sqrt{3}}\\omega_0$ e $\\sqrt{\\frac{2}{3}}\\omega_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{2}{3}\\omega_0$ e $\\frac{1}{2}\\omega_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 4,
		statement: {
			text: 'As equações de movimento de um sistema de duas partículas acopladas são escritas em forma matricial como<br/><br/>$$\\frac{d^2}{dt^2} \\left(\\begin{matrix}x_1 \\\\ x_2\\end{matrix}\\right) = -\\omega_0^2\\left(\\begin{matrix}8/5 & -3/5 \\\\ -4/5 & 4/5\\end{matrix}\\right) \\left(\\begin{matrix}x_1 \\\\ x_2\\end{matrix}\\right) \\space \\text{,}$$<br/>onde $x_i(t)$ é a posição da $i$-ésima partícula e $\\omega_0$ é uma constante real positiva. Quais são as frequências naturais de vibração do sistema?'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{2}{5}}\\omega_0$ e $\\sqrt{2}\\omega_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$ e $\\omega_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{3}{5}\\omega_0$ e $\\frac{4}{5}\\omega_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{\\frac{8}{5}}\\omega_0$ e $\\sqrt{\\frac{1}{5}}\\omega_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{5}{3}\\omega_0$ e $\\frac{5}{4}\\omega_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 5,
		statement: {
			text: 'Considere um pêndulo invertido formado por um balão de volume $V$ imerso no ar e preso a um fio inextensível de comprimento $L$. O balão está preenchido com hélio. Quando ligeiramente deslocado de sua posição de equilíbrio, o sistema oscila conforme ilustrado na figura. Sabendo que a densidade do hélio é $\\rho_H$ e a densidade do ar é $\\rho_a$, determine a frequência angular $\\omega_0$ de oscilação do pêndulo. Considere a aceleração da gravidade $g$ orientada na direção vertical para baixo, enquanto o empuxo (a força devido ao volume de ar deslocado) é orientado verticalmente para cima. Suponha pequenas oscilações, ou seja, $\\sin{\\theta} \\approx \\theta$, e desconsidere forças dissipativas.',
			image: '2025-1/mc-5.webp'
		},
		alternatives: [
			{
				text: '$\\omega_0 = \\sqrt{(\\rho_a / \\rho_H - 1) g/L}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_0 = \\sqrt{(\\rho_a / \\rho_H) g/L}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_0 = \\sqrt{(1 - \\rho_H / \\rho_a) g/L}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_0 = \\sqrt{(\\rho_a / \\rho_H - \\rho_H / \\rho_a) g/L}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_0 = \\sqrt{g/L}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 5,
		statement: {
			text: 'Considere um pêndulo invertido formado por um balão de volume $V$ imerso no ar e preso a um fio inextensível de comprimento $L$. O balão está preenchido com um gás de densidade desconhecida $\\rho_g$. Ao ser levemente deslocado de sua posição de equilíbrio, o sistema oscila conforme ilustrado na figura. Sabendo que a densidade do gás é menor que a densidade do ar $\\rho_a$ e que a frequência angular da oscilação é $\\omega_0$, determine a razão $\\rho_a/\\rho_g$. Considere a aceleração da gravidade $g$ orientada na direção vertical para baixo, enquanto o empuxo (a força devido ao volume de ar deslocado) é orientado verticalmente para cima. Suponha pequenas oscilações, ou seja, $\\sin{\\theta} \\approx \\theta$, e desconsidere forças dissipativas.',
			image: '2025-1/mc-5.webp'
		},
		alternatives: [
			{
				text: '$\\frac{\\rho_a}{\\rho_g} = \\frac{\\omega_0^2 L}{g} + 1$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{\\rho_a}{\\rho_g} = \\frac{\\omega_0^2 L}{g} - 1$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\rho_a}{\\rho_g} = \\frac{\\omega_0^2 L}{g}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{\\rho_a}{\\rho_g} = \\frac{g}{\\omega_0^2 L}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\rho_a}{\\rho_g} = 1 - \\frac{\\omega_0^2 L}{g}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 6,
		statement: {
			text: 'Três blocos, de massas $M$, $m_1$ e $m_2$, estão dispostos conforme ilustrado na figura. Supondo que <strong>NÃO</strong> haja atrito entre quaisquer superfícies, determine o valor do módulo $F$ da força horizontal que deve ser aplicada ao bloco de massa $M$ para que não haja movimento relativo entre os blocos. Considere que a aceleração da gravidade tem módulo $g$ e é orientada verticalmente para baixo.',
			image: '2025-1/mc-6.webp'
		},
		alternatives: [
			{
				text: '$F = \\frac{m_2}{m_1} (M + m_1 + m_2)g$',
				number: QuestionAlternative.A
			},
			{
				text: '$F = (M + m_1 + m_2)g$',
				number: QuestionAlternative.B
			},
			{
				text: '$F = \\frac{m_1}{m_2} (M + m_1 + m_2)g$',
				number: QuestionAlternative.C
			},
			{
				text: '$F = \\frac{m_1}{M} (M + m_1 + m_2)g$',
				number: QuestionAlternative.D
			},
			{
				text: '$F = \\frac{m_2}{M} (M + m_1 + m_2)g$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 6,
		statement: {
			text: 'Três blocos, de massas $M$, $m_1$ e $m_2$, estão submetidos a uma força horizontal de módulo $F$, conforme ilustrado na figura. Suponha que <strong>NÃO</strong> haja atrito entre quaisquer superfícies e que a força horizontal tenha sido ajustada de forma que não ocorra movimento relativo entre os blocos. Nessas condições, determine a massa $M$ em função de $F$, $m_1$, $m_2$ e do módulo da aceleração da gravidade. Considere que a aceleração da gravidade tem módulo $g$ e é orientada verticalmente para baixo.',
			image: '2025-1/mc-6.webp'
		},
		alternatives: [
			{
				text: '$M = \\frac{m_1}{m_2} \\frac{F}{g} - m_1 - m_2$',
				number: QuestionAlternative.A
			},
			{
				text: '$M = \\frac{m_1}{m_2} \\frac{F}{g} + m_1 - m_2$',
				number: QuestionAlternative.B
			},
			{
				text: '$M = \\frac{m_1}{m_2} \\frac{F}{g} - m_1 + m_2$',
				number: QuestionAlternative.C
			},
			{
				text: '$M = \\frac{m_1}{m_2} \\frac{F}{g} + m_1 + m_2$',
				number: QuestionAlternative.D
			},
			{
				text: '$M = \\frac{m_1}{m_2} \\frac{F}{g}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 7,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ é inicialmente colocado em rotação com velocidade angular $\\omega_0$ em torno de seu eixo de simetria, conforme ilustrado no painel à esquerda na figura. Em seguida, o disco é liberado sobre uma superfície horizontal com coeficiente de atrito cinético $\\mu_c$, partindo com velocidade inicial de translação nula. Devido à força de atrito entre o disco e a superfície, surge uma aceleração que altera tanto a velocidade de translação $V(t)$ quanto a velocidade de rotação $\\omega(t)$; veja o painel à direita na figura. Inicialmente, o disco rola e desliza sobre a superfície, mas, após um intervalo de tempo $\\Delta{t}$, ele atinge a condição de rolamento sem deslizamento. Dadas essas informações, indique qual dos gráficos abaixo melhor representa a dependência temporal da velocidade de translação, $V(t)$, e da velocidade de rotação multiplicada pelo raio, $R \\times \\omega(t)$.',
			image: '2025-1/mc-7a.webp'
		},
		alternatives: [
			{
				image: '2025-1/mc-7a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-1/mc-7a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-1/mc-7a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-1/mc-7a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-1/mc-7a-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 7,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ está inicialmente deslizando sem rolar sobre uma superfície horizontal lisa e sem atrito, com velocidade de translação $V_0$. Em determinado momento, o disco entra em uma região de superfície rugosa, caracterizada por um coeficiente de atrito cinético $\\mu_c$. Na região rugosa, a força de atrito atua sobre o disco, gerando uma aceleração que modifica sua velocidade de translação $V(t)$ e, simultaneamente, provoca um movimento de rotação com velocidade angular $\\omega(t)$ (veja a figura). Após um intervalo de tempo $\\Delta{t}$ percorrendo a superfície rugosa, o disco alcança a condição de rolamento sem deslizamento. Dadas essas informações, indique qual dos gráficos abaixo melhor representa a dependência temporal da velocidade de translação, $V(t)$, e da velocidade de rotação multiplicada pelo raio, $R \\times \\omega(t)$.',
			image: '2025-1/mc-7b.webp'
		},
		alternatives: [
			{
				image: '2025-1/mc-7b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-1/mc-7b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-1/mc-7b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-1/mc-7b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-1/mc-7b-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 8,
		statement: {
			text: 'Um disco homogêneo de massa $M$ e raio $R$ desloca-se sobre uma superfície horizontal sem atrito com velocidade de módulo $V_0$. Durante seu movimento, ele colide tangencialmente com a periferia de outro disco idêntico, inicialmente em repouso. Devido à natureza do material dos discos, eles permanecem unidos após o contato, passando a girar em torno do centro de massa $(CM)$ do sistema formado pelos dois objetos; o símbolo "$\\times$" na figura representa o $CM$ do sistema. Note que, além do movimento de rotação, há um movimento de translação com velocidade $V$. Determine o módulo da velocidade de rotação $\\omega$ após a colisão. Considere que o momento de inércia de um disco homogêneo girando em torno de seu eixo de simetria é $I_{CM} = \\frac{1}{2}MR^2$',
			image: '2025-1/mc-8.webp'
		},
		alternatives: [
			{
				text: '$\\omega = \\frac{1}{3} \\frac{v_0}{R}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\frac{1}{6} \\frac{v_0}{R}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\frac{2}{3} \\frac{v_0}{R}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = \\frac{1}{2} \\frac{v_0}{R}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = \\frac{3}{5} \\frac{v_0}{R}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaClassica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=xErEbEXS5DU'
		},
		questionNumber: 8,
		statement: {
			text: 'Uma esfera homogênea de massa $M$ e raio $R$ desliza (sem rolamento) sobre uma superfície horizontal sem atrito com velocidade de módulo $V_0$. Durante seu movimento, ela colide tangencialmente com a periferia de outra esfera idêntica, inicialmente em repouso. Devido à natureza do material das esferas, elas permanecem unidas após o contato, passando a girar em torno do centro de massa $(CM)$ do sistema formado pelos dois objetos; o símbolo "$\\times$" na figura representa o $CM$ do sistema. Note que, além do movimento de rotação, há um movimento de translação com velocidade $V$. Determine o módulo da velocidade de rotação $\\omega$ após a colisão. Considere que o momento de inércia de uma esfera maciça em torno de seu eixo de simetria é $I_{CM} = \\frac{2}{5}MR^2$',
			image: '2025-1/mc-8.webp'
		},
		alternatives: [
			{
				text: '$\\omega = \\frac{5}{14} \\frac{v_0}{R}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega = \\frac{5}{7} \\frac{v_0}{R}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega = \\frac{2}{5} \\frac{v_0}{R}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega = \\frac{9}{14} \\frac{v_0}{R}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega = \\frac{2}{7} \\frac{v_0}{R}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere duas espiras circulares, concêntricas e coplanares, de raios $R_1 = R$ e $R_2 = R/2$. A espira de raio $R_1$ é percorrida por uma corrente elétrica $i_1$, cujo sentido é oposto ao da corrente $i_2$ que percorre a espira de raio $R_2$. Qual é a relação entre $i_1$ e $i_2$ para que o campo magnético $B$ no centro das espiras seja nulo?'
		},
		alternatives: [
			{
				text: '$i_1 = 2i_2$',
				number: QuestionAlternative.A
			},
			{
				text: '$i_1 = 4i_2$',
				number: QuestionAlternative.B
			},
			{
				text: '$i_1 = i_2/2$',
				number: QuestionAlternative.C
			},
			{
				text: '$i_1 = i_2/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$i_1 = i_2 \\ln{2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere duas espiras circulares, concêntricas e coplanares, de raios $R_1 = R$ e $R_2 = R/3$. A espira de raio $R_1$ é percorrida por uma corrente elétrica $i_1$, cujo sentido é oposto ao da corrente $i_2$ que percorre a espira de raio $R_2$. Qual é a relação entre $i_1$ e $i_2$ para que o campo magnético $B$ no centro das espiras seja nulo?'
		},
		alternatives: [
			{
				text: '$i_1 = 3i_2$',
				number: QuestionAlternative.A
			},
			{
				text: '$i_1 = 9i_2$',
				number: QuestionAlternative.B
			},
			{
				text: '$i_1 = i_2/3$',
				number: QuestionAlternative.C
			},
			{
				text: '$i_1 = i_2/9$',
				number: QuestionAlternative.D
			},
			{
				text: '$i_1 = i_2 \\ln{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um campo vetorial dado por $G(x,y) = a \\cos(bx)\\hat{x} + cy \\sin(bx)\\hat{y}$, onde $a$, $b$ e $c$ são constantes. Qual a relação entre as constantes para que $G$ possa representar um campo magnético?'
		},
		alternatives: [
			{
				text: '$c = ab$',
				number: QuestionAlternative.A
			},
			{
				text: '$b = -ac$',
				number: QuestionAlternative.B
			},
			{
				text: '$a = bc$',
				number: QuestionAlternative.C
			},
			{
				text: '$b = -2c$',
				number: QuestionAlternative.D
			},
			{
				text: '$b = 2ac$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um campo vetorial dado por $G(x,y) = a \\sin(bx)\\hat{x} + cy \\cos(bx)\\hat{y}$, onde $a$, $b$ e $c$ são constantes. Qual a relação entre as constantes para que $G$ possa representar um campo magnético?'
		},
		alternatives: [
			{
				text: '$c = -ab$',
				number: QuestionAlternative.A
			},
			{
				text: '$b = ac$',
				number: QuestionAlternative.B
			},
			{
				text: '$a = -bc$',
				number: QuestionAlternative.C
			},
			{
				text: '$b = -2c$',
				number: QuestionAlternative.D
			},
			{
				text: '$b = 2ac$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma carga elétrica estática é distribuída em uma casca esférica de raio interno $R_1$ e raio externo $R_2$. A densidade de carga elétrica na casca é dada por $\\rho = a + br$, sendo igual a zero para $r < R_1$ e $r > R_2$, em que $r$ é a distância até a origem. Aqui $a$ e $b$ são constantes positivas. Qual é o módulo do campo elétrico $E$ na região $r > R2$?'
		},
		alternatives: [
			{
				text: '$E(r) = \\frac{1}{\\epsilon_0 r^2} \\left[\\frac{a}{3} (R_2^3 - R_1^3) + \\frac{b}{4} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.A
			},
			{
				text: '$E(r) = \\frac{1}{\\epsilon_0 r^2} \\left[\\frac{a}{3} (R_2^2 - R_1^2) + \\frac{b}{4} (R_2^3 - R_1^3)\\right]$',
				number: QuestionAlternative.B
			},
			{
				text: '$E(r) = \\frac{1}{\\epsilon_0 r^2} \\left[\\frac{a}{2} (R_2^3 - R_1^3) + \\frac{b}{3} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.C
			},
			{
				text: '$E(r) = \\frac{1}{\\epsilon_0 r^2} \\left[\\frac{a}{2} (R_2^2 - R_1^2) + \\frac{b}{3} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.D
			},
			{
				text: '$E(r) = \\frac{1}{\\epsilon_0 r^2} \\left[\\frac{a}{3} (R_2^2 - R_1^2) + \\frac{b}{3} (R_2^2 - R_1^2)\\right]$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma carga elétrica estática é distribuída em uma casca esférica de raio interno $R_1$ e raio externo $R_2$. A densidade de carga elétrica na casca é dada por $\\rho = a + br$, sendo igual a zero para $r < R_1$ e $r > R_2$, em que $r$ é a distância até a origem. Aqui $a$ e $b$ são constantes positivas. Qual é o potencial elétrico $V$ na região $r > R2$? Considere $V(\\infty) = 0$.'
		},
		alternatives: [
			{
				text: '$V(r) = \\frac{1}{\\epsilon_0 r} \\left[\\frac{a}{3} (R_2^3 - R_1^3) + \\frac{b}{4} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.A
			},
			{
				text: '$V(r) = \\frac{1}{\\epsilon_0 r} \\left[\\frac{a}{3} (R_2^2 - R_1^2) + \\frac{b}{4} (R_2^3 - R_1^3)\\right]$',
				number: QuestionAlternative.B
			},
			{
				text: '$V(r) = \\frac{1}{\\epsilon_0 r} \\left[\\frac{a}{2} (R_2^3 - R_1^3) + \\frac{b}{3} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.C
			},
			{
				text: '$V(r) = \\frac{1}{\\epsilon_0 r} \\left[\\frac{a}{2} (R_2^2 - R_1^2) + \\frac{b}{3} (R_2^4 - R_1^4)\\right]$',
				number: QuestionAlternative.D
			},
			{
				text: '$V(r) = \\frac{1}{\\epsilon_0 r} \\left[\\frac{a}{3} (R_2^2 - R_1^2) + \\frac{b}{3} (R_2^2 - R_1^2)\\right]$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 4,
		statement: {
			text: 'Um resistor de resistência $R$ é ligado em série a uma bateria com fem $\\varepsilon$ e resistência interna $r$. Supondo que o valor de $r$ seja fixo, para qual valor de $R$ a taxa de dissipação de energia no resistor é máxima?'
		},
		alternatives: [
			{
				text: '$R = r$',
				number: QuestionAlternative.A
			},
			{
				text: '$R = 2r$',
				number: QuestionAlternative.B
			},
			{
				text: '$R = 4r$',
				number: QuestionAlternative.C
			},
			{
				text: '$R = r/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$R = r/4$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 4,
		statement: {
			text: 'Um resistor de resistência $R$ é ligado em série a uma bateria com fem $\\varepsilon$ e resistência interna $r$. Supondo que o valor de $r$ seja fixo, qual é a taxa máxima de dissipação de energia no resistor?'
		},
		alternatives: [
			{
				text: '$P = \\frac{\\varepsilon^2}{4r}$',
				number: QuestionAlternative.A
			},
			{
				text: '$P = \\frac{\\varepsilon^2}{r}$',
				number: QuestionAlternative.B
			},
			{
				text: '$P = \\frac{\\varepsilon^2}{2r}$',
				number: QuestionAlternative.C
			},
			{
				text: '$P = \\frac{2\\varepsilon^2}{r}$',
				number: QuestionAlternative.D
			},
			{
				text: '$P = \\frac{4\\varepsilon^2}{r}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 5,
		statement: {
			text: 'Um cubo condutor maciço possui uma cavidade esférica cujo centro coincide com o centro do cubo. No centro da cavidade há uma carga $q = −6,0 \\mu C$ (veja a figura). Além da carga no centro da cavidade, o condutor maciço está carregado com uma carga $Q = 18,0 \\mu C$. Pede-se:<br/><ul><li>i) a carga $q_C$ na superfície da cavidade esférica;</li><li>ii) a carga $q_F$ em cada uma das faces do cubo.</li></ul>',
			image: '2025-1/em-5a.webp'
		},
		alternatives: [
			{
				text: '$q_C = 6,0 \\mu C; q_F = 2,0 \\mu C$',
				number: QuestionAlternative.A
			},
			{
				text: '$q_C = -6,0 \\mu C; q_F = 3,0 \\mu C$',
				number: QuestionAlternative.B
			},
			{
				text: '$q_C = 6,0 \\mu C; q_F = 3,0 \\mu C$',
				number: QuestionAlternative.C
			},
			{
				text: '$q_C = -6,0 \\mu C; q_F = 2,0 \\mu C$',
				number: QuestionAlternative.D
			},
			{
				text: '$q_C = 24,0 \\mu C; q_F = -1,0 \\mu C$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 5,
		statement: {
			text: 'Um cubo condutor maciço possui uma cavidade esférica cujo centro coincide com o centro do cubo. No centro da cavidade há uma carga $q = −12,0 \\mu C$ (veja a figura). Além da carga no centro da cavidade, o condutor maciço está carregado com uma carga $Q = 36,0 \\mu C$. Pede-se:<br/><ul><li>i) a carga $q_C$ na superfície da cavidade esférica;</li><li>ii) a carga $q_F$ em cada uma das faces do cubo.</li></ul>',
			image: '2025-1/em-5b.webp'
		},
		alternatives: [
			{
				text: '$q_C = 12,0 \\mu C; q_F = 4,0 \\mu C$',
				number: QuestionAlternative.A
			},
			{
				text: '$q_C = -12,0 \\mu C; q_F = 4,0 \\mu C$',
				number: QuestionAlternative.B
			},
			{
				text: '$q_C = 12,0 \\mu C; q_F = 6,0 \\mu C$',
				number: QuestionAlternative.C
			},
			{
				text: '$q_C = -12,0 \\mu C; q_F = -4,0 \\mu C$',
				number: QuestionAlternative.D
			},
			{
				text: '$q_C = 48,0 \\mu C; q_F = -2,0 \\mu C$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 6,
		statement: {
			text: 'Partículas de carga $q$ e massa $m$ são aceleradas a partir do repouso ($v_i = 0$) por uma diferença de potencial $\\phi$. Em seguida, as partículas entram numa região de campo magnético perpendicular à velocidade das mesmas, e passam a descrever uma trajetória circular de raio $r$ (veja a figura). O módulo do campo magnético é $B = 0,5 T$. O gráfico apresenta os resultados para os valores de $r^2$ obtidos com a repetição do experimento, para o mesmo tipo de partícula, variando-se a diferença de potencial $\\phi$. Qual é o valor da razão $q/m$ dessas partículas?',
			image: '2025-1/em-6a.webp'
		},
		alternatives: [
			{
				text: '$q/m = 1,0 \\times 10^6 \\space \\text{C/kg}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q/m = 1,0 \\times 10^{-6} \\space \\text{C/kg}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q/m = 5,0 \\times 10^5 \\space \\text{C/kg}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q/m = 1,0 \\times 10^2 \\space \\text{C/kg}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q/m = 5,0 \\times 10^1 \\space \\text{C/kg}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 6,
		statement: {
			text: 'Partículas de carga $q$ e massa $m$ são aceleradas a partir do repouso ($v_i = 0$) por uma diferença de potencial $\\phi$. Em seguida, as partículas entram numa região de campo magnético perpendicular à velocidade das mesmas, e passam a descrever uma trajetória circular de raio $r$ (veja a figura). O módulo do campo magnético é $B = 0,5 T$. O gráfico apresenta os resultados para os valores de $r^2$ obtidos com a repetição do experimento, para o mesmo tipo de partícula, variando-se a diferença de potencial $\\phi$. Qual é o valor da razão $q/m$ dessas partículas?',
			image: '2025-1/em-6b.webp'
		},
		alternatives: [
			{
				text: '$q/m = 2,0 \\times 10^6 \\space \\text{C/kg}$',
				number: QuestionAlternative.A
			},
			{
				text: '$q/m = 5,0 \\times 10^{-7} \\space \\text{C/kg}$',
				number: QuestionAlternative.B
			},
			{
				text: '$q/m = 1,0 \\times 10^6 \\space \\text{C/kg}$',
				number: QuestionAlternative.C
			},
			{
				text: '$q/m = 2,0 \\times 10^2 \\space \\text{C/kg}$',
				number: QuestionAlternative.D
			},
			{
				text: '$q/m = 1,0 \\times 10^2 \\space \\text{C/kg}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma barra condutora, de comprimento $a$, resistência elétrica $R$ e massa $m$, pode deslizar sem atrito sobre um par de trilhos condutores paralelos e horizontais de resistência elétrica desprezível (veja a figura). Um campo magnético $B$ é perpendicular ao plano dos trilhos e a barra encontra-se inicialmente em repouso ($v_i = 0$). Uma bateria de força eletromotriz $V_0$ e resistência interna nula é conectada entre os dois trilhos no instante $t = 0$, gerando uma corrente inicial $i_0$. Pede-se:<br/><ul><li>i) a força $F(v)$ que age sobre a barra em função da sua velocidade $v$;</li><li>ii) a velocidade $v$ da barra quando a corrente for igual a $1/4$ do seu valor inicial, ou seja, quando $i = i_0/4$.</li></ul>',
			image: '2025-1/em-7a.webp'
		},
		alternatives: [
			{
				text: '$F(v) = \\frac{aB}{R} (V_0 - aBv); v = \\frac{3V_0}{4aB}$',
				number: QuestionAlternative.A
			},
			{
				text: '$F(v) = \\frac{aB}{R} (V_0 + aBv); v = \\frac{3V_0}{4aB}$',
				number: QuestionAlternative.B
			},
			{
				text: '$F(v) = \\frac{aB}{R} V_0; v = \\frac{3V_0}{4aBm}$',
				number: QuestionAlternative.C
			},
			{
				text: '$F(v) = -\\frac{aB}{R} (aBv); v = \\frac{V_0}{4aB}$',
				number: QuestionAlternative.D
			},
			{
				text: '$F(v) = \\frac{aB}{R} (V_0 - aBv); v = \\frac{V_0}{4aBm}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 7,
		statement: {
			text: 'Uma barra condutora, de comprimento $L$, resistência elétrica $r$ e massa $M$, pode deslizar sem atrito sobre um par de trilhos condutores paralelos e horizontais de resistência elétrica desprezível (veja a figura). Um campo magnético $B$ é perpendicular ao plano dos trilhos e a barra encontra-se inicialmente em repouso ($v_i = 0$). Uma bateria de força eletromotriz $\\varphi_0$ e resistência interna nula é conectada entre os dois trilhos no instante $t = 0$, gerando uma corrente inicial $i_0$. Pede-se:<br/><ul><li>i) a força $F(v)$ que age sobre a barra em função da sua velocidade $v$;</li><li>ii) a velocidade $v$ da barra quando a corrente for igual a $1/5$ do seu valor inicial, ou seja, quando $i = i_0/5$.</li></ul>',
			image: '2025-1/em-7b.webp'
		},
		alternatives: [
			{
				text: '$F(v) = \\frac{LB}{r} (\\varphi_0 - LBv); v = \\frac{4\\varphi_0}{5LB}$',
				number: QuestionAlternative.A
			},
			{
				text: '$F(v) = \\frac{LB}{r} (\\varphi_0 + LBv); v = \\frac{4\\varphi_0}{5LB}$',
				number: QuestionAlternative.B
			},
			{
				text: '$F(v) = \\frac{LB}{r} \\varphi_0; v = \\frac{4\\varphi_0}{5LBM}$',
				number: QuestionAlternative.C
			},
			{
				text: '$F(v) = -\\frac{LB}{r} (LBv); v = \\frac{4\\varphi_0}{5LB}$',
				number: QuestionAlternative.D
			},
			{
				text: '$F(v) = \\frac{LB}{r} (\\varphi_0 - LBv); v = \\frac{4\\varphi_0}{5LBM}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 8,
		statement: {
			text: 'Radiação eletromagnética monocromática, de intensidade uniforme, incide perpendicularmente sobre uma placa metálica polida de formato quadrado e de área $A = b^2$. A placa reflete 80% da intensidade da radiação incidente e absorve o restante na superfície. Os campos elétrico e magnético da radiação incidente são dados, respectivamente, pelas partes reais das seguintes expressões: $E(z,t) = E_0e^{-i(\\omega t - kz)}\\hat{x}$ e $B(z,t) = (E_0/c)e^{-i(\\omega t - kz)}\\hat{y}$. Qual é a força que a radiação exerce sobre a placa metálica?'
		},
		alternatives: [
			{
				text: '$F_{rad} = 0,9 \\frac{E_0^2}{\\mu_0 c^2} b^2 \\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$F_{rad} = 0,6 \\frac{E_0^2}{\\mu_0 c^2} b^2 \\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$F_{rad} = 0,5 \\frac{E_0^2}{\\mu_0 c^2} b^2 \\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$F_{rad} = 0,7 \\frac{E_0^2}{\\mu_0 c^2} b^2 \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$F_{rad} = 0,2 \\frac{E_0^2}{\\mu_0 c^2} b^2 \\hat{z}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=fzvH_VDwHvQ'
		},
		questionNumber: 8,
		statement: {
			text: 'Radiação eletromagnética monocromática, de intensidade uniforme, incide perpendicularmente sobre uma placa metálica polida de formato circular e de área $A = \\pi R^2$. A placa reflete 60% da intensidade da radiação incidente e absorve o restante na superfície. Os campos elétrico e magnético da radiação incidente são dados, respectivamente, pelas partes reais das seguintes expressões: $E(z,t) = E_0e^{-i(\\omega t - kz)}\\hat{x}$ e $B(z,t) = (E_0/c)e^{-i(\\omega t - kz)}\\hat{y}$. Qual é a força que a radiação exerce sobre a placa metálica?'
		},
		alternatives: [
			{
				text: '$F_{rad} = 0,8 \\frac{E_0^2}{\\mu_0 c^2} (\\pi R^2) \\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$F_{rad} = 0,7 \\frac{E_0^2}{\\mu_0 c^2} (\\pi R^2) \\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$F_{rad} = 0,5 \\frac{E_0^2}{\\mu_0 c^2} (\\pi R^2) \\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$F_{rad} = 0,4 \\frac{E_0^2}{\\mu_0 c^2} (\\pi R^2) \\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$F_{rad} = 0,2 \\frac{E_0^2}{\\mu_0 c^2} (\\pi R^2) \\hat{z}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma bomba de energia de repouso $E_0$ explode e se fragmenta em três partes iguais. Os momentos dos fragmentos ejetados são, em módulo, todos iguais a $p$. Depois de algum tempo os fragmentos perdem energia cinética e param. Qual é a energia de repouso total dos fragmentos? Suponha que a explosão seja totalmente devida à conversão de energia de repouso em energia cinética.'
		},
		alternatives: [
			{
				text: '$\\sqrt{E_0^2 - (3pc)^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{E_0^2 + 9p^2c^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$3\\sqrt{p^2c^2 + E_0^2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$3(gamma - 1)E_0$, onde $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ e $\\gamma E_0 v = pc^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$3\\gamma E_0$, onde $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ e $\\gamma E_0 v = pc^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 1,
		statement: {
			text: 'Uma bomba de energia de repouso $E_0$ explode e se fragmenta em quatro partes iguais. Os momentos dos fragmentos ejetados são, em módulo, todos iguais a $p$. Depois de algum tempo os fragmentos perdem energia cinética e param. Qual é a energia de repouso total dos fragmentos? Suponha que a explosão seja totalmente devida à conversão de energia de repouso em energia cinética.'
		},
		alternatives: [
			{
				text: '$\\sqrt{E_0^2 - (4pc)^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{E_0^2 + 16p^2c^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$4\\sqrt{p^2c^2 + E_0^2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$4(gamma - 1)E_0$, onde $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ e $\\gamma E_0 v = pc^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$4\\gamma E_0$, onde $\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}$ e $\\gamma E_0 v = pc^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 2,
		statement: {
			text: 'Sabe-se que um certo elemento radiativo de massa molar $M_A$ decai apenas por decaimento alfa. Uma amostra pura desse elemento, com massa $m$, emite $R$ partículas alfa por unidade de tempo. Sendo $N_A$ a constante de Avogadro, qual é a vida média desse elemento?'
		},
		alternatives: [
			{
				text: '$\\tau = \\frac{mN_A}{RM_A}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\tau = \\frac{1}{R} \\ln{(\\frac{mN_A}{M_A})}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\tau = \\frac{1}{R} \\exp{(\\frac{mN_A}{M_A})}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\tau = \\frac{1}{R} \\exp{(-\\frac{mN_A}{M_A})}$',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há elementos suficientes para responder a essa pergunta.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 2,
		statement: {
			text: 'Sabe-se que um certo elemento radiativo de massa molar $M_A$ decai apenas por decaimento alfa. Uma amostra pura desse elemento, com massa $m$, emite $R$ partículas alfa por unidade de tempo. Sendo $\\tau$ a vida média desse elemento, qual seria a estimativa da constante de Avogadro utilizando esses dados?'
		},
		alternatives: [
			{
				text: '$N_A = \\frac{RM_A}{m}\\tau$',
				number: QuestionAlternative.A
			},
			{
				text: '$N_A = R\\tau \\ln{(\\frac{M_A}{m})}$',
				number: QuestionAlternative.B
			},
			{
				text: '$N_A = R\\tau \\exp{(\\frac{M_A}{m})}$',
				number: QuestionAlternative.C
			},
			{
				text: '$N_A = R\\tau \\exp{(-\\frac{M_A}{m})}$',
				number: QuestionAlternative.D
			},
			{
				text: 'Não há elementos suficientes para responder a essa pergunta.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma molécula diatômica é composta por duas partículas pontuais idênticas de massa $m$ separadas por uma distância $d$. Suponha que a molécula está inicialmente em repouso e em seu estado fundamental. Qual é a energia <strong>rotacional</strong> da molécula após absorver um fóton de frequência $f$, supondo que o momento angular é conservado no processo? (A constante de Planck é $h$, com $\\hbar = h/2\\pi$, e $c$ é a velocidade da luz no vácuo.)'
		},
		alternatives: [
			{
				text: '$\\frac{2\\hbar^2}{md^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{1}{2m} (\\frac{hf}{c})^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\hbar c}{d}$',
				number: QuestionAlternative.C
			},
			{
				text: '$hf$',
				number: QuestionAlternative.D
			},
			{
				text: '$2mc^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 3,
		statement: {
			text: 'Uma molécula diatômica é composta por duas partículas pontuais idênticas de massa $m$ separadas por uma distância $d$. Suponha que a molécula está inicialmente em repouso e em seu estado fundamental. Qual é a energia <strong>rotacional</strong> da molécula após absorver dois fótons de frequência $f$, supondo que o momento angular é conservado no processo? (A constante de Planck é $h$, com $\\hbar = h/2\\pi$, e $c$ é a velocidade da luz no vácuo.)'
		},
		alternatives: [
			{
				text: '$\\frac{6\\hbar^2}{md^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{1}{m} (\\frac{hf}{c})^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$2\\frac{\\hbar c}{d}$',
				number: QuestionAlternative.C
			},
			{
				text: '$2hf$',
				number: QuestionAlternative.D
			},
			{
				text: '$2mc^2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 4,
		statement: {
			text: 'O gráfico mostra a energia $E$ (medida em relação à energia da molécula dissociada) de uma determinada molécula como função do número $N$ de elétrons nela contidos. A respeito dessa molécula, considere as afirmações abaixo.<br/><br/><ul><li>I. O estado fundamental da molécula tem 49 elétrons.</li><li>II. O estado fundamental da molécula tem 45 elétrons.</li><li>III. O estado fundamental da molécula tem 55 elétrons.</li><li>IV. O estado fundamental da molécula é degenerado, possuindo de 45 a 55 elétrons.</li></ul><br/><br/>Assinale a alternativa correta.',
			image: '2025-1/fm-4a.webp'
		},
		alternatives: [
			{
				text: 'A única afirmação correta é a I.',
				number: QuestionAlternative.A
			},
			{
				text: 'A única afirmação correta é a II.',
				number: QuestionAlternative.B
			},
			{
				text: 'A única afirmação correta é a III.',
				number: QuestionAlternative.C
			},
			{
				text: 'A única afirmação correta é a IV.',
				number: QuestionAlternative.D
			},
			{
				text: 'Nenhuma das afirmações é correta.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 4,
		statement: {
			text: 'O gráfico mostra a energia $E$ (medida em relação à energia da molécula dissociada) de uma determinada molécula como função do número $N$ de elétrons nela contidos. A respeito dessa molécula, considere as afirmações abaixo.<br/><br/><ul><li>I. O estado fundamental da molécula tem 56 elétrons.</li><li>II. O estado fundamental da molécula tem 50 elétrons.</li><li>III. O estado fundamental da molécula tem 60 elétrons.</li><li>IV. O estado fundamental da molécula é degenerado, possuindo de 50 a 60 elétrons.</li></ul><br/><br/>Assinale a alternativa correta.',
			image: '2025-1/fm-4b.webp'
		},
		alternatives: [
			{
				text: 'A única afirmação correta é a I.',
				number: QuestionAlternative.A
			},
			{
				text: 'A única afirmação correta é a II.',
				number: QuestionAlternative.B
			},
			{
				text: 'A única afirmação correta é a III.',
				number: QuestionAlternative.C
			},
			{
				text: 'A única afirmação correta é a IV.',
				number: QuestionAlternative.D
			},
			{
				text: 'Nenhuma das afirmações é correta.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 5,
		statement: {
			text: 'O planeta $B$ se encontra a uma distância de 20 anos-luz da Terra. Se uma espaçonave demora 20 anos em seu próprio referencial para ir da Terra ao planeta $B$ com velocidade constante, qual a velocidade da espaçonave em relação à Terra?'
		},
		alternatives: [
			{
				text: '$c\\sqrt{2}/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$c$',
				number: QuestionAlternative.B
			},
			{
				text: '$c\\sqrt{2}/5$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,6c$',
				number: QuestionAlternative.D
			},
			{
				text: '$0,8c$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 5,
		statement: {
			text: 'O planeta $B$ se encontra a uma distância de 10 anos-luz da Terra. Se uma espaçonave demora 20 anos em seu próprio referencial para ir da Terra ao planeta $B$ com velocidade constante, qual a velocidade da espaçonave em relação à Terra?'
		},
		alternatives: [
			{
				text: '$c\\sqrt{5}/5$',
				number: QuestionAlternative.A
			},
			{
				text: '$c/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$0,6c$',
				number: QuestionAlternative.C
			},
			{
				text: '$0,8c$',
				number: QuestionAlternative.D
			},
			{
				text: '$c\\sqrt{5}/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 6,
		statement: {
			text: 'Um satélite se afasta da Terra com uma velocidade constante de $0,60c$. Em seu próprio referencial, o satélite emite um sinal de rádio a cada 2,0 s em direção a um observatório na Terra. Qual o período do sinal medido pelo observatório?'
		},
		alternatives: [
			{
				text: '4,0 s',
				number: QuestionAlternative.A
			},
			{
				text: '2,0 s',
				number: QuestionAlternative.B
			},
			{
				text: '8,0 s',
				number: QuestionAlternative.C
			},
			{
				text: '1,0 s',
				number: QuestionAlternative.D
			},
			{
				text: '3,0 s',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 6,
		statement: {
			text: 'Um satélite se afasta da Terra com uma velocidade constante de $0,80c$. Em seu próprio referencial, o satélite emite um sinal de rádio a cada 2,0 s em direção a um observatório na Terra. Qual o período do sinal medido pelo observatório?'
		},
		alternatives: [
			{
				text: '6,0 s',
				number: QuestionAlternative.A
			},
			{
				text: '2,0 s',
				number: QuestionAlternative.B
			},
			{
				text: '18,0 s',
				number: QuestionAlternative.C
			},
			{
				text: '0,66 s',
				number: QuestionAlternative.D
			},
			{
				text: '3,0 s',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 7,
		statement: {
			text: 'De acordo com o modelo de Bohr para o átomo de hidrogênio, qual a razão entre os módulos das velocidades do elétron na primeira órbita de Bohr, $v_1$, e na segunda órbita de Bohr, $v_2$, ou seja, $v_1/v_2$?'
		},
		alternatives: [
			{
				text: '$2$',
				number: QuestionAlternative.A
			},
			{
				text: '$4$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 7,
		statement: {
			text: 'De acordo com o modelo de Bohr para o átomo de hidrogênio, qual a razão entre os módulos das velocidades do elétron na primeira órbita de Bohr, $v_1$, e na terceira órbita de Bohr, $v_3$, ou seja, $v_1/v_3$?'
		},
		alternatives: [
			{
				text: '$3$',
				number: QuestionAlternative.A
			},
			{
				text: '$9$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 8,
		statement: {
			text: 'Em um experimento de efeito fotoelétrico, os elétrons são ejetados de um metal apenas se ele for iluminado com ondas eletromagnéticas de comprimentos de onda menores que $300 nm$. Se iluminarmos a mesma superfície metálica com fótons de energia $5,0 eV$, qual o potencial de corte da corrente fotoelétrica, ou seja, a menor diferença de potencial capaz de parar os fotoelétrons de maior energia cinética?'
		},
		alternatives: [
			{
				text: '$0,90 V$',
				number: QuestionAlternative.A
			},
			{
				text: '$6,0 V$',
				number: QuestionAlternative.B
			},
			{
				text: '$8,0 V$',
				number: QuestionAlternative.C
			},
			{
				text: '$10 V$',
				number: QuestionAlternative.D
			},
			{
				text: '$5,0 V$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=0aUTs193Jqc'
		},
		questionNumber: 8,
		statement: {
			text: 'Em um experimento de efeito fotoelétrico, os elétrons são ejetados de um metal apenas se ele for iluminado com ondas eletromagnéticas de comprimentos de onda menores que $400 nm$. Se iluminarmos a mesma superfície metálica com fótons de energia $5,0 eV$, qual o potencial de corte da corrente fotoelétrica, ou seja, a menor diferença de potencial capaz de parar os fotoelétrons de maior energia cinética?'
		},
		alternatives: [
			{
				text: '$1,9 V$',
				number: QuestionAlternative.A
			},
			{
				text: '$8,0 V$',
				number: QuestionAlternative.B
			},
			{
				text: '$9,0 V$',
				number: QuestionAlternative.C
			},
			{
				text: '$10 V$',
				number: QuestionAlternative.D
			},
			{
				text: '$5,0 V$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 1,
		statement: {
			text: 'Na figura, os painéis $(a)$, $(b)$ e $(c)$ apresentam formas específicas de potenciais $V(x)$ aos quais pode estar sujeita uma partícula que se move em uma dimensão espacial $x$. Os painéis $(1)$, $(2)$ e $(3)$ apresentam possíveis autofunções de energia $\\psi(x)$ para a partícula, cada autofunção resultando de um dos potenciais. A associação correta entre $V(x)$ e $\\psi(x)$ é:',
			image: '2025-1/mq-1a.webp'
		},
		alternatives: [
			{
				text: '(a)-(2), (b)-(3), (c)-(1)',
				number: QuestionAlternative.A
			},
			{
				text: '(a)-(2), (b)-(1), (c)-(3)',
				number: QuestionAlternative.B
			},
			{
				text: '(a)-(1), (b)-(2), (c)-(3)',
				number: QuestionAlternative.C
			},
			{
				text: '(a)-(1), (b)-(3), (c)-(2)',
				number: QuestionAlternative.D
			},
			{
				text: '(a)-(3), (b)-(1), (c)-(2)',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 1,
		statement: {
			text: 'Na figura, os painéis $(a)$, $(b)$ e $(c)$ apresentam formas específicas de potenciais $V(x)$ aos quais pode estar sujeita uma partícula que se move em uma dimensão espacial $x$. Os painéis $(1)$, $(2)$ e $(3)$ apresentam possíveis autofunções de energia $\\psi(x)$ para a partícula, cada autofunção resultando de um dos potenciais. A associação correta entre $V(x)$ e $\\psi(x)$ é:',
			image: '2025-1/mq-1b.webp'
		},
		alternatives: [
			{
				text: '(a)-(2), (b)-(1), (c)-(3)',
				number: QuestionAlternative.A
			},
			{
				text: '(a)-(2), (b)-(3), (c)-(1)',
				number: QuestionAlternative.B
			},
			{
				text: '(a)-(1), (b)-(2), (c)-(3)',
				number: QuestionAlternative.C
			},
			{
				text: '(a)-(1), (b)-(3), (c)-(2)',
				number: QuestionAlternative.D
			},
			{
				text: '(a)-(3), (b)-(1), (c)-(2)',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula de massa $m$ está confinada em um poço de potencial infinito unidimensional com fronteiras em $x = 0 $e $x = L$. A equação de Schrödinger independente do tempo dentro do poço é<br/><br/>$$-\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi(x)}{dx^2} = E \\psi(x) \\space \\text{,}$$<br/>com as condições de contorno $\\psi(0) = \\psi(L) = 0$ para a autofunção de energia $\\psi(x)$ com energia $E$. Supondo que a partícula esteja no estado fundamental, assinale a alternativa que contém a probabilidade de encontrá-la na região $0 \\leq x \\leq L/4$. Dica: consulte o formulário.'
		},
		alternatives: [
			{
				text: '$1/4 - 1/(2\\pi)$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/4 + 1/(2\\pi)$',
				number: QuestionAlternative.B
			},
			{
				text: '$-1/4 + 1/(2\\pi)$',
				number: QuestionAlternative.C
			},
			{
				text: '$-1/4 - 1/(2\\pi)$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula de massa $m$ está confinada em um poço de potencial infinito unidimensional com fronteiras em $x = 0 $e $x = L$. A equação de Schrödinger independente do tempo dentro do poço é<br/><br/>$$-\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi(x)}{dx^2} = E \\psi(x) \\space \\text{,}$$<br/>com as condições de contorno $\\psi(0) = \\psi(L) = 0$ para a autofunção de energia $\\psi(x)$ com energia $E$. Supondo que a partícula esteja no estado fundamental, assinale a alternativa que contém a probabilidade de encontrá-la na região $0 \\leq x \\leq 3L/4$. Dica: consulte o formulário.'
		},
		alternatives: [
			{
				text: '$3/4 + 1/(2\\pi)$',
				number: QuestionAlternative.A
			},
			{
				text: '$3/4 - 1/(2\\pi)$',
				number: QuestionAlternative.B
			},
			{
				text: '$-3/4 + 1/(2\\pi)$',
				number: QuestionAlternative.C
			},
			{
				text: '$-3/4 - 1/(2\\pi)$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 3,
		statement: {
			text: 'Os operadores de spin $S_{x,y,z}$ de uma partícula de spin $1/2$ admitem a seguinte representação matricial:<br/><br/>$$S_x = \\frac{\\hbar}{2} \\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix} \\text{,} \\quad S_y = \\frac{\\hbar}{2} \\begin{bmatrix}0 & -i \\\\ i & 0\\end{bmatrix} \\text{,} \\quad S_z = \\frac{\\hbar}{2} \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$<br/>Sejam $\\ket{+}$ e $\\ket{-}$ os autoestados de $S_z$ com autovalores $+\\hbar/2$ e $−\\hbar/2$, respectivamente. <strong>Complete as sentenças a seguir</strong>. A aplicação de $S_x$ sobre $\\ket{+}$ resulta em ____________. Logo, o valor esperado de $S_x$ para uma partícula de spin $1/2$ que esteja no estado $\\ket{+}$ é ____________.'
		},
		alternatives: [
			{
				text: '$(\\hbar/2)\\ket{-}, 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\hbar/2)\\ket{-}, \\hbar/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\hbar/2)\\ket{+}, 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\hbar/2)\\ket{+}, \\hbar/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\hbar/2)(\\ket{+} + \\ket{-}), \\hbar/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 3,
		statement: {
			text: 'Os operadores de spin $S_{x,y,z}$ de uma partícula de spin $1/2$ admitem a seguinte representação matricial:<br/><br/>$$S_x = \\frac{\\hbar}{2} \\begin{bmatrix}0 & 1 \\\\ 1 & 0\\end{bmatrix} \\text{,} \\quad S_y = \\frac{\\hbar}{2} \\begin{bmatrix}0 & -i \\\\ i & 0\\end{bmatrix} \\text{,} \\quad S_z = \\frac{\\hbar}{2} \\begin{bmatrix}1 & 0 \\\\ 0 & -1\\end{bmatrix}$$<br/>Sejam $\\ket{+}$ e $\\ket{-}$ os autoestados de $S_z$ com autovalores $+\\hbar/2$ e $−\\hbar/2$, respectivamente. <strong>Complete as sentenças a seguir</strong>. A aplicação de $S_x$ sobre $\\ket{-}$ resulta em ____________. Logo, o valor esperado de $S_x$ para uma partícula de spin $1/2$ que esteja no estado $\\ket{-}$ é ____________.'
		},
		alternatives: [
			{
				text: '$(\\hbar/2)\\ket{+}, 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$(\\hbar/2)\\ket{+}, \\hbar/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$(\\hbar/2)\\ket{-}, 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$(\\hbar/2)\\ket{-}, \\hbar/2$',
				number: QuestionAlternative.D
			},
			{
				text: '$(\\hbar/2)(\\ket{+} + \\ket{-}), \\hbar/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 4,
		statement: {
			text: 'Atribua $V$ para as afirmações verdadeiras e $F$ para as falsas.<br/><br/><ul><li>( ) Ao fazermos sucessivas medidas de duas quantidades físicas em um certo sistema quântico, descobrimos que existe um limite inferior para o produto das incertezas nessas medidas, não importando o cuidado com que sejam realizadas. Neste caso, é correto concluir que os operadores quânticos que representam as quantidades físicas medidas não comutam.</li><li>( ) Considere a seguinte sequência de três medidas em um sistema quântico: primeiro medimos uma quantidade física $A$, em seguida medimos uma quantidade física $B$, e depois medimos $A$ novamente. Para uma quantidade física $B$ qualquer, as duas medidas de $A$ necessariamente retornarão o mesmo resultado.</li><li>( ) No átomo de hidrogênio, a energia, o módulo quadrado do momento angular e a componente z do momento angular são quantidades físicas compatíveis, ou seja, os respectivos operadores quânticos comutam entre si. Sendo assim, idealmente, não existe limite intrínseco para a precisão com que as referidas quantidades físicas podem ser simultaneamente conhecidas em um átomo de hidrogênio.</li></ul><br/><br/>A sequência correta é:'
		},
		alternatives: [
			{
				text: 'V, F, V',
				number: QuestionAlternative.A
			},
			{
				text: 'V, V, F',
				number: QuestionAlternative.B
			},
			{
				text: 'F, F, V',
				number: QuestionAlternative.C
			},
			{
				text: 'F, V, F',
				number: QuestionAlternative.D
			},
			{
				text: 'V, F, F',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 4,
		statement: {
			text: 'Atribua V para as afirmações verdadeiras e F para as falsas.<br/><br/><ul><li>( ) Ao fazermos sucessivas medidas de duas quantidades físicas em um certo sistema quântico, descobrimos que o produto das incertezas nessas medidas pode ser arbitrariamente reduzido melhorando-se a qualidade das medidas. Neste caso, é correto concluir que os operadores quânticos que representam as quantidades físicas medidas não comutam.</li><li>( ) Considere a seguinte sequência de três medidas em um sistema quântico: primeiro medimos uma quantidade física $A$, em seguida medimos uma quantidade física $B$, e depois medimos $A$ novamente. Para uma quantidade física $B$ qualquer, as duas medidas de $A$ não necessariamente retornarão o mesmo resultado.</li><li>( ) No átomo de hidrogênio, a energia, o módulo quadrado do momento angular e a componente z do momento angular são quantidades físicas compatíveis, ou seja, os respectivos operadores quânticos comutam entre si. Sendo assim, existe um limite intrínseco para a precisão com que as referidas quantidades físicas podem ser simultaneamente conhecidas em um átomo de hidrogênio.</li></ul><br/><br/>A sequência correta é:'
		},
		alternatives: [
			{
				text: 'F, V, F',
				number: QuestionAlternative.A
			},
			{
				text: 'F, F, V',
				number: QuestionAlternative.B
			},
			{
				text: 'V, V, F',
				number: QuestionAlternative.C
			},
			{
				text: 'V, F, V',
				number: QuestionAlternative.D
			},
			{
				text: 'F, V, V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 5,
		statement: {
			text: 'Seja $\\psi(x)$ uma autofunção de energia normalizada, que descreve o estado uma partícula em um certo sistema quântico unidimensional. Qual é a probabilidade de encontrarmos um valor no intervalo $−a/3 \\lt x \\lt a/3$ em uma medida da posição da partícula? Aqui, $a$ é uma constante com unidades de comprimento.'
		},
		alternatives: [
			{
				text: '$\\int_{-a/3}^{a/3} |\\psi(x)|^2 dx$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\int_{-a/3}^{a/3} |\\psi(x)| dx$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\int_{-a/3}^{a/3} x|\\psi(x)|^2 dx$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\int_{-\\infty}^{\\infty} |\\psi(x)|^2 dx$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\int_{-\\infty}^{\\infty} x|\\psi(x)|^2 dx$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 5,
		statement: {
			text: 'Seja $\\psi(x)$ uma autofunção de energia normalizada, que descreve o estado uma partícula em um certo sistema quântico unidimensional. Qual é a probabilidade de encontrarmos um valor no intervalo $−a/2 \\lt x \\lt a/2$ em uma medida da posição da partícula? Aqui, $a$ é uma constante com unidades de comprimento.'
		},
		alternatives: [
			{
				text: '$\\int_{-a/2}^{a/2} |\\psi(x)|^2 dx$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\int_{-a/2}^{a/2} |\\psi(x)| dx$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\int_{-a/2}^{a/2} x|\\psi(x)|^2 dx$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\int_{-\\infty}^{\\infty} |\\psi(x)|^2 dx$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\int_{-\\infty}^{\\infty} x|\\psi(x)|^2 dx$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ move-se em uma dimensão sob a ação de um potencial $V(x)$. Esse potencial é do tipo caixa, sendo zero no intervalo $−a/2 \\leq x \\leq a/2$ e infinito fora dele:<br/><br/>$$V(x) = \\begin{cases}0, & -a/2 \\leq x \\leq a/2 \\\\ \\infty, & |x| \\gt a/2\\end{cases}$$<br/>Aqui, $x$ é a posição da partícula. Denotando por $H$ o hamiltoniano do sistema, por $E_n$ os possíveis autovalores de energia e por $\\ket{n}$ os respectivos autovetores, temos que $H\\ket{n} = E_n\\ket{n}$, com $E_n = n^2 \\pi^2 \\hbar^2 / 2m^2 a^2$ . Supondo que o vetor de estado normalizado dessa partícula no instante $t = 0$ é $\\ket{\\psi(0)} = c_1\\ket{1} + c_2\\ket{2} + c_3\\ket{3} + c_4\\ket{4}$, em que $c_n$ são constantes, qual é a probabilidade de obter um valor menor que $6\\pi^2 \\hbar^2 / m^2 a^2$ em uma medida da energia da partícula nesse instante?'
		},
		alternatives: [
			{
				text: '$1 - |c_4|^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$1 - |c_4|^2 - |c_3|^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$1 - |c_4|^2 - |c_3|^2 - |c_2|^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
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
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 6,
		statement: {
			text: 'Uma partícula de massa $m$ move-se em uma dimensão sob a ação de um potencial $V(x)$. Esse potencial é do tipo caixa, sendo zero no intervalo $−a/2 \\leq x \\leq a/2$ e infinito fora dele:<br/><br/>$$V(x) = \\begin{cases}0, & -a/2 \\leq x \\leq a/2 \\\\ \\infty, & |x| \\gt a/2\\end{cases}$$<br/>Aqui, $x$ é a posição da partícula. Denotando por $H$ o hamiltoniano do sistema, por $E_n$ os possíveis autovalores de energia e por $\\ket{n}$ os respectivos autovetores, temos que $H\\ket{n} = E_n\\ket{n}$, com $E_n = n^2 \\pi^2 \\hbar^2 / 2m^2 a^2$ . Supondo que o vetor de estado normalizado dessa partícula no instante $t = 0$ é $\\ket{\\psi(0)} = c_1\\ket{1} + c_2\\ket{2} + c_3\\ket{3} + c_4\\ket{4}$, em que $c_n$ são constantes, qual é a probabilidade de obter um valor menor que $3\\pi^2 \\hbar^2 / m^2 a^2$ em uma medida da energia da partícula nesse instante?'
		},
		alternatives: [
			{
				text: '$1 - |c_4|^2 - |c_3|^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$1 - |c_4|^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$1 - |c_4|^2 - |c_3|^2 - |c_2|^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
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
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de Hilbert é bidimensional. Sejam $\\ket{1}$ e $\\ket{2}$ dois estados que formam uma base ortonormal nesse espaço, na qual o hamiltoniano é escrito na forma<br/><br/>$$H = \\hbar\\omega (\\ket{1}\\bra{1} - \\ket{2}\\bra{2}) \\space \\text{.}$$<br/>Seja $A$ um observável do sistema, que nessa base assume a forma<br/><br/>$$A = a (\\ket{1}\\bra{2} + \\ket{2}\\bra{1}) \\space \\text{,}$$<br/>em que $a$ é uma constante real, com dimensões físicas apropriadas. Se no instante $t = 0$ o sistema se encontra no estado<br/><br/>$$\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}}\\ket{1} + \\frac{1}{\\sqrt{2}}\\ket{2} \\space \\text{,}$$<br/>qual será o valor esperado $\\langle A\\rangle (t)$?'
		},
		alternatives: [
			{
				text: '$a \\cos{(2\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$-a \\cos{(2\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$a \\sin{(2\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$-a \\sin{(2\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$a \\cos^2{(2\\omega t)}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 7,
		statement: {
			text: 'Considere um sistema quântico cujo espaço de Hilbert é bidimensional. Sejam $\\ket{1}$ e $\\ket{2}$ dois estados que formam uma base ortonormal nesse espaço, na qual o hamiltoniano é escrito na forma<br/><br/>$$H = \\hbar\\omega (\\ket{1}\\bra{1} - \\ket{2}\\bra{2}) \\space \\text{.}$$<br/>Seja $A$ um observável do sistema, que nessa base assume a forma<br/><br/>$$A = a (\\ket{1}\\bra{2} + \\ket{2}\\bra{1}) \\space \\text{,}$$<br/>em que $a$ é uma constante real, com dimensões físicas apropriadas. Se no instante $t = 0$ o sistema se encontra no estado<br/><br/>$$\\ket{\\psi(0)} = \\frac{1}{\\sqrt{2}}\\ket{1} - \\frac{1}{\\sqrt{2}}\\ket{2} \\space \\text{,}$$<br/>qual será o valor esperado $\\langle A\\rangle (t)$?'
		},
		alternatives: [
			{
				text: '$-a \\cos{(2\\omega t)}$',
				number: QuestionAlternative.A
			},
			{
				text: '$a \\cos{(2\\omega t)}$',
				number: QuestionAlternative.B
			},
			{
				text: '$a \\sin{(2\\omega t)}$',
				number: QuestionAlternative.C
			},
			{
				text: '$-a \\sin{(2\\omega t)}$',
				number: QuestionAlternative.D
			},
			{
				text: '$-a \\cos^2{(2\\omega t)}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 8,
		statement: {
			text: 'Seja $\\{\\ket{n}\\}$ um conjunto de autofunções reais e ortonormais de um hamiltoniano $\\hat{H}$ em uma dimensão, correspondentes aos autovalores de energia $E_n$. Seja $\\hat{p}$ o operador momento linear. Qual (ou quais) das seguintes afirmações deve ser sempre verdadeira?<br/><br/><ul><li>I. $\\braket{m|n} \\neq 0$</li><li>II. $\\ket{n}$ é uma autofunção de $\\hat{p}^2$</li><li>III. $\\braket{m|\\hat{H}|n} = \\delta_{mn}E_n$</li></ul>'
		},
		alternatives: [
			{
				text: 'Apenas III',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas I',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I e III',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas II e III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 8,
		statement: {
			text: 'Seja $\\{\\ket{n}\\}$ um conjunto de autofunções reais e ortonormais de um hamiltoniano $\\hat{H}$ em uma dimensão, correspondentes aos autovalores de energia $E_n$. Seja $\\hat{x}$ o operador posição. Qual (ou quais) das seguintes afirmações deve ser sempre verdadeira?<br/><br/><ul><li>I. $\\braket{m|n} \\neq 0$</li><li>II. $\\braket{m|\\hat{H}|n} = \\delta_{mn}E_n$</li><li>III. $\\ket{n}$ é uma autofunção de $\\hat{x}^2$</li></ul>'
		},
		alternatives: [
			{
				text: 'Apenas II',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas III',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas I',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I e II',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas II e III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 1,
		statement: {
			text: 'Um gás ideal, partindo de um estado de equilíbrio termodinâmico $a$, atinge outro estado de equilíbrio termodinâmico $b$ por meio de três processos termodinâmicos diferentes: expansão isotérmica, expansão adiabática e expansão livre. Denotando por $X_{a \\rarr b}$ o valor da variável termodinâmica $X$ ao longo da transformação $a \\rarr b$ ($X = Q$ para o calor trocado, $X = U$ para a variação da energia interna e $X = W$ para o trabalho realizado), considere as afirmativas a seguir.<br/><br/><ul><li>I. $Q_{a \\rarr b} = 0$ para a expansão isotérmica.</li><li>II. $U_{a \\rarr b} = 0$ para a expansão adiabática.</li><li>III. $W_{a \\rarr b} = 0$ para a expansão livre.</li><li>IV. $U_{a \\rarr b} = 0$ para as expansões isotérmica e livre.</li></ul><br/><br/>Somente são <strong>corretas</strong> as afirmações:'
		},
		alternatives: [
			{
				text: 'III e IV',
				number: QuestionAlternative.A
			},
			{
				text: 'I e II',
				number: QuestionAlternative.B
			},
			{
				text: 'II e III',
				number: QuestionAlternative.C
			},
			{
				text: 'I e IV',
				number: QuestionAlternative.D
			},
			{
				text: 'I, II e III',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 1,
		statement: {
			text: 'Um gás ideal, partindo de um estado de equilíbrio termodinâmico $a$, atinge outro estado de equilíbrio termodinâmico $b$ por meio de três processos termodinâmicos diferentes: expansão isotérmica, expansão adiabática e expansão livre. Denotando por $X_{a \\rarr b}$ o valor da variável termodinâmica $X$ ao longo da transformação $a \\rarr b$ ($X = Q$ para o calor trocado, $X = U$ para a variação da energia interna e $X = W$ para o trabalho realizado), considere as afirmativas a seguir.<br/><br/><ul><li>I. $Q_{a \\rarr b} = 0$ para a expansão isotérmica.</li><li>II. $U_{a \\rarr b} = 0$ para as expansões isotérmica e livre.</li><li>III. $U_{a \\rarr b} = 0$ para a expansão adiabática.</li><li>IV. $W_{a \\rarr b} = 0$ para a expansão livre.</li></ul><br/><br/>Somente são <strong>corretas</strong> as afirmações:'
		},
		alternatives: [
			{
				text: 'II e IV',
				number: QuestionAlternative.A
			},
			{
				text: 'I e II',
				number: QuestionAlternative.B
			},
			{
				text: 'II e III',
				number: QuestionAlternative.C
			},
			{
				text: 'I e IV',
				number: QuestionAlternative.D
			},
			{
				text: 'II, III e IV',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema isolado formado por dois corpos idênticos, com mesma capacidade térmica a volume constante, que depende linearmente da temperatura $T$ segundo a forma $C_v = BT$ (sendo $B \\gt 0$ uma quantidade constante). As temperaturas iniciais dos corpos são $T_0$ e $2T_0$. Eles são colocados em contato e, após certo tempo, atingem o estado de equilíbrio térmico. Desprezando variações de volume durante o processo, a temperatura de equilíbrio $T_{eq}$ neste caso é dada por:'
		},
		alternatives: [
			{
				text: '$T_{eq} = \\sqrt{\\frac{5}{2}}T_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$T_{eq} = \\frac{3T_0}{2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$T_{eq} = \\frac{\\sqrt{2}T_0}{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$T_{eq} = T_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$T_{eq} = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 2,
		statement: {
			text: 'Considere um sistema isolado formado por dois corpos idênticos, com mesma capacidade térmica a volume constante, que depende linearmente da temperatura $T$ segundo a forma $C_v = BT$ (sendo $B \\gt 0$ uma quantidade constante). As temperaturas iniciais dos corpos são $T_0$ e $3T_0$. Eles são colocados em contato e, após certo tempo, atingem o estado de equilíbrio térmico. Desprezando variações de volume durante o processo, a temperatura de equilíbrio $T_{eq}$ neste caso é dada por:'
		},
		alternatives: [
			{
				text: '$T_{eq} = \\sqrt{5}T_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$T_{eq} = 5T_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$T_{eq} = \\frac{\\sqrt{5}T_0}{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$T_{eq} = 2T_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$T_{eq} = T_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico ($C_v = 3R/2$ e $C_p = 5R/2$) submetido a um processo cíclico $A-B-C-A$, conforme ilustra a figura. A etapa $A-B$ é isocórica, a etapa $B-C$ é adiabática e a etapa $C-A$ é isobárica.<br/><br/>O volume $V_c$ e o trabalho realizado pelo gás ao longo da etapa $C-A$ valem, respectivamente:',
			image: '2025-1/te-3.webp'
		},
		alternatives: [
			{
				text: '$V_0 r^{3/5}$ e $P_0 V_0 (1 - r^{3/5})$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_0 r$ e $P_0 V_0 (1 - r)$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_0 r^{2/3}$ e $P_0 V_0 (1 - r^{2/3})$',
				number: QuestionAlternative.C
			},
			{
				text: '$2V_0$ e $-P_0 V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_0 r$ e $P_0 V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 3,
		statement: {
			text: 'Considere um mol de um gás ideal monoatômico ($C_v = 3R/2$ e $C_p = 5R/2$) submetido a um processo cíclico $A-B-C-A$, conforme ilustra a figura. A etapa $A-B$ é isocórica, a etapa $B-C$ é adiabática e a etapa $C-A$ é isobárica.<br/><br/>O volume $V_c$ e o calor trocado ao longo da etapa $C-A$ valem, respectivamente:',
			image: '2025-1/te-3.webp'
		},
		alternatives: [
			{
				text: '$V_0 r^{3/5}$ e $\\frac{5}{2} P_0 V_0 (1 - r^{3/5})$',
				number: QuestionAlternative.A
			},
			{
				text: '$V_0 r^{5/3}$ e $P_0 V_0 (1 - r^{5/3})$',
				number: QuestionAlternative.B
			},
			{
				text: '$V_0 r^{3/2}$ e $\\frac{3}{2} P_0 V_0 (1 - r^{2/3})$',
				number: QuestionAlternative.C
			},
			{
				text: '$2V_0$ e $0$',
				number: QuestionAlternative.D
			},
			{
				text: '$V_0 r^{3/5}$ e $\\frac{3}{2} P_0 V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere um sistema isolado composto por dois subsistemas com mesmo volume, separados por uma parede rígida, impermeável e adiabática. Cada subsistema possui o mesmo número de mols de um gás ideal de capacidade térmica $C_v$, encontrando-se em equilíbrio térmico, nas temperaturas iniciais $T_0$ e $4T_0$, respectivamente. A partir de um certo instante, a parede muda de adiabática para diatérmica, permitindo apenas a troca de calor entre os subsistemas, de tal forma que o sistema evolui para um novo estado de equilíbrio. A variação total de entropia $\\Delta{S}$ nesse processo vale:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{25}{16})}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = C_v \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{5}{2})}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{5}{4})}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=9uYRNLAXhbo'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere um sistema isolado composto por dois subsistemas com mesmo volume, separados por uma parede rígida, impermeável e adiabática. Cada subsistema possui o mesmo número de mols de um gás ideal de capacidade térmica $C_v$, encontrando-se em equilíbrio térmico, nas temperaturas iniciais $T_0$ e $2T_0$, respectivamente. A partir de um certo instante, a parede muda de adiabática para diatérmica, permitindo apenas a troca de calor entre os subsistemas, de tal forma que o sistema evolui para um novo estado de equilíbrio. A variação total de entropia $\\Delta{S}$ nesse processo vale:'
		},
		alternatives: [
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{9}{8})}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta{S} = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta{S} = C_v \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{3}{2})}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta{S} = C_v \\ln{(\\frac{4}{3})}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um sistema de $N$ partículas fracamente interagentes que obedecem à estatística de Maxwell-Boltzmann. Cada partícula tem acesso a 5 níveis não degenerados de energia: $−2E$, $−E$, $0$, $E$, $2E$, com $E \\gt 0$. O sistema está em contato com um reservatório térmico à temperatura $T$. A respeito desse sistema, podemos dizer que a energia média quando $T \\rarr 0$, a entropia quando $T \\rarr 0$ e a entropia quando $T \\rarr \\infty$ são respectivamente dadas por:'
		},
		alternatives: [
			{
				text: '$-2E$, $0$ e $Nk_B \\ln{5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$, $3Nk_B$ e $5Nk_B$',
				number: QuestionAlternative.B
			},
			{
				text: '$-2E$, $Nk_B$ e $3Nk_B$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$, $3Nk_B \\ln{5}$ e $Nk_B \\ln{5}$',
				number: QuestionAlternative.D
			},
			{
				text: '$-2E$, $0$ e $Nk_B \\ln{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 1,
		statement: {
			text: 'Considere um sistema de $N$ partículas fracamente interagentes que obedecem à estatística de Maxwell-Boltzmann. Cada partícula tem acesso a 3 níveis não degenerados de energia: $−E$, $0$, $E$, com $E \\gt 0$. O sistema está em contato com um reservatório térmico à temperatura $T$. A respeito desse sistema, podemos dizer que a energia média quando $T \\rarr 0$, a entropia quando $T \\rarr 0$ e a entropia quando $T \\rarr \\infty$ são respectivamente dadas por:'
		},
		alternatives: [
			{
				text: '$-E$, $0$ e $Nk_B \\ln{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$0$, $2Nk_B$ e $3Nk_B$',
				number: QuestionAlternative.B
			},
			{
				text: '$-E$, $Nk_B$ e $2Nk_B$',
				number: QuestionAlternative.C
			},
			{
				text: '$0$, $2Nk_B \\ln{3}$ e $Nk_B \\ln{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$-E$, $0$ e $Nk_B \\ln{2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula partindo de um ponto $A$ é atraída por um certo campo para o ponto $B$ em um reticulado com apenas 9 sítios, conforme a figura. A partícula salta apenas entre sítios que sejam vizinhos mais próximos. Contudo, devido ao efeito do campo, a partícula é impedida de saltar para baixo ou para o lado esquerdo, podendo apenas ir para o lado direito ($\\rarr$) ou subir ($\\uparrow$). Os saltos são executados a intervalos de tempo regulares, de modo que o trajeto de $A$ até $B$ necessariamente ocorrerá com 4 saltos no total, com 2 saltos para direita e 2 saltos para cima. Suponha que todas as trajetórias compatíveis com as regras anteriores sejam igualmente prováveis. Qual é a probabilidade de o trajeto passar pelo ponto $C$?',
			image: '2025-1/fe-2.webp'
		},
		alternatives: [
			{
				text: '$2/3$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/3$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/5$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 2,
		statement: {
			text: 'Uma partícula partindo de um ponto $A$ é atraída por um certo campo para o ponto $B$ em um reticulado com apenas 9 sítios, conforme a figura. A partícula salta apenas entre sítios que sejam vizinhos mais próximos. Contudo, devido ao efeito do campo, a partícula é impedida de saltar para baixo ou para o lado esquerdo, podendo apenas ir para o lado direito ($\\rarr$) ou subir ($\\uparrow$). Os saltos são executados a intervalos de tempo regulares, de modo que o trajeto de $A$ até $B$ necessariamente ocorrerá com 4 saltos no total, com 2 saltos para direita e 2 saltos para cima. Suponha que todas as trajetórias compatíveis com as regras anteriores sejam igualmente prováveis. Qual é a probabilidade de o trajeto passar pelo ponto $Q_1$?',
			image: '2025-1/fe-2.webp'
		},
		alternatives: [
			{
				text: '$1/6$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/3$',
				number: QuestionAlternative.C
			},
			{
				text: '$1$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 3,
		statement: {
			text: 'O modelo de Ising é um modelo fundamental em física estatística, estudado inicialmente por E. Ising, sob a supervisão de W. Lenz, na década de 1920. Em sua versão ferromagnética, os ions magnéticos vizinhos, de spin $1/2$, interagem entre si de acordo com um acoplamento $J$ constante e positivo, e o estado do $i$-ésimo spin é representado pela variável adimensional $s_i = \\pm 1$. Considere aqui a situação em que há apenas dois spins interagindo segundo o hamiltoniano<br/><br/>$${\\cal H} = -J_{s_1,s_2}$$<br/>em equilíbrio térmico com um reservatório à temperatura $T$. Nesta situação, sendo $\\beta = 1/(k_BT)$ e $k_B$ a constante de Boltzmann, qual é a probabilidade de observarmos o par de spins no estado $(s_1,s_2) = (+1, +1)$?'
		},
		alternatives: [
			{
				text: '$\\frac{e^{\\beta J}}{2(e^{\\beta J} + e^{-\\beta J})}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{e^{-\\beta J}}{e^{\\beta J} + e^{-\\beta J}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$e^{\\beta J}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2e^{-\\beta J}}{e^{\\beta J} + e^{-\\beta J}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{e^{-\\beta J}}{2(e^{\\beta J} + e^{-\\beta J})}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 3,
		statement: {
			text: 'O modelo de Ising é um modelo fundamental em física estatística, estudado inicialmente por E. Ising, sob a supervisão de W. Lenz, na década de 1920. Em sua versão ferromagnética, os ions magnéticos vizinhos, de spin $1/2$, interagem entre si de acordo com um acoplamento $J$ constante e positivo, e o estado do $i$-ésimo spin é representado pela variável adimensional $s_i = \\pm 1$. Considere aqui a situação em que há apenas dois spins interagindo segundo o hamiltoniano<br/><br/>$${\\cal H} = -J_{s_1,s_2}$$<br/>em equilíbrio térmico com um reservatório à temperatura $T$. Nesta situação, sendo $\\beta = 1/(k_BT)$ e $k_B$ a constante de Boltzmann, qual é a probabilidade de observarmos o par de spins no estado $(s_1,s_2) = (+1, -1)$?'
		},
		alternatives: [
			{
				text: '$\\frac{e^{-\\beta J}}{2(e^{\\beta J} + e^{-\\beta J})}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{e^{\\beta J}}{e^{\\beta J} + e^{-\\beta J}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$e^{-\\beta J}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2e^{\\beta J}}{e^{\\beta J} + e^{-\\beta J}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{e^{\\beta J}}{2(e^{\\beta J} + e^{-\\beta J})}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere uma coleção de $n$ sistemas distinguíveis de dois níveis, cada um constituído de uma única partícula. Nessa coleção, há inicialmente $n_1$ partículas no autoestado de energia $\\epsilon_1$ e $n_2$ partículas no autoestado de energia $\\epsilon_2$. Se ocorre uma única emissão quântica entre as populações, de forma que o número de partículas no autoestado $\\epsilon_1$ passa a ser $n_1 + 1$ e o número de partículas no autoestado $\\epsilon_2$ passa a ser $n_2 − 1$, a variação resultante na entropia microcanônica da coleção é:'
		},
		alternatives: [
			{
				text: '$k_B \\ln{\\frac{n_2}{(n_1 + 1)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$k_B$',
				number: QuestionAlternative.B
			},
			{
				text: '$k_B \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$k_B \\ln{\\frac{n_2}{n_1}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$k_B \\ln{\\frac{n_1}{(n_2 + 1)}}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		help: {
			youtubeUrl: 'https://www.youtube.com/watch?v=c-C2-bmVj8Y'
		},
		questionNumber: 4,
		statement: {
			text: 'Considere uma coleção de $n$ sistemas distinguíveis de dois níveis, cada um constituído de uma única partícula. Nessa coleção, há inicialmente $n_1$ partículas no autoestado de energia $\\epsilon_1$ e $n_2$ partículas no autoestado de energia $\\epsilon_2$. Se ocorre uma única emissão quântica entre as populações, de forma que o número de partículas no autoestado $\\epsilon_1$ passa a ser $n_1 - 1$ e o número de partículas no autoestado $\\epsilon_2$ passa a ser $n_2 + 1$, a variação resultante na entropia microcanônica da coleção é:'
		},
		alternatives: [
			{
				text: '$k_B \\ln{\\frac{n_1}{(n_2 + 1)}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$k_B$',
				number: QuestionAlternative.B
			},
			{
				text: '$k_B \\ln{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$k_B \\ln{\\frac{n_1}{n_2}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$k_B \\ln{\\frac{n_2}{(n_1 + 1)}}$',
				number: QuestionAlternative.E
			}
		]
	}
];
