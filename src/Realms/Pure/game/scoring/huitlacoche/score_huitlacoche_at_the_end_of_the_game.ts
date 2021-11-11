import {
  compute_total_blue_corn_with_huitlacoche,
  compute_total_corn_with_huitlacoche,
  compute_total_red_corn_with_huitlacoche,
} from "..";
import { ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { RedCorn } from "../../cards";
import { compute_total_cards_in_board_with_modifier } from "../../helpers";
import { PLUS_PER_HUITLACOCHE_IN_ALL_CORNS } from "./constants";

export const score_huitlacoche_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;

  const totalCornWithHuitlacoche = compute_total_corn_with_huitlacoche(milpa);
  const totalBlueCornWithHuitlacoche =
    compute_total_blue_corn_with_huitlacoche(milpa);
  const totalRedCornWithHuitlacoche =
    compute_total_red_corn_with_huitlacoche(milpa);

  const huitlacocheInAllColors =
    totalCornWithHuitlacoche > 0 &&
    totalBlueCornWithHuitlacoche > 0 &&
    totalRedCornWithHuitlacoche > 0;

  return {
    board: { ...board },
    score: huitlacocheInAllColors ? PLUS_PER_HUITLACOCHE_IN_ALL_CORNS : 0,
  };
};
