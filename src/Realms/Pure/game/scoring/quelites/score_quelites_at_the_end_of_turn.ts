import { indexOf } from "underscore";
import { CropId } from "../../../enums";
import { Board } from "../../../types";
import { Quelites } from "../../cards";
import {
  compute_total_cards_in_board_sharing_slot_with,
  is_there_in_slot,
} from "../../helpers";
import {
  PLUS_PER_QUELITES_WITH_CORN,
  QUELITES_HARVEST_TURNS,
} from "./constants";

export const score_quelites_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalQuelitesWithCorn = 0;
  let totalQuelitesWithBlueCorn = 0;
  let totalQuelitesWithRedCorn = 0;

  if (is_quelites_harvest_turn(turn)) {
    totalQuelitesWithCorn = compute_total_quelites_sharing_with_corn(milpa);
    totalQuelitesWithBlueCorn =
      compute_total_quelites_sharing_with_blue_corn(milpa);
    totalQuelitesWithRedCorn =
      compute_total_quelites_sharing_with_red_corn(milpa);
  }

  const totalQuelitesWithAllCorns =
    totalQuelitesWithCorn +
    totalQuelitesWithBlueCorn +
    totalQuelitesWithRedCorn;

  return {
    board: { ...board },
    score: totalQuelitesWithAllCorns * PLUS_PER_QUELITES_WITH_CORN,
  };
};

export const is_quelites_harvest_turn = (turn: number) => {
  return indexOf(QUELITES_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_quelites_sharing_with_corn =
  compute_total_cards_in_board_sharing_slot_with(Quelites, CropId.Corn);

export const compute_total_quelites_sharing_with_red_corn =
  compute_total_cards_in_board_sharing_slot_with(Quelites, CropId.RedCorn);

export const compute_total_quelites_sharing_with_blue_corn =
  compute_total_cards_in_board_sharing_slot_with(Quelites, CropId.BlueCorn);

export const is_there_quelites_in_slot = is_there_in_slot(Quelites);
