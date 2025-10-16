export enum Area {
	MecanicaClassica = 0,
	Eletromagnetismo = 1,
	Termodinamica = 2,
	FisicaModerna = 3,
	MecanicaQuantica = 4,
	FisicaEstatistica = 5
}

export const AreaLabels: Record<Area, string> = {
	[Area.Eletromagnetismo]: 'Eletromagnetismo',
	[Area.FisicaModerna]: 'Física Moderna',
	[Area.MecanicaClassica]: 'Mecânica Clássica',
	[Area.MecanicaQuantica]: 'Mecânica Quântica',
	[Area.FisicaEstatistica]: 'Física Estatística',
	[Area.Termodinamica]: 'Termodinâmica'
};

export const AreaQuestionCounts: Record<Area, number> = {
	[Area.Eletromagnetismo]: 8,
	[Area.FisicaModerna]: 8,
	[Area.MecanicaClassica]: 8,
	[Area.MecanicaQuantica]: 8,
	[Area.FisicaEstatistica]: 4,
	[Area.Termodinamica]: 4
};
