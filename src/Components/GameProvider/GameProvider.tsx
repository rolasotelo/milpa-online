import React, { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { GameRoutePropsType } from "../../common/types";

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
    const socket = io("http://localhost:3000", {
      query: {
        gameCode,
      },
    });
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
