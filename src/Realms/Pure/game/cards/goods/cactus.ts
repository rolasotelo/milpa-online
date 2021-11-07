import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Cactus: Readonly<Good> = {
  id: GoodId.Cactus,
  type: CardType.Good,
  name: "Cactus",
  icon: "🌵",
  description: "Luna luna, dame una tuna",
  rules: `15% chance of a Cactus growing Tunas at the end of each turn.\n 
  -15 🍫 for 0 Cactus with Tuna, -10 🍫 for 1, +15 🍫 for 2, +40 🍫 for 3 and +60 for more at the end of the game.`,
  resume: "+4 🍫",
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
