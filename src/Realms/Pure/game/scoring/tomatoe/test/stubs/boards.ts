import { Milpa } from "../../../../../types";
import {
  Corn,
  Beans,
  Quelites,
  Tomatoe,
  Tomatillo,
  Chilli,
} from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_4_TOMATOE_2_WITH_OTHER_CROPS = (): Milpa => {
  return [
    milpa_row(0, [[Tomatoe, Tomatillo], [Corn, Quelites], [Corn], [Corn]]),
    milpa_row(1, [[Corn, Beans], [Beans], [Corn], [Tomatoe]]),
    milpa_row(2, [[Corn, Beans], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Tomatoe], [Corn], [Corn], [Tomatoe, Chilli]]),
  ];
};
