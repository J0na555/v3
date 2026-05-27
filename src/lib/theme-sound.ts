const THEME_TOGGLE_SOUND = '/sound/dragon-studio-light-switch-382712.mp3';

let audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement {
	if (!audio) {
		audio = new Audio(THEME_TOGGLE_SOUND);
		audio.preload = 'auto';
		audio.volume = 0.5;
	}
	return audio;
}

/** Preload the clip on pointer down so play() works on the click. */
export function warmThemeSound(): void {
	if (typeof window === 'undefined') return;
	const el = getAudio();
	if (el.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
		el.load();
	}
}

export function playThemeToggleSound(): void {
	if (typeof window === 'undefined') return;

	const el = getAudio();
	el.currentTime = 0;
	void el.play().catch(() => {
		el.load();
		void el.play().catch(() => {});
	});
}
