import { EDGE_SIZE } from "../../../constants";
import { AnyCard, Edges } from "../../../types";

export const create_edges = (filler?: Readonly<AnyCard>): Readonly<Edges> => {
  let edges: Edges = [];
  if (filler) {
    edges = Array.from(Array(EDGE_SIZE), () => {
      return Array.from(Array(EDGE_SIZE), () => {
        return [{ ...filler }];
      });
    });
  }
  return edges;
};
