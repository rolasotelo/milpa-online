import { is_there_in_slot, is_there_manure, is_there_shovel } from ".";
import { is_empty } from "..";
import { SlotType } from "../../../enums";
import { BoardSlot } from "../../../types";
import { Beans, Chilli, Corn, EmptySlot, Manure, Shovel } from "../../cards";

describe("Is there In Slot", () => {
  const is_there_corn_in_slot = is_there_in_slot(Corn);
  describe("when card to compare is present", () => {
    test("then it should return true", () => {
      expect(is_there_corn_in_slot([Beans, Corn])).toBeTruthy();
    });
  });

  describe("when card to compare is not present", () => {
    test("then it should return false", () => {
      expect(is_there_corn_in_slot([Beans, Chilli])).toBeFalsy();
    });
  });
});

test("should return true if there is empty slot for is empty", () => {
  const slots: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [EmptySlot, Manure],
  };
  const isEmpty = is_empty(slots);
  expect(isEmpty).toBeTruthy();
  const slotsWithoutEmpty: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [Manure, Corn],
  };
  const isEmptyWithoutEmptySlot = is_empty(slotsWithoutEmpty);
  expect(isEmptyWithoutEmptySlot).toBeFalsy();
});

test("should return true if there is manure and at least other card", () => {
  const slotsWithOnlyManure: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [Manure],
  };
  const isThereManureWithOnlyManure = is_there_manure(slotsWithOnlyManure);
  expect(isThereManureWithOnlyManure).toBeFalsy();
  const slotsWithManureAndMore: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [Manure, Corn],
  };
  const isThereManureWithManureAndMore = is_there_manure(
    slotsWithManureAndMore
  );
  expect(isThereManureWithManureAndMore).toBeTruthy();
});

test("should return true if there is shovel in cards", () => {
  const slotsWithoutShovel: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [EmptySlot, Manure],
  };
  const isThereShovelWithoutShovel = is_there_shovel(slotsWithoutShovel);
  expect(isThereShovelWithoutShovel).toBeFalsy();
  const slotsWithShovel: BoardSlot = {
    isYourBoard: true,
    row: 1,
    column: 1,
    type: SlotType.Milpa,
    cards: [Corn, Shovel],
  };
  const isThereShovelWithShovel = is_there_shovel(slotsWithShovel);
  expect(isThereShovelWithShovel).toBeTruthy();
});
