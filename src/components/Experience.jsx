import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import Player from './Player'
import Lights from './Lights'

export default function Experience() {

    return (
        <Canvas>
            <Physics debug>
                <OrbitControls makeDefault />
                <Lights />
                <Player />
                <RigidBody type='fixed' colliders='cuboid'>
                    <mesh position={[0, -0.1, 0]}>
                        <boxGeometry args={[50, 0.5, 50]} />
                        <meshStandardMaterial />
                    </mesh> 
                </RigidBody>
                <Environment preset='night' />
            </Physics>
        </Canvas>
    )
}