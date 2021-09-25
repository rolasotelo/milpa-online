import { Crop } from "../../../types";

export const BEANS_ID = "beans";

export const Beans: Crop = {
  id: BEANS_ID,
  type: "crop",
  name: "Beans",
  icon: "🫐",
  description: "Entre más negros mejor",
  rules: "WIP",
  resume: "+5 🍫",
  canInteractWith: {
    ownEmptyCropSlots: true,
    ownFilledCropSlots: ["manure"],
    ownEmptyGoodSlots: false,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: false,
  },
};
