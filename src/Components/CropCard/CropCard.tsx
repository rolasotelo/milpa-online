import React from "react";

interface Props {
  title: string;
}

const CropCard = (props: Props) => {
  return <div className="bg-mexicanBone  h-28">{props.title}</div>;
};

export default CropCard;
