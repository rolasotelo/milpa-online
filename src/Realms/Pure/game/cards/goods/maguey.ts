import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Maguey: Readonly<Good> = {
  id: GoodId.Maguey,
  type: CardType.Good,
  name: "Maguey",
  icon: "🦚",
  description: "La única planta que necesitarás",
  rules: `Harvest +20 🍫 per edge full of magueys on turns: 11,12,13,14,15.\n 
  +13 🍫 for every different edge with at least one Maguey at the end of the game.`,
  resume: "+3 🍫",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: true,
    ownFilledEdgeSlots: [CropId.Flower, GoodId.Manure],
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false
  }
};
