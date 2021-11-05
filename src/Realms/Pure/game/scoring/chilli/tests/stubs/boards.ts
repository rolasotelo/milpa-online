import { Milpa } from "../../../../../types";
import { Beans, BlueCorn, Chilli, Corn, Tomatillo } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_6_CHILLI_3_ALONE = (): Milpa => {
  return [
    milpa_row(0, [[BlueCorn, Chilli], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Corn, Chilli]]),
    milpa_row(3, [[Beans], [Tomatillo, Chilli], [Corn], [BlueCorn]]),
  ];
};
