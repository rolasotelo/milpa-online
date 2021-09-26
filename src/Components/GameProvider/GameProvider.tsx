import React, { createContext, useEffect, useState } from "react";
import { WAITING_TIME } from "../../common/constants";
import { cropIds } from "../../common/game/crops/crops";
import { dealCropsHand, dealGoodsHand, newGame } from "../../common/game/game";
import { goodIds } from "../../common/game/goods/goods";
import newSocket from "../../common/socket/socket";
import {
  AnyCard,
  Crop,
  CropAndGoodSlots,
  GameRoutePropsType,
  GameStatus,
  Good,
  Milpa,
  User,
} from "../../common/types";
import {
  handleConnectionError,
  handleConnectionOrReconnection,
  handleFirstUserConnection,
  handleOkStartGame,
  handleStartUpdateMilpa,
  handlePlayerDisconnection,
  handleRoomFilled,
  handleSessionSaved,
  handleStartGame,
  handleStartGameHandshake,
  handleUserConnection,
  handleUsersInRoom,
  UserPlusSessionIDAndRoomCode,
} from "./handlers/gameHandlers";

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
  cardSelected: Crop | Good | undefined;
  onClickCard: (card: Crop | Good) => void;
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
  onClickCropSlot: (
    card: AnyCard,
    position: {
      column: number;
      row: number;
    }
  ) => void;
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

  // + Game
  const [milpas, setMilpas] = useState<Milpa[] | Array<undefined>>([
    undefined,
    undefined,
  ]);
  const [cropsDeck, setCropsDeck] = useState<Crop[]>([]);
  const [goodsDeck, setGoodsDeck] = useState<Good[]>([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [cardSelected, setCardSelected] = useState<Crop | Good | undefined>(
    undefined
  );

  const isYourTurn = !!(
    players && players[0]?.gameStatus?.playerTurn === players[0]?.userID
  );

  let yourMilpa = undefined;
  let otherMilpa = undefined;
  let cropsHand: Crop[] = [];
  let goodsHand: Good[] = [];
  if (
    players &&
    players[0]?.userID &&
    players[1]?.userID &&
    typeof players[0]?.gameStatus?.milpas !== "undefined"
  ) {
    const milpaMap = new Map(Object.entries(players[0]?.gameStatus?.milpas));
    yourMilpa = {
      isYourMilpa: true,
      milpa: milpaMap.get(players[0]?.userID),
    };
    otherMilpa = {
      isYourMilpa: false,
      milpa: milpaMap.get(players[1]?.userID),
    };
  }
  if (
    players &&
    typeof players[0].gameStatus?.cropsHand !== "undefined" &&
    typeof players[0].gameStatus?.goodsHand !== "undefined"
  ) {
    cropsHand = players[0].gameStatus.cropsHand;
    goodsHand = players[0].gameStatus.goodsHand;
  }

  const canCardInMilpaSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownEmptyMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersEmptyMilpaSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected?.canInteractWith.ownFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.ownFilledMilpaSlots !== "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected?.canInteractWith.othersFilledMilpaSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.othersFilledMilpaSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownFilledMilpaSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersFilledMilpaSlots)),
    };
  };

  const canCardInEdgeSlot = (isYourMilpa: boolean) => {
    return {
      interactWithEmptySlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownEmptyEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersEmptyEdgeSlots)),
      interactWithOtherCardsInOwnFilledSlot:
        typeof cardSelected?.canInteractWith.ownFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.ownFilledEdgeSlots !== "boolean",
      interactWithOtherCardsInOthersFilledSlots:
        typeof cardSelected?.canInteractWith.othersFilledEdgeSlots !==
          "undefined" &&
        typeof cardSelected?.canInteractWith.othersFilledEdgeSlots !==
          "boolean",
      interactWithFilledSlot:
        isYourTurn &&
        ((isYourMilpa && !!cardSelected?.canInteractWith.ownFilledEdgeSlots) ||
          (!isYourMilpa &&
            !!cardSelected?.canInteractWith.othersFilledEdgeSlots)),
    };
  };

  const canCardInteractWithFilledSlot = (
    anyCard: AnyCard,
    isYourMilpa: boolean,
    interactWithOtherCardsInOwnFilledSlot: boolean,
    interactWithOtherCardsInOthersFilledSlots: boolean,
    interactWithFilledSlot: boolean,
    ownCardsCardSelectedCanInteractWith: (cropIds | goodIds)[],
    othersCardsCardSelectedCanInteractWith: (cropIds | goodIds)[]
  ) => {
    if (interactWithOtherCardsInOwnFilledSlot) {
      let canInteract = false;
      if (isYourMilpa) {
        ownCardsCardSelectedCanInteractWith.forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && isYourTurn;
    } else if (interactWithOtherCardsInOthersFilledSlots) {
      let canInteract = false;
      if (!isYourMilpa) {
        othersCardsCardSelectedCanInteractWith.forEach((cropId) => {
          if (cropId === anyCard.id) {
            canInteract = true;
          }
        });
      }

      return canInteract && isYourTurn;
    } else {
      return interactWithFilledSlot;
    }
  };

  const onClickCard = (card: Crop | Good) => {
    setCardSelected(card);
  };

  const onClickCropSlot = (
    card: AnyCard,
    position: { column: number; row: number }
  ) => {
    handleStartUpdateMilpa(socket, card, position, players);
  };

  useEffect(() => {
    if (!isPlaying) {
      const id = setTimeout(() => {
        // props.routerProps.history.push("/play", { nickname });
        // sessionStorage.removeItem("sessionID");
        // socket.disconnect();
      }, WAITING_TIME * 1000);
      setIdTimeout(id);
    } else {
      if (idTimeout) {
        clearTimeout(idTimeout);
      }
    }
    return () => {};
  }, [isPlaying]);

  // * only supposed to run once, at the beginning
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
      handleStartGame(players, setPlayers, sessionID, users, socket);
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

  // * every time players update a new "user connected" listener is needed
  useEffect(() => {
    const listenerStartGameHandshake = (gameStatus: GameStatus) => {
      handleStartGameHandshake(players, setPlayers, gameStatus, socket);
    };
    socket.on("start game handshake", listenerStartGameHandshake);

    return () => {
      socket.off("start game handshake", listenerStartGameHandshake);
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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
