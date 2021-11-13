import { indexOf, pluck } from "underscore";
import { CropId, GoodId, ModifierId } from "../../../Pure/enums";
import {
  BlueCorn,
  Corn,
  Cricket,
  EmptySlot,
  Huitlacoche,
  Manure,
  RedCorn,
} from "../../../Pure/game/cards";
import {
  is_empty,
  is_there_in_slot,
  is_there_manure,
  is_there_shovel,
} from "../../../Pure/game/helpers";
import { is_there_crickets_in_slot } from "../../../Pure/game/scoring";
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
  if (
    is_there_manure(slot) &&
    card.id !== Manure.id &&
    card.id !== Huitlacoche.id
  ) {
    newCards.splice(indexOf(pluck(newCards, "id"), Manure.id), 1);
  }
  const cards = slot.cards as AnyCard[];
  if (is_there_crickets_in_slot(cards) && card.id !== Cricket.id) {
    newCards.splice(indexOf(pluck(newCards, "id"), Cricket.id), 1);
  }
  if (is_there_shovel(slot)) {
    newCards.splice(0);
    newCards.push(EmptySlot);
  }

  if (
    (is_there_corn_in_slot(cards) ||
      is_there_blue_corn_in_slot(cards) ||
      is_there_red_corn_in_slot(cards)) &&
    card.id === GoodId.Huitlacoche
  ) {
    if (is_there_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
      newCards[indexOf(pluck(newCards, "id"), CropId.Corn)].modifier.push(
        ModifierId.Huitlacoche
      );
    }
    if (is_there_blue_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
      newCards[indexOf(pluck(newCards, "id"), CropId.BlueCorn)].modifier.push(
        ModifierId.Huitlacoche
      );
    }
    if (is_there_red_corn_in_slot(cards) && card.id === GoodId.Huitlacoche) {
      newCards[indexOf(pluck(newCards, "id"), CropId.RedCorn)].modifier.push(
        ModifierId.Huitlacoche
      );
    }
    newCards.pop();
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
const is_there_cricket_in_slot = is_there_in_slot(Cricket);
