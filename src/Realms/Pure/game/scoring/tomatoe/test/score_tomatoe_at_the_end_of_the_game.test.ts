import { score_tomatoe_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_IF_AT_LEAST_MIN_TOMATOE_IN_MILPA } from "../constants";
import {
  MILPA_WITH_3_TOMATOE_2_WITH_OTHER_CROPS,
  MILPA_WITH_4_TOMATOE_2_WITH_OTHER_CROPS,
} from "./stubs/boards";

describe("Score Tomatoe at the end of the game 🍅 🎊:", () => {
  describe("when passed board with 4 tomatoe", () => {
    const board: Board = {
      milpa: MILPA_WITH_4_TOMATOE_2_WITH_OTHER_CROPS(),
      edges: [[]],
    };
    const expectedScore = PLUS_IF_AT_LEAST_MIN_TOMATOE_IN_MILPA;
    test(`then it should return plus ${expectedScore} cacao`, () => {
      const { board: newBoard, score: newScore } =
        score_tomatoe_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
  describe("when passed board with 3 tomatoe", () => {
    const board: Board = {
      milpa: MILPA_WITH_3_TOMATOE_2_WITH_OTHER_CROPS(),
      edges: [[]],
    };
    const expectedScore = 0;
    test(`then it should return plus ${expectedScore} cacao`, () => {
      const { board: newBoard, score: newScore } =
        score_tomatoe_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
