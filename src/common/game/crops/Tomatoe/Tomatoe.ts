import { AnyCard, Crop } from "../../../types";

export const TOMATOE_ID = "tomatoe";

export const Tomatoe: Crop = {
  id: TOMATOE_ID,
  type: "crop",
  name: "Tomatoe",
  icon: "🍅",
  description: "De nada Italianos",
  rules: "WIP",
  resume: "+2 🍫",
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: ["manure", "corn", "redcorn", "bluecorn", "chilli"],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};

const CACAO_WHEN_PLAYED = 5;

export const scoreWhenTomatoeIsPlayed = (
  yourScore: number,
  slot: AnyCard[]
) => {
  return yourScore + CACAO_WHEN_PLAYED;
};
