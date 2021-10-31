import { flatten, indexOf, pluck, reduce } from "underscore";
import { ModifierId } from "../../../enums";
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
