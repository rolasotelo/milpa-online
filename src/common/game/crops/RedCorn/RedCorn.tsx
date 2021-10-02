import { AnyCard, Crop } from "../../../types";

export const RED_CORN_ID = "redcorn";

export const RedCorn: Crop = {
  id: RED_CORN_ID,
  type: "crop",
  name: "Red Corn",
  icon: "🥕",
  description: "El cultivo rojo más importante del mundo",
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

export const scoreWhenRedCornIsPlayed = (
  yourScore: number,
  slot: AnyCard[]
) => {
  return yourScore + CACAO_WHEN_PLAYED;
};
