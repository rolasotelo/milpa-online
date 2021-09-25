import { Crop } from "../../../types";

export const QUELITES_ID = "quelites";

export const Quelites: Crop = {
  id: QUELITES_ID,
  type: "crop",
  name: "Quelites",
  icon: "🌱",
  description: "Green is good for your body",
  rules: "WIP",
  resume: "+8 🍫",
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
