import { create_milpa } from "..";
import { Column, Row } from "../../../enums";
import { Milpa } from "../../../types";
import { Corn, EmptySlot } from "../../cards";

test("should return empty array when no parameter is provided", () => {
  const milpa = create_milpa();
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa).toEqual([]);
});

test("should return an array filled with crop provided as parameter", () => {
  const filler = Corn;
  const milpa = create_milpa(filler);
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa[Row.First][Column.First]).toEqual(filler);
  expect(milpa[Row.Fourth][Column.Fourth]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const milpa = create_milpa(filler) as Milpa;
  const a = milpa[Row.First][Column.First];
  milpa[Row.First][Column.First] = Corn;
  milpa[Row.First][Column.Second].icon = "🥦";
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa[Row.First][Column.First]).toEqual(Corn);
  expect(milpa[Row.First][Column.Second].icon).toEqual("🥦");
  expect(milpa[Row.Fourth][Column.Fourth]).toEqual(filler);
  expect(milpa[Row.Fourth][Column.Fourth].icon).toEqual(EmptySlot.icon);
});
