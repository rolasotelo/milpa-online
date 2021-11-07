import { GoodId, ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { Coatlicue } from "../../cards";
import { is_there_in_slot } from "../../helpers";
import {
  YOUR_COATLICUE_PERCENTAGE,
  OPPONENTS_COATLICUE_PERCENTAGE,
  PLUS_PER_YOUR_COATLICUE,
  PLUS_PER_OPPONENTS_COATLICUE,
} from "./constants";

export const score_coatlicue_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const edges = board.edges;
  let newScore = 0;

  edges.map((row) => {
    row.map((slot) => {
      slot.cards.map((card) => {
        if (card.id === GoodId.Coatlicue) {
          if (card.modifier.includes(ModifierId.Opponents)) {
            const isThereNewScore =
              Math.random() * 100 < OPPONENTS_COATLICUE_PERCENTAGE;
            if (isThereNewScore) {
              newScore = newScore + PLUS_PER_OPPONENTS_COATLICUE;
            } else {
              const isThereNewScore =
                Math.random() * 100 < YOUR_COATLICUE_PERCENTAGE;
              if (isThereNewScore) {
                newScore = newScore + PLUS_PER_YOUR_COATLICUE;
              }
            }
          }
        }
      });
    });
  });

  return {
    board: { ...board },
    score: newScore,
  };
};

export const is_there_coatlicue_in_slot = is_there_in_slot(Coatlicue);
