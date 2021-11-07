import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_blue_corn_in_slot,
  is_there_chilli_in_slot,
  is_there_corn_in_slot,
  is_there_pumpkin_in_slot,
  score_beans_at_the_end_of_the_game,
  score_blue_corn_at_the_end_of_the_game,
  score_chilli_at_the_end_of_the_game,
  score_pumpkin_at_the_end_of_the_game,
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
  scoringLog: ScoringHistory;
} => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));
  const allCardsInEdges = flatten(pluck(flatten(board.edges), "cards"));

  let newScore = score;
  let newBoard = board;
  let scoringLog = {
    name: "End of game",
    description: [],
    type: ScoreLogType.End_Of_Turn,
    icon: null,
  } as ScoringHistory;
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromCorn } =
      score_corn_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromCorn;
    newBoard = newBoardFromCorn;
    if (newScoreFromCorn !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromCorn
        )} ${newScoreFromCorn}🍫 from 🌽 Corn columns and rows`
      );
    }
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
    if (newScoreFromBeans !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromBeans
        )} ${newScoreFromBeans}🍫 from 🌰 Beans being adjacent`
      );
    }
  }
  if (is_there_blue_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBlueCorn, score: newScoreFromBlueCorn } =
      score_blue_corn_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromBlueCorn;
    newBoard = newBoardFromBlueCorn;
    if (newScoreFromBlueCorn !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromBlueCorn
        )} ${newScoreFromBlueCorn}🍫 from 🍆 Blue Corn diagonals`
      );
    }
  }
  if (is_there_chilli_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromChilli, score: newScoreFromChilli } =
      score_chilli_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromChilli;
    newBoard = newBoardFromChilli;
    if (newScoreFromChilli !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromChilli
        )} ${newScoreFromChilli} 🍫 from 🌶 Chilli diagonal adjacencies`
      );
    }
  }
  if (
    is_there_pumpkin_in_slot(allCardsInMilpa) ||
    is_there_pumpkin_in_slot(allCardsInEdges)
  ) {
    const { board: newBoardFromPumpkin, score: newScoreFromPumpkin } =
      score_pumpkin_at_the_end_of_the_game(newBoard);
    newScore = newScore + newScoreFromPumpkin;
    newBoard = newBoardFromPumpkin;
    if (newScoreFromPumpkin !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromPumpkin
        )} ${newScoreFromPumpkin} 🍫 from all your 🎃 Pumpkins`
      );
    }
  }

  if (scoringLog.description.length === 0) {
    scoringLog.description.push(`+0🍫 . I'm not even mad.`);
  }

  return {
    board: newBoard,
    score: newScore,
    scoringLog,
  };
};

const sign = (value: number) => {
  return value >= 0 ? "+" : "-";
};
