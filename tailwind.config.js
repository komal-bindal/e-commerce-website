// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        100: "100%",
        400: "400%",
        "2/5": "40%",
      },
      height: {
        125:"500px",
      },
      animation: {
        slide: "slider 2s infinite",
      },
      backgroundImage: theme => ({
        'shop': "url('/src/images/shop.jpg')",
        'shopWithGradient': "url('/src/images/shopGradient.gif')",
      })
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus"],
      backgroundImage: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
};
