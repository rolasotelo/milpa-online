import React from "react";
import { flatten, map, pluck, without } from "underscore";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { ModifierId } from "../../Realms/Pure/enums";
import { BoardSlot } from "../../Realms/Pure/types";

interface Props {
  boardSlot: Readonly<BoardSlot>;
  canInteract: boolean;
  isYourBoard: boolean;
}

const iconDictionary: Map<string, string> = new Map<string, string>();
iconDictionary.set(ModifierId.Huitlacoche, "🍄");
iconDictionary.set(ModifierId.Tuna, "🍓");
iconDictionary.set(ModifierId.Opponents, "💀");

const Crop = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      disabled={!props.canInteract}
      className="disabled:cursor-not-allowed"
      onClick={() => {
        if (context.selectedCard) {
          context.onSelectSlot(
            context.selectedCard,
            props.boardSlot,
            props.isYourBoard
          );
        }
      }}
    >
      <div
        className={`${
          props.canInteract && "border-2 border-mexicanBone"
        } w-16 h-16 mx-auto bg-yellow-900 hover:bg-yellow-700 flex justify-center items-center rounded-md`}
      >
        <p>{pluck(props.boardSlot.cards, "icon").toString()}</p>
        <p>
          {without(
            map(
              flatten(pluck(props.boardSlot.cards, "modifier")),
              (modifier) => {
                return iconDictionary.get(modifier);
              }
            ),
            undefined
          ).toString()}
        </p>
      </div>
    </button>
  );
};

export default Crop;
