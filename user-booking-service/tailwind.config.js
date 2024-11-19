/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "Stellar-White": "#f5f5f5",
        "Deep-Space-Blue": "#102A3E",
        "Deep-Space-Blue2": "#104166",
        "Sky-Aqua": "#67E8E4",
        Teal: "#127475",
      },
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"], //Exo 2 (Headlines and CTAs)
        lato: ['"Lato"', "sans-serif"], //Lato (Body Text and Descriptions)
        // kud: ["Kud"],
        kud: ['"Kudryashev Display Sans"'],
        FG: ['"Familjen Grotesk"'],
      },
      keyframes: {
        loopColor: {
          "0%, 100%": { color: "#127475" },
          "50%": { color: "#67E8E4" },
        },
        loopScale: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        loopUnderline: {
          "0%, 100%": { width: "16px" },
          "50%": { width: "32px" },
        },
      },
      animation: {
        loopColor: "loopColor 2s ease-in-out infinite",
        loopScale: "loopScale 2s ease-in-out infinite",
        loopUnderline: "loopUnderline 2s ease-in-out infinite",
      },
      // Add custom styles for select option hover
    },
  },
};
