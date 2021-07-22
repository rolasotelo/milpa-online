import React from "react";
import HeroBoxImage from "../../../static/hero-box.png";

interface Props {}

const HeroBox = (props: Props) => {
  return (
    <div
      className="w-80 h-96 bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${HeroBoxImage})` }}
    ></div>
  );
};

export default HeroBox;
