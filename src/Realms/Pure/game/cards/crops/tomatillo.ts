import { CropId, CardType, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Tomatillo: Readonly<Crop> = {
  id: CropId.Tomatillo,
  type: CardType.Crop,
  name: "Tomatillo",
  icon: "🍈",
  description: "Chilaquiles verdes yummmi, said nobody",
  rules: "WIP",
  resume: "+4 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Chilli,
      CropId.Flower,
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
