import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, { useRef } from 'react'
import * as THREE from 'three'

const SPEED = 3;
const JUMP_FORCE = 3;
const direction = new THREE.Vector3()
const euler = new THREE.Euler(0, 0, 0, 'YXZ')

const Player = () => {
    const body = useRef(null)
    const [subscribeKeys, getKeys] = useKeyboardControls()

    useFrame((state, delta) => {
        if (!body.current) return
        
        const keys = getKeys()

        // 1. Calculate input vectors (Fixed Z-axis: backward is positive, forward is negative)
        const x = Number(keys.right) - Number(keys.left)
        const z = Number(keys.backward) - Number(keys.forward)

        direction.set(x, 0, z)
        if (direction.lengthSq() > 0) {
            direction.normalize().multiplyScalar(SPEED)
        }

        // 2. Rotate the movement direction to match where the camera is looking
        euler.setFromQuaternion(state.camera.quaternion, 'YXZ')
        euler.x = 0 // Don't fly into the sky if looking up
        euler.z = 0 // Ignore head tilt
        direction.applyEuler(euler)

        // 3. Apply the velocity to the physics body
        const velocity = body.current.linvel()

        // Simple Jump (If vertical velocity is near zero, we assume we are touching the ground)
        if (keys.jump && Math.abs(velocity.y) < 0.05) {
            velocity.y = JUMP_FORCE
        }
        body.current.setLinvel(
            {
                x: direction.x,
                y: velocity.y, // Keep gravity
                z: direction.z,
            },
            true
        )

        // 4. Attach the camera to the player's physical body
        const playerPosition = body.current.translation()
        state.camera.position.set(playerPosition.x, playerPosition.y + 0.6, playerPosition.z)
    })

    return (
        <RigidBody ref={body}
            colliders={false}
            enabledRotations={[false, false, false]}
            position={[0, 9, 0]}
        >
            <CapsuleCollider args={[0.5, 0.5]} />
        </RigidBody>
    )
}

export default Player