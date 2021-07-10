import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { GameRoutePropsType } from "../../common/types";
import socket from "../../common/socket/socket";
import newSocket from "../../common/socket/socket";

type GameContextType = {
  nickname: string;
  gameCode: string;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: GameRoutePropsType;
}

const GameProvider = (props: Props) => {
  const nickname = props.routerProps.location.state.nickname;
  const gameCode = props.routerProps.match.params.gamecode;

  useEffect(() => {
    const socket = newSocket(gameCode);
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to server");
    });
    socket.on("room join", (message) => {
      console.log(message);
    });
    return () => {};
  }, [props]);

  return (
    <GameContext.Provider value={{ nickname, gameCode }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
