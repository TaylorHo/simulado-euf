import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
	const { id } = params;

	// Validate that the ID exists and has a reasonable format
	if (!id || !/^[a-z0-9]+$/i.test(id)) {
		throw redirect(302, '/flashcard');
	}

	return {
		questionId: id
	};
};

// Enable prerendering for static generation
export const prerender = true;
