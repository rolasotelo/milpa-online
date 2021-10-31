import { indexOf, reduce } from "underscore";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
  compute_total_modifiers_in_board,
} from "..";
import { ModifierId } from "../../../enums";
import { Board, BoardSlot, MilpaRow } from "../../../types";
import { Corn } from "../../cards";
import {
  compute_total_rows_of_card_in_milpa,
  is_there_in_slot,
  transpose_matrix,
} from "../../helpers";
import {
  CORN_HARVEST_TURNS,
  PLUS_PER_CORN_ROW_OR_COLUMN,
  PLUS_PER_CORN_WHEN_HARVEST,
} from "./costants";

export const score_corn_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalCorn = 0;
  let totalCornWithHuitlacoche = 0;

  if (is_corn_harvest_turn(turn)) {
    totalCorn = compute_total_corns(milpa);
    totalCornWithHuitlacoche = compute_total_corn_with_huitlacoche(milpa);
  }
  const totalCornWithoutHuitlacoche = totalCorn - totalCornWithHuitlacoche;
  const finalScore =
    totalCornWithoutHuitlacoche * PLUS_PER_CORN_WHEN_HARVEST +
    totalCornWithHuitlacoche * PLUS_PER_CORN_WHEN_HARVEST * 2;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_corns = compute_total_cards_in_board(Corn);

export const is_corn_harvest_turn = (turn: number) => {
  return indexOf(CORN_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_corn_with_huitlacoche =
  compute_total_cards_in_board_with_modifier(Corn, ModifierId.Huitlacoche);
