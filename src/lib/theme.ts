export const THEME_STORAGE_KEY = 'theme';

/** True when the UI should use light theme (html.theme-light). */
export function prefersLightTheme(): boolean {
	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === 'light') return true;
	if (stored === 'dark') return false;
	return window.matchMedia('(prefers-color-scheme: light)').matches;
}

export function applyDocumentTheme(light: boolean): void {
	document.documentElement.classList.toggle('theme-light', light);
}
