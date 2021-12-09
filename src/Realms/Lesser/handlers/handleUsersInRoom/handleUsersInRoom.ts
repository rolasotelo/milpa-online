import { initialize_players } from "../../../Pure/game/helpers";
import { MiSocket, Player } from "../../../Pure/types";

export const handleUsersInRoom = (
  players: ReadonlyArray<Player>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  socket: MiSocket
): void  => {
  const newPlayers: Player[] = initialize_players(players, socket.userID);
  setPlayers(newPlayers as [Player, Player]);
};
