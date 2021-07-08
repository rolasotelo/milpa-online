import { RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";

export type RoutePropsType = RouteComponentProps<{}, StaticContext, unknown>;

export type GameRoutePropsType = RouteComponentProps<
  { gamecode: string },
  StaticContext,
  { nickname: string }
>;
