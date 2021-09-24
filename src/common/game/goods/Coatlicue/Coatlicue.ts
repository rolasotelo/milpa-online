import { Good } from "../../../types";

export const Coatlicue: Good = {
  id: "coatlicue",
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
