import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  text: string;
}

const Good = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="w-16 h-16 mx-auto bg-yellow-900 flex justify-center">
      <button onClick={context.onClickCrop}>{props.text}</button>
    </div>
  );
};

export default Good;
