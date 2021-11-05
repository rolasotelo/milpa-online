import { flatten, pluck } from "underscore";
import {
  compute_total_diagonal_adjacencies,
  compute_total_diagonal_adjacencies_of_card_in_milpa,
  is_there_in_slot,
} from "..";
import { Chilli } from "../../cards";
import {
  MILPA_WITH_4_CHILLI_ADJACENCIES_AT_5_AND_2_AT_13,
  MILPA_WITH_6_CHILLI_DIAGONAL_ADJACENCIES,
} from "../../scoring/chilli/tests/stubs/boards";

describe("Compute total diagonal adjacencies to a slot", () => {
  const milpa = MILPA_WITH_4_CHILLI_ADJACENCIES_AT_5_AND_2_AT_13();
  describe("when given milpa with 4 chilli adjacencies at 5 and 2 at 11", () => {
    const allSlots = pluck(flatten(milpa), "cards");
    test("then it should return 4 for Chilli and pivot 5", () => {
      expect(
        compute_total_diagonal_adjacencies(allSlots, 5, Chilli.id)
      ).toEqual(4);
    });
    test("then it should return 2 for Chilli and pivot 11", () => {
      expect(
        compute_total_diagonal_adjacencies(allSlots, 13, Chilli.id)
      ).toEqual(2);
    });
  });
});

describe("Compute total adjacencies of card in milpa", () => {
  const is_there_chilli_in_slot = is_there_in_slot(Chilli);
  const milpa = MILPA_WITH_6_CHILLI_DIAGONAL_ADJACENCIES();
  const compute_total_chilli_diagonally_adjacents_to_chilli =
    compute_total_diagonal_adjacencies_of_card_in_milpa(
      is_there_chilli_in_slot,
      Chilli
    );
  describe("When milpa with 6 chilli diagonal adjacencies is provided", () => {
    test("then it should return 6", () => {
      expect(
        compute_total_chilli_diagonally_adjacents_to_chilli(milpa)
      ).toEqual(6);
    });
  });
});
