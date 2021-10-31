import { flatten, pluck, reduce } from "underscore";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_cards_in_board = (card: AnyCard) => {
  return (milpaOrEdges: BoardSlot[][]) => {
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
