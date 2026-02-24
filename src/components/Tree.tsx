import { tileSize } from '../constants/tiles';

type Props = {
  tileIndex: number;
  height: number;
}

export const Tree = ({ tileIndex, height }: Props) => {
  return (
    <group position-x={tileIndex * tileSize}>
      <mesh position-z={height / 2 + 20} castShadow receiveShadow>
        <boxGeometry args={[30, 30, height]} />
        <meshLambertMaterial color={0x7aa21d} />
      </mesh>
      <mesh position-z={10} castShadow receiveShadow>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0x4d2926} />
      </mesh>
    </group>
  )
}
