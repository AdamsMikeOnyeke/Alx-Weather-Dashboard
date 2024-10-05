/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#9588E8',
        'custom-black' :'#373737'// Add your custom color
    },
    backdropBlur: {
      // Extend backdrop blur options if needed
      'lg': '10px',  // You can customize this value
    },
    },
  },
  plugins: [],
}