import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { BoardSlot } from "../../Realms/Pure/types";
import Good from "../Good/Good";

interface Props {
  slots: ReadonlyArray<BoardSlot>;
  isYourBoard: boolean;
}

const MilpaEdgeVertical = (props: Props) => {
  const context = useGameContext();
  const canInteract = context.canInteractWithCard;

  return (
    <div className="w-20 h-80 bg-mexicanGreen-dark flex flex-col justify-evenly rounded-lg">
      {props.slots.map((boardSlot, index) => {
        return (
          <Good
            key={index}
            boardSlot={boardSlot}
            canInteract={canInteract(props.isYourBoard, boardSlot)}
            isYourBoard={props.isYourBoard}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeVertical;
