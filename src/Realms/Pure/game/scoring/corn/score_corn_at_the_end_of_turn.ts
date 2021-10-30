import { find, pluck, reduce } from "underscore";
import { AnyCard, Board, BoardSlot, MilpaRow } from "../../../types";
import { Corn } from "../../cards";
import { is_there_in_slot, transpose_matrix } from "../../helpers";
import { PLUS_PER_CORN_ROW_OR_COLUMN } from "./costants";

export const score_corn_at_the_end_of_turn = (
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

const compute_total_rows_of_card_in_milpa = (
  is_there_card_row: (row: MilpaRow) => Boolean
) => {
  return (milpa: readonly BoardSlot[][]) => {
    return reduce(
      milpa,
      (total, row) => {
        let newTotal = total;
        if (is_there_card_row(pluck(row, "cards") as MilpaRow)) newTotal++;
        return newTotal;
      },
      0
    );
  };
};

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

const is_there_corn_in_slot = is_there_in_slot(Corn);

export const compute_total_rows_of_corn =
  compute_total_rows_of_card_in_milpa(is_there_corn_row);
