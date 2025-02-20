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

      colors: {
        background: {
          light: '#F5F5F5',
          dark: '#121212',
        },
        card: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        },
        text: {
          light: '#212121',
          dark: '#E0E0E0',
        },
        primary: {
          light: '#6200EE',
          dark: '#BB86FC',
        },
      },
    },
  },

  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [heroui()],
};
