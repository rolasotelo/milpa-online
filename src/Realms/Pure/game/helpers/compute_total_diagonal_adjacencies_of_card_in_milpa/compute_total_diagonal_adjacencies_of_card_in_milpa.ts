import { flatten, indexOf, pluck, reduce } from "underscore";
import { slot_has_card } from "..";
import { CropId, GoodId } from "../../../enums";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_diagonal_adjacencies_of_card_in_milpa = (
  is_there_card_in_slot: (slot: AnyCard[]) => Boolean,
  card: AnyCard
) => {
  return (milpa: readonly BoardSlot[][]) => {
    const allSlots = pluck(flatten(milpa), "cards");
    return reduce(
      allSlots,
      (total, slot, index) => {
        let newTotal = total;
        if (is_there_card_in_slot(slot as AnyCard[])) {
          newTotal =
            newTotal +
            compute_total_diagonal_adjacencies(allSlots, index, card.id);
        }
        return newTotal;
      },
      0
    );
  };
};

export const compute_total_diagonal_adjacencies = (
  milpaOrEdges: (readonly AnyCard[])[],
  pivot: number,
  card: GoodId | CropId | "empty"
): number => {
  const topLeft =
    pivot > 3 && pivot % 4 > 0 && slot_has_card(milpaOrEdges[pivot - 5], card)
      ? 1
      : 0;
  const topRight =
    pivot > 3 && pivot % 4 < 3 && slot_has_card(milpaOrEdges[pivot - 3], card)
      ? 1
      : 0;
  const bottomLeft =
    pivot < 12 && pivot % 4 > 0 && slot_has_card(milpaOrEdges[pivot + 3], card)
      ? 1
      : 0;
  const bottomRight =
    pivot < 12 && pivot % 4 < 3 && slot_has_card(milpaOrEdges[pivot + 5], card)
      ? 1
      : 0;
  return topLeft + topRight + bottomLeft + bottomRight;
};
