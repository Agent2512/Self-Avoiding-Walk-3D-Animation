import { Line } from "@react-three/drei"
import { Vector3 } from "three"

interface IBasicLine {
    pos1: [number, number, number] | Vector3
    pos2: [number, number, number] | Vector3
}

export function BasicLine(props: IBasicLine) {

    return (
        <Line
            points={[props.pos1, props.pos2]}
            color={0xff000}
            lineWidth={5}
        />
    )

}