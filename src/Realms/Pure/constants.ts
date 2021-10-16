import { Total } from "./enums";
import { Beans, Corn, Manure, Tlaloc } from "./game/cards";
import { Crop, DeckDefinition, GameStatus, Good, Player } from "./types";

export const ROW_SIZE = 4;
export const COLUMN_SIZE = 4;
export const EDGE_SIZE = 4;
export const WAITING_TIME = 60 * 2;
export const CROPS_DECK_SIZE = 64;

export const WAITING_PLAYER: Readonly<Player> = {
  self: false,
  connected: false,
  nickname: "Waiting ...",
};

export const CROPSDECKDEFINITION: ReadonlyArray<DeckDefinition<Crop>> = [
  { card: Corn, total: Total.Corn },
  { card: Beans, total: Total.Beans },
];

export const GOODSDECKDEFINITION: ReadonlyArray<DeckDefinition<Good>> = [
  { card: Manure, total: Total.Manure },
  { card: Tlaloc, total: Total.Tlaloc },
];

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
