import { CropId, CardType, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Tomatoe: Readonly<Crop> = {
  id: CropId.Tomatoe,
  type: CardType.Crop,
  name: "Tomatoe",
  icon: "🍅",
  description: "De nada Italianos",
  rules: "WIP",
  resume: "+2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Corn,
      CropId.BlueCorn,
      CropId.RedCorn,
      CropId.Chilli,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
