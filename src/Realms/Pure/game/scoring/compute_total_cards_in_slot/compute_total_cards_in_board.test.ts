import { compute_total_cards_in_board } from "..";
import { Corn } from "../../cards";
import { MILPA_WITH_CORN_COLUMN } from "../corn/test/stubs/boards";

describe("Compute total Cards in board", () => {
  describe("when milpa and crop to compare is given", () => {
    const milpa = MILPA_WITH_CORN_COLUMN();
    test("then it should return the total of copies of that crop", () => {
      const compute_total_corn = compute_total_cards_in_board(Corn);
      expect(compute_total_corn(milpa)).toEqual(12);
    });
  });
});
