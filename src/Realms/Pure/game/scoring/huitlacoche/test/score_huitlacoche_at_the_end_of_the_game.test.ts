import { score_huitlacoche_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { MILPA_WITH_1_CORN_COLUMN } from "../../corn/test/stubs/boards";
import { PLUS_PER_HUITLACOCHE_IN_ALL_CORNS } from "../constants";
import { MILPA_WITH_HUITLACOCHE_IN_3_DIFFERENT_COLORS } from "./stubs/boards";

describe("Score Huitlacoche at the end of the game 🎊🍄", () => {
  describe("when a board with Huitlacoche in 3 different colors is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_HUITLACOCHE_IN_3_DIFFERENT_COLORS(),
      edges: [[]],
    };
    const expectedScore = PLUS_PER_HUITLACOCHE_IN_ALL_CORNS;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_huitlacoche_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when a board without Huitlacoche in 3 different colors is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_1_CORN_COLUMN(),
      edges: [[]],
    };
    const expectedScore = 0;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_huitlacoche_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
