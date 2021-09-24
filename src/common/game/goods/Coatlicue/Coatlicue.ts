import { Good } from "../../../types";

export const COATLICUE_ID = "coatlicue";

export const Coatlicue: Good = {
  id: COATLICUE_ID,
  type: "good",
  name: "Coatlicue Idol",
  icon: "🐍",
  description: "Aztec goddess who gave birth to the moon.",
  rules: "WIP",
  resume: "+8 🍫",
  canInteractWith: {
    ownEmptyCropSlots: false,
    ownFilledCropSlots: false,
    ownEmptyGoodSlots: true,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: true,
    othersFilledGoodSlots: false,
  },
};
