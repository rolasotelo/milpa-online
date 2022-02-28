import React, {ReactElement} from "react";
import GameLayout from "./GameLayout";
import Table from "./Table";
import Hand from "./Hand";
import PlayMatLayout from "./PlayMatLayout";

export default function Game(): ReactElement {
  const players = {
    local: "Rolando",
    remote: "Gabinkova",
  };
  return (
    <GameLayout players={players} scores={["0", "0"]} yourTurn={true}>
      <PlayMatLayout>
        <Hand />
        <Table />
      </PlayMatLayout>
    </GameLayout>
  );
}
