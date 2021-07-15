import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";

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
};
