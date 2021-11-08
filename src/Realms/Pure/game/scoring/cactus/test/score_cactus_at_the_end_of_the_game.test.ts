import { Board } from "../../../../types";
import { PLUS_PER_3_TUNA_AT_THE_END_OF_GAME } from "../constants";
import { score_cactus_at_the_end_of_the_game } from "../score_cactus_at_the_end_of_the_game";
import {
  MILPA_WITH_3_CACTUS_2_WITH_TUNA,
  EDGES_WITH_2_CACTUS_1_WITH_TUNA,
} from "./stubs/boards";

describe("Score cactus at the end of the game 🌵 🎊:", () => {
  const board: Board = {
    milpa: MILPA_WITH_3_CACTUS_2_WITH_TUNA(),
    edges: EDGES_WITH_2_CACTUS_1_WITH_TUNA(),
  };
  describe("when board with 3 cactus with tuna are provided", () => {
    const expectedScore = PLUS_PER_3_TUNA_AT_THE_END_OF_GAME;
    test(`then it should return ${PLUS_PER_3_TUNA_AT_THE_END_OF_GAME} `, () => {
      const { board: newBoard, score: newScore } =
        score_cactus_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
