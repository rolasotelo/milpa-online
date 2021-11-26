import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HeroBox from "../../Components/HeroBox";
import Infographic from "../../Components/Infographic/Infographic";
import Layout from "../../Components/Layout";

interface Languages {
  [index: string]: { nativeName: string };
}
const lngs: Languages = {
  en: { nativeName: "English 🇬🇧" },
  es: { nativeName: "Español 🇲🇽" },
  fr: { nativeName: "Français 🇫🇷" },
  cz: { nativeName: "Čeština 🇨🇿" },
};

interface Props {}

export const Welcome = (props: Props) => {
  const { t, i18n } = useTranslation();
  const h = useHistory();
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="absolute inset-y-0 left-0 h-brush-pink-1 w-brush-pink-1 bg-brush-pink-1" />
        <div className="absolute inset-y-0 right-0 h-brush-pink-2 w-brush-pink-2 bg-brush-pink-2" />
        <HeroBox
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
      </div>

      {/* <div className="flex justify-center mt-20">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 700 : 400,
              fontFamily: "bookmania, sans-serif",
              fontStyle: "normal",
              fontSize: "1rem",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {` | ${lngs[lng].nativeName} | `}
            &#160;
          </button>
        ))}
      </div> */}
      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor md:mt-40 md:mb-14  mx-auto" />

      <div className="relative flex justify-center">
        <div className="absolute inset-y-0 left-0 h-brush-pink-3 w-brush-pink-3 bg-brush-pink-3" />
        <div className="absolute inset-y-0 right-0 h-brush-pink-4 w-brush-pink-4 bg-brush-pink-4" />
        <Infographic
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
      </div>

      <div className=" w-symbol-divisor h-symbol-divisor bg-symbol-divisor md:mt-40 md:mb-14  mx-auto" />
    </Layout>
  );
};
