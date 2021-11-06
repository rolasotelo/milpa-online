import { CardType, ModifierId } from "../../enums";
import { Empty } from "../../types";

export const EmptySlot: Readonly<Empty> = {
  id: "empty",
  type: CardType.Empty,
  name: "Empty",
  icon: "",
  description: "How you got here?",
  rules: "I'm not even mad",
  resume: "",
  modifier: [],
  canInteractWith: {
    ownEmptyMilpaSlots: false,
    ownFilledMilpaSlots: false,
    ownEmptyEdgeSlots: false,
    ownFilledEdgeSlots: false,
    othersEmptyMilpaSlots: false,
    othersFilledMilpaSlots: false,
    othersEmptyEdgeSlots: false,
    othersFilledEdgeSlots: false,
  },
};
