import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Pumpkin: Readonly<Crop> = {
  id: CropId.Pupmkin,
  type: CardType.Crop,
  name: "Pumpkin",
  icon: "🎃",
  description: "Por qué no hay iconos de calabazas",
  rules: `20% chance of producing a Pumpkin Flower each turn (before turn 15).\n 
  +10 🍫 per 🎃 Pumpkin at the end of the game.`,
  resume: "+2 🍫",
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
