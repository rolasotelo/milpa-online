import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Corn: Readonly<Crop> = {
  id: CropId.Corn,
  type: CardType.Crop,
  name: "Corn",
  icon: "🌽",
  description: "El cultivo más importante, no importa si no lo crees.",
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
