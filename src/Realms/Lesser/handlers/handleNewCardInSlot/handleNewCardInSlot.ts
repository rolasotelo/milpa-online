import { findIndex } from "underscore";
import { GoodId } from "../../../Pure/enums";
import { EmptySlot } from "../../../Pure/game/cards";
import { AnyCard, BoardSlot } from "../../../Pure/types";

export const handleNewCardInSlot = (slot: BoardSlot, card: AnyCard) => {
  (slot.cards as AnyCard[]).push(card);

  if (findIndex(slot.cards, (card) => card.id === "empty") >= 0) {
    (slot.cards as AnyCard[]).splice(0, 1);
  }
  if (
    findIndex(slot.cards, (card) => card.id === GoodId.Manure) >= 0 &&
    slot.cards.length > 1
  ) {
    (slot.cards as AnyCard[]).splice(0, 1);
  }
  if (findIndex(slot.cards, (card) => card.id === GoodId.Shovel) >= 0) {
    (slot.cards as AnyCard[]) = [];
    (slot.cards as AnyCard[]).push(EmptySlot);
  }
};
