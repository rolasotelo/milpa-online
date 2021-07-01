import React from "react";
import { hot } from "react-hot-loader/root";
import Layout from "../../Components/Layout/Layout";

interface Props {}

const WelcomePage = (props: Props) => {
  return <Layout>Bienvenido a Milpa</Layout>;
};

export default hot(WelcomePage);
