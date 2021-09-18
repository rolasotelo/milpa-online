import React from "react";

interface Props {
  text: string;
}

const Crop = (props: Props) => {
  return <div className="w-16 h-16 bg-yellow-900">{props.text}</div>;
};

export default Crop;
