import React, { createContext, useEffect, useMemo, useState } from "react";
import newSocket from "../../common/socket/socket";
import {
  handleConnection,
  handleConnectionError,
  handleOkStartGame,
  handlePlayerDisconnection,
  handleRoomFilled,
  handleSessionSaved,
  handleStartGame,
  handleStartGameHandshake,
  handleStartUpdateBoard,
  handleUpdateBoards,
  handleUsersInRoom,
} from "../../Realms/Lesser/handlers";
import { WAITING_TIME } from "../../Realms/Pure/constants";
import { Event, Players } from "../../Realms/Pure/enums";
import {
  compute_boards_for_display,
  compute_can_interact_with_card,
  compute_current_stage,
  compute_current_turn,
  compute_hands,
  compute_is_your_turn,
  create_players,
  ReturnTypeCanInteractWithCard,
} from "../../Realms/Pure/game/helpers";
import {
  BoardForDisplay,
  BoardSlot,
  Crop,
  GameRoutePropsType,
  GameStatus,
  Good,
  Player,
  SelectedCard,
} from "../../Realms/Pure/types";

export type GameContextType = {
  nickname: string;
  roomCode: string;
  isGameOngoing: boolean;
  isYourTurn: boolean | undefined;
  selectedCard: Readonly<SelectedCard>;
  currentTurn: number | undefined;
  currentStage: number | undefined;
  boards: readonly [
    Readonly<BoardForDisplay> | undefined,
    Readonly<BoardForDisplay> | undefined
  ];
  cropsHand: readonly Crop[] | undefined;
  goodsHand: readonly Good[] | undefined;
  canInteractWithCard: ReturnTypeCanInteractWithCard;
  onSelectCard: (
    card: Readonly<Crop> | Readonly<Good>,
    indexFromHand: number
  ) => void;
  onSelectSlot: (
    card: SelectedCard,
    slot: BoardSlot,
    isYourBoard: boolean
  ) => void;
  opponentsNickname: string;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const GameProvider = (props: Props) => {
  const nicknameFromProps = props.routerProps.location.state.nickname;
  const realNickname = nicknameFromProps ? nicknameFromProps : "";
  const roomCodeFromProps = props.routerProps.match.params.gamecode;
  const you = {
    nickname: realNickname,
    self: true,
    connected: true,
  };
  const noSelectedCard = {
    card: undefined,
    type: undefined,
    indexFromHand: undefined,
  };

  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );

  const [nickname, setNickname] = useState(realNickname);
  const [roomCode, setRoomCode] = useState(roomCodeFromProps);
  // TODO test newSocket
  const [socket, _] = useState(newSocket(roomCodeFromProps, realNickname));
  const [isGameOngoing, setIsGameOngoing] = useState(false);
  const [players, setPlayers] = useState<Readonly<[Player, Player]>>(
    create_players(you)
  );
  const [selectedCard, setSelectedCard] =
    useState<Readonly<SelectedCard>>(noSelectedCard);

  const isYourTurn = useMemo(() => compute_is_your_turn(players), [players]);
  const currentTurn = useMemo(() => compute_current_turn(players), [players]);
  const currentStage = useMemo(() => compute_current_stage(players), [players]);
  const boards = useMemo(() => compute_boards_for_display(players), [players]);
  const { cropsHand, goodsHand } = useMemo(
    () => compute_hands(players),
    [players]
  );
  const opponentsNickname = players[Players.Opponent]
    ? players[Players.Opponent].nickname
    : "";
  // TODO how do I use callback ?
  const canInteractWithCard = compute_can_interact_with_card(
    selectedCard,
    isYourTurn,
    currentTurn
  );

  const onSelectCard = (
    card: Readonly<Crop> | Readonly<Good>,
    indexFromHand: number
  ) => {
    const newSelectedCard: Readonly<SelectedCard> = {
      indexFromHand,
      type: card.type,
      card,
    };
    setSelectedCard(newSelectedCard);
  };

  const onSelectSlot = (
    card: SelectedCard,
    slot: BoardSlot,
    isYourBoard: boolean
  ) => {
    handleUpdateBoards(
      card,
      slot,
      isYourBoard,
      players,
      setPlayers,
      setSelectedCard,
      socket
    );
  };

  useEffect(() => {
    if (!isGameOngoing) {
      const id = setTimeout(() => {
        props.routerProps.history.push("/play", { nickname });
        sessionStorage.removeItem("sessionID");
        socket.disconnect();
      }, WAITING_TIME * 1000);
      setIdTimeout(id);
    } else {
      if (idTimeout) {
        clearTimeout(idTimeout);
      }
    }
    return () => {};
  }, [isGameOngoing]);

  useEffect(() => {
    handleConnection(socket, sessionStorage, nickname);

    socket.on(Event.Connection_Error, (err: Error) => {
      handleConnectionError(err);
    });

    socket.on(Event.Session_Saved, (playerPayload: Readonly<Player>) => {
      handleSessionSaved(playerPayload, socket, setNickname, setRoomCode);
    });

    socket.on(Event.Users_In_Room, (playersPayload: ReadonlyArray<Player>) => {
      handleUsersInRoom(playersPayload, setPlayers, socket);
    });

    socket.on(Event.Room_Filled, () => {
      handleRoomFilled(props.routerProps, nickname);
    });

    socket.on(Event.Start_Game, (playersPayload: ReadonlyArray<Player>) => {
      handleStartGame(playersPayload, setPlayers, socket);
    });

    socket.on(Event.Player_Disconnection, () => {
      handlePlayerDisconnection(setIsGameOngoing);
    });

    socket.on(Event.Ok_Start_Game, () => {
      handleOkStartGame(setIsGameOngoing);
    });

    return () => {
      socket.disconnect();
    };
  }, [props]);

  useEffect(() => {
    const listenerStartGameHandshake = (gameStatus: GameStatus) => {
      handleStartGameHandshake(players, setPlayers, gameStatus, socket);
    };
    socket.on(Event.Start_Game_Handshake, listenerStartGameHandshake);

    const listenerStartUpdateMilpa = (gameStatus: GameStatus) => {
      handleStartUpdateBoard(players, setPlayers, gameStatus, socket);
    };
    socket.on(Event.Start_Update_Board, listenerStartUpdateMilpa);

    return () => {
      socket.off(Event.Start_Game_Handshake, listenerStartGameHandshake);
      socket.off(Event.Start_Update_Board, listenerStartUpdateMilpa);
    };
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        nickname,
        opponentsNickname,
        roomCode,
        isGameOngoing,
        isYourTurn,
        cropsHand,
        goodsHand,
        selectedCard,
        currentStage,
        currentTurn,
        boards,
        canInteractWithCard,
        onSelectCard,
        onSelectSlot,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
