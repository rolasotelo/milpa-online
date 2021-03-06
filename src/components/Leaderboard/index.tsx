import React from "react";
import { useTranslation } from "react-i18next";
import { PropsWithChildren } from "../../common/interfaces";
import Card from "../Card/LeaderboardCard";

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
      <div className="absolute left-3 top-3 bg-symbol-corner-1 w-8 h-8" />
      <div className="invisible tablet:visible absolute left-3 bottom-3 bg-symbol-corner-3 w-8 h-8" />
      <div className="flex flex-col tablet:flex-row  h-full">{children}</div>
    </div>
  );
}

function BrushStrokesBackground() {
  return (
    <div className="absolute inset-x-10 top-52 tablet:top-6 h-brush-green-1 w-brush-green-1 bg-brush-green-1" />
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col tablet:flex-row-reverse text-milpaBeige-default tablet:max-h-20">
      <div
        className="mr-4 mt-1 text-right"
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
        className="tablet:w-80 mt-5 mr-4 tablet:mr-2 text-right"
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

function Leaders() {
  return (
    <div className="flex fle-row flex-wrap justify-around mx-2 mt-10 tablet:mt-0">
      <Card position={1} score={550} nickname="Trisha Hall" date="18/02/2021" />
      <Card position={2} score={540} nickname="Don Song" date="18/12/2021" />
      <Card position={3} score={537} nickname="Trisha Hall" date="18/02/2021" />
      <Card
        position={4}
        score={530}
        nickname="Dora Golstein"
        date="13/02/2021"
      />
      <Card position={5} score={523} nickname="Tedy Cowan" date="12/01/2021" />
      <div className="w-leaderboard-card tablet:h-leaderboard-card" />
      <Card position={6} score={520} nickname="Inley Li" date="14/11/2021" />
      <Card
        position={7}
        score={511}
        nickname="Deana Pittman"
        date="13/07/2021"
      />
      <Card
        position={8}
        score={509}
        nickname="Dora Golstein"
        date="03/11/2021"
      />
      <Card
        position={9}
        score={508}
        nickname="Alfredo Hall"
        date="16/12/2021"
      />
    </div>
  );
}

function Content() {
  return (
    <div className="flex flex-col w-full pb-5 tablet:pb-0">
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
