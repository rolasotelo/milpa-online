import { score_on_manure_played } from "..";
import { CACAO_WHEN_MANURE_PLAYED } from "../../../constants";

test("should return new scores which depend on modifiers", () => {
  const oldScores: [number, number] = [1, 1];
  const expectedNewScore = [1 + CACAO_WHEN_MANURE_PLAYED, 1];
  const newScores = score_on_manure_played(oldScores, []);
  expect(newScores).toEqual(expectedNewScore);
});
