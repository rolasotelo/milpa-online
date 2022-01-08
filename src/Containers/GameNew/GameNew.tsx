import React, { ReactElement, ReactNode } from "react";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";

interface PropsWithChildren {
  children: ReactNode;
}

function Layout(props: PropsWithChildren): ReactElement {
  const { children } = props;
  return (
    <div className="flex-1 flex flex-row-reverse tablet:flex-col w-full bg-mexicanBoneLight">
      {children}
    </div>
  );
}
function Card() {
  return (
    <div className="w-leaderboard-card-small h-leaderboard-card-small bg-card-pink"></div>
  );
}

function Cards() {
  return (
    <div className="w-20 tablet:w-full p-4 bg-milpaPink-light h-52">
      <Card />
    </div>
  );
}

function Boards() {
  return (
    <div className="flex-auto w-full p-4 bg-milpaGreen-light ">BOARDS</div>
  );
}

export default function GameNew(): ReactElement {
  const players = {
    local: "Rolando",
    remote: "Gabinkova",
  };
  return (
    <LayoutGame players={players} scores={["0", "0"]} yourTurn={true}>
      <Layout>
        <Cards />
        <Boards />
      </Layout>
    </LayoutGame>
  );
}
