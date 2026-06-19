export type Announcement = {
	id: string;
	title: string;
	message: string;
	startDate: string;
	endDate: string | null;
	link?: {
		href: string;
		label: string;
	};
};

export type AnnouncementsResponse = {
	latest: Announcement | null;
};
