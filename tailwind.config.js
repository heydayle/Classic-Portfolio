const color = require("./src/assets/colors");
module.exports = {
  prefix: "tw-",
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        bounceHorizontal: {
          "0%, 100%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fadeInTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20%)",
          },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInTop100: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOutTop100: {
          "0%": {
            opacity: 1,
            height: "20%",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            height: "0%",
            transform: "translateY(-100%)",
          },
        },
        fadeInbottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(2%)",
          },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        tiktok: {
          "from": {
            opacity: 0,
            transform: "scale(1) translate(10rem, -10rem)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(2) translate(-10rem, 10rem)",
          },
          "to": {
            opacity: 0,
            transform: "scale(1) translate(-50rem, 50rem)",
          },
        },
        tiktokIn: {
          "0%": {
            transform: "scale(1)",
            opacity: 0,
            transform: "translate(-1rem, 1rem)",
          },
          "100%": {
            transform: "scale(2)",
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        load: {
          "0%": {
            transform: "translate(-2rem, 0)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },
        flip: {
            'from': {
              transform: 'rotateY(180deg)'
            },
            'to': {
              transform: 'rotateY(0deg)'
            }
        },
        flipOut: {
            'from': {
              transform: 'rotateY(0deg)'
            },
            'to': {
              transform: 'rotateY(180deg)'
            }
        },
        fireFlyMove: {
          "from": {
            opacity: 1,
            transform: "scale(1) rotate(180deg) translate(0)",
          },
          "25%": {
            opacity: 1,
            transform: "scale(1) rotate(185deg) translate(0, 19px)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1) rotate(180deg) translate(-1rem, 10px)",
          },
          "75%": {
            opacity: 1,
            transform: "scale(1) rotate(170deg) translate(1rem, 0)",
          },
          "to": {
            opacity: 1,
            transform: "scale(1) rotate(180deg) translate(0)",
          },
        },
        waves: {
          "from": {
            opacity: 1,
            right: 0,
            transform: "scale(1)"
          },
          "50%": {
            opacity: 1,
            right: "600px",
            transform: "scale(2)"
          },
          "to": {
            opacity: 1,
            right: "2000px",
            transform: "scale(1)"
          },
        },
      },
      animation: {
        bounceIn: "bounceIn 500ms",
        bounceHorizontal: "bounceHorizontal 1s infinite",
        fadeInTop: "fadeInTop 300ms",
        fadeInTop100: "fadeInTop100 1000ms",
        fadeOutTop100: "fadeOutTop100 300ms",
        fadeInbottom: "fadeInbottom 300ms",
        tiktok: "tiktok 7s infinite",
        tiktokIn: "tiktokIn 1s",
        load: "load 1s",
        flipIn: "flip 700ms",
        flipOut: "flip 700ms",
        fireFlyMove: "fireFlyMove 6s infinite",
        waves: "waves 12s infinite"
      }, 
    },
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1336px",
      "2xl": "1920px",
    },
  },
  variants: {
    extend: {},
    colors: {
      ...color,
    },
  },
  plugins: [],
};
