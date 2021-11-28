import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HeroBox from "../../Components/HeroBox";
import Infographic from "../../Components/Infographic/Infographic";
import Layout from "../../Components/Layout";

interface Props {}

export const Welcome = (props: Props) => {
  const { t, i18n } = useTranslation();
  const h = useHistory();
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="absolute inset-y-8 left-16 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
        <div className="absolute inset-y-32 right-8 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
        <HeroBox
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor md:mt-40 md:mb-14  mx-auto" />

      <div className="relative flex justify-center">
        <div className="absolute -inset-y-14 left-14 h-brush-pink-3 w-brush-pink-3 bg-brush-pink-3" />
        <div className="absolute -inset-y-52 right-20 h-brush-pink-4 w-brush-pink-4 bg-brush-pink-4" />
        <Infographic
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor md:mt-14 md:mb-14  mx-auto" />
    </Layout>
  );
};
