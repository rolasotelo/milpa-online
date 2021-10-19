import { Players } from "../../../Pure/enums";
import { BoardSlot, MiSocket, Player, SelectedCard } from "../../../Pure/types";

export const handleUpdateBoards = (
  card: SelectedCard,
  slot: BoardSlot,
  players: Readonly<[Player, Player]>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  setSelectedCard: React.Dispatch<React.SetStateAction<Readonly<SelectedCard>>>,
  socket: MiSocket
) => {
  const playersCopy = players.slice();
  const oldGameStatus = playersCopy[Players.You].gameStatus!;
  const newPlayerInTurnID = playersCopy[Players.Opponent].userID!;
  const boardsMap = new Map(
    Object.entries(playersCopy[Players.You]?.gameStatus?.boards!)
  );
  const newMilpa = boardsMap.get(playersCopy[Players.You].userID!)!.milpa;
  const newEdges = boardsMap.get(playersCopy[Players.You].userID!)!.edges;
};
