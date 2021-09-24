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
    ownEmptyCropSlots: false,
    ownFilledCropSlots: false,
    ownEmptyGoodSlots: true,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: false,
  },
};
