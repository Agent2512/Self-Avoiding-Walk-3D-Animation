import { useState } from "react"
import { Vector3 } from "three"
import { BasicLine } from "./BasicLine"

interface IAgent {
    position: [number, number, number]
}

const allOptions: {
    name: string;
    dir: [number, number, number];
}[] = [
        {
            name: "right",
            dir: [1, 0, 0]
        },
        {
            name: "left",
            dir: [-1, 0, 0]
        },
        {
            name: "up",
            dir: [0, 1, 0]
        },
        {
            name: "down",
            dir: [0, -1, 0]
        },
        {
            name: "forward",
            dir: [0, 0, 1]
        },
        {
            name: "backward",
            dir: [0, 0, -1]
        },
    ]

export function Agent(props: IAgent) {
    const [pos, setPos] = useState(new Vector3(props.position[0], props.position[1], props.position[2]))

    const t = () => {
        console.log("test");
        setPos(pre => {
            const current: [number, number, number] = [...pre.toArray()]
            return new Vector3(0, 0, current[2] + 1)
        })
    }
    const findOptions = (): [number, number, number][] => {
        let options: [number, number, number][] = []

        return options
    }

    return (
        <>
            <mesh position={pos} onClick={t} >
                <sphereBufferGeometry args={[.5, 10, 10]} />
                <meshStandardMaterial color={0xff0000} wireframe />
            </mesh>
            {allOptions.map(i => {
                const [x, y, z] = i.dir
                const addPos = new Vector3().fromArray(i.dir).add(pos)
                
                return <BasicLine pos1={pos} pos2={addPos} />
            })}
        </>
    )
}