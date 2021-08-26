import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { RoutePropsType } from "../../common/types";

const RandomNicknames = [
  "Tomate con pena",
  "Quelite Feliz",
  "Curious Pumpkin",
  "Sad Potatoe",
  "Rozzlobený pepř",
  "Kouzelné fazole",
];

type JoinOrCreateGameContextType = {
  nickname: string;
  onClickCreate: () => void;
  onClickJoin: (code: string) => void;
  onChangeNickname: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateOrJoinGameContext =
  createContext<JoinOrCreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
  routerProps: RoutePropsType;
}

const CreateOrJoinGameProvider = (props: Props) => {
  const [nickname, setNickname] = useState(
    RandomNicknames[Math.floor(Math.random() * 6)]
  );

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const onClickCreate = () => {
    props.routerProps.history.push(`/play/${uuidv4()}`, { nickname });
  };

  const onClickJoin = (code: string) => {
    props.routerProps.history.push(`/play/${code}`, { nickname });
  };

  return (
    <CreateOrJoinGameContext.Provider
      value={{ nickname, onClickCreate, onClickJoin, onChangeNickname }}
    >
      {props.children}
    </CreateOrJoinGameContext.Provider>
  );
};

export default CreateOrJoinGameProvider;
