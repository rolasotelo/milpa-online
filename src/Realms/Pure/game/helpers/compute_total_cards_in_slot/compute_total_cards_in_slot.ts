import { flatten, indexOf, pluck, reduce } from "underscore";
import { CropId, GoodId, ModifierId } from "../../../enums";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_cards_in_board = (card: AnyCard) => {
  return (milpaOrEdges: readonly BoardSlot[][]) => {
    const allCards = flatten(pluck(flatten(milpaOrEdges), "cards"));
    return reduce(
      allCards,
      (total, c) => {
        return c.id === card.id ? total + 1 : total;
      },
      0
    );
  };
};

export const compute_total_cards_in_board_with_modifier = (
  card: AnyCard,
  modifier: ModifierId
) => {
  return (milpaOrEdges: readonly BoardSlot[][]) => {
    const allCards = flatten(pluck(flatten(milpaOrEdges), "cards"));
    return reduce(
      allCards,
      (total, c) => {
        return c.id === card.id && card_has_modifier(c, modifier)
          ? total + 1
          : total;
      },
      0
    );
  };
};

export const card_has_modifier = (
  card: AnyCard,
  modifier: ModifierId
): Boolean => {
  return indexOf(card.modifier, modifier) >= 0;
};

export const compute_total_cards_in_board_sharing_slot_with = (
  card: AnyCard,
  sharingCard: GoodId | CropId | "empty"
) => {
  return (milpaOrEdges: readonly BoardSlot[][]) => {
    const allSlots = pluck(flatten(milpaOrEdges), "cards");
    return reduce(
      allSlots,
      (total, slot) => {
        return slot_has_cards(slot, card.id, sharingCard) ? total + 1 : total;
      },
      0
    );
  };
};

export const slot_has_cards = (
  slot: readonly AnyCard[],
  card1: GoodId | CropId | "empty",
  card2: GoodId | CropId | "empty"
): Boolean => {
  return (
    indexOf(pluck(slot, "id"), card1) >= 0 &&
    indexOf(pluck(slot, "id"), card2) >= 0
  );
};
