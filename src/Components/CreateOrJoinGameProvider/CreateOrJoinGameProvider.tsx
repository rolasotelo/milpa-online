import React, { createContext } from "react";

type JoinOrCreateGameContextType = {
  nickname: string;
};

export const CreateOrJoinGameContext =
  createContext<JoinOrCreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
}

const CreateOrJoinGameProvider = (props: Props) => {
  const nickname = "Gabinka";

  return (
    <CreateOrJoinGameContext.Provider value={{ nickname }}>
      {props.children}
    </CreateOrJoinGameContext.Provider>
  );
};

export default CreateOrJoinGameProvider;
