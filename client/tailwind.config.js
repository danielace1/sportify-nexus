/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          col1: "#265137",
          col2: "#fff5e9",
          col3: "#ff8a00",
          col4: "#f3faf3",
          col5: "#fbbc04",
        },
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },

    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
};
