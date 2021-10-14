import { SlotType } from "../../../enums";
import { AnyCard, BoardSlot, SelectedCard } from "../../../types";
import { EmptySlot } from "../../cards";
import { find } from "underscore";

type ReturnType = (isYourMilpa: boolean, slot: BoardSlot) => boolean;

export const compute_can_interact_with_card = (
  selectedCard: Readonly<SelectedCard>,
  isYourTurn: boolean | undefined
): ReturnType => {
  let canInteractWithCard: ReturnType = (
    isYourMilpa: boolean,
    slot: Readonly<BoardSlot>
  ) => {
    return false;
  };

  if (
    isYourTurn &&
    selectedCard.card &&
    selectedCard.indexFromHand &&
    selectedCard.type
  ) {
    canInteractWithCard = (isYourMilpa: boolean, slot: Readonly<BoardSlot>) => {
      if (slot.type === undefined || slot.cards.length === 0) {
        return false;
      }
      const isEmptySlot = slot.cards.toString() === [EmptySlot].toString();
      if (isYourMilpa) {
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
        canInteract = !!find(slot.cards, (card) => {
          return card.id === selectedCard.card?.id;
        });
      }
      break;
    case SlotType.Edge:
      if (typeof card.canInteractWith.ownFilledEdgeSlots === "boolean") {
        canInteract = card.canInteractWith.ownFilledEdgeSlots;
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
