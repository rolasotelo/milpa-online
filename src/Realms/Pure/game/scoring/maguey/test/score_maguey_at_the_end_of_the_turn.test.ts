import { score_maguey_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import { MAGUEY_HARVEST_TURNS, PLUS_PER_MAGUEY_LINE } from "../constants";
import { EDGES_WITH_1_MAGUEY_LINE } from "./stubs/boards";

describe("Score Maguey at the end of the turn 🦚⏰:", () => {
  const firstTurn = 0;
  const magueyHarvestingTurn = MAGUEY_HARVEST_TURNS()[0];
  const board: Board = {
    milpa: [[]],
    edges: EDGES_WITH_1_MAGUEY_LINE(),
  };
  describe("when it is harvest turn and there is 1 line of maguey", () => {
    const expectedScore = PLUS_PER_MAGUEY_LINE;
    test(`then it should return proper scoring ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_maguey_at_the_end_of_turn(board, magueyHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is maguey in edges", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_maguey_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
