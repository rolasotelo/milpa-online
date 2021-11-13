import { score_quelites_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_QUELITES_WITH_CORN } from "../constants";
import { MILPA_WITH_3_QUELITES_AND_CORN_TOGETHER } from "./stubs/boards";

describe("Score Quelites at the end of the turn 🌱⏰:", () => {
  const firstTurn = 0;
  const quelitesHarvestingTurn = 8;
  const board: Board = {
    milpa: MILPA_WITH_3_QUELITES_AND_CORN_TOGETHER(),
    edges: [[]],
  };
  describe("when it is harvest turn and there are 3 quelites with corn in milpa", () => {
    const expectedScore = 3 * PLUS_PER_QUELITES_WITH_CORN;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_quelites_at_the_end_of_turn(board, quelitesHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there are quelites in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_quelites_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
