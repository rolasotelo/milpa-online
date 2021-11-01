import { score_on_blue_corn_played } from "../..";
import {
  CACAO_WHEN_BLUE_CORN_PLAYED,
  MANURE_MUTIPLIER,
} from "../../../../constants";
import { ModifierId } from "../../../../enums";

test("should return new scores which depend on modifiers", () => {
  const oldScores: [number, number] = [1, 1];
  const expectedNewScore = [1 + CACAO_WHEN_BLUE_CORN_PLAYED, 1];
  const newScores = score_on_blue_corn_played(oldScores, []);
  expect(newScores).toEqual(expectedNewScore);
  const newScoresWithModifier = score_on_blue_corn_played(oldScores, [
    ModifierId.Manure,
  ]);
  const expectedNewScoreWithModifier = [
    1 + MANURE_MUTIPLIER * CACAO_WHEN_BLUE_CORN_PLAYED,
    1,
  ];
  expect(newScoresWithModifier).toEqual(expectedNewScoreWithModifier);
});
