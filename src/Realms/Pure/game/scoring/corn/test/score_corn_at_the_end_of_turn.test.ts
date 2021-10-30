import { score_corn_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_CORN_ROW_OR_COLUMN } from "../costants";
import {
  MILPA_WITHOUT_CORN_COLUMN_OR_ROW,
  MILPA_WITH_CORN_COLUMN,
  MILPA_WITH_CORN_COLUMN_AND_ROW,
  MILPA_WITH_CORN_ROW,
} from "./stubs/boards";

describe("Score corn at the end of the turn 🌽⏰:", () => {
  describe("when a row of corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_ROW(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_turn(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when a column of corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_COLUMN(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_turn(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when there is no row nor column of corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITHOUT_CORN_COLUMN_OR_ROW(),
      edges: [[]],
    };
    test("then it should return plus 0 score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_turn(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when there is multiple rows or columns", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_COLUMN_AND_ROW(),
      edges: [[]],
    };
    test("then it should return plus score times the columns and rows", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_turn(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN * 2);
      expect(newBoard).toEqual(board);
    });
  });
});
