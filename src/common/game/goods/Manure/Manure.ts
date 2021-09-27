import { Good } from "../../../types";

export const MANURE_ID = "manure";

export const Manure: Good = {
  id: MANURE_ID,
  type: "good",
  name: "Manure",
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
