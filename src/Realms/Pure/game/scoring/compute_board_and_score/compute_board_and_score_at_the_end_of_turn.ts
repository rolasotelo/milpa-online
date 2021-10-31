import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_corn_in_slot,
  score_beans_at_the_end_of_turn,
  score_corn_at_the_end_of_turn,
} from "..";
import { Board } from "../../../types";

export const compute_board_and_score_at_the_end_of_turn = (
  board: Board,
  score: number,
  turn: number
): { board: Board; score: number } => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));

  let newScore = score;
  let newBoard = board;
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromcorn } =
      score_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromcorn;
    newBoard = newBoardFromCorn;
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
  }

  return {
    board: newBoard,
    score: newScore,
  };
};
