import { Crop } from "../../../types";

export const PUMPKIN_ID = "pumpkin";

export const Pumpkin: Crop = {
  id: PUMPKIN_ID,
  type: "crop",
  name: "Pumpkin",
  icon: "🎃",
  description: "Por qué no hay iconos de calabazas",
  rules: "WIP",
  resume: "+6 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: ["manure"],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
