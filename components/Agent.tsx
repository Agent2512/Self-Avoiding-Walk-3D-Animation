import { useState } from "react"
import { Vector3 } from "three"
import { BasicLine } from "./BasicLine"
import { Point } from "./point"

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
    const [world, setWorld] = useState<Vector3[]>([new Vector3().fromArray([1, 0, 0])])

    const findOptions = (): Vector3[] => {
        let options: Vector3[] = []
        for(let o of allOptions) {
            const newPos = new Vector3().fromArray(o.dir).add(pos)
            
            console.log(world.includes(newPos));
            
            // if(!world.includes(newPos)) {
            //     options.push(newPos)
            // }
        }
        return options
    }
    findOptions()
    // console.log(findOptions());
    

    return (
        <>
            <Point pos={pos} scale={1 / 2} />
            <Point pos={pos} scale={1} />

            {allOptions.map((op, i) => {
                const [x, y, z] = op.dir
                const addPos = new Vector3().fromArray(op.dir).add(pos)

                return <BasicLine key={i} pos1={pos} pos2={addPos} />
            })}
        </>
    )
}