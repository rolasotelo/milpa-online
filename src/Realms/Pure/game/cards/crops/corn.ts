import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Corn: Readonly<Crop> = {
  id: CropId.Corn,
  type: CardType.Crop,
  name: "Corn",
  icon: "🌽",
  description: "El cultivo más importante, no importa si no lo crees.",
  rules: `Harvest +2🍫 (+2 🍫  with Huitlacoche) on turns: 12, 13, 14.\n 
    +15 🍫 per Corn row and colum at the end of the game`,
  resume: "+3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Beans,
      CropId.Chilli,
      CropId.Tomatoe,
      CropId.Quelites,
      CropId.Flower,
      CropId.RedCorn,
      CropId.BlueCorn,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
