import { ModifierId } from "../../../Pure/enums";
import { EmptySlot } from "../../../Pure/game/cards";
import {
  is_empty,
  is_there_manure,
  is_there_shovel,
} from "../../../Pure/game/helpers";
import { AnyCard, BoardSlot } from "../../../Pure/types";

export const handleNewCardInSlot = (
  slots: readonly BoardSlot[][],
  row: number,
  column: number,
  card: AnyCard
): [Readonly<BoardSlot[][]>, AnyCard] => {
  const WIPSlots = slots.slice();
  const slot = WIPSlots[row][column];
  const newCards = slot.cards as AnyCard[];
  newCards.push(card);
  const newCard = addModifiersToCard(slot, card);

  if (is_empty(slot)) {
    newCards.splice(0, 1);
  }
  if (is_there_manure(slot)) {
    console.log("manure detected");
    newCards.splice(0, 1);
  }
  if (is_there_shovel(slot)) {
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

const addModifiersToCard = (slot: BoardSlot, card: AnyCard) => {
  const newCard = { ...card };
  if (is_there_manure(slot)) {
    newCard.modifier.push(ModifierId.Manure);
  }
  return newCard;
};
