import { allQuestions } from '$lib/data';
import { generateQuestionId } from '$lib/services/identifiers';
import type { EntryGenerator } from './$types';

// Generate all possible flashcard IDs for prerendering
export const entries: EntryGenerator = () => {
	const ids = allQuestions.map((question) => {
		const id = generateQuestionId(question);
		return { id };
	});

	return ids;
};

export const prerender = true;
