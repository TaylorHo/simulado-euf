#!/usr/bin/env node
import { rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const buildDir = join(process.cwd(), 'build');

// Files and directories to remove from mobile builds
const itemsToRemove = [
	'assets/formulario.pdf',
	'assets/logo-dark.webp',
	'assets/logo-white.webp',
	'favicon.ico',
	'robots.txt',
	'sitemap.xml',
	'privacy/',
	'all/',
	'announcements.json',
	'simulado/print/'
];

console.log('Cleaning up mobile build...');

itemsToRemove.forEach((item) => {
	const itemPath = join(buildDir, item);
	if (existsSync(itemPath)) {
		rmSync(itemPath, { recursive: true, force: true });
		console.log(`Removed: ${item}`);
	}
});

console.log('Mobile build cleanup complete!');
