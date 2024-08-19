import type { Config } from 'tailwindcss';

export const baseConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: '360px',
      tablet: '768px',
      desktop: '1024px',
      desktopLg: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
};

const config: Config = {
  ...baseConfig,
};

export default config;
