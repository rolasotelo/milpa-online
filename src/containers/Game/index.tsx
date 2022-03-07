import React, { ReactElement } from "react";
import GameLayout from "./GameLayout";
import Table from "./Table";
import Hand from "./Hand";
import PlayMatLayout from "./PlayMatLayout";
import WaitingModal from "../../components/WaitingModal/WaitingModal";
import useGameContext from "../../providers/GameProvider/useGameContext";

export default function Game(): ReactElement {
  const players = {
    local: "Rolando",
    remote: "Gabinkova",
  };
  const { isGameOngoing, nickname, roomCode } = useGameContext();
  return (
    <GameLayout players={players}>
      {!isGameOngoing && (
        <WaitingModal
          title={`Ahoj ${nickname}`}
          body="Share this code with your friend"
          buttonText={roomCode}
        />
      )}
      <PlayMatLayout>
        <Hand />
        <Table />
      </PlayMatLayout>
    </GameLayout>
  );
}
