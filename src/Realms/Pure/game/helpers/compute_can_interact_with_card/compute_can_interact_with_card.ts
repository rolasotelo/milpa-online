import { findIndex, flatten, intersection, pluck, reduce } from "underscore";
import { MAX_CARD_PER_SLOT, TOTAL_TURNS } from "../../../constants";
import { GoodId, ModifierId, SlotType } from "../../../enums";
import { AnyCard, BoardSlot, SelectedCard } from "../../../types";
import { Cricket, Huitlacoche, Manure, Shovel } from "../../cards";
import { Flower } from "../../cards/crops/flower";

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
        (compute_total_cards_but_flower_and_manure_and_cricket(slot.cards) >=
          MAX_CARD_PER_SLOT &&
          selectedCard.card?.id !== Shovel.id &&
          selectedCard.card?.id !== Huitlacoche.id) ||
        (is_modifier_already_present_in_slot(
          slot.cards,
          ModifierId.Huitlacoche
        ) &&
          selectedCard.card?.id === GoodId.Huitlacoche)
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
        if (card.id === GoodId.Huitlacoche) {
          canInteract =
            intersection(
              pluck(slot.cards, "id"),
              card.canInteractWith.ownFilledMilpaSlots
            ).length > 0;
        } else {
          canInteract =
            intersection(
              pluck(slot.cards, "id"),
              card.canInteractWith.ownFilledMilpaSlots
            ).length === pluck(slot.cards, "id").length;
        }
      }
      break;
    case SlotType.Edge:
      if (typeof card.canInteractWith.ownFilledEdgeSlots === "boolean") {
        canInteract = card.canInteractWith.ownFilledEdgeSlots;
      } else {
        if (card.id === GoodId.Huitlacoche) {
          canInteract =
            intersection(
              pluck(slot.cards, "id"),
              card.canInteractWith.ownFilledEdgeSlots
            ).length > 0;
        } else {
          canInteract =
            intersection(
              pluck(slot.cards, "id"),
              card.canInteractWith.ownFilledEdgeSlots
            ).length === pluck(slot.cards, "id").length;
        }
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
        canInteract =
          intersection(
            pluck(slot.cards, "id"),
            card.canInteractWith.othersFilledMilpaSlots
          ).length === pluck(slot.cards, "id").length;
      }
      break;
    case SlotType.Edge:
      if (typeof card.canInteractWith.othersFilledEdgeSlots === "boolean") {
        canInteract = card.canInteractWith.othersFilledEdgeSlots;
      } else {
        canInteract =
          intersection(
            pluck(slot.cards, "id"),
            card.canInteractWith.othersFilledEdgeSlots
          ).length === pluck(slot.cards, "id").length;
      }
      break;
    default:
      canInteract = false;
  }
  return canInteract;
};

export const is_modifier_already_present_in_slot = (
  cards: readonly AnyCard[],
  modifierId: ModifierId
): Boolean => {
  return reduce(
    flatten(pluck(cards, "modifier")),
    (alreadyPresent: Boolean, modifier) => {
      return alreadyPresent || modifier === modifierId;
    },
    false
  );
};

export const compute_total_cards_but_one_in_slot = (card: AnyCard) => {
  return (slot: readonly AnyCard[]) => {
    return reduce(
      slot,
      (total, c) => {
        return c.id !== card.id ? total + 1 : total;
      },
      0
    );
  };
};

export const compute_total_cards_but = (cards: AnyCard[]) => {
  return (slot: readonly AnyCard[]) => {
    return reduce(
      slot,
      (total, c) => {
        return reduce(
          cards,
          (isThereOneOfTheCards, card) => {
            return isThereOneOfTheCards || card.id === c.id;
          },
          false
        )
          ? total
          : total + 1;
      },
      0
    );
  };
};

const compute_total_cards_but_flower_and_manure_and_cricket =
  compute_total_cards_but([Flower, Manure, Cricket]);
