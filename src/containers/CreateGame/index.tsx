import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import Layout from "../../components/Layout";
import Nickname from "./Nickname";
import useCreateGameContext from "../../providers/CreateGameProvider/useCreateGameContext";

function CreateOrJoinGame() {
  const context = useCreateGameContext();
  return (
    <Layout>
      <Nickname
        nickname={context.nickname}
        onChange={context.onChangeNickname}
        greeting="Hello"
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <CreateGame onClickCreate={context.onClickCreate} text="Create" />
        <JoinGame onClickJoin={context.onClickJoin} text="Join" />
      </div>
    </Layout>
  );
}

export default hot(CreateOrJoinGame);
