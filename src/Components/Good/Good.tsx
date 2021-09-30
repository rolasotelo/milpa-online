import React from "react";
import { AnyCard } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
  canInteract: boolean;
  isYourMilpa: boolean;
  column: number;
  row: number;
}

const Good = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      disabled={!props.canInteract}
      className={`${
        props.canInteract && "border-2 border-mexicanBone"
      } w-16 h-16 mx-auto bg-yellow-900 hover:bg-yellow-700 flex justify-center items-center rounded-md disabled:cursor-not-allowed`}
      onClick={() => {
        if (context.cardSelected) {
          context.onClickGoodSlot(
            context.cardSelected.card!,
            {
              column: props.column,
              row: props.row,
            },
            props.isYourMilpa
          );
        }
      }}
    >
      {props.text}
    </button>
  );
};

export default Good;
