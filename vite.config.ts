import { default as vercelAdapter } from '@sveltejs/adapter-vercel';
import { default as staticAdapter } from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

function getAdapter(adapter: string) {
	switch (adapter) {
		case 'mobile':
			return staticAdapter({ fallback: 'index.html' });

		default:
			return vercelAdapter();
	}
}

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: getAdapter(process.env.TARGET || 'web'),
			paths: { origin: 'https://euf.hoffmann.io' }
		})
	],

	// prevent vite from obscuring rust errors
	clearScreen: false,
	server: {
		// make sure this port matches the devUrl port in tauri.conf.json file
		port: 5173,
		// Tauri expects a fixed port, fail if that port is not available
		strictPort: true,
		// if the host Tauri is expecting is set, use it
		host: host || false,
		hmr: host
			? {
					protocol: 'ws',
					host,
					port: 1421
				}
			: undefined,

		watch: {
			// tell vite to ignore watching `src-tauri`
			ignored: ['**/src-tauri/**']
		}
	},
	// Env variables starting with the item of `envPrefix` will be exposed in tauri's source code through `import.meta.env`.
	envPrefix: ['VITE_', 'TAURI_ENV_*'],
	build: {
		// Tauri uses Chromium on Windows and WebKit on macOS and Linux
		target: process.env.TAURI_ENV_PLATFORM == 'windows' ? 'chrome105' : 'safari14.1',
		// don't minify for debug builds
		minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.TAURI_ENV_DEBUG
	}
});
