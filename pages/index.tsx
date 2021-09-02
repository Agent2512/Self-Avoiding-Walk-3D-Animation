import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
import { Agent } from "../components/Agent";
import { Axis } from "../components/Axis";
import { BasicLine } from "../components/BasicLine";


export default function page() {


  return (
    <Canvas camera={{ fov: 80, far: 1000, near: .01, position: [10, 10, -10] }}>
      <OrbitControls autoRotate autoRotateSpeed={2} target={[0, 0, 0]} />
      <ambientLight />
      
      <Agent position={[0, 0, 0]} maxX={10} maxZ={5} maxY={10} />


      <mesh position={[0,0,0]} scale={1}  >
        <boxBufferGeometry args={[1,1,1]} />
        <meshStandardMaterial color={0xff0000} wireframe />
      </mesh>
      {/* <mesh position={[4,4,7]} scale={1}  >
        <boxBufferGeometry args={[1,1,1]} />
        <meshStandardMaterial color={0xff0000} wireframe />
      </mesh> */}

      {/* <BasicLine pos1={new Vector3(0,0,0)} pos2={new Vector3(4,4,7)} /> */}
    </Canvas>
  )
}