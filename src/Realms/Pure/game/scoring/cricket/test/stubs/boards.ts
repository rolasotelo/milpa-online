import { ModifierId } from "../../../../../enums";
import { Edges, Milpa } from "../../../../../types";
import {
  Corn,
  Beans,
  Pumpkin,
  Cactus,
  Cricket,
  Chilli,
  EmptySlot,
} from "../../../../cards";
import { milpa_row, edge_row } from "../../../common";

export const MILPA_WITH_CORN_AT_0_0_AND_2_3 = (): Milpa => {
  return [
    milpa_row(0, [[Corn], [Chilli], [Chilli], [Chilli]]),
    milpa_row(1, [[Chilli], [Chilli], [Chilli], [Chilli]]),
    milpa_row(2, [[Chilli], [Chilli], [Chilli], [Chilli, Corn]]),
    milpa_row(3, [[Chilli], [Chilli], [Chilli], [Chilli]]),
  ];
};

export const MILPA_WITH_CRICKET_AT_0_0_AND_2_3 = (): Milpa => {
  return [
    milpa_row(0, [
      [{ ...Cricket, modifier: [ModifierId.Opponents] }],
      [Chilli],
      [Chilli],
      [Chilli],
    ]),
    milpa_row(1, [[Chilli], [Chilli], [Chilli], [Chilli]]),
    milpa_row(2, [
      [Chilli],
      [Chilli],
      [Chilli],
      [Chilli, { ...Cricket, modifier: [ModifierId.Opponents] }],
    ]),
    milpa_row(3, [[Chilli], [Chilli], [Chilli], [Chilli]]),
  ];
};

export const EDGES_WITH_2_CRICKETS = (): Edges => {
  return [
    edge_row(0, [
      [{ ...Cricket, modifier: [ModifierId.Opponents] }],
      [Cactus],
      [Cactus],
      [Cactus],
    ]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [
      [Cactus],
      [Cactus],
      [{ ...Cricket, modifier: [ModifierId.Opponents] }],
      [Cactus],
    ]),
  ];
};

export const EDGES_WITH_0_CRICKETS = (): Edges => {
  return [
    edge_row(0, [[EmptySlot], [Cactus], [Cactus], [Cactus]]),
    edge_row(1, [[Cactus], [Cactus], [Cactus], [Cactus]]),
    edge_row(2, [[Cactus], [Cactus], [Cactus], [Pumpkin]]),
    edge_row(3, [[Cactus], [Cactus], [EmptySlot], [Cactus]]),
  ];
};
