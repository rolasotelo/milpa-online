import { CardType, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Cricket: Readonly<Good> = {
  id: GoodId.Cricket,
  type: CardType.Good,
  name: "Cricket",
  icon: "🦗",
  description: "Patitas sonoras",
  rules: "WIP",
  resume: "-2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: true,
    othersFilledEdgeSlots: false,
  },
};
