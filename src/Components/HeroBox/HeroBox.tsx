import React from "react";
import MilpaName from "../../../static/hero-box.svg";

interface Props {
  onClick: () => void;
}

const HeroBox = (props: Props) => {
  return (
    <div className="w-20rem md:w-60rem h-35rem bg-hero-box ring-8 ring-inset ring-black ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <button
            className="bg-button-play w-52 h-24 px-8 mt-32 md:mt-56 focus:outline-none"
            onClick={props.onClick}
            style={{
              fontFamily: "goodlife-sans-condensed, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "3rem",
            }}
          >
            PLAY
          </button>
        </div>

        <div className="w-72 md:w-11/12 h-80 md:h-52 bg-milpa-name-mobile md:bg-milpa-name-web"></div>
      </div>
    </div>
  );
};

export default HeroBox;
