import { QuestionAlternative, type Question } from '$lib/models/question';

export interface ExamQuestion extends Question {
	selected: QuestionAlternative | null;
	discarded: QuestionAlternative[];
}

export interface GeneratedExam {
	/** Unique identifier for this generated exam (Base36 codes separated by dashes) */
	id: string;

	/** 40 questions selected for this exam */
	questions: ExamQuestion[];

	/** Timestamp when the exam was generated */
	generatedAt: number;
}
