import React from "react";
import HeroBoxImage from "../../../static/hero-box.png";

interface Props {}

const HeroBox = (props: Props) => {
  return (
    <div
      className="w-7/12 h-96 bg-contain bg-no-repeat px-auto"
      style={{ backgroundImage: `url(${HeroBoxImage})` }}
    >
      <div className="flex justify-center">
        <button
          className="bg-white border-4 border-mexicanBlue rounded-full px-8 my-32"
          onClick={() => {}}
        >
          PLAY
        </button>
      </div>
    </div>
  );
};

export default HeroBox;
