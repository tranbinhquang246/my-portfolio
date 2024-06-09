import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/providers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-primary)', 'sans-serif'],
      secondary: ['var(--font-primary)', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors,
        // Define more colors in here
      },
      boxShadow: {
        common: '0px 0px 10px 1px #00000014',
        bootstrap: '0px 0px 56px -8px rgba(0, 0, 0, 0.17)',
      },
      keyframes: {
        loading: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        loadingShimmer: {
          to: {
            backgroundPositionX: '-10%',
          },
        },
        slideTop: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(-50%)', opacity: '1' },
        },
      },
    },
  },
};
export default config;
