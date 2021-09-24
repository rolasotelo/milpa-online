import React from "react";
import { Good } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  good: Good;
}

const GoodCard = (props: Props) => {
  const context = useGameContext();
  return (
    <div className="bg-mexicanBone w-20 h-32 rounded-lg">
      <button
        onClick={() => {
          context.onClickCard(props.good);
        }}
      >
        <div className="flex flex-col p-1">
          <h1>{`${props.good.icon} ${props.good.name}`}</h1>
          <p>{props.good.resume}</p>
        </div>
      </button>
    </div>
  );
};

export default GoodCard;
