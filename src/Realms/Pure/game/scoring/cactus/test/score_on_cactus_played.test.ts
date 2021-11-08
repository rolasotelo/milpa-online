import { score_on_cactus_played } from "../..";
import { CACAO_WHEN_CACTUS_PLAYED } from "../../../../constants";

test("should return new scores which depend on modifiers", () => {
  const oldScores: [number, number] = [1, 1];
  const expectedNewScore = [1 + CACAO_WHEN_CACTUS_PLAYED, 1];
  const newScores = score_on_cactus_played(oldScores, []);
  expect(newScores).toEqual(expectedNewScore);
});
