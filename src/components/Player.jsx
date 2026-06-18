import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const SPEED = 3;
const JUMP_FORCE = 3;
const direction = new THREE.Vector3()
const euler = new THREE.Euler(0, 0, 0, 'YXZ')

const Player = () => {
    const body = useRef(null)
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const [lightTarget] = useState(() => new THREE.Object3D())
    const [torchOn, setTorchOn] = useState(false)

    useEffect(() => {
        const unsubscribe = subscribeKeys(
            (state) => state.torch,
            (pressed) => {
                if (pressed) {
                    setTorchOn((prev) => !prev)
                }
            }
        )
        return () => unsubscribe()
    }, [subscribeKeys])

    useFrame((state) => {
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

        body.current.setLinvel({
            x: direction.x,
            y: velocity.y, // Keep gravity
            z: direction.z,
        }, true)
    })

    return (
        <RigidBody ref={body}
            colliders={false}
            enabledRotations={[false, false, false]}
            position={[0, 9, 0]}
        >
            <CapsuleCollider args={[0.5, 0.5]} />
            <PerspectiveCamera makeDefault position={[0, 0.6, 0]}>
                <primitive object={lightTarget} position={[0, 0, -1]} />

                {/* Put your Spotlight here! */}
                <spotLight
                    target={lightTarget}
                    position={[0, 0, 0]}
                    angle={Math.PI / 9}
                    penumbra={1}
                    intensity={torchOn ? 20 : 0}
                    distance={100}
                    castShadow
                />
            </PerspectiveCamera>
        </RigidBody>
    )
}

export default Player