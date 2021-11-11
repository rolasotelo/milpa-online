import { Board } from "../../../types";
import { RedCorn } from "../../cards";
import {
  compute_total_squares_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { PLUS_PER_RED_CORN_SQUARE } from "./constants";

export const score_red_corn_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalSquares = compute_total_squares_of_red_corn(milpa);

  return {
    board: { ...board },
    score: totalSquares * PLUS_PER_RED_CORN_SQUARE,
  };
};

export const is_there_red_corn_in_slot = is_there_in_slot(RedCorn);

export const compute_total_squares_of_red_corn = compute_total_squares_in_milpa(
  is_there_red_corn_in_slot
);
