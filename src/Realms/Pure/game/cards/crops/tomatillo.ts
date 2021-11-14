import { CropId, CardType, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Tomatillo: Readonly<Crop> = {
  id: CropId.Tomatillo,
  type: CardType.Crop,
  name: "Tomatillo",
  icon: "🍈",
  description: "Chilaquiles verdes yummmi, said nobody",
  rules: `Harvest +5🍫 (+4 🍫  if other crop is in slot) on turns: 8,9,10,11.\n 
  +10 🍫 for each tomatillo not sorrounded by another tomatillo`,
  resume: "+4 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Chilli,
      CropId.Flower,
      CropId.Tomatoe,
      GoodId.Cricket,
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
