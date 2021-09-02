import { useFrame, useThree } from "@react-three/fiber"
import random from "random"
import { useEffect, useState } from "react"
import { Vector3 } from "three"
import { randInt } from "three/src/math/MathUtils"
import { BasicLine } from "./BasicLine"
import { Point } from "./Point"

interface IAgent {
    position: [number, number, number]
    maxX: number
    maxY: number
    maxZ: number
}

const randVec = (arr: Vector3[]) => arr[random.int(0, arr.length - 1)];

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
    const [pos, setPos] = useState(new Vector3().fromArray(props.position))
    const [world, setWorld] = useState<Vector3[]>([new Vector3().fromArray(props.position)])

    const findOptions = (): Vector3[] => {
        let options: Vector3[] = []

        for (let o of allOptions) {
            const newPos = new Vector3().fromArray(o.dir).add(pos)

            const maxX: boolean = (newPos.x > props.maxX || newPos.x < -props.maxX) && true
            const maxY: boolean = (newPos.y > props.maxY || newPos.y < -props.maxY) && true
            const maxZ: boolean = (newPos.z > props.maxZ || newPos.z < -props.maxZ) && true

            if (!maxX && !maxY && !maxZ) {
                const isPosInWord = [...world].filter(i => {
                    return i.equals(newPos)
                })[0] ? true : false;


                if (!isPosInWord) {
                    options.push(new Vector3().fromArray(o.dir))
                }
            }
        }

        return options
    }

    const move = () => {
        const options = findOptions()

        if (options.length != 0) {
            const option = randVec(options)
            const newPos = new Vector3().copy(pos).add(option)

            setWorld(pre => [...pre, newPos])
            setPos(newPos)

        } else {
            setPos(new Vector3().fromArray(props.position))
            setWorld([new Vector3().fromArray(props.position)])
        }

    }

    const Lines = () => {
        const l: JSX.Element[] = []
        if (world.length > 1) {
            for (let i = 0; i < world.length; i++) {
                const v1 = world[i];
                const v2 = world[i + 1] || false;

                v2 != false && l.push(<BasicLine key={i} pos1={v1} pos2={v2} />)
            }
        }
        return l
    }

    const points = () => {
        const p: JSX.Element[] = []
        if (world.length > 1) {
            for (let i = 0; i < world.length; i++) {
                p.push(<Point key={i} scale={1 / 2} pos={world[i]} color={0x0000ff} />)
                // p.push(<pointLight key={i} position={world[i]} />)
            }
        }
        return p
    }

    let t = 0
    useFrame((s, f) => {
        t++
        if (t == 10) {
            move()
            t = 0
        }
    })

    return (
        <>
            {/* <Point pos={pos} scale={1 / 2} /> */}
            <Point pos={pos} scale={1} onClick={move} color={0xff0000} />
            {Lines()}
            {points()}
        </>
    )
}