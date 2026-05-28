import { browser } from '$app/environment';
import { isTauri } from '@tauri-apps/api/core';

export interface PlatformState {
	isMobile: boolean;
	isWeb: boolean;
}

const DEFAULT_PLATFORM_STATE: PlatformState = {
	isMobile: false,
	isWeb: true
};

let platformCache: PlatformState | null = null;

function detectTauriRuntime(): boolean {
	if (!browser) {
		return false;
	}

	try {
		return isTauri();
	} catch {
		return false;
	}
}

export function detectPlatform(): PlatformState {
	if (platformCache) {
		return platformCache;
	}

	if (!browser) {
		return DEFAULT_PLATFORM_STATE;
	}

	const isTauri = detectTauriRuntime();
	if (!isTauri) {
		platformCache = DEFAULT_PLATFORM_STATE;
		return platformCache;
	}

	platformCache = {
		isMobile: true,
		isWeb: false
	};
	return platformCache;
}

export function isTauriMobileApp(): boolean {
	const platform = detectPlatform();
	return platform.isMobile;
}

export { DEFAULT_PLATFORM_STATE };
