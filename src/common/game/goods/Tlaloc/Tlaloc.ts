import { Good } from "../../../types";

export const TLALOC_ID = "tlaloc";

export const Tlaloc: Good = {
  id: TLALOC_ID,
  type: "good",
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
