import { score_on_corn_played } from "..";
import { Corn, EmptySlot } from "../../cards";
import { compute_score_on_card_played } from "./compute_score_on_card_played";

test("should return new scores", () => {
  const oldScore: [number, number] = [1, 1];
  expect(compute_score_on_card_played(oldScore, Corn)).toEqual(
    score_on_corn_played(oldScore, [])
  );
});

test("should throw error for not supported scoring", () => {
  expect(() => {
    compute_score_on_card_played([1, 1], EmptySlot);
  }).toThrow(Error(`${EmptySlot.name}: scoring not implemented`));
});
