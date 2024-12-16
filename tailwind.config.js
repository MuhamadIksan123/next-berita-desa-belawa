/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        color: {
          primary: '#0D9488',
          accent: '#eeeeee',
          secondary: '#393e46',
          dark: '#222832',
        },
      },
    },
  },
  plugins: [],
};
