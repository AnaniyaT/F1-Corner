/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    theme: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'pop': ['Poppins'],
        'body': ['"Open Sans"'],
      }
    },

    extend: {},
  },
  plugins: [],
}

