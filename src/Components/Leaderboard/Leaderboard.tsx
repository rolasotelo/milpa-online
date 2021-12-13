import React from "react";
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

function Leaderboard() {
  return (
    <Layout>
      <Frame>
        <BrushStrokesBackground />
      </Frame>
    </Layout>
  );
}

export default Leaderboard;
