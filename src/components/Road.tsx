import type { ReactNode } from "react"
import { tileSize, tilesPerRow } from "../constants/tiles"

type Props = {
  rowIndex: number,
  children?: ReactNode
}

export const Road = ({ rowIndex, children }: Props) => {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
        <meshLambertMaterial color={0x454a59} flatShading />
      </mesh>
      {children}
    </group>
  )
}
