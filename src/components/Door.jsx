import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import { useRef, useState } from 'react'
import * as THREE from 'three'

const Door = ({ position, rotation, children }) => {
    const doorRef = useRef(null)
    const [isOpen, setIsOpen] = useState(false)

    const currentSwing = useRef(0)
    const initialEuler = new THREE.Euler(...rotation)
    const q = new THREE.Quaternion()

    useFrame((state, delta) => {
        if (!doorRef.current) return
        const targetSwing = isOpen ? Math.PI / 2 : 0
        currentSwing.current = THREE.MathUtils.lerp(currentSwing.current, targetSwing, delta * 5)
        const newEuler = new THREE.Euler(
            initialEuler.x,
            initialEuler.y,
            initialEuler.z + currentSwing.current,
            'XYZ'
        )
        q.setFromEuler(newEuler)
        doorRef.current.setNextKinematicRotation(q)
    })

    return (
        <RigidBody ref={doorRef}
            position={position}
            rotation={rotation}
            type='kinematicPosition'
            colliders='hull'
        >
            <group userData={{
                isInteractable: true,
                onInteract: () => {
                    setIsOpen((prev) => !prev)
                }
            }}>
                {children}
            </group>
        </RigidBody>
    )
}

export default Door