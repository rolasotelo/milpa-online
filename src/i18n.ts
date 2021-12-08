import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          welcome: {
            herobox: {
              callToAction: "Play",
              changeLanguage: "Change language",
            },
            infographic: {
              whatisamilpa: "What is a Milpa?",
              quote:
                "English maxime cupiditate aut itaque commodi quis labore recusandae qui fuga reprehenderit consequatur qui officiis non.",
              source: "Bianca Dunn",
              title: "English Similique Illum Est",
              paragraph1: `English vero qui rerum numquam earum hic. Reiciendis est
                vitae et est alias in rerum consequatur sed culpa sed
                nostrum maiores. Tenetur nisi id recusandae. Non enim
                cumque minus eligendi dolorem vero est corporis
                dignissimos aut minima aperiam illum dolores. Id
                consequuntur incidunt dolorem sunt magnam natus vero
                cumque voluptas ad magni voluptatibus. Esse dolorem maxime
                non similique.`,
              paragraph2: `English cum aut ullam non quibusdam excepturi cumque ullam
                eligendi quisquam animi quasi voluptate pariatur
                consequatur. Quis exercitationem molestiae temporibus
                libero dolor. Mollitia quaerat quibusdam voluptas qui quod
                possimus quod exercitationem ipsum culpa. Assumenda aut
                delectus et et similique. Sed cumque ut qui officiis vero
                officia voluptas eos doloremque.`,
            },
          },
        },
      },
      es: {
        translation: {
          welcome: {
            herobox: {
              callToAction: "Jugar",
              changeLanguage: "Cambiar idioma",
            },
            infographic: {
              whatisamilpa: "Qué es una Milpa?",
              quote:
                "Español maxime cupiditate aut itaque commodi quis labore recusandae qui fuga reprehenderit consequatur qui officiis non.",
              title: "Español Similique Illum Est",
              source: "Bianca Dunn",
              paragraph1: `Español vero qui rerum numquam earum hic. Reiciendis est
                vitae et est alias in rerum consequatur sed culpa sed
                nostrum maiores. Tenetur nisi id recusandae. Non enim
                cumque minus eligendi dolorem vero est corporis
                dignissimos aut minima aperiam illum dolores. Id
                consequuntur incidunt dolorem sunt magnam natus vero
                cumque voluptas ad magni voluptatibus. Esse dolorem maxime
                non similique.`,
              paragraph2: `Español cum aut ullam non quibusdam excepturi cumque ullam
                eligendi quisquam animi quasi voluptate pariatur
                consequatur. Quis exercitationem molestiae temporibus
                libero dolor. Mollitia quaerat quibusdam voluptas qui quod
                possimus quod exercitationem ipsum culpa. Assumenda aut
                delectus et et similique. Sed cumque ut qui officiis vero
                officia voluptas eos doloremque.`,
            },
          },
        },
      },
      fr: {
        translation: {
          welcome: {
            herobox: {
              callToAction: "Jouer",
              changeLanguage: "Changer la langue",
            },
            infographic: {
              whatisamilpa: "Qu'est-ce qu'une Milpa?",
              quote:
                "Français maxime cupiditate aut itaque commodi quis labore recusandae qui fuga reprehenderit consequatur qui officiis non.",
              title: "Français Similique Illum Est",
              source: "Bianca Dunn",
              paragraph1: `Français vero qui rerum numquam earum hic. Reiciendis est
                vitae et est alias in rerum consequatur sed culpa sed
                nostrum maiores. Tenetur nisi id recusandae. Non enim
                cumque minus eligendi dolorem vero est corporis
                dignissimos aut minima aperiam illum dolores. Id
                consequuntur incidunt dolorem sunt magnam natus vero
                cumque voluptas ad magni voluptatibus. Esse dolorem maxime
                non similique.`,
              paragraph2: `Français cum aut ullam non quibusdam excepturi cumque ullam
                eligendi quisquam animi quasi voluptate pariatur
                consequatur. Quis exercitationem molestiae temporibus
                libero dolor. Mollitia quaerat quibusdam voluptas qui quod
                possimus quod exercitationem ipsum culpa. Assumenda aut
                delectus et et similique. Sed cumque ut qui officiis vero
                officia voluptas eos doloremque.`,
            },
          },
        },
      },
      cz: {
        translation: {
          welcome: {
            herobox: {
              callToAction: "Hrát",
              changeLanguage: "Změnit jazyk",
            },
            infographic: {
              whatisamilpa: "Co je to Milpa?",
              quote:
                "Čestina maxime cupiditate aut itaque commodi quis labore recusandae qui fuga reprehenderit consequatur qui officiis non.",
              title: "Čestina Similique Illum Est",
              source: "Bianca Dunn",
              paragraph1: `Čestina vero qui rerum numquam earum hic. Reiciendis est
                vitae et est alias in rerum consequatur sed culpa sed
                nostrum maiores. Tenetur nisi id recusandae. Non enim
                cumque minus eligendi dolorem vero est corporis
                dignissimos aut minima aperiam illum dolores. Id
                consequuntur incidunt dolorem sunt magnam natus vero
                cumque voluptas ad magni voluptatibus. Esse dolorem maxime
                non similique.`,
              paragraph2: `Čestina cum aut ullam non quibusdam excepturi cumque ullam
                eligendi quisquam animi quasi voluptate pariatur
                consequatur. Quis exercitationem molestiae temporibus
                libero dolor. Mollitia quaerat quibusdam voluptas qui quod
                possimus quod exercitationem ipsum culpa. Assumenda aut
                delectus et et similique. Sed cumque ut qui officiis vero
                officia voluptas eos doloremque.`,
            },
          },
        },
      },
    },
  });

export default i18n;
