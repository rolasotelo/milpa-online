import { AnyCard, Crop } from "../../../types";

export const BLUE_CORN_ID = "bluecorn";

export const BlueCorn: Crop = {
  id: BLUE_CORN_ID,
  type: "crop",
  name: "Blue Corn",
  icon: "🍆",
  description: "El cultivo azul más importante del mundo",
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

const CACAO_WHEN_PLAYED = 1;

export const scoreWhenBlueCornIsPlayed = (
  yourScore: number,
  slot: AnyCard[]
) => {
  return yourScore + CACAO_WHEN_PLAYED;
};
