import type { GitHubIssue } from '$lib/models/githubIssue';
import { GITHUB_ISSUES_API_URL } from '$lib/variables';

type RawIssue = {
	title: string;
	state: 'open' | 'closed';
	html_url: string;
	pull_request?: unknown;
	labels: Array<{ name: string }>;
};

/** Titles from automated bug reports include this prefix; hide it in the UI. */
const REPORTED_BUG_TITLE_PREFIX = /^\s*\[reported bug\]:\s*/i;

/** Enhancement titles often include this prefix; replace with Portuguese */
const FEATURE_TITLE_PREFIX = /^\s*\[feature\]:\s*/i;

function displayIssueTitle(title: string, type: 'bug' | 'enhancement'): string {
	let cleanTitle = title.replace(REPORTED_BUG_TITLE_PREFIX, '').trim();
	if (type === 'enhancement') {
		cleanTitle = cleanTitle.replace(FEATURE_TITLE_PREFIX, '[funcionalidade]: ').trim();
	}
	return cleanTitle;
}

export const load = async () => {
	try {
		const res = await fetch(GITHUB_ISSUES_API_URL, {
			headers: {
				Accept: 'application/vnd.github+json'
			}
		});

		if (!res.ok) {
			return {
				closed: [] as GitHubIssue[],
				openBugs: [] as GitHubIssue[],
				openEnhancements: [] as GitHubIssue[],
				error: `GitHub respondeu com ${res.status}.`
			};
		}

		const data = (await res.json()) as RawIssue[];
		const issuesOnly = data.filter((item) => item.pull_request == null);

		const closed: GitHubIssue[] = [];
		const openBugs: GitHubIssue[] = [];
		const openEnhancements: GitHubIssue[] = [];

		for (const item of issuesOnly) {
			const labels = item.labels.map((l) => l.name);
			const isBug = labels.includes('bug');
			const isEnhancement = labels.includes('enhancement');

			// Only include issues that are either bugs or enhancements
			if (!isBug && !isEnhancement) continue;

			const type: 'bug' | 'enhancement' = isBug ? 'bug' : 'enhancement';

			const row: GitHubIssue = {
				title: displayIssueTitle(item.title, type),
				state: item.state,
				htmlUrl: item.html_url,
				type
			};

			if (item.state === 'closed') {
				closed.push(row);
			} else if (isBug) {
				openBugs.push(row);
			} else if (isEnhancement) {
				openEnhancements.push(row);
			}
		}

		return { closed, openBugs, openEnhancements, error: null as string | null };
	} catch {
		return {
			closed: [] as GitHubIssue[],
			openBugs: [] as GitHubIssue[],
			openEnhancements: [] as GitHubIssue[],
			error: 'Não foi possível carregar as issues no momento.'
		};
	}
};
