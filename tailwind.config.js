/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'liv-black': '#0a0a0a',
        'liv-gold': '#d4af37',
        'liv-red': '#e74c3c',
        'liv-gray': '#2a2a2a',
      },
      fontFamily: {
        'hip-hop': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
