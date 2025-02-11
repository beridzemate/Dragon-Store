// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scan all component files
    ],
    theme: {
      extend: {
        colors: {
          primary: "#dc2626" // Asian red theme
        }
      },
    },
    plugins: [],
  }