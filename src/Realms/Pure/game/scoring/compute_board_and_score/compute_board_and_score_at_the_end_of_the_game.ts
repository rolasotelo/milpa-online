import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_corn_in_slot,
  score_beans_at_the_end_of_the_game,
} from "..";
import { Board } from "../../../types";
import { score_corn_at_the_end_of_the_game } from "../corn/score_corn_at_the_end_of_the_game";

export const compute_board_and_score_at_the_end_of_the_game = (
  board: Board,
  score: number
): { board: Board; score: number } => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));

  let newScore = score;
  let newBoard = board;
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromCorn } =
      score_corn_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromCorn;
    newBoard = newBoardFromCorn;
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
  }

  return {
    board: newBoard,
    score: newScore,
  };
};
