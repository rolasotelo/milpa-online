import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  card: AnyCard | undefined;
  canInteract: boolean;
  column: number;
  row: number;
}

const Crop = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      disabled={!props.canInteract}
      className="disabled:cursor-not-allowed"
      onClick={() => {
        if (context.cardSelected) {
          context.onClickCropSlot(context.cardSelected, {
            column: props.column,
            row: props.row,
          });
        }
      }}
    >
      <div
        className={`${
          props.canInteract && "border-2 border-mexicanBone"
        } w-16 h-16 mx-auto bg-yellow-900 hover:bg-yellow-700 flex justify-center items-center rounded-md`}
      >
        {props.card ? props.card.icon : ""}
      </div>
    </button>
  );
};

export default Crop;
