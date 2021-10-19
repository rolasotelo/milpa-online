import { compute_next_turn } from "..";

test("should return plus 1 turn when stage count started again", () => {
  const currentTurn = 1;
  const nextStage = 1;
  const nextTurn = compute_next_turn(currentTurn, nextStage);
  expect(nextTurn).toEqual(2);
});

test("should return same turn if next stage is grater than 1", () => {
  const currentTurn = 1;
  const nextStage = 2;
  const nextTurn = compute_next_turn(currentTurn, nextStage);
  expect(nextTurn).toEqual(1);
});
