import { Crop } from "../../../types";

export const CORN_ID = "corn";

export const Corn: Crop = {
  id: CORN_ID,
  type: "crop",
  name: "Corn",
  icon: "🌽",
  description: "El cultivo más importante de mesoamérica",
  rules: "WIP",
  resume: "+1 🍫",
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
