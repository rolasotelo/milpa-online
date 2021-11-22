import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Coatlicue: Readonly<Good> = {
  id: GoodId.Coatlicue,
  type: CardType.Good,
  name: "Coatlicue Idol",
  icon: "🏺",
  description: "Aztec goddess who gave birth to the moon.",
  rules: `20% chance of receiving +15 🍫 each turn for each Coatlicue you played in your board.\n 
  15% chance of receiving -20 🍫 each turn for each Coatlicue in your board that you did not played.`,
  resume: "+7 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: [CropId.Flower, CropId.Pupmkin],
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: true,
    othersFilledEdgeSlots: [CropId.Flower]
  }
};
