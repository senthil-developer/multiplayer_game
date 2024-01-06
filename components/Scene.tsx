'use client'

import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { AnimatedWomen } from "./AnimatedWomen";
import { useEffect, useState } from "react";


export const Scene = () => {
    return(
        <>
            <Environment preset="sunset" />
            <ambientLight intensity={0.3} />
            <ContactShadows blur={2}/>
            <OrbitControls />
            <AnimatedWomen bottomColor="yellow" hairColor="pink"/>
            <AnimatedWomen position-x={1} hairColor="black" bottomColor="red"/>
            <AnimatedWomen position-x={2} hairColor="black" bottomColor="blue"/>
            <AnimatedWomen position-x={-1} hairColor="black" bottomColor="green"/>
            <AnimatedWomen position-x={-2} hairColor="black" bottomColor="violet"/>
        </>
)};