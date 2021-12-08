import { indexOf } from "underscore";
import { ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { Corn } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
} from "../../helpers";
import {
  CORN_HARVEST_TURNS,
  PLUS_PER_CORN_WHEN_HARVEST,
  PLUS_PER_CORN_WHEN_HARVEST_WITH_HUITLACOCHE,
} from "./constants";

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
  const finalScore =
    totalCorn * PLUS_PER_CORN_WHEN_HARVEST +
    totalCornWithHuitlacoche * PLUS_PER_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_corns = compute_total_cards_in_board(Corn);

export const is_corn_harvest_turn = (turn: number): boolean  => {
  return indexOf(CORN_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_corn_with_huitlacoche =
  compute_total_cards_in_board_with_modifier(Corn, ModifierId.Huitlacoche);
