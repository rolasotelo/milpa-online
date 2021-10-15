import { chain } from "underscore";
import { Player } from "../../../types";

export const initialize_players = (
  players: ReadonlyArray<Player>,
  yourID: string | undefined
) => {
  const newPlayers: Player[] = chain(players.slice())
    .each((player) => {
      player.connected = true;
      player.self = player.userID === yourID;
    })
    .sortBy((player) => {
      if (player.self) {
        return -1;
      } else {
        return 1;
      }
    })
    .value();
  return newPlayers;
};
