const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lufga", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
      screens: {
        mobile: "640px",
        mobileBelow: { max: "640px" },
        tablet: "768px",
        tabletBelow: { max: "768px" },
        smallLaptop: "1024px",
        desktop: "1280px",
        bigLaptop: "1440px",
        television: "1536px",
      },
      
      fontSize: {
        8: ["0.5rem", "0.688rem"],
        10: ["0.625rem", "0.938rem"],
        12: ["0.75rem", "1rem"],
        13: ["0.813rem", "1.125rem"],
        14: ["0.875rem", "1.118rem"],
        16: ["1rem", "1.313rem"],
        18: ["1.125rem", "2rem"],
        20: ["1.25rem", "1.688rem"],
        24: ["1.5rem", "2.063rem"],
        40: ["2.5rem", "3.375rem"],
        64: ["4rem", "4.375rem"],
        "sm-15": "0.9375rem", //15px
      },
      
      colors: {
        default: "var(--color-default)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark: "var(--color-dark)",
        "light-green": "var(--color-light-green)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
