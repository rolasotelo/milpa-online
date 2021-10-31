import { score_corn_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_CORN_WHEN_HARVEST } from "../costants";
import { is_corn_harvest_turn } from "../score_corn_at_the_end_of_turn";
import { MILPA_WITH_CORN_AND_HUITLACOCHE } from "./stubs/boards";

describe("Is corn harvest turn", () => {
  describe("when passed a harvest turn", () => {
    const turn = 13;
    test("then it should return true", () => {
      expect(is_corn_harvest_turn(turn)).toBeTruthy();
    });
  });
  describe("when not passed a harvest turn", () => {
    const turn = 11;
    test("then it should return false", () => {
      expect(is_corn_harvest_turn(turn)).toBeFalsy();
    });
  });
});

describe("Score corn at the end of the turn 🌽⏰:", () => {
  const firstTurn = 1;
  const cornHarvestingTurn = 13;
  const board: Board = {
    milpa: MILPA_WITH_CORN_AND_HUITLACOCHE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is corn in milpa", () => {
    const expectedScore =
      8 * PLUS_PER_CORN_WHEN_HARVEST + 4 * 2 * PLUS_PER_CORN_WHEN_HARVEST;
    test("then it should return proper scoring", () => {
      const { board: newBoard, score: newScore } =
        score_corn_at_the_end_of_turn(board, cornHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is corn in milpa", () => {
    const expectedScore = 0;
    test("then it should return proper 0", () => {
      const { board: newBoard, score: newScore } =
        score_corn_at_the_end_of_turn(board, firstTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
