import { Milpa } from "../../../../../types";
import { Corn, Beans, Quelites } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_3_BEANS_AND_CORN_TOGETHER = (): Milpa => {
  return [
    milpa_row(0, [[Corn, Beans], [Corn, Quelites], [Corn], [Corn]]),
    milpa_row(1, [[Corn, Beans], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn, Beans], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};
