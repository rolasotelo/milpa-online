import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
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
      onClick={(params) => {}}
    >
      {props.text}
    </button>
  );
};

export default Good;
