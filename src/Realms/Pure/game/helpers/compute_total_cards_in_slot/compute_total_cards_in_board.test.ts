import {
  compute_total_cards_in_board,
  compute_total_cards_in_board_with_modifier,
  slot_has_cards,
  compute_total_cards_in_board_sharing_slot_with,
  compute_total_cards_but_one_in_slot,
} from "..";
import { CropId, ModifierId } from "../../../enums";
import { Beans, Corn, Quelites } from "../../cards";
import { Flower } from "../../cards/crops/flower";
import { MILPA_WITH_3_BEANS_AND_CORN_TOGETHER } from "../../scoring/beans/test/stubs/boards";
import {
  MILPA_WITH_12_CORN_4_WITH_HUITLACOCHE,
  MILPA_WITH_1_CORN_COLUMN,
} from "../../scoring/corn/test/stubs/boards";

describe("Compute total Cards in board", () => {
  describe("when milpa and crop to compare is given", () => {
    const milpa = MILPA_WITH_1_CORN_COLUMN();
    test("then it should return the total of copies of that crop", () => {
      const compute_total_corn = compute_total_cards_in_board(Corn);
      expect(compute_total_corn(milpa)).toEqual(12);
    });
  });
});

describe("Compute total Cards with modifier in board", () => {
  describe("when milpa and crop and modifier to compare is given", () => {
    const milpa = MILPA_WITH_12_CORN_4_WITH_HUITLACOCHE();
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

describe("Slot has cards", () => {
  const card1 = CropId.Corn;
  const card2 = CropId.Beans;
  describe("when provided list containing desired cards", () => {
    const slot = [Corn, Beans, Quelites];
    test("then it should return true", () => {
      expect(slot_has_cards(slot, card1, card2)).toBeTruthy();
    });
  });
  describe("when provided list not containing desired cards", () => {
    const slot = [Corn, Quelites];
    test("then it should return false", () => {
      expect(slot_has_cards(slot, card1, card2)).toBeFalsy();
    });
  });
});

describe("Compute total cards in board sharing slot with", () => {
  const look_for_beans_and_corn =
    compute_total_cards_in_board_sharing_slot_with(Beans, CropId.Corn);
  describe("when provided 2 cards to look for and milpa containing them together", () => {
    const milpa = MILPA_WITH_3_BEANS_AND_CORN_TOGETHER();
    test("then it should return proper count", () => {
      expect(look_for_beans_and_corn(milpa)).toEqual(3);
    });
  });

  describe("when provided 2 cards to look for and milpa not containing them together", () => {
    const milpa = MILPA_WITH_1_CORN_COLUMN();
    test("then it should return 0", () => {
      expect(look_for_beans_and_corn(milpa)).toEqual(0);
    });
  });
});

describe("compute_total_cards_but_one_in_slot", () => {
  describe("given slot with 5 cards, 2 of them been flowers", () => {
    const cards = [Flower, Corn, Corn, Beans, Flower];
    const compute_total_cards_but_flower =
      compute_total_cards_but_one_in_slot(Flower);
    test("then it shoul return 3", () => {
      expect(compute_total_cards_but_flower(cards)).toEqual(3);
    });
  });
});
