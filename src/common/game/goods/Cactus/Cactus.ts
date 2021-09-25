import { Good } from "../../../types";

export const CACTUS_ID = "cactus";

export const Cactus: Good = {
  id: CACTUS_ID,
  type: "good",
  name: "Cactus",
  icon: "🌵",
  description: "Pitaya y tunas mmmm",
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
