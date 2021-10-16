import { Players } from "../../../Pure/enums";
import { initialize_game } from "../../../Pure/game/helpers";
import { MiSocket, Player } from "../../../Pure/types";

export const handleStartGame = (
  playersPlayload: ReadonlyArray<Player>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  socket: MiSocket
) => {
  const sessionID = sessionStorage.getItem("sessionID");
  if (!playersPlayload[Players.You].gameStatus) {
    const score: Map<string, number> = new Map();
    score.set(playersPlayload[0].userID!, 0);
    score.set(playersPlayload[1].userID!, 0);
    const { cropsDeck, goodsDeck, milpas } = initialize_game();
    const { cropsHand: newCropsHand, newCropsDeck } = dealCropsHand(cropsDeck);
    const { goodsHand: newGoodsHand, newGoodsDeck } = dealGoodsHand(goodsDeck);
    const milpas: Map<string, Milpa> = new Map();
    milpas.set(playersPlayload[0].userID!, emptyMilpa);
    milpas.set(playersPlayload[1].userID!, sampleMilpa);

    const startGameStatus: GameStatus = {
      playerTurn: playersPlayload[0].userID!,
      currentTurn: 1,
      currentStage: 1,
      score: Object.fromEntries(score),
      cropsDeck: newCropsDeck,
      goodsDeck: newGoodsDeck,
      cropsHand: newCropsHand,
      goodsHand: newGoodsHand,
      milpas: Object.fromEntries(milpas),
    };

    socket.emit("start game handshake", sessionID, startGameStatus);
    const newPlayers: User[] = [
      { ...playersPlayload[0], gameStatus: startGameStatus },
      { ...playersPlayload[1], gameStatus: startGameStatus },
    ];
    setPlayers(newPlayers);
  } else {
    const gameStatus = playersPlayload[0].gameStatus;
    const newPlayers: User[] = [
      { ...playersPlayload[0], gameStatus: gameStatus },
      { ...playersPlayload[1], gameStatus: gameStatus },
    ];
    setPlayers(newPlayers);
    socket.emit("start game handshake", sessionID, gameStatus);
  }
};
