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
    <div className="relative flex-col w-screen overflow-x-hidden">
      <div className="relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web mt-5 md:mt-herobox-top-web">
        <div className="absolute -inset-y-14 -left-44 h-brush-pink-3 w-brush-pink-3 bg-brush-pink-3" />
        <div className="absolute -inset-y-52 -right-44 h-brush-pink-4 w-brush-pink-4 bg-brush-pink-4" />
        <div className="relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-inset ring-milpaBlue-dark">
          <div className="flex flex-row  h-full">
            <div className="flex flex-col w-72 items-center m-5">
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
            <div className="flex flex-col w-full h-full mt-6 mr-10">
              <div className="col-span-5 w-full h-32 bg-milpaBeige-default ring-8 ring-inset ring-milpaBeige-dark drop-shadow-2xl">
                <div className="flex flex-col items-center h-full justify-center text-milpaGreen-default text-center">
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
                    Bianca Dunn
                  </p>
                </div>
              </div>
              <div className="row-span-2 col-span-4">
                <div className="flex flex-row m-1 pt-3 pl-20 relative">
                  <div
                    className="absolute inset-y-32 -left-36 m-1 text-milpaBeige-default w-80 text-right"
                    style={{
                      fontWeight: 400,
                      fontFamily: "goodlife-sans-condensed, sans-serif",
                      fontStyle: "normal",
                      fontSize: "3rem",
                      transform: "rotate(-90deg)",
                    }}
                  >
                    Quidem Similique Illum Est
                  </div>
                  <div className="flex flex-row">
                    <div
                      className="m-5 text-milpaBeige-default leading-relaxed text-justify"
                      style={{
                        fontWeight: 400,
                        fontFamily: "bookmania, sans-serif",
                        fontStyle: "normal",
                        fontSize: "1rem",
                      }}
                    >
                      Sit cum aut ullam non quibusdam excepturi cumque ullam
                      eligendi quisquam animi quasi voluptate pariatur
                      consequatur. Quis exercitationem molestiae temporibus
                      libero dolor. Mollitia quaerat quibusdam voluptas qui quod
                      possimus quod exercitationem ipsum culpa. Assumenda aut
                      delectus et et similique. Sed cumque ut qui officiis vero
                      officia voluptas eos doloremque.
                    </div>
                    <div
                      className="mt-5 mb-5 ml-5 text-milpaBeige-default leading-relaxed text-justify"
                      style={{
                        fontWeight: 400,
                        fontFamily: "bookmania, sans-serif",
                        fontStyle: "normal",
                        fontSize: "1rem",
                      }}
                    >
                      Dolores vero qui rerum numquam earum hic. Reiciendis est
                      vitae et est alias in rerum consequatur sed culpa sed
                      nostrum maiores. Tenetur nisi id recusandae. Non enim
                      cumque minus eligendi dolorem vero est corporis
                      dignissimos aut minima aperiam illum dolores. Id
                      consequuntur incidunt dolorem sunt magnam natus vero
                      cumque voluptas ad magni voluptatibus. Esse dolorem maxime
                      non similique.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
