import { Crop } from "../../../types";

export const TOMATOE_ID = "tomatoe";

export const Tomatoe: Crop = {
  id: TOMATOE_ID,
  type: "crop",
  name: "Tomatoe",
  icon: "🍅",
  description: "De nada Italianos",
  rules: "WIP",
  resume: "+2 🍫",
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
