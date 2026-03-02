import { allQuestions } from '$lib/data';
import type { Question, Alternative } from '$lib/models/question';
import { QuestionAlternative } from '$lib/models/question';
import { Area } from '$lib/models/area';

interface FlashcardQuestion extends Question {
	shuffledAlternatives: Alternative[];
	originalCorrect: QuestionAlternative;
}

const SETTINGS_KEY = 'flashcard_settings';

class FlashcardStore {
	private allQuestions: Question[] = allQuestions;
	private usedQuestionIndices = new Set<number>();

	currentQuestion = $state<FlashcardQuestion | null>(null);
	selectedAnswer = $state<QuestionAlternative | null>(null);
	showAnswer = $state(false);
	discardedAlternatives = $state<QuestionAlternative[]>([]);

	// Area weights (0-100)
	areaWeights = $state<Record<Area, number>>({
		[Area.MecanicaClassica]: 100,
		[Area.Eletromagnetismo]: 100,
		[Area.Termodinamica]: 100,
		[Area.FisicaModerna]: 100,
		[Area.MecanicaQuantica]: 100,
		[Area.FisicaEstatistica]: 100
	});

	isConfigured = $derived(Object.values(this.areaWeights).some((weight) => weight !== 100));

	constructor() {
		this.loadSettings();
	}

	private loadSettings() {
		if (typeof window === 'undefined') return;
		const saved = localStorage.getItem(SETTINGS_KEY);
		if (saved) {
			try {
				const settings = JSON.parse(saved);
				if (settings.areaWeights) {
					// Ensure we use numeric keys for the enum
					for (const key in settings.areaWeights) {
						const areaNum = Number.parseInt(key);
						if (!isNaN(areaNum)) {
							this.areaWeights[areaNum as Area] = settings.areaWeights[key];
						}
					}
				}
			} catch (e) {
				console.error('Failed to load flashcard settings', e);
			}
		}
	}

	private saveSettings() {
		if (typeof window === 'undefined') return;
		localStorage.setItem(SETTINGS_KEY, JSON.stringify({ areaWeights: this.areaWeights }));
	}

	updateWeight(area: Area, weight: number) {
		this.areaWeights[area] = weight;
		this.saveSettings();
		// Reset used questions if settings change significantly?
		// For now, just reset if we might have filtered out all current questions
		this.usedQuestionIndices.clear();
	}

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

	getRandomQuestion(): FlashcardQuestion | null {
		// Filter questions by active areas
		const activeAreas = (Object.keys(this.areaWeights).map(Number) as unknown as Area[]).filter(
			(area) => this.areaWeights[area] > 0
		);

		if (activeAreas.length === 0) return null;

		const filteredQuestions = this.allQuestions.filter((q) => activeAreas.includes(q.area));

		if (filteredQuestions.length === 0) return null;

		// If all questions in active areas have been used, reset
		const availableIndices = filteredQuestions
			.map((q) => this.allQuestions.indexOf(q))
			.filter((index) => !this.usedQuestionIndices.has(index));

		if (availableIndices.length === 0) {
			// Clear only those that belong to active areas to keep things fair
			filteredQuestions.forEach((q) => {
				this.usedQuestionIndices.delete(this.allQuestions.indexOf(q));
			});
			return this.getRandomQuestion();
		}

		// Weighted random selection
		// 1. Calculate total weight of areas that HAVE available questions
		const areasWithQuestions = activeAreas.filter((area) =>
			availableIndices.some((idx) => this.allQuestions[idx].area === area)
		);

		const totalWeight = areasWithQuestions.reduce((sum, area) => sum + this.areaWeights[area], 0);

		// 2. Pick a random area based on weights
		let random = Math.random() * totalWeight;
		let selectedArea = areasWithQuestions[0];

		for (const area of areasWithQuestions) {
			random -= this.areaWeights[area];
			if (random <= 0) {
				selectedArea = area;
				break;
			}
		}

		// 3. Pick a random available question from that area
		const areaAvailableIndices = availableIndices.filter(
			(idx) => this.allQuestions[idx].area === selectedArea
		);
		const randomIndex =
			areaAvailableIndices[Math.floor(Math.random() * areaAvailableIndices.length)];

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

	nextQuestion(): FlashcardQuestion | null {
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
