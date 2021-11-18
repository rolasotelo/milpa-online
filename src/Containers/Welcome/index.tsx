import React from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../Components/Layout/Layout";

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

  return (
    <Layout>
      <div className="flex-col justify-center">
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
              {` | ${lngs[lng].nativeName}`}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button id="play-button" className="bg-button-blue h-20 w-36">
            {t("welcome.herobox.callToAction")}
          </button>
        </div>
      </div>
    </Layout>
  );
};
