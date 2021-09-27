import { Good } from "../../../types";

export const CRICKET_ID = "cricket";

export const Cricket: Good = {
  id: CRICKET_ID,
  type: "good",
  name: "Cricket",
  icon: "🦗",
  description: "Patitas sonoras",
  rules: "WIP",
  resume: "+5 🍫",
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
