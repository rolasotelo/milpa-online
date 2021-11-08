import { GoodId, ModifierId } from "../../../enums";
import { Board } from "../../../types";
import { NEW_TUNA_PERCENTAGE } from "./constants";

export const score_cactus_at_the_end_of_turn = (
  board: Board,
  turn: number
): { board: Board; score: number } => {
  const milpa = board.milpa;
  const edges = board.edges;
  let newTunas = 0;

  milpa.map((row) => {
    row.map((slot) => {
      slot.cards.map((card) => {
        if (card.id === GoodId.Cactus) {
          const isThereNewTuna = Math.random() * 100 < NEW_TUNA_PERCENTAGE;
          if (!card.modifier.includes(ModifierId.Tuna) && isThereNewTuna) {
            card.modifier.push(ModifierId.Tuna);
            newTunas++;
          }
        }
      });
    });
  });

  edges.map((row) => {
    row.map((slot) => {
      slot.cards.map((card) => {
        if (card.id === GoodId.Cactus) {
          const isThereNewTuna = Math.random() * 100 < NEW_TUNA_PERCENTAGE;
          if (!card.modifier.includes(ModifierId.Tuna) && isThereNewTuna) {
            card.modifier.push(ModifierId.Tuna);
            newTunas++;
          }
        }
      });
    });
  });

  return {
    board: { ...board },
    score: newTunas,
  };
};
