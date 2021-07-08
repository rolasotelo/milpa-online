import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
import { GameRoutePropsType } from "../../common/types";

type GameContextType = {
  nickname: string;
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
  console.log(gameCode);

  return (
    <GameContext.Provider value={{ nickname }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
