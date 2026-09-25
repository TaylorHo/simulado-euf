import { allQuestions } from '$lib/data';
import type { Question, Alternative } from '$lib/models/question';
import { QuestionAlternative } from '$lib/models/question';
import { Area } from '$lib/models/area';
import { getSubareasForArea, type Subarea } from '$lib/models/subareas';
import { generateQuestionId, parseQuestionId } from '$lib/services/identifiers';

interface FlashcardQuestion extends Question {
	shuffledAlternatives: Alternative[];
	originalCorrect: QuestionAlternative;
}

const SETTINGS_KEY = 'flashcard_settings';
const HISTORY_KEY = 'flashcard_history';

class FlashcardStore {
	private allQuestions: Question[] = allQuestions;
	private usedQuestionIndices = new Set<number>();
	private seenQuestionIds = new Set<string>();

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

	disabledSubareas = $state<Record<Area, Subarea[]>>({
		[Area.MecanicaClassica]: [],
		[Area.Eletromagnetismo]: [],
		[Area.Termodinamica]: [],
		[Area.FisicaModerna]: [],
		[Area.MecanicaQuantica]: [],
		[Area.FisicaEstatistica]: []
	});

	trackHistory = $state(true);
	includeSkipped = $state(false);

	isConfigured = $derived(
		Object.values(this.areaWeights).some((weight) => weight !== 100) ||
			(Object.values(Area).filter((v) => typeof v === 'number') as Area[]).some(
				(area) => this.disabledSubareas[area].length > 0
			) ||
			!this.trackHistory ||
			this.includeSkipped
	);

