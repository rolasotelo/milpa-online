import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Flower: Readonly<Crop> = {
  id: CropId.Flower,
  type: CardType.Crop,
  name: "Pumpkin Flower",
  icon: "🌼",
  description: "En quesadillitas perro!!",
  rules: `Harvest: +2 🍫 for each 🌼 Pumpkin Flower (Pumpkin Flowers on empty slots become Pumpkins) on turn: 15.\n`,
  resume: "+0🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [GoodId.Manure, CropId.Tomatillo],
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
