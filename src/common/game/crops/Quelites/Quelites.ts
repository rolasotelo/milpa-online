import { AnyCard, Crop } from "../../../types";

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
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: ["redcorn", "bluecorn", "corn"],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};

const CACAO_WHEN_PLAYED = 8;

export const scoreWhenQuelitesIsPlayed = (
  yourScore: number,
  slot: AnyCard[]
) => {
  return yourScore + CACAO_WHEN_PLAYED;
};
