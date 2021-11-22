import { CardType, CropId, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Tlaloc: Readonly<Good> = {
  id: GoodId.Tlaloc,
  type: CardType.Good,
  name: "Tlaloc",
  icon: "⛈",
  description: "Baile a tlaloc",
  rules: `Harvest +1🍫 for each crop in the same line of each Tlaloc on turns: 8,9,10,11,12,13.\n`,
  resume: "+4 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: [CropId.Flower, CropId.Pupmkin],
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false
  }
};
