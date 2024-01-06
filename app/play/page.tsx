"use client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "@/components/Scene";
import { SocketIndicator } from "@/components/Connection";

const PlayPage = () => {
  console.log(SocketIndicator);
  return (
    <>
      <SocketIndicator />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Scene />
      </Canvas>
    </>
  );
};

export default PlayPage;
