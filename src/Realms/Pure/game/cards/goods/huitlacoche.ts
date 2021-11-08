import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Huitlacoche: Readonly<Good> = {
  id: GoodId.Huitlacoche,
  type: CardType.Good,
  name: "Huitlacoche",
  icon: "🍄",
  description: "Lo amas o lo odias",
  rules: `+15 🍫 if you have Huitlacoche in all 3 different corns`,
  resume: "+5 🍫",
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
