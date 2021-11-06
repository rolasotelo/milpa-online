import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_blue_corn_in_slot,
  is_there_chilli_in_slot,
  is_there_corn_in_slot,
  is_there_flower_in_slot,
  is_there_pumpkin_in_slot,
  score_beans_at_the_end_of_turn,
  score_blue_corn_at_the_end_of_turn,
  score_chilli_at_the_end_of_turn,
  score_corn_at_the_end_of_turn,
  score_flower_at_the_end_of_turn,
  score_pumpkin_at_the_end_of_turn,
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
  scoringLog: ScoringHistory;
} => {
  const allCardsInMilpa = flatten(pluck(flatten(board.milpa), "cards"));

  let newScore = score;
  let newBoard = board;
  let scoringLog = {
    name: "End of turn",
    description: [],
    type: ScoreLogType.End_Of_Turn,
    icon: null,
  } as ScoringHistory;
  if (is_there_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromCorn, score: newScoreFromCorn } =
      score_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromCorn;
    newBoard = newBoardFromCorn;
    if (newScoreFromCorn !== 0) {
      scoringLog.description.push(
        `+${newScoreFromCorn} 🍫 from 🌽 Corn harvest`
      );
    }
  }
  if (is_there_beans_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBeans, score: newScoreFromBeans } =
      score_beans_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromBeans;
    newBoard = newBoardFromBeans;
    if (newScoreFromBeans !== 0) {
      scoringLog.description.push(
        `+${newScoreFromBeans} 🍫 from 🌰 Beans harvest`
      );
    }
  }
  if (is_there_blue_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromBlueCorn, score: newScoreFromBlueCorn } =
      score_blue_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromBlueCorn;
    newBoard = newBoardFromBlueCorn;
    if (newScoreFromBlueCorn !== 0) {
      scoringLog.description.push(
        `+${newScoreFromBlueCorn} 🍫 from 🍆 Blue Corn harvest`
      );
    }
  }
  if (is_there_chilli_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromChilli, score: newScoreFromChilli } =
      score_chilli_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromChilli;
    newBoard = newBoardFromChilli;
    if (newScoreFromChilli !== 0) {
      scoringLog.description.push(
        `+${newScoreFromChilli} 🍫 from 🌶 Chilli harvest`
      );
    }
  }
  if (is_there_pumpkin_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromPumpkin, score: newFlowers } =
      score_pumpkin_at_the_end_of_turn(newBoard, turn);
    newBoard = newBoardFromPumpkin;
    if (newFlowers !== 0) {
      scoringLog.description.push(
        `+${newFlowers} new 🌼 Flowers from your 🎃 Pumpkins`
      );
    }
  }
  if (is_there_flower_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromFlower, score: newScoreFromFlowers } =
      score_flower_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromFlowers;
    newBoard = newBoardFromFlower;
    if (newScoreFromFlowers !== 0) {
      scoringLog.description.push(
        `+${newScoreFromFlowers} 🍫 from 🌼 Pumpkin Flowers harvest`
      );
    }
  }
  if (scoringLog.description.length === 0) {
    scoringLog.description.push(`No 🍫 Cacao to add`);
  }

  return {
    board: newBoard,
    score: newScore,
    scoringLog,
  };
};
