/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151D27",
        app: "#FF1744",
        secondary: "#C3D4FF",
        yes: "#42BD60"
      }
    },
  },
  plugins: [],
}

