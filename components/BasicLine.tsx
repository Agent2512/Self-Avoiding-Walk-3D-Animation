import { Line } from "@react-three/drei"
import { CylinderBufferGeometryProps, CylinderGeometryProps, MeshStandardMaterialProps, useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Color, Vector3 } from "three"

interface IBasicLine {
    pos1: Vector3
    pos2: Vector3
}

export function BasicLine(props: IBasicLine) {
    const cy = useRef<CylinderGeometryProps>()
    const mt = useRef<MeshStandardMaterialProps>()
    const len = props.pos1.distanceTo(props.pos2)



    useEffect(() => {
        const degsToRads = (deg: number) => (deg * Math.PI) / 180.0;

        const rX = (props.pos2.x % 2) * degsToRads(90)
        const rY = (props.pos2.y % 2) * degsToRads(90)
        const rZ = (props.pos2.z % 2) * degsToRads(90)

        if (props.pos2.x != 0) {
            cy.current.rotateX(rX)
            cy.current.translate(0, 0, len*props.pos2.x)

            mt.current.color = new Color(0xff0000)
        }
        if (props.pos2.y != 0) {
            cy.current.rotateY(rY)
            cy.current.translate(0, len*props.pos2.y, 0)

            mt.current.color = new Color(0x00ff00)

        }
        if (props.pos2.z != 0) {
            cy.current.rotateZ(rZ)
            cy.current.translate(len*props.pos2.z, 0, 0)

            mt.current.color = new Color(0x0000ff)

        }
    }, [])

    return (
        <mesh position={props.pos1} >
            <cylinderGeometry args={[1 / 8, 1 / 8, len*2,30]} ref={cy} />
            <meshStandardMaterial ref={mt} />
        </mesh>
    )

}