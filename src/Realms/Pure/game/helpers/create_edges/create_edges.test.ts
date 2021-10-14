import { create_edges } from "..";
import { Card, Edge, Position, SlotType } from "../../../enums";
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
  expect(edges[Edge.Top][Position.First].cards[Card.First]).toEqual(filler);
  expect(edges[Edge.Down][Position.Fourth].cards[Card.First]).toEqual(filler);
});

test("should return an array filled with unique copies of filler", () => {
  const filler = EmptySlot;
  const edges = create_edges(filler) as Edges;
  edges[Edge.Top][Position.First] = {
    type: SlotType.Edge,
    cards: [{ ...Tlaloc }],
  };
  edges[Edge.Top][Position.Second].cards[Card.First].icon = "🥦";
  expect(Array.isArray(edges)).toBeTruthy();
  expect(edges[Edge.Top][Position.First].cards[Card.First]).toEqual(Tlaloc);
  expect(edges[Edge.Top][Position.Second].cards[Card.First].icon).toEqual("🥦");
  expect(edges[Edge.Right][Position.Fourth].cards[Card.First]).toEqual(filler);
  expect(edges[Edge.Right][Position.Fourth].cards[Card.First].icon).toEqual(
    EmptySlot.icon
  );
});
