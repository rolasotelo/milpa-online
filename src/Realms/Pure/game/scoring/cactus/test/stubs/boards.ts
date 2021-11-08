import { ModifierId } from "../../../../../enums";
import { Edges, Milpa } from "../../../../../types";
import { Cactus, Corn, Beans, Pumpkin, Maguey } from "../../../../cards";
import { milpa_row, edge_row } from "../../../common";

export const MILPA_WITH_3_CACTUS_2_WITH_TUNA = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...Cactus, modifier: [ModifierId.Tuna] }],
      [Corn],
      [Corn],
      [{ ...Cactus, modifier: [ModifierId.Tuna] }],
    ]),
    milpa_row(1, [[Corn], [Beans], [Corn], [Corn]]),
    milpa_row(2, [[Corn], [Corn], [Beans], [Corn]]),
    milpa_row(3, [[Corn], [Corn], [Cactus], [Beans]]),
  ];
};

export const EDGES_WITH_2_CACTUS_1_WITH_TUNA = (): Edges => {
  return [
    edge_row(0, [[Pumpkin], [Maguey], [Cactus], [Maguey]]),
    edge_row(1, [[Maguey], [Maguey], [Maguey], [Maguey]]),
    edge_row(2, [[Maguey], [Maguey], [Maguey], [Maguey]]),
    edge_row(3, [
      [Maguey],
      [Maguey],
      [Maguey],
      [{ ...Cactus, modifier: [ModifierId.Tuna] }],
    ]),
  ];
};
