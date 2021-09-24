import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import CacaoBoard from "../CacaoBoard/CacaoBoard";
import Crop from "../Crop/Crop";
import MilpaEdgeHorizontal from "../MilpaEdgeHorizontal/MilpaEdgeHorizontal";
import MilpaEdgeVertical from "../MilpaEdgeVertical/MilpaEdgeVertical";
import StatusBoard from "../StatusBoard/StatusBoard";

interface Props {
  milpa: (AnyCard | undefined)[];
}

const Milpa = (props: Props) => {
  const context = useGameContext();

  return (
    <div className="flex flex-col bg-mexicanGreen-light w-3/8 rounded-2xl">
      <div className="p-1">
        <StatusBoard />
      </div>
      <div className="flex flex-col items-center h-full">
        <MilpaEdgeHorizontal />
        <div className="flex flex-row items-center justify-evenly w-full px-1">
          <MilpaEdgeVertical />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center rounded-lg"
          >
            {props.milpa.map((anyCard, index) => {
              return (
                <Crop
                  key={index}
                  text={anyCard ? anyCard.icon : ""}
                  canInteract={
                    !!context.cardSelected?.canInteractWith.ownEmptyCropSlots
                  }
                />
              );
            })}
          </div>
          <MilpaEdgeVertical />
        </div>

        <MilpaEdgeHorizontal />
      </div>
    </div>
  );
};

export default Milpa;
