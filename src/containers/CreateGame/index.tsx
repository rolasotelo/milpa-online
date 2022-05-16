import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import Layout from "../../components/Layout";
import Nickname from "./Nickname";
import useCreateGameContext from "../../providers/CreateGameProvider/useCreateGameContext";

function CreateOrJoinGame() {
  const context = useCreateGameContext();
  const { onClickCreate, onClickJoin} = context;
  return (
    <Layout>
      <Nickname
        nickname={context.nickname}
        onChange={context.onChangeNickname}
        greeting="Hello"
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center relative">
        <CreateGame onClickCreate={onClickCreate} />
        <JoinGame onClickJoin={onClickJoin} />
        <div className="absolute inset-x-0 top-32  tablet:top-44 bg-mountains-herobox mx-auto max-w-100vw tablet:w-mountains h-mountains" />
      </div>
    </Layout>
  );
}

export default hot(CreateOrJoinGame);
