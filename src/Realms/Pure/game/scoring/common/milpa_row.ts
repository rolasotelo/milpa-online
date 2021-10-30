import { board_slot } from ".";
import { SlotType } from "../../../enums";
import { MilpaRow } from "../../../types";

const milpa_slot = board_slot(SlotType.Milpa, true);

export const milpa_row = (rowIndex: number, cards: MilpaRow) => {
  return [
    milpa_slot(rowIndex, 0, cards[0]),
    milpa_slot(rowIndex, 1, cards[1]),
    milpa_slot(rowIndex, 2, cards[2]),
    milpa_slot(rowIndex, 3, cards[3]),
  ];
};
