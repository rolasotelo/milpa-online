import { score_tomatillo_at_the_end_of_the_game } from "../..";
import { Board } from "../../../../types";
import { PLUS_PER_LONELY_TOMATILLO } from "../constants";
import { MILPA_WITH_2_NOT_SORROUNDED_TOMATILLOS } from "./stubs/boards";

describe("Score tomatillo at the end of the game 🍈🎊:", () => {
  describe("when a 2 tomatillos not sorrounded by tomatillos are passed in board", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_2_NOT_SORROUNDED_TOMATILLOS(),
      edges: [[]],
    };
    const expectedScore = 2 * PLUS_PER_LONELY_TOMATILLO;
    test(`then it should return ${expectedScore}`, () => {
      const { board: newBoard, score: deltaScore } =
        score_tomatillo_at_the_end_of_the_game(board);
      expect(deltaScore).toEqual(expectedScore);
      expect(newBoard).toEqual(board);
    });
  });
});
