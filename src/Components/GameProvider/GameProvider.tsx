import React, { createContext, useEffect, useState } from "react";
import { WAITING_TIME } from "../../common/constants";
import { dealCropsHand, dealGoodsHand, newGame } from "../../common/game/game";
import newSocket from "../../common/socket/socket";
import {
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

type GameContextType = {
  nickname: string | undefined;
  gameCode: string;
  players: Users;
  isPlaying: boolean;
  onClickCrop: () => void;
  cropsHand: Crop[];
  goodsHand: Good[];
  isYourTurn: boolean;
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
  const [milpas, setMilpas] = useState<Milpa[]>([]);
  const [cropsDeck, setCropsDeck] = useState<Crop[]>([]);
  const [goodsDeck, setGoodsDeck] = useState<Good[]>([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [cropsHand, setCropsHand] = useState<Crop[]>([]);
  const [goodsHand, setGoodsHand] = useState<Good[]>([]);
  const isYourTurn = players[0]?.gameStatus.yourTurn;

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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
