import { handleNewCardInSlot } from "..";
import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../../../Pure/constants";
import { Event, Players } from "../../../Pure/enums";
import { deal_hand } from "../../../Pure/game/decks";
import {
  compute_next_stage,
  compute_next_turn,
} from "../../../Pure/game/helpers";
import {
  Board,
  BoardSlot,
  Crop,
  GameStatus,
  Good,
  MiSocket,
  Player,
  SelectedCard,
} from "../../../Pure/types";

export const handleUpdateBoards = (
  card: SelectedCard,
  slot: BoardSlot,
  isYourBoard: boolean,
  players: Readonly<[Player, Player]>,
  setPlayers: React.Dispatch<React.SetStateAction<readonly [Player, Player]>>,
  setSelectedCard: React.Dispatch<React.SetStateAction<Readonly<SelectedCard>>>,
  socket: MiSocket
) => {
  const cardType = card.type;
  const slotType = slot.type;
  const playersCopy = players.slice();
  const oldGameStatus = playersCopy[Players.You].gameStatus!;
  const boardsMap = new Map(
    Object.entries(playersCopy[Players.You]?.gameStatus?.boards!)
  );
  let yourNewMilpa = undefined;
  const yourOldMilpa = boardsMap
    .get(playersCopy[Players.You].userID!)!
    .milpa.slice();
  let yourNewEdges = undefined;
  const yourOldEdges = boardsMap
    .get(playersCopy[Players.You].userID!)!
    .edges.slice();
  let opponentsNewMilpa = undefined;
  const opponentsOldMilpa = boardsMap
    .get(playersCopy[Players.Opponent].userID!)!
    .milpa.slice();
  let opponentsNewEdges = undefined;
  const opponentsOldEdges = boardsMap
    .get(playersCopy[Players.Opponent].userID!)!
    .edges.slice();
  let oldCropsDeck = playersCopy[Players.You]?.gameStatus?.cropsDeck!;
  let oldGoodsDeck = playersCopy[Players.You]?.gameStatus?.goodsDeck!;
  let newCropsHand = undefined;
  let oldCropsHand = playersCopy[Players.You]?.gameStatus?.cropsHand.slice()!;
  let newGoodsHand = undefined;
  let oldGoodsHand = playersCopy[Players.You]?.gameStatus?.goodsHand.slice()!;

  if (isYourBoard) {
    yourNewMilpa = boardsMap.get(playersCopy[Players.You].userID!)!.milpa;
    yourNewEdges = boardsMap.get(playersCopy[Players.You].userID!)!.edges;
    if (cardType === "crop") {
      newCropsHand = playersCopy[Players.You]?.gameStatus?.cropsHand!;
      (newCropsHand as Crop[]).splice(card.indexFromHand!, 1);
    } else if (cardType === "good") {
      newGoodsHand = playersCopy[Players.You]?.gameStatus?.goodsHand!;
      (newGoodsHand as Good[]).splice(card.indexFromHand!, 1);
    }
    if (slotType === "milpa") {
      handleNewCardInSlot(
        (yourNewMilpa as BoardSlot[][])[slot.row!][slot.column!],
        card.card!
      );
    } else if (slotType === "edge") {
      handleNewCardInSlot(
        (yourNewEdges as BoardSlot[][])[slot.row!][slot.column!],
        card.card!
      );
    }
  } else {
    opponentsNewMilpa = boardsMap.get(
      playersCopy[Players.Opponent].userID!
    )!.milpa;
    opponentsNewEdges = boardsMap.get(
      playersCopy[Players.Opponent].userID!
    )!.edges;
    if (cardType === "crop") {
      newCropsHand = playersCopy[Players.You]?.gameStatus?.cropsHand!;
      (newCropsHand as Crop[]).splice(card.indexFromHand!, 1);
    } else if (cardType === "good") {
      newGoodsHand = playersCopy[Players.You]?.gameStatus?.goodsHand!;
      (newGoodsHand as Good[]).splice(card.indexFromHand!, 1);
    }
    if (slotType === "milpa") {
      handleNewCardInSlot(
        (opponentsNewMilpa as BoardSlot[][])[slot.row!][slot.column!],
        card.card!
      );
    } else if (slotType === "edge") {
      handleNewCardInSlot(
        (opponentsNewEdges as BoardSlot[][])[slot.row!][slot.column!],
        card.card!
      );
    }
  }

  const yourNewBoard: Board = {
    milpa: yourNewMilpa ? yourNewMilpa : yourOldMilpa,
    edges: yourNewEdges ? yourNewEdges : yourOldEdges,
  };

  const opponentsNewBoard: Board = {
    milpa: opponentsNewMilpa ? opponentsNewMilpa : opponentsOldMilpa,
    edges: opponentsNewEdges ? opponentsNewEdges : opponentsOldEdges,
  };

  const newBoards: Map<string, Board> = new Map();
  newBoards.set(playersCopy[Players.You].userID!, yourNewBoard);
  newBoards.set(playersCopy[Players.Opponent].userID!, opponentsNewBoard);

  const newStage = compute_next_stage(oldGameStatus.currentStage);
  const newTurn = compute_next_turn(oldGameStatus.currentTurn, newStage);

  const isFinalStage = newStage === 1;
  const newPlayerInTurnID = isFinalStage
    ? playersCopy[Players.You].userID!
    : playersCopy[Players.Opponent].userID!;

  let newGameStatus: GameStatus;
  if (isFinalStage) {
    const { deck: newCropsDeck, hand: newCropsDealtHand } = deal_hand(
      oldCropsDeck,
      CROPS_HAND_SIZE
    );
    const { deck: newGoodsDeck, hand: newGoodsDealtHand } = deal_hand(
      oldGoodsDeck,
      GOODS_HAND_SIZE
    );
    newGameStatus = {
      ...oldGameStatus,
      playerInTurnID: newPlayerInTurnID,
      currentStage: newStage,
      currentTurn: newTurn,
      cropsHand: newCropsDealtHand,
      goodsHand: newGoodsDealtHand,
      cropsDeck: newCropsDeck,
      goodsDeck: newGoodsDeck,
      boards: Object.fromEntries(newBoards),
    };
  } else {
    newGameStatus = {
      ...oldGameStatus,
      playerInTurnID: newPlayerInTurnID,
      currentStage: newStage,
      currentTurn: newTurn,
      cropsHand: newCropsHand ? newCropsHand : oldCropsHand,
      goodsHand: newGoodsHand ? newGoodsHand : oldGoodsHand,
      cropsDeck: oldCropsDeck,
      goodsDeck: oldGoodsDeck,
      boards: Object.fromEntries(newBoards),
    };
  }

  socket.emit(
    Event.Start_Update_Board,
    sessionStorage.getItem("sessionID"),
    newGameStatus
  );

  const newPlayers: Readonly<[Player, Player]> = [
    { ...playersCopy[Players.You], gameStatus: { ...newGameStatus } },
    { ...playersCopy[Players.Opponent], gameStatus: { ...newGameStatus } },
  ];

  setPlayers(newPlayers);
  setSelectedCard({
    card: undefined,
    indexFromHand: undefined,
    type: undefined,
  });
};
