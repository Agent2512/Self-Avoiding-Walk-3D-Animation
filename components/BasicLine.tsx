import { Line } from "@react-three/drei"

interface IBasicLine {
    pos1: [number, number, number]
    pos2: [number, number, number]
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