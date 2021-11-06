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
import { Flower } from "../../../../cards/crops/flower";
import { milpa_row, edge_row } from "../../../common";

export const MILPA_WITH_2_LONELY_FLOWERS_3_TOTAL = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli], [Flower], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Pumpkin]]),
    milpa_row(3, [[Beans], [Tomatillo, Chilli, Flower], [Flower], [BlueCorn]]),
  ];
};

export const MILPA_WITH_2_LONELY_PUMPKINS = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Corn], [Corn], [Chilli]]),
    milpa_row(1, [[Chilli], [Pumpkin], [Corn], [BlueCorn]]),
    milpa_row(2, [[Corn], [Chilli], [BlueCorn], [Pumpkin]]),
    milpa_row(3, [[Beans], [Tomatillo, Chilli, Flower], [Pumpkin], [BlueCorn]]),
  ];
};

export const EDGES_WITH_2_LONELY_FLOWERS_3_TOTAL = (): Milpa => {
  return [
    edge_row(0, [[Flower], [Cactus, Flower], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Flower]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};

export const EDGES_WITH_2_LONELY_PUMPKINS = (): Milpa => {
  return [
    edge_row(0, [[Pumpkin], [Cactus, Flower], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [[Cactus], [Cactus], [Cactus], [Cactus]]),
  ];
};
