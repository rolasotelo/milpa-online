import { reduce } from "underscore";
import { Board, BoardSlot, MilpaRow } from "../../../types";
import { Corn } from "../../cards";
import {
  compute_total_rows_of_card_in_milpa,
  is_there_in_slot,
  transpose_matrix,
} from "../../helpers";
import { PLUS_PER_CORN_ROW_OR_COLUMN } from "./constants";

export const score_corn_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  let totalRows = compute_total_rows_of_corn(milpa);
  let totalColumns = compute_total_rows_of_corn(
    transpose_matrix(milpa as BoardSlot[][])
  );
  const total = totalColumns + totalRows;
  return {
    board: { ...board },
    score: total * PLUS_PER_CORN_ROW_OR_COLUMN,
  };
};

export const is_there_corn_in_slot = is_there_in_slot(Corn);

export const is_there_corn_row = (row: MilpaRow): Boolean => {
  const is_there = reduce(
    row,
    (a: Boolean, b) => {
      return a && is_there_corn_in_slot(b);
    },
    true
  );
  return is_there;
};

export const compute_total_rows_of_corn =
  compute_total_rows_of_card_in_milpa(is_there_corn_row);
