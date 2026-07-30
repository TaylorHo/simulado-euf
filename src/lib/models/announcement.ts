export type Announcement = {
	id: string;
	title: string;
	message: string;
	startDate: string;
	endDate: string | null;
	href?: string;
};

export type AnnouncementsResponse = {
	latest: Announcement | null;
};
