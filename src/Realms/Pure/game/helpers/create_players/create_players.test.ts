import { WAITING_PLAYER } from "../../../constants";
import { Players } from "../../../enums";
import { Player } from "../../../types";
import { create_players } from "./create_players";

test("should contain connected player on first position and waiting player on second one", () => {
  const connectedPlayer: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players = create_players(connectedPlayer);
  expect(players[Players.You]).toEqual(connectedPlayer);
  expect(players[Players.Opponent]).toEqual(WAITING_PLAYER);
});

test("should be copies of mockup players", () => {
  const connectedPlayer: Readonly<Player> = {
    nickname: "Gabinka",
    self: true,
    connected: true,
  };
  const players = create_players(connectedPlayer) as [Player, Player];
  players[Players.You].userID = "123456789";
  players[Players.Opponent].sessionID = "123456789";
  expect(players[Players.You]).not.toEqual(connectedPlayer);
  expect(players[Players.Opponent]).not.toEqual(WAITING_PLAYER);
});
