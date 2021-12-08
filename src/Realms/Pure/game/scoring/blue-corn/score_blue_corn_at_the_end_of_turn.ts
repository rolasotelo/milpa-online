import { indexOf } from "underscore";
import { ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { BlueCorn } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
} from "../../helpers";
import {
  BLUE_CORN_HARVEST_TURNS,
  PLUS_PER_BLUE_CORN_WHEN_HARVEST,
  PLUS_PER_BLUE_CORN_WHEN_HARVEST_WITH_HUITLACOCHE,
} from "./constants";

export const score_blue_corn_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalBlueCorn = 0;
  let totalBlueCornWithHuitlacoche = 0;

  if (is_blue_corn_harvest_turn(turn)) {
    totalBlueCorn = compute_total_blue_corns(milpa);
    totalBlueCornWithHuitlacoche =
      compute_total_blue_corn_with_huitlacoche(milpa);
  }

  const finalScore =
    totalBlueCorn * PLUS_PER_BLUE_CORN_WHEN_HARVEST +
    totalBlueCornWithHuitlacoche *
      PLUS_PER_BLUE_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_blue_corns = compute_total_cards_in_board(BlueCorn);

export const is_blue_corn_harvest_turn = (turn: number): boolean  => {
  return indexOf(BLUE_CORN_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_blue_corn_with_huitlacoche =
  compute_total_cards_in_board_with_modifier(BlueCorn, ModifierId.Huitlacoche);
