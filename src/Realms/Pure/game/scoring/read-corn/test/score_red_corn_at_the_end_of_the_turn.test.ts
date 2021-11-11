import {
  score_blue_corn_at_the_end_of_turn,
  score_red_corn_at_the_end_of_turn,
} from "../..";
import { Board } from "../../../../types";
import {
  PLUS_PER_RED_CORN_WHEN_HARVEST,
  PLUS_PER_RED_CORN_WHEN_HARVEST_WITH_HUITLACOCHE,
  RED_CORN_HARVEST_TURNS,
} from "../constants";
import { MILPA_WITH_6_RED_CORN_3_WITH_HUITLACOCHE } from "./stubs/boards";

describe("Score red corn at the end of the turn 🥕⏰:", () => {
  const firstTurn = 1;
  const redCornHarvestingTurn = RED_CORN_HARVEST_TURNS()[0];
  const board: Board = {
    milpa: MILPA_WITH_6_RED_CORN_3_WITH_HUITLACOCHE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is red corn in milpa", () => {
    const expectedScore =
      6 * PLUS_PER_RED_CORN_WHEN_HARVEST +
      3 * PLUS_PER_RED_CORN_WHEN_HARVEST_WITH_HUITLACOCHE;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_red_corn_at_the_end_of_turn(board, redCornHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is corn in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_red_corn_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
