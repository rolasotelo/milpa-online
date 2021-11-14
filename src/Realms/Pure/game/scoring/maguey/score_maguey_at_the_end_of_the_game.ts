import { Board } from "../../../types";
import { Maguey } from "../../cards";
import { compute_total_cards_in_board, is_there_in_slot } from "../../helpers";
import { PLUS_PER_MAGUEY_IN_DIFFERENT_LINE } from "./constants";

export const score_maguey_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const edges = board.edges;
  const totalDifferentEdgesWithMaguey =
    (!!compute_total_magueys([edges[0]]) ? 1 : 0) +
    (!!compute_total_magueys([edges[1]]) ? 1 : 0) +
    (!!compute_total_magueys([edges[2]]) ? 1 : 0) +
    (!!compute_total_magueys([edges[3]]) ? 1 : 0);

  return {
    board: { ...board },
    score: totalDifferentEdgesWithMaguey * PLUS_PER_MAGUEY_IN_DIFFERENT_LINE,
  };
};

const compute_total_magueys = compute_total_cards_in_board(Maguey);
