import type { Alternative, QuestionIdentifier } from '$lib/models/question';

/**
 * Generate a random seed for shuffling
 */
export function generateRandomSeed(): number {
	return Math.floor(Math.random() * 1000000);
}

/**
 * Parse seed from string (from URL parameter)
 */
export function parseSeed(seedStr: string | null | undefined): number | null {
	if (!seedStr) return null;

	const parsed = parseInt(seedStr, 10);
	return isNaN(parsed) ? null : parsed;
}

/**
 * Generate a deterministic seed based on question identifier and base seed
 */
function generateQuestionSeed(question: QuestionIdentifier, baseSeed: number): number {
	// Combine base seed with question attributes to create unique seed per question
	return (
		baseSeed +
		question.year * 7 +
		question.semester * 13 +
		question.version * 17 +
		question.area * 23 +
		question.questionNumber * 31
	);
}

/**
 * Seeded random number generator for deterministic shuffling
 * Uses a Linear Congruential Generator (LCG) algorithm
 */
class SeededRandom {
	private seed: number;

	constructor(seed: number) {
		this.seed = seed;
	}

	/**
	 * Generate next pseudo-random number between 0 and 1
	 */
	next(): number {
		// LCG parameters (from Numerical Recipes)
		const a = 1664525;
		const c = 1013904223;
		const m = 2 ** 32;

		this.seed = (a * this.seed + c) % m;
		return this.seed / m;
	}

	/**
	 * Generate random integer between min (inclusive) and max (exclusive)
	 */
	nextInt(min: number, max: number): number {
		return Math.floor(this.next() * (max - min)) + min;
	}
}

/**
 * Deterministically shuffle alternatives based on question identifier and seed
 * Returns a new array with shuffled alternatives
 */
export function shuffleAlternatives(
	alternatives: Alternative[],
	question: QuestionIdentifier,
	seed: number
): Alternative[] {
	// Generate unique seed for this specific question
	const questionSeed = generateQuestionSeed(question, seed);

	// Create seeded random generator
	const rng = new SeededRandom(questionSeed);

	// Fisher-Yates shuffle with seeded random
	const shuffled = [...alternatives];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = rng.nextInt(0, i + 1);
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
}

/**
 * Find the original alternative index (before shuffling) given the shuffled position
 * This is used when parsing answers from printed exams
 */
export function findOriginalAlternativeIndex(
	shuffledIndex: number,
	question: QuestionIdentifier,
	seed: number
): number {
	// Generate the same shuffle sequence
	const questionSeed = generateQuestionSeed(question, seed);
	const rng = new SeededRandom(questionSeed);

	// Create index mapping array [0, 1, 2, 3, 4]
	const indices = [0, 1, 2, 3, 4];

	// Apply the same Fisher-Yates shuffle to track original positions
	for (let i = indices.length - 1; i > 0; i--) {
		const j = rng.nextInt(0, i + 1);
		[indices[i], indices[j]] = [indices[j], indices[i]];
	}

	// The shuffled position points to the original index
	return indices[shuffledIndex];
}

/**
 * Find the shuffled position given the original alternative index
 * This is the inverse of findOriginalAlternativeIndex
 */
export function findShuffledPosition(
	originalIndex: number,
	question: QuestionIdentifier,
	seed: number
): number {
	// Generate the same shuffle sequence
	const questionSeed = generateQuestionSeed(question, seed);
	const rng = new SeededRandom(questionSeed);

	// Create index mapping array [0, 1, 2, 3, 4]
	const indices = [0, 1, 2, 3, 4];

	// Apply the same Fisher-Yates shuffle
	for (let i = indices.length - 1; i > 0; i--) {
		const j = rng.nextInt(0, i + 1);
		[indices[i], indices[j]] = [indices[j], indices[i]];
	}

	// Find where the original index ended up
	return indices.indexOf(originalIndex);
}

/**
 * Get a default seed for backward compatibility
 */
export function getDefaultSeed(): number {
	return 42; // A stable default seed
}
