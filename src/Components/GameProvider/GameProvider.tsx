import React, { createContext, useState } from "react";
import { StaticContext } from "react-router";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { RoutePropsType } from "../../common/types";

type GameContextType = {
  nickname: string;
};

export const GameContext = createContext<GameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: RoutePropsType;
}
const socket = io("http://localhost:3000", { autoConnect: false });

const GameProvider = (props: Props) => {
  const [nickname, setNickname] = useState("Gabinka");

  return (
    <GameContext.Provider value={{ nickname }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameProvider;
