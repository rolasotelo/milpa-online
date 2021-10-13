import { WAITING_PLAYER } from "../../../constants";
import { GameStatus, Player } from "../../../types";
import { compute_is_your_turn } from "./compute_is_your_turn";

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

test("should return true if your userID is the same as the playerInTurnID in the game status", () => {
  const userID = "123456789";
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    userID,
    gameStatus: {
      ...emptyGameStatus,
      playerInTurnID: userID,
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const isYourTurn = compute_is_your_turn(players);
  expect(isYourTurn).toBeTruthy();
});

test("should return false if your userID is not the same as the playerInTurnID in the game status", () => {
  const userID = "123456789";
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    userID,
    gameStatus: {
      ...emptyGameStatus,
      playerInTurnID: "987654321",
    },
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const isYourTurn = compute_is_your_turn(players);
  expect(isYourTurn).toBeFalsy();
});

test("should return undefined if your userID is undefined or if game status is undefined", () => {
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players: Readonly<[Player, Player]> = [
    { ...you },
    { ...WAITING_PLAYER },
  ];
  const isYourTurn = compute_is_your_turn(players);
  expect(isYourTurn).toBeUndefined();
});
