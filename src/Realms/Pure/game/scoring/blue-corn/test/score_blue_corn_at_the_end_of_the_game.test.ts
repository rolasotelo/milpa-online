import { score_blue_corn_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { MILPA_WITHOUT_CORN_COLUMN_OR_ROW } from "../../corn/test/stubs/boards";
import { PLUS_PER_BLUE_CORN_DIAGONAL_OF_3 } from "../constants";
import {
  MILPA_WITH_2_BLUE_CORN_DIAGONALS,
  MILPA_WITH_3_BLUE_CORN_DIAGONALS,
} from "./stubs/boards";

describe("Score blue corn at the end of the game 🍆🎊:", () => {
  describe("when board with multiple blue corn positive diagonals is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_3_BLUE_CORN_DIAGONALS(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_blue_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_BLUE_CORN_DIAGONAL_OF_3 * 3);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when board with multiple blue corn negative diagonals is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_2_BLUE_CORN_DIAGONALS(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_blue_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_BLUE_CORN_DIAGONAL_OF_3 * 2);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when there is no diagonal of blue corn in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITHOUT_CORN_COLUMN_OR_ROW(),
      edges: [[]],
    };
    test("then it should return plus 0 score", () => {
      const { board: newBoard, score: deltaScore } =
        score_blue_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(0);
      expect(newBoard).toEqual(board);
    });
  });
});
