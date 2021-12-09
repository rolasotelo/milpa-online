import { findIndex } from "underscore";
import { BoardSlot } from "../../../types";

export const is_empty = (slot: BoardSlot): boolean  => {
  return findIndex(slot.cards, (card) => card.id === "empty") >= 0;
};
