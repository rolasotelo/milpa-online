import { score_tomatillo_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  PLUS_PER_TOMATILLO_IN_MILPA,
  PLUS_PER_TOMATILLO_NOT_ALONE_IN_MILPA,
} from "../constants";
import { MILPA_WITH_4_TOMATILLOS_2_NOT_ALONE } from "./stubs/boards";

describe("Score Tomatillo at the end of the turn 🍈⏰:", () => {
  const firstTurn = 0;
  const tomatilloHarvestingTurn = 8;
  const board: Board = {
    milpa: MILPA_WITH_4_TOMATILLOS_2_NOT_ALONE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there are tomatillos in milpa", () => {
    const expectedScore =
      4 * PLUS_PER_TOMATILLO_IN_MILPA +
      2 * PLUS_PER_TOMATILLO_NOT_ALONE_IN_MILPA;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_tomatillo_at_the_end_of_turn(board, tomatilloHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there are tomatillos in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_tomatillo_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
