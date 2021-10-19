import { COLUMN_SIZE, ROW_SIZE } from "../../../constants";
import { SlotType } from "../../../enums";
import { AnyCard, Milpa } from "../../../types";

export const create_milpa = (
  isYourBoard: boolean,
  filler?: Readonly<AnyCard>
): Readonly<Milpa> => {
  let milpa: Milpa = [];
  if (filler) {
    milpa = Array.from(Array(ROW_SIZE), (_, row) => {
      return Array.from(Array(COLUMN_SIZE), (_, column) => {
        return {
          type: SlotType.Milpa,
          row,
          column,
          cards: [{ ...filler }],
          isYourBoard,
        };
      });
    });
  }
  return milpa;
};
