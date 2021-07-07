import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { RoutePropsType } from "../../common/types";

type JoinOrCreateGameContextType = {
  nickname: string;
  onClickCreate: () => void;
};

export const CreateOrJoinGameContext =
  createContext<JoinOrCreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: RoutePropsType;
}
const socket = io("http://localhost:3000", { autoConnect: false });

const CreateOrJoinGameProvider = (props: Props) => {
  const [nickname, setNickname] = useState("Gabinka");

  const onClickCreate = () => {
    props.routerProps.history.push(`/play/${uuidv4()}`);
  };

  return (
    <CreateOrJoinGameContext.Provider value={{ nickname, onClickCreate }}>
      {props.children}
    </CreateOrJoinGameContext.Provider>
  );
};

export default CreateOrJoinGameProvider;
