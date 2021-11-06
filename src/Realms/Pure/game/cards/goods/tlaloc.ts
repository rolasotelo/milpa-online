import { CardType, CropId, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Tlaloc: Readonly<Good> = {
  id: GoodId.Tlaloc,
  type: CardType.Good,
  name: "Tlaloc",
  icon: "⛈",
  description: "Baile a tlaloc",
  rules: "WIP",
  resume: "+3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: [CropId.Flower],
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
