/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#74043B',
        },
        secondary: {
          500: '#D94B4C',
        },
        tertiary: {
          500: '#F29863',
        },
        neutral: {
          black: '#3A3042',
          white: '#FEFDFE',
        },
      },
    },
  },
  plugins: [],
}
