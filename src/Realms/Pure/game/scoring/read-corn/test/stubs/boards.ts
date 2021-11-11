import { ModifierId } from "../../../../../enums";
import { Milpa } from "../../../../../types";
import { BlueCorn, Corn, RedCorn, Beans } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_6_RED_CORN_3_WITH_HUITLACOCHE = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
      [BlueCorn],
      [Corn],
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
    ]),
    milpa_row(1, [[{ ...RedCorn }], [Beans], [RedCorn], [Corn]]),
    milpa_row(2, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Beans],
      [RedCorn],
    ]),
    milpa_row(3, [
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Corn],
      [Beans],
    ]),
  ];
};

export const MILPA_WITH_1_SQUARE_OF_RED_CORN = (): Milpa => {
  return [
    milpa_row(0, [[RedCorn], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [RedCorn], [RedCorn]]),
    milpa_row(3, [[Beans], [Corn], [RedCorn], [RedCorn]]),
  ];
};

export const MILPA_WITH_2_SQUARE_OF_RED_CORN = (): Milpa => {
  return [
    milpa_row(0, [[RedCorn], [RedCorn], [Corn], [Corn]]),
    milpa_row(1, [[RedCorn], [RedCorn], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [RedCorn], [RedCorn]]),
    milpa_row(3, [[Beans], [Corn], [RedCorn], [RedCorn]]),
  ];
};
