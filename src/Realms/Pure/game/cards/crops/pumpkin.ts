import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Pumpkin: Readonly<Crop> = {
  id: CropId.Pupmkin,
  type: CardType.Crop,
  name: "Pumpkin",
  icon: "🎃",
  description: "Por qué no hay iconos de calabazas",
  rules: "WIP",
  resume: "+2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [GoodId.Manure],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
