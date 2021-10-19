import React from "react";
import { hot } from "react-hot-loader/root";
import HeroBox from "../../Components/HeroBox/HeroBox";
import Layout from "../../Components/Layout/Layout";
import { RoutePropsType } from "../../Realms/Pure/types";

const PlayTranslator = ["PLAY", "JUGAR", "HRÁT"];

const WelcomePage = (props: RoutePropsType) => {
  const PlayBabel = PlayTranslator[Math.floor(Math.random() * 3)];
  return (
    <Layout>
      <div className="flex justify-center">
        <HeroBox
          onClick={() => {
            props.history.push("/play");
          }}
          text={PlayBabel}
        />
      </div>
    </Layout>
  );
};

export default hot(WelcomePage);
