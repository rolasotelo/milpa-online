import { score_chilli_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_CHILLI_DIAGONALLY_ADJACENT } from "../constants";
import { MILPA_WITH_6_CHILLI_DIAGONAL_ADJACENCIES } from "./stubs/boards";

describe("Score Chilli at the end of the game 🎊🌰", () => {
  describe("when a board with 6 chilli diagonal adjacencies to beans is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_6_CHILLI_DIAGONAL_ADJACENCIES(),
      edges: [[]],
    };
    const expectedScore = 6 * PLUS_PER_CHILLI_DIAGONALLY_ADJACENT;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_chilli_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
