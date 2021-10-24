import { findIndex } from "underscore";
import { GoodId } from "../../../enums";
import { BoardSlot } from "../../../types";

export const is_there_shovel = (slot: BoardSlot) => {
  return findIndex(slot.cards, (card) => card.id === GoodId.Shovel) >= 0;
};
