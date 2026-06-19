import type { AnnouncementsResponse } from '$lib/models/announcement';
import { ANNOUNCEMENTS_API_URL } from '$lib/variables';

const emptyResponse = (): AnnouncementsResponse => ({ latest: null });

export async function fetchLatestAnnouncement(): Promise<AnnouncementsResponse> {
	try {
		const res = await fetch(ANNOUNCEMENTS_API_URL);

		if (!res.ok) {
			return emptyResponse();
		}

		return (await res.json()) as AnnouncementsResponse;
	} catch {
		return emptyResponse();
	}
}
