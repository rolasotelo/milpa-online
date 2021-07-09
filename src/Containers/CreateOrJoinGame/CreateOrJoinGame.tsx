import React, { useContext } from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "../../Components/CreateGame/CreateGame";
import JoinGame from "../../Components/JoinGame/JoinGame";
import Layout from "../../Components/Layout/Layout";
import Nickname from "../../Components/Nickname/Nickname";
import useJoinOrCreateGameContext from "../../Hooks/useCreateOrJoinGameContext/useCreateOrJoinGameContext";

interface Props {}

const CreateOrJoinGame = (props: Props) => {
  const context = useJoinOrCreateGameContext();
  return (
    <Layout>
      <Nickname nickname={context.nickname} />
      <div className="flex flex-row justify-evenly py-5">
        <JoinGame onClickJoin={context.onClickJoin} />
        <CreateGame onClickCreate={context.onClickCreate} />
      </div>
    </Layout>
  );
};

export default hot(CreateOrJoinGame);
