import { score_maguey_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_MAGUEY_IN_DIFFERENT_LINE } from "../constants";
import { EDGES_WITH_MAGUEY_IN_3_LINES } from "./stubs/boards";

describe("Score Maguey at the end of the game 🎊🦚", () => {
  describe("when a board with Maguey in 3 different edges is passed", () => {
    const board: Readonly<Board> = {
      milpa: [[]],
      edges: EDGES_WITH_MAGUEY_IN_3_LINES(),
    };
    const expectedScore = 3 * PLUS_PER_MAGUEY_IN_DIFFERENT_LINE;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: newScore } =
        score_maguey_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
