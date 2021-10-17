import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../../../Pure/constants";
import { Players } from "../../../Pure/enums";
import { deal_hand } from "../../../Pure/game/decks";
import { initialize_game } from "../../../Pure/game/helpers";
import { Milpa, MiSocket, Player } from "../../../Pure/types";

export const handleStartGame = (
  playersPlayload: ReadonlyArray<Player>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  socket: MiSocket
) => {
  const sessionID = sessionStorage.getItem("sessionID");
  if (!playersPlayload[Players.You].gameStatus) {
    const score: Map<string, number> = new Map();
    score.set(playersPlayload[Players.You].userID!, 0);
    score.set(playersPlayload[Players.Opponent].userID!, 0);
    const { cropsDeck, goodsDeck, milpas: emptyMilpas } = initialize_game();
    const { hand: newCropsHand, deck: newCropsDeck } = deal_hand(
      cropsDeck,
      CROPS_HAND_SIZE
    );
    const { hand: newGoodsHand, deck: newGoodsDeck } = deal_hand(goodsDeck,GOODS_HAND_SIZE);
    const milpas: Map<string, Readonly<Milpa>> = new Map();
    milpas.set(playersPlayload[Players.You].userID!, emptyMilpas[Players.You];
    milpas.set(playersPlayload[Players.Opponent].userID!, sampleMilpa);

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
