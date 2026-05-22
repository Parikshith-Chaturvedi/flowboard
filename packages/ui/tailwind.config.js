const base = require("@flowboard/config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["class"]
};