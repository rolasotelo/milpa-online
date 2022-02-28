import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "../../components/CreateGame/CreateGame";
import JoinGame from "../../components/JoinGame/JoinGame";
import Layout from "../../components/Layout";
import Nickname from "../../components/Nickname/Nickname";
import useJoinOrCreateGameContext from "../../providers/CreateGameProvider/useCreateGameContext";

interface Props {}

const HelloTranslator = [
  { greeting: "HELLO", create: "CREATE", join: "JOIN" },
  { greeting: "HOLA", create: "CREAR", join: "UNIRSE" },
  { greeting: "AHOJ", create: "VYTVOřIT", join: "připojit" },
];

const CreateOrJoinGame = (props: Props) => {
  const context = useJoinOrCreateGameContext();
  const HelloBabel = HelloTranslator[Math.floor(Math.random() * 3)];
  return (
    <Layout>
      <Nickname
        nickname={context.nickname}
        onChange={context.onChangeNickname}
        greeting={HelloBabel.greeting}
      />
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <CreateGame
          onClickCreate={context.onClickCreate}
          text={HelloBabel.create}
        />
        <JoinGame onClickJoin={context.onClickJoin} text={HelloBabel.join} />
      </div>
    </Layout>
  );
};

export default hot(CreateOrJoinGame);
