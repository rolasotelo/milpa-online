import React from "react";
import { pluck } from "underscore";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { BoardSlot } from "../../Realms/Pure/types";

interface Props {
  boardSlot: Readonly<BoardSlot>;
  canInteract: boolean;
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
        if (context.selectedCard) {
          context.onSelectSlot(context.selectedCard, props.boardSlot);
        }
      }}
    >
      {pluck(props.boardSlot.cards, "icon").toString()}
    </button>
  );
};

export default Good;
