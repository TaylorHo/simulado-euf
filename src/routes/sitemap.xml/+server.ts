import { allQuestions } from '$lib/data';
import { generateQuestionId } from '$lib/services/identifiers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const baseUrl = 'https://euf.hoffmann.io';

	// Generate flashcard URLs
	const flashcardUrls = allQuestions.map((question) => {
		const id = generateQuestionId(question);
		return `${baseUrl}/flashcard/${id}`;
	});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/flashcard</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/changelog</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
${flashcardUrls
	.map(
		(url) => `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600, s-maxage=3600'
		}
	});
};

export const prerender = true;
