import { Good } from "../../../types";

export const HUITLACOCHE_ID = "huitlacoche";

export const Huitlacoche: Good = {
  id: HUITLACOCHE_ID,
  type: "good",
  name: "Huitlacoche",
  icon: "🍆",
  description: "Lo amas o lo odias",
  rules: "WIP",
  resume: "+2 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: ["corn"],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
