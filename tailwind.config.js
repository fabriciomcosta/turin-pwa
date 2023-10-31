/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-300": "#e8e5e3",
        "gray-600": "#b2aaa4",
        "gray-800": "#2d2a26",
        "gray-100": "#f8f7f7",
        "blackalpha-200": "rgba(0, 0, 0, 0.08)",
        "blackalpha-700": "rgba(0, 0, 0, 0.64)",
        "orange-500": "#da8744",
        "blackalpha-800": "rgba(0, 0, 0, 0.8)",
        "primary-500": "#4a8144",
        darkgray: {
          "100": "#999",
          "200": "#999898",
          "300": "rgba(153, 153, 153, 0.15)",
        },
        black: "#000",
        "blackalpha-50": "rgba(0, 0, 0, 0.04)",
        "secondary-500": "#be6c2b",
        gray1: {
          "100": "#fefdfb",
          "200": "rgba(0, 0, 0, 0.2)",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(255, 255, 255, 0.5)",
        },
      },
      spacing: {},
      fontFamily: {
        "text-sm": "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "6xs": "7px",
      },
    },
    fontSize: {
      lg: "18px",
      smi: "13px",
      mini: "15px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "8xl": "27px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
