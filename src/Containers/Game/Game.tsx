import React from "react";
import LayoutGame from "../../Components/LayoutGame/LayoutGame";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  return <LayoutGame>Game</LayoutGame>;
};

export default Game;
