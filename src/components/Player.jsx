import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'
import { Vector3 } from 'three'

const SPEED = 5;
const direction = new Vector3()

const Player = () => {
    const body = useRef(null)
    const [subscribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        const keys = getKeys()

        const x = Number(keys.right) - Number(keys.left)
        const z = Number(keys.forward) - Number(keys.backward)

        direction.set(x, 0, z)
        direction.normalize().multiplyScalar(SPEED)

        const velocity = body.current.linvel()

        body.current.setLinvel(
            {
                x: direction.x,
                y: velocity.y,
                z: direction.z,
            },
            true
        )
    })

    return (
        <RigidBody ref={body}
            colliders={false}
            enabledRotations={[false, false, false]}
            position={[0, 1, 0]}
        >
            <CapsuleCollider args={[0.5, 0.5]} />
        </RigidBody>
    )
}

export default Player