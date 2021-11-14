import { Edges, Milpa } from "../../../../../types";
import {
  Pumpkin,
  Corn,
  Chilli,
  BlueCorn,
  Beans,
  Tomatillo,
  Cactus,
  Tlaloc,
  Cricket,
  Manure,
} from "../../../../cards";
import { Flower } from "../../../../cards/crops/flower";
import { milpa_row, edge_row } from "../../../common";

export const MILPA_WITH_10_CROPS_IN_LINE_WITH_TLALOC = (): Milpa => {
  return [
    milpa_row(0, [[Pumpkin, Cricket], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli, Manure], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Pumpkin]]),
    milpa_row(3, [[Beans], [], [], [Flower]]),
  ];
};

export const EDGES_WITH_TLALOC_AT_00_10_23 = (): Edges => {
  return [
    edge_row(0, [[Tlaloc], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Tlaloc], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Tlaloc]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};
