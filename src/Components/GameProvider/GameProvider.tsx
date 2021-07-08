import React, { createContext, useState } from "react";
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
const socket = io("http://localhost:3000", { autoConnect: false });

const GameProvider = (props: Props) => {
  const [nickname, setNickname] = useState("Gabinka");
  const gameCode = props.routerProps.match.params.gamecode;

  return (
    <GameContext.Provider value={{ nickname, gameCode }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
