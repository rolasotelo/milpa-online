import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { cropIds } from "./game/crops/crops";
import { goodIds } from "./game/goods/goods";
import { modifierIds } from "./game/modifiers/modifiers";

export type RoutePropsType = RouteComponentProps<{}, StaticContext, unknown>;

export type GameRoutePropsType = RouteComponentProps<
  { gamecode: string },
  StaticContext,
  { nickname: string }
>;

export type User = {
  self: boolean;
  userID?: string;
  nickname: string;
  connected: boolean;
  messages?: Array<string>;
  hasNewMessages?: boolean;
  gameStatus?: GameStatus;
};

export interface MiSocket extends Socket<DefaultEventsMap, DefaultEventsMap> {
  userID?: string;
}

export interface GameStatus {
  playerTurn: string;
  score: Map<string, number>;
  milpas: Map<string, Milpa>;
  cropsDeck: Crop[];
  goodsDeck: Good[];
  cropsHand: Crop[];
  goodsHand: Good[];
}

interface Card {
  id: string;
  type: "crop" | "good";
  name: string;
  icon: string;
  description: string;
  resume: string;
  rules: string;
  modifier?: (cropIds | goodIds | modifierIds)[];
  canInteractWith: {
    ownEmptyMilpaSlots: boolean;
    ownFilledMilpaSlots: boolean | (cropIds | goodIds)[];
    ownEmptyEdgeSlots: boolean;
    ownFilledEdgeSlots: boolean | (cropIds | goodIds)[];
    othersEmptyMilpaSlots: boolean;
    othersFilledMilpaSlots: boolean | (cropIds | goodIds)[];
    othersEmptyEdgeSlots: boolean;
    othersFilledEdgeSlots: boolean | (cropIds | goodIds)[];
  };
}

export interface Modifier {
  id: modifierIds;
  name: string;
  description: string;
}

export interface Crop extends Card {
  id: cropIds;
}

export interface Good extends Card {
  id: goodIds;
}

export type AnyCard = Good | Crop;

export type CropAndGoodSlots = (Crop | Good | undefined)[][];

export interface Milpa {
  goods: CropAndGoodSlots;
  crops: CropAndGoodSlots;
}
