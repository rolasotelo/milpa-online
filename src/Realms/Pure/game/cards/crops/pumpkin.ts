import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Pumpkin: Readonly<Crop> = {
  id: CropId.Pupmkin,
  type: CardType.Crop,
  name: "Pumpkin",
  icon: "🎃",
  description: "Por qué no hay iconos de calabazas",
  rules: `40% chance of producing a Pumpkin Flower each turn, +3% for each flower (before turn 15).\n 
  +8 🍫 per 🎃 Pumpkin at the end of the game.`,
  resume: "+2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [GoodId.Manure, CropId.Tomatillo, CropId.Flower],
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
