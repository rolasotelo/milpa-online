import { create_edges } from "..";
import { Column, Row } from "../../../enums";
import { Edges, Milpa } from "../../../types";
import { Corn, EmptySlot } from "../../cards";
import { Tlaloc } from "../../cards/goods/tlaloc";

test("should return empty array when no parameter is provided", () => {
  const milpa = create_edges();
  expect(Array.isArray(milpa)).toBeTruthy();
  expect(milpa).toEqual([]);
});

test("should return an array filled with crop provided as parameter", () => {
  const filler = EmptySlot;
  const edges = create_edges(filler);
  expect(Array.isArray(edges)).toBeTruthy();
  expect(edges[Row.Top][Column.First]).toEqual(filler);
  expect(edges[Row.Down][Column.Fourth]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const edges = create_edges(filler) as Edges;
  edges[Row.Top][Column.First] = Tlaloc;
  edges[Row.Top][Column.Second].icon = "🥦";
  expect(Array.isArray(edges)).toBeTruthy();
  expect(edges[Row.Top][Column.First]).toEqual(Tlaloc);
  expect(edges[Row.Top][Column.Second].icon).toEqual("🥦");
  expect(edges[Column.Right][Row.Fourth]).toEqual(filler);
  expect(edges[Column.Right][Row.Fourth].icon).toEqual(EmptySlot.icon);
});
