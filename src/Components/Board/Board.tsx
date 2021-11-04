import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { Players } from "../../Realms/Pure/enums";
import Calendar from "../Calendar/Calendar";
import Cards from "../Cards/Cards";
import Milpa from "../Milpa/Milpa";
import ScorePopOver from "../ScorePopOver/ScorePopOver";

interface Props {}

const Board = (props: Props) => {
  const context = useGameContext();
  const boardsForDisplay = context.boards;

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <Calendar />
        <ScorePopOver />
      </div>

      <div className="flex flex-row h-38rem ">
        <Milpa boardForDisplay={boardsForDisplay[Players.You]} />
        <Cards />
        <Milpa boardForDisplay={boardsForDisplay[Players.Opponent]} />
      </div>
    </div>
  );
};

export default Board;
