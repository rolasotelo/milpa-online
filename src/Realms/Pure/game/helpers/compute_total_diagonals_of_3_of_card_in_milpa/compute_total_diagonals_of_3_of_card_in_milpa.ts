import { flatten, indexOf, pluck, reduce } from "underscore";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_diagonals_of_3_of_card_in_milpa = (
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
          indexOf([2, 3, 6, 7, 0, 1, 4, 5], index) >= 0 &&
          is_diagonal_of_3(is_there_card_in_slot, index, allSlots)
        ) {
          newTotal = newTotal + 1;
        }
        return newTotal;
      },
      0
    );
  };
};

export const is_diagonal_of_3 = (
  is_there_card_in_slot: (slot: AnyCard[]) => Boolean,
  pivot: number,
  allSlots: (readonly AnyCard[])[]
) => {
  if (indexOf([2, 3, 6, 7], pivot) >= 0) {
    const diagonal = [
      allSlots[pivot],
      allSlots[pivot + 3],
      allSlots[pivot + 6],
    ];
    return reduce(
      diagonal,
      (isDiagonal: Boolean, slot) => {
        return isDiagonal && is_there_card_in_slot(slot as AnyCard[]);
      },
      true
    );
  } else {
    const diagonal = [
      allSlots[pivot],
      allSlots[pivot + 5],
      allSlots[pivot + 10],
    ];
    return reduce(
      diagonal,
      (isDiagonal: Boolean, slot) => {
        return isDiagonal && is_there_card_in_slot(slot as AnyCard[]);
      },
      true
    );
  }
};
