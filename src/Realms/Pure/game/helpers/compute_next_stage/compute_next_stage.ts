import { TOTAL_STAGES } from "../../../constants";

export const compute_next_stage = (currentStage: number): number  => {
  return (currentStage + 1) % TOTAL_STAGES;
};
