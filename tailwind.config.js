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
        milpaGreen: {
          light: "#7c8c03",
          default: "#324001",
          dark: "#1a2601",
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
        "nopal-herobox": "url('/static/welcome.svg#nopal-herobox-usage')",
        "milpa-web": "url('/static/welcome.svg#milpa-web-herobox-usage')",
        "milpa-mobile": "url('/static/welcome.svg#milpa-mobile-herobox-usage')",
        "mountains-herobox":
          "url('/static/welcome.svg#mountains-herobox-usage')",
        nopal: "url('/static/welcome.svg#nopal-usage')",
        "corn-box": "url('/static/welcome.svg#corn-box-usage')",
        "create-background":
          "url('/static/create.svg#create-background-usage')",
        "join-background": "url('/static/create.svg#join-background-usage')",
        "green-banner": "url('/static/banners.svg#green-banner-usage')",
        "green-banner-mobile":
          "url('/static/banners.svg#green-banner-mobile-usage')",
        "brush-green-1": "url('/static/art.svg#brush-green-1-usage')",
        "brush-pink-1": "url('/static/art.svg#brush-pink-1-usage')",
        "brush-pink-2": "url('/static/art.svg#brush-pink-2-usage')",
        "brush-pink-3": "url('/static/art.svg#brush-pink-3-usage')",
        "brush-pink-4": "url('/static/art.svg#brush-pink-4-usage')",
        "symbol-corner-1": "url('/static/art.svg#symbol-corner-1-usage')",
        "symbol-corner-2": "url('/static/art.svg#symbol-corner-2-usage')",
        "symbol-corner-3": "url('/static/art.svg#symbol-corner-3-usage')",
        "symbol-corner-4": "url('/static/art.svg#symbol-corner-4-usage')",
        "symbol-divisor": "url('/static/art.svg#symbol-divisor-usage')",
        "card-gold": "url('/static/leaderboard.svg#card-gold-usage')",
        "card-green": "url('/static/leaderboard.svg#card-green-usage')",
        "card-pink": "url('/static/leaderboard.svg#card-pink-usage')",
        farmer: "url('/static/leaderboard.svg#farmer-usage')",
      },
      margin: {
        "herobox-top-web": "86px",
      },
      screens: {
        tablet: "960px",
      },
      width: {
        "button-square": "50px",
        "herobox-web": "960px",
        mountains: "1366px",
        "milpa-web": "590px",
        "milpa-mobile": "205px",
        "nopal-herobox": "900px",
        "symbol-divisor": "196px",
        "brush-pink-1": "287px",
        "brush-pink-2": "267px",
        "brush-pink-3": "278px",
        "brush-pink-4": "373px",
        "brush-green-1": "875px",
        nopal: "353px",
        "corn-box": "156px",
        "leaderboard-card": "172px",
        "leaderboard-card-small": "133.432px",
        farmer: "504px",
        // ! Old, remove when possible
        "3/8": "37.5%",
        "2/8": "25%",
      },
      height: {
        "button-square": "50px",
        "herobox-web": "560px",
        mountains: "550px",
        "milpa-web": "220px",
        "milpa-mobile": "276px",
        "nopal-herobox": "650px",
        nopal: "199px",
        "corn-box": "83px",
        "symbol-divisor": "66px",
        "brush-pink-1": "451px",
        "brush-pink-2": "251px",
        "brush-pink-3": "560px",
        "brush-pink-4": "547px",
        "brush-green-1": "504px",
        "leaderboard-card": "232px",
        "leaderboard-card-small": "180px",
        farmer: "354px",
        // ! Old, remove when possible
        "navbar-height": "50px",
      },
      maxWidth: {
        "navbar-width": "960px",
        "100vw": "100vw",
      },
      inset: {
        "-94px": "-94px",
        "170px": "165px",
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
