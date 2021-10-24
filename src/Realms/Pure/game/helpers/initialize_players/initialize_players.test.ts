import { initialize_players } from "..";
import { Players } from "../../../enums";
import { Player } from "../../../types";

test("should put true first when using sortBy", () => {
  const YOUR_NICKNAME = "Rolando";
  const YOUR_ID = "123";
  const you: Player = {
    userID: YOUR_ID,
    connected: false,
    nickname: YOUR_NICKNAME,
    self: false,
  };
  const opponent: Player = {
    userID: "321",
    connected: false,
    nickname: "Gabinka",
    self: false,
  };
  const players: Player[] = [you, opponent];
  const newPlayers: Player[] = initialize_players(players, YOUR_ID);
  expect(newPlayers[Players.You].nickname).toEqual(YOUR_NICKNAME);
  expect(newPlayers[Players.You].self).toBeTruthy();
  expect(newPlayers[Players.Opponent].self).toBeFalsy();
});
