import { compute_board_and_score_at_the_end_of_turn } from "..";
import { Board } from "../../../types";
import { PLUS_PER_CORN_ROW_OR_COLUMN } from "../corn/costants";
import {
  MILPA_WITH_CORN_COLUMN_AND_ROW,
  MILPA_WITH_CORN_ROW,
} from "../corn/test/stubs/boards";

describe("Compute board and score at the end of turn", () => {
  describe("when board contains corns row", () => {
    const initialScore = 17;
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_ROW(),
      edges: [[]],
    };
    const { board: newBoard, score: newScore } =
      compute_board_and_score_at_the_end_of_turn(board, initialScore);
    test("then it should add to the score", () => {
      expect(newBoard).toEqual(board);
      expect(newScore).toEqual(initialScore + PLUS_PER_CORN_ROW_OR_COLUMN);
    });
  });
  describe("when board contains corns row and column", () => {
    const initialScore = 17;
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_COLUMN_AND_ROW(),
      edges: [[]],
    };
    const { board: newBoard, score: newScore } =
      compute_board_and_score_at_the_end_of_turn(board, initialScore);
    test("then it should add to the score twice", () => {
      expect(newBoard).toEqual(board);
      expect(newScore).toEqual(initialScore + 2 * PLUS_PER_CORN_ROW_OR_COLUMN);
    });
  });
});
