import { Good } from "../../../types";

export const SHOVEL_ID = "maguey";

export const Shovel: Good = {
  id: SHOVEL_ID,
  type: "good",
  name: "Shovel",
  icon: "🧹",
  description: "barrer barrer",
  rules: "WIP",
  resume: "-1 🍫",
  canInteractWith: {
    ownEmptyCropSlots: false,
    ownFilledCropSlots: true,
    ownEmptyGoodSlots: false,
    ownFilledGoodSlots: true,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: true,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: true,
  },
};
