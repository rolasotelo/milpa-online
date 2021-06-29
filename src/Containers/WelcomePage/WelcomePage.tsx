import React from "react";
import { hot } from "react-hot-loader/root";
import Layout from "../../Components/Layout/Layout";
import Nickname from "../../Components/Nickname/Nickname";

interface Props {}

const WelcomePage = (props: Props) => {
  return (
    <Layout>
      <Nickname />
    </Layout>
  );
};

export default hot(WelcomePage);
