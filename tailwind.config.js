import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,css}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}', // hero ui
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['IranSans', 'sans-serif'],
      },
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [heroui()],
};
