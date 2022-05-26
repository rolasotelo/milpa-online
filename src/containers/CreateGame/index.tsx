import React from "react";
import { hot } from "react-hot-loader/root";
import CreateGame from "./CreateGame";
import JoinGame from "./JoinGame";
import Layout from "../../components/Layout";
import Nickname from "./Nickname";
import useCreateGameContext from "../../providers/CreateGameProvider/useCreateGameContext";
import Infographic from "../Welcome/Infographic";

function BrushStrokes() {
  return (
    <>
      <div className="absolute -inset-y-14 -left-32 h-brush-pink-3 w-brush-pink-3 bg-brush-pink-3" />
      <div className="absolute -inset-y-20 -right-32 h-brush-pink-4 w-brush-pink-4 bg-brush-pink-4" />
    </>
  );
}

function PlayAndJoinSections() {
  const context = useCreateGameContext();
  const { onClickCreate, onClickJoin } = context;
  return (
    <div className="relative flex-col max-w-100vw z-10 overflow-x-hidden">
      <div className="relative flex flex-col tablet:flex-row justify-evenly items-center relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web max-w-100vw">
        <CreateGame onClickCreate={onClickCreate} />
        <JoinGame onClickJoin={onClickJoin} />
        <BrushStrokes />
      </div>
    </div>
  );
}

function CreateOrJoinGame() {
  const context = useCreateGameContext();
  const { nickname, onChangeNickname } = context;
  return (
    <Layout>
      <Nickname nickname={nickname} onChange={onChangeNickname} />
      <PlayAndJoinSections />

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor mt-10 tablet:mt-10 mb-6 talet:mb-0  mx-auto" />

      <div id="what_is_a_milpa" className="flex  justify-center">
        <Infographic />
      </div>
      <div className="relative w-20.38rem tablet:w-herobox-web h-10 mx-auto">
        <div className="absolute -bottom-32 tablet:-bottom-5 left-20 tablet:left-44 z-20 bg-corn-box  w-corn-box h-corn-box" />
        <div className="absolute -bottom-28 tablet:bottom-0 -left-44 tablet:-left-20 z-20 bg-nopal  w-nopal h-nopal" />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor mt-36 tablet:mt-10 tablet:mt-14 mb-10 tablet:mb-14  mx-auto" />
    </Layout>
  );
}

export default hot(CreateOrJoinGame);
