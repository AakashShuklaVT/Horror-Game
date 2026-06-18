import { PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Player from './Player'
import Lights from './Lights'
import House from './House'
import TriggerZone from './TriggerZone'
import { audioManager } from '../utils/AudioManager'
import { useMemo } from 'react'

// 1. Where do you want invisible trigger boxes? Add as many coordinates as you want here!
const TRIGGER_POSITIONS = [
    { position: [13.66, 7.44, -6.85], args: [2, 2, 0.2] },
    { position: [9.73, 4.88, 7.87], args: [2, 2, 2] },
    { position: [13.09, 2.33, -0.36], args: [3, 2, 3] },
]

// 2. What are the possible scares that can happen?
const SCARE_EVENTS = [
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
        audioUrl: '/audios/wolves-howl.webm',
        onTrigger: () => {
            console.log("Triggered wolves howl!");
            window.dispatchEvent(new CustomEvent('shake', { 
                detail: { intensity: 0.05, duration: 2000 } 
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

export default function Experience() {
    // This runs once when the game loads, shuffling the scares into the positions
    const randomizedTriggers = useMemo(() => {
        // 1. Shuffle the scares array randomly
        const shuffledScares = [...SCARE_EVENTS].sort(() => Math.random() - 0.5);
        
        // 2. Pair each location with a random scare
        return TRIGGER_POSITIONS.map((location, index) => {
            // Loop through the scares if we have more locations than scares
            const scare = shuffledScares[index % shuffledScares.length]; 
            
            return {
                id: `trigger_${index}`,
                position: location.position,
                args: location.args,
                audioUrl: scare.audioUrl,
                audioPosition: scare.audioPosition,
                audioDistance: scare.audioDistance,
                onTrigger: scare.onTrigger
            }
        });
    }, []);

    return (
        <Canvas>
            <Physics >
                <PointerLockControls makeDefault />
                <Lights />
                <Player />
                <House />
                {randomizedTriggers.map((trigger) => (
                    <TriggerZone 
                        key={trigger.id}
                        position={trigger.position}
                        args={trigger.args}
                        audioUrl={trigger.audioUrl}
                        audioPosition={trigger.audioPosition}
                        audioDistance={trigger.audioDistance}
                        onTrigger={trigger.onTrigger}
                    />
                ))}
            </Physics>
        </Canvas>
    )
}