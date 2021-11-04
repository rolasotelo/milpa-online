import { find } from "underscore";
import { AnyCard } from "../../../types";

export const is_there_in_slot = (toCompare: AnyCard) => {
  return (slot: AnyCard[]): Boolean => {
    return !!find(slot, (card) => {
      return card.id === toCompare.id;
    });
  };
};
