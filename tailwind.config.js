/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        "cool-05": "#060713",
        "cool-10": "#111233",
        "cool-20": "#1D1F58",
        "cool-30": "#2A2D7E",
        "cool-40": "#373AA4",
        "cool-50": "#4B4FC3",
        "cool-60": "#6F72D3",
        "cool-70": "#8F91E6",
        "cool-80": "#B4B6F3",
        "cool-90": "#DEDFFC",

        "brandShade-10": "#362c17",
        "brandShade-20": "#5a4926",
        "brandShade-30": "#7e6735",
        "brandShade-40": "#a18444",
        "brandShade-50": "#bb9e5e",
        "brandShade-60": "#cab381",
        "brandShade-70": "#d9c9a5",
        "brandShade-80": "#e8dfc9",
        "brandShade-90": "#f7f4ed",

        "brand-50": "#BB9E5E",

        "hl-bright": "#FAFE0B",
        "hl-01": "#F2C25A",
        "hl-01-text": "#7E6735",
        "hl-01-hover": "#E2AC36",
        "hl-02": "#BD8E28",
        "hl-02-hover": "#9E7B2E",
      },
      borderRadius: {
        "radius-sm": "8px",
        "radius-md": "12px",
        "radius-lg": "16px",
        "radius-lg2": "24px",
        "radius-36": "36px",
        "radius-xl": "48px",
      },
      fontSize: {
        "big-title-01": [
          "57.33px",
          {
            lineHeight: "66.5px",
            letterSpacing: "-0.03em",
            fontWeight: "600",
          },
        ],
        h1: [
          "48px",
          {
            lineHeight: "55.78px",
            letterSpacing: "-0.022em",
            fontWeight: "600",
          },
        ],
        h2: [
          "40px",
          {
            lineHeight: "46.4px",
            letterSpacing: "-0.022em",
            fontWeight: "600",
          },
        ],
        h3: [
          "33px",
          {
            lineHeight: "38.3px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        h4: [
          "26.65px",
          {
            lineHeight: "30.9px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        h5: [
          "23px",
          {
            lineHeight: "26.7px",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        h6: [
          "19.2px",
          { lineHeight: "26px", letterSpacing: "0em", fontWeight: "500" },
        ],
        p: [
          "16px",
          { lineHeight: "25.6px", letterSpacing: "0em", fontWeight: "500" },
        ],
        sm: [
          "13.33px",
          { lineHeight: "21.3px", letterSpacing: "0em", fontWeight: "500" },
        ],
        xs: [
          "11.11px",
          { lineHeight: "17.8px", letterSpacing: "0em", fontWeight: "500" },
        ],
      },
    },
  },
  plugins: [],
};
