import { SlotType } from "../../../../../enums";
import { AnyCard, Milpa, MilpaRow } from "../../../../../types";
import { Beans, Corn } from "../../../../cards";

const board_slot = (type: SlotType, isYourBoard: boolean) => {
  return (row: number, column: number, cards: AnyCard[]) => {
    return {
      row,
      column,
      cards,
      type,
      isYourBoard,
    };
  };
};

const milpaSlot = board_slot(SlotType.Milpa, true);

const milpaRow = (rowIndex: number, cards: MilpaRow) => {
  return [
    milpaSlot(rowIndex, 0, cards[0]),
    milpaSlot(rowIndex, 1, cards[1]),
    milpaSlot(rowIndex, 2, cards[2]),
    milpaSlot(rowIndex, 3, cards[3]),
  ];
};

export const MILPA_WITH_CORN_ROW = (): Milpa => {
  return [
    milpaRow(0, [[Corn], [Corn], [Corn], [Corn]]),
    milpaRow(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpaRow(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpaRow(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CORN_COLUMN = (): Milpa => {
  return [
    milpaRow(0, [[Corn], [Corn], [Corn], [Beans]]),
    milpaRow(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpaRow(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpaRow(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CORN_COLUMN_AND_ROW = (): Milpa => {
  return [
    milpaRow(0, [[Corn], [Corn], [Corn], [Corn]]),
    milpaRow(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpaRow(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpaRow(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITHOUT_CORN_COLUMN_OR_ROW = (): Milpa => {
  return [
    milpaRow(0, [[Beans], [Corn], [Corn], [Corn]]),
    milpaRow(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpaRow(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpaRow(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};
