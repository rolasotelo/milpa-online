import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_blue_corn_in_slot,
  is_there_corn_in_slot,
  score_beans_at_the_end_of_the_game,
  score_blue_corn_at_the_end_of_the_game,
} from "..";
import { ScoreLogType } from "../../../enums";
import { Board, ScoringHistory } from "../../../types";
import { score_corn_at_the_end_of_the_game } from "../corn/score_corn_at_the_end_of_the_game";

export const compute_board_and_score_at_the_end_of_the_game = (
  board: Board,
  score: number
): {
  board: Board;
  score: number;
  scoringLog: ScoringHistory[];
} => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));

  let newScore = score;
  let newBoard = board;
  let scoringLog = [];
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromCorn } =
      score_corn_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromCorn;
    newBoard = newBoardFromCorn;
    if (newScoreFromCorn !== 0) {
      scoringLog.push({
        name: "Final Score",
        description: [`+${newScoreFromCorn}🍫 from 🌽 Corn`],
        type: ScoreLogType.Final_Score,
        icon: null,
      });
    }
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
    if (newScoreFromBeans !== 0) {
      scoringLog.push({
        name: "Final Score",
        description: [`+${newScoreFromBeans}🍫 from 🌰 Bean`],
        type: ScoreLogType.Final_Score,
        icon: null,
      });
    }
  }
  if (is_there_blue_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBlueCorn, score: newScoreFromBlueCorn } =
      score_blue_corn_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromBlueCorn;
    newBoard = newBoardFromBlueCorn;
    if (newScoreFromBlueCorn !== 0) {
      scoringLog.push({
        name: "Final Score",
        description: [`+${newScoreFromBlueCorn}🍫 from 🍆 Blue Corn`],
        type: ScoreLogType.Final_Score,
        icon: null,
      });
    }
  }

  return {
    board: newBoard,
    score: newScore,
    scoringLog,
  };
};
