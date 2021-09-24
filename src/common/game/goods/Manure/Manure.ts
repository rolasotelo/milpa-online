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
    ownEmptyCropSlots: true,
    ownFilledCropSlots: false,
    ownEmptyGoodSlots: false,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: false,
  },
};
