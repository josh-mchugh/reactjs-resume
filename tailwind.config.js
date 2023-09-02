export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [
        'border-gray-700',
        'border-white',
        'mt-6',
        'mt-10',
        'mt-12',
        'my-16',
        'pl-8',
        'pt-14',
        'px-7',
        'w-4',
        'w-64'
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
