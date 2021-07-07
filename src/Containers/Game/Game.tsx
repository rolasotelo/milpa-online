import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {}

const Game = (props: Props) => {
  const context = useGameContext();
  return <div>Milpa Game</div>;
};

export default Game;
