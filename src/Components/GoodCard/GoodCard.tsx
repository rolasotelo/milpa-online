import React from "react";

interface Props {
  title: string;
}

const GoodCard = (props: Props) => {
  return <div className="bg-mexicanBone w-24 h-32">{props.title}</div>;
};

export default GoodCard;
