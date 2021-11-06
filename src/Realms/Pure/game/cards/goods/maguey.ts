import { GoodId, CardType, CropId } from "../../../enums";
import { Good } from "../../../types";

export const Maguey: Readonly<Good> = {
  id: GoodId.Maguey,
  type: CardType.Good,
  name: "Maguey",
  icon: "🦚",
  description: "La única planta que necesitarás",
  rules: "WIP",
  resume: "-2 🍫",
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
