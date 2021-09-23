import React from "react";

interface Props {
  title: string;
}

const CropCard = (props: Props) => {
  return (
    <div className="bg-mexicanBone m-2 h-20 rounded-lg">{props.title}</div>
  );
};

export default CropCard;
