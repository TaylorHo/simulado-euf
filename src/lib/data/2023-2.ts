/* eslint-disable @typescript-eslint/no-unused-vars */
import { Area } from '$lib/models/area';
import { QuestionAlternative, Version, type Question } from '$lib/models/question';

const defaultData = {
	year: 2023,
	semester: 2,
	correct: QuestionAlternative.A, // Gabarito sempre coloca a alternativa A como correta
	tags: [],
	help: {}
};

export default <Question[]>[];
