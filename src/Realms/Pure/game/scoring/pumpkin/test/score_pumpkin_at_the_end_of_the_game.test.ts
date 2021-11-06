import { score_pumpkin_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_PUMPKIN_AT_THE_END_OF_GAME } from "../constants";
import { EDGES_WITH_2_PUMPKIN, MILPA_WITH_2_PUMPKIN } from "./stubs/boards";

describe("Score pumpkin at the end of the game 🎃 🎊:", () => {
  const board: Board = {
    milpa: MILPA_WITH_2_PUMPKIN(),
    edges: EDGES_WITH_2_PUMPKIN(),
  };
  describe("when passed board with 4 pupmkin", () => {
    const expectedScore = 4 * PLUS_PER_PUMPKIN_AT_THE_END_OF_GAME;
    test(`then it should return plus ${expectedScore} cacao`, () => {
      const { board: newBoard, score: newScore } =
        score_pumpkin_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
