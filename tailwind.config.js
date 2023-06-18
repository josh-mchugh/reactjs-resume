export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [
        'mt-6',
        'mt-10',
        'mt-12',
        'border-white',
        'border-gray-700'
    ],
    theme: {
        extend: {
            fontFamily: {
                'Roboto': ['Roboto', 'Open Sans', 'system-ui']
            },
            fontSize: {
                '3xs': '0.5rem',
                '2xs': '0.625rem',
            },
            colors: {
                'primary-dark': '#11212f',
                'accent': '#2bb0e1'
            }
        }
    },
    plugins: []
};
