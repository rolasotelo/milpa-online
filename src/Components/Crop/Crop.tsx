import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
}

const Crop = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="w-16 h-16 mx-auto bg-yellow-900 flex justify-center rounded-md">
      <button onClick={context.onClickCrop}>{props.text}</button>
    </div>
  );
};

export default Crop;
