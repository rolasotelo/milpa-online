import { Board } from "../../../types";
import { Tomatillo } from "../../cards";
import {
  compute_total_not_sorrounding_card_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { PLUS_PER_LONELY_TOMATILLO } from "./constants";

export const score_tomatillo_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalTomatilloNotSorroundedByTomatillo =
    compute_total_tomatillo_not_sorrounded_by_tomatillo(milpa);

  const finalScore =
    totalTomatilloNotSorroundedByTomatillo * PLUS_PER_LONELY_TOMATILLO;

  return {
    board: { ...board },
    score: finalScore,
  };
};

export const is_there_tomatillo_in_slot = is_there_in_slot(Tomatillo);

export const compute_total_tomatillo_not_sorrounded_by_tomatillo =
  compute_total_not_sorrounding_card_in_milpa(
    is_there_tomatillo_in_slot,
    Tomatillo
  );
