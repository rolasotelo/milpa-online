import { score_red_corn_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_RED_CORN_SQUARE } from "../constants";
import {
  MILPA_WITH_1_SQUARE_OF_RED_CORN,
  MILPA_WITH_2_SQUARE_OF_RED_CORN,
} from "./stubs/boards";

describe("Score red corn at the end of the game 🥕🎊:", () => {
  describe("when a square of red corns is in the board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_1_SQUARE_OF_RED_CORN(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_red_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_RED_CORN_SQUARE);
      expect(newBoard).toEqual(board);
    });
  });

  describe("when board with 2 red corn squares is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_2_SQUARE_OF_RED_CORN(),
      edges: [[]],
    };
    test("then it should return a plus score", () => {
      const { board: newBoard, score: deltaScore } =
        score_red_corn_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(PLUS_PER_RED_CORN_SQUARE * 2);
      expect(newBoard).toEqual(board);
    });
  });
});
