import React from "react";
import { Crop } from "../../common/types";

interface Props {
  crop: Crop;
}

const CropCard = (props: Props) => {
  return (
    <div className="bg-mexicanBone m-2 h-20 rounded-lg">
      <div className="flex flex-col p-1">
        <h1>{`${props.crop.icon} - ${props.crop.name}`}</h1>
        <p>{`${props.crop.description} ${props.crop.resume}`}</p>
      </div>
    </div>
  );
};

export default CropCard;
