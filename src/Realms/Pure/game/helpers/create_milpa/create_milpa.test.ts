import { create_milpa } from "..";
import { Card, Column, Row, SlotType } from "../../../enums";
import { Milpa } from "../../../types";
import { Corn, EmptySlot } from "../../cards";

test("should return empty array when no parameter is provided", () => {
  const isYourBoard = true;
  const milpa = create_milpa(isYourBoard);
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa).toEqual([]);
});

test("should return an array filled with crop provided as parameter", () => {
  const filler = Corn;
  const isYourBoard = true;
  const milpa = create_milpa(isYourBoard, filler);
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa[Row.First][Column.First].cards[Card.First]).toEqual(filler);
  expect(milpa[Row.Fourth][Column.Fourth].cards[Card.First]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const isYourBoard = true;
  const milpa = create_milpa(isYourBoard, filler) as Milpa;
  const a = milpa[Row.First][Column.First];
  milpa[Row.First][Column.First] = {
    type: SlotType.Milpa,
    row: Row.First,
    isYourBoard: isYourBoard,
    column: Column.First,
    cards: [{ ...Corn }],
  };
  milpa[Row.First][Column.Second].cards[Card.First].icon = "🥦";
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa[Row.First][Column.First].cards[Card.First]).toEqual(Corn);
  expect(milpa[Row.First][Column.Second].cards[Card.First].icon).toEqual("🥦");
  expect(milpa[Row.Fourth][Column.Fourth].cards[Card.First]).toEqual(filler);
  expect(milpa[Row.Fourth][Column.Fourth].cards[Card.First].icon).toEqual(
    EmptySlot.icon
  );
});