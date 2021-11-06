import { flatten, pluck } from "underscore";
import { score_flower_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  FLOWER_HARVEST_TURNS,
  PLUS_PER_FLOWER_WHEN_HARVEST,
} from "../constants";
import {
  EDGES_WITH_2_LONELY_FLOWERS_3_TOTAL,
  EDGES_WITH_2_LONELY_PUMPKINS,
  MILPA_WITH_2_LONELY_FLOWERS_3_TOTAL,
  MILPA_WITH_2_LONELY_PUMPKINS,
} from "./stub/boards";

describe("Score flower at the end of the turn 🌼 ⏰:", () => {
  const turnZero = 0;
  const flowerHarvestingTurn = FLOWER_HARVEST_TURNS()[0];
  const board: Board = {
    milpa: MILPA_WITH_2_LONELY_FLOWERS_3_TOTAL(),
    edges: EDGES_WITH_2_LONELY_FLOWERS_3_TOTAL(),
  };
  describe("when it is harvest turn and there are 4", () => {
    const expectedScore = 6 * PLUS_PER_FLOWER_WHEN_HARVEST;
    const expectedBoard: Board = {
      milpa: MILPA_WITH_2_LONELY_PUMPKINS(),
      edges: EDGES_WITH_2_LONELY_PUMPKINS(),
    };
    test(`then it should return plus ${expectedScore} cacao and board with pumpkins`, () => {
      const { board: newBoard, score: newScore } =
        score_flower_at_the_end_of_turn(board, flowerHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
      expect(newBoard).toEqual(expectedBoard);
    });
  });
  describe("when it is not harvest turn and there are flowers in milpa", () => {
    const expectedScore = 0;
    test("then it should return plus 0 cacao and same board", () => {
      const { board: newBoard, score: newScore } =
        score_flower_at_the_end_of_turn(board, turnZero);
      expect(newScore).toEqual(expectedScore);
      expect(newBoard).toEqual(board);
    });
  });
});
