import React, { createContext, useEffect, useState } from "react";
import { WAITING_TIME } from "../../common/constants";
import { cropIds } from "../../common/game/crops/crops";
import { dealCropsHand, dealGoodsHand, newGame } from "../../common/game/game";
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
  handleFirstUserConnection,
  handleOkStartGame,
  handlePlayerDisconnection,
  handleRoomFilled,
  handleSessionSaved,
  handleStartGame,
  handleStartGameHandshake,
  handleUserConnection,
  handleUsersInRoom,
  UserPlusSessionID,
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
  onClickCrop: () => void;
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
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const GameProvider = (props: Props) => {
  let nickname: string = "";
  if (props.routerProps.location.state?.nickname) {
    nickname = props.routerProps.location.state.nickname;
  }
  const roomCode = props.routerProps.match.params.gamecode;

  const [players, setPlayers] = useState<User[]>([
    { self: true, connected: true, nickname: nickname },
    { self: false, connected: true, nickname: "Waiting..." },
  ]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [socket, _] = useState(newSocket(roomCode, nickname));
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
  const [cropsHand, setCropsHand] = useState<Crop[]>([]);
  const [goodsHand, setGoodsHand] = useState<Good[]>([]);
  const isYourTurn = !!(
    players && players[0]?.gameStatus?.playerTurn === players[0]?.userID
  );

  console.log("players in provider", players);
  let yourMilpa = undefined;
  let otherMilpa = undefined;
  if (
    players &&
    players[0]?.userID &&
    players[1]?.userID &&
    typeof players[0]?.gameStatus?.milpas !== "undefined" &&
    typeof players[0]?.gameStatus?.milpas?.get === "function"
  ) {
    console.log("milpas antes del error", players[0]?.gameStatus?.milpas);
    yourMilpa = {
      isYourMilpa: true,
      milpa: players[0]?.gameStatus?.milpas?.get(players[0]?.userID),
    };
    otherMilpa = {
      isYourMilpa: false,
      milpa: players[0]?.gameStatus?.milpas?.get(players[1]?.userID),
    };
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

  useEffect(() => {
    const { cropsDeck, goodsDeck, emptyMilpa, sampleMilpa } = newGame();
    const { cropsHand: newCropsHand, newCropsDeck } = dealCropsHand(cropsDeck);
    const { goodsHand: newGoodsHand, newGoodsDeck } = dealGoodsHand(goodsDeck);
    setMilpas([emptyMilpa, sampleMilpa]);
    setCropsDeck(newCropsDeck);
    setGoodsDeck(newGoodsDeck);
    setCropsHand(newCropsHand);
    setGoodsHand(newGoodsHand);
    setCurrentTurn(1);
    return () => {};
  }, []);

  const onClickCard = (card: Crop | Good) => {
    setCardSelected(card);
  };

  const onClickCrop = () => {};

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

    socket.on("session saved", (user: UserPlusSessionID) => {
      handleSessionSaved(user, socket);
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
      socket.off("connect_error");
    };
  }, [props]);

  // * every time players update a new "user connected" listener is needed
  useEffect(() => {
    // socket.on("user connected", (user: User) => {
    //   handleUserConnection(user, players, setPlayers);
    // });
    //console.log("new players in use effect", players);
    socket.on("start game handshake", (gameStatus: GameStatus) => {
      handleStartGameHandshake(players, setPlayers, gameStatus, socket);
    });

    return () => {};
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        nickname,
        roomCode,
        players,
        isPlaying,
        onClickCrop,
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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
