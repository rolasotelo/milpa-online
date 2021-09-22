import React from "react";

interface Props {
  title: string;
}

const CropCard = (props: Props) => {
  return <div className="bg-mexicanBone m-1 h-24">{props.title}</div>;
};

export default CropCard;
