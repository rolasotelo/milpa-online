import { CardType, CropId, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Cricket: Readonly<Good> = {
  id: GoodId.Cricket,
  type: CardType.Good,
  name: "Cricket",
  icon: "🦗",
  description: "Patitas sonoras",
  rules: "WIP",
  resume: "+1 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: true,
    othersFilledEdgeSlots: [CropId.Flower, GoodId.Manure],
  },
};
