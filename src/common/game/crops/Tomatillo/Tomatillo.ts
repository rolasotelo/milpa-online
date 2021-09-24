import { Crop } from "../../../types";

export const Tomatillo: Crop = {
  id: "tomatillo",
  name: "Tomatillo",
  icon: "🍈",
  description: "Chilaquiles verdes yummmi, said nobody",
  rules: "WIP",
  resume: "+3 🍫",
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
