import { indexOf, pluck } from "underscore";
import { CropId, GoodId, ModifierId } from "../../../Pure/enums";
import { BlueCorn, Corn, EmptySlot, RedCorn } from "../../../Pure/game/cards";
import {
  is_empty,
  is_there_in_slot,
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
    newCards.splice(0, 1);
  }
  if (is_there_shovel(slot)) {
    newCards.splice(0);
    newCards.push(EmptySlot);
  }
  const cards = slot.cards as AnyCard[];
  if (is_there_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
    newCards.pop();
    console.log(pluck(newCards, "id"));
    console.log(indexOf(pluck(newCards, "id"), CropId.Corn));
    newCards[indexOf(pluck(newCards, "id"), CropId.Corn)].modifier.push(
      ModifierId.Huitlacoche
    );
  }
  if (is_there_blue_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
    newCards.pop();
    newCards[indexOf(pluck(newCards, "id"), CropId.BlueCorn)].modifier.push(
      ModifierId.Huitlacoche
    );
  }
  if (is_there_red_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
    newCards.pop();
    newCards[indexOf(pluck(newCards, "id"), CropId.RedCorn)].modifier.push(
      ModifierId.Huitlacoche
    );
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

const is_there_corn_in_slot = is_there_in_slot(Corn);
const is_there_blue_corn_in_slot = is_there_in_slot(BlueCorn);
const is_there_red_corn_in_slot = is_there_in_slot(RedCorn);
