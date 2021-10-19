import { CardType, CropId, GoodId } from "../../../enums";
import { Crop } from "../../../types";

export const RedCorn: Readonly<Crop> = {
  id: CropId.RedCorn,
  type: CardType.Crop,
  name: "Red Corn",
  icon: "🥕",
  description: "El cultivo rojo más importante del mundo",
  rules: "WIP",
  resume: "+1 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: true,
    ownFilledMilpaSlots: [GoodId.Manure],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
