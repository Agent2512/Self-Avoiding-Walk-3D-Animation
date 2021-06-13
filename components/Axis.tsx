export function Axis(p:{position: [number, number, number]}) {
    return (
        <mesh position={p.position}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={0x000000} />

            <mesh>
                <boxBufferGeometry args={[3, .5, .5]} />
                <meshStandardMaterial color={0x00ff00} />
            </mesh>
            <mesh>
                <boxBufferGeometry args={[.5, .5, 3]} />
                <meshStandardMaterial color={0x0000ff} />
            </mesh>
            <mesh>
                <boxBufferGeometry args={[.5, 3, .5]} />
                <meshStandardMaterial color={0xff0000} />
            </mesh>
        </mesh>
    )
}