	constructor() {
		this.loadSettings();
		this.loadHistory();
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
						if (!Number.isNaN(areaNum)) {
							this.areaWeights[areaNum as Area] = settings.areaWeights[key];
						}
					}
				}
				if (settings.disabledSubareas) {
					for (const key in settings.disabledSubareas) {
						const areaNum = Number.parseInt(key);
						if (!Number.isNaN(areaNum) && Array.isArray(settings.disabledSubareas[key])) {
							this.disabledSubareas[areaNum as Area] = settings.disabledSubareas[key] as Subarea[];
						}
					}
				}
				if (typeof settings.trackHistory === 'boolean') {
					this.trackHistory = settings.trackHistory;
				}
				if (typeof settings.includeSkipped === 'boolean') {
					this.includeSkipped = settings.includeSkipped;
				}
			} catch (e) {
				console.error('Failed to load flashcard settings', e);
			}
		}
	}

	private loadHistory() {
		if (typeof window === 'undefined') return;
		const saved = localStorage.getItem(HISTORY_KEY);
		if (saved) {
			try {
				const ids: string[] = JSON.parse(saved);
				this.seenQuestionIds = new Set(ids);
			} catch (e) {
				console.error('Failed to load flashcard history', e);
			}
		}
	}

	private saveSettings() {
		if (typeof window === 'undefined') return;
		localStorage.setItem(
			SETTINGS_KEY,
			JSON.stringify({
				areaWeights: this.areaWeights,
				disabledSubareas: this.disabledSubareas,
				trackHistory: this.trackHistory,
				includeSkipped: this.includeSkipped
			})
		);
	}

	private saveHistory() {
		if (typeof window === 'undefined') return;
		localStorage.setItem(HISTORY_KEY, JSON.stringify([...this.seenQuestionIds]));
	}

	updateWeight(area: Area, weight: number) {
		this.areaWeights[area] = weight;
		this.saveSettings();
		this.usedQuestionIndices.clear();
	}

	isSubareaEnabled(area: Area, subarea: Subarea): boolean {
		return !this.disabledSubareas[area].includes(subarea);
	}

	toggleSubarea(area: Area, subarea: Subarea) {
		const disabled = this.disabledSubareas[area];
		const index = disabled.indexOf(subarea);
		if (index > -1) {
			disabled.splice(index, 1);
		} else {
			disabled.push(subarea);
		}
		this.saveSettings();
		this.usedQuestionIndices.clear();
	}

	getEnabledSubareaCount(area: Area): number {
		return getSubareasForArea(area).length - this.disabledSubareas[area].length;
	}

	private matchesSubareaFilter(question: Question): boolean {
		const disabled = this.disabledSubareas[question.area];
		if (disabled.length === 0) return true;
		if (question.tags.length === 0) return true;
		return question.tags.some((tag) => !disabled.includes(tag));
	}

	private getActiveAreas(): Area[] {
		return (Object.keys(this.areaWeights).map(Number) as unknown as Area[]).filter(
			(area) => this.areaWeights[area] > 0
		);
	}

	private getFilteredQuestions(): Question[] {
		const activeAreas = this.getActiveAreas();
		return this.allQuestions.filter(
			(q) => activeAreas.includes(q.area) && this.matchesSubareaFilter(q)
		);
	}

	hasAvailableQuestions = $derived.by(() => {
		return this.getFilteredQuestions().length > 0;
	});

	allMatchingQuestionsSeen = $derived.by(() => {
		if (!this.trackHistory) return false;

		const filtered = this.getFilteredQuestions();
		if (filtered.length === 0) return false;

		return filtered.every((q) => this.seenQuestionIds.has(generateQuestionId(q)));
	});

	private clearCurrentQuestion() {
		this.currentQuestion = null;
		this.selectedAnswer = null;
		this.showAnswer = false;
		this.discardedAlternatives = [];
	}

	getQuestionId(question: Question): string {
		return generateQuestionId(question);
	}

	loadQuestionById(id: string): FlashcardQuestion | null {
		try {
			// Parse the base36 ID back to question identifier
			const identifier = parseQuestionId(id);

			const question = this.allQuestions.find(
				(q) =>
					q.year === identifier.year &&
					q.semester === identifier.semester &&
					q.area === identifier.area &&
					q.version === identifier.version &&
					q.questionNumber === identifier.questionNumber
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
				this.discardedAlternatives = [];
			} else {
				this.clearCurrentQuestion();
			}

			return this.currentQuestion;
		} catch {
			this.clearCurrentQuestion();
			return null;
		}
	}

	updateTrackHistory(enabled: boolean) {
		this.trackHistory = enabled;
		this.saveSettings();
	}

	updateIncludeSkipped(enabled: boolean) {
		this.includeSkipped = enabled;
		this.saveSettings();
	}

	/** @param onlyIfCorrect When true, only records the question if the user answered correctly. */
	markCurrentQuestionSeen(onlyIfCorrect = false) {
		if (!this.trackHistory || !this.currentQuestion) return;

		if (onlyIfCorrect) {
			if (this.selectedAnswer === null || this.selectedAnswer !== this.currentQuestion.correct) {
				return;
			}
		}

		const id = generateQuestionId(this.currentQuestion);
		this.seenQuestionIds.add(id);
		this.saveHistory();
	}

	resetHistory() {
		this.seenQuestionIds.clear();
		this.usedQuestionIndices.clear();
		this.saveHistory();
	}

	getRandomQuestion(): FlashcardQuestion | null {
		const activeAreas = this.getActiveAreas();

		if (activeAreas.length === 0) {
			this.clearCurrentQuestion();
			return null;
		}

		const filteredQuestions = this.getFilteredQuestions();

		if (filteredQuestions.length === 0) {
			this.clearCurrentQuestion();
			return null;
		}

		const availableIndices = filteredQuestions
			.map((q) => this.allQuestions.indexOf(q))
			.filter((index) => {
				if (this.usedQuestionIndices.has(index)) return false;
				if (this.trackHistory) {
					const id = generateQuestionId(this.allQuestions[index]);
					if (this.seenQuestionIds.has(id)) return false;
				}
				return true;
			});

		if (availableIndices.length === 0) {
			this.clearCurrentQuestion();
			return null;
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
