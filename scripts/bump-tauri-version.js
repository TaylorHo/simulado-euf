#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const version = process.argv[2];
if (!version) {
	console.error('Usage: node scripts/bump-tauri-version.js <version>');
	process.exit(1);
}

const configPath = join(process.cwd(), 'src-tauri/tauri.conf.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

config.version = version;
config.bundle.android.versionCode = (config.bundle.android.versionCode ?? 0) + 1;

writeFileSync(configPath, JSON.stringify(config, null, '\t') + '\n');
