import { score_tomatoe_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  PLUS_PER_TOMATOE_IN_MILPA,
  PLUS_PER_TOMATOE_WITH_TOMATILLO_OR_CHILLI_IN_MILPA,
} from "../constants";
import { MILPA_WITH_4_TOMATOE_2_WITH_OTHER_CROPS } from "./stubs/boards";

describe("Score Tomatoe at the end of the turn 🍅⏰:", () => {
  const firstTurn = 0;
  const tomatoeHarvestingTurn = 8;
  const board: Board = {
    milpa: MILPA_WITH_4_TOMATOE_2_WITH_OTHER_CROPS(),
    edges: [[]],
  };
  describe("when it is harvest turn and there are 4 tomatoes, 2 of them not alone", () => {
    const expectedScore =
      4 * PLUS_PER_TOMATOE_IN_MILPA +
      2 * PLUS_PER_TOMATOE_WITH_TOMATILLO_OR_CHILLI_IN_MILPA;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_tomatoe_at_the_end_of_turn(board, tomatoeHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there are tomatoes in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_tomatoe_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
