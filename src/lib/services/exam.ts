import { Area, AreaLabels, AreaQuestionCounts } from '$lib/models/area';
import type { ExamQuestion, GeneratedExam } from '$lib/models/exam';
import { QuestionAlternative, type Question, type QuestionIdentifier } from '$lib/models/question';
import { generateIdentifier, parseIdentifier } from '$lib/services/identifiers';
import { allQuestions } from '$lib/data';
import type { AreaScore, ExamScore, TagScore } from '$lib/models/score';

export class ExamService {
	private allQuestions: Question[];
	private exam: GeneratedExam | null = null;

	constructor() {
		this.allQuestions = allQuestions;
	}

	/**
	 * Generate a new exam with random questions.
	 * Ensures version exclusivity (if version A is selected, version B of the same question is excluded).
	 * Questions are grouped by area according to AreaQuestionCounts.
	 */
	generateExam(): GeneratedExam {
		const selectedQuestions: Question[] = [];
		const usedQuestionIds = new Set<string>();

		// Get all areas in order
		const areas = Object.values(Area).filter((v) => typeof v === 'number') as Area[];

		// For each area, select the required number of questions
		for (const area of areas) {
			const questionsNeeded = AreaQuestionCounts[area];

			// Get all questions for this area that haven't had their counterpart used
			const availableQuestions = this.allQuestions.filter((q) => {
				if (q.area !== area) return false;

				// Create a unique ID for the question base (without version)
				const baseId = `${q.year}-${q.semester}-${q.area}-${q.questionNumber}`;
				return !usedQuestionIds.has(baseId);
			});

			// Shuffle available questions for this area
			const shuffled = this.shuffleArray(availableQuestions);

			// Select questions for this area
			let selected = 0;
			for (const question of shuffled) {
				if (selected >= questionsNeeded) break;

				// Mark this question base as used (both versions)
				const baseId = `${question.year}-${question.semester}-${question.area}-${question.questionNumber}`;
				usedQuestionIds.add(baseId);

				selectedQuestions.push(question);
				selected++;
			}

			// If we couldn't get enough unique questions for this area, throw an error
			if (selected < questionsNeeded) {
				throw new Error(
					`Not enough unique questions for area ${AreaLabels[area]}. ` +
						`Needed ${questionsNeeded}, found ${selected}.`
				);
			}
		}

		// Convert to ExamQuestion format with shuffled alternatives
		const examQuestions: ExamQuestion[] = selectedQuestions.map((q) => ({
			...q,
			alternatives: this.shuffleArray([...q.alternatives]),
			selected: null,
			discarded: []
		}));

		// Generate exam ID from selected questions
		const id = generateIdentifier(selectedQuestions);

		this.exam = {
			id,
			questions: examQuestions,
			generatedAt: Date.now()
		};

		return this.exam;
	}

	/**
	 * Load an exam from an identifier string.
	 * Questions are sorted by area to match the exam structure.
	 */
	loadExamFromIdentifier(identifier: string): GeneratedExam {
		const questionIdentifiers = parseIdentifier(identifier);

		// Find the original questions based on identifiers
		const questions: Question[] = questionIdentifiers.map((qId) => {
			const question = this.findQuestion(qId);
			if (!question) {
				throw new Error(
					`Question not found: year=${qId.year}, semester=${qId.semester}, ` +
						`area=${qId.area}, version=${qId.version}, questionNumber=${qId.questionNumber}`
				);
			}

			return question;
		});

		// Sort questions by area
		const sortedQuestions = questions.sort((a, b) => a.area - b.area);

		// Convert to ExamQuestion format with shuffled alternatives
		const examQuestions: ExamQuestion[] = sortedQuestions.map((q) => ({
			...q,
			alternatives: this.shuffleArray([...q.alternatives]),
			selected: null,
			discarded: []
		}));

		this.exam = {
			id: identifier,
			questions: examQuestions,
			generatedAt: Date.now()
		};

		return this.exam;
	}

	/**
	 * Find a specific question by its identifier
	 */
	private findQuestion(identifier: QuestionIdentifier): Question | null {
		return (
			this.allQuestions.find(
				(q) =>
					q.year === identifier.year &&
					q.semester === identifier.semester &&
					q.area === identifier.area &&
					q.version === identifier.version &&
					q.questionNumber === identifier.questionNumber
			) ?? null
		);
	}

	/**
	 * Get the current exam
	 */
	getExam(): GeneratedExam | null {
		return this.exam;
	}

	/**
	 * Update a question's selected answer
	 */
	selectAnswer(questionIndex: number, alternative: QuestionAlternative | null): void {
		if (!this.exam) {
			throw new Error('No exam loaded');
		}

		if (questionIndex < 0 || questionIndex >= this.exam.questions.length) {
			throw new Error('Invalid question index');
		}

		this.exam.questions[questionIndex].selected = alternative;
	}

	/**
	 * Toggle a discarded alternative for a question
	 */
	toggleDiscarded(questionIndex: number, alternative: QuestionAlternative): void {
		if (!this.exam) {
			throw new Error('No exam loaded');
		}

		if (questionIndex < 0 || questionIndex >= this.exam.questions.length) {
			throw new Error('Invalid question index');
		}

		const question = this.exam.questions[questionIndex];
		const discardedIndex = question.discarded.indexOf(alternative);

		if (discardedIndex === -1) {
			question.discarded.push(alternative);
		} else {
			question.discarded.splice(discardedIndex, 1);
		}
	}

	/**
	 * Calculate the exam score and proficiency data
	 */
	calculateScore(): ExamScore {
		if (!this.exam) {
			throw new Error('No exam loaded');
		}

		const totalQuestions = this.exam.questions.length;
		let totalCorrect = 0;

		// Track scores by area
		const areaScores = new Map<Area, { correct: number; total: number }>();

		// Track scores by tag
		const tagScores = new Map<string, { correct: number; total: number }>();

		// Process each question
		for (const question of this.exam.questions) {
			const isCorrect = question.selected === question.correct;

			if (isCorrect) {
				totalCorrect++;
			}

			// Update area scores
			const areaScore = areaScores.get(question.area) ?? { correct: 0, total: 0 };
			areaScore.total++;
			if (isCorrect) {
				areaScore.correct++;
			}
			areaScores.set(question.area, areaScore);

			// Update tag scores
			for (const tag of question.tags) {
				const tagScore = tagScores.get(tag) ?? { correct: 0, total: 0 };
				tagScore.total++;
				if (isCorrect) {
					tagScore.correct++;
				}
				tagScores.set(tag, tagScore);
			}
		}

		// Convert to AreaScore array
		const byArea: AreaScore[] = Array.from(areaScores.entries())
			.map(([area, score]) => ({
				area,
				areaLabel: AreaLabels[area],
				correct: score.correct,
				total: score.total
			}))
			.sort((a, b) => a.area - b.area);

		// Convert to TagScore array
		const byTag: TagScore[] = Array.from(tagScores.entries())
			.map(([tag, score]) => ({
				tag,
				correct: score.correct,
				total: score.total
			}))
			.sort((a, b) => b.correct - a.correct); // Sort by correct (strongest first)

		return {
			totalCorrect,
			totalQuestions,
			byArea,
			byTag
		};
	}

	/**
	 * Shuffle an array using Fisher-Yates algorithm
	 */
	private shuffleArray<T>(array: T[]): T[] {
		const shuffled = [...array];

		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}

		return shuffled;
	}
}
