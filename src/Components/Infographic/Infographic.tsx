import React from "react";
import { useTranslation } from "react-i18next";

interface Props {}

interface Languages {
  [index: string]: { nativeName: string };
}
const lngs: Languages = {
  cz: { nativeName: "Čeština" },
  es: { nativeName: "Español" },
  en: { nativeName: "English" },
  fr: { nativeName: "Français" },
};

const Infographic = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative flex-col w-screen">
      <div className="relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-offset-0 ring-milpaBlue-dark ">
        <div className="flex flex-row  h-full">
          <div className="flex flex-col w-72 items-center">
            <div
              className="text-mexicanBone w-48 h-60"
              style={{
                fontFamily: "goodlife-sans-condensed, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "3.375rem",
              }}
            >
              {t("welcome.infographic.whatisamilpa")}
            </div>

            <div className="flex flex-col w-48">
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  className={`${
                    i18n.resolvedLanguage === lng
                      ? "text-mexicanGreen-light underline"
                      : "text-mexicanBone"
                  } my-1 text-left`}
                  style={{
                    fontWeight: i18n.resolvedLanguage === lng ? 700 : 400,
                    fontFamily: "goodlife-sans-condensed, sans-serif",
                    fontStyle: "normal",
                    fontSize: "1.5rem",
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {`${lngs[lng].nativeName}`}
                  &#160;
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full h-full">
            <div className="col-span-5 w-full"></div>
            <div className="row-span-2 col-span-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
