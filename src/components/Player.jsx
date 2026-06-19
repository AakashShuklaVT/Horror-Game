import { PerspectiveCamera, useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody } from '@react-three/rapier'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { audioManager } from '../utils/AudioManager'
import HorrorDoll from './HorrorDoll'
import { useScareEffects } from '../hooks/useScareEffects'

const SPEED = 3;
const JUMP_FORCE = 3;
const direction = new THREE.Vector3()
const euler = new THREE.Euler(0, 0, 0, 'YXZ')

const Player = () => {
    const body = useRef(null)
    const spotLightRef = useRef(null)
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const [lightTarget] = useState(() => new THREE.Object3D())
    const [torchOn, setTorchOn] = useState(false)
    const { shakeIntensity, isFlickering, showDoll } = useScareEffects()

    useEffect(() => {
        const unsubscribeTorch = subscribeKeys(
            (state) => state.torch,
            (pressed) => {
                if (pressed) {
                    setTorchOn((prev) => !prev)
                }
            }
        )

        // Developer Tool: Press P to print current position
        const unsubscribePrint = subscribeKeys(
            (state) => state.print,
            (pressed) => {
                if (pressed && body.current) {
                    const pos = body.current.translation()
                    console.log(`COPIED TRIGGER POS: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}]`)
                }
            }
        )

        return () => {
            unsubscribeTorch()
            unsubscribePrint()
        }
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

        // Audio Manager: Footsteps
        const isMoving = Math.abs(velocity.x) > 0.1 || Math.abs(velocity.z) > 0.1;
        const isGrounded = Math.abs(velocity.y) < 0.05;

        if (isMoving && isGrounded) {
            audioManager.play('footsteps');
        } else { 
            audioManager.pause('footsteps');
        }

        // Screen Shake Logic (shakes camera, torch, and target together)
        if (shakeIntensity > 0) {
            state.camera.position.x = (Math.random() - 0.5) * shakeIntensity;
            state.camera.position.y = 0.6 + (Math.random() - 0.5) * shakeIntensity;
        } else {
            state.camera.position.set(0, 0.6, 0);
        }

        // Flashlight Flicker Logic
        if (spotLightRef.current) {
            if (isFlickering) {
                // 50% chance to be completely off, simulating a short circuit
                spotLightRef.current.intensity = Math.random() > 0.5 ? 20 : 0;
            } else {
                // Return to normal player-controlled state
                spotLightRef.current.intensity = torchOn ? 20 : 0;
            }
        }
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
                
                <group visible={showDoll}>
                    <HorrorDoll 
                        position={[0, -0.4, -0.8]} // Brought much closer to the camera and slightly down
                        rotation={[0, 0, 0]} // Flipped 180 degrees to face the player
                        scale={0.5} 
                    />
                </group>

                {/* Put your Spotlight here! */}
                <spotLight
                    ref={spotLightRef}
                    target={lightTarget}
                    position={[0, 0, 0]}
                    angle={Math.PI / 8}
                    penumbra={1}
                    intensity={torchOn ? 20 : 0}
                    distance={50}
                    color="#eaf868"
                    castShadow
                />
            </PerspectiveCamera>
        </RigidBody>
    )
}

export default Player