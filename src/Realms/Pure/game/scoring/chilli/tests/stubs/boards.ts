import { Milpa } from "../../../../../types";
import {
  Beans,
  BlueCorn,
  Cactus,
  Chilli,
  Corn,
  Tomatillo,
} from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_6_CHILLI_3_ALONE = (): Milpa => {
  return [
    milpa_row(0, [[BlueCorn, Chilli], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Corn, Chilli]]),
    milpa_row(3, [[Beans], [Tomatillo, Chilli], [Corn], [BlueCorn]]),
  ];
};

export const MILPA_WITH_4_CHILLI_ADJACENCIES_AT_5_AND_2_AT_13 = (): Milpa => {
  return [
    milpa_row(0, [[BlueCorn, Chilli], [Chilli], [Corn, Chilli], [Corn]]),
    milpa_row(1, [[Corn], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Chilli], [Chilli], [Chilli], [Corn, Chilli]]),
    milpa_row(3, [[Beans], [Tomatillo], [Corn], [BlueCorn]]),
  ];
};

export const MILPA_WITH_6_CHILLI_DIAGONAL_ADJACENCIES = (): Milpa => {
  return [
    milpa_row(0, [[Chilli], [Chilli], [Corn], [Cactus]]),
    milpa_row(1, [[Chilli], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Corn]]),
    milpa_row(3, [[Chilli], [Tomatillo], [Corn], [BlueCorn]]),
  ];
};
