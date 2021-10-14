import { Card, Column, Row } from "../../../enums";
import { Board } from "../../../types";
import { EmptySlot } from "../../cards";
import { create_board } from "./create_board";

test("should return board with empty milpa and edges if no parameter is provided", () => {
  const board = create_board();
  expect(board).toEqual({ milpa: [], edges: [] });
});

test("should return board with milpa and edges filled with only one card", () => {
  const filler = EmptySlot;
  const board = create_board(filler);
  expect(board.milpa[Row.Third][Column.Second].cards[Card.First]).toEqual(
    EmptySlot
  );
  expect(board.milpa[Row.Fourth][Column.Fourth].cards[Card.First]).toEqual(
    EmptySlot
  );
  expect(board.edges[Row.Second][Column.Second].cards[Card.First]).toEqual(
    EmptySlot
  );
  expect(board.edges[Row.First][Column.Fourth].cards[Card.First]).toEqual(
    EmptySlot
  );
});

test("should return board with unique copies of cards in milpa and edges", () => {
  const filler = EmptySlot;
  const board = create_board(filler) as Board;
  board.milpa[Row.First][Column.First].cards[Card.First].icon = "🥕";
  expect(board.milpa[Row.First][Column.First].cards[Card.First].icon).toEqual(
    "🥕"
  );
  expect(board.milpa[Row.Fourth][Column.Fourth].cards[Card.First].icon).toEqual(
    "🍂"
  );
});
