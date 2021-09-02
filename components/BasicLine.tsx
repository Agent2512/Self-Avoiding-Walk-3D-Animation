import { Line } from "@react-three/drei"
import { CylinderBufferGeometryProps, CylinderGeometryProps, MeshProps, MeshStandardMaterialProps, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Color, Vector3 } from "three"

interface IBasicLine {
    pos1: Vector3
    pos2: Vector3
}

export function BasicLine(props: IBasicLine) {
    const cy = useRef<CylinderGeometryProps>()
    const mt = useRef<MeshStandardMaterialProps>()
    const mesh = useRef<MeshProps>()
    const len = props.pos1.distanceTo(props.pos2)
    

    useEffect(() => {
        const degsToRads = (deg: number) => (deg * Math.PI) / 180.0;
        const pos = new Vector3()
        pos.add(props.pos1)
        pos.add(props.pos2)

        const rX = (pos.x % 2) * degsToRads(90)
        const rY = (pos.y % 2) * degsToRads(90)
        const rZ = (pos.z % 2) * degsToRads(90)
        
        rX!=0&&cy.current.rotateZ(rX)
        rY!=0&&cy.current.rotateY(rY)
        rZ!=0&&cy.current.rotateX(rZ)

        pos.set(pos.x / 2, pos.y / 2, pos.z / 2)
        cy.current.translate(pos.x, pos.y, pos.z)
    }, [])

    return (
        <mesh ref={mesh} >
            <cylinderGeometry args={[1 / 8, 1 / 8, len, 30]} ref={cy} />
            <meshStandardMaterial ref={mt} color={0xffffff} />
        </mesh>
    )

}