import { indexOf } from "underscore";
import { CropId } from "../../../enums";
import { Board } from "../../../types";
import { Chilli } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_sharing_slot_with,
} from "../../helpers";
import {
  CHILLI_HARVEST_TURNS,
  PLUS_PER_CHILLI_WHEN_HARVEST,
  PLUS_PER_CHILLI_WHEN_HARVEST_WITH_ANOTHER_CROP,
} from "./constants";

export const score_chilli_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalChilli = 0;
  let totalChilliNotAlone = 0;

  if (is_chilli_harvest_turn(turn)) {
    totalChilli = compute_total_chilli(milpa);
    const totalChilliWithCorn = compute_total_chilli_sharing_with_corn(milpa);
    const totalChilliWithBlueCorn =
      compute_total_chilli_sharing_with_blue_corn(milpa);
    const totalChilliWithRedCorn =
      compute_total_chilli_sharing_with_red_corn(milpa);
    const totalChilliWithTomatoe =
      compute_total_chilli_sharing_with_tomatoe(milpa);
    const totalChilliWithTomatillo =
      compute_total_chilli_sharing_with_tomatillo(milpa);
    totalChilliNotAlone =
      totalChilliWithCorn +
      totalChilliWithBlueCorn +
      totalChilliWithRedCorn +
      totalChilliWithTomatoe +
      totalChilliWithTomatillo;
  }

  const finalScore =
    totalChilli * PLUS_PER_CHILLI_WHEN_HARVEST +
    totalChilliNotAlone * PLUS_PER_CHILLI_WHEN_HARVEST_WITH_ANOTHER_CROP;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_chilli = compute_total_cards_in_board(Chilli);

export const is_chilli_harvest_turn = (turn: number): boolean  => {
  return indexOf(CHILLI_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_chilli_sharing_with_corn =
  compute_total_cards_in_board_sharing_slot_with(Chilli, CropId.Corn);

export const compute_total_chilli_sharing_with_blue_corn =
  compute_total_cards_in_board_sharing_slot_with(Chilli, CropId.BlueCorn);

export const compute_total_chilli_sharing_with_red_corn =
  compute_total_cards_in_board_sharing_slot_with(Chilli, CropId.RedCorn);

export const compute_total_chilli_sharing_with_tomatoe =
  compute_total_cards_in_board_sharing_slot_with(Chilli, CropId.Tomatoe);

export const compute_total_chilli_sharing_with_tomatillo =
  compute_total_cards_in_board_sharing_slot_with(Chilli, CropId.Tomatillo);
