import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function Experience() {

    return (
        <Canvas>
            <OrbitControls makeDefault />

            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={3} castShadow />

            {/* Basic Box to show the scene is working */}
            <mesh castShadow receiveShadow position={[0, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial />
            </mesh>
            <Environment preset='studio' background/>
        </Canvas>
    )
}