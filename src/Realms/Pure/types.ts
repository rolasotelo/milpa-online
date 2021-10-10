import { CardType, CropId, GoodId, ModifierId } from "./enums";

interface Card {
  type: CardType;
  name: string;
  icon: string;
  description: string;
  resume: string;
  rules: string;
  modifier: ModifierId[];
  canInteractWith: {
    ownEmptyMilpaSlots: boolean;
    ownFilledMilpaSlots: boolean | (CropId | GoodId)[];
    ownEmptyEdgeSlots: boolean;
    ownFilledEdgeSlots: boolean | (CropId | GoodId)[];
    othersEmptyMilpaSlots: boolean;
    othersFilledMilpaSlots: boolean | (CropId | GoodId)[];
    othersEmptyEdgeSlots: boolean;
    othersFilledEdgeSlots: boolean | (CropId | GoodId)[];
  };
}

export interface Crop extends Card {
  id: CropId;
}

export interface Good extends Card {
  id: GoodId;
}

export interface Empty extends Card {
  id: "empty";
}

export type AnyCard = Crop | Good | Empty;

export type Milpa = AnyCard[][];

export type Edges = AnyCard[][];

export type Board = {
  milpa: Readonly<Milpa>;
  edges: Readonly<Edges>;
};
