import { Board } from "../../../types";

export const compute_board_and_score_at_the_end_of_turn = (
  board: Board,
  score: number
): { board: Board; score: number } => {
  return {
    board: { milpa: [], edges: [] },
    score: 10,
  };
};
