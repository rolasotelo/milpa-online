import { Good } from "../../../../../common/types";
import { CardType, GoodId } from "../../../enums";

export const Manure: Readonly<Good> = {
  id: GoodId.Manure,
  type: CardType.Good,
  name: "Corn",
  icon: "💩",
  description: "🪰",
  rules: "WIP",
  resume: "-3 🍫",
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
