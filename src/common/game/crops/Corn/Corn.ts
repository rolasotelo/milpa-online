import { Crop } from "../../../types";

export const Corn: Crop = {
  id: "corn",
  name: "Corn",
  icon: "🌽",
  description: "El cultivo más importante de mesoamérica",
  rules: "WIP",
  resume: "+1 🍫",
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
