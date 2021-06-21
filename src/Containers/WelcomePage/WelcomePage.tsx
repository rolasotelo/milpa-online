import React from "react";
import { hot } from "react-hot-loader/root";

interface Props {}

const WelcomePage = (props: Props) => {
  return (
    <>
      <h1 className="text-4xl text-white bg-mexicanGreen hover:bg-mexicanGreen-light">
        MILPA
      </h1>
      <a href="/play">A play</a>
    </>
  );
};

export default hot(WelcomePage);
