import { indexOf } from "underscore";
import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_sharing_slot_with,
} from "..";
import { CropId } from "../../../enums";
import { Board } from "../../../types";
import { Beans } from "../../cards";
import {
  BEANS_HARVEST_TURNS,
  PLUS_PER_BEANS_WHEN_HARVEST,
  PLUS_PER_BEANS_WITH_CORN,
} from "./constants";

export const score_beans_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalBeans = 0;
  let totalBeansWithCorn = 0;
  let totalBeansWithBlueCorn = 0;
  let totalBeansWithRedCorn = 0;

  if (is_beans_harvest_turn(turn)) {
    totalBeans = compute_total_beans(milpa);
    totalBeansWithCorn = compute_total_beans_sharing_with_corn(milpa);
    totalBeansWithBlueCorn = compute_total_beans_sharing_with_blue_corn(milpa);
    totalBeansWithRedCorn = compute_total_beans_sharing_with_red_corn(milpa);
  }
  const totalBeansWithAllCorns =
    totalBeansWithCorn + totalBeansWithBlueCorn + totalBeansWithRedCorn;

  const finalScore =
    totalBeans * PLUS_PER_BEANS_WHEN_HARVEST +
    totalBeansWithAllCorns * PLUS_PER_BEANS_WITH_CORN;

  return {
    board: { ...board },
    score: finalScore,
  };
};

console.log("type of compute total cards", typeof compute_total_cards_in_board);
const compute_total_beans = compute_total_cards_in_board(Beans);

export const is_beans_harvest_turn = (turn: number) => {
  return indexOf(BEANS_HARVEST_TURNS(), turn) >= 0;
};

export const compute_total_beans_sharing_with_corn =
  compute_total_cards_in_board_sharing_slot_with(Beans, CropId.Corn);

export const compute_total_beans_sharing_with_blue_corn =
  compute_total_cards_in_board_sharing_slot_with(Beans, CropId.BlueCorn);

export const compute_total_beans_sharing_with_red_corn =
  compute_total_cards_in_board_sharing_slot_with(Beans, CropId.RedCorn);
