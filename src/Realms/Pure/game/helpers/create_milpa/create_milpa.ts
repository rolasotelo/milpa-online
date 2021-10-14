import { COLUMN_SIZE, ROW_SIZE } from "../../../constants";
import { SlotType } from "../../../enums";
import { AnyCard, Milpa } from "../../../types";

export const create_milpa = (filler?: Readonly<AnyCard>): Readonly<Milpa> => {
  let milpa: Milpa = [];
  if (filler) {
    milpa = Array.from(Array(ROW_SIZE), () => {
      return Array.from(Array(COLUMN_SIZE), () => {
        return { type: SlotType.Milpa, cards: [{ ...filler }] };
      });
    });
  }
  return milpa;
};
