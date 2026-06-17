import { Environment, PointerLockControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Player from './Player'
import Lights from './Lights'
import House from './House'

export default function Experience() {

    return (
        <Canvas>
            <Physics debug>
                <PointerLockControls makeDefault />
                <Lights />
                <Player />
                <House />
                <Environment preset='night' />
            </Physics>
        </Canvas>
    )
}