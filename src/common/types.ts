import { ScoreLogType } from "./enums";

export type Player = {
  self: boolean;
  userID?: string;
  sessionID?: string;
  roomCode?: string;
  nickname: string;
  connected: boolean;
};

export type ScoringHistory = {
  name: string;
  description: string[];
  type: ScoreLogType;
  icon: (() => JSX.Element) | null;
};
