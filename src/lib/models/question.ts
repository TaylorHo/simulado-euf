import type { Area } from '$lib/models/area';

export interface Statement {
	text?: string;
	image?: string;
}

export enum QuestionAlternative {
	A = 0,
	B = 1,
	C = 2,
	D = 3,
	E = 4
}

export interface Alternative extends Statement {
	number: QuestionAlternative;
}

export enum Version {
	A = 0,
	B = 1
}

export interface QuestionIdentifier {
	/** Question year */
	year: number;

	/** Question semester */
	semester: 1 | 2;

	/** Version A or B */
	version: Version.A | Version.B;

	/** Question area */
	area: Area;

	/** Question number within the area (1-8 for most areas, 1-4 for Física Estatística and Termodinâmica) */
	questionNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

export interface AIHelpLink {
	type: 'chatgpt' | 'youtube';
	prompt?: string; // For ChatGPT
	url?: string; // For YouTube
}

export interface Question extends QuestionIdentifier {
	/** LaTeX string for the question statement */
	statement: Statement;

	/** 5 alternatives (A-E) */
	alternatives: Alternative[];

	correct: QuestionAlternative;

	/** Tags for categorizing questions (e.g., 'Ondas Eletromagnéticas', 'Lei de Gauss') */
	tags: string[];

	/** AI help links for this question (optional) */
	aiHelp?: AIHelpLink[];
}
