/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        funnel: '"Funnel Sans", sans-serif',
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "bounce-custom": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fluid: {
          "0%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
          },
        },
      },
      animation: {
        float: "float 1s ease-in-out infinite",
        "fade-left": "fade-left 0.5s ease-out forwards",
        "bounce-custom": "bounce-custom 1s ease-in-out infinite",
        fluid: "fluid 8s ease-in-out infinite",
      },
      boxShadow: {
        custom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        soft: "0 0 50px 0px rgba(0, 0, 0, 0.08)",
        harsh: "0 10px 25px rgba(0, 0, 0, 0.25)",
        "inner-custom": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        colored: "0 4px 14px 0 rgba(0, 118, 255, 0.39)",
      },
    },
  },
  plugins: [],
};
