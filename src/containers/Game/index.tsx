import React, {ReactElement} from "react";
import LayoutGame from "../../components/LayoutGame/LayoutGame";
import Table from "./Table";
import Hand from "./Hand";
import Layout from "./Layout";

export default function Game(): ReactElement {
  const players = {
    local: "Rolando",
    remote: "Gabinkova",
  };
  return (
    <LayoutGame players={players} scores={["0", "0"]} yourTurn={true}>
      <Layout>
        <Hand />
        <Table />
      </Layout>
    </LayoutGame>
  );
}
