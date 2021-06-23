import React from "react";
import { hot } from "react-hot-loader/root";
import Layout from "../../Components/Layout/Layout";

interface Props {}

const WelcomePage = (props: Props) => {
  return (
    <Layout>
      <h1 className="text-4xl text-black">MILPA</h1>
      <a href="/play">A play</a>
    </Layout>
  );
};

export default hot(WelcomePage);
