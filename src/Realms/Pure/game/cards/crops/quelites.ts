import { CardType, CropId } from "../../../enums";
import { Crop } from "../../../types";

export const Quelites: Readonly<Crop> = {
  id: CropId.Quelites,
  type: CardType.Crop,
  name: "Quelites",
  icon: "🌱",
  description: "Green is good for your body",
  rules: "WIP",
  resume: "+5 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: [CropId.Corn, CropId.RedCorn, CropId.BlueCorn],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
