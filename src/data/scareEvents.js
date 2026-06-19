// 1. Where do you want invisible trigger boxes? Add as many coordinates as you want here!
export const TRIGGER_POSITIONS = [
    { position: [13.66, 7.44, -6.85], args: [2, 2, 0.2] },
    { position: [9.73, 4.88, 7.87], args: [2, 2, 2] },
    { position: [13.09, 2.33, -0.36], args: [3, 2, 3] },
]

// 2. What are the possible scares that can happen?
export const SCARE_EVENTS = [
    {
        audioUrl: '/audios/spooky.webm',
        onTrigger: () => {
            console.log("Triggered spooky audio and shake!");
            window.dispatchEvent(new CustomEvent('shake', {
                detail: { intensity: 0.2, duration: 800 }
            }));
        }
    },
    {
        audioUrl: '/audios/running-footsteps.webm',
        audioPosition: [0, 8, 0],
        audioDistance: 40,
        onTrigger: () => {
            console.log("Footsteps running upstairs with flashlight flicker and jumpscare!");
            window.dispatchEvent(new CustomEvent('shake', {
                detail: { intensity: 0.1, duration: 2000 }
            }));
            window.dispatchEvent(new CustomEvent('flicker', {
                detail: { duration: 2000 }
            }));
            window.dispatchEvent(new CustomEvent('jumpscare'));
        }
    },
    {
        // 👻 Add a "Fake Out" scare! Sometimes, nothing happens at all to build tension.
        audioUrl: null,
        onTrigger: () => console.log("Player hit a trigger, but we spared them this time...")
    }
] 