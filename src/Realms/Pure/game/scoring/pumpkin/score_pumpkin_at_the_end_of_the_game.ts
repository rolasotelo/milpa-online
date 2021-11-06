import { Board } from "../../../types";
import { Pumpkin } from "../../cards";
import { compute_total_cards_in_board, is_there_in_slot } from "../../helpers";
import { PLUS_PER_PUMPKIN_AT_THE_END_OF_GAME } from "./constants";

export const score_pumpkin_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  const totalPumpkin =
    compute_total_pumpkins(milpa) + compute_total_pumpkins(edges);
  const totalScore = totalPumpkin * PLUS_PER_PUMPKIN_AT_THE_END_OF_GAME;
  return {
    board: { ...board },
    score: totalScore,
  };
};

export const compute_total_pumpkins = compute_total_cards_in_board(Pumpkin);

export const is_there_pumpkin_in_slot = is_there_in_slot(Pumpkin);
