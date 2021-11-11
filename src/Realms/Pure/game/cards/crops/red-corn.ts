import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const RedCorn: Readonly<Crop> = {
  id: CropId.RedCorn,
  type: CardType.Crop,
  name: "Red Corn",
  icon: "🥕",
  description: "El cultivo rojo más importante del mundo",
  rules: `Harvest +3🍫 (+5 🍫  with Huitlacoche) on turns: 11,12,13.\n 
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
      CropId.BlueCorn,
      CropId.Corn,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
