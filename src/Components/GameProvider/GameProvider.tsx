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
  Good,
  Milpa,
  User,
  Users,
} from "../../common/types";
import {
  handleConnectionError,
  handleConnectionOrReconnection,
  handleFirstUserConnection,
  handlePlayerDisconnection,
  handleRoomFilled,
  handleSession,
  handleStartGame,
  handleUserConnection,
  handleUsers,
} from "./handlers/gameHandlers";

type YourMilpa = {
  isYourMilpa: boolean;
  milpa: Milpa | undefined;
};

type GameContextType = {
  nickname: string | undefined;
  gameCode: string;
  players: Users;
  isPlaying: boolean;
  onClickCrop: () => void;
  cropsHand: Crop[];
  goodsHand: Good[];
  isYourTurn: boolean;
  cardSelected: Crop | Good | undefined;
  onClickCard: (card: Crop | Good) => void;
  yourMilpa: YourMilpa;
  otherMilpa: YourMilpa;
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
  const gameCode = props.routerProps.match.params.gamecode;

  const [players, setPlayers] = useState<Users>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [socket, _] = useState(newSocket(gameCode, nickname));
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
  const isYourTurn = players[0]?.gameStatus.yourTurn;

  const yourMilpa = {
    isYourMilpa: true,
    milpa: milpas[0],
  };
  const otherMilpa = {
    isYourMilpa: false,
    milpa: milpas[1],
  };

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
    const { cropsDeck, goodsDeck, emptyMilpa } = newGame();
    const { cropsHand: newCropsHand, newCropsDeck } = dealCropsHand(cropsDeck);
    const { goodsHand: newGoodsHand, newGoodsDeck } = dealGoodsHand(goodsDeck);
    setMilpas([emptyMilpa, emptyMilpa]);
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

  // const updateGameStatus = () => {
  //   const sessionID = sessionStorage.getItem("sessionID");
  //   const newGameStatus: GameStatus = {
  //     ...players[0].gameStatus,
  //     score: 1,
  //     milpas: [
  //       ["1", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  //       ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  //     ],
  //   };

  //   socket.emit("player action", sessionID, newGameStatus);
  //   console.log("players", players);
  //   console.log("new game status", newGameStatus);
  // };

  const onClickCrop = () => {
    // updateGameStatus();
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

  // * only supposed to run once, at the beginning
  useEffect(() => {
    handleConnectionOrReconnection(socket, sessionStorage, nickname);

    socket.on("connect_error", (err) => {
      handleConnectionError(err);
    });

    socket.on("room filled", () => {
      handleRoomFilled(props.routerProps, nickname);
    });

    socket.on("start game", () => {
      handleStartGame(setIsPlaying);
    });

    socket.on("player disconnected", ({ userID, nickname }) => {
      handlePlayerDisconnection(setIsPlaying);
    });

    socket.on("users", (users: Users) => {
      handleUsers(users, setPlayers, socket);
    });

    socket.once("user connected", (user: User) => {
      handleFirstUserConnection(user, players, setPlayers);
    });

    socket.on("session", ({ sessionID, userID, roomCode, gameStatus }) => {
      handleSession(sessionID, userID, nickname, socket);
    });

    return () => {
      socket.off("connect_error");
    };
  }, [props]);

  // * every time players update a new "user connected" listener is needed
  useEffect(() => {
    socket.on("user connected", (user: User) => {
      handleUserConnection(user, players, setPlayers);
    });

    return () => {};
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        nickname,
        gameCode,
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
