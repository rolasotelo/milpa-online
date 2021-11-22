import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const Quelites: Readonly<Crop> = {
  id: CropId.Quelites,
  type: CardType.Crop,
  name: "Quelites",
  icon: "🌱",
  description: "Green is good for your body",
  rules: `Harvest +5🍫 from Quelites with corn on turns: 2-9.\n`,
  resume: "+5 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [
      CropId.Corn,
      CropId.RedCorn,
      CropId.BlueCorn,
      CropId.Flower,
      GoodId.Cricket,
      GoodId.Manure
    ],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false
  }
};
