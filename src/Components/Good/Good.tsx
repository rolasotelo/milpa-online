import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
  canInteract: boolean;
}

const Good = (props: Props) => {
  const context = useGameContext();
  return (
    <div
      className={`${
        props.canInteract && "border-2"
      } w-16 h-16 mx-auto bg-yellow-900 flex justify-center rounded-md`}
    >
      <button disabled={!props.canInteract} onClick={context.onClickCrop}>
        {props.text}
      </button>
    </div>
  );
};

export default Good;
