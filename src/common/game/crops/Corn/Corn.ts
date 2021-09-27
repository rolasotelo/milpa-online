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
