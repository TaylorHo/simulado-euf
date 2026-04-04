import type { GitHubBugIssue } from '$lib/models/githubIssue';
import { GITHUB_BUG_ISSUES_API_URL } from '$lib/variables';

type RawIssue = {
	title: string;
	state: 'open' | 'closed';
	html_url: string;
	pull_request?: unknown;
};

/** Titles from automated bug reports include this prefix; hide it in the UI. */
const REPORTED_BUG_TITLE_PREFIX = /^\s*\[reported bug\]\s*-\s*/i;

function displayIssueTitle(title: string): string {
	return title.replace(REPORTED_BUG_TITLE_PREFIX, '').trim();
}

export const load = async () => {
	try {
		const res = await fetch(GITHUB_BUG_ISSUES_API_URL, {
			headers: {
				Accept: 'application/vnd.github+json'
			}
		});

		if (!res.ok) {
			return {
				open: [] as GitHubBugIssue[],
				closed: [] as GitHubBugIssue[],
				error: `GitHub respondeu com ${res.status}.`
			};
		}

		const data = (await res.json()) as RawIssue[];
		const issuesOnly = data.filter((item) => item.pull_request == null);

		const open: GitHubBugIssue[] = [];
		const closed: GitHubBugIssue[] = [];

		for (const item of issuesOnly) {
			const row: GitHubBugIssue = {
				title: displayIssueTitle(item.title),
				state: item.state,
				htmlUrl: item.html_url
			};
			if (item.state === 'open') open.push(row);
			else closed.push(row);
		}

		return { open, closed, error: null as string | null };
	} catch {
		return {
			open: [] as GitHubBugIssue[],
			closed: [] as GitHubBugIssue[],
			error: 'Não foi possível carregar as issues no momento.'
		};
	}
};
