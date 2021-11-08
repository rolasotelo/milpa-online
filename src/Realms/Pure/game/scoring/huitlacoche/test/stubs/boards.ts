import { ModifierId } from "../../../../../enums";
import { Milpa } from "../../../../../types";
import { Beans, BlueCorn, Corn, RedCorn } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_HUITLACOCHE_IN_3_DIFFERENT_COLORS = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Corn],
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
    ]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [
      [Corn],
      [{ ...BlueCorn, modifier: [ModifierId.Huitlacoche] }],
      [Beans],
      [Corn],
    ]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};
