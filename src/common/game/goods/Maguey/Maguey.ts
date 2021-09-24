import { Good } from "../../../types";

export const Maguey: Good = {
  id: "maguey",
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
