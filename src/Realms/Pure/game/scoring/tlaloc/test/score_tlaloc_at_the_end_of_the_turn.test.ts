import { score_tlaloc_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  PLUS_PER_CROP_IN_LINE_PER_TLALOC,
  TLALOC_HARVEST_TURNS,
} from "../constants";
import {
  EDGES_WITH_TLALOC_AT_00_10_23,
  MILPA_WITH_10_CROPS_IN_LINE_WITH_TLALOC,
} from "./stubs/boards";

describe("Score Tlaloc at the end of the turn 🌧⏰:", () => {
  const firstTurn = 0;
  const tlalocHarvestingTurn = TLALOC_HARVEST_TURNS()[0];
  const board: Board = {
    milpa: MILPA_WITH_10_CROPS_IN_LINE_WITH_TLALOC(),
    edges: EDGES_WITH_TLALOC_AT_00_10_23(),
  };
  describe("when it is harvest turn and there are 10 crops in line with tlalocs", () => {
    const expectedScore = 10 * PLUS_PER_CROP_IN_LINE_PER_TLALOC;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_tlaloc_at_the_end_of_turn(board, tlalocHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there are tlalocs", () => {
    const expectedScore = 0;
    test("then it should return 0", () => {
      const { board: newBoard, score: newScore } =
        score_tlaloc_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
