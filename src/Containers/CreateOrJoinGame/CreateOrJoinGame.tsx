import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "../../Components/CreateGame/CreateGame";
import JoinGame from "../../Components/JoinGame/JoinGame";
import Layout from "../../Components/Layout";
import Nickname from "../../Components/Nickname/Nickname";
import useJoinOrCreateGameContext from "../../Hooks/useCreateOrJoinGameContext/useCreateOrJoinGameContext";

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
