import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Agent } from "../components/Agent";
import { Axis } from "../components/Axis";
import { BasicLine } from "../components/BasicLine";


export default function page() {


  return (
    <Canvas camera={{ fov: 60, far: 1000, near: .01, position: [0, 5, -5], }}>
      <OrbitControls autoRotateSpeed={1} target={[0, 0, 0]} />
      <ambientLight />
      {/* <Axis position={[0,0,0]} /> */}
      {/* <mesh position={[0, 0, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={0x0000ff} opacity={0} />
      </mesh> */}
      <Agent position={[0, 0, 0]} />
    </Canvas>
  )
}