import { ModifierId } from "../../../../../enums";
import { Milpa } from "../../../../../types";
import { Beans, Corn, RedCorn } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_CORN_ROW = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CORN_COLUMN = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Beans]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CORN_COLUMN_AND_ROW = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITHOUT_CORN_COLUMN_OR_ROW = (): Milpa => {
  return [
    milpa_row(0, [[Beans], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Corn], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CORN_AND_HUITLACOCHE = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Corn],
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
    ]),
    milpa_row(1, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Beans],
      [Corn],
      [Corn],
    ]),
    milpa_row(2, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Beans],
      [Corn],
    ]),
    milpa_row(3, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Corn],
      [Beans],
    ]),
  ];
};
