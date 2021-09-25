import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
  canInteract: boolean;
}

const Crop = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      disabled={!props.canInteract}
      className="disabled:cursor-not-allowed"
      onClick={context.onClickCrop}
    >
      <div
        className={`${
          props.canInteract && "border-2 border-mexicanBone"
        } w-16 h-16 mx-auto bg-yellow-900 hover:bg-yellow-700 flex justify-center items-center rounded-md`}
      >
        {props.text}
      </div>
    </button>
  );
};

export default Crop;
