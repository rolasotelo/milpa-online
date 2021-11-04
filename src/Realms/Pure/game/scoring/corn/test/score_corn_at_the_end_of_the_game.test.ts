import { is_there_corn_row, score_corn_at_the_end_of_the_game } from "../..";
import { Board, MilpaRow } from "../../../../types";
import { Beans, Corn } from "../../../cards";
import { PLUS_PER_CORN_ROW_OR_COLUMN } from "../constants";
import {
  MILPA_WITHOUT_CORN_COLUMN_OR_ROW,
  MILPA_WITH_1_CORN_COLUMN,
  MILPA_WITH_1_CORN_COLUMN_AND_1_CORN_ROW,
  MILPA_WITH_1_CORN_ROW,
} from "./stubs/boards";

describe("Is there corn row", () => {
  describe("when a row with corns is provided", () => {
    const CORN_ROW: MilpaRow = [
      [Corn, Beans],
      [Corn, Beans],
      [Corn, Beans],
      [Corn, Beans],
    ];
    test("then it should return true", () => {
      expect(is_there_corn_row(CORN_ROW)).toBeTruthy();
    });
  });
  describe("when a row with corns is not provided", () => {
    const NO_CORN_ROW: MilpaRow = [
      [Corn, Beans],
      [Corn, Beans],
      [Beans],
      [Corn, Beans],
    ];
    test("then it should return false", () => {
      expect(is_there_corn_row(NO_CORN_ROW)).toBeFalsy();
    });
  });
});

describe("Score corn at the end of the game 🌽🎊:", () => {
  describe("when a row of corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_1_CORN_ROW(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when a column of corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_1_CORN_COLUMN(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when there is no row nor column of corns in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITHOUT_CORN_COLUMN_OR_ROW(),
      edges: [[]],
    };
    test("then it should return plus 0 score", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(0);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when there is multiple rows or columns", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_1_CORN_COLUMN_AND_1_CORN_ROW(),
      edges: [[]],
    };
    test("then it should return plus score times the columns and rows", () => {
      const { board: newBoard, score: deltaScore } =
        score_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_CORN_ROW_OR_COLUMN * 2);
      expect(newBoard).toEqual(board);
    });
  });
});
