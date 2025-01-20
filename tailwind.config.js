/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-45': 
            'linear-gradient(45deg, #ffed4a, #ff3860)',
        'gradient-to-135': 
            'linear-gradient(135deg, #ffed4a, #ff3860)',
        // You can add more custom classes here
      })
    },
  },
  plugins: [],
}

