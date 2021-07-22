import React from "react";
import { hot } from "react-hot-loader/root";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Layout from "../../Components/Layout/Layout";

interface Props {}

const WelcomePage = (props: Props) => {
  return (
    <Layout>
      <HeroBox />{" "}
    </Layout>
  );
};

export default hot(WelcomePage);
