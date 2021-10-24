import { GoodId, CardType } from "../../../enums";
import { Good } from "../../../types";

export const Shovel: Readonly<Good> = {
  id: GoodId.Shovel,
  type: CardType.Good,
  name: "Shovel",
  icon: "🧹",
  description: "barrer barrer",
  rules: "WIP",
  resume: "-2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: true,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: true,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: true,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: true,
  },
};
