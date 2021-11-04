import { Board } from "../../../../types";
import { PLUS_PER_BEANS_ADJACENT } from "../constants";
import { score_beans_at_the_end_of_the_game } from "../score_beans_at_the_end_of_the_game";
import { MILPA_WITH_3_BEANS_AND_CORN_TOGETHER } from "./stubs/boards";

describe("Score Beans at the end of the game", () => {
  describe("when a board with beans adjacents to beans is passed", () => {
    const board: Readonly<Board> = {
      milpa: MILPA_WITH_3_BEANS_AND_CORN_TOGETHER(),
      edges: [[]],
    };
    const expectedScore = 8 * PLUS_PER_BEANS_ADJACENT;
    test("then it should compute proper score", () => {
      const { board: newBoard, score: newScore } =
        score_beans_at_the_end_of_the_game(board);
      expect(newScore).toEqual(expectedScore);
    });
  });
});
