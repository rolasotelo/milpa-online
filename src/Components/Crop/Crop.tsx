import React from "react";
import { pluck } from "underscore";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { BoardSlot } from "../../Realms/Pure/types";

interface Props {
  boardSlot: Readonly<BoardSlot>;
  canInteract: boolean;
}

const Crop = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      disabled={!props.canInteract}
      className="disabled:cursor-not-allowed"
      onClick={() => {
        if (context.selectedCard) {
          context.onSelectSlot(context.selectedCard, props.boardSlot);
        }
      }}
    >
      <div
        className={`${
          props.canInteract && "border-2 border-mexicanBone"
        } w-16 h-16 mx-auto bg-yellow-900 hover:bg-yellow-700 flex justify-center items-center rounded-md`}
      >
        {pluck(props.boardSlot.cards, "icon").toString()}
      </div>
    </button>
  );
};

export default Crop;
