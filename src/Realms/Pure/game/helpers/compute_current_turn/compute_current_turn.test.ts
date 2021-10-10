import { GameStatus, Player } from "../../../types";
import { WAITING_PLAYER } from "../create_players/create_players";
import { compute_current_turn } from "./compute_current_turn";

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
  const TURN_NUMBER = 10;
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    gameStatus: {
      ...emptyGameStatus,
      currentTurn: TURN_NUMBER,
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const currentTurn = compute_current_turn(players);
  expect(currentTurn).toEqual(TURN_NUMBER);
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
  const currentTurn = compute_current_turn(players);
  expect(currentTurn).toBeUndefined();
});
