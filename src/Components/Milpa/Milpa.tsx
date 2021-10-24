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
  const isYourBoard = !!props.boardForDisplay?.isYourBoard;
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
        <MilpaEdgeHorizontal isYourBoard={isYourBoard} slots={topEdgeSlots} />
        <div className="flex flex-row items-center justify-evenly w-full px-1">
          <MilpaEdgeVertical isYourBoard={isYourBoard} slots={leftEdgeSlots} />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center rounded-lg"
          >
            {milpas.map((boardSlot, index) => {
              return (
                <Crop
                  key={index}
                  boardSlot={boardSlot}
                  canInteract={canInteract(isYourBoard, boardSlot)}
                  isYourBoard={isYourBoard}
                />
              );
            })}
          </div>
          <MilpaEdgeVertical isYourBoard={isYourBoard} slots={rightEdgeSlots} />
        </div>
        <MilpaEdgeHorizontal isYourBoard={isYourBoard} slots={downEdgeSlots} />
      </div>
    </div>
  );
};

export default Milpa;
