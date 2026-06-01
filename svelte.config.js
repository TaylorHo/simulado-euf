import { default as vercelAdapter } from '@sveltejs/adapter-vercel';
import { default as staticAdapter } from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: getAdapter(process.env.ADAPTER),
		prerender: {
			origin: 'https://euf.hoffmann.io'
		}
	}
};

function getAdapter(adapter) {
	switch (adapter) {
		case 'vercel':
			return vercelAdapter();
		case 'static':
			return staticAdapter({
				fallback: 'index.html'
			});
		default:
			return staticAdapter({
				fallback: 'index.html'
			});
	}
}

export default config;
