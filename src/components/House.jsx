import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import Door from './Door'

export default function House(props) {
  const { nodes, materials } = useGLTF('/house.glb')
  return (
    <>
      <RigidBody type="fixed" colliders="trimesh">
        <group {...props} dispose={null}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
            <mesh geometry={nodes.Hospital_02_36m_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Hospital_02_transl1_m_0.geometry} material={materials.transl1_m} />
            <mesh geometry={nodes.Hospital_02_25m_0.geometry} material={materials.material_2} />
            <mesh geometry={nodes.Hospital_02_37m_0.geometry} material={materials.material_3} />
            <mesh geometry={nodes.Hospital_02_38m_0.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Hospital_02_87m_0.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Hospital_02_32m_0.geometry} material={materials.material_6} />
            <mesh geometry={nodes.Hospital_02_27m_0.geometry} material={materials.material_7} />
            <mesh geometry={nodes.Hospital_02_41m_0.geometry} material={materials.material_8} />
            <mesh geometry={nodes.Hospital_02_42m_0.geometry} material={materials.material_9} />
            <mesh geometry={nodes.Hospital_02_69m_0.geometry} material={materials.material_10} />
            <mesh geometry={nodes.Hospital_02_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst} />
            <mesh geometry={nodes.Hospital_02_26m_0.geometry} material={materials.material_12} />
            <mesh geometry={nodes.Hospital_02_30m_0.geometry} material={materials.material_13} />
            <mesh geometry={nodes.Hospital_02_44m_0.geometry} material={materials.material_14} />
            <mesh geometry={nodes.Hospital_02_46m_0.geometry} material={materials.material_15} />
            <mesh geometry={nodes.Hospital_02_39m_0.geometry} material={materials.material_16} />
            <mesh geometry={nodes.Hospital_02_40m_0.geometry} material={materials.material_17} />
            <mesh geometry={nodes.Hospital_02_31m_0.geometry} material={materials.material_18} />
            <mesh geometry={nodes.Hospital_02_88m_0.geometry} material={materials.material_19} />
            <mesh geometry={nodes.Hospital_02_21m_0.geometry} material={materials.material_20} />
            <mesh geometry={nodes.Hospital_02_47m_0.geometry} material={materials.material_21} />
            <mesh geometry={nodes.Hospital_02_43m_0.geometry} material={materials.material_22} />
            <mesh geometry={nodes.Hospital_02_89m_0.geometry} material={materials.material_23} />
            <mesh geometry={nodes.Hospital_02_76m_0.geometry} material={materials.material_24} />
            <mesh geometry={nodes.Hospital_02_29m_0.geometry} material={materials.material_25} />
            <mesh geometry={nodes.Hospital_02_90m_0.geometry} material={materials.material_26} />
            <mesh geometry={nodes.Hospital_02_82m_0.geometry} material={materials.material_27} />
            <mesh geometry={nodes.Hospital_02_70m_0.geometry} material={materials.material_28} />
            <mesh geometry={nodes.Hospital_02_1m_0.geometry} material={materials.material_29} />
            <mesh geometry={nodes.Hospital_02_GLASS_Clear_Inst_0.geometry} material={materials.GLASS_Clear_Inst} />
            <mesh geometry={nodes.Hospital_02_Whitelight_m_0.geometry} material={materials.Whitelight_m} />
            <mesh geometry={nodes.Hospital_02_91m_0.geometry} material={materials.material_32} />
            <mesh geometry={nodes.Hospital_02_5m_0.geometry} material={materials.material_33} />
            <mesh geometry={nodes.Hospital_02_105m_0.geometry} material={materials['105m']} />
            <mesh geometry={nodes.Hospital_02_Light1_m_0.geometry} material={materials.Light1_m} />
            <mesh geometry={nodes.Hospital_02_8m_0.geometry} material={materials.material_36} />
            <mesh geometry={nodes.Hospital_02_9m_0.geometry} material={materials.material_37} />
            <mesh geometry={nodes.Hospital_02_Light2_m_0.geometry} material={materials.Light2_m} />
            <mesh geometry={nodes.Hospital_02_Light_blue_m3_m1_0.geometry} material={materials.Light_blue_m3_m1} />
            <mesh geometry={nodes.Hospital_02_Light0_m_0.geometry} material={materials.Light0_m} />
            <mesh geometry={nodes.Hospital_02_Light1_m_Inst_0.geometry} material={materials.Light1_m_Inst} />
            <mesh geometry={nodes.Hospital_02_10m_0.geometry} material={materials.material_42} />
            <mesh geometry={nodes.Hospital_02_Light1_m_Inst1_0.geometry} material={materials.Light1_m_Inst1} />
            <mesh geometry={nodes.Hospital_02_92m_0.geometry} material={materials.material_44} />
            <mesh geometry={nodes.Hospital_02_11m_0.geometry} material={materials.material_45} />
            <mesh geometry={nodes.Hospital_02_12m_0.geometry} material={materials.material_46} />
            <mesh geometry={nodes.Hospital_02_33m_0.geometry} material={materials.material_47} />
            <mesh geometry={nodes.Hospital_02_13m_0.geometry} material={materials.material_48} />
            <mesh geometry={nodes.Hospital_02_14m_0.geometry} material={materials.material_49} />
            <mesh geometry={nodes.Hospital_02_17m_0.geometry} material={materials.material_50} />
            <mesh geometry={nodes.Hospital_02_18m_0.geometry} material={materials.material_51} />
            <mesh geometry={nodes.Hospital_02_19m_0.geometry} material={materials.material_52} />
            <mesh geometry={nodes.Hospital_02_20m_0.geometry} material={materials.material_53} />
            <mesh geometry={nodes.Hospital_02_93m_0.geometry} material={materials.material_54} />
            <mesh geometry={nodes.Hospital_02_22m_0.geometry} material={materials.material_55} />
            <mesh geometry={nodes.Hospital_02_94m_0.geometry} material={materials.material_56} />
            <mesh geometry={nodes.Hospital_02_48m_0.geometry} material={materials.material_57} />
            <mesh geometry={nodes.Hospital_02_51m_0.geometry} material={materials.material_58} />
            <mesh geometry={nodes.Hospital_02_52m_0.geometry} material={materials.material_59} />
            <mesh geometry={nodes.Hospital_02_95m_0.geometry} material={materials.material_60} />
            <mesh geometry={nodes.Hospital_02_96m_0.geometry} material={materials.material_61} />
            <mesh geometry={nodes.Hospital_02_97m_0.geometry} material={materials.material_62} />
            <mesh geometry={nodes.Hospital_02_98m_0.geometry} material={materials.material_63} />
            <mesh geometry={nodes.Hospital_02_99m_0.geometry} material={materials.material_64} />
            <mesh geometry={nodes.Hospital_02_100m_0.geometry} material={materials['100m']} />
            <mesh geometry={nodes.Hospital_02_101m_0.geometry} material={materials['101m']} />
            <mesh geometry={nodes.Hospital_02_102m_0.geometry} material={materials['102m']} />
            <mesh geometry={nodes.Hospital_02_103m_0.geometry} material={materials['103m']} />
            <mesh geometry={nodes.Hospital_02_104m_0.geometry} material={materials['104m']} />
          </group>

        </group>
      </RigidBody>
      <Door position={[-20.42, 5.95, 5.95]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[-7.11, 6.451, 6.169]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM001_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM001_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM001_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[-7.11, 6.451, 3.887]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM002_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM002_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM002_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[-2.1, 6.44, 12.62]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM003_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM003_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM003_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[19.53, 6.44, -2.046]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM004_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM004_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM004_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[19.086, 1.3, -6.967]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door0_SM005_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_0} />
          <mesh geometry={nodes.door0_SM005_door0m1_0.geometry} material={materials.door0m1} />
          <mesh geometry={nodes.door0_SM005_door0m2_0.geometry} material={materials.door0m2} />
        </group>
      </Door>
      <Door position={[27.166, 14.29, 14.18]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door3_SM_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_1} />
          <mesh geometry={nodes.door3_SM_door3m_0.geometry} material={materials.door3m} />
        </group>
      </Door>
      <Door position={[29.393, 14.29, 14.18]} rotation={[-Math.PI / 2, 0, -Math.PI]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door3_SM001_GLASS_Dark_Inst_0.geometry} material={materials.GLASS_Dark_Inst_1} />
          <mesh geometry={nodes.door3_SM001_door3m_0.geometry} material={materials.door3m} />
        </group>
      </Door>
      <Door position={[25.17, 14.29, 11.73]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door4_SM_door4m1_0.geometry} material={materials.door4m1} />
          <mesh geometry={nodes.door4_SM_door4m2_0.geometry} material={materials.door4m2} />
        </group>
      </Door>
      <Door position={[-37.21, 5.96, 5.66]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group scale={0.01}>
          <mesh geometry={nodes.door5_SM_door5m_0.geometry} material={materials.door5m} />
        </group>
      </Door>
    </>
  )
}

useGLTF.preload('/house.glb')
