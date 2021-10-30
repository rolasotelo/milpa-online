import { flatten, pluck, without } from "underscore";
import { compute_total_rows_of_card_in_milpa } from "..";
import { MilpaRow } from "../../../types";
import { Corn } from "../../cards";
import { MILPA_WITH_CORN_ROW } from "../../scoring/corn/test/stubs/boards";

describe("Compute total rows of card", () => {
  describe("when there is rows of card", () => {
    const isCornRow = (row: MilpaRow) => {
      return without(pluck(flatten(row), "id"), Corn.id).length === 0;
    };
    const compute_total_rows_of_corn =
      compute_total_rows_of_card_in_milpa(isCornRow);
    test("then it should return total rows", () => {
      expect(compute_total_rows_of_corn(MILPA_WITH_CORN_ROW())).toEqual(1);
    });
  });
});
