import React from "react";

interface Props {
  onClick: () => void;
  text: string;
}

const HeroBox = (props: Props) => {
  return (
    <div className="relative flex-col w-screen overflow-x-hidden">
      <div className="relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web mt-5 md:mt-herobox-top-web">
        <div className="absolute -inset-y-20 -left-40 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
        <div className="absolute -inset-y-8 -right-40 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
        <div className=" relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-offset-0 ring-milpaBlue-dark mt-5 md:mt-herobox-top-web">
          <div className="absolute inset-x-0 md:-top-94px bg-nopal-herobox mx-auto max-w-100vw w-20.38rem h-herobox-web md:w-nopal-herobox md:h-nopal-herobox"></div>
          <div className="absolute inset-x-0 top-170px bg-milpa-mobile md:bg-milpa-web mx-auto w-milpa-mobile h-milpa-mobile md:w-milpa-web md:h-milpa-web">
            <button
              className="z-10 absolute -top-64 md:-top-60 right-0 md:right-10 bg-button-blue w-52 h-24 mt-32 md:mt-56 focus:outline-none focus:bg-button-blue-pressed pl-6 pt-5 focus:pl-4 focus:pt-3"
              onClick={props.onClick}
              style={{
                fontFamily: "goodlife-serif, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "2.25rem",
              }}
            >
              {props.text}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
