import { Area } from '$lib/models/area';

export const Subarea = {
	[Area.Eletromagnetismo]: {
		CamposEletrostaticos: 'Campos eletrostáticos no vácuo e nos materiais dielétricos',
		EquacoesPoissonLaplace: 'Resolução das equações de Poisson e Laplace',
		CamposMagneticosCorrentesEstacionarias:
			'Campos magnéticos, correntes estacionárias e materiais não magnéticos',
		ForcaEletromotrizInduzida: 'Força eletromotriz induzida e energia magnética',
		MateriaisMagneticos: 'Materiais magnéticos',
		EquacoesMaxwell: 'Equações de Maxwell',
		PropagacaoOndasEletromagneticas: 'Propagação de ondas eletromagnéticas',
		ReflexaoRefracao: 'Reflexão e refração',
		Radiacao: 'Radiação',
		EletromagnetismoRelatividade: 'Eletromagnetismo e relatividade'
	},
	[Area.MecanicaClassica]: {
		LeisDeNewton: 'Leis de Newton',
		MovimentoUnidimensional: 'Movimento unidimensional',
		OscilacoesLineares: 'Oscilações lineares',
		MovimentoDuasTresDimensoes: 'Movimento em duas e três dimensões',
		GravitacaoNewtoniana: 'Gravitação newtoniana',
		CalculoVariacional: 'Cálculo variacional',
		EquacoesLagrangeHamilton: 'Equações de Lagrange e de Hamilton',
		ForcasCentrais: 'Forças centrais',
		SistemasDeParticulas: 'Sistemas de partículas',
		ReferenciaisNaoInerciais: 'Referenciais não inerciais',
		DinamicaCorposRigidos: 'Dinâmica de corpos rígidos',
		OscilacoesAcopladas: 'Oscilações acopladas'
	},
	[Area.FisicaModerna]: {
		FundamentosRelatividadeRestrita: 'Fundamentos da relatividade restrita',
		MecanicaRelativisticaParticulas: 'Mecânica relativística das partículas',
		PropagacaoLuzRelatividadeNewtoniana: 'Propagação da luz e a relatividade newtoniana',
		ExperimentoMichelsonMorley: 'Experimento de Michelson e Morley',
		PostuladosRelatividadeRestrita: 'Postulados da teoria da relatividade restrita',
		TransformacoesLorentz: 'As transformações de Lorentz',
		CausalidadeSimultaneidade: 'Causalidade e simultaneidade',
		EnergiaMomentoRelativisticos: 'Energia e momento relativísticos',
		RadiacaoTermicaCorpoNegroPlanck:
			'Radiação térmica, o problema do corpo negro e o postulado de Planck',
		FotonsPropriedadesCorpusculares: 'Fótons e as propriedades corpusculares da radiação',
		ModeloRutherfordEstabilidadeAtomos:
			'O modelo de Rutherford e o problema da estabilidade dos átomos',
		ModeloBohr: 'O modelo de Bohr',
		DistribuicaoBoltzmannEnergia: 'Distribuição de Boltzmann da energia',
		AtomosMoleculasSolidos: 'Átomos, Moléculas e Sólidos'
	},
	[Area.MecanicaQuantica]: {
		IntroducaoIdeiasFundamentais: 'Introdução às ideias fundamentais da teoria quântica',
		AparatoMatematicoSchrodinger: 'O aparato matemático da mecânica quântica de Schrödinger',
		FormalizacaoPostuladosHeisenberg:
			'Formalização da Mecânica Quântica. Postulados. Descrição de Heisenberg',
		OsciladorHarmonicoUnidimensional: 'O oscilador harmônico unidimensional',
		PotenciaisUnidimensionais: 'Potenciais unidimensionais',
		SchrodingerTresDimensoesMomentoAngular:
			'A equação de Schrödinger em três dimensões. Momento angular',
		ForcasCentraisAtomoHidrogenio: 'Forças centrais e o átomo de Hidrogênio',
		Spinores: 'Spinores na teoria quântica não-relativística',
		AdicaoMomentosAngulares: 'Adição de momentos angulares',
		TeoriaPerturbacaoIndependenteTempo: 'Teoria de perturbação independente do tempo',
		ParticulasIdenticas: 'Partículas idênticas'
	},
	[Area.Termodinamica]: {
		SistemasTermodinamicos: 'Sistemas termodinâmicos',
		VariaveisEquacoesEstadoDiagramasPVT: 'Variáveis e equações de estado, diagramas PVT',
		TrabalhoPrimeiraLei: 'Trabalho e primeira lei da termodinâmica',
		EquivalenteMecanicoCalor: 'Equivalente mecânico do calor',
		EnergiaInternaEntalpiaCicloCarnot: 'Energia interna, entalpia, ciclo de Carnot',
		MudancasDeFase: 'Mudanças de fase',
		SegundaLeiEntropia: 'Segunda lei da termodinâmica e entropia',
		FuncoesTermodinamicas: 'Funções termodinâmicas',
		AplicacoesPraticasTermodinamica: 'Aplicações práticas de termodinâmica'
	},
	[Area.FisicaEstatistica]: {
		TeoriaCineticaGases: 'Teoria cinética dos gases',
		DescricaoEstatisticaSistemaFisico: 'Descrição estatística de um sistema físico',
		EnsembleMicrocanonico: 'Ensemble microcanônico',
		EnsembleCanonico: 'Ensemble canônico',
		GasClassicoFormalismoCanonico: 'Gás clássico no formalismo canônico',
		EnsembleGrandeCanonico: 'Ensemble grande canônico',
		GasIdealQuantico: 'Gás ideal quântico',
		GasIdealFermi: 'Gás ideal de Fermi',
		CondensacaoBoseEinstein: 'Condensação de Bose-Einstein'
	}
} as const;

export type SubareaForArea<A extends Area> = (typeof Subarea)[A][keyof (typeof Subarea)[A]];

export type Subarea = SubareaForArea<Area>;

type SubareaTags<A extends Area> = readonly [SubareaForArea<A>, ...SubareaForArea<A>[]];

export function tagsForArea<A extends Area>(...tags: SubareaTags<A>): SubareaForArea<A>[] {
	return [...tags];
}

export function getSubareasForArea<A extends Area>(area: A): SubareaForArea<A>[] {
	return Object.values(Subarea[area]) as SubareaForArea<A>[];
}

/** Short aliases for use in exam data files */
export const TagEM = Subarea[Area.Eletromagnetismo];
export const TagMC = Subarea[Area.MecanicaClassica];
export const TagFM = Subarea[Area.FisicaModerna];
export const TagMQ = Subarea[Area.MecanicaQuantica];
export const TagTD = Subarea[Area.Termodinamica];
export const TagFE = Subarea[Area.FisicaEstatistica];

// Use it like this:
// tags: tagsForArea<Area.MecanicaClassica>(TagMC.SistemasDeParticulas, TagMC.LeisDeNewton),
