import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/common/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        borderRadius: {
            sm: 'var(--radius-sm)',
            md: 'var(--radius-md)',
            lg: 'var(--radius-lg)',
            full: 'var(--radius-full)',
        },
        extend: {
            transitionProperty: {
                transform: 'transform',
            },
            colors: {
                primary: {
                    DEFAULT: 'var(--primary-color)',
                    500: 'var(--primary-color)',
                    800: 'var(--primary-color-800)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary-color)',
                    500: 'var(--secondary-color)',
                    800: 'var(--secondary-color-800)',
                },
            },
            boxShadow: {
                full: '0px 0px 50px var(--primary-color)',
            },
        },
    },
    plugins: [],
};
export default config;
