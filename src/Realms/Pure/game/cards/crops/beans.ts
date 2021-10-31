import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Beans: Readonly<Crop> = {
  id: CropId.Beans,
  type: CardType.Crop,
  name: "Beans",
  icon: "🌰",
  description: "Entre más negros mejor",
  rules: `Harvest turns: 8,9,10,11 (+1 🍫 extra with any corn).\n 
  +3 🍫 for each Beans adjacent to these Beans at the end of the game`,
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
