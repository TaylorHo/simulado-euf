import { Version, type Question, type QuestionIdentifier } from '$lib/models/question';

/**
 * Generate a unique identifier for a single question
 */
export function generateQuestionId(question: QuestionIdentifier): string {
	const area: number = question.area;
	const year: number = question.year % 100; // % 100 to get the last two digits of the year
	const semester: number = question.semester;
	const version: number = question.version;
	const questionNumber: number = question.questionNumber;

	const code: number = Number.parseInt(`${year}${semester}${area}${version}${questionNumber}`);

	return code.toString(36); // String in base 36
}

/**
 * Generate a compound identifier for multiple questions (dash-separated)
 */
export function generateIdentifier(questions: Question[]): string {
	const codes: string[] = questions.map((question) => generateQuestionId(question));
	return codes.join('-');
}

/**
 * Parse a single question identifier back to its components
 */
export function parseQuestionId(id: string): QuestionIdentifier {
	const code: string = Number.parseInt(id, 36).toString(10).padStart(5, '0'); // String of a number in base 10

	const year: number = Number.parseInt(code.slice(0, 2)) + 2000; // + 2000 to get the full year
	const semester: number = Number.parseInt(code.slice(2, 3));
	const area: number = Number.parseInt(code.slice(3, 4));
	const version: number = Number.parseInt(code.slice(4, 5));
	const questionNumber: number = Number.parseInt(code.slice(5, 6));

	return <QuestionIdentifier>{
		year,
		semester,
		version,
		area,
		questionNumber
	};
}

/**
 * Parse a compound identifier (dash-separated) back to its components
 */
export function parseIdentifier(identifier: string): QuestionIdentifier[] {
	return identifier.split('-').map((base36Code) => parseQuestionId(base36Code));
}

/**
 * Return the same question identifier with the opposite version (A ↔ B)
 */
export function getAlternateVersionIdentifier(identifier: QuestionIdentifier): QuestionIdentifier {
	return {
		...identifier,
		version: identifier.version === Version.A ? Version.B : Version.A
	};
}

/**
 * Generate the ID for the alternate version of a question
 */
export function getAlternateVersionId(id: string): string {
	const identifier = parseQuestionId(id);
	return generateQuestionId(getAlternateVersionIdentifier(identifier));
}
