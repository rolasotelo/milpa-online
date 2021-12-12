import React, { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";
import { PropsWithChildren } from "../../common/interfaces";

interface LanguagesObject {
  [index: string]: { nativeName: string; code: string };
}
const languages: LanguagesObject = {
  cz: { nativeName: "Čeština", code: "cz" },
  es: { nativeName: "Español", code: "es" },
  en: { nativeName: "English", code: "en" },
  fr: { nativeName: "Français", code: "fr" },
};

interface EventTargetWithName extends EventTarget {
  name: string;
}

function BrushStrokes() {
  return (
    <>
      <div className="absolute -inset-y-14 -left-44 h-brush-pink-3 w-brush-pink-3 bg-brush-pink-3" />
      <div className="absolute -inset-y-52 -right-44 h-brush-pink-4 w-brush-pink-4 bg-brush-pink-4" />
    </>
  );
}

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative flex-col w-screen  overflow-x-hidden">
      <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web tablet:h-herobox-web mt-5 tablet:mt-herobox-top-web">
        {BrushStrokes()}
        {children}
      </div>
    </div>
  );
}

function Quote() {
  const { t } = useTranslation();
  return (
    <div className="col-span-5 m-5 tablet:m-0 tablet:w-full h-80  tablet:h-32 bg-milpaBeige-default ring-8 ring-inset ring-milpaBeige-dark drop-shadow-2xl">
      <div className="flex flex-col ml-5 mr-5  tablet:m-0 items-center h-full justify-center text-milpaGreen-default text-center">
        <p
          className="max-w-lg"
          style={{
            fontWeight: 400,
            fontFamily: "goodlife-sans-condensed, sans-serif",
            fontStyle: "normal",
            fontSize: "1.5rem",
          }}
        >
          {t("welcome.infographic.quote")}
        </p>
        <p
          className="w-32"
          style={{
            fontWeight: 700,
            fontFamily: "bookmania, sans-serif",
            fontStyle: "normal",
            fontSize: "1rem",
          }}
        >
          {t("welcome.infographic.source")}
        </p>
      </div>
    </div>
  );
}

function Title() {
  const { t } = useTranslation();
  return (
    <div
      className="tablet:absolute tablet:inset-y-32 tablet:-left-28 m-1 pr-5 tablet:pr-0 text-milpaBeige-default w-80 text-right transform tablet:-rotate-90"
      style={{
        fontWeight: 400,
        fontFamily: "goodlife-sans-condensed, sans-serif",
        fontStyle: "normal",
        fontSize: "3rem",
        lineHeight: "3rem",
      }}
    >
      {t("welcome.infographic.title")}
    </div>
  );
}

function FirstParagraph() {
  const { t } = useTranslation();
  return (
    <div
      className="m-5 text-milpaBeige-default leading-relaxed text-justify "
      style={{
        fontWeight: 400,
        fontFamily: "bookmania, sans-serif",
        fontStyle: "normal",
        fontSize: "1rem",
      }}
    >
      {t("welcome.infographic.paragraph1")}
    </div>
  );
}

function SecondParagraph() {
  const { t } = useTranslation();
  return (
    <div
      className="mr-5 tablet:mr-0 mt-5 mb-5 ml-3 text-milpaBeige-default leading-relaxed text-justify"
      style={{
        fontWeight: 400,
        fontFamily: "bookmania, sans-serif",
        fontStyle: "normal",
        fontSize: "1rem",
      }}
    >
      <p>{t("welcome.infographic.paragraph2")}</p>
      <p
        className="mt-5 text-right"
        style={{
          fontWeight: 700,
          fontFamily: "bookmania, sans-serif",
          fontStyle: "normal",
          fontSize: "1rem",
        }}
      >
        {t("welcome.infographic.source2")}
      </p>
    </div>
  );
}

function Paragraphs() {
  return (
    <div className="flex flex-col tablet:flex-row tablet:pl-5">
      <FirstParagraph />
      <SecondParagraph />
    </div>
  );
}

function Content() {
  return (
    <div className="row-span-2 col-span-4">
      <div className="flex flex-col tablet:flex-row m-1 pt-3 tablet:pt-0 tablet:pl-20 relative">
        <Title />
        <Paragraphs />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="flex flex-col w-full tablet:mt-6 mr-10">
      <Quote />
      <Content />
    </div>
  );
}

function WhatIsAMilpa() {
  const { t } = useTranslation();
  return (
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
  );
}

function Frame(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div className="relative w-20.38rem mx-auto max-w-100vw tablet:w-herobox-web tablet:h-herobox-web bg-milpaBlue-default ring-8 ring-inset ring-milpaBlue-dark">
      <div className="flex flex-col tablet:flex-row  h-full">{children}</div>
    </div>
  );
}

function ChangeLanguage() {
  const { i18n } = useTranslation();
  const { resolvedLanguage, changeLanguage } = i18n;
  const change: MouseEventHandler<HTMLButtonElement> = async (e) => {
    const { name: newLanguage } = e.target as EventTargetWithName;
    await changeLanguage(newLanguage);
  };
  return (
    <div className="flex flex-row tablet:flex-col flex-wrap w-48">
      {Object.keys(languages).map((lng) => (
        <button
          key={languages[lng].code}
          name={languages[lng].code}
          className={`${
            resolvedLanguage === lng
              ? "text-mexicanGreen-light underline"
              : "text-mexicanBone"
          } my-1 text-left z-30`}
          style={{
            fontWeight: resolvedLanguage === lng ? 700 : 400,
            fontFamily: "goodlife-sans-condensed, sans-serif",
            fontStyle: "normal",
            fontSize: "1.5rem",
          }}
          type="submit"
          onClick={change}
        >
          {`${languages[lng].nativeName}`}
          &#160;
        </button>
      ))}
    </div>
  );
}

function Languages() {
  return (
    <div className="flex flex-col w-72 items-center mt-5 ml-5 mr-5">
      <WhatIsAMilpa />
      <ChangeLanguage />
    </div>
  );
}

function Infographic() {
  return (
    <Layout>
      <Frame>
        <Languages />
        <Info />
      </Frame>
    </Layout>
  );
}

export default Infographic;
