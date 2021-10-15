import { EDGE_SIZE } from "../../../constants";
import { SlotType } from "../../../enums";
import { AnyCard, Edges } from "../../../types";

export const create_edges = (filler?: Readonly<AnyCard>): Readonly<Edges> => {
  let edges: Edges = [];
  if (filler) {
    edges = Array.from(Array(EDGE_SIZE), (_, row) => {
      return Array.from(Array(EDGE_SIZE), (_, column) => {
        return { type: SlotType.Edge, row, column, cards: [{ ...filler }] };
      });
    });
  }
  return edges;
};
