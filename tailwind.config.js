module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                react: '#61DAFB',
                javascript: '#F7DF1E',
                typescript: '#3178C6',
                tailwind: '#38B2AC',
                nodejs: '#339933',
                black: '#000000',
                white: '#ffffff',
                blue: {
                    50: '#eef4ff',
                    100: '#e0edff',
                    200: '#c6daff',
                    300: '#a5c1ff',
                    400: '#819dff',
                    500: '#1d4ed8', // Your primary blue
                    600: '#1d4ed8',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
                gray: {
                    800: '#1f1f1f',
                    900: '#161616',
                }
            },
            fontFamily: {
                sans: [
                    '"acumin-pro-wide"',
                    '"Acumin Pro Wide"',
                    '"Helvetica Neue"',
                    'Helvetica',
                    'Arial',
                    'sans-serif'
                ],
            },
        },
    },
    plugins: [],
}