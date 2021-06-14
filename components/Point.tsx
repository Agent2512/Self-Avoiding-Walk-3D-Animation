import { Vector3 } from "three";

interface IPoint {
    pos: Vector3
    scale?: number|1
}

export function Point(props: IPoint) {

    return (
        <mesh position={props.pos} scale={props.scale}  >
            <sphereBufferGeometry args={[1 / 2, 30, 30]} />
            <meshStandardMaterial color={0x000000} wireframe />
        </mesh>
    )
}