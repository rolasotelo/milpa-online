import { Crop } from "../../../types";

export const Tomatoe: Crop = {
  id: "tomatoe",
  name: "Tomatoe",
  icon: "🍅",
  description: "De nada Italianos",
  rules: "WIP",
  resume: "+2 🍫",
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
