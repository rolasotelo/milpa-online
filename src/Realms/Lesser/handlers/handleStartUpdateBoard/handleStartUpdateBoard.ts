import { Event, Players } from "../../../Pure/enums";
import { GameStatus, MiSocket, Player } from "../../../Pure/types";

export const handleStartUpdateBoard = (
  players: ReadonlyArray<Player>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  gameStatus: GameStatus,
  socket: MiSocket
) => {
  const sessionID = sessionStorage.getItem("sessionID");
  const newPlayers: Readonly<[Player, Player]> = [
    { ...players[Players.You], gameStatus: { ...gameStatus } },
    { ...players[Players.Opponent], gameStatus: { ...gameStatus } },
  ];
  socket.emit(Event.End_Update_Board, sessionID, gameStatus);

  setPlayers(newPlayers);
};
