import React from "react";

interface Props {
  onClick: () => void;
  text: string;
}

const HeroBox = (props: Props) => {
  return (
    <div className="flex-col">
      <div className="relative w-20.38rem mx-auto  md:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-inset ring-black mt-10 md:mt-herobox-top-web">
        <div
          className="absolute inset-x-0 -top-24 md:bg-nopal-herobox mx-auto"
          style={{
            width: "900px",
            height: "650px",
          }}
        ></div>
        <div
          className="absolute inset-x-0 top-36 md:bg-milpa-web mx-auto"
          style={{
            width: "590px",
            height: "220px",
          }}
        >
          {/* <div className="flex flex-col justify-center items-center">
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
                {props.text}
              </button>
            </div>

            <div className="w-72 md:w-11/12 h-80 md:h-52 bg-milpa-cardgame-mobile md:bg-milpa-cardgame"></div>
          </div> */}
        </div>
        <div
          className="absolute inset-y-20 -right-48 md:bg-mountains-herobox mx-auto"
          style={{
            width: "1349px",
            height: "550px",
            maxWidth: "100vw",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroBox;
