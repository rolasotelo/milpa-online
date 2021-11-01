import { compute_total_modifiers_in_board } from "..";
import { ModifierId } from "../../../enums";
import {
  MILPA_WITH_12_CORN_4_WITH_HUITLACOCHE,
  MILPA_WITH_1_CORN_COLUMN,
} from "../corn/test/stubs/boards";

describe("Compute total modifiers in board", () => {
  const total_huitlacoche = compute_total_modifiers_in_board(
    ModifierId.Huitlacoche
  );
  describe("when passed a board containing cards with modifiers", () => {
    const milpa = MILPA_WITH_12_CORN_4_WITH_HUITLACOCHE();
    test("then it should return total of modifiers", () => {
      expect(total_huitlacoche(milpa)).toEqual(5);
    });
  });

  describe("when passed a board without modifiers", () => {
    const milpa = MILPA_WITH_1_CORN_COLUMN();
    test("then it should return 0", () => {
      expect(total_huitlacoche(milpa)).toEqual(0);
    });
  });
});
