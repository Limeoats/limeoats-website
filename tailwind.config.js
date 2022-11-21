/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "limeoats-green": "#159957",
            },
            fontFamily: {
                main: ['var(--font-raleway)', ...fontFamily.sans],
            },
        },
    },
    plugins: [],
};
