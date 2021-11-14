import { Edges } from "../../../../../types";
import { Cactus, Maguey } from "../../../../cards";
import { Flower } from "../../../../cards/crops/flower";
import { edge_row } from "../../../common";

export const EDGES_WITH_1_MAGUEY_LINE = (): Edges => {
  return [
    edge_row(0, [[Flower], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Maguey], [Maguey], [Maguey], [Maguey]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Flower]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};

export const EDGES_WITH_MAGUEY_IN_3_LINES = (): Edges => {
  return [
    edge_row(0, [[Flower], [Maguey], [Cactus], [Cactus]]),
    edge_row(1, [[Maguey], [Maguey], [Maguey], [Maguey]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Flower]]),
    edge_row(3, [[Cactus], [Cactus], [Maguey], [Cactus]]),
  ];
};
