import { flatten, pluck } from "underscore";
import { is_there_corn_in_slot, score_corn_at_the_end_of_turn } from "..";
import { Board } from "../../../types";

export const compute_board_and_score_at_the_end_of_turn = (
  board: Board,
  score: number
): { board: Board; score: number } => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));

  let newScore = score;
  let newBoard = board;
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromcorn } =
      score_corn_at_the_end_of_turn(newBoard);
    newScore = newScore + newScoreFromcorn;
    newBoard = newBoardFromCorn;
  }

  return {
    board: newBoard,
    score: newScore,
  };
};
