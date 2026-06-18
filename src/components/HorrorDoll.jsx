import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function HorrorDoll(props) {
  const { scene } = useGLTF('/horror-doll.glb')
  // We use SkeletonUtils.clone to safely reuse the model without Three.js errors
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  
  return <primitive object={clone} {...props} />
}
