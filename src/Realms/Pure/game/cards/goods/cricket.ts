import { CardType, CropId, GoodId } from "../../../enums";
import { Good } from "../../../types";

export const Cricket: Readonly<Good> = {
  id: GoodId.Cricket,
  type: CardType.Good,
  name: "Cricket",
  icon: "🦗",
  description: "Patitas sonoras",
  rules: `-10 🍫 for each Cricket in your board at the end of the turn.\n 
  At the end of the turn every Cricket jumps to a different slot and eat a crop.`,
  resume: "-3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: true,
    othersFilledEdgeSlots: true
  }
};
