import React, { ReactElement, ReactNode } from "react";
import LayoutGameNew from "../../Components/LayoutGame/LayoutGameNew";

interface PropsWithChildren {
  children: ReactNode;
}

function Layout(props: PropsWithChildren): ReactElement {
  const { children } = props;
  return (
    <div className="flex-1 flex flex-row-reverse tablet:flex-col w-full ">
      {children}
    </div>
  );
}
function Card(props: { color: string }) {
  const { color } = props;
  return (
    <div
      className={`w-leaderboard-card-small h-leaderboard-card-small bg-card-${color}`}
    ></div>
  );
}

function CardPlaceholder() {
  return (
    <div className="w-leaderboard-card-small h-leaderboard-card-small">
      {" "}
      1/16
    </div>
  );
}

function Cards() {
  return (
    <div className="flex flex-row justify-between w-20 tablet:w-full p-3 bg-milpaPink-light h-milpa tablet:h-44">
      <Card color="green" />
      <Card color="green" />
      <Card color="green" />
      <Card color="green" />
      <Card color="pink" />
      <Card color="pink" />
      <Card color="pink" />
      <CardPlaceholder />
    </div>
  );
}

function Milpa() {
  return (
    <div className="h-64 w-64 tablet:h-milpa tablet:w-milpa bg-yellow-800 m-3"></div>
  );
}

function Info() {
  return <div className="h-milpa w-64 bg-yellow-600"></div>;
}

function Boards() {
  return (
    <div className="flex-auto flex flex-col tablet:flex-row justify-evenly items-center w-full tablet:p-4 bg-milpaGreen-light">
      <Milpa />
      <Info />
      <Milpa />
    </div>
  );
}

export default function GameNew(): ReactElement {
  const players = {
    local: "Rolando",
    remote: "Gabinkova",
  };
  return (
    <LayoutGameNew players={players} scores={["0", "0"]} yourTurn={true}>
      <Layout>
        <Cards />
        <Boards />
      </Layout>
    </LayoutGameNew>
  );
}
