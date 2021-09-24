import React from "react";
import { Crop } from "../../common/types";
import useGameContext from "../../Hooks/useGameContext/useGameContext";

interface Props {
  crop: Crop;
}

const CropCard = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      onClick={() => {
        context.onClickCard(props.crop);
      }}
    >
      <div className="bg-mexicanBone m-2 h-20 rounded-lg  hover:ring-4 hover:ring-mexicanPink">
        <div className="flex flex-col p-1">
          <h1>{`${props.crop.icon} - ${props.crop.name}`}</h1>
          <p>{`${props.crop.description} ${props.crop.resume}`}</p>
        </div>
      </div>
    </button>
  );
};

export default CropCard;
