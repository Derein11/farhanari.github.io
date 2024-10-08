/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    darkMode: "selector",
    content: ["./**/*.{html,js}"],
    theme: {},
    extend: {
        fontFamily: {
            poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        },
        screens: {},
    },
    plugins: [],
};
