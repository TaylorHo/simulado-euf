export type GitHubIssue = {
	title: string;
	state: 'open' | 'closed';
	htmlUrl: string;
	type: 'bug' | 'enhancement';
};
