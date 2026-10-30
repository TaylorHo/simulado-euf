import { allQuestions } from '#lib/data/index.ts';
import { Area, AreaLabels } from '#lib/models/area.ts';
import { Version, type Question } from '#lib/models/question.ts';

export function getExamKey(question: Pick<Question, 'year' | 'semester'>): string {
	return `${question.year}-${question.semester}`;
}

export function getAvailableExams(questions: Question[]): string[] {
	return Array.from(new Set(questions.map(getExamKey))).sort((a, b) => {
		const [yearA, semesterA] = a.split('-').map(Number);
		const [yearB, semesterB] = b.split('-').map(Number);

		if (yearA !== yearB) return yearB - yearA;
		return semesterB - semesterA;
	});
}

export function hasAlternateVersion(
	question: Pick<Question, 'year' | 'semester' | 'area' | 'questionNumber' | 'version'>,
	pool: Question[] = allQuestions
): boolean {
	const alternateVersion = question.version === Version.A ? Version.B : Version.A;
	return pool.some(
		(q) =>
			q.year === question.year &&
			q.semester === question.semester &&
			q.area === question.area &&
			q.questionNumber === question.questionNumber &&
			q.version === alternateVersion
	);
}

export function formatQuestionNumberLabel(
	question: Pick<Question, 'year' | 'semester' | 'area' | 'questionNumber' | 'version'>,
	pool: Question[] = allQuestions
): string {
	const suffix = hasAlternateVersion(question, pool)
		? `-${question.version === Version.A ? 'A' : 'B'}`
		: '';
	return `Q${question.questionNumber}${suffix}`;
}

export function getQuestionTitle(question: Question, pool: Question[] = allQuestions): string {
	return `Questão de ${AreaLabels[question.area]} da prova de ${question.year}-${question.semester} - ${formatQuestionNumberLabel(question, pool)}`;
}

export function filterQuestions(
	questions: Question[],
	options: {
		selectedExams: string[];
		selectedAreas: Area[];
		searchText: string;
		onlyVersionA?: boolean;
	}
): Question[] {
	const normalizedSearch = options.searchText.trim().toLowerCase();
	const onlyVersionA = options.onlyVersionA ?? true;

	return questions.filter((question) => {
		if (onlyVersionA && question.version !== Version.A) return false;

		if (options.selectedExams.length > 0 && !options.selectedExams.includes(getExamKey(question))) {
			return false;
		}

		if (options.selectedAreas.length > 0 && !options.selectedAreas.includes(question.area)) {
			return false;
		}

		if (!normalizedSearch) return true;

		const searchableText = [
			question.statement.text,
			...question.tags,
			AreaLabels[question.area],
			getQuestionTitle(question)
		]
			.filter(Boolean)
			.join(' ')
			.toLowerCase();

		return searchableText.includes(normalizedSearch);
	});
}

export function countActiveFilters(
	selectedExams: string[],
	selectedAreas: Area[],
	searchText: string
): number {
	let count = 0;
	if (selectedExams.length > 0) count += 1;
	if (selectedAreas.length > 0) count += 1;
	if (searchText.trim().length > 0) count += 1;
	return count;
}
