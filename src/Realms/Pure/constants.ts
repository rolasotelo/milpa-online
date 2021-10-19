import { Total } from "./enums";
import {
  Beans,
  BlueCorn,
  Cactus,
  Chilli,
  Coatlicue,
  Corn,
  Cricket,
  Huitlacoche,
  Maguey,
  Manure,
  Pumpkin,
  Quelites,
  RedCorn,
  Shovel,
  Tlaloc,
  Tomatillo,
  Tomatoe,
} from "./game/cards";
import { Crop, DeckDefinition, GameStatus, Good, Player } from "./types";

export const ROW_SIZE = 4;
export const COLUMN_SIZE = 4;
export const EDGE_SIZE = 4;
export const WAITING_TIME = 60 * 2;
export const CROPS_DECK_SIZE = 64;
export const CROPS_HAND_SIZE = 4;
export const GOODS_HAND_SIZE = 3;
export const TOTAL_STAGES = 6;

export const WAITING_PLAYER: Readonly<Player> = {
  self: false,
  connected: false,
  nickname: "Waiting ...",
};

export const CROPSDECKDEFINITION: ReadonlyArray<DeckDefinition<Crop>> = [
  { card: Corn, total: Total.Corn },
  { card: Beans, total: Total.Beans },
  { card: BlueCorn, total: Total.BlueCorn },
  { card: Chilli, total: Total.Chilli },
  { card: Pumpkin, total: Total.Pumpkin },
  { card: Quelites, total: Total.Quelites },
  { card: RedCorn, total: Total.RedCorn },
  { card: Tomatillo, total: Total.Tomatillo },
  { card: Tomatoe, total: Total.Tomatoe },
];

export const GOODSDECKDEFINITION: ReadonlyArray<DeckDefinition<Good>> = [
  { card: Manure, total: Total.Manure },
  { card: Tlaloc, total: Total.Tlaloc },
  { card: Cactus, total: Total.Cactus },
  { card: Coatlicue, total: Total.Coatlicue },
  { card: Cricket, total: Total.Cricket },
  { card: Huitlacoche, total: Total.Huitlacoche },
  { card: Maguey, total: Total.Maguey },
  { card: Shovel, total: Total.Shovel },
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
