import { Crop } from "../../../types";

export const Quelites: Crop = {
  id: "quelites",
  name: "Quelites",
  icon: "🌱",
  description: "Green is good for your body",
  rules: "WIP",
  resume: "+8 🍫",
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
