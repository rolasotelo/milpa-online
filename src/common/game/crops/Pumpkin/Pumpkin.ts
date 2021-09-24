import { Crop } from "../../../types";

export const PUMPKIN_ID = "pumpkin";

export const Pumpkin: Crop = {
  id: PUMPKIN_ID,
  type: "crop",
  name: "Pumpkin",
  icon: "🍍",
  description: "Por qué no hay iconos de calabazas",
  rules: "WIP",
  resume: "+6 🍫",
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
