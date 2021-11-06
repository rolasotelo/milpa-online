import { score_chilli_at_the_end_of_turn } from "../..";
import { Board } from "../../../../types";
import {
  CHILLI_HARVEST_TURNS,
  PLUS_PER_CHILLI_WHEN_HARVEST,
  PLUS_PER_CHILLI_WHEN_HARVEST_WITH_ANOTHER_CROP,
} from "../constants";
import { MILPA_WITH_6_CHILLI_3_ALONE } from "./stubs/boards";

describe("Score chilli at the end of the turn 🌶 ⏰:", () => {
  const turnZero = 0;
  const chilliHarvestingTurn = CHILLI_HARVEST_TURNS()[0];
  const board: Board = {
    milpa: MILPA_WITH_6_CHILLI_3_ALONE(),
    edges: [[]],
  };
  describe("when it is harvest turn and there is 6 chilli in milpa, 3 of them alone.", () => {
    const expectedScore =
      6 * PLUS_PER_CHILLI_WHEN_HARVEST +
      3 * PLUS_PER_CHILLI_WHEN_HARVEST_WITH_ANOTHER_CROP;
    test(`then it should return plus ${expectedScore} cacao`, () => {
      const { board: newBoard, score: newScore } =
        score_chilli_at_the_end_of_turn(board, chilliHarvestingTurn);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when it is not harvest turn and there is chilli in milpa", () => {
    const expectedScore = 0;
    test("then it should return plus 0 cacao", () => {
      const { board: newBoard, score: newScore } =
        score_chilli_at_the_end_of_turn(board, turnZero);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
