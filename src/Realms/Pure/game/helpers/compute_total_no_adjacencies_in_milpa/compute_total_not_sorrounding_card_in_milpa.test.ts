import {
  compute_total_not_sorrounding_card_in_milpa,
  is_there_in_slot,
} from "..";
import { Tomatillo } from "../../cards";
import { MILPA_WITH_4_TOMATILLOS_2_NOT_ALONE } from "../../scoring/tomatillo/test/stubs/boards";

describe("Compute total not around adjacencies", () => {
  const milpa = MILPA_WITH_4_TOMATILLOS_2_NOT_ALONE();
  describe("when given milpa 1 tomatillo not sorrunded by tomatillo", () => {
    const is_there_tomatillo_in_slot = is_there_in_slot(Tomatillo);
    const compute_total_tomatillo_not_sorrounded_by_tomatillo =
      compute_total_not_sorrounding_card_in_milpa(
        is_there_tomatillo_in_slot,
        Tomatillo
      );
    test("should return 1", () => {
      expect(
        compute_total_tomatillo_not_sorrounded_by_tomatillo(milpa)
      ).toEqual(1);
    });
  });
});
