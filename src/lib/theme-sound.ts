const THEME_TOGGLE_SOUND = '/sound/dragon-studio-light-switch-382712.mp3';

let audio: HTMLAudioElement | null = null;

export function playThemeToggleSound(): void {
	if (typeof window === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	if (!audio) {
		audio = new Audio(THEME_TOGGLE_SOUND);
		audio.preload = 'auto';
		audio.volume = 0.5;
	}

	audio.currentTime = 0;
	void audio.play().catch(() => {});
}
