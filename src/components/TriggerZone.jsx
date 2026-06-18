import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React, { useState } from 'react'

const TriggerZone = ({ position, args = [1, 1, 1], onTrigger }) => {
    const [hasTriggered, setHasTriggered] = useState();

    function handleIntersection() {
        if (hasTriggered != true) {
            setHasTriggered(true)
            onTrigger()
        }
    }

    return (
        <RigidBody type='fixed' position={position}>
            <CuboidCollider args={args}
                sensor={true}
                onIntersectionEnter={handleIntersection}
            />
        </RigidBody>
    )
}

export default TriggerZone