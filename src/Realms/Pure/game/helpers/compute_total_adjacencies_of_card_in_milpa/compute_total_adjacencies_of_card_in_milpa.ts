import { flatten, indexOf, pluck, reduce } from "underscore";
import { CropId, GoodId } from "../../../enums";
import { AnyCard, BoardSlot } from "../../../types";

export const compute_total_adjacencies_of_card_in_milpa = (
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
            newTotal + compute_total_adjacencies(allSlots, index, card.id);
        }
        return newTotal;
      },
      0
    );
  };
};

export const compute_total_adjacencies = (
  milpaOrEdges: (readonly AnyCard[])[],
  pivot: number,
  card: GoodId | CropId | "empty"
): number => {
  const top = pivot > 3 && slot_has_card(milpaOrEdges[pivot - 4], card) ? 1 : 0;
  const left =
    pivot % 4 > 0 && slot_has_card(milpaOrEdges[pivot - 1], card) ? 1 : 0;
  const right =
    pivot % 4 < 3 && slot_has_card(milpaOrEdges[pivot + 1], card) ? 1 : 0;
  const bottom =
    pivot < 12 && slot_has_card(milpaOrEdges[pivot + 4], card) ? 1 : 0;
  return top + left + right + bottom;
};

export const slot_has_card = (
  slot: readonly AnyCard[],
  card: GoodId | CropId | "empty"
) => {
  return indexOf(pluck(slot, "id"), card) >= 0;
};
