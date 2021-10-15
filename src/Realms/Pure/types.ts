import { CardType, CropId, GoodId, ModifierId, SlotType } from "./enums";

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

export type Milpa = BoardSlot[][];

export type Edges = BoardSlot[][];

export interface SelectedCard {
  indexFromHand: number | undefined;
  type: CardType | undefined;
  card: Readonly<AnyCard> | undefined;
}

export interface BoardSlot {
  type: SlotType | undefined;
  row: number | undefined;
  column: number | undefined;
  cards: ReadonlyArray<AnyCard>;
}

export type Board = {
  milpa: Readonly<Milpa>;
  edges: Readonly<Edges>;
};

export type Player = {
  self: boolean;
  userID?: string;
  sessionID?: string;
  nickname: string;
  connected: boolean;
  gameStatus?: GameStatus;
};

export interface GameStatus {
  playerInTurnID: string;
  currentTurn: number;
  currentStage: number;
  score: {
    [k: string]: number;
  };
  boards: {
    [k: string]: Readonly<Board>;
  };
  cropsDeck: ReadonlyArray<Crop>;
  goodsDeck: ReadonlyArray<Good>;
  cropsHand: ReadonlyArray<Crop>;
  goodsHand: ReadonlyArray<Good>;
}

export interface BoardForDisplay {
  isYourMilpa: boolean;
  board: Board;
}
