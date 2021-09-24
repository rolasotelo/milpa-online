import React from "react";
import { Good } from "../../common/types";

interface Props {
  good: Good;
}

const GoodCard = (props: Props) => {
  return (
    <div className="bg-mexicanBone w-20 h-32 rounded-lg">
      <div className="flex flex-col p-1">
        <h1>{`${props.good.icon} ${props.good.name}`}</h1>
        <p>{props.good.resume}</p>
      </div>
    </div>
  );
};

export default GoodCard;
