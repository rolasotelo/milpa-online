import { create_edges } from "..";
import { Edge, Position } from "../../../enums";
import { Edges } from "../../../types";
import { EmptySlot } from "../../cards";
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
  expect(edges[Edge.Top][Position.First]).toEqual(filler);
  expect(edges[Edge.Down][Position.Fourth]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const edges = create_edges(filler) as Edges;
  edges[Edge.Top][Position.First] = Tlaloc;
  edges[Edge.Top][Position.Second].icon = "🥦";
  expect(Array.isArray(edges)).toBeTruthy();
  expect(edges[Edge.Top][Position.First]).toEqual(Tlaloc);
  expect(edges[Edge.Top][Position.Second].icon).toEqual("🥦");
  expect(edges[Edge.Right][Position.Fourth]).toEqual(filler);
  expect(edges[Edge.Right][Position.Fourth].icon).toEqual(EmptySlot.icon);
});
