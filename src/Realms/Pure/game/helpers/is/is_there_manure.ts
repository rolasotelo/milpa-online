import { findIndex } from "underscore";
import { GoodId } from "../../../enums";
import { BoardSlot } from "../../../types";

export const is_there_manure = (slot: BoardSlot) => {
  return (
    findIndex(slot.cards, (card) => card.id === GoodId.Manure) >= 0 &&
    slot.cards.length > 1
  );
};
