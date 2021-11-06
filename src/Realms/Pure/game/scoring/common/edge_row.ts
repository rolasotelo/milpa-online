import { board_slot } from ".";
import { SlotType } from "../../../enums";
import { MilpaRow } from "../../../types";

const edge_slot = board_slot(SlotType.Edge, true);

export const edge_row = (rowIndex: number, cards: MilpaRow) => {
  return [
    edge_slot(rowIndex, 0, cards[0]),
    edge_slot(rowIndex, 1, cards[1]),
    edge_slot(rowIndex, 2, cards[2]),
    edge_slot(rowIndex, 3, cards[3]),
  ];
};
