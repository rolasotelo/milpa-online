import React from "react";
import { hot } from "react-hot-loader/root";
import { GameRoutePropsType } from "../../common/types";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Layout from "../../Components/Layout/Layout";

const WelcomePage = (props: GameRoutePropsType) => {
  return (
    <Layout>
      <div className="flex justify-center">
        <HeroBox
          onClick={() => {
            props.history.push("/play");
          }}
        />
      </div>
    </Layout>
  );
};

export default hot(WelcomePage);
