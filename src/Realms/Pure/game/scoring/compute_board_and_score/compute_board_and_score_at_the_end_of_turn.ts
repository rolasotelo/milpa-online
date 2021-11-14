import { flatten, pluck } from "underscore";
import {
  is_there_beans_in_slot,
  is_there_blue_corn_in_slot,
  is_there_cactus_in_slot,
  is_there_chilli_in_slot,
  is_there_coatlicue_in_slot,
  is_there_corn_in_slot,
  is_there_crickets_in_slot,
  is_there_flower_in_slot,
  is_there_maguey_in_slot,
  is_there_pumpkin_in_slot,
  is_there_quelites_in_slot,
  is_there_red_corn_in_slot,
  is_there_tlaloc_in_slot,
  is_there_tomatillo_in_slot,
  is_there_tomatoe_in_slot,
  score_beans_at_the_end_of_turn,
  score_blue_corn_at_the_end_of_turn,
  score_cactus_at_the_end_of_turn,
  score_chilli_at_the_end_of_turn,
  score_coatlicue_at_the_end_of_turn,
  score_corn_at_the_end_of_turn,
  score_cricket_at_the_end_of_turn,
  score_flower_at_the_end_of_turn,
  score_maguey_at_the_end_of_turn,
  score_pumpkin_at_the_end_of_turn,
  score_quelites_at_the_end_of_turn,
  score_red_corn_at_the_end_of_turn,
  score_tlaloc_at_the_end_of_turn,
  score_tomatillo_at_the_end_of_turn,
  score_tomatoe_at_the_end_of_turn,
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
  const allCardsInEdges = flatten(pluck(flatten(board.edges), "cards"));

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
        `${sign(newScoreFromCorn)} ${newScoreFromCorn} 🍫 from 🌽 Corn harvest`
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
        `${sign(
          newScoreFromBeans
        )}${newScoreFromBeans} 🍫 from 🌰 Beans harvest`
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
        `${sign(
          newScoreFromBlueCorn
        )} ${newScoreFromBlueCorn} 🍫 from 🍆 Blue Corn harvest`
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
        `${sign(
          newScoreFromChilli
        )} ${newScoreFromChilli} 🍫 from 🌶 Chilli harvest`
      );
    }
  }
  if (
    is_there_pumpkin_in_slot(allCardsInMilpa) ||
    is_there_pumpkin_in_slot(allCardsInEdges)
  ) {
    const { board: newBoardFromPumpkin, score: newFlowers } =
      score_pumpkin_at_the_end_of_turn(newBoard, turn);
    newBoard = newBoardFromPumpkin;
    if (newFlowers !== 0) {
      scoringLog.description.push(
        `+ ${newFlowers} new 🌼 Flowers from your 🎃 Pumpkins`
      );
    }
  }
  if (
    is_there_flower_in_slot(allCardsInMilpa) ||
    is_there_flower_in_slot(allCardsInEdges)
  ) {
    const { board: newBoardFromFlower, score: newScoreFromFlowers } =
      score_flower_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromFlowers;
    newBoard = newBoardFromFlower;
    if (newScoreFromFlowers !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromFlowers
        )} ${newScoreFromFlowers} 🍫 from 🌼 Pumpkin Flowers harvest`
      );
    }
  }
  if (
    is_there_cactus_in_slot(allCardsInMilpa) ||
    is_there_cactus_in_slot(allCardsInEdges)
  ) {
    const { board: newBoardFromCactus, score: newTunas } =
      score_cactus_at_the_end_of_turn(newBoard, turn);
    newBoard = newBoardFromCactus;
    if (newTunas !== 0) {
      scoringLog.description.push(
        ` ${newTunas} 🌵 Cactus became Cactus with 🍓 Tuna`
      );
    }
  }
  if (is_there_coatlicue_in_slot(allCardsInEdges)) {
    const { board: newBoardFromCoatlicue, score: newScoreFromCoatlicue } =
      score_coatlicue_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromCoatlicue;
    newBoard = newBoardFromCoatlicue;
    if (newScoreFromCoatlicue !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromCoatlicue
        )} ${newScoreFromCoatlicue} 🍫 from 🏺 Coatlicue blessing`
      );
    }
  }
  if (is_there_red_corn_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromRedCorn, score: newScoreFromRedCorn } =
      score_red_corn_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromRedCorn;
    newBoard = newBoardFromRedCorn;
    if (newScoreFromRedCorn !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromRedCorn
        )} ${newScoreFromRedCorn} 🍫 from 🥕 Red Corn harvest`
      );
    }
  }
  if (
    is_there_crickets_in_slot(allCardsInMilpa) ||
    is_there_crickets_in_slot(allCardsInEdges)
  ) {
    const { board: newBoardFromCricket, score: newScoreFromCricket } =
      score_cricket_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromCricket;
    newBoard = newBoardFromCricket;
    if (newScoreFromCricket !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromCricket
        )} ${newScoreFromCricket} 🍫 from 🦗 Crickets in your milpa`
      );
    }
  }
  if (is_there_quelites_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromQuelites, score: newScoreFromQuelites } =
      score_quelites_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromQuelites;
    newBoard = newBoardFromQuelites;
    if (newScoreFromQuelites !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromQuelites
        )} ${newScoreFromQuelites} 🍫 from 🌱 Quelites harvest`
      );
    }
  }
  if (is_there_maguey_in_slot(allCardsInEdges)) {
    const { board: newBoardFromMaguey, score: newScoreFromMaguey } =
      score_maguey_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromMaguey;
    newBoard = newBoardFromMaguey;
    if (newScoreFromMaguey !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromMaguey
        )} ${newScoreFromMaguey} 🍫 from 🦚 Maguey harvest`
      );
    }
  }
  if (is_there_tomatillo_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromTomatillo, score: newScoreFromTomatillo } =
      score_tomatillo_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromTomatillo;
    newBoard = newBoardFromTomatillo;
    if (newScoreFromTomatillo !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromTomatillo
        )} ${newScoreFromTomatillo} 🍫 from 🍈 Tomatillo harvest`
      );
    }
  }
  if (is_there_tomatoe_in_slot(allCardsInMilpa)) {
    const { board: newBoardFromTomatoe, score: newScoreFromTomatoe } =
      score_tomatoe_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromTomatoe;
    newBoard = newBoardFromTomatoe;
    if (newScoreFromTomatoe !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromTomatoe
        )} ${newScoreFromTomatoe} 🍫 from 🍈 Tomatoe harvest`
      );
    }
  }
  if (is_there_tlaloc_in_slot(allCardsInEdges)) {
    const { board: newBoardFromTlaloc, score: newScoreFromTlaloc } =
      score_tlaloc_at_the_end_of_turn(newBoard, turn);
    newScore = newScore + newScoreFromTlaloc;
    newBoard = newBoardFromTlaloc;
    if (newScoreFromTlaloc !== 0) {
      scoringLog.description.push(
        `${sign(
          newScoreFromTlaloc
        )} ${newScoreFromTlaloc} 🍫 from 🌧 Tlaloc's favor`
      );
    }
  }
  if (scoringLog.description.length === 0) {
    scoringLog.description.push(`+ 0 🍫`);
  }

  return {
    board: newBoard,
    score: newScore,
    scoringLog,
  };
};

const sign = (value: number) => {
  return value >= 0 ? "+" : "";
};
