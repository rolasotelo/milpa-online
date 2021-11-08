import { CardType, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Manure: Readonly<Good> = {
  id: GoodId.Manure,
  type: CardType.Good,
  name: "Manure",
  icon: "💩",
  description: "🪰",
  rules: "x3 🍫 for the next card you play on this slot",
  resume: "+4 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: true,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
