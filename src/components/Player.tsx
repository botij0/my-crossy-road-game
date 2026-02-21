export const Player = () => {
  return (
    <group>
      <mesh position={[0, 0, 10]}>
        <boxGeometry args={[15, 15, 20]} />
        <meshLambertMaterial color={0xffffff} />
      </mesh>
    </group>
  );
}
