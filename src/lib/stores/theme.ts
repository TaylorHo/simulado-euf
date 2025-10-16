import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
	// Initialize theme from localStorage or system preference
	const getInitialTheme = () => {
		if (!browser) return false;
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		return savedTheme ? savedTheme === 'dark' : prefersDark;
	};

	const { subscribe, set, update } = writable(getInitialTheme());

	// Apply theme on initialization
	if (browser) {
		const initialTheme = getInitialTheme();
		applyTheme(initialTheme);
	}

	function applyTheme(isDark: boolean) {
		if (browser) {
			const theme = isDark ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
	}

	return {
		subscribe,
		toggle: () =>
			update((isDark) => {
				const newValue = !isDark;
				applyTheme(newValue);
				return newValue;
			}),
		setTheme: (dark: boolean) => {
			applyTheme(dark);
			set(dark);
		}
	};
}

export const themeStore = createThemeStore();
