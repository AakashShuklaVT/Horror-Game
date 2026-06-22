import { PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import Player from './Player'
import Lights from './Lights'
import House from './House'
import TriggerZone from './TriggerZone'
import { audioManager } from '../utils/AudioManager'
import { TRIGGER_POSITIONS, SCARE_EVENTS } from '../data/scareEvents'
import { useMemo } from 'react'

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
            <Physics>
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