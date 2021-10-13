import { WAITING_PLAYER } from "../../../constants";
import { GameStatus, Player } from "../../../types";
import { compute_current_stage } from "./compute_current_stage";

const emptyGameStatus: Readonly<GameStatus> = {
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

test("should return turn number from your game status", () => {
  const STAGE_NUMBER = 4;
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    gameStatus: {
      ...emptyGameStatus,
      currentStage: STAGE_NUMBER,
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const currentStage = compute_current_stage(players);
  expect(currentStage).toEqual(STAGE_NUMBER);
});

test("should return undefined if  game status is undefined", () => {
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const currentStage = compute_current_stage(players);
  expect(currentStage).toBeUndefined();
});
