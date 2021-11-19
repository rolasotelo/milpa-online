module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        milpaBeige: {
          light: "#e1d8cc",
          default: "#c3b19a",
          dark: "#61584d",
        },
        milpaBlue: {
          light: "#939aaa",
          default: "#283556",
          dark: "#141a2b",
        },
        milpaPink: {
          light: "#e398b0",
          default: "#c83262",
          dark: "#641931",
        },
        // ! Old Colors, remove when possible
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
      container: {},
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
        "button-menu":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#menu-button-usage')",
        "button-menu-pressed":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#menu-button-pressed-usage')",
        "button-leaderboard":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#leaderboard-button-usage')",
        "button-leaderboard-pressed":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#leaderboard-button-pressed-usage')",
        "button-logo":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#logo-button-usage')",
        "button-logo-pressed":
          "url('https://milpa-cardgame.s3.us-east-2.amazonaws.com/navbar.svg#logo-button-pressed-usage')",
        // ! remove or update
        "button-blue": "url('/static/buttons.svg#blue-button-usage')",
        "button-blue-pressed":
          "url('/static/buttons.svg#blue-button-pressed-usage')",
        "button-pink": "url('/static/buttons.svg#pink-button-usage')",
        "button-pink-pressed":
          "url('/static/buttons.svg#pink-button-pressed-usage')",
        "play-background": "url('/static/welcome.svg#play-background-usage')",
        "nopal-herobox": "url('/static/welcome.svg#nopal-herobox-usage')",
        "milpa-web": "url('/static/welcome.svg#milpa-web-herobox-usage')",
        "mountains-herobox":
          "url('/static/welcome.svg#mountains-herobox-usage')",
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
      margin: {
        "herobox-top-web": "86px",
      },
      width: {
        "button-square": "50px",
        "herobox-web": "960px",
        mountains: "1366",
        // ! Old, remove when possible
        "3/8": "37.5%",
        "2/8": "25%",
      },
      height: {
        "button-square": "50px",
        "herobox-web": "560px",
        // ! Old, remove when possible
        "navbar-height": "50px",
      },
      maxWidth: {
        "navbar-width": "960px",
        "100vw": "100vw",
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
