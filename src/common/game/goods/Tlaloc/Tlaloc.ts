import { Good } from "../../../types";

export const TLALOC_ID = "tlaloc";

export const Tlaloc: Good = {
  id: TLALOC_ID,
  type: "good",
  name: "Tlaloc Idol",
  icon: "⛈",
  description: "Baile a tlaloc",
  rules: "WIP",
  resume: "+5 🍫",
  canInteractWith: {
    ownEmptyCropSlots: false,
    ownFilledCropSlots: false,
    ownEmptyGoodSlots: true,
    ownFilledGoodSlots: false,
    othersEmptyCropSlots: false,
    othersFilledCropSlots: false,
    othersEmptyGoodSlots: false,
    othersFilledGoodSlots: false,
  },
};
