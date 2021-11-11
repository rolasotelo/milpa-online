import { flatten, indexOf, pluck, reduce } from "underscore";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_squares_in_milpa = (
  is_there_card_in_slot: (slot: AnyCard[]) => Boolean
) => {
  return (milpa: readonly BoardSlot[][]): number => {
    const allSlots = pluck(flatten(milpa), "cards");
    return reduce(
      allSlots,
      (total, slot, index) => {
        let newTotal = total;
        if (
          is_there_card_in_slot(slot as AnyCard[]) &&
          indexOf([0, 1, 2, 4, 5, 6, 8, 9, 10], index) >= 0 &&
          is_square(is_there_card_in_slot, index, allSlots)
        ) {
          newTotal = newTotal + 1;
        }
        return newTotal;
      },
      0
    );
  };
};

export const is_square = (
  is_there_card_in_slot: (slot: AnyCard[]) => Boolean,
  pivot: number,
  allSlots: (readonly AnyCard[])[]
) => {
  const square = [
    allSlots[pivot],
    allSlots[pivot + 1],
    allSlots[pivot + 4],
    allSlots[pivot + 5],
  ];
  return reduce(
    square,
    (isSquare: Boolean, slot) => {
      return isSquare && is_there_card_in_slot(slot as AnyCard[]);
    },
    true
  );
};
