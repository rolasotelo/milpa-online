import { CACAO_WHEN_CORN_PLAYED, score_on_corn_played } from "..";

test("should return new scores", () => {
  const oldScores: [number, number] = [1, 1];
  const expectedNewScore = [1 + CACAO_WHEN_CORN_PLAYED, 1];
  const newScores = score_on_corn_played(oldScores);
  expect(newScores).toEqual(expectedNewScore);
});
