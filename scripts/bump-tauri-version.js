#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const version = process.argv[2];
if (!version) {
	console.error('Usage: node scripts/bump-tauri-version.js <version>');
	process.exit(1);
}

const root = process.cwd();

const configPath = join(root, 'src-tauri/tauri.conf.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

config.version = version;
config.bundle.android.versionCode = (config.bundle.android.versionCode ?? 0) + 1;

writeFileSync(configPath, JSON.stringify(config, null, '\t') + '\n');

const cargoTomlPath = join(root, 'src-tauri/Cargo.toml');
const cargoToml = readFileSync(cargoTomlPath, 'utf8');
writeFileSync(cargoTomlPath, cargoToml.replace(/^version = ".*"$/m, `version = "${version}"`));

const cargoLockPath = join(root, 'src-tauri/Cargo.lock');
const cargoLock = readFileSync(cargoLockPath, 'utf8');
writeFileSync(
	cargoLockPath,
	cargoLock.replace(/(\[\[package\]\]\nname = "app"\nversion = ")[^"]+(")/, `$1${version}$2`)
);
