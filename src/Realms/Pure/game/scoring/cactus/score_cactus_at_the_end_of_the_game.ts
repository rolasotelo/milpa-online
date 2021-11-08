import { ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { Cactus } from "../../cards";
import {
  compute_total_cards_in_board_with_modifier,
  is_there_in_slot,
} from "../../helpers";
import {
  PLUS_PER_0_TUNA_AT_THE_END_OF_GAME,
  PLUS_PER_1_TUNA_AT_THE_END_OF_GAME,
  PLUS_PER_2_TUNA_AT_THE_END_OF_GAME,
  PLUS_PER_3_TUNA_AT_THE_END_OF_GAME,
  PLUS_PER_4_TUNA_AT_THE_END_OF_GAME,
} from "./constants";

export const score_cactus_at_the_end_of_the_game = (
  board: Board
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;

  let totalCactusWithTunas =
    +compute_total_cactus_with_tuna(milpa) +
    compute_total_cactus_with_tuna(edges);

  let finalScore = 0;
  switch (totalCactusWithTunas) {
    case 0:
      finalScore = PLUS_PER_0_TUNA_AT_THE_END_OF_GAME;
      break;
    case 1:
      finalScore = PLUS_PER_1_TUNA_AT_THE_END_OF_GAME;
      break;
    case 2:
      finalScore = PLUS_PER_2_TUNA_AT_THE_END_OF_GAME;
      break;
    case 3:
      finalScore = PLUS_PER_3_TUNA_AT_THE_END_OF_GAME;
      break;
    case 4:
      finalScore = PLUS_PER_4_TUNA_AT_THE_END_OF_GAME;
      break;
    default:
      finalScore = PLUS_PER_4_TUNA_AT_THE_END_OF_GAME;
      break;
  }

  return {
    board: { ...board },
    score: finalScore,
  };
};

export const compute_total_cactus_with_tuna =
  compute_total_cards_in_board_with_modifier(Cactus, ModifierId.Tuna);

export const is_there_cactus_in_slot = is_there_in_slot(Cactus);
