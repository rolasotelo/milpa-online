import { filter } from "underscore";
import { handleNewCardInSlot } from "..";
import { CROPS_HAND_SIZE, GOODS_HAND_SIZE } from "../../../Pure/constants";
import { CardType, Event, Players, SlotType } from "../../../Pure/enums";
import { deal_hand } from "../../../Pure/game/decks";
import {
  compute_next_stage,
  compute_next_turn,
} from "../../../Pure/game/helpers";
import {
  compute_board_and_score_at_the_end_of_turn,
  compute_score_on_card_played,
} from "../../../Pure/game/scoring";
import {
  AnyCard,
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
  const indexFromHand = card.indexFromHand!;
  const playersCopy = players.slice();
  const oldGameStatus = playersCopy[Players.You].gameStatus!;
  const boardsMap = new Map(
    Object.entries(playersCopy[Players.You]?.gameStatus?.boards!)
  );
  const scores = new Map(
    Object.entries(playersCopy[Players.You]?.gameStatus?.score!)
  );
  const yourID = playersCopy[Players.You].userID!;
  const opponentsID = playersCopy[Players.Opponent].userID!;

  const [yourOldMilpa, yourOldEdges, opponentsOldMilpa, opponentsOldEdges] =
    getOldMilpasAndEdges(boardsMap, yourID, opponentsID);
  const [oldCropsDeck, oldGoodsDeck, oldCropsHand, oldGoodsHand] =
    getOldDecksAndHands(oldGameStatus);
  const oldScores = getOldScores(scores, yourID, opponentsID);

  // + Update milpas, edges and hands
  const [newCropsHand, newGoodsHand] = updateHands(
    [oldCropsHand, oldGoodsHand],
    cardType,
    indexFromHand
  );
  const [
    yourNewMilpa,
    yourNewEdges,
    opponentsNewMilpa,
    opponentsNewEdges,
    cardWithModifiers,
  ] = updateMilpasAndEdges(
    isYourBoard,
    slotType,
    yourOldMilpa,
    yourOldEdges,
    opponentsOldMilpa,
    opponentsOldEdges,
    slot,
    card
  );
  const [yourNewScoreBeforeEndTurnScore, opponentsNewScoreBeforeEndTurnScore] =
    compute_score_on_card_played(oldScores, cardWithModifiers!);
  const newScores: Map<string, number> = new Map();

  const yourNewBoardBeforeEndTurnScore: Board = {
    milpa: yourNewMilpa ? yourNewMilpa : yourOldMilpa,
    edges: yourNewEdges ? yourNewEdges : yourOldEdges,
  };

  const opponentsNewBoardBeforeEndTurnScore: Board = {
    milpa: opponentsNewMilpa ? opponentsNewMilpa : opponentsOldMilpa,
    edges: opponentsNewEdges ? opponentsNewEdges : opponentsOldEdges,
  };

  const newBoards: Map<string, Board> = new Map();

  const newStage = compute_next_stage(oldGameStatus.currentStage);
  const newTurn = compute_next_turn(oldGameStatus.currentTurn, newStage);

  const isFinalStage = newStage === 1;
  const newPlayerInTurnID = isFinalStage ? yourID : opponentsID;

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
    const {
      board: yourNewBoardAfterEndTurnScore,
      score: yourNewScoreAfterEndTurnScore,
    } = compute_board_and_score_at_the_end_of_turn(
      yourNewBoardBeforeEndTurnScore,
      yourNewScoreBeforeEndTurnScore
    );
    const {
      board: opponentsNewBoardAfterEndTurnScore,
      score: opponentsNewScoreAfterEndTurnScore,
    } = compute_board_and_score_at_the_end_of_turn(
      opponentsNewBoardBeforeEndTurnScore,
      opponentsNewScoreBeforeEndTurnScore
    );
    newScores.set(yourID, yourNewScoreAfterEndTurnScore);
    newScores.set(opponentsID, opponentsNewScoreAfterEndTurnScore);
    newBoards.set(yourID, yourNewBoardAfterEndTurnScore);
    newBoards.set(opponentsID, opponentsNewBoardAfterEndTurnScore);
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
      score: Object.fromEntries(newScores),
    };
  } else {
    newScores.set(yourID, yourNewScoreBeforeEndTurnScore);
    newScores.set(opponentsID, opponentsNewScoreBeforeEndTurnScore);
    newBoards.set(yourID, yourNewBoardBeforeEndTurnScore);
    newBoards.set(opponentsID, opponentsNewBoardBeforeEndTurnScore);
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
      score: Object.fromEntries(newScores),
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

const getOldMilpasAndEdges = (
  boardsMap: Map<string, Readonly<Board>>,
  yourID: string,
  opponentsID: string
) => {
  const yourOldMilpa = boardsMap.get(yourID)!.milpa;

  const yourOldEdges = boardsMap.get(yourID)!.edges;

  const opponentsOldMilpa = boardsMap.get(opponentsID)!.milpa;

  const opponentsOldEdges = boardsMap.get(opponentsID)!.edges;
  return [yourOldMilpa, yourOldEdges, opponentsOldMilpa, opponentsOldEdges];
};

const getOldDecksAndHands = (
  gameStatus: GameStatus
): [readonly Crop[], readonly Good[], readonly Crop[], readonly Good[]] => {
  const oldCropsDeck = gameStatus.cropsDeck!;
  const oldGoodsDeck = gameStatus.goodsDeck!;
  const oldCropsHand = gameStatus.cropsHand!;
  const oldGoodsHand = gameStatus.goodsHand!;
  return [oldCropsDeck, oldGoodsDeck, oldCropsHand, oldGoodsHand];
};

const getOldScores = (
  scores: Map<string, number>,
  yourID: string,
  OpponentsID: string
) => {
  const yourOldScore = scores.get(yourID)!;
  const opponentsOldScore = scores.get(OpponentsID)!;
  return [yourOldScore, opponentsOldScore] as [number, number];
};

const updateHands = (
  oldHands: [readonly Crop[] | undefined, readonly Good[] | undefined],
  type: CardType | undefined,
  indexFromHand: number
): [readonly Crop[] | undefined, readonly Good[] | undefined] => {
  let newCropsHand;
  let newGoodsHand;
  if (type === "crop") {
    newCropsHand = filter(oldHands[0]!, (_, index) => {
      return index !== indexFromHand;
    });
  } else if (type === "good") {
    newGoodsHand = filter(oldHands[1]!, (_, index) => {
      return index !== indexFromHand;
    });
  }
  return [newCropsHand, newGoodsHand];
};

const updateMilpasAndEdges = (
  isYourBoard: boolean,
  slotType: SlotType | undefined,
  yourOldMilpa: readonly BoardSlot[][],
  yourOldEdges: readonly BoardSlot[][],
  opponentsOldMilpa: readonly BoardSlot[][],
  opponentsOldEdges: readonly BoardSlot[][],
  slot: BoardSlot,
  card: SelectedCard
): [
  readonly BoardSlot[][] | undefined,
  readonly BoardSlot[][] | undefined,
  readonly BoardSlot[][] | undefined,
  readonly BoardSlot[][] | undefined,
  undefined | AnyCard
] => {
  let yourNewMilpa: readonly BoardSlot[][] | undefined = undefined;
  let yourNewEdges: readonly BoardSlot[][] | undefined = undefined;
  let opponentsNewMilpa: readonly BoardSlot[][] | undefined = undefined;
  let opponentsNewEdges: readonly BoardSlot[][] | undefined = undefined;
  let cardWithModifiers: undefined | AnyCard = undefined;
  if (isYourBoard) {
    if (slotType === "milpa") {
      [yourNewMilpa, cardWithModifiers] = handleNewCardInSlot(
        yourOldMilpa,
        slot.row!,
        slot.column!,
        card.card!
      );
    } else if (slotType === "edge") {
      [yourNewEdges, cardWithModifiers] = handleNewCardInSlot(
        yourOldEdges,
        slot.row!,
        slot.column!,
        card.card!
      );
    }
  } else {
    if (slotType === "milpa") {
      [opponentsNewMilpa, cardWithModifiers] = handleNewCardInSlot(
        opponentsOldMilpa,
        slot.row!,
        slot.column!,
        card.card!
      );
    } else if (slotType === "edge") {
      [opponentsNewEdges, cardWithModifiers] = handleNewCardInSlot(
        opponentsOldEdges,
        slot.row!,
        slot.column!,
        card.card!
      );
    }
  }
  return [
    yourNewMilpa,
    yourNewEdges,
    opponentsNewMilpa,
    opponentsNewEdges,
    cardWithModifiers,
  ];
};
