import React from "react";
import { useTranslation } from "react-i18next";
import { PropsWithChildren } from "../../common/interfaces";

function BrushStrokes() {
  return (
    <>
      <div className="absolute inset-y-10 -left-36 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
      <div className="absolute -inset-y-28 -right-36 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
    </>
  );
}

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative flex-col w-screen  overflow-x-hidden">
      <div className="relative w-20.38rem h-herobox-web mx-auto max-w-100vw tablet:w-herobox-web tablet:h-herobox-web mt-5 tablet:mt-herobox-top-web">
        <BrushStrokes />
        {children}
      </div>
    </div>
  );
}

function Frame(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-inset ring-milpaBlue-dark overflow-x-hidden">
      <div className="flex flex-col tablet:flex-row  h-full">{children}</div>
    </div>
  );
}

function BrushStrokesBackground() {
  return (
    <div className="absolute inset-x-10 top-6 h-brush-green-1 w-brush-green-1 bg-brush-green-1" />
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row-reverse text-milpaBeige-default max-h-20">
      <div
        className="mr-4 mt-1"
        style={{
          fontWeight: 400,
          fontFamily: "goodlife-sans-condensed, sans-serif",
          fontStyle: "normal",
          fontSize: "3.375rem",
        }}
      >
        {t("welcome.leaderboard.title")}
      </div>
      <div
        className="w-80 mt-5 mr-2 text-right"
        style={{
          fontWeight: 700,
          fontFamily: "bookmania, sans-serif",
          fontStyle: "normal",
          fontSize: "1rem",
        }}
      >
        {t("welcome.leaderboard.subtitle")}
      </div>
    </div>
  );
}

function Card(props: { position: number }) {
  const { t } = useTranslation();
  const { position } = props;
  const background = (position: number): string => {
    if (position === 1) return "bg-card-gold";
    if (position > 1 && position < 6) return "bg-card-pink";
    return "bg-card-green";
  };
  return (
    <div
      className={`z-20 w-leaderboard-card h-leaderboard-card ${background(
        position
      )}`}
    >
      {position}
    </div>
  );
}

function Leaders() {
  return (
    <div className="flex fle-row flex-wrap justify-around mx-2">
      <Card position={2} />
      <Card position={3} />
      <Card position={4} />
      <Card position={5} />
      <Card position={1} />
      <Card position={6} />
      <Card position={7} />
      <Card position={8} />
      <Card position={9} />
      <div className="w-leaderboard-card h-leaderboard-card" />
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col w-full">
      <Title />
      <Leaders />
    </div>
  );
}

function Leaderboard() {
  return (
    <Layout>
      <Frame>
        <BrushStrokesBackground />
        <Content />
      </Frame>
    </Layout>
  );
}

export default Leaderboard;
