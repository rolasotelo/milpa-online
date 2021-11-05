import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Chilli: Readonly<Crop> = {
  id: CropId.Chilli,
  type: CardType.Crop,
  name: "Chilli",
  icon: "🌶",
  description: "Éntrale cuñado!",
  rules: `Harvest +8🍫 (-4 🍫  with other crops) on turns: 3,4,5,14,15,16.\n 
  +5 🍫 per Chilli diagonally adjacent`,
  resume: "+4 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      GoodId.Manure,
      CropId.Corn,
      CropId.BlueCorn,
      CropId.RedCorn,
      CropId.Tomatillo,
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
