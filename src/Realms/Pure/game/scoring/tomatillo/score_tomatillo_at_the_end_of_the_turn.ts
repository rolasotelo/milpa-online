import { indexOf } from "underscore";
import { CropId } from "../../../enums";
import { Board } from "../../../types";
import { Tomatillo } from "../../cards";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_sharing_slot_with,
} from "../../helpers";
import {
  PLUS_PER_TOMATILLO_IN_MILPA,
  PLUS_PER_TOMATILLO_NOT_ALONE_IN_MILPA,
  TOMATILLO_HARVEST_TURNS,
} from "./constants";

export const score_tomatillo_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalTomatillo = 0;
  let totalTomatilloNotAlone = 0;

  if (is_tomatillo_harvest_turn(turn)) {
    totalTomatillo = compute_total_tomatillo(milpa);
    const totalTomatilloWithTomatoe =
      compute_total_tomatillo_sharing_with_tomatoe(milpa);
    const totalTomatilloWithChilli =
      compute_total_tomatillo_sharing_with_chilli(milpa);
    const totalTomatilloWithFlowers =
      compute_total_tomatillo_sharing_with_flower(milpa);

    totalTomatilloNotAlone =
      totalTomatilloWithTomatoe +
      totalTomatilloWithChilli +
      totalTomatilloWithFlowers;
  }
  const finalScore =
    totalTomatillo * PLUS_PER_TOMATILLO_IN_MILPA +
    totalTomatilloNotAlone * PLUS_PER_TOMATILLO_NOT_ALONE_IN_MILPA;

  return {
    board: { ...board },
    score: finalScore,
  };
};

const compute_total_tomatillo = compute_total_cards_in_board(Tomatillo);

export const is_tomatillo_harvest_turn = (turn: number): boolean  => {
  return indexOf(TOMATILLO_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_tomatillo_sharing_with_tomatoe =
  compute_total_cards_in_board_sharing_slot_with(Tomatillo, CropId.Tomatoe);

export const compute_total_tomatillo_sharing_with_chilli =
  compute_total_cards_in_board_sharing_slot_with(Tomatillo, CropId.Chilli);

export const compute_total_tomatillo_sharing_with_flower =
  compute_total_cards_in_board_sharing_slot_with(Tomatillo, CropId.Flower);
