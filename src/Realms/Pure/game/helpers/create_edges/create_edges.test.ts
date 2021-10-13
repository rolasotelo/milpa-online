import { create_edges } from "..";
import { Card, Edge, Position } from "../../../enums";
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
  expect(edges[Edge.Top][Position.First][Card.First]).toEqual(filler);
  expect(edges[Edge.Down][Position.Fourth][Card.First]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const edges = create_edges(filler) as Edges;
  edges[Edge.Top][Position.First][Card.First] = Tlaloc;
  edges[Edge.Top][Position.Second][Card.First].icon = "🥦";
  expect(Array.isArray(edges)).toBeTruthy();
  expect(edges[Edge.Top][Position.First][Card.First]).toEqual(Tlaloc);
  expect(edges[Edge.Top][Position.Second][Card.First].icon).toEqual("🥦");
  expect(edges[Edge.Right][Position.Fourth][Card.First]).toEqual(filler);
  expect(edges[Edge.Right][Position.Fourth][Card.First].icon).toEqual(
    EmptySlot.icon
  );
});
