import type { ReactNode } from "react";
import { tilesPerRow, tileSize } from "../constants/tiles";

type Props = {
  rowIndex: number;
  children?: ReactNode;
}

export const Grass = ({ rowIndex, children }: Props) => {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} />
      </mesh>
      {children}
    </group>
  );
}