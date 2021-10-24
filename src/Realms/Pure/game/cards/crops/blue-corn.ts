import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const BlueCorn: Readonly<Crop> = {
  id: CropId.BlueCorn,
  type: CardType.Crop,
  name: "Blue Corn",
  icon: "🍆",
  description: "El cultivo azul más importante del mundo",
  rules: "WIP",
  resume: "+3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Beans,
      CropId.Chilli,
      CropId.Tomatoe,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
