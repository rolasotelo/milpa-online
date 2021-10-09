import { EDGE_SIZE } from "../../../constants";
import { AnyCard, AnyCardButCrop, Edges } from "../../../types";

export const create_edges = (
  filler?: Readonly<AnyCardButCrop>
): Readonly<Edges> => {
  let edges: Edges = [];
  if (filler) {
    edges = Array.from(Array(EDGE_SIZE), () => {
      return Array.from(Array(EDGE_SIZE), () => {
        return { ...filler };
      });
    });
  }
  return edges;
};
