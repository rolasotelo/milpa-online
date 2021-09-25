import { Crop } from "../../../types";

export const BEANS_ID = "beans";

export const Beans: Crop = {
  id: BEANS_ID,
  type: "crop",
  name: "Beans",
  icon: "🫐",
  description: "Entre más negros mejor",
  rules: "WIP",
  resume: "+5 🍫",
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
