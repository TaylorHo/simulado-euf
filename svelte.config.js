import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'frame-ancestors': ['self'],
				'default-src': ['self'],
				'script-src': [
					'self',
					'https://pagead2.googlesyndication.com',
					'https://insights.hoffmann.io',
					'nonce-wLUOQjI0NQ/fKQUUkcFmzA=='
				]
			}
		},
		prerender: {
			origin: 'https://euf.hoffmann.io'
		}
	}
};

export default config;
