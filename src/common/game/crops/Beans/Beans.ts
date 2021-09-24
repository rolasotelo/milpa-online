import { Crop } from "../../../types";

export const Beans: Crop = {
  id: "beans",
  name: "Beans",
  icon: "🫐",
  description: "Entre más negros mejor",
  rules: "WIP",
  resume: "+5 🍫",
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
