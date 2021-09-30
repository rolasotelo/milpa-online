import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import Calendar from "../Calendar/Calendar";
import Cards from "../Cards/Cards";
import { computeDisplayableBoards } from "../GameProvider/utils/helpers";
import Milpa from "../Milpa/Milpa";

interface Props {}

export type GoodsSlots = {
  top: (AnyCard | undefined)[];
  bottom: (AnyCard | undefined)[];
  left: (AnyCard | undefined)[];
  right: (AnyCard | undefined)[];
};

const Board = (props: Props) => {
  const context = useGameContext();
  const { leftBoard, rightBoard } = computeDisplayableBoards(context);

  return (
    <div className="flex flex-col">
      <Calendar />
      <div className="flex flex-row h-35rem ">
        <Milpa milpa={leftBoard.milpa} edges={leftBoard.edges} isYourMilpa />
        <Cards />
        <Milpa
          milpa={rightBoard.milpa}
          edges={rightBoard.edges}
          isYourMilpa={false}
        />
      </div>
    </div>
  );
};

export default Board;
