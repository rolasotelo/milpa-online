import { indexOf, reduce } from "underscore";
import { Board, MilpaRow } from "../../../types";
import { Maguey } from "../../cards";
import {
  compute_total_rows_of_card_in_milpa,
  is_there_in_slot,
} from "../../helpers";
import { MAGUEY_HARVEST_TURNS, PLUS_PER_MAGUEY_LINE } from "./constants";

export const score_maguey_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const edges = board.edges;
  let totalMagueyLines = 0;

  if (is_maguey_harvest_turn(turn)) {
    totalMagueyLines = compute_total_rows_of_maguey(edges);
  }

  const finalScore = totalMagueyLines * PLUS_PER_MAGUEY_LINE;

  return {
    board: { ...board },
    score: finalScore,
  };
};

export const is_maguey_harvest_turn = (turn: number): boolean  => {
  return indexOf(MAGUEY_HARVEST_TURNS(), turn) >= 0;
};

export const is_there_maguey_in_slot = is_there_in_slot(Maguey);

export const is_there_maguey_row = (row: MilpaRow): Boolean => {
  const is_there = reduce(
    row,
    (a: Boolean, b) => {
      return a && is_there_maguey_in_slot(b);
    },
    true
  );
  return is_there;
};

export const compute_total_rows_of_maguey =
  compute_total_rows_of_card_in_milpa(is_there_maguey_row);
