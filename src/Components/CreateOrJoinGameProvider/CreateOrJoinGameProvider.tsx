import React, { createContext, useState } from "react";
import { io } from "socket.io-client";

type JoinOrCreateGameContextType = {
  nickname: string;
};

export const CreateOrJoinGameContext =
  createContext<JoinOrCreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
}
const socket = io("http://localhost:3000");

const CreateOrJoinGameProvider = (props: Props) => {
  const [nickname, setNickname] = useState("Gabinka");

  socket.on("chat message", (msg: string) => {
    setNickname(msg);
  });

  return (
    <CreateOrJoinGameContext.Provider value={{ nickname }}>
      {props.children}
    </CreateOrJoinGameContext.Provider>
  );
};

export default CreateOrJoinGameProvider;
