import { announcements } from '$lib/data/announcements';
import { getLatestActiveAnnouncement } from '$lib/announcements/helpers';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const latest = getLatestActiveAnnouncement(announcements);

	return new Response(JSON.stringify({ latest }), {
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'public, max-age=300, s-maxage=300'
		}
	});
};

export const prerender = false;
