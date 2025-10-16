import { Area, AreaLabels } from '$lib/models/area';
import type { ExamQuestion } from '$lib/models/exam';

/**
 * Get the full path for an image asset
 */
export function getImagePath(path?: string): string {
	if (!path) return '';
	return path.startsWith('/') ? path : `/assets/images/${path}`;
}

/**
 * Group exam questions by area
 */
export interface AreaGroup {
	area: Area;
	areaLabel: string;
	questions: Array<{ question: ExamQuestion; index: number }>;
}

export function groupQuestionsByArea(questions: ExamQuestion[]): AreaGroup[] {
	const groups = new Map<Area, Array<{ question: ExamQuestion; index: number }>>();

	questions.forEach((question, index) => {
		if (!groups.has(question.area)) {
			groups.set(question.area, []);
		}
		groups.get(question.area)!.push({ question, index });
	});

	const result: AreaGroup[] = [];
	for (const [area, questions] of groups.entries()) {
		result.push({
			area,
			areaLabel: AreaLabels[area],
			questions
		});
	}

	return result.sort((a, b) => a.area - b.area);
}

/**
 * Get percentage color based on score
 */
export function getPercentageColor(percentage: number): string {
	if (percentage >= 70) return 'var(--success)';
	if (percentage >= 50) return 'var(--warning)';
	return 'var(--error)';
}

/**
 * Build exam URL for the given exam ID
 */
export function buildExamUrl(examId: string, basePath: string = '/simulado'): string {
	return `${typeof window !== 'undefined' ? window.location.origin : ''}${basePath}?id=${examId}`;
}

/**
 * Try to load exam with error handling
 */
export function tryLoadExam(
	examId: string,
	onSuccess: (id: string) => void,
	onError?: (error: unknown) => void
): boolean {
	try {
		onSuccess(examId);
		return true;
	} catch (error) {
		console.error('Error loading exam:', error);
		onError?.(error);
		return false;
	}
}
