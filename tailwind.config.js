/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      black_1: "#3c3c3c",
      black_2: "#767676",
      black_3: "#a5a5a5",
      white: "#ffffff",
      white_0: "#d8d8d8",
      white_1: "#1817174d",
      white_2: "#989898",
      green: "#96fb5a",
      green_1: "#0b7617",
      green_2: "#18501e",
      green_3: "#4bf75c",
      dark_green: "#121e0c",
      dark_green_1: "#0d1407",
      dark_green_2: "#121f0b",
      dark_green_3: "#1e3212",
      red: "#ff3846"
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        fixedsys: ["Fixedsys"],
        overpass_meno : ["DM Sans"],
        poppins: ["Poppins"],
        poppins_semibold: ["Poppins SemiBold", ...defaultTheme.fontFamily.sans],
        pragmatica_bold: ["Pragmatica Bold", ...defaultTheme.fontFamily.sans],
        space_grotesk: ["Space Grotesk"],
        open_sans: ["Open Sans"],
        segoe: ["Segoe UI"],
        segoe_italic: ["Segoe UI Italic"],
        segoe_bold: ["Segoe UI Bold"],
        segoe_bold_italic: ["Segoe UI Bold Italic"],
        asm: ["ASM Regular"]
      },
      backgroundImage: {
        gradient_b_overlay_1: "linear-gradient(90deg, #5446f5 0%, #8075C6 50%, #451483 100%)",
        gradient_black_4: "linear-gradient(0deg, #151515 0%, #282828 100%)",
        gradient_p_1: 'linear-gradient(270deg, rgba(84, 70, 245, 1) 0.0%, rgba(128, 117, 198, 1) 100.01%, rgba(69, 20, 131, 1) 0.1%)',
        gradient_purple: "linear-gradient(90deg, #c160b5 1.1%, #e06f60 100.1%, #f2c045 1.1%)",
      },
      backgroundColor: {
        bg_color_dark: "#000000",
      },
      boxShadow: {
        white_shadow_15: "0px 0px 15px 0px rgba(255, 255, 255, 0.18)",
      },
      screens: {
        ios: "320px",
        samsungS8: "360px",
        xs: "390px",
        sm: "640px",
        md: "768px",
        "2md": "820px",
        "3md": "960px",
        lg: "1024px",
        "2lg": "1080px",
        "3lg": "1180px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
