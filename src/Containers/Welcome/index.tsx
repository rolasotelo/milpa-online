import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HeroBox from "../../Components/HeroBox";
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
      <div className="flex justify-center mb-40 md:mb-20">
        <HeroBox
          onClick={() => {
            h.push("/play");
          }}
          text={t("welcome.herobox.callToAction")}
        />
      </div>

      <div className="flex justify-center">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {` | ${lngs[lng].nativeName} | `}
            &#160;
          </button>
        ))}
      </div>
    </Layout>
  );
};
