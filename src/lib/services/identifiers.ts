import type { Question, QuestionIdentifier } from '$lib/models/question';

export function generateIdentifier(questions: Question[]): string {
	const codes: string[] = questions.map((question) => {
		const area: number = question.area;
		const year: number = question.year % 100; // % 100 to get the last two digits of the year
		const semester: number = question.semester;
		const version: number = question.version;
		const questionNumber: number = question.questionNumber;

		const code: number = Number.parseInt(`${year}${semester}${area}${version}${questionNumber}`);

		return code.toString(36); // String in base 36
	});

	return codes.join('-');
}

export function parseIdentifier(identifier: string): QuestionIdentifier[] {
	return identifier.split('-').map((base36Code) => {
		const code: string = Number.parseInt(base36Code, 36).toString(10); // String of a number in base 10

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
	});
}
