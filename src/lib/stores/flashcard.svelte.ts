import { allQuestions } from '$lib/data';
import type { Question, Alternative } from '$lib/models/question';
import { QuestionAlternative } from '$lib/models/question';

interface FlashcardQuestion extends Question {
	shuffledAlternatives: Alternative[];
	originalCorrect: QuestionAlternative;
}

class FlashcardStore {
	private allQuestions: Question[] = allQuestions;
	private usedQuestionIndices = new Set<number>();

	currentQuestion = $state<FlashcardQuestion | null>(null);
	selectedAnswer = $state<QuestionAlternative | null>(null);
	showAnswer = $state(false);
	discardedAlternatives = $state<QuestionAlternative[]>([]);

	getQuestionId(question: Question): string {
		// Generate a unique base36 ID for a question
		const code = `${question.year % 100}${question.semester}${question.area}${question.version}${question.questionNumber}`;
		return Number.parseInt(code).toString(36);
	}

	loadQuestionById(id: string): FlashcardQuestion | null {
		try {
			// Parse the base36 ID back to question identifier
			const code = Number.parseInt(id, 36).toString(10).padStart(5, '0');
			const year = Number.parseInt(code.slice(0, 2)) + 2000;
			const semester = Number.parseInt(code.slice(2, 3)) as 1 | 2;
			const area = Number.parseInt(code.slice(3, 4));
			const version = Number.parseInt(code.slice(4, 5));
			const questionNumber = Number.parseInt(code.slice(5, 6)) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

			const question = this.allQuestions.find(
				(q) =>
					q.year === year &&
					q.semester === semester &&
					q.area === area &&
					q.version === version &&
					q.questionNumber === questionNumber
			);

			if (question) {
				const shuffled = this.shuffleAlternatives(question);
				this.currentQuestion = {
					...question,
					shuffledAlternatives: shuffled.alternatives,
					correct: shuffled.newCorrectIndex,
					originalCorrect: question.correct
				};
				this.selectedAnswer = null;
				this.showAnswer = false;
			}

			return this.currentQuestion;
		} catch {
			return null;
		}
	}

	getRandomQuestion(): FlashcardQuestion {
		// If all questions have been used, reset
		if (this.usedQuestionIndices.size >= this.allQuestions.length) {
			this.usedQuestionIndices.clear();
		}

		// Find available questions
		const availableIndices = this.allQuestions
			.map((_, index) => index)
			.filter((index) => !this.usedQuestionIndices.has(index));

		// Pick a random one
		const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
		this.usedQuestionIndices.add(randomIndex);

		const question = this.allQuestions[randomIndex];
		const shuffled = this.shuffleAlternatives(question);

		this.currentQuestion = {
			...question,
			shuffledAlternatives: shuffled.alternatives,
			correct: shuffled.newCorrectIndex,
			originalCorrect: question.correct
		};
		this.selectedAnswer = null;
		this.showAnswer = false;

		return this.currentQuestion;
	}

	selectAnswer(alternative: QuestionAlternative) {
		this.selectedAnswer = alternative;
	}

	toggleDiscarded(alternative: QuestionAlternative) {
		const index = this.discardedAlternatives.indexOf(alternative);
		if (index > -1) {
			this.discardedAlternatives.splice(index, 1);
		} else {
			this.discardedAlternatives.push(alternative);
		}
	}

	revealAnswer() {
		this.showAnswer = true;
	}

	nextQuestion(): FlashcardQuestion {
		this.discardedAlternatives = [];
		return this.getRandomQuestion();
	}

	reset() {
		this.currentQuestion = null;
		this.selectedAnswer = null;
		this.showAnswer = false;
		this.discardedAlternatives = [];
		this.usedQuestionIndices.clear();
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

	/**
	 * Shuffle the alternatives of a question and update the correct answer index
	 */
	private shuffleAlternatives(question: Question): {
		alternatives: Alternative[];
		newCorrectIndex: QuestionAlternative;
	} {
		// Create a mapping of indices
		const indices = [0, 1, 2, 3, 4];
		const shuffledIndices = this.shuffleArray(indices);

		// Create the shuffled alternatives array
		const shuffledAlternatives = shuffledIndices.map((originalIndex, newIndex) => ({
			...question.alternatives[originalIndex],
			number: newIndex as QuestionAlternative
		}));

		// Find where the correct answer ended up
		const newCorrectIndex = shuffledIndices.indexOf(question.correct);

		return {
			alternatives: shuffledAlternatives,
			newCorrectIndex: newCorrectIndex as QuestionAlternative
		};
	}
}

export const flashcardStore = new FlashcardStore();
