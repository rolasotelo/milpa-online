import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const BlueCorn: Readonly<Crop> = {
  id: CropId.BlueCorn,
  type: CardType.Crop,
  name: "Blue Corn",
  icon: "🍆",
  description: "El cultivo azul más importante del mundo",
  rules: `Harvest +3🍫 (+3 🍫  with Huitlacoche) on turns: 13, 14, 15.\n 
  +13 🍫 per Blue Corn diagonal of 3`,
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
      CropId.Corn,
      CropId.RedCorn,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
