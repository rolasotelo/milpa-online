import { Crop } from "../../../types";

export const CHILLI_ID = "chilli";

export const Chilli: Crop = {
  id: CHILLI_ID,
  type: "crop",
  name: "Chilli",
  icon: "🌶",
  description: "Éntrale cuñado!",
  rules: "WIP",
  resume: "+3 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      "manure",
      "corn",
      "bluecorn",
      "redcorn",
      "tomatillo",
      "tomatoe",
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
