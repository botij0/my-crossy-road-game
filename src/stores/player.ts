import type { MoveDirection } from "../types/PlayerTypes";
import { endsUpInValidPosition } from "../utils/endsUpInValidPosition";

export const state: {
  currentRow: number;
  currentTile: number;
  movesQueue: MoveDirection[];
} = {
  currentRow: 0,
  currentTile: 0,
  movesQueue: [],
};

export const queueMove = (direction: MoveDirection) => {
  const isValidMove = endsUpInValidPosition(
    { rowIndex: state.currentRow, tileIndex: state.currentTile },
    [...state.movesQueue, direction],
  );

  if (!isValidMove) return;
  state.movesQueue.push(direction);
};

export const stepCompleted = () => {
  const direction = state.movesQueue.shift();

  if (direction === "forward") state.currentRow += 1;
  if (direction === "backward") state.currentRow -= 1;
  if (direction === "left") state.currentTile -= 1;
  if (direction === "right") state.currentTile += 1;
};
