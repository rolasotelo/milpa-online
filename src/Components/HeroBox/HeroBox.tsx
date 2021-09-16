import React from "react";

interface Props {
  onClick: () => void;
}

const PlayTranslator = ["PLAY", "JUGAR", "HRÁT"];

const HeroBox = (props: Props) => {
  const PlayBabel = PlayTranslator[Math.floor(Math.random() * 3)];

  return (
    <div className="w-20.38rem md:mx-8 md:w-60rem h-35rem bg-play-background ring-8 ring-inset ring-black mt-6">
      <div className="flex flex-col justify-center items-center">
        <div>
          <button
            className="bg-button-blue w-52 h-24 mt-32 md:mt-56 focus:outline-none focus:bg-button-blue-pressed pl-3 pb-2 focus:pl-2 focus:pb-1"
            onClick={props.onClick}
            style={{
              fontFamily: "goodlife-sans-condensed, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "2.8rem",
            }}
          >
            {PlayBabel}
          </button>
        </div>

        <div className="w-72 md:w-11/12 h-80 md:h-52 bg-milpa-cardgame-mobile md:bg-milpa-cardgame"></div>
      </div>
    </div>
  );
};

export default HeroBox;
