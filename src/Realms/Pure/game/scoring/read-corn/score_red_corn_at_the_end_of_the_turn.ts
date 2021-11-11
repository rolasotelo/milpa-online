import { indexOf } from "underscore";
import { ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { RedCorn } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
} from "../../helpers";
import {
  PLUS_PER_RED_CORN_WHEN_HARVEST,
  PLUS_PER_RED_CORN_WHEN_HARVEST_WITH_HUITLACOCHE,
  RED_CORN_HARVEST_TURNS,
} from "./constants";

export const score_red_corn_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalRedCorn = 0;
  let totalRedCornWithHuitlacoche = 0;

  if (is_red_corn_harvest_turn(turn)) {
    totalRedCorn = compute_total_red_corns(milpa);
    totalRedCornWithHuitlacoche =
      compute_total_red_corn_with_huitlacoche(milpa);
  }

  const finalScore =
    totalRedCorn * PLUS_PER_RED_CORN_WHEN_HARVEST +
    totalRedCornWithHuitlacoche *
      PLUS_PER_RED_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_red_corns = compute_total_cards_in_board(RedCorn);

export const is_red_corn_harvest_turn = (turn: number) => {
  return indexOf(RED_CORN_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_red_corn_with_huitlacoche =
  compute_total_cards_in_board_with_modifier(RedCorn, ModifierId.Huitlacoche);
