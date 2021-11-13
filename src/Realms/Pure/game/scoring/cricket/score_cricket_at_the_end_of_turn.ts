import { Board } from "../../../types";
import { Cricket } from "../../cards";
import { compute_total_cards_in_board } from "../../helpers";

export const score_cricket_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let totalPumpkin =
    compute_total_crickets(milpa) + compute_total_crickets(edges);

  return {
    board: { ...board },
    score: 0,
  };
};

export const compute_total_crickets = compute_total_cards_in_board(Cricket);
