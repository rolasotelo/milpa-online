module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mexicanPink: "#d91a60",
        mexicanBlue: "#253659",
        mexicanGreen: {
          dark: "#1a2601",
          DEFAULT: "#324001",
          light: "#7c8c03",
        },
        mexicanBone: "#c7b299",
        mexicanBoneLight: "#C7C3B8",
      },
      spacing: {
        "60rem": "60rem",
        "35rem": "35rem",
        "38rem": "38rem",
        "20.38rem": "20.38rem",
        "27.5rem": "27.5rem",
        "32.5rem": "32.5rem",
        "49.81rem": "49.81rem",
        "4.38rem": "4.38rem",
      },
      backgroundImage: {
        "button-menu": "url('/static/buttons.svg#menu-button-usage')",
        "button-menu-pressed":
          "url('/static/buttons.svg#menu-button-pressed-usage')",
        "button-leaderboard":
          "url('/static/buttons.svg#leaderboard-button-usage')",
        "button-leaderboard-pressed":
          "url('/static/buttons.svg#leaderboard-button-pressed-usage')",
        "button-logo": "url('/static/buttons.svg#logo-button-usage')",
        "button-logo-pressed":
          "url('/static/buttons.svg#logo-button-pressed-usage')",
        "button-blue": "url('/static/buttons.svg#blue-button-usage')",
        "button-blue-pressed":
          "url('/static/buttons.svg#blue-button-pressed-usage')",
        "button-pink": "url('/static/buttons.svg#pink-button-usage')",
        "button-pink-pressed":
          "url('/static/buttons.svg#pink-button-pressed-usage')",
        "play-background": "url('/static/welcome.svg#play-background-usage')",
        "milpa-cardgame": "url('/static/welcome.svg#milpa-cardgame-usage')",
        "milpa-cardgame-mobile":
          "url('/static/welcome.svg#milpa-cardgame-mobile-usage')",
        "create-background":
          "url('/static/create.svg#create-background-usage')",
        "join-background": "url('/static/create.svg#join-background-usage')",
        "green-banner": "url('/static/banners.svg#green-banner-usage')",
        "green-banner-mobile":
          "url('/static/banners.svg#green-banner-mobile-usage')",
      },
      width: {
        "3/8": "37.5%",
        "2/8": "25%",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      borderColor: ["disabled"],
      borderWidth: ["disabled", "hover"],
      cursor: ["disabled"],
      padding: ["focus"],
      ringColor: ["hover"],
      ringWidth: ["hover"],
    },
  },
  plugins: [],
};
