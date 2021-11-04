import { SlotType } from "../../../enums";
import { AnyCard } from "../../../types";

export const board_slot = (type: SlotType, isYourBoard: boolean) => {
  return (row: number, column: number, cards: AnyCard[]) => {
    return {
      row,
      column,
      cards,
      type,
      isYourBoard,
    };
  };
};
