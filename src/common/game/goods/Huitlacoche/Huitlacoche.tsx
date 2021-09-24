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
    ownEmptyCropSlots: false,
    ownFilledCropSlots: ["corn"],
    ownEmptyGoodSlots: false,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: false,
  },
};
