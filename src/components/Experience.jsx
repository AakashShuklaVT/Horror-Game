import { PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Player from './Player'
import Lights from './Lights'
import House from './House'
import TriggerZone from './TriggerZone'
import { audioManager } from '../utils/AudioManager'

const TRIGGERS = [
    {
        id: 'creak_hallway',
        position: [13.66, 7.44, -6.85],
        args: [2, 2, 0.2],
        audioUrl: '/audios/spooky.webm',
        onTrigger: () => {
            console.log("Triggered spooky audio and shake!");
            window.dispatchEvent(new CustomEvent('shake', { 
                detail: { intensity: 0.2, duration: 800 } 
            }));
        }
    },
    {
        id: 'wolves_howl',
        position: [9.73, 4.88, 7.87],
        args: [2, 2, 2], // 2x2x2 box so you can't miss it
        audioUrl: '/audios/wolves-howl.webm',
        onTrigger: () => {
            console.log("Triggered wolves howl!");
            // Added a longer, subtle shake for the howl!
            window.dispatchEvent(new CustomEvent('shake', { 
                detail: { intensity: 0.05, duration: 2000 } 
            }));
        }
    },
    {
        id: 'footsteps_above',
        position: [13.09, 2.33, -0.36],
        args: [3, 2, 3], // Large box to make sure they hit it
        audioUrl: '/audios/running-footsteps.webm',
        audioPosition: [0, 8, 0], // The secret sauce: The sound comes from 8 units ABOVE the player
        audioDistance: 40, // Crank this up so the footsteps are LOUD from the ceiling!
        onTrigger: () => {
            console.log("Footsteps running upstairs with flashlight flicker!");
            
            // Rumble shake
            window.dispatchEvent(new CustomEvent('shake', { 
                detail: { intensity: 0.1, duration: 2000 } 
            }));
            
            // Trigger the flashlight malfunction for 2 seconds
            window.dispatchEvent(new CustomEvent('flicker', {
                detail: { duration: 2000 }
            }));

            // Spawn the horror doll in front of the player's face!
            window.dispatchEvent(new CustomEvent('jumpscare'));
        }
    }
]

export default function Experience() {
    return (
        <Canvas>
            <Physics >
                <PointerLockControls makeDefault />
                <Lights />
                <Player />
                <House />
                {TRIGGERS.map((trigger) => (
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