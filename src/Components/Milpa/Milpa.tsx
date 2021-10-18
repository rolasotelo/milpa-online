import React from "react";
import { flatten } from "underscore";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { Edge } from "../../Realms/Pure/enums";
import { BoardForDisplay, BoardSlot } from "../../Realms/Pure/types";
import Crop from "../Crop/Crop";
import MilpaEdgeHorizontal from "../MilpaEdgeHorizontal/MilpaEdgeHorizontal";
import MilpaEdgeVertical from "../MilpaEdgeVertical/MilpaEdgeVertical";
import StatusBoard from "../StatusBoard/StatusBoard";

interface Props {
  boardForDisplay: Readonly<BoardForDisplay> | undefined;
}

const Milpa = (props: Props) => {
  const context = useGameContext();
  const canInteract = context.canInteractWithCard;
  const topEdgeSlots: ReadonlyArray<BoardSlot> = props.boardForDisplay
    ? props.boardForDisplay.board.edges[Edge.Top]
    : [];
  const leftEdgeSlots: ReadonlyArray<BoardSlot> = props.boardForDisplay
    ? props.boardForDisplay.board.edges[Edge.Left]
    : [];
  const rightEdgeSlots: ReadonlyArray<BoardSlot> = props.boardForDisplay
    ? props.boardForDisplay.board.edges[Edge.Right]
    : [];
  const downEdgeSlots: ReadonlyArray<BoardSlot> = props.boardForDisplay
    ? props.boardForDisplay.board.edges[Edge.Down]
    : [];
  const isYourMilpa = !!props.boardForDisplay?.isYourMilpa;
  const unFlatennedMilpas: Readonly<BoardSlot[][]> = props.boardForDisplay
    ? props.boardForDisplay.board.milpa
    : [];
  const milpas: ReadonlyArray<BoardSlot> = flatten(unFlatennedMilpas);

  return (
    <div className="flex flex-col bg-mexicanGreen-light w-3/8 rounded-2xl">
      <div className="p-1">
        <StatusBoard />
      </div>
      <div className="flex flex-col items-center h-full">
        <MilpaEdgeHorizontal isYourMilpa={isYourMilpa} slots={topEdgeSlots} />
        <div className="flex flex-row items-center justify-evenly w-full px-1">
          <MilpaEdgeVertical isYourMilpa={isYourMilpa} slots={leftEdgeSlots} />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center rounded-lg"
          >
            {milpas.map((boardSlot, index) => {
              return (
                <Crop
                  key={index}
                  boardSlot={boardSlot}
                  canInteract={canInteract(isYourMilpa, boardSlot)}
                />
              );
            })}
          </div>
          <MilpaEdgeVertical isYourMilpa={isYourMilpa} slots={rightEdgeSlots} />
        </div>
        <MilpaEdgeHorizontal isYourMilpa={isYourMilpa} slots={downEdgeSlots} />
      </div>
    </div>
  );
};

export default Milpa;
