import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Chilli: Readonly<Crop> = {
  id: CropId.Chilli,
  type: CardType.Crop,
  name: "Chilli",
  icon: "🌶",
  description: "Éntrale cuñado!",
  rules: "WIP",
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
