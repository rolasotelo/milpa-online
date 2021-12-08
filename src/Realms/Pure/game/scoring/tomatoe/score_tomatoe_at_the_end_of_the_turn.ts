import { indexOf } from "underscore";
import { CropId } from "../../../enums";
import { Board } from "../../../types";
import { Tomatoe } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_sharing_slot_with,
} from "../../helpers";
import {
  PLUS_PER_TOMATOE_IN_MILPA,
  PLUS_PER_TOMATOE_WITH_TOMATILLO_OR_CHILLI_IN_MILPA,
  TOMATOE_HARVEST_TURNS,
} from "./constants";

export const score_tomatoe_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalTomatoe = 0;
  let totalTomatoeWithTomatillo = 0;
  let totalTomatoeWithChilli = 0;

  if (is_tomatoe_harvest_turn(turn)) {
    totalTomatoe = compute_total_tomatoe(milpa);
    totalTomatoeWithTomatillo =
      compute_total_tomatoe_sharing_with_tomatillo(milpa);
    totalTomatoeWithChilli = compute_total_tomatoe_sharing_with_chilli(milpa);
  }
  const totalTomatoeWithTomatilloOrChilli =
    totalTomatoeWithTomatillo + totalTomatoeWithChilli;

  const finalScore =
    totalTomatoe * PLUS_PER_TOMATOE_IN_MILPA +
    totalTomatoeWithTomatilloOrChilli *
      PLUS_PER_TOMATOE_WITH_TOMATILLO_OR_CHILLI_IN_MILPA;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_tomatoe = compute_total_cards_in_board(Tomatoe);

export const is_tomatoe_harvest_turn = (turn: number): boolean  => {
  return indexOf(TOMATOE_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_tomatoe_sharing_with_tomatillo =
  compute_total_cards_in_board_sharing_slot_with(Tomatoe, CropId.Tomatillo);

export const compute_total_tomatoe_sharing_with_chilli =
  compute_total_cards_in_board_sharing_slot_with(Tomatoe, CropId.Chilli);
