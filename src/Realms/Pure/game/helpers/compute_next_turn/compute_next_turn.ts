export const compute_next_turn = (currenturn: number, nextStage: number): number  => {
  if (nextStage === 1) {
    return currenturn + 1;
  } else {
    return currenturn;
  }
};
