import type { Announcement } from '$lib/models/announcement';

/**
 * External announcements shown at the top of the landing page.
 * Add a new entry here and redeploy the web app to publish it.
 */
export const announcements: Announcement[] = [
	{
		id: '2026-1-dataset',
		title: 'Questões do EUF 2026/1 já disponíveis',
		message: 'As questões da edição 2026/1 do EUF já estão disponíveis para praticar.',
		startDate: '2026-06-01',
		endDate: '2026-07-01',
		link: {
			href: '/simulado/',
			label: 'Iniciar simulado'
		}
	}
];
