/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pre: ["Pretendard-Regular"],
        exo: ["Exo2"],
        mont: ["montserrat"],
      },
      fontSize: {
        h1: ["2.8rem", { lineHeight: "3.36rem" }],
        h2: ["2.4rem", { lineHeight: "2.88rem" }],
        h3: ["2rem", { lineHeight: "2.4rem" }],
        title1: ["2.4rem", { lineHeight: "2.88rem" }],
        title2: ["2rem", { lineHeight: "2.4rem" }],
        title3: ["1.6rem", { lineHeight: "1.92rem" }],
        body1: ["2rem", { lineHeight: "3rem" }],
        body2: ["1.6rem", { lineHeight: "2.4rem" }],
        body3: ["1.4rem", { lineHeight: "2.1rem" }],
        label1: ["1.6rem", { lineHeight: "2.4rem" }],
        label2: ["1.4rem", { lineHeight: "2.1rem" }],
        label3: ["1.2rem", { lineHeight: "1.8rem" }],
      },
      colors: {
        background: ["#100d28"],
        jsBgColor: ["#F0DB4F"],
        jsTxColor: ["#323330"],
        reactBgColor: ["#61DBFB"],
        reactTxColor: ["#FDFDFD"],
        nextBgColor: ["#4A1985"],
        nextTxColor: ["#FDFDFD"],
        etcBgColor: ["#FDFDFD"],
        etcTxColor: ["#323330"],
      },
      textColor: {
        primary: ["rgba(74,9,121,1)"],
      },
      padding: {
        edge: ["3.36rem"],
        inner: ["1rem"],
      },
      backgroundImage: {
        primaryG:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,9,121,1) 35%, rgba(0,212,255,1) 100%)",
      },
      animation: {
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
