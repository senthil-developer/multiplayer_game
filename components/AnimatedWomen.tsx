'use client'

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import React, { MutableRefObject, Ref, useEffect, useMemo, useRef, useState } from "react";
import { Group, Object3D, Object3DEventMap } from "three";
import { SkeletonUtils } from "three-stdlib";


export function AnimatedWomen({
 hairColor =  'green' ,
 topColor = 'pink',
 bottomColor = 'brown',...props }) {
   const group = useRef()  as Ref<Group<Object3DEventMap>> | undefined
   const { scene, materials, animations } = useGLTF('/models/AnimatedWoman.glb')
   const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const {nodes} = useGraph(clone)
  const { actions } = useAnimations(animations, group as Object3D<Object3DEventMap> | MutableRefObject<Object3D<Object3DEventMap> | null | undefined> | undefined );
  const [animation, setAnimation] = useState('CharacterArmature|Idle')
  useEffect(() => {
    actions[animation]!.reset().fadeIn(0.5).play();
    return () => {
      actions[animation]!.fadeOut(0.5);
    }
  },[animation])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="CharacterArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Casual_Body" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Body_1" geometry={(nodes.Casual_Body_1 as THREE.SkinnedMesh).geometry} material={materials.White} skeleton={(nodes.Casual_Body_1 as THREE.SkinnedMesh).skeleton}>
              <meshStandardMaterial color={topColor} />
            </skinnedMesh>
            <skinnedMesh name="Casual_Body_2" geometry={(nodes.Casual_Body_2 as THREE.SkinnedMesh).geometry} material={materials.Skin} skeleton={(nodes.Casual_Body_2 as THREE.SkinnedMesh).skeleton} />
          </group>
          <group name="Casual_Feet" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Feet_1" geometry={(nodes.Casual_Feet_1 as THREE.SkinnedMesh).geometry} material={materials.Skin} skeleton={(nodes.Casual_Feet_1 as THREE.SkinnedMesh).skeleton} />
            <skinnedMesh name="Casual_Feet_2" geometry={(nodes.Casual_Feet_2 as THREE.SkinnedMesh).geometry} material={materials.Grey} skeleton={(nodes.Casual_Feet_2 as THREE.SkinnedMesh).skeleton} />
          </group>
          <group name="Casual_Head" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="Casual_Head_1" geometry={(nodes.Casual_Head_1 as THREE.SkinnedMesh).geometry} material={materials.Skin} skeleton={(nodes.Casual_Head_1 as THREE.SkinnedMesh).skeleton} />
            <skinnedMesh name="Casual_Head_2" geometry={(nodes.Casual_Head_2 as THREE.SkinnedMesh).geometry} material={materials.Hair_Blond} skeleton={(nodes.Casual_Head_2 as THREE.SkinnedMesh).skeleton}>
              <meshStandardMaterial color={hairColor} />
            </skinnedMesh>            
            <skinnedMesh name="Casual_Head_3" geometry={(nodes.Casual_Head_3 as THREE.SkinnedMesh).geometry} material={materials.Hair_Brown} skeleton={(nodes.Casual_Head_3 as THREE.SkinnedMesh).skeleton} />
            <skinnedMesh name="Casual_Head_4" geometry={(nodes.Casual_Head_4 as THREE.SkinnedMesh).geometry} material={materials.Brown} skeleton={(nodes.Casual_Head_4 as THREE.SkinnedMesh).skeleton} />
          </group>
          <skinnedMesh name="Casual_Legs" geometry={(nodes.Casual_Legs as THREE.SkinnedMesh).geometry} material={materials.Orange} skeleton={(nodes.Casual_Legs as THREE.SkinnedMesh).skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <meshStandardMaterial color={bottomColor} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  )
}
