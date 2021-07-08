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
    const socket = io("http://localhost:3000");
    return () => {};
  }, [props]);

  return (
    <GameContext.Provider value={{ nickname, gameCode }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
