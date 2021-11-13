import { Edges, Milpa } from "../../../../../types";
import { Corn, Beans, Pumpkin, Cactus, Cricket } from "../../../../cards";
import { milpa_row, edge_row } from "../../../common";

export const MILPA_WITH_CORN_AT_0_0_AND_3_3 = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Beans, Corn]]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};

export const MILPA_WITH_CRICKET_AT_0_0_AND_3_3 = (): Milpa => {
  return [
    milpa_row(0, [[Cricket], [Corn], [Corn], [Corn]]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Beans, Cricket]]),
    milpa_row(3, [[Beans], [Corn], [Corn], [Beans]]),
  ];
};

export const EDGES_WITH_2_CRICKETS = (): Edges => {
  return [
    edge_row(0, [[Cricket], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [[Cactus], [Cactus], [Cricket], [Cactus]]),
  ];
};

export const EDGES_WITH_0_CRICKETS = (): Edges => {
  return [
    edge_row(0, [[], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [[Cactus], [Cactus], [], [Cactus]]),
  ];
};
