import { Board } from "../../../../types";
import {
  PLUS_PER_BEANS_WHEN_HARVEST,
  PLUS_PER_BEANS_WITH_CORN,
} from "../constants";
import { score_beans_at_the_end_of_turn } from "../score_beans_at_the_end_of_turn";
import { MILPA_WITH_3_BEANS_AND_CORN_TOGETHER } from "./stubs/boards";

describe("Score beans at the end of the turn 🌰⏰:", () => {
  const firstTurn = 1;
  const cornHarvestingTurn = 8;
  const board: Board = {
    milpa: MILPA_WITH_3_BEANS_AND_CORN_TOGETHER(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is beans in milpa", () => {
    const expectedScore =
      7 * PLUS_PER_BEANS_WHEN_HARVEST + 3 * PLUS_PER_BEANS_WITH_CORN;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_beans_at_the_end_of_turn(board, cornHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is beans in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_beans_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
