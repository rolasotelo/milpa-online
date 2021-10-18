import { CardType, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Manure: Readonly<Good> = {
  id: GoodId.Manure,
  type: CardType.Good,
  name: "Manure",
  icon: "💩",
  description: "🪰",
  rules: "WIP",
  resume: "-3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
