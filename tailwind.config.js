// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", //optional if you want to add tailwind to your index.html page
    "node_modules/@yext/answers-react-components/lib/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sora"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      colors: {
        "toast-light-orange": "#FFEEDB",
        "toast-orange": "#FFB563",
        "toast-dark-orange": "#F85E00",
        "toast-red": "#A41632",
        "toast-blue": "#17AABE",
        "toast-gray": "#c4c4c442",
      },
      borderRadius: {
        cta: "1rem",
      },
      transitionProperty: {
        "max-h": "max-height",
      },
      animation: {
        shaker: "shaker 0.4s infinite",
      },
      keyframes: {
        shaker: {
          "50%": {
            transform: "rotate(20deg)",
          },
          "100%": {
            transform: "rotate(-20deg)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/line-clamp"),
  ],
};