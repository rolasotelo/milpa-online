import React, { createContext, useEffect, useState } from "react";
import { WAITING_TIME } from "../../common/constants";
import { cropIds } from "../../common/game/crops/crops";
import { goodIds } from "../../common/game/goods/goods";
import newSocket from "../../common/socket/socket";
import {
  AnyCard,
  Crop,
  GameRoutePropsType,
  GameStatus,
  Good,
  Milpa,
  User,
} from "../../common/types";
import {
  handleConnectionError,
  handleConnectionOrReconnection,
  handleOkStartGame,
  handlePlayerDisconnection,
  handleRoomFilled,
  handleSessionSaved,
  handleStartGame,
  handleStartGameHandshake,
  handleStartUpdateMilpa,
  handleUpdateCropInMilpa,
  handleUpdateGoodInMilpa,
  handleUsersInRoom,
  UserPlusSessionIDAndRoomCode,
} from "./handlers/gameHandlers";
import {
  computeCurrentTurn,
  computeHands,
  computeInteractions,
  computeIsYourTurn,
  computeMilpasForDisplay,
} from "./utils/helpers";

type YourMilpa = {
  isYourMilpa: boolean;
  milpa: Milpa | undefined;
};

type GameContextType = {
  nickname: string | undefined;
  roomCode: string;
  players: User[];
  isPlaying: boolean;
  cropsHand: Crop[];
  goodsHand: Good[];
  isYourTurn: boolean;
  cardSelected: {
    card: Crop | Good | undefined;
    index: number;
  };
  onClickCard: (card: Crop | Good, index: number) => void;
  yourMilpa: YourMilpa | undefined;
  otherMilpa: YourMilpa | undefined;
  canCardInMilpaSlot: (isYourMilpa: boolean) => {
    interactWithEmptySlot: boolean;
    interactWithOtherCardsInOwnFilledSlot: boolean;
    interactWithOtherCardsInOthersFilledSlots: boolean;
    interactWithFilledSlot: boolean;
  };
  canCardInteractWithFilledSlot: (
    anyCard: AnyCard,
    isYourMilpa: boolean,
    interactWithOtherCardsInOwnFilledSlot: boolean,
    interactWithOtherCardsInOthersFilledSlots: boolean,
    interactWithFilledSlot: boolean,
    ownCardsCardSelectedCanInteractWith: (cropIds | goodIds)[],
    othersCardsCardSelectedCanInteractWith: (cropIds | goodIds)[]
  ) => boolean;
  canCardInEdgeSlot: (isYourMilpa: boolean) => {
    interactWithEmptySlot: boolean;
    interactWithOtherCardsInOwnFilledSlot: boolean;
    interactWithOtherCardsInOthersFilledSlots: boolean;
    interactWithFilledSlot: boolean;
  };
  onClickCropSlot: (position: { column: number; row: number }) => void;
  onClickGoodSlot: (
    position: {
      column: number;
      row: number;
    },
    isYourMilpa: boolean
  ) => void;
  currenTurn: number | undefined;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const GameProvider = (props: Props) => {
  let nicknameFromLocation: string = "";
  if (props.routerProps.location.state?.nickname) {
    nicknameFromLocation = props.routerProps.location.state.nickname;
  }
  const roomCodeFromLocation = props.routerProps.match.params.gamecode;

  const [players, setPlayers] = useState<User[]>([
    { self: true, connected: true, nickname: nicknameFromLocation },
    { self: false, connected: true, nickname: "Waiting..." },
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [nickname, setNickname] = useState(nicknameFromLocation);
  const [roomCode, setRoomCode] = useState(roomCodeFromLocation);
  const [socket, _] = useState(
    newSocket(roomCodeFromLocation, nicknameFromLocation)
  );
  const [idTimeout, setIdTimeout] = useState<undefined | NodeJS.Timeout>(
    undefined
  );
  const [cardSelected, setCardSelected] = useState<{
    card: Crop | Good | undefined;
    index: number;
  }>({ card: undefined, index: 0 });

  const isYourTurn = computeIsYourTurn(players);
  const currentTurn = computeCurrentTurn(players);
  const { yourMilpa, otherMilpa } = computeMilpasForDisplay(players);
  const { cropsHand, goodsHand } = computeHands(players);
  const {
    canCardInMilpaSlot,
    canCardInEdgeSlot,
    canCardInteractWithFilledSlot,
  } = computeInteractions(isYourTurn, cardSelected);

  const onClickCard = (card: Crop | Good, index: number) => {
    setCardSelected({ card, index });
  };

  const onClickCropSlot = (position: { column: number; row: number }) => {
    handleUpdateCropInMilpa(
      socket,
      cardSelected,
      position,
      players,
      setPlayers,
      setCardSelected
    );
  };

  const onClickGoodSlot = (
    position: { column: number; row: number },
    isYourMilpa: boolean
  ) => {
    handleUpdateGoodInMilpa(
      socket,
      cardSelected,
      position,
      players,
      setPlayers,
      setCardSelected,
      isYourMilpa
    );
  };

  useEffect(() => {
    if (!isPlaying) {
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
  }, [isPlaying]);

  useEffect(() => {
    handleConnectionOrReconnection(socket, sessionStorage, nickname);

    socket.on("connect_error", (err) => {
      handleConnectionError(err);
    });

    socket.on("session saved", (user: UserPlusSessionIDAndRoomCode) => {
      handleSessionSaved(user, socket, setNickname, setRoomCode);
    });

    socket.on("users in room", (users: User[]) => {
      handleUsersInRoom(users, setPlayers, socket);
    });

    socket.on("room filled", () => {
      handleRoomFilled(props.routerProps, nickname);
    });

    socket.on("start game", (sessionID: string, users: User[]) => {
      handleStartGame(setPlayers, users, socket);
    });

    socket.on("player disconnected", ({ userID, nickname }) => {
      handlePlayerDisconnection(setIsPlaying);
    });

    socket.on("ok start game", () => {
      handleOkStartGame(setIsPlaying);
    });

    return () => {
      socket.disconnect();
    };
  }, [props]);

  useEffect(() => {
    const listenerStartGameHandshake = (gameStatus: GameStatus) => {
      handleStartGameHandshake(players, setPlayers, gameStatus, socket);
    };
    socket.on("start game handshake", listenerStartGameHandshake);

    const listenerStartUpdateMilpa = (gameStatus: GameStatus) => {
      handleStartUpdateMilpa(players, setPlayers, gameStatus, socket);
    };
    socket.on("start update milpa", listenerStartUpdateMilpa);

    return () => {
      socket.off("start game handshake", listenerStartGameHandshake);
      socket.off("start update milpa", listenerStartUpdateMilpa);
    };
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        nickname,
        roomCode,
        players,
        isPlaying,
        cropsHand,
        goodsHand,
        isYourTurn,
        cardSelected,
        onClickCard,
        yourMilpa,
        otherMilpa,
        canCardInMilpaSlot,
        canCardInEdgeSlot,
        canCardInteractWithFilledSlot,
        onClickCropSlot,
        onClickGoodSlot,
        currenTurn: currentTurn,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
