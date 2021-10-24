import { EMPTYGAMESTATUS, WAITING_PLAYER } from "../../../constants";
import { GameStatus, Player } from "../../../types";
import { compute_current_turn } from "./compute_current_turn";

test("should return turn number from your game status", () => {
  const TURN_NUMBER = 10;
  const you: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
    gameStatus: {
      ...EMPTYGAMESTATUS,
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
