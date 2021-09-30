import React from "react";
import { Good } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  good: Good;
  index: number;
}

const GoodCard = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      onClick={() => {
        context.onClickCard(props.good, props.index);
      }}
    >
      <div className="bg-mexicanBone w-20 h-32 rounded-lg hover:bg-mexicanBoneLight hover:ring-4 hover:ring-mexicanPink">
        <div className="flex flex-col p-1">
          <h1>{`${props.good.icon} ${props.good.name}`}</h1>
          <p>{props.good.resume}</p>
        </div>
      </div>
    </button>
  );
};

export default GoodCard;
