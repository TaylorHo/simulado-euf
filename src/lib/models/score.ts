import type { Area } from './area';

export interface AreaScore {
	area: Area;
	areaLabel: string;
	correct: number;
	total: number;
}

export interface TagScore {
	tag: string;
	correct: number;
	total: number;
}

export interface ExamScore {
	totalCorrect: number;
	totalQuestions: number;
	byArea: AreaScore[];
	byTag: TagScore[];
}
