import { Good } from "../../../../../common/types";
import { CardType, GoodId } from "../../../enums";

export const Manure: Good = {
  id: GoodId.Manure,
  type: CardType.Good,
  name: "Tlaloc Idol",
  icon: "⛈",
  description: "Baile a tlaloc",
  rules: "WIP",
  resume: "+5 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
