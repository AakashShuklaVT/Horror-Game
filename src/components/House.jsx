import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function House() {
    // 1. Load the model from the public folder
    const house = useGLTF('./house.glb')

    return (
        // 2. Wrap the house in a trimesh collider so walls are solid
        <RigidBody type="fixed" colliders="trimesh">
            {/* 3. The primitive tag renders existing 3D objects directly */}
            <primitive object={house.scene} />
        </RigidBody>
    )
}
