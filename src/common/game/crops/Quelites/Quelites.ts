import { Crop } from "../../../types";

export const QUELITES_ID = "quelites";

export const Quelites: Crop = {
  id: QUELITES_ID,
  type: "crop",
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
