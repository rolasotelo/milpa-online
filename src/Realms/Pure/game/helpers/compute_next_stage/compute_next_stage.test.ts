import { compute_next_stage } from "..";
import { TOTAL_STAGES } from "../../../constants";

test("should return 1 when current stage is the last", () => {
  const currentstage = TOTAL_STAGES;
  const nextStage = compute_next_stage(currentstage);
  expect(nextStage).toEqual(1);
});

test("should return current stage plus 1", () => {
  const currentstage = 1;
  const nextStage = compute_next_stage(currentstage);
  expect(nextStage).toEqual(2);
});
