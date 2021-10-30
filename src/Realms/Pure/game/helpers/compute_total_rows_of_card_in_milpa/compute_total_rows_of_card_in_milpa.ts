import { reduce, pluck } from "underscore";
import { MilpaRow, BoardSlot } from "../../../types";

export const compute_total_rows_of_card_in_milpa = (
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
