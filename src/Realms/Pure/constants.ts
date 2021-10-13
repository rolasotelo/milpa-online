import { GameStatus, Player } from "./types";

export const ROW_SIZE = 4;
export const COLUMN_SIZE = 4;
export const EDGE_SIZE = 4;

export const WAITING_PLAYER: Readonly<Player> = {
  self: false,
  connected: false,
  nickname: "Waiting ...",
};

export const EMPTYGAMESTATUS: Readonly<GameStatus> = {
  playerInTurnID: "",
  boards: {},
  cropsDeck: [],
  cropsHand: [],
  currentStage: 0,
  currentTurn: 0,
  goodsDeck: [],
  goodsHand: [],
  score: {},
};
