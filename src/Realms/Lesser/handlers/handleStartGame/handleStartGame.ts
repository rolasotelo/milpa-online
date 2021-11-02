import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../../../Pure/constants";
import { Event, Players } from "../../../Pure/enums";
import { deal_hand } from "../../../Pure/game/decks";
import { initialize_game } from "../../../Pure/game/helpers";
import { generate_start_of_turn_log } from "../../../Pure/game/scoring";
import { Board, GameStatus, MiSocket, Player } from "../../../Pure/types";

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
    const { cropsDeck, goodsDeck, boards: newBoards } = initialize_game();
    const { hand: newCropsHand, deck: newCropsDeck } = deal_hand(
      cropsDeck,
      CROPS_HAND_SIZE
    );
    const { hand: newGoodsHand, deck: newGoodsDeck } = deal_hand(
      goodsDeck,
      GOODS_HAND_SIZE
    );
    const boards: Map<string, Readonly<Board>> = new Map();
    boards.set(playersPlayload[Players.You].userID!, newBoards[Players.You]);
    boards.set(
      playersPlayload[Players.Opponent].userID!,
      newBoards[Players.Opponent]
    );

    const startGameStatus: Readonly<GameStatus> = {
      playerInTurnID: playersPlayload[Players.You].userID!,
      currentTurn: 1,
      currentStage: 1,
      score: Object.fromEntries(score),
      cropsDeck: newCropsDeck,
      goodsDeck: newGoodsDeck,
      cropsHand: newCropsHand,
      goodsHand: newGoodsHand,
      boards: Object.fromEntries(boards),
      scoringHistory: [generate_start_of_turn_log(1)],
    };

    socket.emit(Event.Start_Game_Handshake, sessionID, startGameStatus);
    const newPlayers: Readonly<[Player, Player]> = [
      { ...playersPlayload[Players.You], gameStatus: startGameStatus },
      { ...playersPlayload[Players.Opponent], gameStatus: startGameStatus },
    ];
    setPlayers(newPlayers);
  } else {
    const gameStatus = playersPlayload[Players.You].gameStatus;
    const newPlayers: Readonly<[Player, Player]> = [
      { ...playersPlayload[Players.You], gameStatus: gameStatus },
      { ...playersPlayload[Players.Opponent], gameStatus: gameStatus },
    ];
    setPlayers(newPlayers);
    socket.emit(Event.Start_Game_Handshake, sessionID, gameStatus);
  }
};
