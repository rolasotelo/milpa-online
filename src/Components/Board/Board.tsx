import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Calendar from "../Calendar/Calendar";
import Cards from "../Cards/Cards";
import Milpa from "../Milpa/Milpa";

interface Props {}

const Board = (props: Props) => {
  const context = useGameContext();
  let leftMilpa: (AnyCard | undefined)[] = [];
  let rightMilpa: (AnyCard | undefined)[] = [];
  if (context.yourMilpa.milpa && context.otherMilpa.milpa) {
    if (context.yourMilpa.milpa.crops && context.otherMilpa.milpa.crops) {
      leftMilpa = [
        ...context.yourMilpa.milpa.crops[0],
        ...context.yourMilpa.milpa.crops[1],
        ...context.yourMilpa.milpa.crops[2],
        ...context.yourMilpa.milpa.crops[3],
      ];
      rightMilpa = [
        ...context.otherMilpa.milpa?.crops[0],
        ...context.otherMilpa.milpa?.crops[1],
        ...context.otherMilpa.milpa?.crops[2],
        ...context.otherMilpa.milpa?.crops[3],
      ];
    }
  }
  return (
    <div className="flex flex-col">
      <Calendar />
      <div className="flex flex-row h-35rem ">
        <Milpa milpa={leftMilpa} />
        <Cards />
        <Milpa milpa={rightMilpa} />
      </div>
    </div>
  );
};

export default Board;
