import type { AnnouncementsResponse } from '#lib/models/announcement.ts';
import { isTauriMobileApp } from '#lib/utils/platform.ts';
import { ANNOUNCEMENTS_API_URL } from '#lib/variables.ts';

const emptyResponse = (): AnnouncementsResponse => ({ latest: null });

export async function fetchLatestAnnouncement(): Promise<AnnouncementsResponse> {
	try {
		const isTauriMobile = isTauriMobileApp();
		let res: Response;
		if (isTauriMobile) {
			const { fetch } = await import('@tauri-apps/plugin-http');
			res = await fetch(ANNOUNCEMENTS_API_URL);
		} else {
			res = await fetch(ANNOUNCEMENTS_API_URL);
		}

		if (!res.ok) {
			return emptyResponse();
		}

		return (await res.json()) as AnnouncementsResponse;
	} catch {
		return emptyResponse();
	}
}
