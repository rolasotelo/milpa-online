import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { GoodsSlots } from "../Board/Board";
import CacaoBoard from "../CacaoBoard/CacaoBoard";
import Crop from "../Crop/Crop";
import MilpaEdgeHorizontal from "../MilpaEdgeHorizontal/MilpaEdgeHorizontal";
import MilpaEdgeVertical from "../MilpaEdgeVertical/MilpaEdgeVertical";
import StatusBoard from "../StatusBoard/StatusBoard";
import { cropIds } from "../../common/game/crops/crops";
import { goodIds } from "../../common/game/goods/goods";
import { ROW_SIZE } from "../../common/constants";
import { computeCanCardInteractWithMilpaSlot } from "../GameProvider/utils/helpers";

interface Props {
  milpa: (AnyCard | undefined)[];
  edges: GoodsSlots;
  isYourMilpa: boolean;
}

const Milpa = (props: Props) => {
  const context = useGameContext();
  const canCardInteractWithMilpaSlot = computeCanCardInteractWithMilpaSlot(
    context,
    props.isYourMilpa
  );

  return (
    <div className="flex flex-col bg-mexicanGreen-light w-3/8 rounded-2xl">
      <div className="p-1">
        <StatusBoard />
      </div>
      <div className="flex flex-col items-center h-full">
        <MilpaEdgeHorizontal
          isYourMilpa={props.isYourMilpa}
          anyCards={props.edges.top}
          row={0}
        />
        <div className="flex flex-row items-center justify-evenly w-full px-1">
          <MilpaEdgeVertical
            isYourMilpa={props.isYourMilpa}
            anyCards={props.edges.left}
            row={2}
          />
          <div
            className="w-80 h-80  bg-yellow-800 grid grid-cols-4 py-2
           items-center rounded-lg"
          >
            {props.milpa.map((anyCard, index) => {
              return (
                <Crop
                  key={index}
                  card={anyCard}
                  canInteract={canCardInteractWithMilpaSlot(anyCard)}
                  column={index % ROW_SIZE}
                  row={Math.floor(index / ROW_SIZE)}
                />
              );
            })}
          </div>
          <MilpaEdgeVertical
            isYourMilpa={props.isYourMilpa}
            anyCards={props.edges.right}
            row={3}
          />
        </div>

        <MilpaEdgeHorizontal
          isYourMilpa={props.isYourMilpa}
          anyCards={props.edges.bottom}
          row={1}
        />
      </div>
    </div>
  );
};

export default Milpa;
