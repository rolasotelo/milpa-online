import { filter } from "underscore";
import { handleNewCardInSlot } from "..";
import {
  CROPS_HAND_SIZE,
  GOODS_HAND_SIZE,
  TOTAL_TURNS,
} from "../../../Pure/constants";
import {
  CardType,
  Event,
  ModifierId,
  Players,
  ScoreLogType,
  SlotType,
} from "../../../Pure/enums";
import { deal_hand } from "../../../Pure/game/decks";
import {
  compute_next_stage,
  compute_next_turn,
} from "../../../Pure/game/helpers";
import {
  compute_board_and_score_at_the_end_of_the_game,
  compute_board_and_score_at_the_end_of_turn,
  compute_score_on_card_played,
  generate_start_of_turn_log,
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
  const yourNickname = playersCopy[Players.You].nickname;
  const opponentsNickname = playersCopy[Players.Opponent].nickname;
  const newScoreHistory =
    playersCopy[Players.You].gameStatus!.scoringHistory.slice();
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
  const {
    scores: [
      yourNewScoreBeforeEndTurnScore,
      opponentsNewScoreBeforeEndTurnScore,
    ],
    scoringLog: scoringLogOnCardPlayed,
  } = compute_score_on_card_played(oldScores, cardWithModifiers!);
  newScoreHistory.push({ ...scoringLogOnCardPlayed, name: yourNickname });
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
      scoringLog: yourScoringLogFromTurnEnd,
    } = compute_board_and_score_at_the_end_of_turn(
      yourNewBoardBeforeEndTurnScore,
      yourNewScoreBeforeEndTurnScore,
      oldGameStatus.currentTurn
    );
    newScoreHistory.push({
      ...yourScoringLogFromTurnEnd,
      name: `${yourNickname} - End of turn scoring`,
    });
    const {
      board: opponentsNewBoardAfterEndTurnScore,
      score: opponentsNewScoreAfterEndTurnScore,
      scoringLog: opponentsScoringLogFromTurnEnd,
    } = compute_board_and_score_at_the_end_of_turn(
      opponentsNewBoardBeforeEndTurnScore,
      opponentsNewScoreBeforeEndTurnScore,
      oldGameStatus.currentTurn
    );
    newScoreHistory.push({
      ...opponentsScoringLogFromTurnEnd,
      name: `${opponentsNickname} - End of turn scoring`,
    });
    newScoreHistory.push({
      name: `${yourNickname} - Final score for Turn ${oldGameStatus.currentTurn}`,
      description: [`${yourNewScoreAfterEndTurnScore} 🍫`],
      type: ScoreLogType.Final_Score,
      icon: null,
    });
    newScoreHistory.push({
      name: `${opponentsNickname} - Final score for Turn ${oldGameStatus.currentTurn}`,
      description: [`${opponentsNewScoreAfterEndTurnScore} 🍫`],
      type: ScoreLogType.Final_Score,
      icon: null,
    });
    newScoreHistory.push(generate_start_of_turn_log(newTurn));
    if (newTurn > TOTAL_TURNS) {
      const {
        board: yourNewBoardAfterEndGameScore,
        score: yourNewScoreAfterEndGameScore,
        scoringLog: yourScoringLogFromGameEnd,
      } = compute_board_and_score_at_the_end_of_the_game(
        yourNewBoardAfterEndTurnScore,
        yourNewScoreAfterEndTurnScore
      );
      newScoreHistory.push({
        ...yourScoringLogFromGameEnd,
        name: `${yourNickname} - End of game`,
      });
      const {
        board: opponentsNewBoardAfterEndGameScore,
        score: opponentsNewScoreAfterEndGameScore,
        scoringLog: opponentsScoringLogFromGameEnd,
      } = compute_board_and_score_at_the_end_of_the_game(
        opponentsNewBoardAfterEndTurnScore,
        opponentsNewScoreAfterEndTurnScore
      );
      newScoreHistory.push({
        ...opponentsScoringLogFromGameEnd,
        name: `${opponentsNickname} - End of game`,
      });
      newScoreHistory.push({
        name: `${yourNickname} - Final score`,
        description: [`${yourNewScoreAfterEndGameScore} 🍫`],
        type: ScoreLogType.Final_Score,
        icon: null,
      });
      newScoreHistory.push({
        name: `${opponentsNickname} - Final Score`,
        description: [`${opponentsNewScoreAfterEndGameScore} 🍫`],
        type: ScoreLogType.Final_Score,
        icon: null,
      });

      newScores.set(yourID, yourNewScoreAfterEndGameScore);
      newScores.set(opponentsID, opponentsNewScoreAfterEndGameScore);
      newBoards.set(yourID, yourNewBoardAfterEndGameScore);
      newBoards.set(opponentsID, opponentsNewBoardAfterEndGameScore);
    } else {
      newScores.set(yourID, yourNewScoreAfterEndTurnScore);
      newScores.set(opponentsID, opponentsNewScoreAfterEndTurnScore);
      newBoards.set(yourID, yourNewBoardAfterEndTurnScore);
      newBoards.set(opponentsID, opponentsNewBoardAfterEndTurnScore);
    }

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
      scoringHistory: newScoreHistory,
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
      scoringHistory: newScoreHistory,
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
        { ...card.card!, modifier: [ModifierId.Opponents] }
      );
    } else if (slotType === "edge") {
      [opponentsNewEdges, cardWithModifiers] = handleNewCardInSlot(
        opponentsOldEdges,
        slot.row!,
        slot.column!,
        { ...card.card!, modifier: [ModifierId.Opponents] }
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
