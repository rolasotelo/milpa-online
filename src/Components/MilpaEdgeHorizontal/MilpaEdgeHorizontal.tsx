import React from "react";
import { ROW_SIZE } from "../../common/constants";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { computeCanCardInteractWithEdgeSlot } from "../GameProvider/utils/helpers";
import Good from "../Good/Good";

interface Props {
  anyCards: (AnyCard | undefined)[];
  isYourMilpa: boolean;
  row: number;
}

const MilpaEdgeHorizontal = (props: Props) => {
  const context = useGameContext();
  const canCardInteractWithEdgeSlot = computeCanCardInteractWithEdgeSlot(
    context,
    props.isYourMilpa
  );

  return (
    <div className="h-20 w-80 bg-mexicanGreen-dark flex flex-row items-center rounded-lg">
      {props.anyCards.map((anyCard, index) => {
        return (
          <Good
            key={index}
            text={anyCard ? anyCard.icon : ""}
            canInteract={canCardInteractWithEdgeSlot(anyCard)}
            isYourMilpa={props.isYourMilpa}
            column={index % ROW_SIZE}
            row={props.row}
          />
        );
      })}
    </div>
  );
};

export default MilpaEdgeHorizontal;
