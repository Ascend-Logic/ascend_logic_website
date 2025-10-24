/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-geist-sans)', 'var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }