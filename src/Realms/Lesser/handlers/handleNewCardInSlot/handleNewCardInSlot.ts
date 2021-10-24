import { findIndex } from "underscore";
import { GoodId } from "../../../Pure/enums";
import { EmptySlot } from "../../../Pure/game/cards";
import { AnyCard, BoardSlot } from "../../../Pure/types";

export const handleNewCardInSlot = (
  slots: readonly BoardSlot[][],
  row: number,
  column: number,
  card: AnyCard
): [Readonly<BoardSlot[][]>, AnyCard] => {
  const WIPSlots = slots.slice();
  const slot = WIPSlots[row][column];
  const newCards = slot.cards.slice();
  newCards.push(card);
  const newCard = addModifiersToCard(slot, card);

  if (isEmpty(slot)) {
    newCards.splice(0, 1);
  }
  if (isThereManure(slot)) {
    newCards.splice(0, 1);
  }
  if (isThereShovel(slot)) {
    newCards.splice(0);
    newCards.push(EmptySlot);
  }
  const newSlot = {
    ...slot,
    cards: newCards,
  };

  WIPSlots[row][column] = newSlot;

  return [WIPSlots, newCard];
};

const isEmpty = (slot: BoardSlot) => {
  return findIndex(slot.cards, (card) => card.id === "empty") >= 0;
};

const isThereManure = (slot: BoardSlot) => {
  return (
    findIndex(slot.cards, (card) => card.id === GoodId.Manure) >= 0 &&
    slot.cards.length > 1
  );
};

const isThereShovel = (slot: BoardSlot) => {
  return findIndex(slot.cards, (card) => card.id === GoodId.Shovel) >= 0;
};

const addModifiersToCard = (slot: BoardSlot, card: AnyCard) => {
  const newCard = { ...card };
  if (isThereManure(slot)) {
    newCard.modifier.push();
  }
  return newCard;
};
