import { ModifierId } from "../../../../../enums";
import { Milpa } from "../../../../../types";
import { Beans, BlueCorn, Corn, RedCorn } from "../../../../cards";
import { milpa_row } from "../../../common";

export const MILPA_WITH_6_BLUE_CORN_3_WITH_HUITLACOCHE = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...BlueCorn, modifier: [ModifierId.Huitlacoche] }],
      [BlueCorn],
      [Corn],
      [{ ...RedCorn, modifier: [ModifierId.Huitlacoche] }],
    ]),
    milpa_row(1, [
      [{ ...BlueCorn, modifier: [ModifierId.Huitlacoche] }],
      [Beans],
      [BlueCorn],
      [Corn],
    ]),
    milpa_row(2, [
      [{ ...Corn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Beans],
      [BlueCorn],
    ]),
    milpa_row(3, [
      [{ ...BlueCorn, modifier: [ModifierId.Huitlacoche] }],
      [Corn],
      [Corn],
      [Beans],
    ]),
  ];
};
