import { create_milpa } from "..";
import { Column, Row } from "../../../enums";
import { Corn } from "../../cards";

test("should return empty array when no parameter is provided", () => {
  const milpa = create_milpa();
  expect(milpa).toBeTruthy();
  expect(milpa).toEqual([]);
});

test("should return an array filled with one crop", () => {
  const crop = Corn;
  const milpa = create_milpa(crop);
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa[Row.First][Column.First]).toEqual(crop);
  expect(milpa[Row.Fourth][Column.Fourth]).toEqual(crop);
});
