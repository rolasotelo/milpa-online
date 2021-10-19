import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { CardType, CropId, GoodId, ModifierId, SlotType } from "./enums";

export interface MiSocket extends Socket<DefaultEventsMap, DefaultEventsMap> {
  userID?: string;
}
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
  isYourBoard: boolean;
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
  roomCode?: string;
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
  isYourBoard: boolean;
  board: Board;
}

export type GameRoutePropsType = RouteComponentProps<
  { gamecode: string },
  StaticContext,
  { nickname: string }
>;

export interface DeckDefinition<T> {
  card: T;
  total: number;
}
