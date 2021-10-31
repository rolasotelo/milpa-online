import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
} from "..";
import { ModifierId } from "../../../enums";
import { Corn } from "../../cards";
import {
  MILPA_WITH_CORN_AND_HUITLACOCHE,
  MILPA_WITH_CORN_COLUMN,
} from "../corn/test/stubs/boards";

describe("Compute total Cards in board", () => {
  describe("when milpa and crop to compare is given", () => {
    const milpa = MILPA_WITH_CORN_COLUMN();
    test("then it should return the total of copies of that crop", () => {
      const compute_total_corn = compute_total_cards_in_board(Corn);
      expect(compute_total_corn(milpa)).toEqual(12);
    });
  });
});

describe("Compute total Cards with modifier in board", () => {
  describe("when milpa and crop and modifier to compare is given", () => {
    const milpa = MILPA_WITH_CORN_AND_HUITLACOCHE();
    test("then it should return the total of copies of that crop", () => {
      const compute_total_corn_with_huitlacoche =
        compute_total_cards_in_board_with_modifier(
          Corn,
          ModifierId.Huitlacoche
        );
      expect(compute_total_corn_with_huitlacoche(milpa)).toEqual(4);
    });
  });
});
