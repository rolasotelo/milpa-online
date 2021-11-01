import { Board } from "../../../types";
import { BlueCorn } from "../../cards";
import {
  compute_total_diagonals_of_3_of_card_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { PLUS_PER_BLUE_CORN_DIAGONAL_OF_3 } from "./constants";

export const score_blue_corn_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalDiagonalsOf3 = compute_total_diagonals_of_3_blue_corn(milpa);

  return {
    board: { ...board },
    score: totalDiagonalsOf3 * PLUS_PER_BLUE_CORN_DIAGONAL_OF_3,
  };
};

export const is_there_blue_corn_in_slot = is_there_in_slot(BlueCorn);

export const compute_total_diagonals_of_3_blue_corn =
  compute_total_diagonals_of_3_of_card_in_milpa(is_there_blue_corn_in_slot);
