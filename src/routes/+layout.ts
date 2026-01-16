export const prerender = true;
export const trailingSlash = 'always';

import posthog from 'posthog-js';
import { browser } from '$app/environment';

export const load = async ({ url }) => {
	if (browser && url.hostname !== 'localhost' && url.hostname !== '127.0.0.1') {
		if (!posthog.__loaded) {
			posthog.init('phc_JBYFh2Ew3kdz3hfD8IIxV62Ml7ipQnAINBYflUv2608', {
				api_host: 'https://insights.hoffmann.io',
				defaults: '2025-05-24'
			});
		}
	}

	return {
		url: url.pathname
	};
};
