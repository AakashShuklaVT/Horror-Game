class AudioManager {
    constructor() {
        this.sounds = {};
    }

    load(name, path, options = { loop: false, volume: 1.0 }) {
        const audio = new Audio(path);
        audio.loop = options.loop || false;
        audio.volume = options.volume || 1.0;
        
        // Fix for Chromium .webm looping bug
        if (options.loop) {
            audio.addEventListener('ended', () => {
                audio.currentTime = 0;
                audio.play().catch(e => console.warn(e));
            });
        }
        
        this.sounds[name] = audio;
    }

    play(name) {
        const audio = this.sounds[name];
        if (audio && audio.paused) {
            audio.play().catch(e => console.warn(`Could not play ${name}:`, e));
        }
    }

    pause(name) {
        const audio = this.sounds[name];
        if (audio && !audio.paused) {
            audio.pause();
        }
    }
}

export const audioManager = new AudioManager();
