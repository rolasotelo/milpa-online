import { COLUMN_SIZE, ROW_SIZE } from "../../../constants";
import { AnyCard, Milpa } from "../../../types";

export const create_milpa = (filler?: Readonly<AnyCard>): Readonly<Milpa> => {
  let milpa: AnyCard[][] = [];
  if (filler) {
    milpa = Array.from(Array(ROW_SIZE), () => {
      return Array.from(Array(COLUMN_SIZE), () => {
        return { ...filler };
      });
    });
  }
  return milpa;
};
