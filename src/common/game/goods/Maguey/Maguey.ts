import { Good } from "../../../types";

export const MAGUEY_ID = "maguey";

export const Maguey: Good = {
  id: MAGUEY_ID,
  type: "good",
  name: "Maguey",
  icon: "🎍",
  description: "La única planta que necesitarás",
  rules: "WIP",
  resume: "+3 🍫",
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
