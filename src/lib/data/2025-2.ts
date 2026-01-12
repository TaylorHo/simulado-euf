import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2025,
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
		questionNumber: 1,
		statement: {
			text: 'Em um plano inclinado há dois blocos: um descendo com velocidade inicial $v_1$ e outro subindo com velocidade inicial $v_2$. Os coeficientes de atrito entre os blocos e o plano inclinado são iguais a $\\mu = 2$, o ângulo de inclinação do plano em relação ao plano horizontal é igual a $\\pi/4$. Sendo que os blocos deslizam exatamente a mesma distância antes de pararem, qual a relação entre suas velocidades iniciais?'
		},
		alternatives: [
			{
				text: '$\\frac{v_1}{v_2} = \\sqrt{\\frac{1}{3}}$',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das outras alternativas.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{v_1}{v_2} = \\frac{1}{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{v_1}{v_2} = \\sqrt{\\frac{1}{2}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{v_1}{v_2} = \\frac{1}{2}$',
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
			text: 'Em um plano inclinado há dois blocos: um descendo com velocidade inicial $v_1$ e outro subindo com velocidade inicial $v_2$. Os coeficientes de atrito entre os blocos e o plano inclinado são iguais a $\\mu = 3/2$, o ângulo de inclinação do plano em relação ao plano horizontal é igual a $\\pi/4$. Sendo que os blocos deslizam exatamente a mesma distância antes de pararem, qual a relação entre suas velocidades iniciais?'
		},
		alternatives: [
			{
				text: '$\\frac{v_1}{v_2} = \\sqrt{\\frac{1}{5}}$',
				number: QuestionAlternative.A
			},
			{
				text: 'Nenhuma das outras alternativas.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{v_1}{v_2} = \\frac{1}{5}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{v_1}{v_2} = \\sqrt{\\frac{1}{3}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{v_1}{v_2} = \\frac{1}{3}$',
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
			text: 'Uma partícula de prova está em repouso sobre a superfície de um astro de densidade uniforme $\\rho$ e perfeitamente esférico de raio $R$. O astro começa a girar (com velocidade angular $\\omega$ aumentando muito lentamente) em torno de um eixo que passa por seu centro, com a partícula sobre o equador. Sendo $\\mu > 0$ o coeficiente de atrito entre essa partícula e o astro, e $G$ a constante da gravitação universal, qual a máxima velocidade angular de rotação que a partícula pode ter?'
		},
		alternatives: [
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{4\\pi\\rho G}{3}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_{\\max} = \\omega$. Como a velocidade angular aumenta muito lentamente e $\\mu > 0$, a máxima velocidade angular da partícula é a mesma do astro.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{4\\pi\\mu\\rho G}{3}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{4\\pi\\sqrt{1 + \\mu^2}\\rho G}{3}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{4\\pi|1 - \\mu^2|\\rho G}{3}}$',
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
			text: 'Uma partícula de prova está em repouso sobre a superfície de um astro de massa $M$ uniformemente distribuída em uma esfera de raio $R$. O astro começa a girar (com sua velocidade angular $\\omega$ aumentando muito lentamente) em torno de um eixo que passa por seu centro, com a partícula sobre o equador. Sendo $\\mu > 0$ o coeficiente de atrito entre essa partícula e o astro, e $G$ a constante da gravitação universal, qual a máxima velocidade angular de rotação que a partícula pode ter?'
		},
		alternatives: [
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{GM}{R^3}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\omega_{\\max} = \\omega$. Como a velocidade angular aumenta muito lentamente e $\\mu > 0$, a máxima velocidade angular da partícula é a mesma do astro.',
				number: QuestionAlternative.B
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{\\mu GM}{R^3}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{\\sqrt{1 + \\mu^2}GM}{R^3}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\omega_{\\max} = \\sqrt{\\frac{\\sqrt{|1 - \\mu^2|}GM}{R^3}}$',
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
			text: 'A figura (a) ilustra a força $F$ necessária para causar uma deformação $\\Delta x$ em uma mola nada convencional. Faz-se então um experimento em que se aplica uma força $F$ variável no tempo $(t)$ sobre essa mola, como ilustra a figura (b). (Os eixos verticais de ambas figuras estão na mesma escala.) Qual dos gráficos abaixo melhor ilustra a deformação da mola como função do tempo?',
			image: '2025-2/mc-3a.webp'
		},
		alternatives: [
			{
				image: '2025-2/mc-3a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-2/mc-3a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-2/mc-3a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-2/mc-3a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-2/mc-3a-e.webp',
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
			text: 'A figura (a) ilustra a força $F$ necessária para causar uma deformação $\\Delta x$ em uma mola nada convencional. Faz-se então um experimento em que se aplica uma força $F$ variável no tempo $(t)$ sobre essa mola, como ilustra a figura (b). (Os eixos verticais de ambas figuras estão na mesma escala.) Qual dos gráficos abaixo melhor ilustra a deformação da mola como função do tempo?',
			image: '2025-2/mc-3b.webp'
		},
		alternatives: [
			{
				image: '2025-2/mc-3b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-2/mc-3b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-2/mc-3b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-2/mc-3b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-2/mc-3b-e.webp',
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
			text: 'Certas nebulosas brilham às custas da energia de rotação de sua estrela de nêutrons. Tratando essa estrela como uma esfera homogênea de raio $R$ e massa $M$, calcule a potência emitida pela nebulosa, sendo que o período de rotação da estrela é $T$ e que esse período aumenta a uma taxa constante $\\gamma = dT/dt$.'
		},
		alternatives: [
			{
				text: '$\\frac{8\\pi^2\\gamma MR^2}{5T^3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{8\\pi^2\\gamma MR^2}{3T^3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{1}{2}\\frac{M}{T}\\left(\\frac{2\\pi R}{T} \\gamma\\right)^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{2}\\frac{M}{T}\\gamma\\left(\\frac{2\\pi R}{T}\\right)^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{2}\\frac{M}{T}\\left(\\frac{R}{T} \\gamma\\right)^2$',
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
			text: 'Certas nebulosas brilham às custas da energia de rotação de sua estrela de nêutrons. Tratando essa estrela como uma esfera homogênea de raio $R$ e massa $M$, calcule a taxa $dT/dt$ com que o período de rotação $T$ da estrela aumenta, sendo que a potência luminosa emitida pela nebulosa é $P$.'
		},
		alternatives: [
			{
				text: '$\\frac{5PT^3}{8\\pi^2 MR^2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{3PT^3}{8\\pi^2 MR^2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{\\sqrt{2PT^3/M}}{2\\pi R}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{2PT^3}{M(2\\pi R)^2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{\\sqrt{2PT^3/M}}{R}$',
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
			text: 'Um bloco de massa $M$ é liberado do repouso no ponto $A$, localizado no topo de uma plataforma com altura $H$. Sob ação da gravidade, o bloco desliza sem atrito ao longo da superfície da plataforma até ser lançado horizontalmente a partir do ponto $B$, situado a uma altura $h$, conforme ilustrado na figura. O bloco então atinge o solo no ponto $C$, localizado a uma distância horizontal $d$ do ponto $B$. Despreze o atrito com o ar. Com base nessas informações, determine a distância horizontal $d$ como função de $H$ e $h$.',
			image: '2025-2/mc-5a.webp'
		},
		alternatives: [
			{
				text: '$d = 2\\sqrt{(H - h)h}$',
				number: QuestionAlternative.A
			},
			{
				text: '$d = 2\\sqrt{Hh}$',
				number: QuestionAlternative.B
			},
			{
				text: '$d = \\sqrt{2(H - h)h}$',
				number: QuestionAlternative.C
			},
			{
				text: '$d = \\sqrt{2Hh}$',
				number: QuestionAlternative.D
			},
			{
				text: '$d = \\sqrt{(H + h)h}$',
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
			text: 'Um bloco de massa $M$ é liberado do repouso no ponto $A$, localizado no topo de uma plataforma com altura $H$. Sob ação da gravidade, o bloco desliza sem atrito ao longo da superfície da plataforma até ser lançado horizontalmente a partir do ponto $B$, situado a uma altura $h$, conforme ilustrado na figura. O bloco então atinge o solo no ponto $C$, com o vetor velocidade fazendo um ângulo $\\theta$ com a horizontal. Despreze o atrito com o ar. Com base nessas informações, determine o ângulo $\\theta$ como função de $H$ e $h$.',
			image: '2025-2/mc-5b.webp'
		},
		alternatives: [
			{
				text: '$\\theta = \\arctg\\left(\\frac{h}{H - h}\\right)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\theta = \\arctg\\left(\\frac{h}{H}\\right)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\theta = \\arctg\\left(\\frac{H - h}{h}\\right)$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\theta = \\arctg\\left(\\frac{H}{h}\\right)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\theta = \\arctg\\left(\\frac{h}{H + h}\\right)$',
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
			text: 'Uma partícula se move ao longo do eixo $Ox$ sob a ação de uma força conservativa $F(x)$. A energia potencial $U(x)$ associada a essa força está representada no gráfico da figura. Determine a opção que melhor representa o vetor da força (módulo, direção e sentido) nos pontos $x = a$ e $x = b$.',
			image: '2025-2/mc-6a.webp'
		},
		alternatives: [
			{
				image: '2025-2/mc-6a-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-2/mc-6a-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-2/mc-6a-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-2/mc-6a-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-2/mc-6a-e.webp',
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
			text: 'Uma partícula se move ao longo do eixo $Ox$ sob a ação de uma força conservativa $F(x)$. A energia potencial $U(x)$ associada a essa força está representada no gráfico da figura. Determine a opção que melhor representa o vetor da força (módulo, direção e sentido) nos pontos $x = a$ e $x = b$.',
			image: '2025-2/mc-6b.webp'
		},
		alternatives: [
			{
				image: '2025-2/mc-6b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-2/mc-6b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-2/mc-6b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-2/mc-6b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-2/mc-6b-e.webp',
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
			text: 'Uma mola de massa desprezível e constante elástica $k$ está presa, em uma de suas extremidades, a uma parede. A outra extremidade está ligada a um disco de raio $R$ e massa $M$, numa posição que dista $b$ do seu centro. O disco está preso a uma base, mas pode girar livremente em torno de seu eixo de simetria. Na posição de equilíbrio, a mola está relaxada e o ponto de contato faz um ângulo nulo com a vertical, como mostrado na figura. Considerando pequenas oscilações em torno do equilíbrio, determine a frequência angular $\\omega_0$ das oscilações do disco. Suponha que o disco seja homogêneo, de modo que o momento de inércia relevante é $I = \\frac{MR^2}{2}$.',
			image: '2025-2/mc-7a.webp'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{2kb^2}{MR^2}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{\\frac{kb^2}{MR^2}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{\\frac{2kb}{MR}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{\\frac{kb^2}{2MR^2}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\sqrt{\\frac{k}{M}}$',
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
			text: 'Uma mola de massa desprezível e constante elástica $k$ está presa, em uma de suas extremidades, a uma parede. A outra extremidade da mola está ligada a uma das extremidades de uma barra delgada de comprimento $L$ e massa $M$. A barra está presa a uma base, mas pode girar livremente em torno de seu eixo de simetria. Na posição de equilíbrio, a mola está relaxada e o ponto de contato faz um ângulo nulo com a vertical, como mostrado na figura. Considerando pequenas oscilações em torno do equilíbrio, determine a frequência angular $\\omega_0$ das oscilações da barra. Suponha que a barra seja homogênea, de modo que o momento de inércia relevante é $I = \\frac{ML^2}{12}$.',
			image: '2025-2/mc-7b.webp'
		},
		alternatives: [
			{
				text: '$\\sqrt{\\frac{3k}{M}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\sqrt{\\frac{k}{M}}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\sqrt{\\frac{12k}{M}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\sqrt{\\frac{4k}{M}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\sqrt{\\frac{k}{4M}}$',
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
			text: 'Considere uma partícula de massa $m$ em um sistema bidimensional, sob ação de forças tais que a sua lagrangiana é dada por<br/><br/>$$\\mathcal{L}(x, y, \\dot{x}, \\dot{y}, t) = \\frac{m}{2}(\\dot{x}^2 + \\dot{y}^2) + x\\dot{y}b(t) \\space \\text{,}$$<br/>onde $b(t)$ é uma função conhecida do tempo. Determine a hamiltoniana $\\mathcal{H}(x, y, p_x, p_y, t)$ correspondente a esse sistema.'
		},
		alternatives: [
			{
				text: '$\\mathcal{H} = \\frac{1}{2m}p_x^2 + \\frac{1}{2m}[p_y - b(t)x]^2$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\mathcal{H} = \\frac{1}{2m}p_x^2 + \\frac{1}{2m}[p_y + b(t)x]^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\mathcal{H} = \\frac{1}{2m}[p_x + b(t)y]^2 + \\frac{1}{2m}p_y^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\mathcal{H} = \\frac{1}{2m}[p_x - b(t)y]^2 + \\frac{1}{2m}p_y^2$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\mathcal{H} = \\frac{1}{2m}p_x^2 + \\frac{1}{2m}p_y^2$',
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
			text: 'Considere uma partícula de massa $m$ em um sistema bidimensional, sob ação de forças tais que a sua Lagrangiana é dada por<br/><br/>$$\\mathcal{L}(x, y, \\dot{x}, \\dot{y}, t) = \\frac{m}{2}(\\dot{x}^2 + \\dot{y}^2) + x\\dot{y}b(t) \\space \\text{,}$$<br/>onde $b(t)$ é uma função conhecida do tempo. Determine as equações de movimento correspondentes a esse sistema como funções de $x$, de $y$ e de suas respectivas derivadas.'
		},
		alternatives: [
			{
				text: '(I) $m\\ddot{x} - \\dot{y}b(t) = 0$; (II) $m\\ddot{y} + \\dot{x}b(t) + x\\frac{d}{dt}b(t) = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '(I) $m\\ddot{x} - \\dot{y}b(t) = 0$; (II) $m\\ddot{y} + \\dot{x}b(t) = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '(I) $m\\ddot{x} + \\dot{y}b(t) = 0$; (II) $m\\ddot{y} - \\dot{x}b(t) - x\\frac{d}{dt}b(t) = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '(I) $m\\ddot{x} + \\dot{y}b(t) = 0$; (II) $m\\ddot{y} - \\dot{x}b(t) = 0$',
				number: QuestionAlternative.D
			},
			{
				text: '(I) $m\\ddot{x} - \\dot{y}b(t) = 0$; (II) $m\\ddot{y} + x\\frac{d}{dt}b(t) = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 1,
		statement: {
			text: 'Um capacitor de placas paralelas possui placas de área $A$ separadas por uma distância $D$. Entre as placas, na região $0 < z < D/2$ (medida ao longo de um eixo $z$ perpendicular às placas), há um dielétrico de constante $\\kappa_1$, enquanto na região $D/2 < z < D$, há um dielétrico de constante $\\kappa_2$. Qual é a capacitância equivalente $C$ do capacitor?'
		},
		alternatives: [
			{
				text: '$C = \\frac{2\\epsilon_0 A}{D} \\frac{\\kappa_1\\kappa_2}{\\kappa_1 + \\kappa_2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa_1\\kappa_2}{\\kappa_1 + \\kappa_2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$C = \\frac{2\\epsilon_0 A}{D} \\frac{\\kappa_1 + \\kappa_2}{\\kappa_1\\kappa_2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa_1 + \\kappa_2}{\\kappa_1\\kappa_2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa_1\\kappa_2 + 1}{\\kappa_1 + \\kappa_2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 1,
		statement: {
			text: 'Um capacitor de placas paralelas possui placas de área $A$ separadas por uma distância $D$. Entre as placas, na região $0 < z < D/2$ (medida ao longo de um eixo $z$ perpendicular às placas), há um dielétrico de constante $\\kappa$, enquanto na região $D/2 < z < D$ há vácuo. Qual é a capacitância equivalente $C$ do capacitor?'
		},
		alternatives: [
			{
				text: '$C = \\frac{2\\epsilon_0 A}{D} \\frac{\\kappa}{\\kappa + 1}$',
				number: QuestionAlternative.A
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa}{\\kappa + 1}$',
				number: QuestionAlternative.B
			},
			{
				text: '$C = \\frac{2\\epsilon_0 A}{D} \\frac{\\kappa + 1}{\\kappa}$',
				number: QuestionAlternative.C
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa + 1}{\\kappa}$',
				number: QuestionAlternative.D
			},
			{
				text: '$C = \\frac{\\epsilon_0 A}{D} \\frac{\\kappa - 1}{\\kappa + 1}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 2,
		statement: {
			text: 'Considere o potencial vetor magnético $\\bm{A} = (\\alpha x + \\beta e^{\\gamma y})\\hat{x} + \\delta\\cos(\\epsilon x)\\hat{y}$, onde $\\alpha$, $\\beta$, $\\gamma$, $\\delta$ e $\\epsilon$ são constantes. Qual é o campo magnético $\\bm{B}$ na origem do sistema de coordenadas?'
		},
		alternatives: [
			{
				text: '$\\bm{B} = -\\beta\\gamma\\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\bm{B} = \\beta\\epsilon\\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\bm{B} = \\beta\\hat{x} + \\delta\\hat{y} - \\alpha\\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\bm{B} = \\beta\\hat{x} - \\epsilon\\hat{y} + \\alpha\\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\bm{B} = \\beta\\gamma\\hat{x}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 2,
		statement: {
			text: 'Considere o potencial vetor magnético $\\bm{A} = (\\alpha x + \\beta e^{\\gamma y})\\hat{y} + \\delta\\cos(\\epsilon x)\\hat{z}$, onde $\\alpha$, $\\beta$, $\\gamma$, $\\delta$ e $\\epsilon$ são constantes. Qual é o campo magnético $\\bm{B}$ na origem do sistema de coordenadas?'
		},
		alternatives: [
			{
				text: '$\\bm{B} = \\alpha\\hat{z}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\bm{B} = \\beta\\gamma\\hat{x} - \\alpha\\hat{z}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\bm{B} = \\beta\\hat{x} + \\gamma\\hat{y} - \\alpha\\hat{z}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\bm{B} = \\beta\\hat{x} - \\epsilon\\hat{y} + \\alpha\\hat{z}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\bm{B} = \\beta\\hat{x}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 3,
		statement: {
			text: 'Considere um campo elétrico dado por $\\bm{E} = (k/r)\\hat{r}$, onde $k$ é constante. Qual é o trabalho $W$ realizado pelo campo elétrico para mover uma carga pontual $q$ de um ponto $r$ até um ponto $2r$?'
		},
		alternatives: [
			{
				text: '$W = kq\\ln 2$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = 2\\pi kq\\ln 2$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = kq$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 2\\pi kq$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = kq/2$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 3,
		statement: {
			text: 'Considere um campo elétrico dado por $\\bm{E} = (k/r)\\hat{r}$, onde $k$ é constante. Qual é o trabalho $W$ realizado pelo campo elétrico para mover uma carga pontual $q$ de um ponto $r$ até um ponto $3r$?'
		},
		alternatives: [
			{
				text: '$W = kq\\ln 3$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = kq\\ln 2$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = 3kq$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 6\\pi kq$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = kq/3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 4,
		statement: {
			text: 'Considere um capacitor esférico com suas duas cascas esféricas concêntricas possuindo raios $a$ e $b$ ($b > a$). O potencial elétrico é tal que $V(a) = V_0$ e $V(b) = 0$. No espaço entre as duas cascas há vácuo. Qual é o potencial elétrico na região entre as duas cargas no caso em que $b = 2a$?'
		},
		alternatives: [
			{
				text: '$V(r) = \\left(\\frac{2a}{r} - 1\\right)V_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$V(r) = 2 \\left(\\frac{a}{r} - 1\\right)V_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$V(r) = \\left(2 - \\frac{r}{a}\\right)V_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$V(r) = \\left(\\frac{2r}{a} - 1\\right)V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$V(r) = \\left(\\frac{a}{2r} - \\frac{1}{2}\\right)V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 4,
		statement: {
			text: 'Considere um capacitor esférico com suas duas cascas esféricas concêntricas possuindo raios $a$ e $b$ ($b > a$). O potencial elétrico é tal que $V(a) = V_0$ e $V(b) = 0$. No espaço entre as duas cascas há vácuo. Qual é o potencial elétrico na região entre as duas cargas no caso em que $b = 3a$?'
		},
		alternatives: [
			{
				text: '$V(r) = \\left(\\frac{3a}{r} - 1\\right)\\frac{V_0}{2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$V(r) = \\left(\\frac{3a}{r} - 1\\right)V_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$V(r) = \\left(3 - \\frac{r}{a}\\right)\\frac{V_0}{2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$V(r) = \\left(\\frac{3r}{a} - 1\\right)V_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$V(r) = \\left(\\frac{a}{3r} - \\frac{1}{3}\\right)V_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 5,
		statement: {
			text: 'Na figura, representamos um fio longo carregado, cuja densidade linear de carga é $\\lambda$. A figura mostra um cilindro de altura $h$ e base com raio $r$, cujo eixo coincide com o fio. O módulo $E$ do campo elétrico a uma distância $r$ do fio e o módulo do fluxo $\\Phi_E$ de campo elétrico através das bases do cilindro, são, respectivamente:',
			image: '2025-2/em-5.webp'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = \\frac{\\lambda h}{\\epsilon_0}$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = 0$ e $\\Phi_E = \\frac{\\lambda h}{\\epsilon_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = \\frac{\\pi r^2\\lambda}{\\epsilon_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = 0$ e $\\Phi_E = 0$, pois a carga total no fio é nula.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 5,
		statement: {
			text: 'Na figura, representamos um fio longo carregado, cuja densidade linear de carga é $\\lambda$. A figura mostra um cilindro de altura $h$ e base com raio $r$, cujo eixo coincide com o fio. O módulo $E$ do campo elétrico $\\Phi_E$ e o módulo do fluxo de campo elétrico através das paredes curvas do cilindro, são, respectivamente:',
			image: '2025-2/em-5.webp'
		},
		alternatives: [
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = \\frac{\\lambda h}{\\epsilon_0}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$E = 0$ e $\\Phi_E = \\frac{\\lambda h}{\\epsilon_0}$',
				number: QuestionAlternative.C
			},
			{
				text: '$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}$ e $\\Phi_E = \\frac{\\pi r^2\\lambda}{\\epsilon_0}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E = 0$ e $\\Phi_E = 0$, pois a carga total no fio é nula.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 6,
		statement: {
			text: 'Um material ôhmico de condutividade $\\sigma$ preenche o espaço entre duas cascas cilíndricas condutoras e coaxiais. As cascas possuem altura $H$ e raios $a$ e $b$ (com $b > a$). Um instrumento sensível detecta uma corrente uniforme $I_0$ fluindo da casca interna para a casca externa. Tomando $\\rho$ como a distância entre um ponto na região do material ôhmico e o eixo comum dos cilindros, o campo elétrico em $\\rho = (a + b)/2$ vale:'
		},
		alternatives: [
			{
				text: '$\\bm{E} = \\frac{I_0}{\\pi(a + b)H\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\bm{E} = \\frac{2I_0}{\\pi(a^2 - b^2)\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{4\\pi(b - a)H\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{4\\pi(b - a)H\\sigma}\\hat{\\varphi}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{\\pi(a^2 - b^2)\\sigma}\\hat{\\varphi}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 6,
		statement: {
			text: 'Um material ôhmico de condutividade $\\sigma$ preenche o espaço entre duas cascas cilíndricas condutoras e coaxiais. As cascas possuem altura $H$ e raios $a$ e $b$ (com $b > 2a$). Um instrumento sensível detecta uma corrente uniforme $I_0$ fluindo da casca interna para a casca externa. Tomando $\\rho$ como a distância entre um ponto na região do material ôhmico e o eixo comum dos cilindros, o campo elétrico em $\\rho = (a + b)/3$ vale:'
		},
		alternatives: [
			{
				text: '$\\bm{E} = \\frac{3I_0}{2\\pi(a + b)H\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\bm{E} = \\frac{3I_0}{\\pi(a^2 - b^2)\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{6\\pi(b - a)H\\sigma}\\hat{\\rho}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{6\\pi(b - a)H\\sigma}\\hat{\\varphi}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\bm{E} = \\frac{I_0}{\\pi(a^2 - b^2)\\sigma}\\hat{\\varphi}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 7,
		statement: {
			text: 'Um capacitor de placas paralelas sofre um processo de descarga quando suas placas condutoras são acopladas por um fio. O campo elétrico na região entre as placas é dado por<br/><br/>$$\\bm{E} = -\\frac{\\sigma(t)}{\\epsilon_0}\\hat{z},$$<br/>sendo $\\sigma(t)$ a densidade superficial de carga no instante $t$. Durante a descarga, o campo magnético $\\bm{B}$ na região entre as placas:'
		},
		alternatives: [
			{
				text: 'é proporcional a $d\\sigma/dt$ e aponta na direção do vetor unitário $\\hat{\\phi}$.',
				number: QuestionAlternative.A
			},
			{
				text: 'é proporcional a $\\sigma(t)$ e aponta na direção do vetor unitário $\\hat{\\phi}$.',
				number: QuestionAlternative.B
			},
			{
				text: 'é proporcional a $\\sigma(t)$ e aponta na direção do vetor unitário $\\hat{\\rho}$.',
				number: QuestionAlternative.C
			},
			{
				text: 'é igual a 0, uma vez que o campo $\\bm{E}$ entre as placas não pode variar.',
				number: QuestionAlternative.D
			},
			{
				text: 'é igual a 0, uma vez que que o campo $\\bm{B}$ entre as placas é inicialmente nulo e não pode variar.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 7,
		statement: {
			text: 'Um capacitor de placas paralelas de área $A$ sofre um processo de descarga quando suas placas condutoras são acopladas por um fio. O campo elétrico na região entre as placas é dado por<br/><br/>$$\\bm{E} = -\\frac{Q(t)}{A\\epsilon_0}\\hat{z},$$<br/>sendo $Q(t)$ a carga sobre as placas no instante $t$. Durante a descarga, o campo magnético $\\bm{B}$ na região entre as placas:'
		},
		alternatives: [
			{
				text: 'é proporcional a $dQ/dt$ e aponta na direção do vetor unitário $\\hat{\\phi}$.',
				number: QuestionAlternative.A
			},
			{
				text: 'é proporcional a $Q(t)$ e aponta na direção do vetor unitário $\\hat{\\phi}$.',
				number: QuestionAlternative.B
			},
			{
				text: 'é proporcional a $Q(t)$ e aponta na direção do vetor unitário $\\hat{\\rho}$.',
				number: QuestionAlternative.C
			},
			{
				text: 'é igual a 0, uma vez que o campo $\\bm{E}$ entre as placas não pode variar.',
				number: QuestionAlternative.D
			},
			{
				text: 'é igual a 0, uma vez que que o campo $\\bm{B}$ entre as placas é inicialmente nulo e não pode variar.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Eletromagnetismo,
		questionNumber: 8,
		statement: {
			text: 'Uma barra magnética cai através de uma espira, como ilustrado na figura, onde as setas na espira indicam o sentido da corrente convencional (positiva) e as letras S e N denotam, respectivamente, os polos sul e norte da barra magnética. O campo magnético da barra está, muito aproximadamente, na direção ao longo do comprimento da barra. Indique o gráfico que melhor representa a dependência temporal da corrente na espira ao longo da situação descrita.',
			image: '2025-2/em-8a.webp'
		},
		alternatives: [
			{
				text: 'I',
				number: QuestionAlternative.A
			},
			{
				text: 'II',
				number: QuestionAlternative.B
			},
			{
				text: 'III',
				number: QuestionAlternative.C
			},
			{
				text: 'IV',
				number: QuestionAlternative.D
			},
			{
				text: 'V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Eletromagnetismo,
		questionNumber: 8,
		statement: {
			text: 'Uma barra magnética cai através de uma espira, como ilustrado na figura, onde as setas na espira indicam o sentido da corrente convencional (positiva) e as letras S e N denotam, respectivamente, os polos sul e norte da barra magnética. O campo magnético da barra está, muito aproximadamente, na direção ao longo do comprimento da barra. Indique o gráfico que melhor representa a dependência temporal da corrente na espira ao longo da situação descrita.',
			image: '2025-2/em-8b.webp'
		},
		alternatives: [
			{
				text: 'II',
				number: QuestionAlternative.A
			},
			{
				text: 'I',
				number: QuestionAlternative.B
			},
			{
				text: 'III',
				number: QuestionAlternative.C
			},
			{
				text: 'IV',
				number: QuestionAlternative.D
			},
			{
				text: 'V',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 1,
		statement: {
			text: 'Um acelerador produz um feixe colimado de partículas com velocidade $v = \\frac{1}{3}c$. A vida média dessas partículas é $\\tau$ e elas são detectadas em um detetor que se encontra a uma distância $L$ do acelerador. Esse detetor é então movido para uma distância $2L$ do acelerador. Para que a mesma quantidade de partículas por unidade de tempo atinja o detetor, qual deve ser a nova velocidade das partículas no feixe produzido pelo acelerador?'
		},
		alternatives: [
			{
				text: '$\\frac{1}{\\sqrt{3}}c$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{1}{2}c$',
				number: QuestionAlternative.B
			},
			{
				text: 'Impossível, não há como combinar a contração de espaço e a dilatação da vida-média das partículas simultaneamente.',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{1}{\\sqrt{2}}c$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{1}{\\sqrt{5}}c$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 1,
		statement: {
			text: 'Um acelerador produz um feixe colimado de partículas com velocidade $v = \\frac{2}{7}c$. A vida-média dessas partículas é $\\tau$ e elas são detectadas em um detetor que se encontra a uma distância $L$ do acelerador. Esse detetor é então movido para uma distância $3L$ do acelerador. Para que a mesma quantidade de partículas por unidade de tempo atinja o detetor, qual deve ser a nova velocidade das partículas no feixe produzido pelo acelerador?'
		},
		alternatives: [
			{
				text: '$\\frac{2}{3}c$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\frac{6}{7}c$',
				number: QuestionAlternative.B
			},
			{
				text: 'Impossível, não há como combinar a contração de espaço e a dilatação da vida-média das partículas simultaneamente.',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{3}{5}c$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\frac{4}{7}c$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 2,
		statement: {
			text: 'Considere os seguintes experimentos/fenômenos:<br/><br/><ul><li>I. Interferência da fenda dupla de Young.</li><li>II. Espalhamento Compton.</li><li>III. Efeito fotoelétrico.</li><li>IV. Raios catódicos de J. J. Thomson.</li><li>V. Espectro de radiação do corpo negro.</li></ul><br/>Quais deles fornecem evidências de que a luz interage com a matéria de maneira quantizada?'
		},
		alternatives: [
			{
				text: 'Apenas II, III e V.',
				number: QuestionAlternative.A
			},
			{
				text: 'Todos exceto IV.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas I e IV.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I, II e III.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas III, IV e V.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 2,
		statement: {
			text: 'Considere os seguintes experimentos/fenômenos:<br/><br/><ul><li>I. Espalhamento Compton.</li><li>II. Interferência da fenda dupla de Young.</li><li>III. Raios catódicos de J. J. Thomson.</li><li>IV. Efeito fotoelétrico.</li><li>V. Espectro de radiação do corpo negro.</li></ul><br/>Quais deles fornecem evidências de que a luz interage com a matéria de maneira quantizada?'
		},
		alternatives: [
			{
				text: 'Apenas I, IV e V.',
				number: QuestionAlternative.A
			},
			{
				text: 'Todos exceto III.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II e III.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas I, II e IV.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas III, IV e V.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 3,
		statement: {
			text: 'De acordo com o modelo de Bohr, o raio da órbita $n = 1$ do átomo de hidrogênio é $a_0 \\approx 5,3 \\space \\text{\\AA}$ e a velocidade é $v_0 \\approx 2,2 \\times 10^6$ m/s. O raio e a velocidade da órbita $n = 3$ são, respectivamente,'
		},
		alternatives: [
			{
				text: '$9a_0$ e $\\frac{1}{3}v_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$3a_0$ e $\\frac{1}{9}v_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$9a_0$ e $\\frac{1}{9}v_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$3a_0$ e $\\frac{1}{3}v_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$3a_0$ e $\\frac{1}{\\sqrt{3}}v_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 3,
		statement: {
			text: 'De acordo com o modelo de Bohr, o raio da órbita $n = 1$ do átomo de hidrogênio é $a_0 \\approx 5,3 \\space \\text{\\AA}$ e a velocidade é $v_0 \\approx 2,2 \\times 10^6$ m/s. O raio e a velocidade da órbita $n = 2$ são, respectivamente,'
		},
		alternatives: [
			{
				text: '$4a_0$ e $\\frac{1}{2}v_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$2a_0$ e $\\frac{1}{4}v_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$4a_0$ e $\\frac{1}{4}v_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$2a_0$ e $\\frac{1}{2}v_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$2a_0$ e $\\frac{1}{\\sqrt{2}}v_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 4,
		statement: {
			text: 'A densidade de estados eletrônicos em um metal como função da energia $E$ (medida a partir do fundo da banda de valência) é $g(E) = A\\sqrt{E}$, onde $A$ é uma constante. Sendo $E_F$ a energia de Fermi, qual o número total de estados ocupados $N$? Desconsidere a degenerescência de spin e, para seus cálculos, considere temperatura nula $T = 0$.'
		},
		alternatives: [
			{
				text: '$N = \\frac{2}{3}AE_F^{3/2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$N = \\frac{1}{2}A/E_F^{1/2}$',
				number: QuestionAlternative.B
			},
			{
				text: '$N = AE_F^{1/2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$N = AE_F$',
				number: QuestionAlternative.D
			},
			{
				text: '$N = 2AE_F$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 4,
		statement: {
			text: 'A densidade de estados eletrônicos em um metal como função da energia $E$ (medida a partir do fundo da banda de valência) é $g(E) = A\\sqrt{E}$, onde $A$ é uma constante. Sendo $N$ o número total de estados ocupados, qual é o valor da energia de Fermi $E_F$? Desconsidere a degenerescência de spin e, para seus cálculos, considere temperatura nula $T = 0$.'
		},
		alternatives: [
			{
				text: '$E_F = \\left(\\frac{3N}{2A}\\right)^{2/3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$E_F = \\left(\\frac{N}{A}\\right)^2$',
				number: QuestionAlternative.B
			},
			{
				text: '$E_F = \\left(\\frac{A}{2N}\\right)^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$E_F = \\left(\\frac{2N}{3A}\\right)^{2/3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$E_F = \\frac{N}{A}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 5,
		statement: {
			text: 'Considere um trem que se move em relação a uma plataforma. Um observador em repouso na plataforma vê dois raios atingirem simultaneamente as extremidades do trem, no mesmo instante em que estas coincidem com as extremidades da plataforma. A respeito dessa observação, considere as afirmativas a seguir.<br/><br/><ul><li>I. Para um observador viajando no centro do trem, os dois relâmpagos atingem o trem no mesmo instante.</li><li>II. No referencial do trem, o raio da extremidade da frente atinge o trem antes do raio da extremidade de trás.</li><li>III. O comprimento de um trem idêntico em repouso na plataforma é menor do que o comprimento da plataforma.</li></ul><br/>Levando em conta efeitos relativísticos, quais das afirmativas são verdadeiras?'
		},
		alternatives: [
			{
				text: 'Apenas a II.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a I.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a III.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a II e a III.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a I e a III.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 5,
		statement: {
			text: 'Considere um trem que se move em relação a uma plataforma. Um observador em repouso na plataforma vê dois raios atingirem simultaneamente as extremidades do trem, no mesmo instante em que estas coincidem com as extremidades da plataforma. A respeito dessa observação, considere as afirmativas a seguir.<br/><br/><ul><li>I. Para um observador viajando no centro do trem, os dois relâmpagos atingem o trem no mesmo instante.</li><li>II. No referencial do trem, o raio da extremidade da frente atinge o trem antes do raio da extremidade de trás.</li><li>III. O comprimento de um trem idêntico em repouso na plataforma é maior do que o comprimento da plataforma.</li></ul><br/>Levando em conta efeitos relativísticos, quais das afirmativas são verdadeiras?'
		},
		alternatives: [
			{
				text: 'Apenas a II e a III.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a I.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a II.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a III.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a I e a III.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 6,
		statement: {
			text: 'Considere as coordenadas espaciais e temporais dos eventos abaixo.<br/><br/><ol><li>Evento A: $x_A = 0$, $t_A = 0$.</li><li>Evento B: $x_B = 400$ m, $t_B = 2$ µs.</li><li>Evento C: $x_C = 600$ m, $t_C = 1$ µs.</li><li>Evento D: $x_D = 700$ m, $t_D = 4$ µs.</li></ol><br/>Entre as alternativas abaixo, assinale aquela em que é fisicamente impossível haver uma relação causal entre o par de eventos indicado.'
		},
		alternatives: [
			{
				text: 'A e C',
				number: QuestionAlternative.A
			},
			{
				text: 'A e B',
				number: QuestionAlternative.B
			},
			{
				text: 'B e C',
				number: QuestionAlternative.C
			},
			{
				text: 'C e D',
				number: QuestionAlternative.D
			},
			{
				text: 'A e D',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 6,
		statement: {
			text: 'Considere as coordenadas espaciais e temporais dos eventos abaixo.<br/><br/><ol><li>Evento A: $t_A = 0$, $x_A = 0$.</li><li>Evento B: $t_B = 1$ µs, $x_B = 600$ m.</li><li>Evento C: $t_C = 2$ µs, $x_C = 400$ m.</li><li>Evento D: $t_D = 4$ µs, $x_D = 700$ m.</li></ol><br/>Entre as alternativas abaixo, assinale aquela em que é fisicamente impossível haver uma relação causal entre o par de eventos indicado.'
		},
		alternatives: [
			{
				text: 'A e B',
				number: QuestionAlternative.A
			},
			{
				text: 'B e D',
				number: QuestionAlternative.B
			},
			{
				text: 'B e C',
				number: QuestionAlternative.C
			},
			{
				text: 'C e D',
				number: QuestionAlternative.D
			},
			{
				text: 'A e D',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaModerna,
		questionNumber: 7,
		statement: {
			text: 'Suponha que o máximo da radiação emitida pela Estrela X corresponda ao comprimento de onda $\\lambda_X = 600$ nm, enquanto o máximo da radiação emitida pela Estrela Y corresponda a $\\lambda_Y = 300$ nm. Considere que ambas as estrelas emitem radiação como corpos negros ideais e admita que elas estão em repouso em relação à Terra. Entre as opções abaixo, indique a melhor estimativa para a razão $T_X/T_Y$ entre as temperaturas superficiais da Estrela X ($T_X$) e a da Estrela Y ($T_Y$).'
		},
		alternatives: [
			{
				text: '$1/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/4$',
				number: QuestionAlternative.B
			},
			{
				text: '$2$',
				number: QuestionAlternative.C
			},
			{
				text: '$4$',
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
		area: Area.FisicaModerna,
		questionNumber: 7,
		statement: {
			text: 'Suponha que o máximo da radiação emitida pela Estrela X corresponda ao comprimento de onda $\\lambda_X = 600$ nm, enquanto o máximo da radiação emitida pela Estrela Y corresponda a $\\lambda_Y = 200$ nm. Considere que ambas as estrelas emitem radiação como corpos negros ideais e admita que elas estão em repouso em relação Terra. Entre as opções abaixo, indique a melhor estimativa para a razão $T_X/T_Y$ entre as temperaturas superficiais da Estrela X ($T_X$) e a da Estrela Y ($T_Y$).'
		},
		alternatives: [
			{
				text: '$1/3$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/9$',
				number: QuestionAlternative.B
			},
			{
				text: '$3$',
				number: QuestionAlternative.C
			},
			{
				text: '$9$',
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
		area: Area.FisicaModerna,
		questionNumber: 8,
		statement: {
			text: 'Um feixe de luz de frequência $f = 1,0 \\times 10^{15}$ Hz incide sobre um metal cuja função trabalho é $\\phi = 3,0$ eV. Considere as afirmativas abaixo.<br/><br/><ul><li>I. A frequência da luz é suficiente para provocar emissão fotoelétrica.</li><li>II. Haverá elétrons ejetados com energia cinética maior do que 1,0 eV.</li><li>III. Se a frequência da luz for reduzida para $f = 6,0 \\times 10^{14}$ Hz, haverá emissão fotoelétrica.</li></ul><br/>Quais das afirmativas são corretas?'
		},
		alternatives: [
			{
				text: 'Apenas a I e a II.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a I.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a II.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a III.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a I e a III.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaModerna,
		questionNumber: 8,
		statement: {
			text: 'Um feixe de luz de frequência $f = 5,0 \\times 10^{14}$ Hz incide sobre um metal cuja função trabalho é $\\phi = 1,0$ eV. Considere as afirmativas abaixo.<br/><br/><ul><li>I. A frequência da luz é suficiente para provocar emissão fotoelétrica.</li><li>II. Haverá elétrons ejetados com energia cinética maior do que 2,0 eV.</li><li>III. Se a frequência da luz for reduzida para $f = 2,0 \\times 10^{14}$ Hz, não haverá emissão fotoelétrica.</li></ul><br/>Quais das afirmativas são corretas?'
		},
		alternatives: [
			{
				text: 'Apenas a I e a III.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas a I.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas a II.',
				number: QuestionAlternative.C
			},
			{
				text: 'Apenas a III.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas a I e a II.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 1,
		statement: {
			text: 'Duas partículas não interagentes, de mesma massa $m$, estão sujeitas ao mesmo potencial harmônico unidimensional. Denotamos por<br/><br/>$$H_1 = \\frac{P_1^2}{2m} + \\frac{m\\omega^2 X_1^2}{2} \\quad \\text{e} \\quad H_2 = \\frac{P_2^2}{2m} + \\frac{m\\omega^2 X_2^2}{2}$$<br/>os hamiltonianos atuando nos espaços de estados das partículas 1 e 2, respectivamente. Em um determinado instante, prepara-se o sistema no estado<br/><br/>$$\\ket{\\psi_0} = \\frac{1}{\\sqrt{3}}(\\ket{\\Phi_{0,0}} + \\ket{\\Phi_{1,0}} + \\ket{\\Phi_{0,1}}),$$<br/>expresso em termos dos autoestados $\\ket{\\Phi_{n_1,n_2}}$ comuns a $H_1$ e $H_2$. Determine (i) a probabilidade $\\mathcal{P}_{12}$ de medir a energia total do sistema e encontrar $\\hbar\\omega$ e (ii) a probabilidade $\\mathcal{P}_1$ de, preparando-se novamente o sistema em $\\ket{\\psi_0}$, medir a energia apenas da partícula 1 e encontrar $\\hbar\\omega/2$.'
		},
		alternatives: [
			{
				text: '$\\mathcal{P}_{12} = \\frac{1}{3}$ e $\\mathcal{P}_1 = \\frac{2}{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{2}{3}$ e $\\mathcal{P}_1 = \\frac{2}{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{2}{3}$ e $\\mathcal{P}_1 = \\frac{1}{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\mathcal{P}_{12} = 0$ e $\\mathcal{P}_1 = \\frac{2}{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{1}{3}$ e $\\mathcal{P}_1 = \\frac{1}{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 1,
		statement: {
			text: 'Duas partículas não interagentes, de mesma massa $m$, estão sujeitas ao mesmo potencial harmônico unidimensional. Denotamos por<br/><br/>$$H_1 = \\frac{P_1^2}{2m} + \\frac{m\\omega^2 X_1^2}{2} \\quad \\text{e} \\quad H_2 = \\frac{P_2^2}{2m} + \\frac{m\\omega^2 X_2^2}{2}$$<br/>os hamiltonianos atuando nos espaços de estados das partículas 1 e 2, respectivamente. Em um determinado instante, prepara-se o sistema no estado<br/><br/>$$\\ket{\\psi_0} = \\frac{1}{\\sqrt{3}}(\\ket{\\Phi_{0,0}} + \\ket{\\Phi_{1,0}} + \\ket{\\Phi_{0,1}}),$$<br/>expresso em termos dos autoestados $\\ket{\\Phi_{n_1,n_2}}$ comuns a $H_1$ e $H_2$. Determine (i) a probabilidade $\\mathcal{P}_{12}$ de medir a energia total do sistema e encontrar $2\\hbar\\omega$ e (ii) a probabilidade $\\mathcal{P}_2$ de, preparando-se novamente o sistema em $\\ket{\\psi_0}$, medir a energia apenas da partícula 2 e encontrar $3\\hbar\\omega/2$?'
		},
		alternatives: [
			{
				text: '$\\mathcal{P}_{12} = \\frac{2}{3}$ e $\\mathcal{P}_2 = \\frac{1}{3}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{2}{3}$ e $\\mathcal{P}_2 = \\frac{2}{3}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{1}{3}$ e $\\mathcal{P}_2 = \\frac{2}{3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\mathcal{P}_{12} = 0$ e $\\mathcal{P}_2 = \\frac{2}{3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\mathcal{P}_{12} = \\frac{1}{3}$ e $\\mathcal{P}_2 = \\frac{1}{3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 2,
		statement: {
			text: 'Considere uma partícula de massa $m$ confinada em um poço de potencial unidimensional infinito de largura $a$ e centrado em $x = 0$. Os possíveis valores de energia dessa partícula são<br/><br/>$$E_n = \\frac{n^2\\hbar^2\\pi^2}{2ma^2},$$<br/>onde $n$ é um número inteiro positivo. As funções de onda correspondentes são $\\psi_n(x) = C\\sin(n\\pi x/a)$ para $n$ par e $\\psi_n(x) = C\\cos(n\\pi x/a)$ para $n$ ímpar, com $C = \\sqrt{2/a}$. Suponha que, superposta ao poço infinito, esteja presente uma perturbação local no centro do poço,<br/><br/>$$W = \\lambda\\delta(x),$$<br/>sendo $\\lambda$ uma constante. Assinale a alternativa que corresponde, em primeira ordem em $\\lambda$, à correção $\\Delta E_n$ nos autovalores de energia da partícula com $n$ par.'
		},
		alternatives: [
			{
				text: '$\\Delta E_n = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta E_n = \\frac{2\\lambda}{a}$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta E_n = \\frac{n\\lambda}{a}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta E_n = \\frac{n^2\\lambda}{a}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta E_n = \\frac{\\lambda}{2a}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 2,
		statement: {
			text: 'Considere uma partícula de massa $m$ confinada em um poço de potencial unidimensional infinito de largura $a$ e centrado em $x = 0$. Os possíveis valores de energia dessa partícula são<br/><br/>$$E_n = \\frac{n^2\\hbar^2\\pi^2}{2ma^2},$$<br/>onde $n$ é um número inteiro positivo. As funções de onda correspondentes são $\\psi_n(x) = C\\sin(n\\pi x/a)$ para $n$ par e $\\psi_n(x) = C\\cos(n\\pi x/a)$ para $n$ ímpar, com $C = \\sqrt{2/a}$. Suponha que, superposta ao poço infinito, esteja presente uma perturbação local no centro do poço,<br/><br/>$$W = \\lambda\\delta(x),$$<br/>sendo $\\lambda$ uma constante. Assinale a alternativa que corresponde, em primeira ordem em $\\lambda$, à correção $\\Delta E_n$ nos autovalores de energia da partícula com $n$ ímpar.'
		},
		alternatives: [
			{
				text: '$\\Delta E_n = \\frac{2\\lambda}{a}$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta E_n = 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta E_n = \\frac{n\\lambda}{a}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta E_n = \\frac{n^2\\lambda}{a}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta E_n = \\frac{\\lambda}{2a}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 3,
		statement: {
			text: 'Um conjunto de quatro estados de partícula única, com energias $\\epsilon_1 = -t$ (não degenerado), $\\epsilon_2 = 0$ (duplamente degenerado) e $\\epsilon_3 = t$ (não degenerado), como ilustrado na figura, serão preenchidos por duas partículas não interagentes. Considerando que todos os autoestados admissíveis de duas partículas são igualmente prováveis, quais são as probabilidades de medir a energia total do sistema e encontrar $-t$ se as partículas são distinguíveis e se elas são férmions idênticos, respectivamente? Ignore o número quântico de spin.',
			image: '2025-2/mq-3.webp'
		},
		alternatives: [
			{
				text: '$1/4$ e $1/3$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/5$ e $1/4$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/16$ e $1/6$',
				number: QuestionAlternative.C
			},
			{
				text: '$2/3$ e $1/4$',
				number: QuestionAlternative.D
			},
			{
				text: '$1/4$ e $1/6$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 3,
		statement: {
			text: 'Um conjunto de quatro estados de partícula única, com energias $\\epsilon_1 = -t$ (não degenerado), $\\epsilon_2 = 0$ (duplamente degenerado) e $\\epsilon_3 = t$ (não degenerado), como ilustrado na figura, serão preenchidos por duas partículas não interagentes. Considerando que todos os autoestados admissíveis de duas partículas são igualmente prováveis, quais são as probabilidades de medir a energia total do sistema e encontrar $-t$ se as partículas são distinguíveis e se elas são bósons idênticos, respectivamente? Ignore o número quântico de spin.',
			image: '2025-2/mq-3.webp'
		},
		alternatives: [
			{
				text: '$1/4$ e $1/5$',
				number: QuestionAlternative.A
			},
			{
				text: '$1/4$ e $1/3$',
				number: QuestionAlternative.B
			},
			{
				text: '$1/3$ e $1/3$',
				number: QuestionAlternative.C
			},
			{
				text: '$1/5$ e $2/3$',
				number: QuestionAlternative.D
			},
			{
				text: '$2/3$ e $1/3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 4,
		statement: {
			text: 'Assinale a alternativa que melhor representa as funções de onda de uma partícula sujeita ao potencial unidimensional<br/><br/>$$V(x) = \\begin{cases} \\frac{m\\omega^2 x^2}{2}, & x < 0 \\\\ \\infty, & x > 0 \\end{cases}.$$'
		},
		alternatives: [
			{
				image: '2025-2/mq-4b-a.webp',
				number: QuestionAlternative.A
			},
			{
				image: '2025-2/mq-4b-b.webp',
				number: QuestionAlternative.B
			},
			{
				image: '2025-2/mq-4b-c.webp',
				number: QuestionAlternative.C
			},
			{
				image: '2025-2/mq-4b-d.webp',
				number: QuestionAlternative.D
			},
			{
				image: '2025-2/mq-4b-e.webp',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 5,
		statement: {
			text: 'Considere uma partícula de spin 1/2 cujo espaço de Hilbert bidimensional pode ter como base os estados $\\ket{+}$ e $\\ket{-}$, autovetores de $S_z$ com autovalores $+\\hbar/2$ e $-\\hbar/2$, respectivamente. Na presença de um campo magnético $\\vec{B}$, o hamiltoniano dessa partícula é dado por<br/><br/>$$H = -\\gamma\\vec{S} \\cdot \\vec{B},$$<br/>em que $\\gamma$ é uma constante (a razão giromagnética). Para um campo $\\vec{B} = (2B_0, 0, B_0)$, em que $B_0$ é uma constante relacionada à intensidade do campo, e definindo $\\omega_0 = \\gamma B_0/2$, os autovalores de $H$ são'
		},
		alternatives: [
			{
				text: '$\\pm\\sqrt{5}\\hbar\\omega_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\pm\\sqrt{3}\\hbar\\omega_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\pm\\hbar\\omega_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$0, \\hbar\\omega_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\pm\\sqrt{7}\\hbar\\omega_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 5,
		statement: {
			text: 'Considere uma partícula de spin 1/2 cujo espaço de Hilbert bidimensional pode ter como base os estados $\\ket{+}$ e $\\ket{-}$, autovetores de $S_z$ com autovalores $+\\hbar/2$ e $-\\hbar/2$, respectivamente. Na presença de um campo magnético $\\vec{B}$, o hamiltoniano dessa partícula é dado por<br/><br/>$$H = -\\gamma\\vec{S} \\cdot \\vec{B},$$<br/>em que $\\gamma$ é uma constante (a razão giromagnética). Para um campo $\\vec{B} = (\\sqrt{2}B_0, 0, B_0)$, em que $B_0$ é uma constante relacionada à intensidade do campo, e definindo $\\omega_0 = \\gamma B_0/2$, os autovalores de $H$ são'
		},
		alternatives: [
			{
				text: '$\\pm\\sqrt{3}\\hbar\\omega_0$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\pm\\sqrt{5}\\hbar\\omega_0$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\pm\\hbar\\omega_0$',
				number: QuestionAlternative.C
			},
			{
				text: '$0, \\hbar\\omega_0$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\pm 2\\hbar\\omega_0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 7,
		statement: {
			text: 'Dois spins 1/2, $\\vec{S}_1$ e $\\vec{S}_2$ têm sua interação descrita por meio do hamiltoniano<br/><br/>$$H = J\\vec{S}_1 \\cdot \\vec{S}_2 = J(S_{1}^xS_{2}^x + S_{1}^yS_{2}^y + S_{1}^zS_{2}^z),$$<br/>em que $J > 0$ dá a escala de energia do problema. A respeito desse sistema, considere as afirmações a seguir.<br/><br/><ul><li>I. O estado fundamental possui spin total igual a 0.</li><li>II. O estado excitado possui spin total igual a 1.</li><li>III. O estado fundamental é degenerado.</li></ul><br/>Quais das afirmações são verdadeiras?'
		},
		alternatives: [
			{
				text: 'Apenas I e II.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas I e III.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II e III.',
				number: QuestionAlternative.C
			},
			{
				text: 'Nenhuma das afirmações está correta.',
				number: QuestionAlternative.D
			},
			{
				text: 'Todas as afirmações estão corretas.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 7,
		statement: {
			text: 'Dois spins 1/2, $\\vec{S}_1$ e $\\vec{S}_2$, têm sua interação descrita por meio do hamiltoniano<br/><br/>$$H = -J\\vec{S}_1 \\cdot \\vec{S}_2 = -J(S_{1}^xS_{2}^x + S_{1}^yS_{2}^y + S_{1}^zS_{2}^z),$$<br/>em que $J > 0$ dá a escala de energia do problema. A respeito desse sistema, considere as afirmações a seguir.<br/><br/><ul><li>I. O estado fundamental possui spin total igual a 1.</li><li>II. O estado excitado possui spin total igual a 0.</li><li>III. O estado fundamental é degenerado.</li></ul><br/>Quais das afirmações são verdadeiras?'
		},
		alternatives: [
			{
				text: 'Todas as afirmações estão corretas.',
				number: QuestionAlternative.A
			},
			{
				text: 'Apenas I e III.',
				number: QuestionAlternative.B
			},
			{
				text: 'Apenas II e III.',
				number: QuestionAlternative.C
			},
			{
				text: 'Nenhuma das afirmações está correta.',
				number: QuestionAlternative.D
			},
			{
				text: 'Apenas I e II.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.MecanicaQuantica,
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico de três níveis, cujo espaço de Hilbert pode ter como base os seguintes estados:<br/><br/> $$\\ket{1} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\quad \\ket{2} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\ket{3} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}.$$<br/>Um observável físico $O$ é representado, nessa base, pela matriz<br/><br/>$$O = s\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix},$$<br/>em que $s$ é uma constante. Se, em um certo instante, o sistema se encontrar no estado $\\ket{\\psi} = \\frac{1}{\\sqrt{3}}(\\ket{1} - \\ket{2} + \\ket{3})$, possíveis resultados de uma medida do observável $O$ nesse instante são'
		},
		alternatives: [
			{
				text: '$-s$ com probabilidade 1.',
				number: QuestionAlternative.A
			},
			{
				text: '$-s$ com probabilidade 1/2 e $s$ com probabilidade 1/2.',
				number: QuestionAlternative.B
			},
			{
				text: '$-s$ com probabilidade 2/3 e $s$ com probabilidade 1/3.',
				number: QuestionAlternative.C
			},
			{
				text: '$s$ com probabilidade 1.',
				number: QuestionAlternative.D
			},
			{
				text: '$-s$ com probabilidade 3/4 e $s$ com probabilidade 1/4.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.MecanicaQuantica,
		questionNumber: 8,
		statement: {
			text: 'Considere um sistema quântico de três níveis, cujo espaço de Hilbert pode ter como base os seguintes estados:<br/><br/>$$\\ket{1} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\quad \\ket{2} = \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\quad \\ket{3} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}.$$<br/>Um observável físico $O$ é representado, nessa base, pela matriz<br/><br/>$$O = s\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix},$$<br/>em que $s$ é uma constante. Se, em um certo instante, o sistema se encontrar no estado $\\ket{\\psi} = \\frac{1}{\\sqrt{3}}(\\ket{1} + \\ket{2} + \\ket{3})$, possíveis resultados de uma medida do observável $O$ nesse instante são:'
		},
		alternatives: [
			{
				text: '$s$ com probabilidade 1.',
				number: QuestionAlternative.A
			},
			{
				text: '$s$ com probabilidade 1/2 e $-s$ com probabilidade 1/2.',
				number: QuestionAlternative.B
			},
			{
				text: '$s$ com probabilidade 2/3 e $-s$ com probabilidade 1/3.',
				number: QuestionAlternative.C
			},
			{
				text: '$-s$ com probabilidade 1.',
				number: QuestionAlternative.D
			},
			{
				text: '$s$ com probabilidade 3/4 e $-s$ com probabilidade 1/4.',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		questionNumber: 1,
		statement: {
			text: 'Um cilindro contém um pistão interno no qual, em cada lado, há um mol de um gás monoatômico ideal. As paredes do cilindro são diatérmicas e o sistema está imerso em um banho térmico à temperatura de $0^\\circ\\text{C}$. Os volumes iniciais dos subsistemas são $12 \\text{L}$ e $2 \\text{L}$, e o pistão é movido reversivelmente até que os volumes atingem $8 \\text{L}$ e $6 \\text{L}$, respectivamente. O trabalho $W$ realizado nesse processo, expresso em termos da constante $R$ dos gases ideais, vale:'
		},
		alternatives: [
			{
				text: '$W = 273R\\ln 2$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = 273R\\ln 3$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = 273R\\ln(5/2)$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 0$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = 273R\\ln(3/2)$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		questionNumber: 1,
		statement: {
			text: 'Um cilindro contém um pistão interno no qual, em cada lado, há um mol de um gás monoatômico ideal. As paredes do cilindro são diatérmicas e o sistema está imerso em um banho térmico à temperatura de $0^\\circ\\text{C}$. Os volumes iniciais dos subsistemas são $16 \\text{L}$ e $2 \\text{L}$, e o pistão é movido reversivelmente até que os volumes atingem $8 \\text{L}$ e $10 \\text{L}$, respectivamente. O trabalho $W$ realizado nesse processo, expresso em termos da constante $R$ dos gases ideais, vale:'
		},
		alternatives: [
			{
				text: '$W = 273R\\ln(5/2)$',
				number: QuestionAlternative.A
			},
			{
				text: '$W = 273R\\ln(3/2)$',
				number: QuestionAlternative.B
			},
			{
				text: '$W = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$W = 273R\\ln 2$',
				number: QuestionAlternative.D
			},
			{
				text: '$W = 273R\\ln 3$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		questionNumber: 2,
		statement: {
			text: 'Para garantir a estabilidade termodinâmica de um sistema, sua energia livre de Helmholtz por partícula, $f(T,v)$, deve satisfazer<br/><br/>$$\\left(\\frac{\\partial^2 f}{\\partial T^2}\\right)_v \\leq 0 \\quad \\text{e} \\quad \\left(\\frac{\\partial^2 f}{\\partial v^2}\\right)_T \\geq 0,$$<br/>em que $v$ é o volume molar e $T$ é a temperatura. A partir dessas relações, e sendo<br/><br/>$$c_v = T\\left(\\frac{\\partial s}{\\partial T}\\right)_v \\quad \\text{e} \\quad \\kappa_T = -\\frac{1}{v}\\left(\\frac{\\partial v}{\\partial p}\\right)_T,$$<br/>com $s$ a entropia por partícula e $p$ a pressão, é correto afirmar que'
		},
		alternatives: [
			{
				text: '$c_v \\geq 0$ e $\\kappa_T \\geq 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$c_v \\leq 0$ e $\\kappa_T \\geq 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$c_v \\leq 0$ e $\\kappa_T \\leq 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$c_v \\geq 0$ e $\\kappa_T \\leq 0$',
				number: QuestionAlternative.D
			},
			{
				text: '$c_v = 0$ e $\\kappa_T = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		questionNumber: 2,
		statement: {
			text: 'Para garantir a estabilidade termodinâmica de um sistema, sua energia livre de Gibbs por partícula, $g(T,p)$, deve satisfazer<br/><br/>$$\\left(\\frac{\\partial^2 g}{\\partial T^2}\\right)_p \\leq 0 \\quad \\text{e} \\quad \\left(\\frac{\\partial^2 g}{\\partial p^2}\\right)_T \\leq 0,$$<br/>em que $p$ é a pressão e $T$ é a temperatura. A partir dessas relações, e sendo<br/><br/>$$c_p = T\\left(\\frac{\\partial s}{\\partial T}\\right)_p \\quad \\text{e} \\quad \\kappa_T = -\\frac{1}{v}\\left(\\frac{\\partial v}{\\partial p}\\right)_T,$$<br/>com $s$ a entropia por partícula e $v$ o volume molar, é correto afirmar que'
		},
		alternatives: [
			{
				text: '$c_p \\geq 0$ e $\\kappa_T \\geq 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$c_p \\leq 0$ e $\\kappa_T \\geq 0$',
				number: QuestionAlternative.B
			},
			{
				text: '$c_p \\geq 0$ e $\\kappa_T \\leq 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$c_p \\leq 0$ e $\\kappa_T \\leq 0$',
				number: QuestionAlternative.D
			},
			{
				text: '$c_p = 0$ e $\\kappa_T = 0$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		questionNumber: 3,
		statement: {
			text: 'Considere um sistema isolado, formado por duas partes 1 e 2 separadas por uma parede impermeável e fixa. As partes 1 e 2 têm temperaturas iniciais $T_1$ e $T_2$ diferentes e satisfazem as equações de estado<br/><br/>$$U_1 = \\frac{3R}{2}N_1 T_1 \\quad \\text{e} \\quad U_2 = \\frac{5R}{2}N_2 T_2,$$<br/>onde $U_i$ e $N_i$ denotam, respectivamente, a energia interna e o número de mols do subsistema $i$ e $R$ é a constante dos gases ideais. Em um certo instante, a parede torna-se diatérmica, permitindo troca de calor entre os subsistemas. Sabendo que a energia total do sistema vale $2100 \\text{J}$, que $N_1 = 2$ mol e que $N_2 = 3$ mol, qual é a energia de cada subsistema após atingido o equilíbrio térmico?'
		},
		alternatives: [
			{
				text: '$U_1 = 600$ J e $U_2 = 1500$ J',
				number: QuestionAlternative.A
			},
			{
				text: '$U_1 = U_2 = 1100$ J',
				number: QuestionAlternative.B
			},
			{
				text: '$U_1 = 1500$ J e $U_2 = 600$ J',
				number: QuestionAlternative.C
			},
			{
				text: '$U_1 = 900$ J e $U_2 = 1200$ J',
				number: QuestionAlternative.D
			},
			{
				text: '$U_1 = U_2 = 600$ J',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.Termodinamica,
		questionNumber: 4,
		statement: {
			text: 'Considere um sistema isolado formado por dois corpos idênticos, com mesma capacidade térmica a volume constante $C_v$ e com temperaturas iniciais $T_0$ e $2T_0$. Eles são colocados em contato e, após certo tempo, atingem o equilíbrio térmico. Desprezando variações de volume, a variação total de entropia $\\Delta S$ referente a esse processo vale'
		},
		alternatives: [
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{9}{8}\\right)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta S = C_v\\ln 2$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta S = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{3}{4}\\right)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{4}{3}\\right)$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.Termodinamica,
		questionNumber: 4,
		statement: {
			text: 'Considere um sistema isolado formado por dois corpos idênticos, com mesma capacidade térmica a volume constante $C_v$ e com temperaturas iniciais $T_0$ e $4T_0$. Eles são colocados em contato e, após certo tempo, atingem o equilíbrio térmico. Desprezando variações de volume, a variação total de entropia $\\Delta S$ referente a esse processo vale'
		},
		alternatives: [
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{25}{16}\\right)$',
				number: QuestionAlternative.A
			},
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{25}{4}\\right)$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\Delta S = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{5}{2}\\right)$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\Delta S = C_v\\ln\\left(\\frac{2}{5}\\right)$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		questionNumber: 1,
		statement: {
			text: 'Um sistema composto por $N$ partículas não interagentes está em contato com um reservatório térmico à temperatura $T$. Cada partícula pode ocupar apenas dois níveis de energia: o estado fundamental $\\varepsilon_0 = 0$, não degenerado, ou o estado excitado $\\varepsilon_1 = \\varepsilon > 0$, que é triplamente degenerado. Nessas condições, e sendo $\\beta^{-1} = k_B T$, a energia média por partícula do sistema é:'
		},
		alternatives: [
			{
				text: '$\\frac{3\\varepsilon e^{-\\beta\\varepsilon}}{1 + 3e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$3\\varepsilon$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{3\\varepsilon e^{-\\beta\\varepsilon}}{1 + e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{\\varepsilon e^{-\\beta\\varepsilon}}{1 + 3e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\varepsilon$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		questionNumber: 1,
		statement: {
			text: 'Um sistema composto por $N$ partículas não interagentes está em contato com um reservatório térmico à temperatura $T$. Cada partícula pode ocupar apenas dois níveis de energia: o estado fundamental $\\varepsilon_0 = 0$, não degenerado, ou o estado excitado $\\varepsilon_1 = \\varepsilon > 0$, que é duplamente degenerado. Nessas condições, e sendo $\\beta^{-1} = k_B T$, a energia média por partícula do sistema é:'
		},
		alternatives: [
			{
				text: '$\\frac{2\\varepsilon e^{-\\beta\\varepsilon}}{1 + 2e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.A
			},
			{
				text: '$2\\varepsilon$',
				number: QuestionAlternative.B
			},
			{
				text: '$\\frac{2\\varepsilon e^{-\\beta\\varepsilon}}{1 + e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.C
			},
			{
				text: '$\\frac{\\varepsilon e^{-\\beta\\varepsilon}}{1 + 2e^{-\\beta\\varepsilon}}$',
				number: QuestionAlternative.D
			},
			{
				text: '$\\varepsilon$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		questionNumber: 2,
		statement: {
			text: 'Dois sistemas isolados, A e B, possuem respectivamente $\\Omega_A = 10^3$ e $\\Omega_B = 10^2$ microestados acessíveis. Eles são combinados para formar um sistema total $A + B$, sem interação entre eles. Supondo que todos os microestados continuem igualmente prováveis e acessíveis, a entropia total $S_{A+B}$ do sistema combinado e a probabilidade $p_j$ de ocorrência de cada microestado particular nesse sistema são, respectivamente:'
		},
		alternatives: [
			{
				text: '$S_{A+B} = 5k_B\\ln 10$ e $p_j = 10^{-5}$',
				number: QuestionAlternative.A
			},
			{
				text: '$S_{A+B} = 6k_B\\ln 10$ e $p_j = 10^{-5}$',
				number: QuestionAlternative.B
			},
			{
				text: '$S_{A+B} = k_B\\ln 6$ e $p_j = 10^{-2}$',
				number: QuestionAlternative.C
			},
			{
				text: '$S_{A+B} = 5k_B\\ln 10$ e $p_j = 10^{-2}$',
				number: QuestionAlternative.D
			},
			{
				text: '$S_{A+B} = 6k_B\\ln 10$ e $p_j = 10^{-2}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		questionNumber: 2,
		statement: {
			text: 'Dois sistemas isolados, A e B, possuem respectivamente $\\Omega_A = 10^2$ e $\\Omega_B = 10^5$ microestados acessíveis. Eles são combinados para formar um sistema total $A + B$, sem interação entre eles. Supondo que todos os microestados continuem igualmente prováveis e acessíveis, a entropia total $S_{A+B}$ do sistema combinado e a probabilidade $p_j$ de ocorrência de cada microestado particular nesse sistema são, respectivamente:'
		},
		alternatives: [
			{
				text: '$S_{A+B} = 7k_B\\ln 10$ e $p_j = 10^{-7}$',
				number: QuestionAlternative.A
			},
			{
				text: '$S_{A+B} = 10k_B\\ln 10$ e $p_j = 10^{-7}$',
				number: QuestionAlternative.B
			},
			{
				text: '$S_{A+B} = k_B\\ln 10$ e $p_j = 10^{-3}$',
				number: QuestionAlternative.C
			},
			{
				text: '$S_{A+B} = 7k_B\\ln 10$ e $p_j = 10^{-3}$',
				number: QuestionAlternative.D
			},
			{
				text: '$S_{A+B} = 10k_B\\ln 10$ e $p_j = 10^{-3}$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.A,
		area: Area.FisicaEstatistica,
		questionNumber: 3,
		statement: {
			text: 'O deslocamento de um oscilador harmônico simples clássico é descrito por $x(t) = A\\cos(\\omega t + \\phi)$. Considere então uma coleção desses osciladores, com mesma amplitude $A$ e frequência $\\omega$, mas com fases $\\phi$ distribuídas uniformemente no intervalo $[0, 2\\pi)$. Para um instante de tempo $t$ arbitrário, a variância da posição dos osciladores, $\\langle x^2 \\rangle - \\langle x \\rangle^2$, é:'
		},
		alternatives: [
			{
				text: '$A^2/2$',
				number: QuestionAlternative.A
			},
			{
				text: '$A^2/4$',
				number: QuestionAlternative.B
			},
			{
				text: '$A^2$',
				number: QuestionAlternative.C
			},
			{
				text: '$4A^2$',
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
		area: Area.FisicaEstatistica,
		questionNumber: 3,
		statement: {
			text: 'O deslocamento de um oscilador harmônico simples clássico é descrito por $x(t) = A\\cos(\\omega t + \\phi)$. Considere então um ensemble destes osciladores com mesma amplitude $A$ e frequência $\\omega$, mas com fases $\\phi$ distribuídas uniformemente no intervalo $[0, 2\\pi)$. Para um instante de tempo $t$ arbitrário, o desvio padrão da posição dos osciladores, $\\sqrt{\\langle x^2 \\rangle - \\langle x \\rangle^2}$, é:'
		},
		alternatives: [
			{
				text: '$A/\\sqrt{2}$',
				number: QuestionAlternative.A
			},
			{
				text: '$A/2$',
				number: QuestionAlternative.B
			},
			{
				text: '$A$',
				number: QuestionAlternative.C
			},
			{
				text: '$2A$',
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
		area: Area.FisicaEstatistica,
		questionNumber: 4,
		statement: {
			text: 'O modelo de Blume-Capel é uma extensão do modelo de Ising para spins $S = 1$, permitindo o estudo de transições de fase mais complexas do que no modelo de Ising original. Na ausência de campo externo, para dois átomos, seu hamiltoniano é dado por<br/><br/>$$\\mathcal{H} = -Js_1 s_2 + D(s_1^2 + s_2^2),$$<br/>onde $s_i = 0, \\pm 1$, $J > 0$ é o acoplamento ferromagnético e $D > 0$ é o parâmetro de campo cristalino. Supondo $D < J/2$, o estado fundamental do sistema é:'
		},
		alternatives: [
			{
				text: '$s_1 = s_2 = \\pm 1$',
				number: QuestionAlternative.A
			},
			{
				text: '$s_1 = -s_2$ e $s_2 = \\pm 1$',
				number: QuestionAlternative.B
			},
			{
				text: '$s_1 = s_2 = 0$',
				number: QuestionAlternative.C
			},
			{
				text: '$s_1 = 0$ e $s_2 = \\pm 1$',
				number: QuestionAlternative.D
			},
			{
				text: '$s_2 = 0$ e $s_1 = \\pm 1$',
				number: QuestionAlternative.E
			}
		]
	},
	{
		...defaultData,
		version: Version.B,
		area: Area.FisicaEstatistica,
		questionNumber: 4,
		statement: {
			text: 'O modelo de Blume-Capel é uma extensão do modelo de Ising para spins $S = 1$, permitindo o estudo de transições de fase mais complexas do que no modelo de Ising original. Na ausência de campo externo, para dois átomos, seu hamiltoniano é dado por<br/><br/>$$\\mathcal{H} = -Js_1 s_2 + D(s_1^2 + s_2^2),$$<br/>onde $s_i = 0, \\pm 1$, $J > 0$ é o acoplamento ferromagnético e $D > 0$ é o parâmetro de campo cristalino. Supondo $D > J/2$, o estado fundamental do sistema é:'
		},
		alternatives: [
			{
				text: '$s_1 = s_2 = 0$',
				number: QuestionAlternative.A
			},
			{
				text: '$s_1 = s_2 = \\pm 1$',
				number: QuestionAlternative.B
			},
			{
				text: '$s_1 = -s_2$ e $s_2 = \\pm 1$',
				number: QuestionAlternative.C
			},
			{
				text: '$s_1 = 0$ e $s_2 = \\pm 1$',
				number: QuestionAlternative.D
			},
			{
				text: '$s_2 = 0$ e $s_1 = \\pm 1$',
				number: QuestionAlternative.E
			}
		]
	}
];
