import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Beans: Readonly<Crop> = {
  id: CropId.Beans,
  type: CardType.Crop,
  name: "Beans",
  icon: "🌰",
  description: "Entre más negros mejor",
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
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
