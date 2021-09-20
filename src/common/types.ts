import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

export type RoutePropsType = RouteComponentProps<{}, StaticContext, unknown>;

export type GameRoutePropsType = RouteComponentProps<
  { gamecode: string },
  StaticContext,
  { nickname: string }
>;

export type Users = Array<User>;

export type User = {
  self: boolean;
  userID: string;
  nickname: string;
  connected: boolean;
  messages: Array<string>;
  hasNewMessages: boolean;
  gameStatus: GameStatus;
};

export interface MiSocket extends Socket<DefaultEventsMap, DefaultEventsMap> {
  userID?: string;
}

export interface GameStatus {
  yourTurn: boolean;
  score: number;
  milpas: string[][];
}
