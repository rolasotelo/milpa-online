import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_blue_corn_in_slot,
  is_there_corn_in_slot,
  score_beans_at_the_end_of_turn,
  score_blue_corn_at_the_end_of_turn,
  score_corn_at_the_end_of_turn,
} from "..";
import { ScoreLogType } from "../../../enums";
import { Board, ScoringHistory } from "../../../types";

export const compute_board_and_score_at_the_end_of_turn = (
  board: Board,
  score: number,
  turn: number
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
      score_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromCorn;
    newBoard = newBoardFromCorn;
    if (newScoreFromCorn !== 0) {
      scoringLog.push({
        name: "End of turn",
        description: [`+${newScoreFromCorn}🍫 from 🌽 Corn`],
        type: ScoreLogType.End_Of_Turn,
        icon: null,
      });
    }
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
    if (newScoreFromBeans !== 0) {
      scoringLog.push({
        name: "End of turn",
        description: [`+${newScoreFromBeans}🍫 from 🌰 Beans`],
        type: ScoreLogType.End_Of_Turn,
        icon: null,
      });
    }
  }
  if (is_there_blue_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBlueCorn, score: newScoreFromBlueCorn } =
      score_blue_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromBlueCorn;
    newBoard = newBoardFromBlueCorn;
    if (newScoreFromBlueCorn !== 0) {
      scoringLog.push({
        name: "End of turn",
        description: [`+${newScoreFromBlueCorn}🍫 from 🍆 Blue Corn`],
        type: ScoreLogType.End_Of_Turn,
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
