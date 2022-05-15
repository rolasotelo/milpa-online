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
          menu: {
            body: {
              play: {
                title: "Play",
                description: "Let the best Milpa win 🏆!"
              },
              home: {
                title: "Home",
                description: "Home page 🌽"
              },
              rules: {
                title: "Rules",
                description: "Learn to play the game 👓"
              },
              about: {
                title: "About",
                description: "What is a Milpa 🌵?"
              }
            },
            footer: {
              title: "Languages"
            }
          },
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
                delectus et et similique.`,
              source2: "Beatae Et Voluptatem Vero",
            },
            leaderboard: {
              title: "Leaderboard",
              subtitle:
                "Earum deleniti eligendi ducimus iste consequatur accusantium ab.",
            },
          },
        },
      },
      es: {
        translation: {
          menu: {
            body: {
              play: {
                title: "Jugar",
                description: "Que gane la mejor Milpa 🏆!"
              },
              home: {
                title: "Inicio",
                description: "Pantalla de inicio 🌽"
              },
              rules: {
                title: "Reglas",
                description: "Aprende a jugar 👓"
              },
              about: {
                title: "Acerca de Milpa",
                description: "Qué es una Milpa 🌵?"
              }
            },
            footer: {
              title: "Idiomas"
            }
          },
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
                delectus et et similique.`,
              source2: "Beatae Et Voluptatem Vero",
            },
            leaderboard: {
              title: "Mejores Jugadores",
              subtitle:
                "Earum deleniti eligendi ducimus iste consequatur accusantium ab.",
            },
          },
        },
      },
      fr: {
        translation: {
          menu: {
            body: {
              play: {
                title: "Jouer",
                description: "Que le meilleur Milpa gagne 🏆!"
              },
              home: {
                title: "Page d'accueil",
                description: "Page d'accueil 🌽"
              },
              rules: {
                title: "Règles",
                description: "Apprendre à jouer le jeu 👓"
              },
              about: {
                title: "En savoir plus",
                description: "Qu'est-ce qu'une Milpa? 🌵?"
              }
            },
            footer: {
              title: "Langues"
            }
          },
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
                delectus et et similique.`,
              source2: "Beatae Et Voluptatem Vero",
            },
            leaderboard: {
              title: "Classement",
              subtitle:
                "Earum deleniti eligendi ducimus iste consequatur accusantium ab.",
            },
          },
        },
      },
      cz: {
        translation: {
          menu: {
            body: {
              play: {
                title: "Play",
                description: "Let the best Milpa win 🏆!"
              },
              home: {
                title: "Home",
                description: "Home page 🌽"
              },
              rules: {
                title: "Rules",
                description: "Learn to play the game 👓"
              },
              about: {
                title: "About",
                description: "What is a Milpa 🌵?"
              }
            },
            footer: {
              title: "Languages"
            }
          },
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
                delectus et et similique.`,
              source2: "Beatae Et Voluptatem Vero",
            },
            leaderboard: {
              title: "Žebříčkuz",
              subtitle:
                "Earum deleniti eligendi ducimus iste consequatur accusantium ab.",
            },
          },
        },
      },
    },
  });

export default i18n;
