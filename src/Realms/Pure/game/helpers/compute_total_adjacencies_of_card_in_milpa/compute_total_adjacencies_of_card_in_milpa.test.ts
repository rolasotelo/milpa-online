import { flatten, pluck } from "underscore";
import {
  compute_total_adjacencies,
  compute_total_adjacencies_of_card_in_milpa,
  is_there_in_slot,
} from "..";
import { Corn } from "../../cards";
import { MILPA_WITH_1_CORN_COLUMN } from "../../scoring/corn/test/stubs/boards";

describe("Compute total adjacencies", () => {
  const milpa = MILPA_WITH_1_CORN_COLUMN();
  describe("when given milpa with adjacencies", () => {
    const allSlots = pluck(flatten(milpa), "cards");
    test("should return proper count", () => {
      expect(compute_total_adjacencies(allSlots, 8, Corn.id)).toEqual(3);
      expect(compute_total_adjacencies(allSlots, 0, Corn.id)).toEqual(2);
      expect(compute_total_adjacencies(allSlots, 10, Corn.id)).toEqual(4);
    });
  });
});

describe("Compute total adjacencies of card in milpa", () => {
  const is_there_corn_in_slot = is_there_in_slot(Corn);
  const milpa = MILPA_WITH_1_CORN_COLUMN();
  const compute_total_corn_adjacents_to_corn =
    compute_total_adjacencies_of_card_in_milpa(is_there_corn_in_slot, Corn);
  describe("When milpa with corns adjacencies is provided", () => {
    expect(compute_total_corn_adjacents_to_corn(milpa)).toEqual(24);
  });
});
