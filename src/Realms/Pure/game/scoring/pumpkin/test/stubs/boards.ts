import { Milpa } from "../../../../../types";
import {
  Beans,
  BlueCorn,
  Cactus,
  Chilli,
  Corn,
  Pumpkin,
  Tomatillo,
} from "../../../../cards";
import { edge_row, milpa_row } from "../../../common";

export const MILPA_WITH_2_PUMPKIN = (): Milpa => {
  return [
    milpa_row(0, [[Pumpkin], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli], [BlueCorn], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Pumpkin]]),
    milpa_row(3, [[Beans], [Tomatillo, Chilli], [Corn], [BlueCorn]]),
  ];
};

export const EDGES_WITH_2_PUMPKIN = (): Milpa => {
  return [
    edge_row(0, [[Pumpkin], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};

export const EDGES_FULL_OF_CACTUS = (): Milpa => {
  return [
    edge_row(0, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};
