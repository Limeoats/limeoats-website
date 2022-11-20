/** @type {import('tailwindcss').Config} */
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
                main: "Raleway, sans-serif",
            },
        },
    },
    plugins: [],
};
