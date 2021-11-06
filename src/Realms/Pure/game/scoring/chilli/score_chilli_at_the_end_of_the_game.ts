import { Board } from "../../../types";
import { Chilli } from "../../cards";
import {
  compute_total_diagonal_adjacencies_of_card_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { PLUS_PER_CHILLI_DIAGONALLY_ADJACENT } from "./constants";

export const score_chilli_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalChilliDiagonalAdjacencies =
    compute_total_chilli_diagonally_adjacents_to_chilli(milpa);

  return {
    board: { ...board },
    score: totalChilliDiagonalAdjacencies * PLUS_PER_CHILLI_DIAGONALLY_ADJACENT,
  };
};

export const is_there_chilli_in_slot = is_there_in_slot(Chilli);

export const compute_total_chilli_diagonally_adjacents_to_chilli =
  compute_total_diagonal_adjacencies_of_card_in_milpa(
    is_there_chilli_in_slot,
    Chilli
  );
