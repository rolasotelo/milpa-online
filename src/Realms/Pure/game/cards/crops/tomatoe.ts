import { CropId, CardType, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Tomatoe: Readonly<Crop> = {
  id: CropId.Tomatoe,
  type: CardType.Crop,
  name: "Tomatoe",
  icon: "🍅",
  description: "De nada Italianos",
  rules: `Harvest +2🍫 (+2 🍫 with Tomatillo or chilli) on turns: 2,4,6,8,10,12,14.\n 
  +40 🍫 for having at least 4 Tomatoes`,
  resume: "+3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Corn,
      CropId.BlueCorn,
      CropId.RedCorn,
      CropId.Chilli,
      CropId.Flower,
      CropId.Tomatillo,
      GoodId.Cricket
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false
  }
};
