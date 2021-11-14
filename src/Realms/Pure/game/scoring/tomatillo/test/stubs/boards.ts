import { Milpa } from "../../../../../types";
import { Beans, Chilli, Corn, Tomatillo, Tomatoe } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_4_TOMATILLOS_2_NOT_ALONE = (): Milpa => {
  return [
    milpa_row(0, [[Corn, Beans], [Tomatillo, Tomatoe], [Corn], [Corn]]),
    milpa_row(1, [[Chilli, Tomatillo], [Tomatillo], [Corn], [Corn]]),
    milpa_row(2, [[Corn, Beans], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Beans], [Corn], [Tomatillo], [Beans]]),
  ];
};

export const MILPA_WITH_2_NOT_SORROUNDED_TOMATILLOS = (): Milpa => {
  return [
    milpa_row(0, [[Corn, Beans], [Tomatillo, Tomatoe], [Corn], [Tomatillo]]),
    milpa_row(1, [[Chilli, Tomatillo], [Tomatillo], [Corn], [Corn]]),
    milpa_row(2, [[Corn, Beans], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Beans], [Corn], [Tomatillo], [Beans]]),
  ];
};
