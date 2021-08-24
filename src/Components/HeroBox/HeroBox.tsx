import React from "react";
import MilpaName from "../../../static/hero-box.svg";

interface Props {
  onClick: () => void;
}

const HeroBox = (props: Props) => {
  return (
    <div className="w-7/12 h-96 bg-hero-box ring-8 ring-inset ring-black ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <button
            className="bg-white border-4 border-mexicanBlue rounded-full px-8 mt-36"
            onClick={props.onClick}
          >
            PLAY
          </button>
        </div>

        <div className="w-full h-48 bg-milpa-name-mobile md:bg-milpa-name-web"></div>
      </div>
    </div>
  );
};

export default HeroBox;
