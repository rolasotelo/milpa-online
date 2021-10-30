import { SlotType } from "../../../../../enums";
import { AnyCard, Milpa } from "../../../../../types";
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

const at = board_slot(SlotType.Milpa, true);

export const MILPA_WITH_CORN_ROW = (): Milpa => {
  return [
    [at(0, 0, [Corn]), at(0, 1, [Corn]), at(0, 2, [Corn]), at(0, 3, [Corn])],
    [at(1, 0, [Beans]), at(1, 1, [Corn]), at(1, 2, [Corn]), at(1, 3, [Corn])],
    [at(2, 0, [Corn]), at(2, 1, [Beans]), at(2, 2, [Corn]), at(2, 3, [Corn])],
    [at(3, 0, [Corn]), at(3, 1, [Corn]), at(3, 2, [Beans]), at(3, 3, [Beans])],
  ];
};

export const MILPA_WITH_CORN_COLUMN = (): Milpa => {
  return [
    [at(0, 0, [Beans]), at(0, 1, [Corn]), at(0, 2, [Corn]), at(0, 3, [Corn])],
    [at(1, 0, [Beans]), at(1, 1, [Corn]), at(1, 2, [Corn]), at(1, 3, [Corn])],
    [at(2, 0, [Corn]), at(2, 1, [Beans]), at(2, 2, [Corn]), at(2, 3, [Corn])],
    [at(3, 0, [Corn]), at(3, 1, [Corn]), at(3, 2, [Beans]), at(3, 3, [Corn])],
  ];
};

export const MILPA_WITH_CORN_COLUMN_AND_ROW = (): Milpa => {
  return [
    [at(0, 0, [Corn]), at(0, 1, [Corn]), at(0, 2, [Corn]), at(0, 3, [Corn])],
    [at(1, 0, [Beans]), at(1, 1, [Corn]), at(1, 2, [Corn]), at(1, 3, [Corn])],
    [at(2, 0, [Corn]), at(2, 1, [Beans]), at(2, 2, [Corn]), at(2, 3, [Corn])],
    [at(3, 0, [Corn]), at(3, 1, [Corn]), at(3, 2, [Beans]), at(3, 3, [Corn])],
  ];
};

export const MILPA_WITHOUT_CORN_COLUMN_OR_ROW = (): Milpa => {
  return [
    [at(0, 0, [Corn]), at(0, 1, [Corn]), at(0, 2, [Corn]), at(0, 3, [Beans])],
    [at(1, 0, [Beans]), at(1, 1, [Corn]), at(1, 2, [Corn]), at(1, 3, [Corn])],
    [at(2, 0, [Corn]), at(2, 1, [Beans]), at(2, 2, [Corn]), at(2, 3, [Corn])],
    [at(3, 0, [Corn]), at(3, 1, [Corn]), at(3, 2, [Beans]), at(3, 3, [Corn])],
  ];
};
