import type { Announcement } from '$lib/models/announcement';

function toDateString(date: Date): string {
	return date.toISOString().slice(0, 10);
}

export function isAnnouncementActive(announcement: Announcement, now: Date = new Date()): boolean {
	const today = toDateString(now);

	if (today < announcement.startDate) {
		return false;
	}

	if (announcement.endDate !== null && today > announcement.endDate) {
		return false;
	}

	return true;
}

export function getLatestActiveAnnouncement(
	announcements: Announcement[],
	now: Date = new Date()
): Announcement | null {
	const active = announcements
		.filter((announcement) => isAnnouncementActive(announcement, now))
		.sort((a, b) => b.startDate.localeCompare(a.startDate));

	return active[0] ?? null;
}
