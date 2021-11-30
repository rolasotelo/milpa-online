import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HeroBox from "../../Components/HeroBox";
import Infographic from "../../Components/Infographic/Infographic";
import Layout from "../../Components/Layout";

interface Props {}

export const Welcome = (props: Props) => {
  const { t } = useTranslation();
  const h = useHistory();
  return (
    <Layout>
      <div className="flex justify-center relative">
        <HeroBox
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
        <div className="absolute inset-x-0 top-32  md:top-44 bg-mountains-herobox mx-auto max-w-100vw md:w-mountains h-mountains" />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor mt-32 md:mt-32 mb-6 md:mb-0  mx-auto" />

      <div className="relative flex justify-center">
        <Infographic />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor mt-10 md:mt-14 mb-10 md:mb-14  mx-auto" />
    </Layout>
  );
};
