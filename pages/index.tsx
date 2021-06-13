import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React from "react";
import { Axis } from "../components/axis";


export default function page() {


  return (
    <Canvas camera={{ fov: 100, far: 1000, near: .01, position: [0, 5, -5], }}>
      <OrbitControls autoRotate={false} rotateSpeed={.1} target={[0,0,0]}  />
      <ambientLight />
      <Axis position={[0,0,0]} />
    </Canvas>
  )
}