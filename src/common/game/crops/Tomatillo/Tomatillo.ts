import { AnyCard, Crop } from "../../../types";

export const TOMATILLO_ID = "tomatillo";

export const Tomatillo: Crop = {
  id: TOMATILLO_ID,
  type: "crop",
  name: "Tomatillo",
  icon: "🍈",
  description: "Chilaquiles verdes yummmi, said nobody",
  rules: "WIP",
  resume: "+3 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: ["manure", "chilli"],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};

const CACAO_WHEN_PLAYED = 3;

export const scoreWhenTomatilloIsPlayed = (
  yourScore: number,
  slot: AnyCard[]
) => {
  return yourScore + CACAO_WHEN_PLAYED;
};
