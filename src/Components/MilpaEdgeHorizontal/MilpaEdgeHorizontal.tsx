import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { BoardSlot } from "../../Realms/Pure/types";
import Good from "../Good/Good";

interface Props {
  slots: ReadonlyArray<BoardSlot>;
  isYourBoard: boolean;
}

const MilpaEdgeHorizontal = (props: Props) => {
  const context = useGameContext();
  const canInteract = context.canInteractWithCard;

  return (
    <div className="h-20 w-80 bg-mexicanGreen-dark flex flex-row items-center rounded-lg">
      {props.slots.map((boardSlot, index) => {
        return (
          <Good
            key={index}
            boardSlot={boardSlot}
            canInteract={canInteract(props.isYourBoard, boardSlot)}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeHorizontal;
