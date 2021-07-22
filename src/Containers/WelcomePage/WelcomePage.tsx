import React from "react";
import { hot } from "react-hot-loader/root";
import { GameRoutePropsType } from "../../common/types";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Layout from "../../Components/Layout/Layout";

interface Props {
  routerProps: GameRoutePropsType;
}

const WelcomePage = (props: Props) => {
  console.log(props);
  return (
    <Layout>
      <div className="flex justify-center">
        <HeroBox />
      </div>
    </Layout>
  );
};

export default hot(WelcomePage);
