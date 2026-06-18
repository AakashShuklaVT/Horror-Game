import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { PositionalAudio } from '@react-three/drei';
import { useState, useRef } from 'react'

const TriggerZone = ({ position, args = [1, 1, 1], onTrigger, audioUrl, audioPosition = [0, 0, 0], audioDistance = 10 }) => {
    const [hasTriggered, setHasTriggered] = useState(false);
    const audioRef = useRef();

    function handleIntersection() {
        if (!hasTriggered) {
            setHasTriggered(true)
            if (onTrigger) onTrigger()
            if (audioRef.current) {
                audioRef.current.play()
            }
        }
    }

    return (
        <RigidBody type='fixed' position={position}>
            <CuboidCollider args={args}
                sensor={true}
                onIntersectionEnter={handleIntersection}
            />
            {audioUrl && (
                <PositionalAudio 
                    ref={audioRef} 
                    url={audioUrl} 
                    position={audioPosition} // NEW: Offset the sound from the trigger!
                    distance={audioDistance} // How loud/far it reaches
                    loop={false}
                />
            )}
        </RigidBody>
    )
}

export default TriggerZone