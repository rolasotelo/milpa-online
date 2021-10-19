import { GoodId, CardType } from "../../../enums";
import { Good } from "../../../types";

export const Cactus: Readonly<Good> = {
  id: GoodId.Cactus,
  type: CardType.Good,
  name: "Cactus",
  icon: "🌵",
  description: "luna dame una tuna",
  rules: "WIP",
  resume: "+6 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
