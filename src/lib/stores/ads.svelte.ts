import { browser } from '$app/environment';

class AdsPreferenceStore {
	private _enabled = $state(true);

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('ads-enabled');
			this._enabled = saved !== null ? saved === 'true' : true;
		}
	}

	get enabled() {
		return this._enabled;
	}

	toggle() {
		this._enabled = !this._enabled;
		if (browser) {
			localStorage.setItem('ads-enabled', String(this._enabled));
		}
	}
}

export const adsPreferenceStore = new AdsPreferenceStore();
