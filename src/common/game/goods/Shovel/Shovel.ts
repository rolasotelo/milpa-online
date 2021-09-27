import { Good } from "../../../types";

export const SHOVEL_ID = "maguey";

export const Shovel: Good = {
  id: SHOVEL_ID,
  type: "good",
  name: "Shovel",
  icon: "🧹",
  description: "barrer barrer",
  rules: "WIP",
  resume: "-1 🍫",
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
