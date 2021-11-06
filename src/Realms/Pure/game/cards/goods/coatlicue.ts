import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Coatlicue: Readonly<Good> = {
  id: GoodId.Coatlicue,
  type: CardType.Good,
  name: "Coatlicue Idol",
  icon: "🏺",
  description: "Aztec goddess who gave birth to the moon.",
  rules: "WIP",
  resume: "-3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: [CropId.Flower],
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: true,
    othersFilledEdgeSlots: [CropId.Flower],
  },
};
