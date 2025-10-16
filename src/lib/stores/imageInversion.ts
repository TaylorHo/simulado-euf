import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createImageInversionStore() {
	// Initialize from localStorage
	const getInitialValue = () => {
		if (!browser) return false;
		const saved = localStorage.getItem('invertImages');
		return saved === 'true';
	};

	const { subscribe, set, update } = writable(getInitialValue());

	return {
		subscribe,
		toggle: () =>
			update((current) => {
				const newValue = !current;
				if (browser) {
					localStorage.setItem('invertImages', String(newValue));
				}
				return newValue;
			}),
		set: (value: boolean) => {
			if (browser) {
				localStorage.setItem('invertImages', String(value));
			}
			set(value);
		}
	};
}

export const imageInversionStore = createImageInversionStore();
