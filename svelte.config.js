import { default as vercelAdapter } from '@sveltejs/adapter-vercel';
import { default as staticAdapter } from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: getAdapter(process.env.TARGET),
		prerender: {
			origin: 'https://euf.hoffmann.io'
		}
	}
};

function getAdapter(adapter) {
	switch (adapter) {
		case 'mobile':
			return staticAdapter({
				fallback: 'index.html'
			});
		default:
			return vercelAdapter();
	}
}

export default config;
