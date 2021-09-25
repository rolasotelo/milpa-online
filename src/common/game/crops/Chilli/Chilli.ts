import { Crop } from "../../../types";

export const CHILLI_ID = "chilli";

export const Chilli: Crop = {
  id: CHILLI_ID,
  type: "crop",
  name: "Chilli",
  icon: "🌶",
  description: "Éntrale cuñado!",
  rules: "WIP",
  resume: "+3 🍫",
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
