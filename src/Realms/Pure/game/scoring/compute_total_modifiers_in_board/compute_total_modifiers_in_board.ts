import { flatten, indexOf, pluck, reduce } from "underscore";
import { ModifierId } from "../../../enums";
import { BoardSlot } from "../../../types";

export const compute_total_modifiers_in_board = (modifier: ModifierId) => {
  return (milpaOrEdges: readonly BoardSlot[][]) => {
    const allCards = flatten(pluck(flatten(milpaOrEdges), "cards"));
    return reduce(
      allCards,
      (total, c) => {
        return indexOf(c.modifier, modifier) >= 0 ? total + 1 : total;
      },
      0
    );
  };
};
