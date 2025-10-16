import { ExamService } from '$lib/services/exam';
import type { GeneratedExam } from '$lib/models/exam';
import type { QuestionAlternative } from '$lib/models/question';
import type { ExamScore } from '$lib/models/score';
import { browser } from '$app/environment';

interface ExamProgress {
	examId: string;
	answers: Array<{ questionIndex: number; answer: number | null }>;
	discarded: Array<{ questionIndex: number; alternatives: number[] }>;
	currentQuestionIndex: number;
	isFinalized: boolean;
}

class ExamStore {
	private examService = new ExamService();
	private readonly STORAGE_KEY = 'simulado-euf-progress';

	currentExam = $state<GeneratedExam | null>(null);
	currentQuestionIndex = $state(0);
	showResults = $state(false);
	examScore = $state<ExamScore | null>(null);

	private saveProgress() {
		if (!browser || !this.currentExam) return;

		const progress: ExamProgress = {
			examId: this.currentExam.id,
			answers: this.currentExam.questions.map((q, index) => ({
				questionIndex: index,
				answer: q.selected
			})),
			discarded: this.currentExam.questions.map((q, index) => ({
				questionIndex: index,
				alternatives: q.discarded
			})),
			currentQuestionIndex: this.currentQuestionIndex,
			isFinalized: this.showResults
		};

		localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
	}

	private loadProgress(examId: string): boolean {
		if (!browser) return false;

		const stored = localStorage.getItem(this.STORAGE_KEY);
		if (!stored) return false;

		try {
			const progress: ExamProgress = JSON.parse(stored);
			if (progress.examId !== examId) return false;

			// Apply saved answers and discarded using service methods
			// Note: currentExam and service's exam are the same object reference
			progress.answers.forEach(({ questionIndex, answer }) => {
				if (this.currentExam && this.currentExam.questions[questionIndex]) {
					this.examService.selectAnswer(questionIndex, answer);
				}
			});

			progress.discarded.forEach(({ questionIndex, alternatives }) => {
				if (this.currentExam && this.currentExam.questions[questionIndex]) {
					// Toggle each discarded alternative (they start empty, so toggle adds them)
					alternatives.forEach((alt) => {
						this.examService.toggleDiscarded(questionIndex, alt);
					});
				}
			});

			this.currentQuestionIndex = progress.currentQuestionIndex;

			// If exam was finalized, restore results
			if (progress.isFinalized) {
				this.examScore = this.examService.calculateScore();
				this.showResults = true;
			}

			return true;
		} catch (error) {
			console.error('Error loading progress:', error);
			return false;
		}
	}

	getSavedExamId(): string | null {
		if (!browser) return null;

		const stored = localStorage.getItem(this.STORAGE_KEY);
		if (!stored) return null;

		try {
			const progress: ExamProgress = JSON.parse(stored);
			return progress.examId;
		} catch {
			return null;
		}
	}

	clearProgress() {
		if (!browser) return;
		localStorage.removeItem(this.STORAGE_KEY);
	}

	generateNewExam() {
		this.currentExam = this.examService.generateExam();
		this.currentQuestionIndex = 0;
		this.showResults = false;
		this.examScore = null;
		this.clearProgress();
		this.saveProgress();
		return this.currentExam;
	}

	loadExamFromIdentifier(identifier: string, skipProgressLoad = false) {
		this.currentExam = this.examService.loadExamFromIdentifier(identifier);
		this.currentQuestionIndex = 0;
		this.showResults = false;
		this.examScore = null;

		if (!skipProgressLoad) {
			this.loadProgress(identifier);
		} else {
			this.saveProgress();
		}

		return this.currentExam;
	}

	loadExamFromCode(code: string, skipProgressLoad = false) {
		this.currentExam = this.examService.loadExamFromIdentifier(code);
		this.currentQuestionIndex = 0;
		this.showResults = false;
		this.examScore = null;

		if (!skipProgressLoad) {
			this.loadProgress(code);
		} else {
			this.saveProgress();
		}

		return this.currentExam;
	}

	selectAnswer(questionIndex: number, alternative: QuestionAlternative | null) {
		if (!this.currentExam) return;

		// Update the current exam directly
		this.currentExam.questions[questionIndex].selected = alternative;

		// Also update in the service to keep them in sync
		this.examService.selectAnswer(questionIndex, alternative);

		this.saveProgress();
	}

	toggleDiscarded(questionIndex: number, alternative: QuestionAlternative) {
		if (!this.currentExam) return;

		const question = this.currentExam.questions[questionIndex];
		const discardedIndex = question.discarded.indexOf(alternative);

		if (discardedIndex === -1) {
			question.discarded.push(alternative);
		} else {
			question.discarded.splice(discardedIndex, 1);
		}

		// Also update in the service to keep them in sync
		this.examService.toggleDiscarded(questionIndex, alternative);

		this.saveProgress();
	}

	goToQuestion(index: number) {
		if (this.currentExam && index >= 0 && index < this.currentExam.questions.length) {
			this.currentQuestionIndex = index;
			this.saveProgress();
		}
	}

	nextQuestion() {
		if (this.currentExam && this.currentQuestionIndex < this.currentExam.questions.length - 1) {
			this.currentQuestionIndex++;
			this.saveProgress();
		}
	}

	previousQuestion() {
		if (this.currentQuestionIndex > 0) {
			this.currentQuestionIndex--;
			this.saveProgress();
		}
	}

	finishExam() {
		this.examScore = this.examService.calculateScore();
		this.showResults = true;
		this.saveProgress(); // Save the finalized state
	}

	resetExam() {
		this.currentExam = null;
		this.currentQuestionIndex = 0;
		this.showResults = false;
		this.examScore = null;
		this.clearProgress();
	}

	get answeredCount(): number {
		if (!this.currentExam) return 0;
		return this.currentExam.questions.filter((q) => q.selected !== null).length;
	}

	get totalQuestions(): number {
		return this.currentExam?.questions.length ?? 0;
	}
}

export const examStore = new ExamStore();
