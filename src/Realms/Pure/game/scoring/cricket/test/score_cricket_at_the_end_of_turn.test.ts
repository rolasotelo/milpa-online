import { pluck } from "underscore";
import {
  compute_total_crickets,
  score_cricket_at_the_end_of_turn,
} from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_CRICKET_IN_YOUR_BOARD } from "../constants";
import {
  EDGES_WITH_0_CRICKETS,
  EDGES_WITH_2_CRICKETS,
  MILPA_WITH_CORN_AT_0_0_AND_2_3,
  MILPA_WITH_CRICKET_AT_0_0_AND_2_3,
} from "./stubs/boards";

describe("Score Cricket at the end of the game 🎊🦗", () => {
  describe("when a board with 2 crickets in the edges is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CORN_AT_0_0_AND_2_3(),
      edges: EDGES_WITH_2_CRICKETS(),
    };
    const expectedScore = 2 * PLUS_PER_CRICKET_IN_YOUR_BOARD;
    const expectedBoard: Readonly<Board> = {
      milpa: MILPA_WITH_CRICKET_AT_0_0_AND_2_3(),
      edges: EDGES_WITH_0_CRICKETS(),
    };
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_cricket_at_the_end_of_turn(board, 1);
      expect(newScore).toEqual(expectedScore);
      expect(newBoard).toEqual(expectedBoard);
    });
  });
  describe("when a board with 2 crickets in the milpa is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_CRICKET_AT_0_0_AND_2_3(),
      edges: EDGES_WITH_0_CRICKETS(),
    };
    const expectedScore = 2 * PLUS_PER_CRICKET_IN_YOUR_BOARD;

    test(`then it should return ${expectedScore} and board should have 2 crickets`, () => {
      const { board: newBoard, score: newScore } =
        score_cricket_at_the_end_of_turn(board, 1);
      expect(newScore).toEqual(expectedScore);
      expect(compute_total_crickets(newBoard.milpa)).toEqual(2);
      expect(newBoard).not.toEqual(board);
    });
  });
});
