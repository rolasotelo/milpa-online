import React from "react";
import useGameContext from "../../Hooks/useGameContext/useGameContext";
import { Crop } from "../../Realms/Pure/types";

interface Props {
  crop: Crop;
  index: number;
}

const CropCard = (props: Props) => {
  const context = useGameContext();
  return (
    <button
      onClick={() => {
        context.onSelectCard(props.crop, props.index);
      }}
    >
      <div className="bg-mexicanBone m-2 h-14 rounded-lg  hover:ring-4 hover:ring-mexicanPink">
        <div className="flex flex-col p-1">
          <p>{`${props.crop.icon} - ${props.crop.name} : ${props.crop.description} ${props.crop.resume}`}</p>
        </div>
      </div>
    </button>
  );
};

export default CropCard;
