import { score_blue_corn_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  PLUS_PER_BLUE_CORN_WHEN_HARVEST,
  PLUS_PER_BLUE_CORN_WHEN_HARVEST_WITH_HUITLACOCHE,
} from "../constants";
import {
  MILPA_WITH_6_BLUE_CORN_3_WITH_HUITLACOCHE,
  MILPA_WITH_COMPLEX_ARRANGE_OF_6_BLUE_CORN_2_HUITLACOCHE,
} from "./stubs/boards";

describe("Score blue corn at the end of the turn 🍆⏰:", () => {
  const firstTurn = 1;
  const blueCornHarvestingTurn = 13;
  const board: Board = {
    milpa: MILPA_WITH_6_BLUE_CORN_3_WITH_HUITLACOCHE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is blue corn in milpa", () => {
    const expectedScore =
      6 * PLUS_PER_BLUE_CORN_WHEN_HARVEST +
      3 * PLUS_PER_BLUE_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_blue_corn_at_the_end_of_turn(board, blueCornHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is corn in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_blue_corn_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});

describe("Score blue corn at the end of the turn 🍆⏰:", () => {
  const firstTurn = 1;
  const blueCornHarvestingTurn = 13;
  const board: Board = {
    milpa: MILPA_WITH_COMPLEX_ARRANGE_OF_6_BLUE_CORN_2_HUITLACOCHE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is blue corn in milpa", () => {
    const expectedScore =
      5 * PLUS_PER_BLUE_CORN_WHEN_HARVEST +
      2 * PLUS_PER_BLUE_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_blue_corn_at_the_end_of_turn(board, blueCornHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
