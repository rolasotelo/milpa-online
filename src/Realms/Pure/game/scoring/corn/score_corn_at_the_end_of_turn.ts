import { Board } from "../../../types";

export const score_corn_at_the_end_of_turn = (
  board: Board
): { board: Board; score: number } => {
  return {
    board: { milpa: [], edges: [] },
    score: 10,
  };
};
