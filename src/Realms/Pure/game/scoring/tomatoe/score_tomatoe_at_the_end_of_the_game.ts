import { Board } from "../../../types";
import { Tomatoe } from "../../cards";
import { compute_total_cards_in_board, is_there_in_slot } from "../../helpers";
import {
  MIN_TOMATOE_TO_SCORE_END_OF_GAME,
  PLUS_IF_AT_LEAST_MIN_TOMATOE_IN_MILPA,
} from "./constants";

export const score_tomatoe_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const totalTomatoe = compute_total_tomatoe(milpa);
  const totalScore =
    totalTomatoe >= MIN_TOMATOE_TO_SCORE_END_OF_GAME
      ? PLUS_IF_AT_LEAST_MIN_TOMATOE_IN_MILPA
      : 0;

  return {
    board: { ...board },
    score: totalScore,
  };
};

export const compute_total_tomatoe = compute_total_cards_in_board(Tomatoe);

export const is_there_tomatoe_in_slot = is_there_in_slot(Tomatoe);
