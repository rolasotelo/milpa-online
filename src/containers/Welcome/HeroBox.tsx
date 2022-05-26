import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  text: string;
}

interface PropsWithChildren {
  children: ReactNode;
}

function BrushStrokes() {
  return (
    <>
      <div className="absolute -inset-y-20 -left-40 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
      <div className="absolute -inset-y-8 -right-40 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
    </>
  );
}

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative flex-col w-screen overflow-x-hidden">
      <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web h-herobox-web mt-5 tablet:mt-herobox-top-web">
        <BrushStrokes />
        {children}
      </div>
    </div>
  );
}

function Frame(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className=" relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-offset-0 ring-milpaBlue-dark mt-5 tablet:mt-herobox-top-web">
      <div className="absolute left-1 top-1 bg-symbol-corner-1 w-8 h-8" />
      <div className="absolute right-1 top-1 bg-symbol-corner-4 w-8 h-8" />
      {children}
    </div>
  );
}

function PlayButton(props: { onClick: () => void; text: string }) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="z-10 absolute -top-64 tablet:-top-60 right-0 tablet:right-10 bg-button-blue w-52 h-24 mt-32 tablet:mt-56 focus:outline-none focus:bg-button-blue-pressed pl-6 pt-5 focus:pl-4 focus:pt-3"
      onClick={onClick}
      style={{
        fontFamily: "goodlife-serif, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "2.25rem",
      }}
    >
      {text}
    </button>
  );
}

function CallToAction(props: { onClick: () => void; text: string }) {
  const { onClick, text } = props;
  return (
    <>
      <div className="absolute inset-x-0 tablet:-top-94px bg-nopal-herobox mx-auto max-w-100vw w-20.38rem h-herobox-web tablet:w-nopal-herobox tablet:h-nopal-herobox" />
      <div className="absolute inset-x-0 top-170px bg-milpa-mobile tablet:bg-milpa-web mx-auto w-milpa-mobile h-milpa-mobile tablet:w-milpa-web tablet:h-milpa-web">
        <PlayButton onClick={onClick} text={text} />
      </div>
    </>
  );
}

function HeroBox(props: Props) {
  const { onClick, text } = props;

  return (
    <Layout>
      <Frame>
        <CallToAction onClick={onClick} text={text} />
      </Frame>
    </Layout>
  );
}

export default HeroBox;
