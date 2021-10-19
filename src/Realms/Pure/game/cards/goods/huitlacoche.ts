import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Huitlacoche: Readonly<Good> = {
  id: GoodId.Huitlacoche,
  type: CardType.Good,
  name: "Huitlacoche",
  icon: "🍆",
  description: "Lo amas o lo odias",
  rules: "WIP",
  resume: "+2 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: [CropId.Corn, CropId.BlueCorn, CropId.RedCorn],
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
