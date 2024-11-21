/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./about/*.html", "./contacct/*.html", "./documentation/*.html", "./download/*.html", "./features/*.html", "./updates/*.html"],
  theme: {
    extend: {
      screens: {
        "sm":'1px',
        "md":'810px'
      }
    },
  },
  plugins: [],
}

