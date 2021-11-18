import React from "react";
import { useTranslation } from "react-i18next";

interface Languages {
  [index: string]: { nativeName: string };
}
const lngs: Languages = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
  fr: { nativeName: "Français" },
  cz: { nativeName: "Čeština" },
};

interface Props {}

export const Welcome = (props: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <button id="play-button">{t("welcome.herobox.callToAction")}</button>
      <button id="language-button">
        {t("welcome.herobox.changeLanguage")}
      </button>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};
