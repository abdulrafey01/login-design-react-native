/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundGradient: {
        "custom-gradient":
          "linear-gradient(90deg, #870DC5, #870DC5 49%, #0D0AD4)",
      },
    },
  },
  plugins: [],
};
