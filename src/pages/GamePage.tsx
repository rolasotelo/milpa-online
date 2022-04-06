import React from "react";
import { GameProvider } from "../providers/GameProvider";
import Game from "../containers/Game";

export default function GamePage() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}
