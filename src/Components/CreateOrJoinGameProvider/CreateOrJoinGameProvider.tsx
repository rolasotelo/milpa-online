import React, { createContext } from "react";

type JoinOrCreateGameContextType = {
  nickname: string;
};

export const JoinOrCreateGameContext =
  createContext<JoinOrCreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
}

const CreateOrJoinGameProvider = (props: Props) => {
  const nickname = "Gabinka";

  return (
    <JoinOrCreateGameContext.Provider value={{ nickname }}>
      {props.children}
    </JoinOrCreateGameContext.Provider>
  );
};

export default CreateOrJoinGameProvider;
