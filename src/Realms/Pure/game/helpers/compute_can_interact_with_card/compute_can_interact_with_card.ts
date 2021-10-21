import { find, findIndex, intersection, pluck } from "underscore";
import { MAX_CARD_PER_SLOT, TOTAL_TURNS } from "../../../constants";
import { SlotType } from "../../../enums";
import { BoardSlot, SelectedCard } from "../../../types";
import { Shovel } from "../../cards";

export type ReturnTypeCanInteractWithCard = (
  isYourBoard: boolean,
  slot: BoardSlot
) => boolean;

export const compute_can_interact_with_card = (
  selectedCard: Readonly<SelectedCard>,
  isYourTurn: boolean | undefined,
  currentTurn: number | undefined
): ReturnTypeCanInteractWithCard => {
  let canInteractWithCard: ReturnTypeCanInteractWithCard = (
    isYourBoard: boolean,
    slot: Readonly<BoardSlot>
  ) => {
    return false;
  };

  if (
    currentTurn &&
    currentTurn <= TOTAL_TURNS &&
    isYourTurn &&
    selectedCard.card &&
    typeof selectedCard.indexFromHand === "number" &&
    selectedCard.type
  ) {
    canInteractWithCard = (isYourBoard: boolean, slot: Readonly<BoardSlot>) => {
      if (
        slot.type === undefined ||
        slot.cards.length === 0 ||
        (slot.cards.length >= MAX_CARD_PER_SLOT &&
          selectedCard.card?.id !== Shovel.id)
      ) {
        return false;
      }

      const isEmptySlot =
        findIndex(slot.cards, (card) => card.id === "empty") >= 0;
      if (isYourBoard) {
        if (isEmptySlot) {
          return canInteractWithEmptySlotInYourBoard(selectedCard, slot);
        } else {
          return canInteractWithNonEmptySlotInYourBoard(selectedCard, slot);
        }
      } else {
        if (isEmptySlot) {
          return canInteractWithEmptySlotInOpponentsBoard(selectedCard, slot);
        } else {
          return canInteractWithNonEmptySlotInOpponentsBoard(
            selectedCard,
            slot
          );
        }
      }
    };
  }

  return canInteractWithCard;
};

const canInteractWithEmptySlotInYourBoard = (
  selectedCard: Readonly<SelectedCard>,
  slot: Readonly<BoardSlot>
): boolean => {
  const card = selectedCard.card!;
  let canInteract;
  switch (slot.type) {
    case SlotType.Milpa:
      canInteract = card.canInteractWith.ownEmptyMilpaSlots;
      break;
    case SlotType.Edge:
      canInteract = card.canInteractWith.ownEmptyEdgeSlots;
      break;
    default:
      canInteract = false;
  }
  return canInteract;
};
const canInteractWithNonEmptySlotInYourBoard = (
  selectedCard: Readonly<SelectedCard>,
  slot: Readonly<BoardSlot>
): boolean => {
  const card = selectedCard.card!;
  let canInteract: boolean;
  switch (slot.type) {
    case SlotType.Milpa:
      if (typeof card.canInteractWith.ownFilledMilpaSlots === "boolean") {
        canInteract = card.canInteractWith.ownFilledMilpaSlots;
      } else {
        canInteract =
          intersection(
            pluck(slot.cards, "id"),
            card.canInteractWith.ownFilledMilpaSlots
          ).length > 0;
      }
      break;
    case SlotType.Edge:
      if (typeof card.canInteractWith.ownFilledEdgeSlots === "boolean") {
        canInteract = card.canInteractWith.ownFilledEdgeSlots;
      } else {
        canInteract =
          intersection(
            pluck(slot.cards, "id"),
            card.canInteractWith.ownFilledEdgeSlots
          ).length > 0;
      }
      break;
    default:
      canInteract = false;
  }
  return canInteract;
};
const canInteractWithEmptySlotInOpponentsBoard = (
  selectedCard: Readonly<SelectedCard>,
  slot: Readonly<BoardSlot>
): boolean => {
  const card = selectedCard.card!;
  let canInteract;
  switch (slot.type) {
    case SlotType.Milpa:
      canInteract = card.canInteractWith.othersEmptyMilpaSlots;
      break;
    case SlotType.Edge:
      canInteract = card.canInteractWith.othersEmptyEdgeSlots;
      break;
    default:
      canInteract = false;
  }
  return canInteract;
};
const canInteractWithNonEmptySlotInOpponentsBoard = (
  selectedCard: Readonly<SelectedCard>,
  slot: Readonly<BoardSlot>
): boolean => {
  const card = selectedCard.card!;
  let canInteract: boolean;
  switch (slot.type) {
    case SlotType.Milpa:
      if (typeof card.canInteractWith.othersFilledMilpaSlots === "boolean") {
        canInteract = card.canInteractWith.othersFilledMilpaSlots;
      } else {
        canInteract = !!find(slot.cards, (card) => {
          return card.id === selectedCard.card?.id;
        });
      }
      break;
    case SlotType.Edge:
      if (typeof card.canInteractWith.othersFilledEdgeSlots === "boolean") {
        canInteract = card.canInteractWith.othersFilledEdgeSlots;
      } else {
        canInteract = !!find(slot.cards, (card) => {
          return card.id === selectedCard.card?.id;
        });
      }
      break;
    default:
      canInteract = false;
  }
  return canInteract;
};
