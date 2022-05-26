import React, { createContext, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const RandomNicknames = [
  "Tomate con pena",
  "Quelite Feliz",
  "Curious Pumpkin",
  "Sad Potatoe",
  "Rozzlobený pepř",
  "Kouzelné fazole",
];

type CreateGameContextType = {
  nickname: string;
  onClickCreate: () => void;
  onClickJoin: (code: string) => void;
  onChangeNickname: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateGameContext = createContext<CreateGameContextType>(null!);

interface Props {
  children: JSX.Element;
}

function CreateGameProvider(props: Props) {
  const { children } = props;
  const history = useHistory();
  const [nickname, setNickname] = useState(
    RandomNicknames[Math.floor(Math.random() * 6)]
  );

  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length <= 20){
      setNickname(event.target.value);
    }
  };

  const onClickCreate = useMemo(
    () => () => {
      history.push(`/play/${uuidv4()}`, { nickname });
    },
    [history, nickname]
  );

  const onClickJoin = useMemo(
    () => (code: string) => {
      history.push(`/play/${code}`, { nickname });
    },
    [history, nickname]
  );

  const context = useMemo(
    () => ({ nickname, onClickCreate, onClickJoin, onChangeNickname }),
    [nickname, onClickCreate, onClickJoin]
  );

  return (
    <CreateGameContext.Provider value={context}>
      {children}
    </CreateGameContext.Provider>
  );
}

export default CreateGameProvider;
