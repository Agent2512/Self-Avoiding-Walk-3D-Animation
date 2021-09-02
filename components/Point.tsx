import { Color } from "@react-three/fiber";
import {  Vector3 } from "three";

interface IPoint {
    pos: Vector3
    scale?: number|1
    onClick?: () => void
    color?: Color|0x0000ff
}

export function Point(props: IPoint) {

    return (
        <mesh position={props.pos} scale={props.scale} onClick={props.onClick} >
            <sphereBufferGeometry args={[1 / 2, 30, 30]} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    )
}