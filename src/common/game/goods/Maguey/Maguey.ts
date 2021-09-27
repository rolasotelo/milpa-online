import { Good } from "../../../types";

export const MAGUEY_ID = "maguey";

export const Maguey: Good = {
  id: MAGUEY_ID,
  type: "good",
  name: "Maguey",
  icon: "🦚",
  description: "La única planta que necesitarás",
  rules: "WIP",
  resume: "+3 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
