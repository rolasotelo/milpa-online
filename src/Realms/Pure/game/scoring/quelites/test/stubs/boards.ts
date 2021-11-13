import { Milpa } from "../../../../../types";
import { Corn, Beans, Quelites, RedCorn, BlueCorn } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_3_QUELITES_AND_CORN_TOGETHER = (): Milpa => {
  return [
    milpa_row(0, [[Corn, Beans], [Corn, Quelites], [Corn], [Corn]]),
    milpa_row(1, [[Corn, Beans], [Quelites], [Corn], [Corn]]),
    milpa_row(2, [
      [RedCorn, Quelites],
      [Corn],
      [Quelites],
      [BlueCorn, Quelites],
    ]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};
