import React from 'react'

const Lights = () => {
    return (
        <group>
            <ambientLight intensity={1} />
            {/* <directionalLight position={[5, 5, 5]} intensity={3} castShadow /> */}
        </group>
    )
}

export default Lights