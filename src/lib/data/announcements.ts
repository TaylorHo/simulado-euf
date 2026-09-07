import type { Announcement } from '$lib/models/announcement';

/**
 * External announcements shown at the top of the landing page.
 * Add a new entry here and redeploy the web app to publish it.
 */
export const announcements: Announcement[] = [
	{
		id: '2026-2-exam-date',
		title: 'A prova está próxima!',
		message:
			'A prova da edição 2026/2 será realizada em 30/09. Consulte o local de prova no site oficial.',
		startDate: '2026-09-10',
		endDate: '2026-09-30',
		href: 'https://euf.ifi.unicamp.br/EUF/listarevento.aspx?22026EUF'
	},
	{
		id: '2026-2-registration-end',
		title: 'Últimos dias para se inscrever no EUF 2026/2',
		message: 'As inscrições para a edição 2026/2 encerram em breve. Não deixe para a última hora.',
		startDate: '2026-09-02',
		endDate: '2026-09-09',
		href: 'https://www1.fisica.org.br/~euf/index.php/pt/'
	},
	{
		id: '2026-2-registration-start',
		title: 'Inscrições abertas para o EUF 2026/2',
		message:
			'As inscrições para a edição 2026/2 do EUF já estão abertas. Garanta sua vaga antes do prazo.',
		startDate: '2026-08-05',
		endDate: '2026-09-01',
		href: 'https://www1.fisica.org.br/~euf/index.php/pt/'
	},
	{
		id: '2026-2-edital',
		title: 'Edital do EUF 2026/2 publicado',
		message:
			'O edital da segunda edição de 2026 já está disponível. Confira datas, regras e informações oficiais.',
		startDate: '2026-07-01',
		endDate: '2026-08-04',
		href: 'https://www1.fisica.org.br/~euf/index.php/pt/'
	},
	{
		id: '2026-1-dataset',
		title: 'Questões do EUF 2026/1 já disponíveis',
		message: 'As questões da edição 2026/1 do EUF já estão disponíveis para praticar.',
		startDate: '2026-06-01',
		endDate: '2026-06-30',
		href: '/simulado/'
	}
];
