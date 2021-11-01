import { pluck, flatten } from "underscore";
import {
  is_diagonal_of_3,
  compute_total_diagonals_of_3_of_card_in_milpa,
} from "..";
import { BlueCorn } from "../../cards";
import { MILPA_WITH_3_BLUE_CORN_DIAGONALS } from "../../scoring/blue-corn/test/stubs/boards";
import { MILPA_WITH_1_CORN_COLUMN } from "../../scoring/corn/test/stubs/boards";
import { is_there_in_slot } from "../is";

describe("Is diagonal of 3", () => {
  const is_there_blue_corn_in_slot = is_there_in_slot(BlueCorn);
  const milpa = MILPA_WITH_3_BLUE_CORN_DIAGONALS();
  const allSlots = pluck(flatten(milpa), "cards");
  describe("when board containing diagonal of 3 and proper pivot is passed", () => {
    test("then it should true", () => {
      expect(
        is_diagonal_of_3(is_there_blue_corn_in_slot, 5, allSlots)
      ).toBeTruthy();
    });
  });
  describe("when board containing diagonal of 3 and bad pivot is passed", () => {
    test("then it should false", () => {
      expect(
        is_diagonal_of_3(is_there_blue_corn_in_slot, 10, allSlots)
      ).toBeFalsy();
    });
  });
});

describe("Compute total diagonals of 3 of card in milpa", () => {
  const is_there_blue_corn_in_slot = is_there_in_slot(BlueCorn);
  describe("when milpa with diagonals of 3 is passed", () => {
    const milpa = MILPA_WITH_3_BLUE_CORN_DIAGONALS();
    const compute_total_diagonals_of_3_blue_corn_in_milpa =
      compute_total_diagonals_of_3_of_card_in_milpa(is_there_blue_corn_in_slot);
    test("then it should return proper count", () => {
      expect(compute_total_diagonals_of_3_blue_corn_in_milpa(milpa)).toEqual(3);
    });
  });
  describe("when milpa without diagonals of 3 is passed", () => {
    const milpa = MILPA_WITH_1_CORN_COLUMN();
    const compute_total_diagonals_of_3_blue_corn_in_milpa =
      compute_total_diagonals_of_3_of_card_in_milpa(is_there_blue_corn_in_slot);
    test("then it should return 0", () => {
      expect(compute_total_diagonals_of_3_blue_corn_in_milpa(milpa)).toEqual(0);
    });
  });
});
