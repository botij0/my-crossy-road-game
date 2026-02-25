import { useFrame } from "@react-three/fiber";
import { tileSize, minTileIndex, maxTileIndex } from "../constants/tiles";
import type { RefObject } from "react";
import type { Group } from "three";

export const useVehicleAnimation = (
  ref: RefObject<Group | null>,
  direction: boolean,
  speed: number,
) => {
  useFrame((state, delta) => {
    if (!ref.current) return;
    const vehicle = ref.current;

    const beginningOfRow = (minTileIndex - 2) * tileSize;
    const endOfRow = (maxTileIndex + 2) * tileSize;

    if (direction) {
      vehicle.position.x =
        vehicle.position.x > endOfRow
          ? beginningOfRow
          : vehicle.position.x + speed * delta;
    } else {
      vehicle.position.x =
        vehicle.position.x < beginningOfRow
          ? endOfRow
          : vehicle.position.x - speed * delta;
    }
  });
};
