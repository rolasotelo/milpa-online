import { COLUMN_SIZE, ROW_SIZE } from "../../../constants";
import { AnyCard } from "../../../types";

export const create_milpa = (
  filler?: Readonly<AnyCard>
): Readonly<AnyCard[][]> => {
  if (filler) {
    return Array.from(Array(ROW_SIZE), () => {
      return Array.from(Array(COLUMN_SIZE), () => {
        return filler;
      });
    });
  } else {
    return [];
  }
};
