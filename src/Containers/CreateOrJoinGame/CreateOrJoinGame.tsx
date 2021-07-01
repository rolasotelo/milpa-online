import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "../../Components/CreateGame/CreateGame";
import JoinGame from "../../Components/JoinGame/JoinGame";
import Layout from "../../Components/Layout/Layout";
import Nickname from "../../Components/Nickname/Nickname";

interface Props {}

const CreateOrJoinGame = (props: Props) => {
  return (
    <Layout>
      <Nickname />
      <div className="flex flex-row justify-evenly py-5">
        <JoinGame />
        <CreateGame />
      </div>
    </Layout>
  );
};

export default hot(CreateOrJoinGame);
