/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cartBlue: "#001F82",
        cartButton: "#01D7C5",
        cartButtonHover: "#ffec9a",
      },
    },
  },
  plugins: [],
};
